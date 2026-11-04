import Link from "next/link";
import Logo from "@/components/logo";
import { guides } from "@/content/guides";
import { site } from "@/lib/site";

/** Evaluated once when the module loads at build time, so pages stay fully static. */
const YEAR = new Date().getFullYear();

const featuredGuides = [
  "managing-mental-health-working-9-to-5",
  "managing-mental-health-at-university",
  "best-mental-health-apps-for-students",
  "best-mental-health-apps-for-9-to-5-workers",
  "signs-of-burnout-at-work",
  "how-to-recover-from-burnout",
]
  .map((slug) => guides.find((g) => g.slug === slug))
  .filter((g) => g !== undefined);

const product = [
  { href: "/#how-it-works", label: "How it works" },
  { href: "/#features", label: "Features" },
  { href: "/#halo", label: "Halo AI" },
  { href: "/#faq", label: "FAQ" },
  { href: "/guides", label: "All guides" },
];

const company = [
  { href: "/about", label: "About" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/delete-account", label: "Delete your account" },
];

export default function Footer() {
  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="glass mx-auto grid max-w-6xl gap-10 rounded-blob px-8 py-10 md:grid-cols-[1fr_2.4fr]">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{site.tagline}</p>
          <p className="mt-4 text-sm text-ink-soft">
            <a href={`mailto:${site.supportEmail}`} className="hover:text-ink">
              {site.supportEmail}
            </a>
          </p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <nav aria-label="Product">
            <p className="font-bold">Product</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {product.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Popular guides" className="col-span-2 sm:col-span-1">
            <p className="font-bold">Popular guides</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {featuredGuides.map((g) => (
                <li key={g.slug}>
                  <Link href={`/guides/${g.slug}`} className="hover:text-ink">
                    {g.metaTitle}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <nav aria-label="Company" className="row-start-1 sm:row-auto col-start-2 sm:col-auto">
            <p className="font-bold">Company</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {company.map((l) => (
                <li key={l.href}>
                  <Link href={l.href} className="hover:text-ink">
                    {l.label}
                  </Link>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.supportEmail}`} className="hover:text-ink">
                  Contact
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-ink-soft">
        © {YEAR} {site.legalName}. Mojo supports everyday wellbeing and is not a medical device. If
        you&apos;re in crisis, call your local emergency number or a crisis line such as 988 (US) or 116 123 (UK).
      </p>
    </footer>
  );
}
