import { DISCLOSURE, SAFETY_SECTION, mojo } from "./guides-apps";
import type { AppPick, Guide } from "./types";

/**
 * "<App> alternatives" pages. Rules, same as the other comparison guides:
 * - say what the original app is genuinely good at; never knock it;
 * - describe every app only by what it's known for (no prices, ratings or claims that go stale);
 * - disclose that we make MOJO, and that the other names are their owners' trademarks.
 */

const D = "2026-11-04";
const LAUNCH = "Launching on iOS and Android on 1 December 2026.";

const trademark = (app: string) =>
  `${app} is a trademark of its owner. MOJO isn't affiliated with or endorsed by ${app}; we mention it only to help you compare.`;

const picks = (app: string): { heading: string; body: string[] } => ({
  heading: "Our picks",
  body: [DISCLOSURE, trademark(app)],
});

// shared descriptions, kept to what each app is known for
const APPS: Record<string, AppPick> = {
  headspace: {
    name: "Headspace",
    bestFor: "Beginner-friendly guided meditation",
    summary: "Guided meditations, courses and sleep content, known for making mindfulness approachable for beginners.",
  },
  calm: {
    name: "Calm",
    bestFor: "Relaxation and sleep",
    summary: "Known for Sleep Stories, calming music, breathing exercises and guided meditations.",
  },
  insightTimer: {
    name: "Insight Timer",
    bestFor: "A huge free meditation library",
    summary: "A very large collection of guided meditations and talks from many teachers, with a lot available for free.",
  },
  medito: {
    name: "Medito",
    bestFor: "Free meditation from a nonprofit",
    summary: "A meditation app run by a nonprofit, with guided sessions and courses offered for free.",
  },
  healthyMinds: {
    name: "Healthy Minds Program",
    bestFor: "Free, research-informed training",
    summary: "A free app from a nonprofit linked to university research, with meditation and lessons on awareness, connection and purpose.",
  },
  betterSleep: {
    name: "BetterSleep",
    bestFor: "Sleep sounds you can mix",
    summary: "Known for sleep sounds and soundscapes you can mix yourself, plus sleep stories and meditations.",
  },
  daylio: {
    name: "Daylio",
    bestFor: "Tap-based mood diary",
    summary: "A micro-diary where you pick a mood and tap the activities you did, with charts of your moods over time. No writing needed.",
  },
  howWeFeel: {
    name: "How We Feel",
    bestFor: "Naming your emotions",
    summary: "A free app from a nonprofit that helps you pick the exact emotion you're feeling and suggests short strategies.",
  },
  bearable: {
    name: "Bearable",
    bestFor: "Detailed, customisable tracking",
    summary: "Tracks mood alongside many factors you choose, and shows which ones appear to be linked. Good if you love detail.",
  },
  finch: {
    name: "Finch",
    bestFor: "Self-care with a virtual pet",
    summary: "Look after a virtual pet by completing small self-care goals, reflections and mood check-ins.",
  },
  dayOne: {
    name: "Day One",
    bestFor: "A polished, classic journal",
    summary: "A long-established journaling app with photos, multiple journals, templates and reminders.",
  },
  stoic: {
    name: "Stoic",
    bestFor: "Guided morning and evening prompts",
    summary: "Prompt-led journaling built around morning and evening routines, with reflections inspired by Stoic philosophy.",
  },
  journey: {
    name: "Journey",
    bestFor: "Journaling across many devices",
    summary: "A diary app available on phones, the web and desktop, with photos, tags and journaling prompts.",
  },
  appleJournal: {
    name: "Apple Journal",
    bestFor: "A built-in journal on iPhone",
    summary: "Apple's own journaling app on iPhone, which suggests moments to write about from your photos, places and activity.",
  },
  fabulous: {
    name: "Fabulous",
    bestFor: "Coached daily routines",
    summary: "Helps you build morning, afternoon and evening routines step by step, with coaching along the way.",
  },
  reflectly: {
    name: "Reflectly",
    bestFor: "Structured, prompt-led entries",
    summary: "Walks you through short, structured journal entries with questions, which helps when you don't know where to start.",
  },
  stoicMood: {
    name: "Stoic",
    bestFor: "Journaling prompts with mood tracking",
    summary: "Prompt-led morning and evening journaling that also records your mood, for people who want a little more reflection than taps.",
  },
  habitica: {
    name: "Habitica",
    bestFor: "Gamified habit tracking",
    summary: "Turns your habits and to-dos into a role-playing game, with rewards for keeping them up.",
  },
};

const ALSO_CHECK = "Prefer a full round-up? See our guides to the best mood tracker apps and the best apps for stress and anxiety.";

export const alternativeGuides: Guide[] = [
  {
    slug: "headspace-alternatives",
    category: "Alternatives",
    title: "Headspace alternatives: 5 apps worth trying",
    metaTitle: "Headspace Alternatives: 5 Apps Worth Trying",
    description:
      "Looking for a Headspace alternative? Five apps for different needs: voice journaling and mood tracking, sleep, free meditation and research-based training.",
    keywords: [
      "headspace alternatives",
      "apps like headspace",
      "headspace alternative free",
      "best meditation apps",
      "headspace vs calm",
    ],
    published: D,
    updated: D,
    intro:
      "The best Headspace alternative depends on why you're switching. If you want to understand what affects your mood rather than meditate, try MOJO's 30-second voice check-ins. For relaxation and sleep, Calm. For a huge free library, Insight Timer or Medito. For free, research-informed training, the Healthy Minds Program.",
    sections: [
      {
        heading: "What Headspace does well",
        body: [
          "Headspace is one of the best-known meditation apps for good reason: it makes mindfulness approachable, with guided sessions, structured courses, sleep content and focus music. If guided meditation works for you, it's a strong choice.",
        ],
      },
      {
        heading: "Why people look for alternatives",
        body: [],
        bullets: [
          "Meditation doesn't stick for them, and they want something quicker.",
          "They want to understand why some days feel worse, not just calm down.",
          "They'd like a free option.",
          "They mainly want help with sleep.",
        ],
      },
      picks("Headspace"),
      {
        heading: "How MOJO compares to Headspace",
        body: [
          "They do different jobs. Headspace helps you calm your mind through guided practice. MOJO helps you understand your days: you say how your day went in about 30 seconds, and MOJO logs your mood, sleep and activity and shows patterns, like brighter days after more sleep or calmer evenings after a walk.",
          "Many people use both: a meditation app for the moment, and MOJO to see what makes the moments less frequent.",
        ],
      },
      { heading: "More comparisons", body: [ALSO_CHECK] },
      SAFETY_SECTION,
    ],
    apps: [
      mojo("Understanding your mood instead of meditating", `A 30-second voice check-in becomes a journal entry with your mood, sleep and activity logged, plus a daily energy score and the patterns behind it. ${LAUNCH}`),
      APPS.calm,
      APPS.insightTimer,
      APPS.medito,
      APPS.healthyMinds,
    ],
    takeaways: [
      "Pick an alternative based on why Headspace isn't working for you.",
      "Calm suits sleep and relaxation; Insight Timer and Medito are strong free options.",
      "MOJO is for understanding your mood, sleep and energy, not meditation.",
      "You can combine a meditation app with a daily check-in.",
    ],
    faqs: [
      {
        q: "What is a good free alternative to Headspace?",
        a: "Insight Timer has a large free library, and Medito and the Healthy Minds Program are free apps from nonprofits. MOJO is free to start if you'd rather track your mood than meditate.",
      },
      {
        q: "Is Calm or Headspace better?",
        a: "Both are strong. Headspace is known for beginner-friendly courses; Calm is known for sleep content like Sleep Stories. Try the free trials and see which you return to.",
      },
      {
        q: "Is there an app like Headspace that tracks mood?",
        a: "MOJO focuses on mood, sleep and activity tracking through quick voice check-ins, and shows which habits lift your energy. It complements a meditation app rather than replacing guided practice.",
      },
    ],
    related: ["calm-alternatives", "best-apps-for-stress-and-anxiety", "how-to-calm-anxiety"],
  },
  {
    slug: "calm-alternatives",
    category: "Alternatives",
    title: "Calm alternatives: 5 apps for relaxation, sleep and mood",
    metaTitle: "Calm Alternatives: 5 Apps for Sleep and Relaxation",
    description:
      "Searching for a Calm app alternative? Five options for sleep sounds, guided meditation, free libraries and understanding what affects your mood and sleep.",
    keywords: [
      "calm alternatives",
      "apps like calm",
      "calm app alternative free",
      "sleep apps",
      "relaxation apps",
    ],
    published: D,
    updated: D,
    intro:
      "If you like Calm but want something different: Headspace for structured meditation courses, Insight Timer or Medito for free guided sessions, BetterSleep for sleep sounds you can mix, and MOJO if you want to see how your sleep, mood and daily habits connect through 30-second voice check-ins.",
    sections: [
      {
        heading: "What Calm does well",
        body: [
          "Calm is known for helping people relax and sleep: Sleep Stories, calming music, breathing exercises and guided meditations. If winding down is what you need, it's a very good app.",
        ],
      },
      {
        heading: "Why people look for alternatives",
        body: [],
        bullets: [
          "They want structured courses rather than a library.",
          "They'd like a free option.",
          "They want more control over sleep sounds.",
          "They want to understand why they sleep badly, not just fall asleep tonight.",
        ],
      },
      picks("Calm"),
      {
        heading: "How MOJO compares to Calm",
        body: [
          "Calm helps you relax in the moment. MOJO helps you see the bigger picture: a quick voice check-in each day logs your mood, sleep and activity, and after a week or two shows patterns, like shorter nights before your hardest days, or better sleep after time outdoors.",
          "They work well together: Calm for winding down, MOJO for finding what helps you sleep and feel better.",
        ],
      },
      { heading: "More comparisons", body: [ALSO_CHECK] },
      SAFETY_SECTION,
    ],
    apps: [
      mojo("Seeing how sleep, mood and habits connect", `Say how your day went in about 30 seconds; MOJO logs your mood, sleep and activity and shows what tends to lift or drain your energy. ${LAUNCH}`),
      APPS.headspace,
      APPS.insightTimer,
      APPS.medito,
      APPS.betterSleep,
    ],
    takeaways: [
      "Headspace suits structured courses; BetterSleep suits sleep sounds.",
      "Insight Timer and Medito are strong free options.",
      "MOJO shows how your sleep, mood and habits connect.",
      "A relaxation app and a daily check-in work well together.",
    ],
    faqs: [
      {
        q: "What is a free alternative to Calm?",
        a: "Insight Timer has a large free library and Medito is free from a nonprofit. MOJO is free to start if you want to track how your sleep affects your mood.",
      },
      {
        q: "What app is like Calm but for tracking sleep and mood?",
        a: "MOJO logs your sleep alongside mood and activity from a 30-second voice check-in, and shows which habits lead to better days.",
      },
    ],
    related: ["headspace-alternatives", "how-sleep-affects-mood", "best-apps-for-stress-and-anxiety"],
  },
  {
    slug: "daylio-alternatives",
    category: "Alternatives",
    title: "Daylio alternatives: 5 mood trackers to try",
    metaTitle: "Daylio Alternatives: 5 Mood Tracker Apps to Try",
    description:
      "Want a Daylio alternative? Five mood trackers compared: voice check-ins, emotion naming, detailed correlations and self-care, so you can find the right fit.",
    keywords: [
      "daylio alternatives",
      "apps like daylio",
      "daylio alternative",
      "mood tracker app",
      "best mood tracker",
    ],
    published: D,
    updated: D,
    intro:
      "The right Daylio alternative depends on how you like to log. MOJO lets you just talk for 30 seconds and logs mood, sleep and activity for you. How We Feel focuses on naming emotions precisely. Bearable suits people who want detailed, customisable tracking. Finch wraps check-ins into a gentle self-care routine.",
    sections: [
      {
        heading: "What Daylio does well",
        body: [
          "Daylio made mood tracking fast: pick a mood, tap the activities you did, done. No writing needed, and charts show how your mood changes over time. It's a great fit if quick taps work for you.",
        ],
      },
      {
        heading: "Why people look for alternatives",
        body: [],
        bullets: [
          "They want to capture context in their own words, not just icons.",
          "They want sleep tracked alongside mood.",
          "They want more detailed insights, or fewer taps.",
          "They want something more emotionally supportive.",
        ],
      },
      picks("Daylio"),
      {
        heading: "How MOJO compares to Daylio",
        body: [
          "Both are about seeing your mood patterns. Daylio uses taps; MOJO uses your voice. You say how your day went, MOJO keeps it as a journal entry and picks out your mood, what lifted or drained you, your sleep and your activities, which you can review before saving. You get the context of a journal with the speed of a tap tracker, plus a daily energy score.",
        ],
      },
      { heading: "More comparisons", body: [ALSO_CHECK] },
      SAFETY_SECTION,
    ],
    apps: [
      mojo("Logging by voice, with your own words kept", `Talk for 30 seconds; MOJO logs mood, sleep and activity, keeps your words as a journal entry and shows patterns. ${LAUNCH}`),
      APPS.howWeFeel,
      APPS.bearable,
      APPS.finch,
      APPS.stoicMood,
    ],
    takeaways: [
      "Choose by logging style: voice, emotion words, detailed factors or self-care goals.",
      "Track sleep and activity with mood to understand the why.",
      "Give any tracker two to four weeks before judging it.",
    ],
    faqs: [
      {
        q: "Is there a mood tracker like Daylio that uses voice?",
        a: "Yes. MOJO lets you speak your check-in and logs your mood, sleep and activity from what you say.",
      },
      {
        q: "What's a good free alternative to Daylio?",
        a: "How We Feel is free from a nonprofit, and MOJO is free to start.",
      },
    ],
    related: ["best-mood-tracker-apps", "mood-journal", "how-to-track-your-mood"],
  },
  {
    slug: "day-one-alternatives",
    category: "Alternatives",
    title: "Day One alternatives: 5 journaling apps to try",
    metaTitle: "Day One Alternatives: 5 Journaling Apps to Try",
    description:
      "Looking for a Day One alternative? Five journaling apps compared: voice journaling, guided prompts, cross-device diaries and Apple's built-in Journal app.",
    keywords: [
      "day one alternatives",
      "apps like day one",
      "day one journal alternative",
      "journaling app",
      "best journal app",
    ],
    published: D,
    updated: D,
    intro:
      "If Day One isn't the right fit: MOJO lets you journal by voice in 30 seconds and tracks your mood, sleep and activity; Stoic guides you with morning and evening prompts; Journey works across phones, the web and desktop; and Apple Journal is built into the iPhone.",
    sections: [
      {
        heading: "What Day One does well",
        body: [
          "Day One is a polished, long-established journal: rich entries with photos, multiple journals, templates and reminders. If you enjoy writing longer entries, it's excellent.",
        ],
      },
      {
        heading: "Why people look for alternatives",
        body: [],
        bullets: [
          "They don't have time or energy to write most days.",
          "They want prompts to get started.",
          "They want to see mood patterns, not just entries.",
          "They want something built in or cross-platform.",
        ],
      },
      picks("Day One"),
      {
        heading: "How MOJO compares to Day One",
        body: [
          "Day One is for writing. MOJO is for talking. You speak for about 30 seconds and MOJO turns it into a journal entry, then logs your mood, sleep and activity from what you said, so your journal also becomes a picture of what lifts or drains your energy. You can type too, when you want to.",
        ],
      },
      { heading: "More comparisons", body: [ALSO_CHECK.replace("the best mood tracker apps", "the best journaling apps")] },
      SAFETY_SECTION,
    ],
    apps: [
      mojo("Journaling by voice", `Talk about your day; MOJO writes the entry and tracks your mood, sleep and activity. ${LAUNCH}`),
      APPS.stoic,
      APPS.journey,
      APPS.appleJournal,
      APPS.reflectly,
    ],
    takeaways: [
      "Voice journaling removes the blank-page problem.",
      "Prompt-led apps help when you don't know what to write.",
      "Mood tracking alongside entries shows patterns over time.",
    ],
    faqs: [
      {
        q: "What's an alternative to Day One for people who don't like writing?",
        a: "A voice journal like MOJO: you speak for 30 seconds and it creates the entry for you.",
      },
      {
        q: "Is there a free alternative to Day One?",
        a: "Apple Journal is built into recent iPhones, and MOJO is free to start.",
      },
    ],
    related: ["best-journaling-apps", "voice-journaling-guide", "how-to-start-journaling"],
  },
  {
    slug: "finch-alternatives",
    category: "Alternatives",
    title: "Finch alternatives: 5 self-care apps to try",
    metaTitle: "Finch Alternatives: 5 Self-Care Apps to Try",
    description:
      "Love Finch but want something different? Five self-care app alternatives for mood tracking, voice journaling, habit building and gamified routines.",
    keywords: [
      "finch alternatives",
      "apps like finch",
      "finch self care app alternative",
      "self care apps",
      "habit tracker app",
    ],
    published: D,
    updated: D,
    intro:
      "Finch alternatives depend on what you liked about it. For quick check-ins that show your patterns, MOJO's 30-second voice check-ins. For naming emotions, How We Feel. For a tap-based mood diary, Daylio. For coached routines, Fabulous. For a game-like habit tracker, Habitica.",
    sections: [
      {
        heading: "What Finch does well",
        body: [
          "Finch makes self-care feel rewarding: you look after a virtual pet by completing small goals, reflections and mood check-ins. For many people, that gentle motivation is exactly what keeps the habit going.",
        ],
      },
      {
        heading: "Why people look for alternatives",
        body: [],
        bullets: [
          "They want more insight into their moods and energy.",
          "They prefer talking to tapping or typing.",
          "They want structured routines or a stronger game element.",
        ],
      },
      picks("Finch"),
      {
        heading: "How MOJO compares to Finch",
        body: [
          "Finch motivates you through care for a pet. MOJO motivates you through insight: a quick voice check-in each day shows how your sleep, activities and mood connect, with a daily energy score and challenges and badges for keeping the habit.",
        ],
      },
      { heading: "More comparisons", body: [ALSO_CHECK] },
      SAFETY_SECTION,
    ],
    apps: [
      mojo("Insight into your moods and energy", `Talk for 30 seconds; MOJO logs mood, sleep and activity and shows what lifts your energy, with goals, challenges and badges. ${LAUNCH}`),
      APPS.howWeFeel,
      APPS.daylio,
      APPS.fabulous,
      APPS.habitica,
    ],
    takeaways: [
      "Pick based on what keeps you motivated: care, insight, routines or games.",
      "Insight-led apps show which habits actually help you.",
      "Small daily check-ins beat big occasional efforts.",
    ],
    faqs: [
      {
        q: "What's an app like Finch for adults who want insights?",
        a: "MOJO focuses on understanding your mood, sleep and energy through quick voice check-ins, with goals and challenges to keep the habit going.",
      },
      {
        q: "Is there a free alternative to Finch?",
        a: "How We Feel is free, and MOJO is free to start.",
      },
    ],
    related: ["build-healthy-habits-that-stick", "best-mood-tracker-apps", "daylio-alternatives"],
  },
];
