import type { Guide } from "./types";

const CRISIS =
  "If you feel hopeless, can't enjoy anything, or have thoughts of harming yourself, please speak to a doctor or mental health professional. If you're in crisis, contact your local emergency number or a crisis line such as 988 in the US or Samaritans on 116 123 in the UK.";

export const burnoutGuides: Guide[] = [
  {
    slug: "how-to-recover-from-burnout",
    category: "Burnout",
    title: "How to recover from burnout: a realistic, step-by-step plan",
    metaTitle: "How to Recover From Burnout: A Step-by-Step Plan",
    description:
      "Recovering from burnout takes less load and more rest, in that order. A realistic step-by-step plan to rebuild your energy, plus how long recovery usually takes.",
    keywords: [
      "how to recover from burnout",
      "burnout recovery",
      "how long does burnout recovery take",
      "recovering from burnout at work",
      "burnout recovery plan",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "Burnout recovery has two halves that need to happen together: reducing what's draining you and rebuilding what restores you. Start by stabilising sleep and setting a hard end to your workday, then cut or renegotiate your load, then slowly add back the things that give you energy. Mild burnout often eases within weeks; burnout that built up over a long time can take months.",
    sections: [
      {
        heading: "Step 1: Stop the bleeding",
        body: [
          "You can't recover while running on empty, so the first job is to stop things getting worse. Pick the two or three changes that free up the most energy right now, even if they feel small.",
        ],
        bullets: [
          "Set a fixed time your workday ends, and close everything at that time.",
          "Turn off work notifications outside working hours.",
          "Cancel or delegate anything non-essential this week.",
          "Take any leave you're owed, even a long weekend without email.",
        ],
      },
      {
        heading: "Step 2: Rebuild your sleep",
        body: [
          "Burnout and poor sleep feed each other. Keep a consistent wake-up time, give yourself a 30-minute screen-free wind-down, and keep caffeine to the morning. Sleep is the foundation the rest of recovery is built on.",
        ],
      },
      {
        heading: "Step 3: Fix the load, not just yourself",
        body: [
          "Burnout is usually a mismatch between demands and resources, not a personal failing. Recovery won't stick if you go straight back to the same workload. Talk to your manager about what's unsustainable, be specific, and agree what will change: fewer projects, clearer priorities, realistic deadlines or more support.",
        ],
      },
      {
        heading: "Step 4: Add back energy, slowly",
        body: [
          "Once the drain is under control, reintroduce things that restore you: time outdoors, gentle movement, people you like, hobbies with no goal attached. Start small. A 10-minute walk every day beats an ambitious plan you abandon.",
        ],
      },
      {
        heading: "Step 5: Watch your trend, not your day",
        body: [
          "Recovery isn't a straight line. You'll have good days and bad days, which makes it hard to tell if you're actually getting better. A quick daily log of mood, sleep and energy shows the trend across weeks, so a bad Tuesday doesn't convince you nothing is working.",
          "MOJO's daily energy score does this from a 30-second voice check-in, and shows which factors are helping or holding you back.",
        ],
      },
      {
        heading: "How long burnout recovery takes",
        body: [
          "It depends on how long burnout built up and how much really changes. People who catch it early and reduce their load often feel noticeably better within a few weeks. Long-term burnout can take several months. If you go back to the same conditions, it tends to come back.",
        ],
      },
      { heading: "When to get help", body: [CRISIS, "Burnout and depression can look alike, and a professional can help tell them apart. Many employers also offer free, confidential counselling through an Employee Assistance Programme (EAP)."] },
    ],
    takeaways: [
      "First stop things getting worse: a hard end to the day and fewer commitments.",
      "Rebuild sleep before anything else.",
      "Change the workload, or burnout tends to return.",
      "Track your trend over weeks, not how you feel on one day.",
    ],
    faqs: [
      {
        q: "How long does it take to recover from burnout?",
        a: "Mild burnout can ease within a few weeks of real rest and a lighter load. Burnout that built up over a long time can take several months, and professional support helps.",
      },
      {
        q: "Should I quit my job if I'm burnt out?",
        a: "Not necessarily. Many people recover by changing their workload, boundaries or role. If the conditions can't change, moving on may be the healthiest option, but try to decide once you're less exhausted.",
      },
      {
        q: "Can you recover from burnout while still working?",
        a: "Often, yes, if the workload actually changes and you protect your recovery time. If you can't function, talk to a doctor about time off.",
      },
    ],
    related: ["signs-of-burnout-at-work", "burnout-vs-stress", "how-to-prevent-burnout"],
  },
  {
    slug: "burnout-vs-stress",
    category: "Burnout",
    title: "Burnout vs stress (and depression): how to tell the difference",
    metaTitle: "Burnout vs Stress vs Depression: Key Differences",
    description:
      "Stressed, burnt out or depressed? The key differences between burnout, stress and depression, what each feels like, and what helps with each one.",
    keywords: [
      "burnout vs stress",
      "burnout vs depression",
      "difference between stress and burnout",
      "am I burnt out or stressed",
      "is it burnout or depression",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "Stress feels like too much: too many demands, too much urgency, but you're still engaged. Burnout feels like not enough: not enough energy, care or sense of purpose, mostly about work. Depression is broader: low mood and loss of interest that affect your whole life, not just work, and need professional support.",
    sections: [
      {
        heading: "Stress: too much",
        body: [
          "Stress is your body's response to pressure. It often comes with urgency, racing thoughts and feeling wired. In short bursts it can even help you perform. It tends to ease when the pressure eases.",
        ],
      },
      {
        heading: "Burnout: not enough",
        body: [
          "The World Health Organization describes burnout as an occupational phenomenon caused by chronic workplace stress that hasn't been successfully managed. Its three hallmarks are exhaustion, feeling mentally distant or cynical about your job, and reduced effectiveness. Unlike stress, it often lingers after a busy period ends.",
        ],
      },
      {
        heading: "Depression: across your whole life",
        body: [
          "Depression is a medical condition. It involves persistent low mood or loss of interest and pleasure, often with changes in sleep, appetite, energy and concentration, and it affects every area of life, not only work. It needs proper assessment and support from a professional.",
        ],
      },
      {
        heading: "A quick comparison",
        body: [],
        bullets: [
          "Stress: over-engaged, urgent, anxious. Usually improves when pressure drops.",
          "Burnout: exhausted, detached, less effective, mainly about work. Persists after busy periods.",
          "Depression: low mood or lost interest across all of life. Needs professional support.",
        ],
      },
      {
        heading: "Seeing which pattern fits you",
        body: [
          "It's hard to judge from how you feel today. A few weeks of daily check-ins on mood, sleep and energy show whether your low points follow busy weeks (stress), keep sliding regardless (burnout), or colour everything including weekends and things you used to enjoy (which is worth discussing with a doctor). MOJO turns that into a 30-second voice note and shows the trend back to you.",
        ],
      },
      { heading: "When to get help", body: [CRISIS] },
    ],
    takeaways: [
      "Stress is too much; burnout is not enough.",
      "Burnout is mainly about work; depression affects your whole life.",
      "Track your mood for a few weeks to see which pattern fits.",
      "If you suspect depression, talk to a professional.",
    ],
    faqs: [
      {
        q: "Can stress turn into burnout?",
        a: "Yes. Burnout usually develops from long-term work stress that never gets enough recovery.",
      },
      {
        q: "Is burnout a medical diagnosis?",
        a: "The WHO classifies burnout as an occupational phenomenon rather than a medical condition. Depression, which can look similar, is a medical condition, so it's worth getting checked if you're unsure.",
      },
    ],
    related: ["signs-of-burnout-at-work", "how-to-recover-from-burnout", "how-to-track-your-mood"],
  },
  {
    slug: "student-burnout",
    category: "Burnout",
    title: "Student burnout: signs, causes and how to recover",
    metaTitle: "Student Burnout: Signs, Causes and How to Recover",
    description:
      "Exhausted, unmotivated and falling behind? How to spot student burnout, what causes it at uni and college, and practical ways to recover without failing your course.",
    keywords: [
      "student burnout",
      "academic burnout",
      "burnout in college students",
      "university burnout",
      "how to recover from student burnout",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "Student burnout is long-term exhaustion from study pressure: you feel drained, stop caring about your course and get less done, however hard you try. It usually comes from too much workload with too little recovery, often made worse by poor sleep, money worries and isolation. Recovery means cutting the load where you can, fixing sleep and getting support from your university early.",
    sections: [
      {
        heading: "Signs of student burnout",
        body: [],
        bullets: [
          "You're exhausted even after sleep and weekends.",
          "You've stopped caring about your course or grades.",
          "Studying takes far longer and less sticks.",
          "You're skipping lectures or avoiding work you'd normally do.",
          "You feel cynical, irritable or detached from uni life.",
        ],
      },
      {
        heading: "Common causes",
        body: [
          "Constant deadlines, exam seasons back to back, part-time work on top of study, irregular sleep, perfectionism and feeling isolated all add up. Many students also carry money stress and the pressure of being away from home for the first time.",
        ],
      },
      {
        heading: "How to recover",
        body: [],
        bullets: [
          "Talk to your tutor or student support about extensions or a reduced load. That's what they're there for.",
          "Anchor your wake-up time and protect seven or more hours of sleep.",
          "Study in short, focused blocks and take real breaks.",
          "Keep one day or evening a week completely free.",
          "Reconnect with friends and do something active you enjoy.",
        ],
      },
      {
        heading: "Spot the slide before exams",
        body: [
          "Burnout builds over weeks, so it's easy to miss until exam season. A quick daily check-in on mood, sleep and energy makes the slide visible early. MOJO makes it a 30-second voice note and shows patterns like your worst study days following short nights.",
        ],
      },
      { heading: "When to get help", body: [`Your university's wellbeing or counselling service is free and confidential. ${CRISIS}`] },
    ],
    takeaways: [
      "Student burnout is exhaustion, detachment and doing less, from long-term study pressure.",
      "Ask your university about extensions and support early.",
      "Fix sleep and add real breaks before pushing harder.",
    ],
    faqs: [
      {
        q: "Is student burnout real?",
        a: "Yes. Researchers often call it academic burnout. It's common, especially around exams and in demanding courses.",
      },
      {
        q: "How do I get motivated again after burnout?",
        a: "Motivation usually returns after rest, not before it. Fix sleep, reduce your load, start with very small study tasks, and let momentum rebuild.",
      },
    ],
    related: ["managing-mental-health-at-university", "exam-stress-tips", "how-to-recover-from-burnout"],
  },
  {
    slug: "how-to-prevent-burnout",
    category: "Burnout",
    title: "How to prevent burnout: 10 habits that protect your energy",
    metaTitle: "How to Prevent Burnout: 10 Habits That Work",
    description:
      "Prevent burnout before it starts. 10 practical habits for boundaries, recovery, sleep and workload that protect your energy at work and at home.",
    keywords: [
      "how to prevent burnout",
      "burnout prevention",
      "how to avoid burnout at work",
      "avoid burnout tips",
      "protect your energy",
    ],
    published: "2026-11-04",
    updated: "2026-11-04",
    intro:
      "Preventing burnout comes down to making sure recovery keeps up with demand. The habits that matter most are a clear end to your workday, real breaks, protected sleep, regular movement, saying no to extra load early, and checking in on your energy often enough to catch a slide before it becomes burnout.",
    sections: [
      {
        heading: "Boundaries",
        body: [],
        bullets: [
          "1. Set a fixed end to your workday and a shutdown ritual.",
          "2. Turn off work notifications outside working hours.",
          "3. Say no, or 'not now', early, before extra work piles up.",
        ],
      },
      {
        heading: "Recovery",
        body: [],
        bullets: [
          "4. Take short breaks every 60 to 90 minutes, away from screens.",
          "5. Protect seven or more hours of sleep on work nights.",
          "6. Move most days, even a 20-minute walk.",
          "7. Use your annual leave, and spread it through the year.",
        ],
      },
      {
        heading: "Meaning and connection",
        body: [],
        bullets: [
          "8. Keep at least one thing in your week that's just for you.",
          "9. Stay connected with people outside work.",
        ],
      },
      {
        heading: "Early warning",
        body: [
          "10. Check in with yourself daily. Burnout builds so slowly that you rarely notice it day to day. A quick log of mood, sleep and energy shows when your trend starts heading down, while it's still easy to correct. MOJO's daily energy score is built for exactly this, from a 30-second voice check-in.",
        ],
      },
      { heading: "If you're already burnt out", body: ["Prevention habits still help, but recovery also needs a real reduction in load. See our guide to recovering from burnout, and talk to a professional if things aren't improving."] },
    ],
    takeaways: [
      "Burnout happens when demand outpaces recovery for too long.",
      "Boundaries, breaks, sleep and movement are the core of prevention.",
      "A daily check-in is your early-warning system.",
    ],
    faqs: [
      {
        q: "What is the best way to prevent burnout?",
        a: "Make sure recovery keeps pace with demand: a clear end to work, real breaks, enough sleep, regular movement, and acting early when your energy starts trending down.",
      },
      {
        q: "Can employers help prevent burnout?",
        a: "Yes, and they have a big role: manageable workloads, clear priorities, fair recognition and support. Individual habits help, but they can't fully offset an unsustainable job.",
      },
    ],
    related: ["signs-of-burnout-at-work", "how-to-recover-from-burnout", "managing-mental-health-working-9-to-5"],
  },
];
