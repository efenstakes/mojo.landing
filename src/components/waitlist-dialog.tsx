"use client";

import { useEffect, useRef, useState } from "react";
import { CloseIcon } from "@/components/icons";
import LaunchCountdown from "@/components/launch-countdown";
import WaitlistForm from "@/components/waitlist-form";
import { track } from "@/lib/analytics";
import { launchLabel, WAITLIST_EVENT } from "@/lib/launch";

/** One shared "join the list" dialog, opened by store buttons and "Get MOJO" before launch. */
export default function WaitlistDialog() {
  const ref = useRef<HTMLDialogElement>(null);
  const [source, setSource] = useState("dialog");

  useEffect(() => {
    function onOpen(e: Event) {
      const s = (e as CustomEvent<{ source?: string }>).detail?.source ?? "dialog";
      setSource(s);
      track("waitlist_open", { source: s });
      ref.current?.showModal();
    }
    window.addEventListener(WAITLIST_EVENT, onOpen);
    return () => window.removeEventListener(WAITLIST_EVENT, onOpen);
  }, []);

  return (
    <dialog
      ref={ref}
      aria-labelledby="waitlist-title"
      onClick={(e) => {
        if (e.target === ref.current) ref.current?.close();
      }}
      className="m-auto w-[calc(100%-2rem)] max-w-lg rounded-blob bg-white p-0 text-ink shadow-2xl backdrop:bg-ink/40 backdrop:backdrop-blur-sm"
    >
      <div className="relative p-8 sm:p-10">
        <button
          type="button"
          onClick={() => ref.current?.close()}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-ink-soft hover:bg-mist hover:text-ink"
        >
          <CloseIcon />
        </button>
        <p className="text-xs font-bold uppercase tracking-widest text-teal-deep">Almost here</p>
        <h2 id="waitlist-title" className="mt-2 text-3xl font-extrabold tracking-tight">
          MOJO lands on {launchLabel}
        </h2>
        <p className="mt-3 leading-relaxed text-ink-soft">
          We&apos;re not in the App Store or Google Play just yet. Join the list and we&apos;ll email you the moment
          MOJO is live on iOS and Android.
        </p>
        <LaunchCountdown className="mt-6" />
        <WaitlistForm key={source} source={source} className="mt-6" />
      </div>
    </dialog>
  );
}
