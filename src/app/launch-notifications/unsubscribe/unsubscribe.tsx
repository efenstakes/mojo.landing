"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { site } from "@/lib/site";

type Status = "idle" | "working" | "done" | "error";

const QUERY = "query Unsubscribe($id: String!) { unsubscribeFromLaunchNotifications(id: $id) }";

/** Handles the unsubscribe link from launch-list emails (?id=...). Asks before acting, so link scanners can't unsubscribe people. */
export default function Unsubscribe() {
  const id = useSearchParams().get("id");
  const [status, setStatus] = useState<Status>("idle");

  async function confirm() {
    if (!id || !site.apiUrl) return setStatus("error");
    setStatus("working");
    try {
      const res = await fetch(`${site.apiUrl}/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: QUERY, variables: { id } }),
      });
      const json = (await res.json()) as { errors?: unknown[] };
      if (!res.ok || json.errors?.length) throw new Error("failed");
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  if (!id) {
    return (
      <>
        <h1 className="text-2xl font-extrabold">Unsubscribe link incomplete</h1>
        <p className="mt-3 text-ink-soft">
          Use the link from your email, or write to{" "}
          <a className="font-semibold text-violet-deep underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>{" "}
          and we&apos;ll remove you.
        </p>
      </>
    );
  }

  if (status === "done") {
    return (
      <>
        <h1 className="text-2xl font-extrabold">You&apos;re unsubscribed</h1>
        <p className="mt-3 text-ink-soft">You won&apos;t get any more launch emails from MOJO.</p>
        <Link href="/" className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-violet-deep">
          Back to MOJO
        </Link>
      </>
    );
  }

  return (
    <>
      <h1 className="text-2xl font-extrabold">Stop launch emails?</h1>
      <p className="mt-3 text-ink-soft">We&apos;ll take you off the MOJO launch list.</p>
      <button
        type="button"
        onClick={confirm}
        disabled={status === "working"}
        className="mt-6 inline-flex rounded-full bg-ink px-6 py-3 font-bold text-white hover:bg-violet-deep disabled:opacity-60"
      >
        {status === "working" ? "Unsubscribing…" : "Unsubscribe"}
      </button>
      {status === "error" && (
        <p className="mt-4 text-sm text-ink-soft" role="alert">
          Something went wrong. Email{" "}
          <a className="font-semibold text-violet-deep underline" href={`mailto:${site.supportEmail}`}>
            {site.supportEmail}
          </a>{" "}
          and we&apos;ll remove you.
        </p>
      )}
    </>
  );
}
