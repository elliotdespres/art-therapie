"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "À propos" },
  { href: "/seances", label: "Séances" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-cream/90 backdrop-blur-md border-b border-beige shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="leading-tight">
          <span className="font-serif text-xl text-charcoal tracking-wide block">
            Art-Thérapie
          </span>
          <span className="font-sans text-xs font-light text-muted">Marjorie Prieux</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="font-sans text-sm text-charcoal hover:text-terra transition-colors"
            >
              {l.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="bg-terra text-white font-sans text-sm px-5 py-2.5 rounded-full hover:bg-terra-dark transition-colors"
          >
            Prendre RDV
          </Link>
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
          aria-label="Menu"
        >
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-charcoal transition-all duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </nav>

      {open && (
        <div className="md:hidden bg-cream border-t border-beige px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="font-sans text-charcoal" onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
          <Link
            href="/reservation"
            className="bg-terra text-white font-sans text-sm px-5 py-2.5 rounded-full text-center hover:bg-terra-dark transition-colors"
            onClick={() => setOpen(false)}
          >
            Prendre RDV
          </Link>
        </div>
      )}
    </header>
  );
}
