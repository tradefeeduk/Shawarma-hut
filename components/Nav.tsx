"use client";

import { useState, useEffect } from "react";
import { Menu, X, Flame } from "lucide-react";
import { business } from "@/lib/info";

const links = [
  { href: "#menu", label: "Menu" },
  { href: "#story", label: "Our Story" },
  { href: "#viral", label: "The Hype" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-brand-cream/95 backdrop-blur shadow-[0_2px_0_0_#0B0B0B]"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2 group" aria-label={business.name}>
          <span className="grid place-items-center w-10 h-10 rounded-full bg-brand-red text-white shadow-[3px_3px_0_0_#0B0B0B] group-hover:rotate-[-8deg] transition-transform">
            <Flame className="w-5 h-5" strokeWidth={2.5} />
          </span>
          <span className="font-display font-extrabold text-xl sm:text-2xl tracking-tight">
            {business.name}
          </span>
        </a>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-4 py-2 font-semibold text-sm rounded-full hover:bg-brand-yellow transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#order"
            className="ml-2 inline-flex items-center gap-2 bg-brand-red text-white font-bold px-5 py-2.5 rounded-full shadow-[3px_3px_0_0_#0B0B0B] hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-[2px_2px_0_0_#0B0B0B] transition-all"
          >
            Order Now
          </a>
        </nav>

        <button
          aria-label={open ? "Close menu" : "Open menu"}
          onClick={() => setOpen((v) => !v)}
          className="md:hidden grid place-items-center w-10 h-10 rounded-full bg-brand-black text-white"
        >
          {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-brand-cream border-t-2 border-brand-black">
          <nav className="px-4 py-3 flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="px-4 py-3 font-semibold rounded-2xl hover:bg-brand-yellow"
              >
                {l.label}
              </a>
            ))}
            <a
              href="#order"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 bg-brand-red text-white font-bold px-5 py-3 rounded-full shadow-[3px_3px_0_0_#0B0B0B]"
            >
              Order Now
            </a>
          </nav>
        </div>
      )}
    </header>
  );
}
