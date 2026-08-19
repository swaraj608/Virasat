"use client";

import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Explore", href: "/explore" },
  { label: "Experiences", href: "/experiences" },
  { label: "CultureVault", href: "/culture-vault" },
  { label: "AI Guide", href: "/ai-guide" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="sticky top-0 z-50 border-b border-[#e2d9ce]/80 bg-[#f8f5ef]/85 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <Link
          href="/"
          className="group shrink-0"
          onClick={closeMenu}
        >
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-[#241f1a] text-lg font-bold text-white shadow-sm transition duration-300 group-hover:-rotate-3 group-hover:scale-105">
              V
            </div>

            <div>
              <p className="text-lg font-bold leading-none tracking-tight text-[#241f1a]">
                Virasat
              </p>

              <p className="mt-1 text-[9px] font-medium uppercase tracking-[0.2em] text-[#81776c]">
                Living Heritage
              </p>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="relative text-sm font-medium text-[#625a51] transition hover:text-[#9a5b32]"
            >
              {item.label}
            </Link>
          ))}

          <Link
            href="/contribute"
            className="rounded-full bg-[#241f1a] px-5 py-2.5 text-sm font-medium text-white shadow-sm transition duration-300 hover:-translate-y-0.5 hover:shadow-lg"
          >
            Contribute →
          </Link>
        </div>

        {/* Mobile */}
        <div className="flex items-center gap-2 lg:hidden">
          <Link
            href="/contribute"
            className="hidden rounded-full bg-[#241f1a] px-4 py-2 text-xs font-medium text-white sm:block"
          >
            Contribute
          </Link>

          {/* Hamburger Button */}
          <button
            type="button"
            aria-label={
              isMenuOpen
                ? "Close navigation menu"
                : "Open navigation menu"
            }
            aria-expanded={isMenuOpen}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-[#d8cfc3] bg-white text-[#241f1a] transition hover:bg-[#f1ece4]"
          >
            {/* Top line */}
            <span
              className={`absolute h-0.5 w-5 bg-[#241f1a] transition-all duration-300 ${
                isMenuOpen
                  ? "rotate-45"
                  : "-translate-y-1.5"
              }`}
            />

            {/* Middle line */}
            <span
              className={`absolute h-0.5 w-5 bg-[#241f1a] transition-all duration-300 ${
                isMenuOpen
                  ? "opacity-0"
                  : "opacity-100"
              }`}
            />

            {/* Bottom line */}
            <span
              className={`absolute h-0.5 w-5 bg-[#241f1a] transition-all duration-300 ${
                isMenuOpen
                  ? "-rotate-45"
                  : "translate-y-1.5"
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-[#e2d9ce]/80 bg-[#f8f5ef] transition-all duration-300 lg:hidden ${
          isMenuOpen
            ? "max-h-[500px] opacity-100"
            : "max-h-0 opacity-0"
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 py-5">
          <div className="flex flex-col gap-1">

            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMenu}
                className="flex items-center justify-between rounded-xl px-4 py-3.5 text-sm font-medium text-[#625a51] transition hover:bg-white hover:text-[#9a5b32]"
              >
                <span>{item.label}</span>

                <span className="text-[#9a5b32]">
                  →
                </span>
              </Link>
            ))}

            {/* Mobile Contribute */}
            <Link
              href="/contribute"
              onClick={closeMenu}
              className="mt-3 rounded-full bg-[#241f1a] px-5 py-3.5 text-center text-sm font-medium text-white transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Contribute a Story →
            </Link>

          </div>
        </div>
      </div>
    </nav>
  );
}