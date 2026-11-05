import { ChillO, TalkerO } from "@/components/brand/characters";

/** MOJO wordmark: M, the talker O, J, the chill O. `light` = for dark backgrounds. */
export default function Logo({ light = false, className = "text-2xl" }: { light?: boolean; className?: string }) {
  return (
    <span
      role="img"
      aria-label="MOJO"
      className={`inline-flex items-center font-extrabold leading-none tracking-tight ${light ? "text-white" : "text-ink"} ${className}`}
    >
      <span aria-hidden="true">M</span>
      <TalkerO size="0.86em" dark={light} style={{ margin: "0 0.03em" }} />
      <span aria-hidden="true">J</span>
      <ChillO size="0.86em" dark={light} style={{ marginLeft: "0.03em" }} />
    </span>
  );
}
