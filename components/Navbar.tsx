"use client";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { href: "#clients", label: "Clients" },
    { href: "#services", label: "Services" },
    { href: "#work", label: "Work" },
    { href: "#process", label: "Process" },
    { href: "#faq", label: "FAQs" },
  ];

  return (
    <nav className="sticky top-0 z-[100] relative box-border flex w-full items-center justify-between border-b border-white/[0.06] bg-[rgba(10,10,15,0.85)] px-3.5 py-3 backdrop-blur-2xl sm:px-5 sm:py-3.5 md:px-9 md:py-[18px]">
      {/* Logo */}
      <div className="min-w-fit text-sm font-black tracking-[-0.8px] sm:text-base md:text-[19px]">
        <span className="text-white">Raya</span>
        <span className="text-[#6C63FF]">Social</span>
      </div>

      {/* Desktop nav */}
      <div className="hidden min-w-0 md:block">
        <div className="flex items-center gap-0.5">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="nav-link whitespace-nowrap px-3.5 py-2 text-[13px] font-medium text-white/40 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary btn-shimmer ml-2.5 flex-shrink-0 whitespace-nowrap px-5 py-2.5">
            Book a Call →
          </button>
        </div>
      </div>

      {/* Mobile menu button */}
      <button
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
        className="block cursor-pointer border-none bg-none px-2 py-1 text-2xl text-white md:hidden"
      >
        ☰
      </button>

      {/* Mobile menu */}
      {menuOpen && (
        <div
          className="fixed inset-x-0 top-[57px] bg-[#0A0A0F]      z-[99999]
 flex max-h-[calc(100vh-57px)] flex-col gap-1 overflow-y-auto border-b border-white/[0.06]  p-4 text-xs shadow-2xl md:hidden"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="rounded-md px-3.5 py-2.5 font-medium text-white/40 transition-colors hover:bg-white/5 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <button className="btn-primary btn-shimmer mt-2 px-5 py-2.5">
            Book a Call →
          </button>
        </div>
      )}
    </nav>
  );
}
