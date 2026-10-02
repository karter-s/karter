"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { href: "/#featured-work", label: "Work" },
  { href: "/#about", label: "About" },
  { href: "/#foundations", label: "Foundations" },
  { href: "/#contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-canvas/90 backdrop-blur-md">
      <div className="kps-container flex h-16 items-center justify-between">
        <Link
          href="/"
          className="text-sm font-semibold text-primary transition-colors hover:text-action"
          onClick={() => setOpen(false)}
        >
          Karter Steinle
        </Link>

        <nav className="hidden items-center gap-6 text-sm md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-secondary transition-colors hover:text-primary"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://github.com/karter-s"
            target="_blank"
            rel="noopener noreferrer"
            className="kps-button kps-button-secondary min-h-10 px-3"
          >
            GitHub
          </a>
        </nav>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-surface text-secondary transition-colors hover:bg-surface-raised hover:text-primary md:hidden"
          aria-label={open ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen((value) => !value)}
        >
          {open ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M6 6l12 12M18 6 6 18" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          )}
        </button>
      </div>

      {open && (
        <nav
          id="mobile-navigation"
          className="border-t border-border bg-canvas px-5 py-4 md:hidden"
          aria-label="Mobile navigation"
        >
          <div className="mx-auto flex max-w-5xl flex-col gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-lg px-3 py-3 text-sm font-medium text-secondary transition-colors hover:bg-surface hover:text-primary"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
            <a
              href="https://github.com/karter-s"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg px-3 py-3 text-sm font-medium text-secondary transition-colors hover:bg-surface hover:text-primary"
              onClick={() => setOpen(false)}
            >
              GitHub ↗
            </a>
          </div>
        </nav>
      )}
    </header>
  );
}
