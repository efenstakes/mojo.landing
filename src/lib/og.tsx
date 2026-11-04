import { ImageResponse } from "next/og";

export const ogSize = { width: 1200, height: 630 };

const spark = (
  <svg width="44" height="44" viewBox="0 0 24 24" fill="white">
    <path d="M12 2.5l2.2 6.3 6.3 2.2-6.3 2.2L12 19.5l-2.2-6.3L3.5 11l6.3-2.2z" />
  </svg>
);

/** Branded 1200x630 social card used by the home page and every guide. */
export function ogImage({ kicker, title, footer }: { kicker: string; title: string; footer: string }) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          color: "#1d1838",
          background: "linear-gradient(135deg, #f6f4fd 0%, #ece7fb 45%, #dff3ec 100%)",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: 22,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "linear-gradient(135deg, #8771d9 0%, #4aaf94 100%)",
            }}
          >
            {spark}
          </div>
          <div style={{ fontSize: 44, fontWeight: 800, letterSpacing: -1 }}>mojo</div>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          <div style={{ fontSize: 26, fontWeight: 700, color: "#2f8a72", textTransform: "uppercase", letterSpacing: 3 }}>
            {kicker}
          </div>
          <div style={{ fontSize: title.length > 60 ? 58 : 68, fontWeight: 800, lineHeight: 1.08, letterSpacing: -2 }}>
            {title}
          </div>
        </div>
        <div style={{ fontSize: 26, color: "#5b5675" }}>{footer}</div>
      </div>
    ),
    ogSize,
  );
}
