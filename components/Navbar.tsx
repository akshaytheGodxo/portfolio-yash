"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "18px 36px",
        background: "rgba(10,10,15,0.85)",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 100,
        backdropFilter: "blur(16px)",
      }}
    >
      {/* Logo */}
      <div
        style={{ fontSize: "19px", fontWeight: 900, letterSpacing: "-0.8px" }}
      >
        <span style={{ color: "#FFFFFF" }}>Raya</span>
        <span style={{ color: "#6C63FF" }}>Social</span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
        {[
          { label: "Clients", href: "#clients" },
          { label: "Services", href: "#services" },
          { label: "Work", href: "#work" },
          { label: "Process", href: "#process" },
          { label: "FAQs", href: "#faq" },
        ].map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className="nav-link"
            style={{
              fontSize: "13px",
              color: "rgba(255,255,255,0.4)",
              padding: "8px 14px",
              fontWeight: 500,
            }}
          >
            {item.label}
          </Link>
        ))}
        <button
          className="btn-primary btn-shimmer"
          style={{ padding: "10px 20px", marginLeft: "10px" }}
        >
          Book a Call →
        </button>
      </div>
    </nav>
  );
}
