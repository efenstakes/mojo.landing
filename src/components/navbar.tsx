"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { CloseIcon, MenuIcon } from "@/components/icons";
import GetMojoButton from "@/components/get-mojo-button";
import Logo from "@/components/logo";
import { navLinks } from "@/lib/site";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4">
      <nav
        className={`mx-auto flex max-w-6xl items-center justify-between rounded-full px-4 py-2.5 transition sm:px-6 ${
          scrolled || open
            ? "border border-white/70 bg-white/90 shadow-[0_12px_40px_-20px_rgb(45_30_110/0.45)] backdrop-blur-xl"
            : "bg-transparent"
        }`}
        aria-label="Main"
      >
        <Link href="/" className="flex items-center gap-2" aria-label="Mojo home">
          <Logo />
        </Link>

        <ul className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <li key={l.href}>
              <Link href={l.href} className="text-sm font-semibold text-ink-soft transition hover:text-ink">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>

        <GetMojoButton source="nav" className="hidden rounded-full bg-ink px-5 py-2.5 text-sm font-bold text-white transition hover:bg-violet-deep md:inline-flex" />

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center rounded-full text-ink md:hidden"
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <CloseIcon /> : <MenuIcon />}
        </button>
      </nav>

      {open && (
        <div id="mobile-menu" className="mx-auto mt-2 max-w-6xl rounded-3xl border border-white/70 bg-white/95 p-4 shadow-xl backdrop-blur-xl md:hidden">
          <ul className="flex flex-col">
            {navLinks.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-2xl px-4 py-3 text-base font-semibold text-ink hover:bg-white"
                >
                  {l.label}
                </Link>
              </li>
            ))}
            <li>
              <GetMojoButton source="nav-mobile" onDone={() => setOpen(false)} className="w-full mt-2 block rounded-2xl bg-ink px-4 py-3 text-center text-base font-bold text-white" />
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
