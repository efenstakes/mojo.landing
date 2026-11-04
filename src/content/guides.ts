import { appGuides } from "./guides-apps";
import { burnoutGuides } from "./guides-burnout";
import { universityGuides } from "./guides-university";
import { wellbeingGuides } from "./guides-wellbeing";
import { workGuides } from "./guides-work";
import type { Guide, GuideCategory } from "./types";

export type { Guide, GuideCategory } from "./types";

export const guides: Guide[] = [...workGuides, ...burnoutGuides, ...universityGuides, ...appGuides, ...wellbeingGuides];

export const categories: { name: GuideCategory; blurb: string }[] = [
  { name: "Work", blurb: "Protect your energy on a 9-5, at the office or at home." },
  { name: "Burnout", blurb: "Spot it early, recover properly and keep it from coming back." },
  { name: "University", blurb: "Deadlines, exams, sleep and settling in." },
  { name: "App guides", blurb: "Honest round-ups of wellness apps worth trying." },
  { name: "Journaling", blurb: "Get started, keep going and actually learn from it." },
  { name: "Sleep & energy", blurb: "Sleep, movement and habits that lift your mood." },
];

const bySlug = new Map(guides.map((g) => [g.slug, g]));

export function getGuide(slug: string): Guide | undefined {
  return bySlug.get(slug);
}

export function guidesIn(category: GuideCategory): Guide[] {
  return guides.filter((g) => g.category === category);
}

export function relatedGuides(guide: Guide): Guide[] {
  return guide.related.map((s) => bySlug.get(s)).filter((g): g is Guide => Boolean(g));
}

/** Approximate reading time at ~220 words per minute. */
export function readingMinutes(guide: Guide): number {
  const text = [
    guide.intro,
    ...guide.sections.flatMap((s) => [s.heading, ...s.body, ...(s.bullets ?? [])]),
    ...(guide.apps ?? []).flatMap((a) => [a.name, a.bestFor, a.summary]),
    ...guide.takeaways,
    ...guide.faqs.flatMap((f) => [f.q, f.a]),
  ].join(" ");
  return Math.max(2, Math.round(text.split(/\s+/).length / 220));
}

export function sectionId(heading: string): string {
  return heading
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}
