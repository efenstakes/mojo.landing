/**
 * Every external link and contact detail on the site, in one place.
 *
 * Store links are empty until Mojo is listed: buttons then render as
 * "Coming soon" instead of pointing somewhere wrong. Privacy and support
 * match what the Mojo API already uses (src/utils/constants.ts there).
 */
export const site = {
  name: "Mojo",
  url: "https://heylixir.com/mojo",
  tagline: "Talk it out. Feel it out. Find your mojo.",
  description:
    "Mojo is a wellness journal you can just talk to. Say how your day went and Mojo logs your mood, sleep and activity, then shows you what lifts your energy.",
  appStoreUrl: "",
  playStoreUrl: "",
  privacyUrl: "https://heylixir.com/mojo/privacy",
  termsUrl: "",
  supportEmail: "mojo@heylixir.com",
} as const;

export const navLinks = [
  { href: "#how-it-works", label: "How it works" },
  { href: "#features", label: "Features" },
  { href: "#halo", label: "Halo AI" },
  { href: "#faq", label: "FAQ" },
] as const;
