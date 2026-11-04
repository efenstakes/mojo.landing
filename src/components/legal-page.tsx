import PageShell from "@/components/page-shell";

type Props = { title: string; updated: string; intro: string; children: React.ReactNode };

/** Plain-language policy page layout. Headings are h2; body copy uses the `legal` prose styles. */
export default function LegalPage({ title, updated, intro, children }: Props) {
  return (
    <PageShell>
      <article className="px-4 pb-16 pt-28 sm:pt-36">
        <div className="mx-auto max-w-3xl">
          <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          <p className="mt-3 text-sm text-ink-soft">
            Last updated <time dateTime={updated}>{updated}</time>
          </p>
          <p className="mt-6 text-lg leading-relaxed">{intro}</p>
          <div className="mt-8 space-y-4 leading-relaxed text-ink/90 [&_h2]:mt-10 [&_h2]:text-2xl [&_h2]:font-extrabold [&_h2]:text-ink [&_ul]:list-disc [&_ul]:space-y-1.5 [&_ul]:pl-6 [&_a]:font-semibold [&_a]:text-violet-deep [&_a]:underline">
            {children}
          </div>
        </div>
      </article>
    </PageShell>
  );
}
