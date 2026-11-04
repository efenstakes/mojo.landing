import { site } from "@/lib/site";

export const launchAt = new Date(site.launchDate);

/** "1 December" (UTC, so it reads the same everywhere). */
export const launchLabel = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", timeZone: "UTC" }).format(
  launchAt,
);

/** True once store links exist. Until then every "get the app" action opens the waitlist. */
export const storesLive = Boolean(site.appStoreUrl || site.playStoreUrl);

export const WAITLIST_EVENT = "mojo:waitlist";

/** Opens the shared waitlist dialog (client only). `source` tags the conversion event. */
export function openWaitlist(source: string) {
  window.dispatchEvent(new CustomEvent(WAITLIST_EVENT, { detail: { source } }));
}
