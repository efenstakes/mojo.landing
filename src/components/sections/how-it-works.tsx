import { ChartIcon, MicIcon, SparkIcon } from "@/components/icons";

const steps = [
  {
    Icon: MicIcon,
    title: "Say how your day went",
    text: "Tap the mic and talk for as long as you like. It's transcribed right on your phone, so it works even on a patchy connection.",
  },
  {
    Icon: SparkIcon,
    title: "Halo fills in the details",
    text: "Mojo's AI pulls out your mood, what lifted or weighed on it, how you slept and what you did. You review it, tweak anything, and save.",
  },
  {
    Icon: ChartIcon,
    title: "See what lifts you",
    text: "After a week or two of check-ins, your patterns appear: the nights, habits and people that line up with your best days.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">How it works</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">
            Journaling that <span className="text-gradient">listens</span>
          </h2>
          <p className="mt-4 text-lg text-ink-soft">Three steps, about thirty seconds, once a day.</p>
        </div>

        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map(({ Icon, title, text }, i) => (
            <li key={title} className="glass relative rounded-blob p-8">
              <span className="absolute right-7 top-6 text-6xl font-extrabold text-violet/15">{i + 1}</span>
              <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-brand text-white">
                <Icon size={26} />
              </span>
              <h3 className="mt-6 text-xl font-bold">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-soft">{text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
