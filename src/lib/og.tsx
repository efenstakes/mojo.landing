import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { ChillO, TalkerO } from "@/components/brand/characters";

export const ogSize = { width: 1200, height: 630 };

/** Branded 1200x630 social card used by the home page and every guide. */
// Plus Jakarta Sans (SIL OFL, assets/fonts/OFL.txt), the site's typeface
const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

export async function ogImage({ kicker, title, footer }: { kicker: string; title: string; footer: string }) {
  const [bold, extraBold] = await Promise.all([font("PlusJakartaSans-Bold.ttf"), font("PlusJakartaSans-ExtraBold.ttf")]);
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          padding: 72,
          fontFamily: "Plus Jakarta Sans",
          color: "#1d1838",
          background: "linear-gradient(135deg, #f6f4fd 0%, #ece7fb 45%, #dff3ec 100%)",
        }}
      >
        {/* MOJO wordmark */}
        <div style={{ display: "flex", alignItems: "center", fontSize: 64, fontWeight: 800, letterSpacing: -1 }}>
          <span>M</span>
          <TalkerO size={56} style={{ margin: "0 3px" }} />
          <span>J</span>
          <ChillO size={56} style={{ marginLeft: 3 }} />
        </div>
        {/* the talker, large, on the right */}
        <TalkerO size={260} style={{ position: "absolute", right: 72, top: 60, opacity: 0.95 }} />
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#2f8a72", textTransform: "uppercase", letterSpacing: 3 }}>
            {kicker}
          </div>
          <div style={{ fontSize: title.length > 60 ? 58 : 68, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2, maxWidth: 780 }}>
            {title}
          </div>
        </div>
        <div style={{ fontSize: 26, fontWeight: 700, color: "#5b5675" }}>{footer}</div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Plus Jakarta Sans", data: bold, weight: 700, style: "normal" },
        { name: "Plus Jakarta Sans", data: extraBold, weight: 800, style: "normal" },
      ],
    },
  );
}
