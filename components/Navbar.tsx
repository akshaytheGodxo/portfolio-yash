"use client";

import Link from "next/link";
import { useState } from "react";
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavMenu,
  MobileNavToggle,
} from "@/components/ui/resizable-navbar";

const navItems = [
  { name: "Services", link: "#services" },
  { name: "Work", link: "#work" },
  { name: "Process", link: "#process" },
  { name: "FAQs", link: "#faq" },
];

export default function AppNavbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Navbar className="top-0">
      <NavBody>
        <Link
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
        >
          <span className="font-bold text-[var(--text)]">
            Raya<span className="text-[#6C63FF]">Social</span>
          </span>
        </Link>
        <NavItems items={navItems} />
        <a
          href="#contact"
          className="hidden rounded-full bg-[var(--accent)] px-6 py-2 text-sm font-semibold text-white transition-all hover:bg-[#5a52e0] md:block"
        >
          Book a call
        </a>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <Link
            href="/"
            className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-sm font-normal"
          >
            <span className="font-bold text-[var(--text)]">
              Raya<span className="text-[#6C63FF]">Social</span>
            </span>
          </Link>
          <MobileNavToggle
            isOpen={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
        </MobileNavHeader>
        <MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
          {navItems.map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsOpen(false)}
              className="relative text-[var(--text-secondary)]"
            >
              <span className="block">{item.name}</span>
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 w-full rounded-lg bg-[var(--accent)] px-8 py-2.5 text-center text-sm font-semibold text-white transition-all hover:bg-[#5a52e0]"
          >
            Book a call
          </a>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
