export type GuideCategory = "Work" | "University" | "Journaling" | "Sleep & energy" | "App guides";

export type GuideSection = {
  heading: string;
  /** Paragraphs. Plain text; rendered as <p>. */
  body: string[];
  /** Optional bullet list rendered after the paragraphs. */
  bullets?: string[];
};

/** One app in a comparison guide. Keep claims general and true; no prices, no ratings. */
export type AppPick = {
  name: string;
  bestFor: string;
  summary: string;
  isMojo?: boolean;
};

export type Guide = {
  slug: string;
  category: GuideCategory;
  /** On-page H1. */
  title: string;
  /** <title> -- keep it under ~60 characters; the site name is appended by the layout template. */
  metaTitle: string;
  /** Meta description, ~140-160 characters, written to earn the click. */
  description: string;
  /** Primary keyword first, then close variants. */
  keywords: string[];
  /** ISO dates (YYYY-MM-DD). */
  published: string;
  updated: string;
  /** Short answer up top -- what the reader came for, in two or three sentences. */
  intro: string;
  sections: GuideSection[];
  /** Comparison guides only. */
  apps?: AppPick[];
  takeaways: string[];
  faqs: { q: string; a: string }[];
  /** Slugs of related guides for internal linking. */
  related: string[];
};
