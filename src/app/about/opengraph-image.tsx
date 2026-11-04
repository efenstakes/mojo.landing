import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "About MOJO";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}

export default function Image() {
  return ogImage({
    kicker: "About MOJO",
    title: "A voice journal that helps you find your MOJO",
    footer: "From the team behind Heylixir · Launching 1 December",
  });
}
