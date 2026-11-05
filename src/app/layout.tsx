import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import Script from "next/script";
import { absoluteUrl, site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const defaultTitle = "MOJO: Voice Journal & Mood Tracker for Sleep and Energy";

export const metadata: Metadata = {
  // Includes the base path (e.g. /mojo): Next joins relative metadata URLs, including generated
  // OG images, onto this pathname. Canonical and OG page URLs are absolute via absoluteUrl().
  metadataBase: new URL(site.url),
  title: { default: defaultTitle, template: "%s · MOJO" },
  description: site.description,
  applicationName: site.name,
  creator: site.legalName,
  publisher: site.legalName,
  category: "health & fitness",
  keywords: [
    "voice journal app",
    "mood tracker app",
    "mood journal",
    "sleep and mood tracker",
    "wellness app",
    "mental health app",
    "journaling app",
    "energy tracker",
    "MOJO app",
  ],
  alternates: { canonical: absoluteUrl("/") },
  openGraph: {
    type: "website",
    url: absoluteUrl("/"),
    siteName: site.name,
    locale: "en_US",
    title: defaultTitle,
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: defaultTitle,
    description: site.description,
    ...(site.twitterHandle ? { site: site.twitterHandle, creator: site.twitterHandle } : {}),
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
  verification: {
    ...(site.googleVerification ? { google: site.googleVerification } : {}),
    ...(site.bingVerification ? { other: { "msvalidate.01": site.bingVerification } } : {}),
  },
  formatDetection: { telephone: false },
  // Static files under public/, referenced absolutely so they carry the base path.
  icons: {
    icon: [
      { url: absoluteUrl("/favicon.ico"), sizes: "any" },
      // sharp at any size; modern browsers prefer it over the .ico
      { url: absoluteUrl("/icon.svg"), type: "image/svg+xml" },
      { url: absoluteUrl("/icon-192.png"), type: "image/png", sizes: "192x192" },
      { url: absoluteUrl("/icon-512.png"), type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: absoluteUrl("/apple-touch-icon.png"), sizes: "180x180" }],
  },
};

export const viewport: Viewport = {
  themeColor: "#8771d9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">
        {children}
        {site.gaId && (
          <>
            <Script src={`https://www.googletagmanager.com/gtag/js?id=${site.gaId}`} strategy="afterInteractive" />
            <Script id="ga4" strategy="afterInteractive">
              {`window.dataLayer=window.dataLayer||[];function gtag(){dataLayer.push(arguments);}gtag('js',new Date());gtag('config','${site.gaId}');`}
            </Script>
          </>
        )}
      </body>
    </html>
  );
}
