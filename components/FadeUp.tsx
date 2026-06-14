"use client";

import { useEffect, useRef, useState } from "react";

type FadeUpProps = {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  stagger?: boolean;
};

export default function FadeUp({
  children,
  className = "",
  delay = 0,
  stagger = false,
}: FadeUpProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.06, rootMargin: "0px 0px -40px 0px" },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`${stagger ? "stagger-children" : "fade-up"} ${visible ? "visible" : ""} ${className}`}
      style={{ "--fade-delay": `${delay}ms` } as React.CSSProperties}
    >
      {children}
    </div>
  );
}
