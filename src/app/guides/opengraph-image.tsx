import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}
export const alt = "Mojo guides to mental health and wellbeing";

export default function Image() {
  return ogImage({
    kicker: "Mojo guides",
    title: "Mental health & wellbeing guides for work, uni and everyday life",
    footer: "Journaling · Mood · Sleep · Energy · App round-ups",
  });
}
