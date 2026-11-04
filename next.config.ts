import type { NextConfig } from "next";

// The site's public URL (see src/lib/site.ts). Its path becomes basePath, so
// https://heylixir.com/mojo serves this app under /mojo, and a bare domain
// (e.g. https://getmojo.app) serves it at the root.
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://heylixir.com/mojo";
const basePath = new URL(siteUrl).pathname.replace(/\/+$/, "");

// NEXT_OUTPUT=export builds plain static files into out/ for static hosting (heylixir.com is
// served from Namecheap). Static export can't use Partial Prerendering, so Cache Components is
// switched off for that build; every page here is static content either way.
const staticExport = process.env.NEXT_OUTPUT === "export";

const nextConfig: NextConfig = {
  basePath,
  // Directory-style URLs (/guides/x/) everywhere, matching how static hosts serve index.html.
  trailingSlash: true,
  ...(staticExport
    ? { output: "export" as const, images: { unoptimized: true } }
    : { cacheComponents: true, partialPrefetching: true }),
  reactCompiler: true,
  poweredByHeader: false,
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
