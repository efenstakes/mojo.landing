import type { Metadata, Viewport } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Mojo — voice journaling for your mood, sleep & energy",
    template: "%s · Mojo",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "voice journal",
    "mood tracker",
    "sleep tracker",
    "activity tracker",
    "wellness app",
    "energy score",
    "journaling app",
    "Mojo",
  ],
  openGraph: {
    type: "website",
    siteName: site.name,
    title: "Mojo — talk it out, find your mojo",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Mojo — talk it out, find your mojo",
    description: site.description,
  },
};

export const viewport: Viewport = {
  themeColor: "#8771d9",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jakarta.variable} h-full antialiased`}>
      <body className="min-h-full font-sans">{children}</body>
    </html>
  );
}
