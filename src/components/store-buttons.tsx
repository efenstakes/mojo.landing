"use client";

import { AppleIcon, PlayIcon } from "@/components/icons";
import { track } from "@/lib/analytics";
import { openWaitlist } from "@/lib/launch";
import { site } from "@/lib/site";

type Props = { tone?: "dark" | "light"; className?: string };

/**
 * App Store / Google Play buttons. Before a store URL is set, the button opens the waitlist
 * dialog instead, so every "download" click becomes a sign-up.
 */
export default function StoreButtons({ tone = "dark", className = "" }: Props) {
  const stores = [
    { id: "ios", label: "App Store", kicker: "Download on the", href: site.appStoreUrl, Icon: AppleIcon },
    { id: "android", label: "Google Play", kicker: "Get it on", href: site.playStoreUrl, Icon: PlayIcon },
  ];
  const styles = tone === "dark" ? "bg-ink text-white hover:bg-violet-deep" : "bg-white text-ink hover:bg-mist";

  return (
    <div className={`flex flex-wrap items-center gap-3 ${className}`}>
      {stores.map(({ id, label, kicker, href, Icon }) => {
        const inner = (
          <>
            <Icon size={22} />
            <span className="flex flex-col items-start leading-tight">
              <span className="text-[11px] font-medium opacity-75">{href ? kicker : "Get notified for"}</span>
              <span className="text-base font-bold">{label}</span>
            </span>
          </>
        );
        const cls = `flex items-center gap-3 rounded-2xl px-5 py-3 transition ${styles}`;
        return href ? (
          <a
            key={id}
            href={href}
            className={cls}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("store_click", { store: id })}
          >
            {inner}
          </a>
        ) : (
          <button key={id} type="button" className={cls} onClick={() => openWaitlist(`store:${id}`)}>
            {inner}
          </button>
        );
      })}
    </div>
  );
}
