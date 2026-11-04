import type { ComponentType, ReactNode } from "react";

export type Feature = { label: string; Icon: ComponentType<{ size?: number; className?: string }> };

type Props = {
  id?: string;
  eyebrow: string;
  title: ReactNode;
  text: string;
  features: Feature[];
  visual: ReactNode;
  reverse?: boolean;
};

/**
 * One alternating "experience" block: copy + feature chips on one side, an
 * app screen on the other. Mojo's take on the Heylixir landing's section
 * layout -- rounder, lighter, with app mockups instead of photos.
 */
export default function FeatureSection({ id, eyebrow, title, text, features, visual, reverse = false }: Props) {
  return (
    <section id={id} className="scroll-mt-28 px-4 py-16 sm:py-24">
      <div
        className={`mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2 lg:gap-20 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div>
          <p className="text-sm font-bold uppercase tracking-widest text-teal-deep">{eyebrow}</p>
          <h2 className="mt-3 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl">{title}</h2>
          <p className="mt-5 text-lg leading-relaxed text-ink-soft">{text}</p>

          <ul className="mt-8 grid gap-3 sm:grid-cols-2">
            {features.map(({ label, Icon }) => (
              <li key={label} className="glass flex items-center gap-3 rounded-2xl px-4 py-3">
                <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-violet/12 text-violet-deep">
                  <Icon size={18} />
                </span>
                <span className="text-sm font-semibold">{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="relative">
          <div className="absolute inset-x-10 top-12 -z-10 h-[75%] rounded-blob bg-gradient-brand opacity-25 blur-2xl" />
          {visual}
        </div>
      </div>
    </section>
  );
}
