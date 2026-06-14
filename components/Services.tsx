"use client";

import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
};

const services: Service[] = [
  {
    title: "Scriptwriting",
    description: "Hook-first scripts built around your niche, voice, and what your audience wants to watch. Every word engineered to stop the scroll.",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 20h9" /><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Video Shooting",
    description: "Professional production — lighting, framing, direction. Every frame works for your brand and tells your story.",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="15" height="14" rx="2" /><path d="M17 9l5-2v10l-5-2" />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    description: "Cinematic Reels and Shorts with captions, transitions, and sound design. Delivered in 48 hours — every time.",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" /><circle cx="6" cy="18" r="3" /><line x1="20" y1="4" x2="8.12" y2="15.88" /><line x1="14.47" y1="14.48" x2="20" y2="20" />
      </svg>
    ),
    popular: true,
  },
  {
    title: "Posting & Scheduling",
    description: "The right content at the right time. We manage your calendar to maximise reach, saves, and engagement.",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Account Management",
    description: "DMs, comments, and community — fully handled. Monthly analytics that show exactly what's growing and why.",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Paid Ads",
    description: "Meta and Instagram campaigns built for ROI. Every rupee tracked, every creative optimised for conversions.",
    icon: (
      <svg viewBox="0 0 24 24" width="18" height="18" stroke="currentColor" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

export default function Services() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">What we do</span>
          <h2 className="heading heading--sm">Full-service content production. End-to-end.</h2>
          <p className="lede">One agency. Six services. Zero excuses. From the first word to the final cut.</p>
        </header>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 py-10">
          {services.map((s, idx) => (
            <div
              key={s.title}
              className="group relative block h-full w-full p-2"
              onMouseEnter={() => setHoveredIndex(idx)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <AnimatePresence>
                {hoveredIndex === idx && (
                  <motion.span
                    className="absolute inset-0 block h-full w-full rounded-3xl bg-[var(--accent-soft)]"
                    layoutId="hoverBackground"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1, transition: { duration: 0.15 } }}
                    exit={{ opacity: 0, transition: { duration: 0.15, delay: 0.2 } }}
                  />
                )}
              </AnimatePresence>
              <div className="relative z-20 h-full w-full overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 transition-colors group-hover:border-[var(--accent-border)]">
                <div className="relative z-50 p-4">
                  <div className="service-card__icon">{s.icon}</div>
                  <h3 className="mt-4 font-bold tracking-wide text-[var(--text)]">
                    {s.title}
                    {s.popular && <span className="badge ml-2">Most popular</span>}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed tracking-wide text-[var(--text-secondary)]">
                    {s.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
