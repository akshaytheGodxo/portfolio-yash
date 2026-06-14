"use client";

import { useState } from "react";
import { motion } from "motion/react";
import HoverVideo from "@/components/HoverVideo";

const videos = [
  "2wFxWol3ueo", "KHy8uAFqXQU", "eCVRdixqzr8", "vEqE7DnM3cg",
  "ThlXpUQvasg", "z61BQ0hKCLU", "bfKTpJkl82E", "ZTbZlsrLmII", "ns-HNUGti8c",
];

const VISIBLE = 8;

export default function Work() {
  const [showAll, setShowAll] = useState(false);
  const [activeId, setActiveId] = useState<string | null>(null);

  const list = showAll ? videos : videos.slice(0, VISIBLE);
  const hidden = videos.length - VISIBLE;

  return (
    <section id="work" className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">Our work</span>
          <h2 className="heading heading--sm">Videos we edited for brands you trust.</h2>
          <p className="lede">Hover to preview. {videos.length} examples from our portfolio.</p>
        </header>

        <div className="video-grid">
          {list.map((id, idx) => (
            <motion.div
              key={id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.35, delay: idx * 0.04 }}
            >
              <HoverVideo
                videoId={id}
                isActive={activeId === id}
                onActivate={() => setActiveId(id)}
                onDeactivate={() => setActiveId((c) => (c === id ? null : c))}
              />
            </motion.div>
          ))}
        </div>

        {!showAll && hidden > 0 && (
          <button type="button" className="text-link" onClick={() => setShowAll(true)}>
            View {hidden} more →
          </button>
        )}
        {showAll && (
          <button type="button" className="text-link" onClick={() => setShowAll(false)}>
            Show less ↑
          </button>
        )}

        <div className="section-bar">
          <p className="section-bar__text">
            <strong>{videos.length}</strong> videos crafted with precision
          </p>
          <a href="#contact" className="btn-primary btn-shimmer">
            Get videos like these →
          </a>
        </div>
      </div>
    </section>
  );
}
