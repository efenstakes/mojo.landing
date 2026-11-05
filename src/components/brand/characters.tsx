/**
 * MOJO's two O characters (same artwork as public/brand/o-talker.svg and o-chill.svg).
 * Plain SVG, so they work in server components, client components and next/og images.
 */
type Props = { size?: number | string; dark?: boolean; style?: React.CSSProperties; className?: string };

const INK = "#1D1838";

/** First O: the talker, mid-sentence (voice check-ins). */
export function TalkerO({ size = "1em", dark = false, style, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="38" fill="#fff" stroke={dark ? "#A996FF" : "#7A63D6"} strokeWidth="15" />
      <circle cx="40" cy="44" r="5" fill={INK} />
      <circle cx="60" cy="44" r="5" fill={INK} />
      <circle cx="41.7" cy="42.3" r="1.6" fill="#fff" />
      <circle cx="61.7" cy="42.3" r="1.6" fill="#fff" />
      <path d="M40.5 54H59.5A9.5 9.5 0 0 1 40.5 54Z" fill={INK} />
      <path d="M44.2 60.4Q50 56.4 55.8 60.4A7.6 7.6 0 0 1 44.2 60.4Z" fill="#FF8FB1" />
    </svg>
  );
}

/** Second O: the chill one, happy and relaxed (how you feel after). */
export function ChillO({ size = "1em", dark = false, style, className }: Props) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" style={style} className={className} aria-hidden="true">
      <circle cx="50" cy="50" r="38" fill="#fff" stroke={dark ? "#6FD3B4" : "#3FA688"} strokeWidth="15" />
      <path
        d="M33.5 47q6.5-7.5 13 0M53.5 47q6.5-7.5 13 0M39.5 56.5q10.5 9.5 21 0"
        fill="none"
        stroke={INK}
        strokeWidth="4.2"
        strokeLinecap="round"
      />
      <circle cx="32" cy="57.5" r="3.6" fill="#FF8FB1" opacity=".6" />
      <circle cx="68" cy="57.5" r="3.6" fill="#FF8FB1" opacity=".6" />
    </svg>
  );
}
