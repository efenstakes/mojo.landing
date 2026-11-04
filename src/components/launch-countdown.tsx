"use client";

import { useSyncExternalStore } from "react";
import { launchAt, launchLabel } from "@/lib/launch";

function subscribe(onTick: () => void) {
  const id = window.setInterval(onTick, 1000);
  return () => window.clearInterval(id);
}
const nowInSeconds = () => Math.floor(Date.now() / 1000);
/** Server and first client render show placeholders, so hydration always matches. */
const serverSnapshot = () => null;

type Props = { tone?: "dark" | "light"; className?: string };

/** Live countdown to launch day. Hides itself once launch time has passed. */
export default function LaunchCountdown({ tone = "dark", className = "" }: Props) {
  const now = useSyncExternalStore(subscribe, nowInSeconds, serverSnapshot);
  const remaining = now === null ? null : Math.max(0, Math.floor(launchAt.getTime() / 1000) - now);
  if (remaining === 0) return null;

  const parts = [
    { label: "days", value: remaining === null ? null : Math.floor(remaining / 86400) },
    { label: "hrs", value: remaining === null ? null : Math.floor((remaining % 86400) / 3600) },
    { label: "min", value: remaining === null ? null : Math.floor((remaining % 3600) / 60) },
    { label: "sec", value: remaining === null ? null : remaining % 60 },
  ];
  const light = tone === "light";

  return (
    <div className={className} role="timer" aria-label={`MOJO launches on ${launchLabel}`}>
      <p className={`text-xs font-bold uppercase tracking-widest ${light ? "text-white/85" : "text-violet-deep"}`}>
        Launching {launchLabel} · iOS &amp; Android
      </p>
      <div className="mt-2 flex gap-2" aria-hidden>
        {parts.map((p) => (
          <div
            key={p.label}
            className={`flex min-w-16 flex-col items-center rounded-2xl px-3 py-2 ${light ? "bg-white/20 text-white" : "glass text-ink"}`}
          >
            <span className="text-2xl font-extrabold tabular-nums leading-none">
              {p.value === null ? "--" : String(p.value).padStart(2, "0")}
            </span>
            <span className={`mt-1 text-[11px] font-semibold uppercase ${light ? "text-white/80" : "text-ink-soft"}`}>
              {p.label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
