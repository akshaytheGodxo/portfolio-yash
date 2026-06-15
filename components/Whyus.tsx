import { motion } from "motion/react";
import { useState } from "react";

const reasons = [
  {
    title: "48-Hour Turnaround",
    description:
      "Send raw footage. Get cinematic edits back in 48 hours — every time.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Real Human Editors",
    description:
      "No AI fillers. Every cut is made by someone who understands your niche.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    description:
      "8M+ followers managed. 100M+ views generated. 300+ videos every month.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "End-to-End Execution",
    description:
      "Script. Shoot. Edit. Post. Manage. We handle every step so you focus on your expertise.",
    icon: (
      <svg
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

export default function WhyUs() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">Why Raya Social</span>
          <h2 className="heading heading--sm">
            Why top creators and brands choose us.
          </h2>
          <p className="lede">
            Four things every client gets — that most agencies can&apos;t
            deliver.
          </p>
        </header>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {reasons.map((r, idx) => (
            <motion.div
              key={r.title}
              onMouseEnter={() => setHovered(idx)}
              onMouseLeave={() => setHovered(null)}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-6 transition-all duration-300 hover:border-[var(--accent-border)] hover:shadow-[0_0_30px_rgba(108,99,255,0.08)]"
            >
              <div className="relative z-10 flex items-start gap-5">
                <span
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-xl text-[var(--accent)] transition-all duration-300 ${
                    hovered === idx
                      ? "bg-[var(--accent)] text-white shadow-[0_0_20px_var(--accent-border)]"
                      : "bg-[var(--accent-soft)]"
                  }`}
                >
                  {r.icon}
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold text-[var(--text)]">
                    {r.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-[var(--text-secondary)]">
                    {r.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
