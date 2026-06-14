import Link from "next/link";

const links = [
  { href: "#clients", label: "Clients" },
  { href: "#work", label: "Work" },
  { href: "#services", label: "Services" },
  { href: "#process", label: "Process" },
  { href: "#faq", label: "FAQs" },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container site-footer__row">
        <div className="site-footer__brand">
          Raya<span>Social</span>
        </div>
        <nav className="site-footer__nav" aria-label="Footer">
          {links.map((l) => (
            <Link key={l.href} href={l.href}>{l.label}</Link>
          ))}
        </nav>
        <p className="site-footer__copy">© 2025 Raya Social · India</p>
      </div>
    </footer>
  );
}
