/**
 * Every external link, URL and contact detail on the site, in one place.
 *
 * NEXT_PUBLIC_SITE_URL is the public address of this site, including any
 * sub-path. It defaults to https://heylixir.com/mojo -- the address the MOJO
 * API already uses in its emails (privacy, unsubscribe). next.config.ts
 * derives `basePath` from the same value, so canonical URLs, the sitemap and
 * routing always agree.
 */
const rawSiteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://heylixir.com/mojo";

/** Absolute site URL without a trailing slash, e.g. https://heylixir.com/mojo */
export const siteUrl = rawSiteUrl.replace(/\/+$/, "");

/**
 * Absolute URL for a path on this site. Pages get a trailing slash to match `trailingSlash: true`
 * (so canonicals, sitemap and the served URL agree); files keep theirs as-is.
 *   absoluteUrl("/guides")      -> https://heylixir.com/mojo/guides/
 *   absoluteUrl("/sitemap.xml") -> https://heylixir.com/mojo/sitemap.xml
 */
export function absoluteUrl(path = "/"): string {
  const p = path.startsWith("/") ? path : `/${path}`;
  const isFile = /\.[a-z0-9]+$/i.test(p) || p.endsWith("/opengraph-image");
  return `${siteUrl}${p}${isFile || p.endsWith("/") ? "" : "/"}`;
}

export const site = {
  name: "MOJO",
  legalName: "MOJO by Heylixir",
  url: siteUrl,
  tagline: "Talk it out. Feel it out. Find your MOJO.",
  description:
    "MOJO is a voice journal and mood tracker. Say how your day went and MOJO logs your mood, sleep and activity, then shows you what lifts your energy.",
  /** Store links. Empty until listed: store buttons then show "Coming soon" and the waitlist leads instead. */
  appStoreUrl: process.env.NEXT_PUBLIC_APP_STORE_URL ?? "",
  playStoreUrl: process.env.NEXT_PUBLIC_PLAY_STORE_URL ?? "",
  /** The MOJO API (GraphQL at `${apiUrl}/api`), used for waitlist signups and unsubscribes. */
  apiUrl: (process.env.NEXT_PUBLIC_MOJO_API_URL ?? "").replace(/\/+$/, ""),
  /** Public launch moment (ISO 8601). Drives the countdown and the pre-launch waitlist UI. */
  launchDate: process.env.NEXT_PUBLIC_LAUNCH_DATE ?? "2026-12-01T00:00:00Z",
  supportEmail: "mojo@heylixir.com",
  twitterHandle: process.env.NEXT_PUBLIC_TWITTER_HANDLE ?? "",
  /** Google Analytics 4 measurement ID (G-XXXX). Analytics only loads when this is set. */
  gaId: process.env.NEXT_PUBLIC_GA_ID ?? "",
  /** Search Console / Bing verification tokens (meta tags), only rendered when set. */
  googleVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION ?? "",
  bingVerification: process.env.NEXT_PUBLIC_BING_SITE_VERIFICATION ?? "",
} as const;

/** On-page sections of the home page. Use `homeLink` for these from other pages. */
export const navLinks = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#halo", label: "Halo AI" },
  { href: "/guides", label: "Guides" },
  { href: "/about", label: "About" },
] as const;
