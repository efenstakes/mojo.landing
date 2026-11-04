import { MicIcon, MoonIcon, RunIcon, SmileIcon } from "@/components/icons";
import { VoiceCheckinScreen } from "@/components/mockups/screens";
import StoreButtons from "@/components/store-buttons";
import LaunchCountdown from "@/components/launch-countdown";
import WaitlistForm from "@/components/waitlist-form";
import { storesLive } from "@/lib/launch";

export default function Hero() {
  return (
    <section id="top" className="relative px-4 pb-20 pt-32 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="animate-rise text-center lg:text-left">
          <span className="glass inline-flex items-center gap-2 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-violet-deep">
            <MicIcon size={14} /> Voice journal & mood tracker
          </span>

          <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight sm:text-6xl lg:text-7xl">
            Talk it out.
            <br />
            <span className="text-gradient">Find your mojo.</span>
          </h1>

          <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-ink-soft lg:mx-0">
            Just say how your day went. Mojo turns it into a journal entry, logs your mood, sleep and activity, and
            shows you what really lifts your energy. No forms, no typing.
          </p>

          <div id="download" className="mt-8 flex flex-col items-center gap-4 lg:items-start">
            {!storesLive && <LaunchCountdown />}
            {!storesLive && <WaitlistForm source="hero" />}
            <StoreButtons />
            <p className="text-sm text-ink-soft">Free to start. Takes about 30 seconds a day.</p>
          </div>

          <ul className="mt-10 flex flex-wrap justify-center gap-3 lg:justify-start">
            {[
              { Icon: SmileIcon, label: "Mood" },
              { Icon: MoonIcon, label: "Sleep" },
              { Icon: RunIcon, label: "Activity" },
            ].map(({ Icon, label }) => (
              <li key={label} className="glass flex items-center gap-2 rounded-full px-4 py-2 text-sm font-semibold">
                <Icon size={16} className="text-violet-deep" /> {label}
              </li>
            ))}
          </ul>
        </div>

        <div className="relative animate-rise [animation-delay:150ms]">
          <div className="absolute inset-x-6 top-10 -z-10 h-[80%] rounded-blob bg-gradient-brand opacity-30 blur-2xl" />
          <VoiceCheckinScreen />
        </div>
      </div>
    </section>
  );
}
