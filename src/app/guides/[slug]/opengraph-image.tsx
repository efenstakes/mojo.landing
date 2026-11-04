import { getGuide, guides } from "@/content/guides";
import { ogImage, ogSize } from "@/lib/og";

export const size = ogSize;
export const contentType = "image/png";
export const alt = "MOJO guide";

export function generateStaticParams() {
  return guides.map((g) => ({ slug: g.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const guide = getGuide(slug);
  return ogImage({
    kicker: guide ? `${guide.category} guide` : "MOJO guides",
    title: guide?.title ?? "Guides to feeling more like yourself",
    footer: "Voice journal · Mood · Sleep · Activity",
  });
}
