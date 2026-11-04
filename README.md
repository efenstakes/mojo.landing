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
