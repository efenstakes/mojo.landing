import { PlusIcon } from "@/components/icons";

const faqs = [
  {
    q: "What is Mojo?",
    a: "Mojo is a wellness journal you can talk to. You say how your day went, and Mojo logs your mood, sleep and activity, then shows you the patterns behind your best days.",
  },
  {
    q: "Do I have to talk? Can I type instead?",
    a: "Either works. Voice check-ins are the fastest way in, but you can always write a journal entry, pick a mood or log sleep and activities by hand.",
  },
  {
    q: "What does the energy score mean?",
    a: "It's Halo's estimate of your energy today, from 0 to 100, based on your recent mood, sleep and activity. It comes with the factors behind it, so you can see what's helping and what's draining you. It needs about a week of check-ins to get going.",
  },
  {
    q: "Is Mojo a medical app?",
    a: "No. Mojo is for everyday wellbeing: understanding your moods, sleep and habits. It doesn't diagnose anything or give medical advice. If you're struggling, please reach out to a professional.",
  },
  {
    q: "Who can see my journal?",
    a: "Only you. Your journal is private unless you choose to share something in the community, and you can lock the app with Mojo Pass.",
  },
  {
    q: "How much does it cost?",
    a: "Mojo is free to start. A Pro plan unlocks unlimited check-ins, deeper Halo insights and more.",
  },
];

export default function Faq() {
  return (
    <section id="faq" className="scroll-mt-28 px-4 py-20">
      <div className="mx-auto max-w-3xl">
        <div className="text-center">
          <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">FAQ</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight sm:text-5xl">Questions, answered</h2>
        </div>
        <div className="mt-12 space-y-3">
          {faqs.map(({ q, a }) => (
            <details key={q} className="glass group rounded-3xl px-6 py-5 [&_summary::-webkit-details-marker]:hidden">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-bold">
                {q}
                <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-violet/12 text-violet-deep transition group-open:rotate-45">
                  <PlusIcon size={18} />
                </span>
              </summary>
              <p className="mt-3 leading-relaxed text-ink-soft">{a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
