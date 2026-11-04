import Link from "next/link";
import { ArrowIcon } from "@/components/icons";
import { readingMinutes, type Guide } from "@/content/guides";

export default function GuideCard({ guide }: { guide: Guide }) {
  return (
    <Link
      href={`/guides/${guide.slug}`}
      className="glass group flex h-full flex-col rounded-3xl p-6 transition hover:-translate-y-0.5 hover:bg-white/80"
    >
      <span className="text-xs font-bold uppercase tracking-widest text-teal-deep">{guide.category}</span>
      <h3 className="mt-3 text-lg font-extrabold leading-snug">{guide.title}</h3>
      <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-ink-soft">{guide.description}</p>
      <span className="mt-4 flex items-center gap-2 text-sm font-bold text-violet-deep">
        Read · {readingMinutes(guide)} min
        <ArrowIcon size={16} className="transition group-hover:translate-x-0.5" />
      </span>
    </Link>
  );
}
