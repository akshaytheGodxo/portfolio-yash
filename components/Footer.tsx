import Link from "next/link";

const links = ["Clients", "Services", "Work", "Process", "FAQs"];

export default function Footer() {
  return (
    <footer
      style={{
        padding: "32px 36px",
        background: "#07070C",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "14px",
      }}
    >
      {/* Logo */}
      <div
        style={{ fontSize: "18px", fontWeight: 900, letterSpacing: "-0.8px" }}
      >
        <span style={{ color: "#FFFFFF" }}>Raya</span>
        <span style={{ color: "#6C63FF" }}>Social</span>
      </div>

      {/* Nav links */}
      <div style={{ display: "flex", gap: "24px", flexWrap: "wrap" }}>
        {links.map((link) => (
          <Link
            key={link}
            href={`#${link.toLowerCase()}`}
            className="nav-link"
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.25)",
            }}
          >
            {link}
          </Link>
        ))}
      </div>

      {/* Copyright */}
      <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.16)" }}>
        © 2025 Raya Social · India
      </div>
    </footer>
  );
}
