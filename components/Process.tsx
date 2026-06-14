import { motion } from "motion/react";

const steps = [
  {
    num: "01",
    title: "Strategy Call",
    desc: "We understand your niche, audience, voice, and goals before writing a single word.",
    time: "Day 1–2",
  },
  {
    num: "02",
    title: "Scripts & Calendar",
    desc: "Trending topics, hook-driven scripts, full month's calendar — shared for approval.",
    time: "Day 3–5",
  },
  {
    num: "03",
    title: "Edit & Deliver",
    desc: "Cinematic edits with captions, effects, and sound design. Delivered in 48 hours.",
    time: "Day 5–7",
  },
  {
    num: "04",
    title: "Post & Grow",
    desc: "Posting, community management, and monthly reporting — fully handled.",
    time: "Ongoing",
  },
];

export default function Process() {
  return (
    <section id="process" className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">How it works</span>
          <h2 className="heading heading--sm">From zero to viral in 7 days.</h2>
          <p className="lede">A repeatable system. Same process, every client, every month.</p>
        </header>

        {/* Desktop timeline */}
        <div className="relative hidden md:block">
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originX: 0.5 }}
            className="absolute left-[10%] right-[10%] top-6 h-px bg-gradient-to-r from-transparent via-[var(--accent)] to-transparent"
          />
          <div className="grid grid-cols-4 gap-6">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="flex flex-col items-center"
              >
                <div className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-[var(--accent-border)] bg-[var(--bg)] text-sm font-bold text-[var(--accent)]">
                  {step.num}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20, boxShadow: "0 0 0px rgba(108,99,255,0)" }}
                  whileInView={{ opacity: 1, y: 0, boxShadow: "0 0 30px rgba(108,99,255,0.08)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.15 }}
                  className="mt-5 h-full w-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-5 text-center transition-colors hover:border-[var(--accent-border)]"
                >
                  <h3 className="text-sm font-bold text-[var(--text)]">{step.title}</h3>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">{step.desc}</p>
                  <span className="mt-3 block text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">{step.time}</span>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile timeline */}
        <div className="relative md:hidden">
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            style={{ originY: 0 }}
            className="absolute left-5 top-0 h-full w-px bg-gradient-to-b from-[var(--accent)] via-[var(--accent-border)] to-transparent"
          />
          <div className="flex flex-col gap-8">
            {steps.map((step, idx) => (
              <motion.div
                key={step.num}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-30px" }}
                transition={{ duration: 0.4, delay: idx * 0.15 }}
                className="relative flex items-start gap-5 pl-14"
              >
                <div className="absolute left-3 z-10 flex h-6 w-6 -translate-x-1/2 items-center justify-center rounded-full border-2 border-[var(--accent-border)] bg-[var(--bg)] text-[10px] font-bold text-[var(--accent)]">
                  {step.num}
                </div>
                <motion.div
                  initial={{ opacity: 0, y: 20, boxShadow: "0 0 0px rgba(108,99,255,0)" }}
                  whileInView={{ opacity: 1, y: 0, boxShadow: "0 0 30px rgba(108,99,255,0.08)" }}
                  viewport={{ once: true, margin: "-30px" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 + 0.15 }}
                  className="w-full rounded-xl border border-[var(--border)] bg-[var(--bg-elevated)] p-4 transition-colors hover:border-[var(--accent-border)]"
                >
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-[var(--text)]">{step.title}</h3>
                    <span className="text-[10px] font-semibold uppercase tracking-widest text-[var(--text-muted)]">{step.time}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[var(--text-secondary)]">{step.desc}</p>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
