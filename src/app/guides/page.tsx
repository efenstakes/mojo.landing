import type { Metadata } from "next";
import Link from "next/link";
import GuideCard from "@/components/guide-card";
import PageShell from "@/components/page-shell";
import JsonLd from "@/components/seo/json-ld";
import WaitlistForm from "@/components/waitlist-form";
import { categories, guides, guidesIn } from "@/content/guides";
import { absoluteUrl, site } from "@/lib/site";

const title = "Mental Health & Wellbeing Guides";
const description =
  "Practical guides to mental health at work and at uni, journaling, mood tracking, sleep and energy, plus honest round-ups of the best wellness apps.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "mental health guides",
    "wellbeing tips",
    "mental health at work",
    "student mental health",
    "journaling tips",
    "mood tracking",
    "best mental health apps",
  ],
  alternates: { canonical: absoluteUrl("/guides") },
  openGraph: { type: "website", url: absoluteUrl("/guides"), title: `${title} · Mojo`, description },
  twitter: { card: "summary_large_image", title: `${title} · Mojo`, description },
};

export default function GuidesPage() {
  return (
    <PageShell>
      <JsonLd
        data={[
          {
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: title,
            description,
            url: absoluteUrl("/guides"),
            isPartOf: { "@type": "WebSite", name: site.name, url: absoluteUrl("/") },
            mainEntity: {
              "@type": "ItemList",
              numberOfItems: guides.length,
              itemListElement: guides.map((g, i) => ({
                "@type": "ListItem",
                position: i + 1,
                url: absoluteUrl(`/guides/${g.slug}`),
                name: g.title,
              })),
            },
          },
          {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            itemListElement: [
              { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
              { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
            ],
          },
        ]}
      />

      <section className="px-4 pb-10 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">Mojo guides</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Feel better, <span className="text-gradient">one small habit at a time</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">{description}</p>
          <nav aria-label="Guide categories" className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((c) => (
              <Link
                key={c.name}
                href={`#${c.name.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                className="glass rounded-full px-4 py-2 text-sm font-semibold hover:bg-white"
              >
                {c.name}
              </Link>
            ))}
          </nav>
        </div>
      </section>

      {categories.map((c) => (
        <section
          key={c.name}
          id={c.name.toLowerCase().replace(/[^a-z]+/g, "-")}
          className="scroll-mt-28 px-4 py-10"
          aria-labelledby={`h-${c.name}`}
        >
          <div className="mx-auto max-w-6xl">
            <h2 id={`h-${c.name}`} className="text-2xl font-extrabold tracking-tight sm:text-3xl">
              {c.name}
            </h2>
            <p className="mt-1 text-ink-soft">{c.blurb}</p>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {guidesIn(c.name).map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      ))}

      <section className="px-4 py-16">
        <div className="glass mx-auto flex max-w-4xl flex-col items-center rounded-blob px-6 py-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Put it into practice in 30 seconds a day</h2>
          <p className="mt-3 max-w-xl text-ink-soft">
            Mojo turns a quick voice check-in into your mood, sleep and activity log, and shows you what lifts your
            energy. Get an email the day it launches.
          </p>
          <WaitlistForm source="guides-hub" className="mt-6" />
        </div>
      </section>
    </PageShell>
  );
}
