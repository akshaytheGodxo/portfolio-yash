"use client";

import { useEffect, useRef } from "react";

const TRAIL_LENGTH = 10;
const SPACING = 8;

export default function CursorTrail() {
  const dotsRef = useRef<HTMLDivElement[]>([]);
  const mouseRef = useRef({ x: -100, y: -100 });
  const rafRef = useRef<number>(0);

  useEffect(() => {
    const dots = dotsRef.current;

    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };

    const positions: { x: number; y: number }[] = Array.from(
      { length: TRAIL_LENGTH },
      () => ({ x: -100, y: -100 }),
    );

    const animate = () => {
      const mouse = mouseRef.current;
      positions[0] = { x: mouse.x, y: mouse.y };

      for (let i = 1; i < TRAIL_LENGTH; i++) {
        const dx = positions[i - 1].x - positions[i].x;
        const dy = positions[i - 1].y - positions[i].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist > SPACING) {
          const ratio = SPACING / dist;
          positions[i].x += dx * ratio;
          positions[i].y += dy * ratio;
        }
      }

      for (let i = 0; i < TRAIL_LENGTH; i++) {
        const dot = dots[i];
        if (dot) {
          dot.style.transform = `translate(${positions[i].x}px, ${positions[i].y}px)`;
        }
      }

      rafRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", onMouseMove);
    rafRef.current = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div className="pointer-events-none fixed inset-0 z-[999]">
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
        const opacity = 1 - i / TRAIL_LENGTH;
        const scale = 1 - i / TRAIL_LENGTH;
        return (
          <div
            key={i}
            ref={(el) => {
              if (el) dotsRef.current[i] = el;
            }}
            className="absolute left-[-4px] top-[-4px] h-2 w-2 rounded-full"
            style={{
              background: `rgba(108, 99, 255, ${opacity * 0.6})`,
              transform: "translate(-100px, -100px)",
              willChange: "transform",
              boxShadow: `0 0 ${4 + (1 - i / TRAIL_LENGTH) * 6}px rgba(108, 99, 255, ${opacity * 0.3})`,
              transition: "width 0.15s, height 0.15s",
            }}
          />
        );
      })}
    </div>
  );
}
