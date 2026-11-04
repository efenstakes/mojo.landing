import {
  BellIcon,
  BoltIcon,
  ChartIcon,
  ChatIcon,
  HeartIcon,
  MicIcon,
  MoonIcon,
  RunIcon,
  SmileIcon,
  SparkIcon,
  TrophyIcon,
  UsersIcon,
} from "@/components/icons";
import { ActivityScreen, EnergyScreen, JournalScreen, MoodSleepScreen } from "@/components/mockups/screens";
import FeatureSection from "@/components/sections/feature-section";

export default function Features() {
  return (
    <div id="features">
      <FeatureSection
        eyebrow="Voice journaling"
        title={
          <>
            Your journal, <span className="text-gradient">out loud</span>
          </>
        }
        text="Some days you don't have the words to type. Just talk. Mojo keeps your recording, writes up a clean journal entry, and picks out the mood and moments that mattered, so looking back is as easy as scrolling."
        features={[
          { label: "Speak instead of typing", Icon: MicIcon },
          { label: "Transcribed on your phone", Icon: SparkIcon },
          { label: "Edit before you save", Icon: ChatIcon },
          { label: "Gentle daily reminders", Icon: BellIcon },
        ]}
        visual={<JournalScreen />}
      />

      <FeatureSection
        reverse
        eyebrow="Mood & sleep"
        title={
          <>
            See how your nights <span className="text-gradient">shape your days</span>
          </>
        }
        text="Log your mood with a tap and last night's sleep in a second. Mojo charts both side by side and points out the patterns that are easy to miss, like how much brighter you feel after a full night."
        features={[
          { label: "One-tap mood check-ins", Icon: SmileIcon },
          { label: "Sleep hours & quality", Icon: MoonIcon },
          { label: "What lifts or lowers your mood", Icon: HeartIcon },
          { label: "Weekly & monthly trends", Icon: ChartIcon },
        ]}
        visual={<MoodSleepScreen />}
      />

      <FeatureSection
        eyebrow="Activities"
        title={
          <>
            Every walk <span className="text-gradient">counts</span>
          </>
        }
        text="A stroll at lunch, a yoga class, a dance in the kitchen. Log it in seconds and watch your active days add up. Mojo shows which kinds of movement actually do the most for your mood."
        features={[
          { label: "Log any activity", Icon: RunIcon },
          { label: "Active days & minutes", Icon: ChartIcon },
          { label: "Streaks & wellness goals", Icon: TrophyIcon },
          { label: "Join friendly challenges", Icon: UsersIcon },
        ]}
        visual={<ActivityScreen />}
      />

      <FeatureSection
        id="halo"
        reverse
        eyebrow="Meet Halo, your AI companion"
        title={
          <>
            An energy score that <span className="text-gradient">explains itself</span>
          </>
        }
        text="Halo learns from your own check-ins, not anyone else's. Each day it estimates your energy, tells you what's raising or draining it, and suggests one small thing that tends to recharge you. Plus a friendly weekly recap of how things went."
        features={[
          { label: "Daily energy score", Icon: BoltIcon },
          { label: "What's helping & hurting", Icon: ChartIcon },
          { label: "Personal recharge tips", Icon: SparkIcon },
          { label: "Weekly wellness recap", Icon: HeartIcon },
        ]}
        visual={<EnergyScreen />}
      />
    </div>
  );
}
