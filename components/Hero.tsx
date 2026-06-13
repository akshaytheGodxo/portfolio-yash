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
      { threshold: 0.5 },
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
      <style>{`
        @media (max-width: 1024px) {
          .hero-section {
            padding: 80px 28px 72px;
          }

          .hero-title {
            font-size: 40px;
          }

          .hero-description {
            font-size: 14px;
          }

          .hero-buttons {
            gap: 10px;
          }

          .stats-container {
            border-radius: 12px;
          }

          .stat-item {
            padding: 18px 24px;
          }

          .stat-value {
            font-size: 24px;
          }

          .stat-label {
            font-size: 9px;
          }
        }

        @media (max-width: 768px) {
          .hero-section {
            padding: 64px 20px 56px;
          }

          .hero-title {
            font-size: 32px;
            letter-spacing: -1.2px;
            margin-bottom: 16px;
          }

          .hero-description {
            font-size: 13px;
            margin-bottom: 32px;
          }

          .hero-buttons {
            flex-direction: column;
            gap: 10px;
          }

          .hero-button {
            width: 100%;
            font-size: 12px;
            padding: 12px 20px;
          }

          .stats-container {
            display: grid !important;
            grid-template-columns: repeat(2, 1fr);
            gap: 0;
            border-radius: 10px;
            border: 0.5px solid rgba(255,255,255,0.08);
            width: 100%;
            max-width: 100%;
          }

          .stat-item {
            padding: 16px 12px;
            border-bottom: 0.5px solid rgba(255,255,255,0.08);
            border-right: 0.5px solid rgba(255,255,255,0.08);
          }

          .stat-item:nth-child(odd):nth-last-child(-n+2),
          .stat-item:nth-child(even):nth-last-child(-n+2) {
            border-bottom: none;
          }

          .stat-item:nth-child(even) {
            border-right: none;
          }

          .stat-value {
            font-size: 20px;
          }

          .stat-label {
            font-size: 8px;
          }
        }

        @media (max-width: 640px) {
          .hero-section {
            padding: 48px 16px 40px;
          }

          .hero-title {
            font-size: 26px;
            letter-spacing: -1px;
            margin-bottom: 12px;
          }

          .hero-description {
            font-size: 12px;
            margin-bottom: 24px;
            line-height: 1.6;
          }

          .hero-buttons {
            margin-bottom: 40px;
          }

          .hero-button {
            font-size: 11px;
            padding: 10px 16px;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .stat-item {
            padding: 14px 10px;
          }

          .stat-value {
            font-size: 18px;
          }

          .stat-label {
            font-size: 7px;
            margin-top: 4px;
          }
        }

        @media (max-width: 480px) {
          .hero-section {
            padding: 40px 12px 32px;
          }

          .hero-title {
            font-size: 22px;
            letter-spacing: -0.8px;
            margin-bottom: 10px;
            line-height: 1.2;
          }

          .hero-description {
            font-size: 11px;
            margin-bottom: 20px;
          }

          .hero-buttons {
            margin-bottom: 32px;
          }

          .hero-button {
            font-size: 10px;
            padding: 9px 14px;
          }

          .stats-container {
            grid-template-columns: repeat(2, 1fr) !important;
          }

          .stat-item {
            padding: 12px 8px;
          }

          .stat-value {
            font-size: 16px;
          }

          .stat-label {
            font-size: 6.5px;
            margin-top: 3px;
          }
        }
      `}</style>

      <div className="pill" style={{ marginBottom: "28px" }}>
        Premium SMMA · India&apos;s Top Creators
      </div>

      <h1
        className="hero-title"
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
        className="hero-description"
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
        className="hero-buttons"
        style={{
          display: "flex",
          gap: "12px",
          justifyContent: "center",
          marginBottom: "56px",
        }}
      >
        <button
          className="btn-primary btn-shimmer hero-button"
          style={{ fontSize: "14px", padding: "15px 32px" }}
        >
          Book a Free Strategy Call
        </button>
        <button
          className="btn-ghost hero-button"
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
        className="stats-container"
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
            className="stat-item"
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
              className="stat-value"
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
              className="stat-label"
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
