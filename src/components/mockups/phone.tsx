import type { ReactNode } from "react";

/** A simple phone frame for the app-screen mockups. */
export default function Phone({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`relative mx-auto w-[280px] rounded-[2.75rem] bg-ink p-2.5 shadow-[0_40px_80px_-30px_rgb(45_30_110/0.55)] sm:w-[300px] ${className}`}
    >
      <div className="absolute left-1/2 top-4 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-ink" />
      <div className="relative h-[560px] overflow-hidden rounded-[2.25rem] bg-white sm:h-[600px]">{children}</div>
    </div>
  );
}
