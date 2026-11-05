# MOJO landing page

Marketing site for **MOJO**, the voice-first wellness journal (mood, sleep,
activities and Halo AI insights). Built with Next.js 16 (App Router, Cache
Components) and Tailwind CSS 4. Fully static.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # production build
npm run lint
```

## Where things live

| Path | What |
|---|---|
| `src/lib/site.ts` | All links and contact details: store URLs, privacy/terms, support email |
| `src/app/globals.css` | Brand tokens (colours, font, radii, animations) and the `glass`, `text-gradient`, `bg-gradient-brand` utilities |
| `src/app/page.tsx` | The page, assembled from sections |
| `src/components/sections/` | Hero, how it works, feature sections, community & privacy, FAQ, call to action |
| `src/components/mockups/` | The phone frame and app-screen mockups (voice check-in, journal, mood & sleep, activities, energy score) |

## Before launch

- Set `appStoreUrl` / `playStoreUrl` in `src/lib/site.ts`. Until then the store
  buttons say "Coming soon" and don't link anywhere.
- Set `termsUrl` (the Terms link is hidden while it's empty) and confirm
  `privacyUrl` points at MOJO's privacy policy.
- Mockup numbers are illustrative example data, not real users.

## Design

Same family as the Heylixir site (frosted cards over a soft animated
background, big gradient headlines, alternating feature sections with icon
chips) but its own look: MOJO's violet → teal gradient instead of purple →
orange, Plus Jakarta Sans instead of Lato, and app-screen mockups instead of
photos.

## SEO & content

- **Guides** live in `src/content/guides-*.ts` (typed by `src/content/types.ts`). Add one by appending an
  object; it automatically gets a page at `/guides/<slug>/`, an OG image, sitemap entry, `llms.txt`
  entry, Article/Breadcrumb/FAQ JSON-LD and related-guide links. Keep `metaTitle` under ~60
  characters and `description` at 140-160. Bump `updated` when you edit a guide.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` and `llms.txt` are generated from the same data.
- Canonical URLs come from `NEXT_PUBLIC_SITE_URL` (default `https://heylixir.com/mojo`), whose path
  is also the `basePath`. URLs have no trailing slash.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL, e.g. `https://heylixir.com/mojo` (sets basePath and canonicals) |
| `NEXT_PUBLIC_MOJO_API_URL` | MOJO API origin for the launch waitlist (`POST /v1/launch-notifications`). Without it the form falls back to email. |
| `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL` | Store links. While both are unset the site shows the waitlist form. |
| `NEXT_PUBLIC_LAUNCH_DATE` | Launch moment for the countdown, ISO 8601 (default `2026-12-01T00:00:00Z`) |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID; waitlist sign-ups send a `generate_lead` event |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Search Console / Bing Webmaster verification tags |
| `NEXT_PUBLIC_TWITTER_HANDLE` | `@handle` for Twitter/X cards |

## Builds and deploy

```bash
npm run build
```

`build` deletes `.next` and runs `next build --webpack` with `output: 'standalone'` (see
`next.config.js`). `postbuild` then copies `.next/static` and `public` into `.next/standalone` and
zips it as **`deploy.zip`** in the project root, so no files need moving by hand.
`outputFileTracingRoot` keeps the standalone folder flat (`server.js` at the top), even when the
project sits inside another folder that has its own lockfile.

Deploy `deploy.zip` on Namecheap as a Node.js app (cPanel → Setup Node.js App):

1. Create the app: Node.js 20+, mode Production, application root e.g. `mojo-website`,
   application URL `heylixir.com/mojo`, startup file `server.js`.
2. File Manager → application root → upload `deploy.zip` → Extract (overwrite).
3. Restart the app in Setup Node.js App. No "Run NPM Install" needed: the zip includes the
   `node_modules` the server uses.

`npm run dev` runs locally (with a 2 GB memory cap, as on the server). Tailwind runs through PostCSS
(`postcss.config.mjs`), so it works with both webpack and Turbopack. The build scripts use `rm`,
`cp` and `zip`, so run them on macOS, Linux or WSL.

The disabled GitHub workflow (`.github/workflows-disabled/deploy.yml`) runs the same `npm run build`
and keeps `deploy.zip` as a download; see the README next to it.
