type Gtag = (command: "event", name: string, params?: Record<string, unknown>) => void;

/** Sends a GA4 event when Google Analytics is configured (NEXT_PUBLIC_GA_ID); a no-op otherwise. */
export function track(name: string, params?: Record<string, unknown>) {
  const gtag = (globalThis as { gtag?: Gtag }).gtag;
  if (typeof gtag === "function") gtag("event", name, params);
}
