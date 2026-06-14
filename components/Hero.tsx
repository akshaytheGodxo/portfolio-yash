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
      { threshold: 0.4 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [started]);

  useEffect(() => {
    if (!started) return;
    const targets = stats.map((s) => parseInt(s.value, 10));
    const duration = 1400;
    const startTime = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCounts(targets.map((t) => Math.floor(t * eased)));
      if (progress < 1) requestAnimationFrame(tick);
    };

    const id = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(id);
  }, [started]);

  return (
    <section className="hero">
      <div className="hero__atmosphere" aria-hidden="true">
        <div className="hero__orb hero__orb--main" />
        <div className="hero__orb hero__orb--left" />
        <div className="hero__orb hero__orb--right" />
        <div className="hero__beam" />
        <div className="hero__grid" />
        <div className="hero__noise" />
        <div className="hero__fade" />
      </div>

      <div className="container hero__content">
        <span className="pill hero__pill">
          Premium SMMA · India&apos;s Top Creators
        </span>

        <h1 className="hero__title">
          We build personal brands that{" "}
          <span className="hero__title-accent">dominate</span> social media
        </h1>

        <p className="hero__lede">
          Full-service social media management for India&apos;s fastest-growing
          personal brands. Script. Shoot. Edit. Post. Grow. Real humans, not AI.
        </p>

        <div className="hero__actions">
          <a href="#contact" className="btn-primary btn-shimmer">
            Book a free strategy call
          </a>
          <a href="#work" className="btn-ghost">
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <polygon points="5,3 19,12 5,21" />
            </svg>
            See our work
          </a>
        </div>
      </div>
    </section>
  );
}
