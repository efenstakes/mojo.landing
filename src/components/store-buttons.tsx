import { AppleIcon, PlayIcon } from "@/components/icons";
import { site } from "@/lib/site";

type Props = { tone?: "dark" | "light"; className?: string };

/** App Store / Google Play buttons. An unset store URL renders a non-link "Coming soon" badge. */
export default function StoreButtons({ tone = "dark", className = "" }: Props) {
  const stores = [
    { label: "App Store", kicker: "Download on the", href: site.appStoreUrl, Icon: AppleIcon },
    { label: "Google Play", kicker: "Get it on", href: site.playStoreUrl, Icon: PlayIcon },
  ];
  const styles =
    tone === "dark"
      ? "bg-ink text-white hover:bg-violet-deep"
      : "bg-white text-ink hover:bg-mist";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {stores.map(({ label, kicker, href, Icon }) => {
        const inner = (
          <>
            <Icon size={22} />
            <span className="flex flex-col leading-tight">
              <span className="text-[11px] font-medium opacity-75">{href ? kicker : "Coming soon to"}</span>
              <span className="text-base font-bold">{label}</span>
            </span>
          </>
        );
        const cls = `flex items-center gap-3 rounded-2xl px-5 py-3 transition ${styles}`;
        return href ? (
          <a key={label} href={href} className={cls} target="_blank" rel="noopener noreferrer">
            {inner}
          </a>
        ) : (
          <span key={label} className={`${cls} cursor-default opacity-90`} aria-label={`${label}, coming soon`}>
            {inner}
          </span>
        );
      })}
    </div>
  );
}
