import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import GuideCard from "@/components/guide-card";
import { CheckIcon, PlusIcon } from "@/components/icons";
import PageShell from "@/components/page-shell";
import LaunchCountdown from "@/components/launch-countdown";
import JsonLd from "@/components/seo/json-ld";
import StoreButtons from "@/components/store-buttons";
import WaitlistForm from "@/components/waitlist-form";
import { getGuide, guides, readingMinutes, relatedGuides, sectionId } from "@/content/guides";
import { absoluteUrl, site } from "@/lib/site";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export async function generateMetadata({ params }: PageProps<"/guides/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) return {};
  const url = absoluteUrl(`/guides/${guide.slug}`);
  return {
    title: guide.metaTitle,
    description: guide.description,
    keywords: guide.keywords,
    alternates: { canonical: url },
    authors: [{ name: "The Mojo team", url: absoluteUrl("/") }],
    openGraph: {
      type: "article",
      url,
      title: guide.metaTitle,
      description: guide.description,
      siteName: site.name,
      publishedTime: guide.published,
      modifiedTime: guide.updated,
      section: guide.category,
      tags: guide.keywords,
    },
    twitter: { card: "summary_large_image", title: guide.metaTitle, description: guide.description },
  };
}

const dateFmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric", timeZone: "UTC" });

export default async function GuidePage({ params }: PageProps<"/guides/[slug]">) {
  const { slug } = await params;
  const guide = getGuide(slug);
  if (!guide) notFound();

  const url = absoluteUrl(`/guides/${guide.slug}`);
  const related = relatedGuides(guide);
  const minutes = readingMinutes(guide);
  const toc = guide.sections.map((s) => ({ id: sectionId(s.heading), heading: s.heading }));
  const picksIndex = guide.apps ? guide.sections.findIndex((s) => s.heading === "Our picks") : -1;

  const publisher = {
    "@type": "Organization",
    name: site.legalName,
    url: absoluteUrl("/"),
    logo: { "@type": "ImageObject", url: absoluteUrl("/icon-512.png") },
  };

  const schema: Record<string, unknown>[] = [
    {
      "@context": "https://schema.org",
      "@type": "Article",
      headline: guide.title,
      description: guide.description,
      keywords: guide.keywords.join(", "),
      articleSection: guide.category,
      datePublished: guide.published,
      dateModified: guide.updated,
      mainEntityOfPage: { "@type": "WebPage", "@id": url },
      url,
      image: absoluteUrl(`/guides/${guide.slug}/opengraph-image`),
      author: { "@type": "Organization", name: "The Mojo team", url: absoluteUrl("/") },
      publisher,
      inLanguage: "en",
      timeRequired: `PT${minutes}M`,
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        { "@type": "ListItem", position: 1, name: "Home", item: absoluteUrl("/") },
        { "@type": "ListItem", position: 2, name: "Guides", item: absoluteUrl("/guides") },
        { "@type": "ListItem", position: 3, name: guide.title, item: url },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: guide.faqs.map((f) => ({
        "@type": "Question",
        name: f.q,
        acceptedAnswer: { "@type": "Answer", text: f.a },
      })),
    },
  ];
  if (guide.apps) {
    schema.push({
      "@context": "https://schema.org",
      "@type": "ItemList",
      name: guide.title,
      itemListOrder: "https://schema.org/ItemListOrderAscending",
      numberOfItems: guide.apps.length,
      itemListElement: guide.apps.map((a, i) => ({ "@type": "ListItem", position: i + 1, name: a.name })),
    });
  }

  return (
    <PageShell>
      <JsonLd data={schema} />

      <article className="px-4 pb-10 pt-28 sm:pt-36">
        <div className="mx-auto max-w-3xl">
          <nav aria-label="Breadcrumb" className="text-sm text-ink-soft">
            <ol className="flex flex-wrap items-center gap-1.5">
              <li>
                <Link href="/" className="hover:text-ink">
                  Home
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li>
                <Link href="/guides" className="hover:text-ink">
                  Guides
                </Link>
              </li>
              <li aria-hidden>/</li>
              <li className="font-semibold text-ink">{guide.category}</li>
            </ol>
          </nav>

          <header className="mt-6">
            <h1 className="text-4xl font-extrabold leading-[1.1] tracking-tight sm:text-5xl">{guide.title}</h1>
            <p className="mt-4 text-sm text-ink-soft">
              By the Mojo team · Updated <time dateTime={guide.updated}>{dateFmt.format(new Date(guide.updated))}</time>{" "}
              · {minutes} min read
            </p>
          </header>

          {/* The short answer: what most searchers came for, stated first. */}
          <div className="glass mt-8 rounded-3xl p-6 sm:p-8">
            <p className="text-xs font-bold uppercase tracking-widest text-teal-deep">The short answer</p>
            <p className="mt-3 text-lg leading-relaxed">{guide.intro}</p>
          </div>

          <nav aria-label="On this page" className="mt-8 rounded-3xl border border-violet/15 p-6">
            <p className="font-bold">On this page</p>
            <ol className="mt-3 list-decimal space-y-1.5 pl-5 text-ink-soft marker:text-violet-deep">
              {toc.map((t) => (
                <li key={t.id}>
                  <a href={`#${t.id}`} className="hover:text-ink">
                    {t.heading}
                  </a>
                </li>
              ))}
              <li>
                <a href="#faq" className="hover:text-ink">
                  Frequently asked questions
                </a>
              </li>
            </ol>
          </nav>

          <div className="mt-10 space-y-10">
            {guide.sections.map((s, i) => (
              <section key={s.heading} id={toc[i].id} className="scroll-mt-28">
                <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">{s.heading}</h2>
                {s.body.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-lg leading-relaxed text-ink/90">
                    {p}
                  </p>
                ))}
                {s.bullets && (
                  <ul className="mt-4 space-y-2.5">
                    {s.bullets.map((b) => (
                      <li key={b} className="flex gap-3 text-lg leading-relaxed text-ink/90">
                        <CheckIcon size={20} className="mt-1 shrink-0 text-teal-deep" />
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                )}

                {i === picksIndex && guide.apps && (
                  <ol className="mt-6 space-y-4">
                    {guide.apps.map((a, n) => (
                      <li
                        key={a.name}
                        className={`rounded-3xl p-6 ${a.isMojo ? "bg-gradient-brand text-white" : "glass"}`}
                      >
                        <h3 className="flex flex-wrap items-baseline gap-x-3 text-xl font-extrabold">
                          <span>
                            {n + 1}. {a.name}
                          </span>
                          <span className={`text-sm font-semibold ${a.isMojo ? "text-white/85" : "text-teal-deep"}`}>
                            Best for: {a.bestFor}
                          </span>
                        </h3>
                        <p className={`mt-2 leading-relaxed ${a.isMojo ? "text-white/95" : "text-ink-soft"}`}>
                          {a.summary}
                        </p>
                        {a.isMojo && <WaitlistForm source={`guide-pick:${guide.slug}`} tone="light" className="mt-4" />}
                      </li>
                    ))}
                  </ol>
                )}
              </section>
            ))}
          </div>

          <aside className="glass mt-12 rounded-3xl p-6 sm:p-8" aria-labelledby="takeaways">
            <h2 id="takeaways" className="text-xl font-extrabold">
              Key takeaways
            </h2>
            <ul className="mt-4 space-y-2.5">
              {guide.takeaways.map((t) => (
                <li key={t} className="flex gap-3 leading-relaxed">
                  <CheckIcon size={20} className="mt-0.5 shrink-0 text-teal-deep" />
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </aside>

          <section id="faq" className="mt-12 scroll-mt-28">
            <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl">Frequently asked questions</h2>
            <div className="mt-6 space-y-3">
              {guide.faqs.map(({ q, a }) => (
                <details key={q} className="glass group rounded-3xl px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                    <h3>{q}</h3>
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/12 text-violet-deep transition group-open:rotate-45">
                      <PlusIcon size={18} />
                    </span>
                  </summary>
                  <p className="mt-3 leading-relaxed text-ink-soft">{a}</p>
                </details>
              ))}
            </div>
          </section>

          <p className="mt-10 text-sm leading-relaxed text-ink-soft">
            This guide is general wellbeing information, not medical advice. If you&apos;re worried about your mental
            health, talk to a doctor or mental health professional.
          </p>
        </div>
      </article>

      <section className="px-4 py-12">
        <div className="relative mx-auto max-w-4xl overflow-hidden rounded-blob bg-gradient-brand px-6 py-12 text-center text-white sm:px-12">
          <div aria-hidden className="absolute -right-16 -top-20 h-64 w-64 rounded-full bg-white/15 blur-2xl" />
          <h2 className="relative text-3xl font-extrabold tracking-tight sm:text-4xl">
            See your own patterns in 30 seconds a day
          </h2>
          <p className="relative mx-auto mt-3 max-w-xl text-white/90">
            Tell Mojo how your day went. It logs your mood, sleep and activity and shows you what lifts your energy.
          </p>
          <div className="relative mt-6 flex flex-col items-center gap-4">
            <LaunchCountdown tone="light" className="flex flex-col items-center" />
            <WaitlistForm source={`guide:${guide.slug}`} tone="light" />
            <StoreButtons tone="light" className="justify-center" />
          </div>
        </div>
      </section>

      {related.length > 0 && (
        <section className="px-4 pb-16 pt-6" aria-labelledby="related">
          <div className="mx-auto max-w-6xl">
            <h2 id="related" className="text-2xl font-extrabold tracking-tight">
              Keep reading
            </h2>
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((g) => (
                <GuideCard key={g.slug} guide={g} />
              ))}
            </div>
          </div>
        </section>
      )}
    </PageShell>
  );
}
