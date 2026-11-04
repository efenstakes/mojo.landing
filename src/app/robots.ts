import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}

/**
 * When this app is served under a path (heylixir.com/mojo), crawlers read robots.txt from the
 * domain root, which the parent site owns. Add `Sitemap: <this sitemap URL>` there too.
 */
export default function robots(): MetadataRoute.Robots {
  return {
    // The unsubscribe page is kept out of search with a noindex tag, which crawlers must be
    // allowed to fetch to see, so nothing is disallowed here.
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
