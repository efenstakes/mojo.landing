import { categories, guidesIn } from "@/content/guides";
import { absoluteUrl, site } from "@/lib/site";

/** Marks this route static so it is prerendered at build time (required by the static export). */
export function generateStaticParams() {
  return [{}];
}

/** llms.txt: a plain-text map of the site for AI assistants and answer engines. */
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description}`,
    "",
    "Mojo is a general wellness app, not a medical device. It is for everyday wellbeing: voice journaling, mood, sleep and activity tracking, and an AI energy score (Halo) that explains what lifts or drains your energy. It is launching on iOS and Android; people can join the launch list on the website.",
    "",
    "## Key pages",
    `- [Home](${absoluteUrl("/")}): what Mojo does and how it works`,
    `- [Guides](${absoluteUrl("/guides")}): practical mental health and wellbeing guides`,
    `- [Privacy](${absoluteUrl("/privacy")})`,
    `- [Terms](${absoluteUrl("/terms")})`,
    "",
    ...categories.flatMap((c) => [
      `## ${c.name}`,
      ...guidesIn(c.name).map((g) => `- [${g.title}](${absoluteUrl(`/guides/${g.slug}`)}): ${g.description}`),
      "",
    ]),
    "## Contact",
    `- ${site.supportEmail}`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
