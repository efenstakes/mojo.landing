import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}
export const alt = "MOJO: talk it out, find your MOJO";

export default function Image() {
  return ogImage({
    kicker: "Voice journal & mood tracker",
    title: "Talk it out. Find your MOJO.",
    footer: "Log mood, sleep and activity in a 30-second voice check-in.",
  });
}
