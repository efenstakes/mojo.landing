"use client";

import { useState, type FormEvent } from "react";
import { track } from "@/lib/analytics";
import { site } from "@/lib/site";

type Props = {
  /** Where the form sits, sent with the conversion event (e.g. "hero", "guide:exam-stress-tips"). */
  source: string;
  tone?: "dark" | "light";
  className?: string;
};

type Status = "idle" | "sending" | "done" | "error";

const MUTATION = "mutation NotifyOnLaunch($input: AddLaunchNotificationInput!) { notifyOnLaunch(input: $input) }";

/**
 * Launch waitlist. Posts to the Mojo API's `notifyOnLaunch` mutation, which stores the email and
 * sends a confirmation with an unsubscribe link. Without NEXT_PUBLIC_MOJO_API_URL it falls back to
 * an email to the team so the form never dead-ends.
 */
export default function WaitlistForm({ source, tone = "dark", className = "" }: Props) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const value = email.trim();
    if (!value) return;

    if (!site.apiUrl) {
      window.location.href = `mailto:${site.supportEmail}?subject=${encodeURIComponent("Tell me when Mojo launches")}&body=${encodeURIComponent(`Please add ${value} to the Mojo launch list.`)}`;
      track("generate_lead", { method: "mailto", source });
      setStatus("done");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch(`${site.apiUrl}/api`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ query: MUTATION, variables: { input: { email: value } } }),
      });
      const json = (await res.json()) as { data?: { notifyOnLaunch?: boolean }; errors?: unknown[] };
      if (!res.ok || json.errors?.length || !json.data?.notifyOnLaunch) throw new Error("rejected");
      track("generate_lead", { method: "waitlist", source });
      setStatus("done");
    } catch {
      setStatus("error");
    }
  }

  const light = tone === "light";

  if (status === "done") {
    return (
      <p role="status" className={`rounded-2xl px-5 py-4 text-sm font-semibold ${light ? "bg-white/20 text-white" : "glass text-ink"} ${className}`}>
        You&apos;re on the list. We&apos;ll email you the moment Mojo is live.
      </p>
    );
  }

  return (
    <form onSubmit={onSubmit} className={`w-full max-w-md ${className}`} aria-label="Get notified when Mojo launches">
      <div className={`flex flex-col gap-2 rounded-3xl p-1.5 sm:flex-row sm:rounded-full ${light ? "bg-white/20" : "glass"}`}>
        <label htmlFor={`email-${source}`} className="sr-only">
          Email address
        </label>
        <input
          id={`email-${source}`}
          type="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className={`min-w-0 flex-1 rounded-full bg-transparent px-4 py-3 text-base outline-none ${light ? "text-white placeholder:text-white/70" : "text-ink placeholder:text-ink-soft"}`}
        />
        <button
          type="submit"
          disabled={status === "sending"}
          className={`rounded-full px-6 py-3 text-sm font-bold transition disabled:opacity-60 ${light ? "bg-white text-ink hover:bg-mist" : "bg-ink text-white hover:bg-violet-deep"}`}
        >
          {status === "sending" ? "Adding you…" : "Notify me at launch"}
        </button>
      </div>
      <p className={`mt-2 px-3 text-xs ${light ? "text-white/80" : "text-ink-soft"}`} aria-live="polite">
        {status === "error"
          ? "That didn't go through. Please try again in a moment."
          : "One email when we launch. Unsubscribe anytime."}
      </p>
    </form>
  );
}
