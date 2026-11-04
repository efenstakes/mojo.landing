import type { Metadata } from "next";
import { Suspense } from "react";
import PageShell from "@/components/page-shell";
import Unsubscribe from "./unsubscribe";

export const metadata: Metadata = {
  title: "Unsubscribe",
  robots: { index: false, follow: false },
};

export default function UnsubscribePage() {
  return (
    <PageShell>
      <section className="flex min-h-[70vh] items-center justify-center px-4 pb-16 pt-32">
        <div className="glass max-w-md rounded-blob p-10 text-center">
          <Suspense fallback={<p className="text-ink-soft">Loading…</p>}>
            <Unsubscribe />
          </Suspense>
        </div>
      </section>
    </PageShell>
  );
}
