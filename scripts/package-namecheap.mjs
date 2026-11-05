#!/usr/bin/env node
/**
 * Builds the MOJO website and packages it as a zip for Namecheap, ready to upload with cPanel.
 *
 * Static (default): plain files for any Apache host, extracted into public_html/mojo.
 *   npm run package:namecheap                  build + zip -> dist/mojo-website-YYYY-MM-DD.zip
 *   npm run package:namecheap -- --skip-build  zip the existing out/ folder
 *   npm run package:namecheap -- --no-zip      build and prepare out/ only (deploy workflow)
 *
 * Node (--node): a self-contained Next.js server for cPanel's "Setup Node.js App". Keeps every
 * server feature (real 404s via the proxy, on-demand rendering). Same steps as a Next standalone
 * deploy: clean .next, build with output "standalone", copy .next/static and public into
 * .next/standalone, zip it.
 *   npm run package:namecheap:node             build + zip -> dist/mojo-website-node-YYYY-MM-DD.zip
 *
 * Works on macOS, Linux and Windows; needs Node 22+, no extra packages.
 */
import { spawnSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import zlib from "node:zlib";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outDir = path.join(root, "out");
const distDir = path.join(root, "dist");
const args = new Set(process.argv.slice(2));
const nodeMode = args.has("--node");
const standaloneDir = path.join(root, ".next", "standalone");

const fail = (msg) => {
  console.error(`\n✖ ${msg}\n`);
  process.exit(1);
};

// ---------------------------------------------------------------- site URL (same source as the build)
function readEnvFile(file) {
  const env = {};
  if (!fs.existsSync(file)) return env;
  for (const line of fs.readFileSync(file, "utf8").split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Z0-9_]+)\s*=\s*(.*?)\s*$/);
    if (m) env[m[1]] = m[2].replace(/^["']|["']$/g, "");
  }
  return env;
}
const fileEnv = { ...readEnvFile(path.join(root, ".env.production")), ...readEnvFile(path.join(root, ".env.production.local")) };
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || fileEnv.NEXT_PUBLIC_SITE_URL || "https://heylixir.com/mojo";
let basePath;
try {
  basePath = new URL(siteUrl).pathname.replace(/\/+$/, "");
} catch {
  fail(`NEXT_PUBLIC_SITE_URL is not a valid URL: ${siteUrl}`);
}

// ---------------------------------------------------------------- 1. build
if (!args.has("--skip-build")) {
  // a clean build, so nothing stale from an earlier build ends up in the package
  fs.rmSync(path.join(root, ".next"), { recursive: true, force: true });
  if (!nodeMode) fs.rmSync(outDir, { recursive: true, force: true });

  console.log(`▶ Building ${nodeMode ? "Node.js server" : "static site"} for ${siteUrl} …`);
  const npx = process.platform === "win32" ? "npx.cmd" : "npx";
  const result = spawnSync(npx, ["next", "build"], {
    cwd: root,
    stdio: "inherit",
    env: { ...process.env, NEXT_OUTPUT: nodeMode ? "standalone" : "export" },
    shell: process.platform === "win32",
  });
  if (result.status !== 0) fail("The build failed (see the output above). Nothing was packaged.");
}

if (nodeMode) {
  packageNodeServer();
  process.exit(0);
}
if (!fs.existsSync(outDir)) fail("No out/ folder. Run without --skip-build.");

// ---------------------------------------------------------------- 2. Apache config
const template = fs.readFileSync(path.join(root, "deploy", "apache.htaccess"), "utf8");
fs.writeFileSync(path.join(outDir, ".htaccess"), template.replaceAll("__BASE_PATH__", basePath));

// ---------------------------------------------------------------- 3. sanity checks
const must = ["index.html", "404.html", "sitemap.xml", "robots.txt", ".htaccess"];
for (const f of must) if (!fs.existsSync(path.join(outDir, f))) fail(`out/${f} is missing; the export looks incomplete.`);
const guidesDir = path.join(outDir, "guides");
const guideCount = fs.existsSync(guidesDir)
  ? fs.readdirSync(guidesDir).filter((d) => fs.existsSync(path.join(guidesDir, d, "index.html"))).length
  : 0;
if (guideCount < 15) fail(`Only ${guideCount} guide pages were exported; expected 15 or more.`);
const indexHtml = fs.readFileSync(path.join(outDir, "index.html"), "utf8");
if (!indexHtml.includes(`${basePath}/_next/`)) {
  fail(`index.html doesn't reference ${basePath}/_next/: the build used a different site URL than ${siteUrl}.`);
}
console.log(`✔ Export looks good: ${guideCount} guides, base path "${basePath || "/"}", .htaccess added`);

if (args.has("--no-zip")) process.exit(0);

// ---------------------------------------------------------------- 4. zip (no dependencies)
function listFiles(dir, rel = "") {
  const files = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const abs = path.join(dir, entry.name);
    const relPath = rel ? `${rel}/${entry.name}` : entry.name;
    // follow symlinks, so the zip is self-contained
    const stat = entry.isSymbolicLink() ? fs.statSync(abs) : entry;
    if (stat.isDirectory()) files.push(...listFiles(abs, relPath));
    else if (stat.isFile()) files.push({ abs, rel: relPath });
  }
  return files.sort((a, b) => a.rel.localeCompare(b.rel));
}

function dosDateTime(date) {
  const time = (date.getHours() << 11) | (date.getMinutes() << 5) | Math.floor(date.getSeconds() / 2);
  const day = ((date.getFullYear() - 1980) << 9) | ((date.getMonth() + 1) << 5) | date.getDate();
  return { time, day };
}

function writeZip(files, zipPath) {
  const chunks = [];
  const central = [];
  let offset = 0;
  const { time, day } = dosDateTime(new Date());

  for (const file of files) {
    const data = fs.readFileSync(file.abs);
    const name = Buffer.from(file.rel, "utf8");
    const deflated = zlib.deflateRawSync(data, { level: 9 });
    const useDeflate = deflated.length < data.length;
    const body = useDeflate ? deflated : data;
    const crc = zlib.crc32(data) >>> 0;

    const local = Buffer.alloc(30);
    local.writeUInt32LE(0x04034b50, 0);
    local.writeUInt16LE(20, 4); // version needed
    local.writeUInt16LE(0x0800, 6); // UTF-8 names
    local.writeUInt16LE(useDeflate ? 8 : 0, 8);
    local.writeUInt16LE(time, 10);
    local.writeUInt16LE(day, 12);
    local.writeUInt32LE(crc, 14);
    local.writeUInt32LE(body.length, 18);
    local.writeUInt32LE(data.length, 22);
    local.writeUInt16LE(name.length, 26);
    local.writeUInt16LE(0, 28);
    chunks.push(local, name, body);

    const entry = Buffer.alloc(46);
    entry.writeUInt32LE(0x02014b50, 0);
    entry.writeUInt16LE(0x031e, 4); // made by: Unix, so permissions below apply
    entry.writeUInt16LE(20, 6);
    entry.writeUInt16LE(0x0800, 8);
    entry.writeUInt16LE(useDeflate ? 8 : 0, 10);
    entry.writeUInt16LE(time, 12);
    entry.writeUInt16LE(day, 14);
    entry.writeUInt32LE(crc, 16);
    entry.writeUInt32LE(body.length, 20);
    entry.writeUInt32LE(data.length, 24);
    entry.writeUInt16LE(name.length, 28);
    entry.writeUInt32LE(((0o100644 << 16) >>> 0), 38); // rw-r--r-- files
    entry.writeUInt32LE(offset, 42);
    central.push(entry, name);

    offset += local.length + name.length + body.length;
  }

  const centralBuf = Buffer.concat(central);
  const end = Buffer.alloc(22);
  end.writeUInt32LE(0x06054b50, 0);
  end.writeUInt16LE(files.length, 8);
  end.writeUInt16LE(files.length, 10);
  end.writeUInt32LE(centralBuf.length, 12);
  end.writeUInt32LE(offset, 16);
  if (files.length > 0xffff || offset > 0xffffffff) fail("The site is too large for a standard zip.");

  fs.mkdirSync(path.dirname(zipPath), { recursive: true });
  fs.writeFileSync(zipPath, Buffer.concat([...chunks, centralBuf, end]));
}

const stamp = new Date().toISOString().slice(0, 10);
const files = listFiles(outDir);
const zipPath = path.join(distDir, `mojo-website-${stamp}.zip`);
writeZip(files, zipPath);
const mb = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(1);
const folder = basePath ? `public_html${basePath}` : "public_html";

console.log(`
✔ Packaged ${files.length} files → ${path.relative(root, zipPath)} (${mb} MB)

Upload to Namecheap (cPanel):
  1. cPanel → File Manager → open ${folder}/ (create the folder if it doesn't exist).
  2. Turn on "Show Hidden Files" (Settings, top right) so you can see .htaccess.
  3. Optional: delete the old files in ${folder}/ so removed pages don't linger.
  4. Upload → choose ${path.basename(zipPath)} → wait for it to finish.
  5. Select the zip → Extract → into ${folder}/ → overwrite when asked.
  6. Delete the zip, then open ${siteUrl}/ to check.
`);

// ---------------------------------------------------------------- Node.js server package
function packageNodeServer() {
  if (!fs.existsSync(path.join(standaloneDir, "server.js"))) {
    fail("No .next/standalone/server.js. Run without --skip-build (the build must use NEXT_OUTPUT=standalone).");
  }
  // standalone leaves out static assets and public/: copy them in (same as `cp -r` in a postbuild)
  fs.cpSync(path.join(root, ".next", "static"), path.join(standaloneDir, ".next", "static"), { recursive: true });
  if (fs.existsSync(path.join(root, "public"))) {
    fs.cpSync(path.join(root, "public"), path.join(standaloneDir, "public"), { recursive: true });
  }
  // the server reads the site URL etc. at runtime too
  for (const f of [".env.production"]) {
    if (fs.existsSync(path.join(root, f))) fs.copyFileSync(path.join(root, f), path.join(standaloneDir, f));
  }
  if (!fs.existsSync(path.join(standaloneDir, ".next", "static"))) fail("Copying .next/static failed.");
  console.log("✔ Standalone server ready: server.js + .next/static + public");

  if (args.has("--no-zip")) return;

  const stamp = new Date().toISOString().slice(0, 10);
  const zipPath = path.join(distDir, `mojo-website-node-${stamp}.zip`);
  const files = listFiles(standaloneDir);
  writeZip(files, zipPath);
  const mb = (fs.statSync(zipPath).size / 1024 / 1024).toFixed(1);

  console.log(`
✔ Packaged ${files.length} files → ${path.relative(root, zipPath)} (${mb} MB)

Deploy on Namecheap as a Node.js app (cPanel → Setup Node.js App):
  1. Create Application: Node.js version 20 or newer, Application mode Production,
     Application root e.g. mojo-website, Application URL ${siteUrl.replace(/^https?:\/\//, "")},
     Application startup file server.js. Save.
  2. File Manager → open the application root folder → Upload ${path.basename(zipPath)} → Extract → overwrite.
  3. Back in Setup Node.js App → Restart the app, then open ${siteUrl}/ to check.
  (No "Run NPM Install" needed: the zip already includes the node_modules the server uses.)
`);
}
