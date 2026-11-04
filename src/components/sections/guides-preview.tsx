import Link from "next/link";
import GuideCard from "@/components/guide-card";
import { ArrowIcon } from "@/components/icons";
import { getGuide } from "@/content/guides";

const picks = [
  "managing-mental-health-working-9-to-5",
  "managing-mental-health-at-university",
  "best-mental-health-apps-for-students",
  "how-to-recover-from-burnout",
  "voice-journaling-guide",
  "how-sleep-affects-mood",
];

export default function GuidesPreview() {
  const guides = picks.map(getGuide).filter((g) => g !== undefined);
  return (
    <section id="guides" className="scroll-mt-28 px-4 py-20" aria-labelledby="guides-title">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">Guides</p>
            <h2 id="guides-title" className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
              Small habits, real difference
            </h2>
            <p className="mt-3 max-w-xl text-ink-soft">
              Practical guides for staying well at work and at uni, journaling, sleep and energy.
            </p>
          </div>
          <Link href="/guides" className="flex items-center gap-2 font-bold text-violet-deep hover:text-ink">
            All guides <ArrowIcon size={18} />
          </Link>
        </div>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <GuideCard key={g.slug} guide={g} />
          ))}
        </div>
      </div>
    </section>
  );
}
