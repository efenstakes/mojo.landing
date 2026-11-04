import Logo from "@/components/logo";
import { navLinks, site } from "@/lib/site";

/** Computed once when the page is built (Cache Components won't prerender a bare `new Date()`). */
async function CopyrightYear() {
  "use cache";
  return <>{new Date().getFullYear()}</>;
}

export default function Footer() {
  const legal = [
    { label: "Privacy", href: site.privacyUrl },
    { label: "Terms", href: site.termsUrl },
  ].filter((l) => l.href);

  return (
    <footer className="px-4 pb-10 pt-6">
      <div className="glass mx-auto flex max-w-6xl flex-col gap-8 rounded-blob px-8 py-10 md:flex-row md:items-start md:justify-between">
        <div className="max-w-xs">
          <Logo />
          <p className="mt-4 text-sm leading-relaxed text-ink-soft">{site.tagline}</p>
        </div>

        <div className="grid grid-cols-2 gap-10 text-sm sm:grid-cols-3">
          <div>
            <p className="font-bold">Product</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="font-bold">Company</p>
            <ul className="mt-3 space-y-2 text-ink-soft">
              {legal.map((l) => (
                <li key={l.label}>
                  <a href={l.href} className="hover:text-ink">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a href={`mailto:${site.supportEmail}`} className="hover:text-ink">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <p className="font-bold">Say hi</p>
            <p className="mt-3 text-ink-soft">
              <a href={`mailto:${site.supportEmail}`} className="hover:text-ink">
                {site.supportEmail}
              </a>
            </p>
          </div>
        </div>
      </div>
      <p className="mx-auto mt-6 max-w-6xl px-4 text-center text-xs text-ink-soft">
        © <CopyrightYear /> Mojo. Mojo supports everyday wellbeing and is not a medical device.
      </p>
    </footer>
  );
}
