# Mojo landing page

Marketing site for **Mojo**, the voice-first wellness journal (mood, sleep,
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
  `privacyUrl` points at Mojo's privacy policy.
- Mockup numbers are illustrative example data, not real users.

## Design

Same family as the Heylixir site (frosted cards over a soft animated
background, big gradient headlines, alternating feature sections with icon
chips) but its own look: Mojo's violet → teal gradient instead of purple →
orange, Plus Jakarta Sans instead of Lato, and app-screen mockups instead of
photos.

## SEO & content

- **Guides** live in `src/content/guides-*.ts` (typed by `src/content/types.ts`). Add one by appending an
  object; it automatically gets a page at `/guides/<slug>/`, an OG image, sitemap entry, `llms.txt`
  entry, Article/Breadcrumb/FAQ JSON-LD and related-guide links. Keep `metaTitle` under ~60
  characters and `description` at 140-160. Bump `updated` when you edit a guide.
- `sitemap.xml`, `robots.txt`, `manifest.webmanifest` and `llms.txt` are generated from the same data.
- Canonical URLs come from `NEXT_PUBLIC_SITE_URL` (default `https://heylixir.com/mojo`), whose path
  is also the `basePath`. URLs use trailing slashes.

## Environment variables

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Public URL, e.g. `https://heylixir.com/mojo` (sets basePath and canonicals) |
| `NEXT_PUBLIC_MOJO_API_URL` | Mojo API origin for the launch waitlist (`notifyOnLaunch`). Without it the form falls back to email. |
| `NEXT_PUBLIC_APP_STORE_URL`, `NEXT_PUBLIC_PLAY_STORE_URL` | Store links. While both are unset the site shows the waitlist form. |
| `NEXT_PUBLIC_GA_ID` | GA4 measurement ID; waitlist sign-ups send a `generate_lead` event |
| `NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION`, `NEXT_PUBLIC_BING_SITE_VERIFICATION` | Search Console / Bing Webmaster verification tags |
| `NEXT_PUBLIC_TWITTER_HANDLE` | `@handle` for Twitter/X cards |

## Builds and deploy

- `npm run build && npm start` runs it as a Node server (Cache Components, Proxy returns real 404s).
- `npm run build:static` writes a static export to `out/` for static hosting. `deploy/apache.htaccess`
  is the Apache config for it.
- The deploy pipeline (static export → FTP to `heylixir.com/mojo`) is in
  `.github/workflows-disabled/deploy.yml` and is **disabled**; see the README next to it to enable it.
