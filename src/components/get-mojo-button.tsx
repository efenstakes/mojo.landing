"use client";

import Link from "next/link";
import { openWaitlist, storesLive } from "@/lib/launch";

type Props = { className: string; source: string; onDone?: () => void };

/** "Get Mojo": jumps to the download buttons once live, otherwise opens the waitlist. */
export default function GetMojoButton({ className, source, onDone }: Props) {
  if (storesLive) {
    return (
      <Link href="/#download" className={className} onClick={onDone}>
        Get Mojo
      </Link>
    );
  }
  return (
    <button
      type="button"
      className={className}
      onClick={() => {
        onDone?.();
        openWaitlist(source);
      }}
    >
      Get Mojo
    </button>
  );
}
