"use client";

import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Clients", href: "#clients" },
    { label: "Services", href: "#services" },
    { label: "Work", href: "#work" },
    { label: "Process", href: "#process" },
    { label: "FAQs", href: "#faq" },
  ];

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
      className="navbar"
    >
      {/* Logo */}
      <div
        className="navbar-logo"
        style={{
          fontSize: "19px",
          fontWeight: 900,
          letterSpacing: "-0.8px",
          minWidth: "fit-content",
        }}
      >
        <span style={{ color: "#FFFFFF" }}>Raya</span>
        <span style={{ color: "#6C63FF" }}>Social</span>
      </div>

      {/* Desktop Nav Links */}
      <div
        style={{
          display: "",
        }}
        className="desktop-nav"
      >
        <div style={{ display: "flex", gap: "2px", alignItems: "center" }}>
          {navItems.map((item) => (
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
      </div>

      {/* Mobile Menu Toggle */}
      <button
        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        style={{
          display: "none",
          background: "none",
          border: "none",
          color: "#FFFFFF",
          fontSize: "24px",
          cursor: "pointer",
          padding: "4px 8px",
        }}
        className="mobile-menu-btn"
        aria-label="Toggle menu"
      >
        {mobileMenuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div
          className="mobile-menu"
          style={{
            position: "absolute",
            top: "100%",
            left: 0,
            right: 0,
            background: "rgba(10,10,15,0.98)",
            borderBottom: "0.5px solid rgba(255,255,255,0.06)",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            padding: "16px",
            backdropFilter: "blur(20px)",
            WebkitBackdropFilter: "blur(20px)",
          }}
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.7)",
                padding: "10px 0",
                fontWeight: 500,
                borderBottom: "0.5px solid rgba(255,255,255,0.08)",
              }}
              onClick={() => setMobileMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <button
            className="btn-primary btn-shimmer"
            style={{
              padding: "10px 20px",
              marginTop: "8px",
              width: "100%",
              fontSize: "12px",
            }}
          >
            Book a Call →
          </button>
        </div>
      )}

      <style>{`
        .navbar {
          padding: 18px 36px;
        }

        @media (max-width: 768px) {
          .navbar {
            padding: 14px 20px;
          }
        }

        @media (max-width: 480px) {
          .navbar {
            padding: 12px 14px;
          }
        }

        .navbar-logo {
          font-size: 19px;
          font-weight: 900;
          letter-spacing: -0.8px;
          min-width: fit-content;
        }

        @media (max-width: 768px) {
          .navbar-logo {
            font-size: 16px;
          }
        }

        @media (max-width: 480px) {
          .navbar-logo {
            font-size: 14px;
          }
        }

        .desktop-nav {
          display: block;
        }

        .mobile-menu-btn {
          display: none;
        }

        @media (max-width: 768px) {
          .desktop-nav {
            display: none !important;
          }

          .mobile-menu-btn {
            display: block !important;
          }

          .mobile-menu {
            font-size: 12px;
          }
        }
      `}</style>
    </nav>
  );
}
