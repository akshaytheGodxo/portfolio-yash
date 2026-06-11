"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const stats = [
    { value: "8", suffix: "M+", label: "Followers" },
    { value: "100", suffix: "M+", label: "Views Generated" },
    { value: "300", suffix: "+", label: "Videos / Month" },
    { value: "48", suffix: "hr", label: "Turnaround" },
  ];

  const statsRef = useRef<HTMLDivElement>(null);
  const [started, setStarted] = useState(false);
  const [counts, setCounts] = useState(stats.map(() => 0));

  useEffect(() => {
    const el = statsRef.current;
    if (!el || started) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setStarted(true);
          observer.disconnect();
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const targets = stats.map((s) => parseInt(s.value));
    const duration = 1500;
    const startTime = performance.now();

    const raf = requestAnimationFrame(function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map((t) => Math.floor(t * eased)));

      if (progress < 1) requestAnimationFrame(tick);
    });

    return () => cancelAnimationFrame(raf);
  }, [started]);

  return (
    <section
      style={{
        padding: "104px 36px 88px",
        textAlign: "center",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="pill" style={{ marginBottom: "28px" }}>
        Premium SMMA · India&apos;s Top Creators
      </div>

      <h1
        style={{
          fontSize: "54px",
          fontWeight: 900,
          letterSpacing: "-2.8px",
          color: "#FFFFFF",
          lineHeight: 1.04,
          maxWidth: "700px",
          margin: "0 auto 22px",
        }}
      >
        We Build Personal Brands That{" "}
        <span style={{ color: "#6C63FF" }}>Dominate</span> Social Media
      </h1>

      <p
        style={{
          fontSize: "15px",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.8,
          maxWidth: "520px",
          margin: "0 auto 38px",
        }}
      >
        Full-service social media management for India's fastest-growing
        personal brands. Script. Shoot. Edit. Post. Grow. Real humans, not AI.
      </p>

      <div
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "56px",
        }}
      >
        <button
          className="btn-primary btn-shimmer"
          style={{ fontSize: "14px", padding: "15px 32px" }}
        >
          Book a Free Strategy Call
        </button>
        <button
          className="btn-ghost"
          style={{ fontSize: "14px", padding: "15px 24px" }}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#FFFFFF">
            <polygon points="5,3 19,12 5,21" />
          </svg>
          See Our Work
        </button>
      </div>

      {/* Stats bar */}
      <div
        ref={statsRef}
        style={{
          display: "inline-flex",
          gap: 0,
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: "14px",
          overflow: "hidden",
        }}
      >
        {stats.map((stat, i) => (
          <div
            key={stat.label}
            style={{
              padding: "22px 30px",
              textAlign: "center",
              borderRight:
                i < stats.length - 1
                  ? "0.5px solid rgba(255,255,255,0.08)"
                  : "none",
            }}
          >
            <div
              style={{
                fontSize: "27px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-1.5px",
              }}
            >
              {counts[i]}
              <span style={{ color: "#6C63FF" }}>{stat.suffix}</span>
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.28)",
                marginTop: "6px",
                textTransform: "uppercase",
                letterSpacing: "1.2px",
                fontWeight: 600,
              }}
            >
              {stat.label}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
