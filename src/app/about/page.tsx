import type { Metadata } from "next";
import Link from "next/link";
import { HeartIcon, LockIcon, MicIcon, SparkIcon } from "@/components/icons";
import LaunchCountdown from "@/components/launch-countdown";
import PageShell from "@/components/page-shell";
import JsonLd from "@/components/seo/json-ld";
import WaitlistForm from "@/components/waitlist-form";
import { launchLabel } from "@/lib/launch";
import { absoluteUrl, site } from "@/lib/site";

const title = "About MOJO";
const description =
  "MOJO is a voice-first wellness journal from the team behind Heylixir. Why we built it, what we believe about privacy and wellbeing, and how to reach us.";

export const metadata: Metadata = {
  title: { absolute: "About MOJO: The Voice Journal From the Heylixir Team" },
  description,
  alternates: { canonical: absoluteUrl("/about") },
  openGraph: { type: "website", url: absoluteUrl("/about"), title: `${title} · MOJO`, description },
  twitter: { card: "summary_large_image", title: `${title} · MOJO`, description },
};

const beliefs = [
  {
    Icon: MicIcon,
    title: "Talking is easier than typing",
    body: "Most people quit journaling because of the blank page. Saying how your day went takes 30 seconds, so it actually happens on busy days, which are the days that matter most.",
  },
  {
    Icon: SparkIcon,
    title: "Patterns beat willpower",
    body: "You can't fix what you can't see. Once your mood, sleep and activity sit side by side, the small habits that lift your energy become obvious.",
  },
  {
    Icon: LockIcon,
    title: "Your journal is yours",
    body: "Entries are private by default. We don't sell personal data or use your journal for advertising, and you can export or delete everything at any time.",
  },
  {
    Icon: HeartIcon,
    title: "Wellbeing, not diagnosis",
    body: "MOJO is for everyday wellbeing. It isn't a medical device, and we're clear about pointing people to professional help when they need it.",
  },
];

export default function AboutPage() {
  return (
    <PageShell>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "AboutPage",
          name: title,
          description,
          url: absoluteUrl("/about"),
          mainEntity: {
            "@type": "Organization",
            name: site.legalName,
            url: absoluteUrl("/"),
            email: site.supportEmail,
            logo: absoluteUrl("/icon-512.png"),
          },
        }}
      />

      <section className="px-4 pb-10 pt-32 sm:pt-40">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">About</p>
          <h1 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-6xl">
            Helping people <span className="text-gradient">find their MOJO</span>
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-ink-soft">
            MOJO is a voice journal and mood tracker. You say how your day went, and MOJO turns it into a journal entry,
            logs your mood, sleep and activity, and shows you what really lifts your energy.
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-5 text-lg leading-relaxed text-ink/90">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">Why we built MOJO</h2>
          <p>
            We spent years building Heylixir, an app that helps people living with chronic illness track how they feel
            and share it with their care team. Again and again, we saw the same thing: the simple act of checking in
            every day, and seeing patterns over time, changed how people understood their own wellbeing.
          </p>
          <p>
            That shouldn&apos;t only be for people managing a condition. Everyone has weeks where their energy dips and
            they can&apos;t say why. MOJO takes what we learned and makes it light, fast and fun for everyday life:
            working a 9-5, getting through uni, or just trying to feel more like yourself.
          </p>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-5xl">
          <h2 className="text-center text-3xl font-extrabold tracking-tight">What we believe</h2>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {beliefs.map(({ Icon, title: t, body }) => (
              <div key={t} className="glass rounded-3xl p-6">
                <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet/12 text-violet-deep">
                  <Icon size={22} />
                </span>
                <h3 className="mt-4 text-lg font-extrabold">{t}</h3>
                <p className="mt-2 leading-relaxed text-ink-soft">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 py-10">
        <div className="mx-auto max-w-3xl space-y-4 text-lg leading-relaxed text-ink/90">
          <h2 className="text-3xl font-extrabold tracking-tight text-ink">Get in touch</h2>
          <p>
            Questions, ideas, press or partnerships: email{" "}
            <a href={`mailto:${site.supportEmail}`} className="font-semibold text-violet-deep underline">
              {site.supportEmail}
            </a>
            . Want practical tips in the meantime? Browse our{" "}
            <Link href="/guides" className="font-semibold text-violet-deep underline">
              wellbeing guides
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="px-4 py-16">
        <div className="glass mx-auto flex max-w-4xl flex-col items-center rounded-blob px-6 py-12 text-center">
          <h2 className="text-3xl font-extrabold tracking-tight">Be first on {launchLabel}</h2>
          <p className="mt-3 max-w-xl text-ink-soft">Join the list and we&apos;ll email you the moment MOJO is live.</p>
          <LaunchCountdown className="mt-6 flex flex-col items-center" />
          <WaitlistForm source="about" className="mt-6" />
        </div>
      </section>
    </PageShell>
  );
}
