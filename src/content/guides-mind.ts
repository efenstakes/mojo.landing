import type { Guide } from "./types";

const CRISIS =
  "If anxiety or low mood lasts for weeks, gets in the way of work, sleep or relationships, or you have thoughts of harming yourself, please talk to a doctor or mental health professional. If you're in crisis, contact your local emergency number or a crisis line such as 988 in the US or Samaritans on 116 123 in the UK.";

const D = "2026-11-04";

export const mindGuides: Guide[] = [
  // ------------------------------------------------------------------ stress & anxiety
  {
    slug: "how-to-reduce-stress",
    category: "Stress & anxiety",
    title: "How to reduce stress: 12 techniques that actually work",
    metaTitle: "How to Reduce Stress: 12 Techniques That Work",
    description:
      "Practical, evidence-informed ways to reduce stress today and over time: breathing, movement, sleep, boundaries, journaling and spotting your own triggers.",
    keywords: [
      "how to reduce stress",
      "stress relief techniques",
      "ways to manage stress",
      "how to relieve stress fast",
      "stress management tips",
    ],
    published: D,
    updated: D,
    intro:
      "The fastest ways to reduce stress work on your body first: slow breathing with a longer out-breath, a short walk, or a few minutes away from the screen. The lasting ways work on your week: enough sleep, regular movement, clearer boundaries, people you can talk to, and knowing your own triggers so you can plan around them.",
    sections: [
      {
        heading: "What stress is doing to you",
        body: [
          "Stress is your body's response to pressure. Heart rate rises, breathing gets shallow, muscles tense and your mind narrows onto the problem. In short bursts that helps you act. When it never switches off, it shows up as poor sleep, irritability, tension headaches, low mood and feeling constantly behind.",
          "So stress relief has two jobs: calming the body in the moment, and lowering how often and how hard stress hits over a normal week.",
        ],
      },
      {
        heading: "In the moment: calm your body first",
        body: ["When stress spikes, it's hard to think your way out. Start with your body:"],
        bullets: [
          "1. Breathe slowly with a longer out-breath: in for 4, out for 6, for two to three minutes.",
          "2. Drop your shoulders, unclench your jaw and loosen your hands.",
          "3. Walk for five to ten minutes, outside if you can.",
          "4. Step away from screens and notifications for a short break.",
          "5. Name it: say or write \"I'm stressed about X\". Labelling a feeling tends to take some of the heat out of it.",
        ],
      },
      {
        heading: "Over the week: lower the baseline",
        body: [],
        bullets: [
          "6. Protect seven or more hours of sleep. Short sleep makes everything feel more stressful.",
          "7. Move most days. Regular activity is one of the most reliable ways to reduce stress.",
          "8. Set a clear end to your day and a short shutdown routine.",
          "9. Cut back on caffeine after midday and on alcohol, which both disturb sleep.",
          "10. Spend time with people who make you feel better, even briefly.",
        ],
      },
      {
        heading: "Get it out of your head",
        body: [
          "11. Write or talk it out. A brain dump of everything on your mind, followed by one next step for each item, turns a vague cloud of worry into a list you can act on. Many people find speaking easier than writing at the end of a long day.",
        ],
      },
      {
        heading: "Find your own triggers",
        body: [
          "12. Track it. Stress follows patterns: certain days, meetings, people, short nights. A daily check-in of mood, sleep and what you did makes those patterns visible within a couple of weeks, so you can plan for them instead of being ambushed.",
          "MOJO is built for this. Say how your day went in about 30 seconds and MOJO logs your mood, sleep and activity, keeps it as a journal entry, and shows you what tends to lift or drain your energy.",
        ],
      },
      { heading: "When stress needs more than self-help", body: [CRISIS] },
    ],
    takeaways: [
      "In the moment, calm your body: slow breathing, loosen tension, take a short walk.",
      "Over the week, sleep, movement and boundaries lower your baseline stress.",
      "Write or talk it out, then pick one next step.",
      "Track your days to find your personal stress triggers.",
    ],
    faqs: [
      {
        q: "What is the fastest way to reduce stress?",
        a: "Slow breathing with a longer out-breath (in for 4, out for 6) for a couple of minutes, combined with relaxing your shoulders and jaw. A short walk is also very effective.",
      },
      {
        q: "How can I reduce stress long term?",
        a: "Consistent sleep, regular movement, clear boundaries around work, time with supportive people, and noticing your own triggers so you can plan around them.",
      },
      {
        q: "Can journaling reduce stress?",
        a: "Many people find it helps. Writing or talking through what's on your mind makes worries more concrete and easier to act on, and regular check-ins show patterns over time.",
      },
    ],
    related: ["stress-vs-anxiety", "how-to-calm-anxiety", "how-to-decompress-after-work"],
  },
  {
    slug: "how-to-calm-anxiety",
    category: "Stress & anxiety",
    title: "How to calm anxiety: 10 techniques for anxious moments",
    metaTitle: "How to Calm Anxiety: 10 Techniques That Help",
    description:
      "Simple techniques to calm anxiety when it hits: slow breathing, 5-4-3-2-1 grounding, worry time and more, plus everyday habits that make anxious days less frequent.",
    keywords: [
      "how to calm anxiety",
      "how to calm down anxiety fast",
      "grounding techniques for anxiety",
      "5 4 3 2 1 grounding",
      "anxiety coping skills",
    ],
    published: D,
    updated: D,
    intro:
      "When anxiety hits, bring your body down first: breathe slowly with a longer out-breath and ground yourself in what you can see, hear and feel right now. Once the wave passes, deal with the worry itself, by writing it down or saving it for a set worry time. Over weeks, sleep, movement, less caffeine and noticing your patterns make anxious days less frequent.",
    sections: [
      {
        heading: "In the moment",
        body: [],
        bullets: [
          "1. Slow your breathing: in through your nose for 4, out through your mouth for 6. Repeat for a few minutes.",
          "2. Try 5-4-3-2-1 grounding: name 5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell and 1 you can taste.",
          "3. Feel your feet on the floor and press them down. Notice the chair holding you.",
          "4. Hold something cold, or splash cool water on your face.",
          "5. Remind yourself that anxiety rises and then falls. This feeling will pass, even if it doesn't feel that way now.",
        ],
      },
      {
        heading: "When your mind keeps racing",
        body: [],
        bullets: [
          "6. Write the worry down, word for word. Then ask: what's the evidence, what's most likely to happen, and what could I do about it?",
          "7. Use worry time: set aside 15 minutes later in the day for worrying. When a worry pops up, note it and save it for then.",
          "8. Do one small, concrete thing. Action, however tiny, tends to quieten worry.",
        ],
      },
      {
        heading: "Habits that make anxiety less frequent",
        body: [],
        bullets: [
          "9. Protect sleep, move most days and go easy on caffeine and alcohol, which can both make anxiety worse.",
          "10. Track how you feel. A few weeks of check-ins often show what makes anxious days more likely: short nights, skipped meals, certain situations.",
        ],
      },
      {
        heading: "Notice your patterns",
        body: [
          "Anxiety can feel random, but it often isn't. MOJO lets you say how your day went in about 30 seconds, then logs your mood, sleep and activity and shows patterns back to you, like calmer days after a walk or more anxious days after short sleep.",
        ],
      },
      { heading: "When to get help", body: [CRISIS] },
    ],
    takeaways: [
      "Calm your body first: slow breathing and grounding.",
      "Write worries down and save them for a set worry time.",
      "Sleep, movement and less caffeine reduce how often anxiety hits.",
      "Track your days to spot what makes anxiety more likely.",
    ],
    faqs: [
      {
        q: "What is the 5-4-3-2-1 technique?",
        a: "A grounding exercise: name 5 things you can see, 4 you can feel, 3 you can hear, 2 you can smell and 1 you can taste. It moves your attention from anxious thoughts to your surroundings.",
      },
      {
        q: "How do I calm anxiety at night?",
        a: "Write down what's on your mind before bed, keep a calm wind-down without screens, and use slow breathing in bed. If worries keep coming, note them for tomorrow's worry time.",
      },
      {
        q: "When is anxiety a problem?",
        a: "When it's frequent, hard to control, lasts for weeks or gets in the way of daily life. That's a good time to talk to a doctor or mental health professional.",
      },
    ],
    related: ["journal-prompts-for-anxiety", "how-to-stop-overthinking", "stress-vs-anxiety"],
  },
  {
    slug: "stress-vs-anxiety",
    category: "Stress & anxiety",
    title: "Stress vs anxiety: what's the difference?",
    metaTitle: "Stress vs Anxiety: What's the Difference?",
    description:
      "Stress and anxiety feel similar but aren't the same. How to tell them apart, why they overlap, and what helps with each, plus when to talk to a professional.",
    keywords: [
      "stress vs anxiety",
      "difference between stress and anxiety",
      "is it stress or anxiety",
      "anxiety vs stress symptoms",
      "stress and anxiety",
    ],
    published: D,
    updated: D,
    intro:
      "Stress is usually a response to something specific, like a deadline or a hard week, and it eases when that pressure eases. Anxiety is worry or fear that can continue without a clear trigger, or that's out of proportion to the situation. They feel alike in the body and often overlap, and many of the same habits help with both.",
    sections: [
      {
        heading: "Stress: a response to pressure",
        body: [
          "Stress tends to have a clear cause you could point to: too much work, money worries, a conflict. You might feel tense, irritable, overwhelmed or tired. When the pressure lifts, stress usually lifts with it.",
        ],
      },
      {
        heading: "Anxiety: worry that keeps going",
        body: [
          "Anxiety is a feeling of unease, worry or fear. It can show up before something happens (\"what if it goes wrong?\"), linger after the stressor has passed, or arrive without an obvious reason. Physically it can look like stress: racing heart, tight chest, restlessness, trouble sleeping.",
        ],
      },
      {
        heading: "A quick way to tell them apart",
        body: [],
        bullets: [
          "Is there a clear cause right now? More likely stress.",
          "Does it fade when the situation is over? More likely stress.",
          "Does the worry continue, or feel bigger than the situation? More likely anxiety.",
          "Is it there most days for weeks? Worth talking to a professional.",
        ],
      },
      {
        heading: "What helps with both",
        body: [
          "Slow breathing, regular movement, enough sleep, less caffeine and alcohol, time with supportive people and writing or talking things through all help with stress and anxiety. For anxiety specifically, grounding techniques and scheduled worry time are useful.",
        ],
      },
      {
        heading: "Track it to see which it is",
        body: [
          "A few weeks of daily check-ins show whether your low points follow specific events (stress) or show up regardless (worth a closer look). MOJO makes this a 30-second voice note and shows the trend back to you.",
        ],
      },
      { heading: "When to get help", body: [CRISIS] },
    ],
    takeaways: [
      "Stress has a clear cause and fades with it; anxiety can persist without one.",
      "They feel similar in the body and often overlap.",
      "Sleep, movement, breathing and talking it out help with both.",
      "If worry is there most days for weeks, talk to a professional.",
    ],
    faqs: [
      {
        q: "Can stress turn into anxiety?",
        a: "Long-term stress can make anxiety more likely, and the two often occur together. Looking after sleep, movement and support helps with both.",
      },
      {
        q: "Are stress and anxiety the same thing?",
        a: "No. Stress is a response to pressure and usually eases when the pressure does. Anxiety is worry or fear that can continue without a clear trigger.",
      },
    ],
    related: ["how-to-reduce-stress", "how-to-calm-anxiety", "burnout-vs-stress"],
  },
  {
    slug: "how-to-stop-overthinking",
    category: "Stress & anxiety",
    title: "How to stop overthinking: 9 ways to quiet a busy mind",
    metaTitle: "How to Stop Overthinking: 9 Ways to Quiet Your Mind",
    description:
      "Caught in loops of what-ifs and replaying conversations? Nine practical ways to stop overthinking, from brain dumps and worry time to small actions and better sleep.",
    keywords: [
      "how to stop overthinking",
      "overthinking at night",
      "how to stop ruminating",
      "racing thoughts",
      "overthinking everything",
    ],
    published: D,
    updated: D,
    intro:
      "You can't argue your way out of overthinking, but you can interrupt it. Get the thoughts out of your head and onto paper (or into a voice note), separate what you can act on from what you can't, take one small step, and move your attention to something physical. Save the rest for a set worry time instead of letting it run all day.",
    sections: [
      {
        heading: "Why overthinking feels so sticky",
        body: [
          "Overthinking usually comes in two flavours: replaying the past (\"why did I say that?\") and rehearsing the future (\"what if it goes wrong?\"). Both feel productive, as if thinking harder will solve something, but going round in circles rarely produces an answer. It mostly produces tiredness and low mood.",
        ],
      },
      {
        heading: "Nine ways to break the loop",
        body: [],
        bullets: [
          "1. Brain dump: write or say everything on your mind, without editing.",
          "2. Sort it: circle what you can act on and let go of what you can't control.",
          "3. Take one small action on something you can control.",
          "4. Set a worry time: 15 minutes a day. Outside it, note the thought and postpone it.",
          "5. Ask: will this matter in a week? A month? A year?",
          "6. Switch to your senses: a walk, a shower, cooking, anything physical.",
          "7. Talk it through with someone you trust; other people break loops quickly.",
          "8. Protect sleep. Tired brains ruminate more.",
          "9. Be kind to yourself. Criticising yourself for overthinking feeds the loop.",
        ],
      },
      {
        heading: "Overthinking at night",
        body: [
          "Night-time overthinking is common because there's nothing else to focus on. Do your brain dump an hour before bed, write tomorrow's first step for each worry, and keep your phone out of reach. If you wake up thinking, note the thought down and tell yourself you'll deal with it in the morning.",
        ],
      },
      {
        heading: "Notice what sets it off",
        body: [
          "Overthinking often follows patterns: certain people, Sunday evenings, short nights. MOJO turns a 30-second voice check-in into a journal entry and logs your mood, sleep and activity, so those patterns become visible.",
        ],
      },
      { heading: "When to get help", body: [CRISIS] },
    ],
    takeaways: [
      "Get thoughts out of your head with a brain dump.",
      "Separate what you can act on from what you can't, then take one small step.",
      "Contain worry with a set worry time.",
      "Night-time overthinking eases with a pre-bed brain dump.",
    ],
    faqs: [
      {
        q: "Why do I overthink everything?",
        a: "Overthinking is often driven by stress, anxiety, tiredness or a wish to avoid mistakes. It feels like problem-solving but usually goes in circles. Getting thoughts out of your head and taking small actions helps break it.",
      },
      {
        q: "How do I stop overthinking at night?",
        a: "Do a brain dump an hour before bed, write one next step for each worry, keep your phone away, and note any new thoughts down to deal with in the morning.",
      },
    ],
    related: ["how-to-calm-anxiety", "journal-prompts-for-anxiety", "how-to-start-journaling"],
  },
  {
    slug: "journal-prompts-for-anxiety",
    category: "Stress & anxiety",
    title: "40 journal prompts for anxiety and overthinking",
    metaTitle: "40 Journal Prompts for Anxiety and Overthinking",
    description:
      "Calming journal prompts for anxiety: for anxious moments, untangling worries, building self-compassion and spotting patterns. Write them or say them out loud.",
    keywords: [
      "journal prompts for anxiety",
      "journaling for anxiety",
      "anxiety journal prompts",
      "prompts for overthinking",
      "calming journal prompts",
    ],
    published: D,
    updated: D,
    intro:
      "Journaling helps with anxiety by moving worries out of your head where you can look at them. Use short grounding prompts when anxiety is high, untangling prompts once you're calmer, and reflection prompts at the end of the day to spot patterns. You don't need to write: saying your answers out loud works too.",
    sections: [
      {
        heading: "When anxiety is high (keep it short)",
        body: [],
        bullets: [
          "What am I feeling in my body right now?",
          "What can I see, hear and feel around me?",
          "What is the one thing I'm most worried about?",
          "Is this worry about now, or about something that might happen?",
          "What would help me feel 10% calmer right now?",
          "Who could I contact if I need to?",
          "What has helped me get through a moment like this before?",
          "What's one kind thing I can do for myself in the next ten minutes?",
        ],
      },
      {
        heading: "Untangling a worry",
        body: [],
        bullets: [
          "What exactly am I afraid will happen?",
          "What evidence do I have for and against it?",
          "What's the most likely outcome, not the worst?",
          "If it did happen, how would I cope?",
          "What part of this is in my control?",
          "What's one small step I can take today?",
          "What would I tell a friend who had this worry?",
          "Will this matter in a month? A year?",
          "Am I assuming I know what someone else thinks?",
          "What am I avoiding, and what would happen if I faced it?",
          "What do I need to accept that I can't change?",
          "What information would actually help, and how can I get it?",
        ],
      },
      {
        heading: "Self-compassion",
        body: [],
        bullets: [
          "What am I being hard on myself about today?",
          "How would I speak to someone I love who felt like this?",
          "What did I handle well this week, even if it was small?",
          "What do I need more of right now?",
          "What am I proud of getting through?",
          "What can I let be good enough today?",
          "What would rest look like for me this evening?",
          "Which of my strengths helped me today?",
        ],
      },
      {
        heading: "End-of-day reflection",
        body: [],
        bullets: [
          "How anxious did I feel today, from 1 to 10?",
          "When did I feel calmest, and what was I doing?",
          "When did anxiety rise, and what was happening just before?",
          "How did I sleep last night, and did it affect today?",
          "Did I move today? How did I feel afterwards?",
          "What did I eat and drink, including caffeine?",
          "Who did I talk to, and how did I feel after?",
          "What's one thing I'm grateful for today?",
          "What's one thing I'd like to do differently tomorrow?",
          "What will I let go of before I sleep?",
          "What's on my mind for tomorrow, and what's the first step?",
          "What helped today that I want to remember?",
        ],
      },
      {
        heading: "Make it a 30-second habit",
        body: [
          "The end-of-day prompts are where patterns show up. MOJO lets you answer them out loud in a 30-second voice check-in, and keeps track of your mood, sleep and activity so you can see what makes calmer days more likely.",
        ],
      },
      { heading: "When to get help", body: [CRISIS] },
    ],
    takeaways: [
      "Keep prompts short when anxiety is high.",
      "Untangle worries by looking at evidence, likelihood and what you can control.",
      "End-of-day reflection reveals your anxiety patterns.",
      "Saying your answers out loud counts as journaling.",
    ],
    faqs: [
      {
        q: "Does journaling help anxiety?",
        a: "Many people find it helpful. Putting worries into words makes them more concrete, easier to question and easier to act on, and regular entries show patterns over time.",
      },
      {
        q: "How long should I journal for anxiety?",
        a: "A few minutes is enough. Consistency matters more than length, so a short daily check-in beats a long entry once a week.",
      },
    ],
    related: ["how-to-calm-anxiety", "how-to-stop-overthinking", "journal-prompts-for-work-stress"],
  },

  // ------------------------------------------------------------------ mental health
  {
    slug: "daily-habits-for-better-mental-health",
    category: "Mental health",
    title: "15 daily habits for better mental health",
    metaTitle: "15 Daily Habits for Better Mental Health",
    description:
      "Small, realistic daily habits that support your mental health: morning light, movement, connection, sleep, screen breaks, reflection and noticing how you feel.",
    keywords: [
      "daily habits for mental health",
      "how to improve mental health",
      "mental health tips",
      "self care habits",
      "mental wellbeing habits",
    ],
    published: D,
    updated: D,
    intro:
      "Good mental health is built from small, ordinary habits repeated most days: a regular wake-up time, daylight and movement, real meals, time with people, breaks from screens, a wind-down before bed, and a moment to notice how you actually feel. You don't need all fifteen. Pick two or three and make them easy.",
    sections: [
      {
        heading: "Morning",
        body: [],
        bullets: [
          "1. Wake up at roughly the same time every day.",
          "2. Get daylight early: open the curtains or step outside.",
          "3. Eat something before the day takes over.",
          "4. Pick the one thing that would make today feel good.",
        ],
      },
      {
        heading: "During the day",
        body: [],
        bullets: [
          "5. Move: a walk, a stretch, the stairs. It all counts.",
          "6. Take real breaks away from screens.",
          "7. Talk to someone, even briefly.",
          "8. Drink water and eat regular meals.",
          "9. Spend a few minutes outside or near green space.",
          "10. Do one small thing just because you enjoy it.",
        ],
      },
      {
        heading: "Evening",
        body: [],
        bullets: [
          "11. Set an end to work and mark it with a small ritual.",
          "12. Limit late-night doom-scrolling.",
          "13. Wind down for 30 minutes before bed.",
          "14. Aim for seven or more hours of sleep.",
        ],
      },
      {
        heading: "The habit that ties them together",
        body: [
          "15. Check in with yourself. Notice your mood, how you slept and what you did. Over a few weeks this shows which habits actually make your days better, so you can keep the ones that work for you.",
          "MOJO makes the check-in a 30-second voice note: it logs your mood, sleep and activity and shows you what tends to lift your energy.",
        ],
      },
      {
        heading: "Make habits easy",
        body: [
          "Start tiny, attach a new habit to something you already do (a walk after lunch, a check-in after brushing your teeth), and expect to miss days. Getting back on track the next day matters more than a perfect streak.",
        ],
      },
      { heading: "When habits aren't enough", body: [CRISIS] },
    ],
    takeaways: [
      "Small habits repeated most days beat big changes you can't sustain.",
      "Sleep, daylight, movement and people are the foundations.",
      "A daily check-in shows which habits actually help you.",
      "Missing a day is normal; restart the next one.",
    ],
    faqs: [
      {
        q: "What are the best daily habits for mental health?",
        a: "A consistent wake-up time, daylight, regular movement, connecting with people, real breaks, a wind-down before bed and enough sleep. A short daily check-in helps you see which ones matter most for you.",
      },
      {
        q: "How long does it take to see a difference?",
        a: "Some habits, like a walk, can lift your mood the same day. Others, like better sleep routines, take a week or two to show up in how you feel.",
      },
    ],
    related: ["mental-health-check-in", "build-healthy-habits-that-stick", "exercise-and-mood"],
  },
  {
    slug: "mental-health-check-in",
    category: "Mental health",
    title: "How to do a daily mental health check-in (with questions)",
    metaTitle: "Daily Mental Health Check-In: Questions to Ask",
    description:
      "A simple daily mental health check-in you can do in a minute: the questions to ask yourself, what to track, and how to spot when you need more support.",
    keywords: [
      "mental health check in",
      "mental health check in questions",
      "daily check in questions",
      "how are you really feeling",
      "self check in",
    ],
    published: D,
    updated: D,
    intro:
      "A daily mental health check-in takes about a minute: rate your mood, note how you slept and what you did, name what lifted or drained you, and ask what you need tomorrow. Done every day, it shows you trends you'd otherwise miss, and makes it easier to notice early when you need more support.",
    sections: [
      {
        heading: "Why check in every day",
        body: [
          "How you feel today is a snapshot. How you've felt across three weeks is a story. Daily check-ins reveal slow slides (a mood drifting down, sleep getting shorter) while they're still easy to fix, and they show you what reliably helps.",
        ],
      },
      {
        heading: "Seven questions for your check-in",
        body: [],
        bullets: [
          "How am I feeling right now, in one word?",
          "On a scale of 1 to 5, how was today overall?",
          "How did I sleep last night, and for how long?",
          "What did I do today? Did I move?",
          "What lifted my mood today?",
          "What drained me today?",
          "What do I need tomorrow?",
        ],
      },
      {
        heading: "Make it stick",
        body: [
          "Tie it to something you already do every evening, keep it under a minute, and don't judge your answers. A one-word answer is a perfectly good check-in.",
          "If writing feels like a chore, talk instead. With MOJO you answer out loud in about 30 seconds, and it logs your mood, sleep and activity for you, then shows patterns like your best days following longer sleep.",
        ],
      },
      {
        heading: "Signs it's time for more support",
        body: [],
        bullets: [
          "Low mood or anxiety most days for two weeks or more.",
          "Losing interest in things you usually enjoy.",
          "Big changes in sleep or appetite.",
          "Struggling to get through work, study or daily tasks.",
        ],
      },
      { heading: "Where to get help", body: [CRISIS] },
    ],
    takeaways: [
      "A check-in takes about a minute: mood, sleep, activity, what helped and what drained you.",
      "Daily check-ins reveal slow changes you'd otherwise miss.",
      "Keep it short and judgement-free; talking counts.",
      "If low mood lasts for weeks, reach out for support.",
    ],
    faqs: [
      {
        q: "What should I ask in a mental health check-in?",
        a: "How you feel in one word, how your day was from 1 to 5, how you slept, what you did, what lifted you, what drained you, and what you need tomorrow.",
      },
      {
        q: "How often should I check in on my mental health?",
        a: "Daily works best because it shows trends. It only needs to take a minute.",
      },
    ],
    related: ["how-to-track-your-mood", "mood-journal", "daily-habits-for-better-mental-health"],
  },

  // ------------------------------------------------------------------ journaling & mood
  {
    slug: "how-to-start-journaling",
    category: "Journaling & mood",
    title: "How to start journaling (and actually stick with it)",
    metaTitle: "How to Start Journaling and Stick With It",
    description:
      "A beginner's guide to journaling: what to write, how long to spend, simple formats and prompts, and how to make it a habit you keep, even on busy days.",
    keywords: [
      "how to start journaling",
      "journaling for beginners",
      "what to write in a journal",
      "how to journal",
      "daily journaling habit",
    ],
    published: D,
    updated: D,
    intro:
      "Start small: two or three minutes a day, at the same time, answering one simple question like \"how was today, and why?\". Don't aim for good writing; aim for honest notes. Use prompts when you're stuck, and if writing feels like a chore, try speaking your journal instead. Consistency matters far more than length.",
    sections: [
      {
        heading: "Why most people quit",
        body: [
          "The blank page, the pressure to write something meaningful, and treating it as a big task. The fix is to make journaling so small it's hard to skip.",
        ],
      },
      {
        heading: "Five simple formats",
        body: [],
        bullets: [
          "One line a day: a single sentence about today.",
          "Three things: one good thing, one hard thing, one thing for tomorrow.",
          "Mood + why: a rating from 1 to 5 and a sentence on what drove it.",
          "Brain dump: everything on your mind, unedited, for three minutes.",
          "Voice journal: say how your day went, out loud, in 30 seconds.",
        ],
      },
      {
        heading: "Ten prompts to get started",
        body: [],
        bullets: [
          "How was today, and why?",
          "What gave me energy today?",
          "What drained me?",
          "What am I looking forward to?",
          "What's on my mind right now?",
          "What did I learn today?",
          "What am I grateful for?",
          "What would make tomorrow good?",
          "How did I sleep, and how did it affect today?",
          "What do I want to remember about this week?",
        ],
      },
      {
        heading: "Make it a habit",
        body: [
          "Attach it to something you already do, like after dinner or before bed. Keep your journal (or app) where you'll see it. Expect to miss days and simply start again. After a few weeks, read back: seeing patterns is what keeps most people going.",
        ],
      },
      {
        heading: "Try journaling out loud",
        body: [
          "If typing or handwriting is what stops you, speak instead. MOJO turns a 30-second voice check-in into a journal entry and logs your mood, sleep and activity, so your journal builds itself and shows you patterns over time.",
        ],
      },
    ],
    takeaways: [
      "Start with two or three minutes a day.",
      "Pick a simple format and use prompts when stuck.",
      "Attach journaling to an existing routine.",
      "Speaking your journal counts, and is often easier.",
    ],
    faqs: [
      {
        q: "What should I write in my journal as a beginner?",
        a: "Start with one question: how was today, and why? Add one good thing, one hard thing, and one thing for tomorrow if you want more structure.",
      },
      {
        q: "How long should I journal each day?",
        a: "Two to five minutes is plenty. A short daily entry is more useful than an occasional long one.",
      },
      {
        q: "Is it better to journal in the morning or at night?",
        a: "Either works. Mornings suit planning and intentions; evenings suit reflection. Choose the time you're most likely to stick with.",
      },
    ],
    related: ["voice-journaling-guide", "benefits-of-journaling-for-mental-health", "gratitude-journal"],
  },
  {
    slug: "gratitude-journal",
    category: "Journaling & mood",
    title: "Gratitude journaling: how to start, with 25 prompts",
    metaTitle: "Gratitude Journal: How to Start, With 25 Prompts",
    description:
      "How to keep a gratitude journal that doesn't feel forced: simple methods, 25 gratitude prompts and tips to make it a habit that lifts your mood.",
    keywords: [
      "gratitude journal",
      "gratitude journal prompts",
      "how to start a gratitude journal",
      "gratitude practice",
      "things to be grateful for",
    ],
    published: D,
    updated: D,
    intro:
      "A gratitude journal works best when it's specific and short: write down two or three particular things from today you're glad about, and why. \"My colleague covered my call so I could leave on time\" beats \"my job\". A few times a week is enough, and varying what you notice keeps it from feeling forced.",
    sections: [
      {
        heading: "Why gratitude journaling helps",
        body: [
          "Regularly noticing what went well helps balance the brain's natural focus on problems. Many people find it lifts their mood and makes it easier to notice good moments as they happen.",
        ],
      },
      {
        heading: "How to do it well",
        body: [],
        bullets: [
          "Be specific: one particular moment, not a broad category.",
          "Add why: what made it matter to you?",
          "Include people: who made today better?",
          "Keep it short: two or three items is plenty.",
          "Don't force it: on hard days, one small thing is enough.",
        ],
      },
      {
        heading: "25 gratitude prompts",
        body: [],
        bullets: [
          "Who made my day a little easier?",
          "What made me laugh today?",
          "What's something I enjoyed eating?",
          "What did my body let me do today?",
          "What's a small comfort I often take for granted?",
          "What did I learn recently?",
          "Who am I glad is in my life, and why?",
          "What's something beautiful I noticed?",
          "What went better than I expected?",
          "What's a problem I've solved recently?",
          "What's a place that makes me feel calm?",
          "What's a skill I'm glad I have?",
          "What's a memory that makes me smile?",
          "What's something I'm looking forward to?",
          "What did someone say that I appreciated?",
          "What's a hard time I got through?",
          "What's something in my home I'm glad to have?",
          "What's a song, book or show I'm grateful for?",
          "Who helped me become who I am?",
          "What did I do today that I'm proud of?",
          "What's something about today's weather I enjoyed?",
          "What opportunity do I have right now?",
          "What's a kindness I gave or received this week?",
          "What made this week better than it could have been?",
          "What's one thing about myself I appreciate?",
        ],
      },
      {
        heading: "Fit it into a daily check-in",
        body: [
          "Gratitude fits naturally at the end of a daily check-in. In MOJO you can mention what you're grateful for in your 30-second voice note, and over time see how those good moments line up with your mood and energy.",
        ],
      },
    ],
    takeaways: [
      "Be specific and add why it mattered.",
      "Two or three items, a few times a week, is enough.",
      "Use prompts to keep it fresh.",
      "On hard days, one small thing counts.",
    ],
    faqs: [
      {
        q: "How often should I write in a gratitude journal?",
        a: "A few times a week works well for many people. Daily is fine too, as long as it doesn't start to feel like a chore.",
      },
      {
        q: "What if I can't think of anything to be grateful for?",
        a: "Go small: a warm drink, a message from a friend, getting through a hard day. Prompts can help on those days.",
      },
    ],
    related: ["how-to-start-journaling", "benefits-of-journaling-for-mental-health", "mood-journal"],
  },
  {
    slug: "mood-journal",
    category: "Journaling & mood",
    title: "Mood journal: what to write and track, with examples",
    metaTitle: "Mood Journal: What to Write and Track (Examples)",
    description:
      "How to keep a mood journal that shows real patterns: what to track each day, example entries, mood scales and how to read your results after a few weeks.",
    keywords: [
      "mood journal",
      "mood journal ideas",
      "what to write in a mood journal",
      "mood diary",
      "mood log",
    ],
    published: D,
    updated: D,
    intro:
      "A useful mood journal records three things every day: your mood (a word and a 1-5 rating), the context (sleep, activity, people, events) and a sentence on why you think you felt that way. After two to four weeks, look for links between your mood and that context. That's where the insight is.",
    sections: [
      {
        heading: "What to track each day",
        body: [],
        bullets: [
          "Mood: one word (calm, anxious, flat, happy) and a rating from 1 to 5.",
          "Sleep: hours and how well you slept.",
          "Activity: movement, time outdoors, hobbies.",
          "People: who you spent time with.",
          "Events: anything notable, good or bad.",
          "Why: one sentence on what you think drove your mood.",
        ],
      },
      {
        heading: "Example entries",
        body: [
          "\"Calm, 4/5. Slept 7.5 hours. Walked at lunch, dinner with my sister. Felt good because work was quiet and I got outside.\"",
          "\"Anxious, 2/5. Slept 5 hours. No exercise. Big presentation tomorrow, too much coffee, kept checking email late.\"",
        ],
      },
      {
        heading: "Choosing a mood scale",
        body: [
          "Keep it simple. A 1-5 scale is easy to use every day, and a mood word adds the nuance a number can't. Consistency matters more than precision: use the same scale every day.",
        ],
      },
      {
        heading: "Reading your mood journal",
        body: [],
        bullets: [
          "Compare your best and worst days. What was different?",
          "Look at sleep the night before low days.",
          "Check which activities show up on good days.",
          "Notice weekly rhythms: is one day consistently harder?",
        ],
      },
      {
        heading: "Let the journal fill itself in",
        body: [
          "Logging all of this by hand is where most mood journals die. With MOJO you just say how your day went; it picks out your mood, sleep and activity, keeps your words as a journal entry, and shows you the patterns once it has enough days.",
        ],
      },
    ],
    takeaways: [
      "Track mood (word + rating), context and a one-line why.",
      "Use the same simple scale every day.",
      "Review after two to four weeks to find patterns.",
      "Sleep and activity are usually the first links people spot.",
    ],
    faqs: [
      {
        q: "What's the difference between a mood journal and a mood tracker?",
        a: "A mood tracker records ratings; a mood journal adds context and your own words. Combining both gives you the clearest picture of why your mood changes.",
      },
      {
        q: "How long before a mood journal shows patterns?",
        a: "Usually two to four weeks of daily entries.",
      },
    ],
    related: ["how-to-track-your-mood", "best-mood-tracker-apps", "mental-health-check-in"],
  },
];
