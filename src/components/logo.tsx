/** MOJO wordmark: a soft spark mark + name. */
export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <span className="flex items-center gap-2">
      <span className="relative flex h-9 w-9 items-center justify-center rounded-2xl bg-gradient-brand shadow-[0_8px_20px_-8px_rgb(91_69_184/0.8)]">
        <svg width="20" height="20" viewBox="0 0 24 24" fill="white" aria-hidden>
          <path d="M12 2.5l2.2 6.3 6.3 2.2-6.3 2.2L12 19.5l-2.2-6.3L3.5 11l6.3-2.2z" />
        </svg>
      </span>
      <span className={`text-xl font-extrabold tracking-wide ${light ? "text-white" : "text-ink"}`}>MOJO</span>
    </span>
  );
}
