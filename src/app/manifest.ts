import type { MetadataRoute } from "next";
import { absoluteUrl, site } from "@/lib/site";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: `${site.name}: voice journal & mood tracker`,
    short_name: site.name,
    description: site.description,
    start_url: absoluteUrl("/"),
    scope: absoluteUrl("/"),
    display: "standalone",
    background_color: "#f6f4fd",
    theme_color: "#8771d9",
    icons: [
      { src: absoluteUrl("/icon-192.png"), sizes: "192x192", type: "image/png" },
      { src: absoluteUrl("/icon-512.png"), sizes: "512x512", type: "image/png" },
      // full bleed, spark inside the safe zone: Android crops this to its own icon shape
      { src: absoluteUrl("/icon-maskable-512.png"), sizes: "512x512", type: "image/png", purpose: "maskable" },
    ],
  };
}
