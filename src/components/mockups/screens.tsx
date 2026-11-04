import Phone from "@/components/mockups/phone";
import { BoltIcon, MicIcon, MoonIcon, RunIcon, SparkIcon } from "@/components/icons";

/** Illustrative app screens. Numbers are example data, labelled as such where it matters. */

function StatusBar() {
  return (
    <div className="flex items-center justify-between px-6 pt-4 text-[11px] font-semibold text-ink">
      <span>9:41</span>
      <span className="flex gap-1">
        <span className="h-2 w-3 rounded-sm bg-ink/80" />
        <span className="h-2 w-2 rounded-full bg-ink/80" />
      </span>
    </div>
  );
}

function Chip({ children, tone = "violet" }: { children: React.ReactNode; tone?: "violet" | "teal" | "amber" }) {
  const tones = {
    violet: "bg-violet/12 text-violet-deep",
    teal: "bg-teal/15 text-teal-deep",
    amber: "bg-amber/15 text-[#a86b00]",
  };
  return <span className={`rounded-full px-3 py-1 text-xs font-semibold ${tones[tone]}`}>{children}</span>;
}

/** Voice check-in: record -> Halo's draft (mood, drivers, sleep, activity) */
export function VoiceCheckinScreen() {
  const bars = [0.4, 0.7, 0.5, 0.9, 0.6, 1, 0.55, 0.8, 0.45, 0.7, 0.5, 0.85, 0.6, 0.4];
  return (
    <Phone>
      <StatusBar />
      <div className="flex h-[calc(100%-2rem)] flex-col px-5 pb-5 pt-5">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Voice check-in</p>
        <h3 className="mt-1 text-xl font-extrabold">How was your day?</h3>

        <div className="mt-4 rounded-3xl bg-gradient-brand p-4 text-white">
          <div className="flex h-12 items-center justify-center gap-1">
            {bars.map((h, i) => (
              <span
                key={i}
                className="w-1.5 origin-center animate-wave rounded-full bg-white/90"
                style={{ height: `${h * 100}%`, animationDelay: `${i * 0.08}s` }}
              />
            ))}
          </div>
          <p className="mt-3 text-[13px] leading-relaxed text-white/95">
            &ldquo;Slept about seven hours, went for a long walk at lunch and dinner with my sister was lovely. Work
            was a bit much this afternoon though.&rdquo;
          </p>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs font-semibold text-violet-deep">
          <SparkIcon size={16} /> Halo picked up
        </div>
        <div className="mt-2 space-y-2.5 rounded-3xl border border-ink/5 bg-mist p-4">
          <div className="flex items-center justify-between">
            <span className="text-sm text-ink-soft">Mood</span>
            <span className="text-sm font-bold">😌 Calm</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Chip tone="teal">+ Family</Chip>
            <Chip tone="teal">+ Exercise</Chip>
            <Chip tone="amber">− Work</Chip>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-ink-soft">
              <MoonIcon size={16} /> Sleep
            </span>
            <span className="font-bold">7 hrs</span>
          </div>
          <div className="flex items-center justify-between text-sm">
            <span className="flex items-center gap-2 text-ink-soft">
              <RunIcon size={16} /> Walking
            </span>
            <span className="font-bold">45 min</span>
          </div>
        </div>

        <div className="mt-auto flex items-center justify-center pt-3">
          <span className="flex h-12 w-12 items-center justify-center rounded-full bg-ink text-white shadow-lg">
            <MicIcon size={24} />
          </span>
        </div>
      </div>
    </Phone>
  );
}

/** Halo insights: energy score ring + what's driving it */
export function EnergyScreen() {
  const score = 72;
  const r = 52;
  const c = 2 * Math.PI * r;
  return (
    <Phone>
      <StatusBar />
      <div className="px-5 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Halo insights</p>
        <h3 className="mt-1 text-xl font-extrabold">Today&apos;s energy</h3>

        <div className="mt-5 flex items-center gap-5 rounded-3xl bg-mist p-5">
          <svg width="128" height="128" viewBox="0 0 128 128" className="-rotate-90" aria-label={`Energy score ${score} out of 100`}>
            <circle cx="64" cy="64" r={r} stroke="#e7e3f8" strokeWidth="12" fill="none" />
            <circle
              cx="64"
              cy="64"
              r={r}
              stroke="url(#energy)"
              strokeWidth="12"
              strokeLinecap="round"
              fill="none"
              strokeDasharray={c}
              strokeDashoffset={c * (1 - score / 100)}
            />
            <defs>
              <linearGradient id="energy" x1="0" y1="0" x2="1" y2="1">
                <stop offset="0%" stopColor="#8771d9" />
                <stop offset="100%" stopColor="#4aaf94" />
              </linearGradient>
            </defs>
          </svg>
          <div>
            <p className="text-4xl font-extrabold">{score}</p>
            <p className="text-sm text-ink-soft">out of 100</p>
            <p className="mt-2 flex items-center gap-1 text-xs font-semibold text-teal-deep">
              <BoltIcon size={14} /> Up 8 on last week
            </p>
          </div>
        </div>

        <p className="mt-5 text-sm font-bold">What&apos;s driving it</p>
        <div className="mt-3 space-y-3">
          {[
            { label: "Sleep this week", value: 78, tone: "bg-teal" },
            { label: "Active days", value: 64, tone: "bg-violet" },
            { label: "Mood lately", value: 58, tone: "bg-amber" },
          ].map((f) => (
            <div key={f.label}>
              <div className="flex justify-between text-xs text-ink-soft">
                <span>{f.label}</span>
                <span className="font-semibold text-ink">raised it</span>
              </div>
              <div className="mt-1.5 h-2 rounded-full bg-ink/5">
                <div className={`h-2 rounded-full ${f.tone}`} style={{ width: `${f.value}%` }} />
              </div>
            </div>
          ))}
        </div>

        <div className="mt-5 rounded-3xl border border-violet/20 bg-violet/5 p-4">
          <p className="flex items-center gap-2 text-xs font-bold text-violet-deep">
            <SparkIcon size={14} /> Recharge tip
          </p>
          <p className="mt-1 text-sm leading-relaxed">
            Days you go for a walk tend to run higher on energy for you. Worth leaning into when you can.
          </p>
        </div>
      </div>
    </Phone>
  );
}

/** Mood + sleep week view */
export function MoodSleepScreen() {
  const days = ["M", "T", "W", "T", "F", "S", "S"];
  const mood = [3, 4, 3, 2, 4, 5, 4];
  const sleep = [6.5, 7, 7.5, 5.5, 7, 8.5, 8];
  return (
    <Phone>
      <StatusBar />
      <div className="px-5 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">This week</p>
        <h3 className="mt-1 text-xl font-extrabold">Mood &amp; sleep</h3>

        <div className="mt-5 rounded-3xl bg-mist p-4">
          <p className="text-xs font-semibold text-ink-soft">Mood</p>
          <div className="mt-3 flex h-32 items-end justify-between gap-2">
            {mood.map((m, i) => (
              <div key={i} className="flex flex-1 flex-col items-center gap-2">
                <div className="w-full rounded-xl bg-gradient-brand" style={{ height: `${m * 20}%` }} />
                <span className="text-[10px] font-semibold text-ink-soft">{days[i]}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-4 rounded-3xl bg-mist p-4">
          <p className="text-xs font-semibold text-ink-soft">Sleep (hours)</p>
          <svg viewBox="0 0 280 90" className="mt-2 w-full" aria-hidden>
            <polyline
              fill="none"
              stroke="#4aaf94"
              strokeWidth="4"
              strokeLinecap="round"
              strokeLinejoin="round"
              points={sleep.map((s, i) => `${20 + i * 40},${90 - (s - 4) * 15}`).join(" ")}
            />
            {sleep.map((s, i) => (
              <circle key={i} cx={20 + i * 40} cy={90 - (s - 4) * 15} r="5" fill="white" stroke="#4aaf94" strokeWidth="3" />
            ))}
          </svg>
        </div>

        <div className="mt-4 rounded-3xl bg-teal/10 p-4">
          <p className="text-xs font-bold text-teal-deep">Something you might not know</p>
          <p className="mt-1 text-sm leading-relaxed">You usually feel better on days after 7+ hours of sleep.</p>
        </div>
      </div>
    </Phone>
  );
}

/** Activities log */
export function ActivityScreen() {
  const items = [
    { name: "Walking", meta: "45 min · easy", emoji: "🚶" },
    { name: "Yoga", meta: "20 min · gentle", emoji: "🧘" },
    { name: "Cycling", meta: "30 min · moderate", emoji: "🚴" },
    { name: "Dancing", meta: "25 min · fun", emoji: "💃" },
  ];
  return (
    <Phone>
      <StatusBar />
      <div className="px-5 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">Activities</p>
        <h3 className="mt-1 text-xl font-extrabold">Moving this week</h3>

        <div className="mt-5 grid grid-cols-2 gap-3">
          <div className="rounded-3xl bg-gradient-brand p-4 text-white">
            <p className="text-3xl font-extrabold">4</p>
            <p className="text-xs text-white/85">active days</p>
          </div>
          <div className="rounded-3xl bg-mist p-4">
            <p className="text-3xl font-extrabold">2h 40</p>
            <p className="text-xs text-ink-soft">minutes moving</p>
          </div>
        </div>

        <div className="mt-4 space-y-2.5">
          {items.map((it) => (
            <div key={it.name} className="flex items-center gap-3 rounded-2xl border border-ink/5 bg-white p-3 shadow-sm">
              <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-mist text-xl">{it.emoji}</span>
              <div>
                <p className="text-sm font-bold">{it.name}</p>
                <p className="text-xs text-ink-soft">{it.meta}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          <Chip tone="violet">🔥 3-day streak</Chip>
          <Chip tone="teal">Mood +0.8 on walk days</Chip>
        </div>
      </div>
    </Phone>
  );
}

/** Journal timeline: entries saved from voice check-ins */
export function JournalScreen() {
  const entries = [
    {
      day: "Today",
      mood: "😌 Calm",
      text: "Long walk at lunch, dinner with my sister. Work was a bit much this afternoon.",
      tags: ["Family", "Exercise"],
      voice: true,
    },
    {
      day: "Yesterday",
      mood: "😄 Happy",
      text: "Slept in, yoga class, then finally finished that book. Felt really rested.",
      tags: ["Weather", "Food"],
      voice: true,
    },
    {
      day: "Tue",
      mood: "😕 Meh",
      text: "Back-to-back meetings and a short night. Need an early one tonight.",
      tags: ["Meetings"],
      voice: false,
    },
  ];
  return (
    <Phone>
      <StatusBar />
      <div className="px-5 pt-6">
        <p className="text-xs font-semibold uppercase tracking-widest text-ink-soft">My journal</p>
        <h3 className="mt-1 text-xl font-extrabold">This week</h3>

        <div className="mt-5 space-y-3">
          {entries.map((e) => (
            <div key={e.day} className="rounded-3xl border border-ink/5 bg-mist p-4">
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-ink-soft">{e.day}</span>
                <span className="text-sm font-bold">{e.mood}</span>
              </div>
              <p className="mt-2 text-[13px] leading-relaxed">{e.text}</p>
              <div className="mt-3 flex flex-wrap items-center gap-2">
                {e.tags.map((t) => (
                  <Chip key={t} tone="teal">
                    {t}
                  </Chip>
                ))}
                {e.voice && (
                  <span className="ml-auto flex items-center gap-1 text-[11px] font-semibold text-violet-deep">
                    <MicIcon size={12} /> 0:42
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Phone>
  );
}
