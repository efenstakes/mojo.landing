import type { AppPick, Guide } from "./types";

/**
 * Comparison guides. We make Mojo, which these pages disclose up front. Descriptions of other
 * apps stay general and factual (what each is known for), with no prices, ratings or feature
 * claims that go stale quickly.
 */

const mojo = (bestFor: string, summary: string): AppPick => ({ name: "Mojo", bestFor, summary, isMojo: true });

const DISCLOSURE =
  "Disclosure: we make Mojo, so it's listed first. Every other app here is one we'd genuinely suggest for the use case, and we've kept descriptions to what each app is known for.";

const SAFETY_SECTION = {
  heading: "Apps help, but they're not treatment",
  body: [
    "Wellness apps are good at building habits and helping you notice patterns. They don't diagnose or treat anything. If low mood, anxiety or exhaustion last for weeks or make it hard to function, talk to a doctor or mental health professional. If you're in crisis, contact your local emergency number or a crisis line such as 988 in the US or Samaritans on 116 123 in the UK.",
  ],
};

export const appGuides: Guide[] = [
  {
    slug: "best-mental-health-apps-for-9-to-5-workers",
    category: "App guides",
    title: "The best mental health apps for 9-5 workers",
    metaTitle: "Best Mental Health Apps for 9-5 Workers",
    description:
      "The best mental health apps for people with full-time jobs: quick check-ins, meditation for busy days, sleep help and journaling that fits around a 9-5.",
    keywords: [
      "best mental health apps for 9-5 workers",
      "mental health apps for working professionals",
      "best wellness apps for work stress",
      "apps for work stress",
      "mental health app for busy people",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "If you work a 9-5, the best mental health app is one that fits into the cracks of your day: a 30-second check-in, a 5-minute reset between meetings, or something to switch off with at night. Mojo is best for spotting what drains you through quick voice check-ins; Headspace and Calm are strong for guided meditation and sleep; Insight Timer has a huge free library; and Finch makes small daily self-care goals feel rewarding.",
    sections: [
      {
        heading: "What a 9-5 worker actually needs from an app",
        body: [
          "Time is the constraint. Apps that ask for 20 minutes of setup or long daily sessions get abandoned by week two. Look for something that takes under two minutes on a busy day, works on your commute or lunch break, and helps you see the link between your workdays, your sleep and your mood.",
        ],
        bullets: [
          "Fast daily use: under two minutes on a busy day.",
          "A way to switch off after work, not just another inbox.",
          "Patterns over time, so you can see what's draining you.",
          "Privacy you trust, especially if you write about your job.",
        ],
      },
      {
        heading: "Our picks",
        body: [DISCLOSURE],
      },
      {
        heading: "How to pick the right one",
        body: [
          "If you don't know why some weeks feel worse than others, start with tracking: Mojo or a mood tracker will show you. If you already know you're stressed and want to calm down, start with guided meditation. Many people use one of each: a quick check-in for awareness and a meditation app for the moments that need it.",
          "Check whether your employer offers a wellbeing benefit or an Employee Assistance Programme (EAP). Some include access to meditation apps or free, confidential counselling.",
        ],
      },
      SAFETY_SECTION,
    ],
    apps: [
      mojo(
        "Seeing what drains you at work",
        "Say how your day went in about 30 seconds and Mojo turns it into a journal entry, logs your mood, sleep and activity, and shows patterns like your hardest weekday or how short nights affect your focus. Launching on iOS and Android on 1 December 2026.",
      ),
      {
        name: "Headspace",
        bestFor: "Short guided meditations",
        summary:
          "One of the best-known meditation apps, with guided sessions for stress, focus and sleep, including short ones that fit between meetings. Some employers offer it as a workplace benefit.",
      },
      {
        name: "Calm",
        bestFor: "Winding down and sleep",
        summary:
          "Known for Sleep Stories, calming music and guided meditations. A good choice if work stress follows you into the evening and affects your sleep.",
      },
      {
        name: "Insight Timer",
        bestFor: "A big free meditation library",
        summary:
          "A very large library of guided meditations and talks from many teachers, with a lot available for free. Good if you like variety.",
      },
      {
        name: "Finch",
        bestFor: "Gentle daily self-care goals",
        summary:
          "A self-care app where you look after a virtual pet by completing small goals and reflections. Makes basic habits like drinking water or taking a break feel rewarding.",
      },
    ],
    takeaways: [
      "Pick an app you can use in under two minutes on your busiest day.",
      "Tracking shows you what's draining you; meditation helps you recover.",
      "Check your employer's wellbeing benefits before paying for anything.",
      "Apps support wellbeing; see a professional if things don't improve.",
    ],
    faqs: [
      {
        q: "What is the best mental health app for work stress?",
        a: "It depends on what you need. For understanding what drives your stress, a check-in app like Mojo that tracks mood, sleep and activity works well. For calming down in the moment, a meditation app like Headspace, Calm or Insight Timer is a good fit.",
      },
      {
        q: "Are there free mental health apps for working professionals?",
        a: "Yes. Insight Timer has a large free library, and many apps including Mojo are free to start. Your employer may also offer a wellbeing benefit or an EAP at no cost to you.",
      },
      {
        q: "How much time do I need to spend in a mental health app each day?",
        a: "Less than you'd think. A 30-second check-in or a 5-minute meditation done consistently beats a long session you only manage once a week.",
      },
    ],
    related: ["managing-mental-health-working-9-to-5", "signs-of-burnout-at-work", "best-mood-tracker-apps"],
  },
  {
    slug: "best-mental-health-apps-for-students",
    category: "App guides",
    title: "The best mental health apps for students",
    metaTitle: "Best Mental Health Apps for Students",
    description:
      "The best mental health apps for university and college students: mood tracking, exam stress, sleep and journaling apps that fit around lectures and deadlines.",
    keywords: [
      "best mental health apps for students",
      "mental health apps for college students",
      "mental health apps for university students",
      "student wellbeing apps",
      "apps for exam stress",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "The best mental health apps for students are quick, free to start and help with the things uni throws at you: irregular sleep, exam stress and loneliness. Mojo is best for spotting how sleep and routine affect your mood with 30-second voice check-ins; How We Feel helps you name your emotions; Finch makes self-care feel rewarding; Daylio is a fast tap-based mood diary; and Insight Timer offers a large free meditation library.",
    sections: [
      {
        heading: "What students should look for",
        body: [
          "Student life is irregular, so an app needs to work on chaotic days, not just calm ones. Look for something fast, free to start, private, and able to show you how your sleep, routine and social life affect your mood, especially around exams.",
        ],
        bullets: [
          "Free to start, so you can try it without commitment.",
          "Quick enough to use in a corridor between lectures.",
          "Tracks sleep as well as mood: it's the biggest lever for most students.",
          "Private by default.",
        ],
      },
      {
        heading: "Our picks",
        body: [DISCLOSURE],
      },
      {
        heading: "Pair the app with campus support",
        body: [
          "Most universities offer free counselling and wellbeing services, and can arrange extensions or adjustments if you're struggling. An app is a great daily habit; your university's support team is there for the times you need more.",
        ],
      },
      SAFETY_SECTION,
    ],
    apps: [
      mojo(
        "Seeing how sleep and routine affect your mood",
        "Talk for 30 seconds about your day and Mojo logs your mood, sleep and activity, then points out patterns like better days after seven-plus hours of sleep or when you leave your room before noon. Launching on iOS and Android on 1 December 2026.",
      ),
      {
        name: "How We Feel",
        bestFor: "Naming your emotions",
        summary:
          "A free mood check-in app from a nonprofit that helps you put a precise name to how you feel and suggests short strategies to help.",
      },
      {
        name: "Finch",
        bestFor: "Making self-care feel rewarding",
        summary:
          "Look after a virtual pet by completing small self-care goals and reflections. Popular with students who find it hard to stick to basic routines.",
      },
      {
        name: "Daylio",
        bestFor: "A quick tap-based mood diary",
        summary:
          "A micro-diary where you pick a mood and tap the activities you did, no writing needed. Good for building a simple daily mood habit.",
      },
      {
        name: "Insight Timer",
        bestFor: "Free meditations for exam stress",
        summary:
          "A large library of guided meditations, many free, including sessions for stress, focus and sleep.",
      },
    ],
    takeaways: [
      "Choose an app that's free to start and fast on busy days.",
      "Track sleep alongside mood; it's the biggest lever for most students.",
      "Use your university's wellbeing services alongside any app.",
    ],
    faqs: [
      {
        q: "What is the best free mental health app for students?",
        a: "Insight Timer and How We Feel are known for having a lot available for free, and Mojo is free to start. The best one is the one you'll actually open every day.",
      },
      {
        q: "Can a mental health app help with exam stress?",
        a: "It can help you notice what makes stress worse, such as short sleep, and give you tools like breathing exercises to calm down. If exam anxiety stops you studying or sleeping, talk to your university's wellbeing service.",
      },
    ],
    related: ["managing-mental-health-at-university", "exam-stress-tips", "sleep-tips-for-students"],
  },
  {
    slug: "best-mood-tracker-apps",
    category: "App guides",
    title: "The best mood tracker apps",
    metaTitle: "Best Mood Tracker Apps: Voice, Tap and Journal",
    description:
      "The best mood tracker apps compared: voice check-ins, tap-based diaries and journaling apps. Find the mood tracker you'll actually stick with.",
    keywords: [
      "best mood tracker apps",
      "mood tracker app",
      "mood tracking app",
      "mood diary app",
      "mood and sleep tracker",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "The best mood tracker is the one you'll use every day, so it comes down to how you like to log. Mojo lets you just talk and logs mood, sleep and activity for you; Daylio is a fast tap-based diary; How We Feel focuses on naming your emotions precisely; and Finch wraps mood check-ins into a gentle self-care routine.",
    sections: [
      {
        heading: "Why most people give up on mood tracking",
        body: [
          "Mood tracking only works if you keep going for a few weeks, because patterns need data. Most people stop because logging feels like a chore, or because they never see anything useful come back. The best apps make logging nearly effortless and show you insights early.",
        ],
      },
      {
        heading: "Three styles of mood tracker",
        body: [],
        bullets: [
          "Voice: say how your day went and the app extracts your mood and context. Fastest on busy days.",
          "Tap-based: pick a mood and tap activities. Quick and structured, but less context.",
          "Journal-based: write freely and tag a mood. Most context, most effort.",
        ],
      },
      {
        heading: "Our picks",
        body: [DISCLOSURE],
      },
      {
        heading: "Track the things that move your mood",
        body: [
          "Mood on its own tells you how you felt. Mood alongside sleep and activity tells you why. Whatever app you choose, make sure it records at least sleep and what you did that day, so you can see which habits lift you.",
        ],
      },
      SAFETY_SECTION,
    ],
    apps: [
      mojo(
        "Logging by voice, with sleep and activity included",
        "Speak for about 30 seconds and Mojo logs your mood, sleep and activity from what you said, keeps it as a journal entry, and shows patterns plus a daily energy score once it has about a week of check-ins. Launching on iOS and Android on 1 December 2026.",
      ),
      {
        name: "Daylio",
        bestFor: "Tap-based mood diary",
        summary:
          "One of the best-known mood trackers. You choose a mood and tap activities, with no writing required, and it charts your moods over time.",
      },
      {
        name: "How We Feel",
        bestFor: "Precise emotion check-ins",
        summary:
          "A free app from a nonprofit that helps you pick the exact emotion you're feeling and suggests short strategies based on it.",
      },
      {
        name: "Finch",
        bestFor: "Mood check-ins inside a self-care routine",
        summary:
          "Combines mood check-ins and reflections with caring for a virtual pet, which keeps the habit going for many people.",
      },
    ],
    takeaways: [
      "Pick a logging style you'll stick with: voice, tap or write.",
      "Track sleep and activity with your mood to understand the why.",
      "Give it two to four weeks before judging what it shows you.",
    ],
    faqs: [
      {
        q: "What is the easiest mood tracker app to use?",
        a: "Voice-based trackers like Mojo are the quickest because you just talk. Tap-based apps like Daylio are also fast if you prefer not to speak.",
      },
      {
        q: "Is there a mood tracker that also tracks sleep?",
        a: "Yes. Mojo logs sleep along with mood and activity from your voice check-in, and several other apps let you add sleep as a tag or activity.",
      },
      {
        q: "How long before a mood tracker shows useful patterns?",
        a: "Usually two to four weeks of consistent check-ins. Mojo starts showing an energy score after about a week.",
      },
    ],
    related: ["how-to-track-your-mood", "how-sleep-affects-mood", "best-journaling-apps"],
  },
  {
    slug: "best-journaling-apps",
    category: "App guides",
    title: "The best journaling apps for mental health",
    metaTitle: "Best Journaling Apps for Mental Health",
    description:
      "The best journaling apps for mental health: voice journaling, guided prompts and classic diaries compared, so you can pick one you'll write (or talk) in daily.",
    keywords: [
      "best journaling apps",
      "best journaling app for mental health",
      "voice journal app",
      "journaling app with prompts",
      "digital journal app",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "The best journaling app is one that removes the blank-page problem. Mojo lets you journal by voice and turns it into an entry with your mood, sleep and activity; Day One is a polished classic journal with photos and multiple journals; Stoic guides you with morning and evening prompts; and Reflectly offers structured, prompt-led entries.",
    sections: [
      {
        heading: "Why journal in an app at all",
        body: [
          "Paper journals are lovely, but apps make it easier to journal anywhere, search old entries, add prompts when you're stuck and see your mood over time. For many people, the biggest win is speed: a few lines on your phone beats a perfect page you never write.",
        ],
      },
      {
        heading: "Voice, prompts or free writing?",
        body: [],
        bullets: [
          "Voice journaling: the fastest way in, and great if writing feels like a chore.",
          "Prompt-led journaling: good when you don't know what to write about.",
          "Free writing: best for people who already enjoy writing at length.",
        ],
      },
      {
        heading: "Our picks",
        body: [DISCLOSURE],
      },
      SAFETY_SECTION,
    ],
    apps: [
      mojo(
        "Voice journaling",
        "Just talk about your day. Mojo transcribes it into a journal entry, picks out your mood, sleep and activity, and helps you see patterns across weeks. You can type too. Launching on iOS and Android on 1 December 2026.",
      ),
      {
        name: "Day One",
        bestFor: "A polished, classic journal",
        summary:
          "A long-established journaling app with photos, multiple journals, templates and reminders. Great if you enjoy writing longer entries.",
      },
      {
        name: "Stoic",
        bestFor: "Guided morning and evening prompts",
        summary:
          "Prompt-led journaling built around morning and evening routines, with reflections inspired by Stoic philosophy and mood tracking.",
      },
      {
        name: "Reflectly",
        bestFor: "Structured, prompt-led entries",
        summary:
          "Walks you through short, structured entries with questions, which helps if you never know where to start.",
      },
    ],
    takeaways: [
      "Pick the format that removes your excuse: voice, prompts or free writing.",
      "Short and daily beats long and occasional.",
      "Look for mood tracking alongside entries to spot patterns.",
    ],
    faqs: [
      {
        q: "What's the best journaling app if I hate writing?",
        a: "A voice journaling app like Mojo. You talk for 30 seconds and it turns what you said into an entry.",
      },
      {
        q: "Is journaling in an app as good as on paper?",
        a: "The benefits come from reflecting regularly, not the medium. Use whichever you'll stick with. Apps add search, reminders and mood trends.",
      },
    ],
    related: ["voice-journaling-guide", "benefits-of-journaling-for-mental-health", "journal-prompts-for-work-stress"],
  },
];
