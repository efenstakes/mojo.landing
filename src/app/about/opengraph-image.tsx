import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "About Mojo";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}

export default function Image() {
  return ogImage({
    kicker: "About Mojo",
    title: "A voice journal that helps you find your mojo",
    footer: "From the team behind Heylixir · Launching 1 December",
  });
}
