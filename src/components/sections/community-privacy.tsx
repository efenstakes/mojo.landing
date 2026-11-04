import { ChatIcon, FingerprintIcon, LockIcon, ShieldIcon, TrophyIcon, UsersIcon } from "@/components/icons";

const community = [
  { Icon: UsersIcon, title: "Groups that get it", text: "Join groups around the things you care about, from morning walks to better sleep, and share how it's going." },
  { Icon: TrophyIcon, title: "Challenges", text: "Take on a wellness challenge with others, keep a streak going and earn your badge." },
  { Icon: ChatIcon, title: "Share wins", text: "Post a milestone, cheer someone on, or just read along. Everyone moves at their own pace." },
];

const privacy = [
  { Icon: FingerprintIcon, title: "MOJO Pass", text: "Lock the app with Face ID or your fingerprint, so your journal stays yours." },
  { Icon: LockIcon, title: "Transcribed on-device", text: "Your voice is turned into text right on your phone before anything else happens." },
  { Icon: ShieldIcon, title: "Your data, your call", text: "Export or delete your data any time, straight from settings." },
];

function Card({ Icon, title, text }: { Icon: typeof UsersIcon; title: string; text: string }) {
  return (
    <div className="glass rounded-3xl p-6">
      <span className="flex h-11 w-11 items-center justify-center rounded-2xl bg-violet/12 text-violet-deep">
        <Icon size={22} />
      </span>
      <h3 className="mt-4 text-lg font-bold">{title}</h3>
      <p className="mt-2 leading-relaxed text-ink-soft">{text}</p>
    </div>
  );
}

export default function CommunityPrivacy() {
  return (
    <section className="px-4 py-20">
      <div className="mx-auto grid max-w-6xl gap-16 lg:grid-cols-2 lg:gap-10">
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">Community</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            Better <span className="text-gradient">together</span>
          </h2>
          <div className="mt-8 grid gap-4">
            {community.map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </div>
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">Privacy</p>
          <h2 className="mt-3 text-4xl font-extrabold tracking-tight">
            Private <span className="text-gradient">by design</span>
          </h2>
          <div className="mt-8 grid gap-4">
            {privacy.map((c) => (
              <Card key={c.title} {...c} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
