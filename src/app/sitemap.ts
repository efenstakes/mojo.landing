import type { MetadataRoute } from "next";
import { guides } from "@/content/guides";
import { absoluteUrl } from "@/lib/site";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}

const latestGuideUpdate = guides.map((g) => g.updated).sort().at(-1);

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: absoluteUrl("/"), lastModified: latestGuideUpdate, changeFrequency: "weekly", priority: 1 },
    { url: absoluteUrl("/guides"), lastModified: latestGuideUpdate, changeFrequency: "weekly", priority: 0.9 },
    ...guides.map((g) => ({
      url: absoluteUrl(`/guides/${g.slug}`),
      lastModified: g.updated,
      changeFrequency: "monthly" as const,
      priority: g.category === "App guides" ? 0.85 : 0.8,
    })),
    { url: absoluteUrl("/privacy"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/terms"), changeFrequency: "yearly", priority: 0.2 },
    { url: absoluteUrl("/delete-account"), changeFrequency: "yearly", priority: 0.2 },
  ];
}
