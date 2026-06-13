"use client";

import { useState, useEffect, useRef, useCallback } from "react";

type Video = {
  videoId: string;
};

const videos: Video[] = [
  { videoId: "2wFxWol3ueo" },
  { videoId: "KHy8uAFqXQU" },
  { videoId: "eCVRdixqzr8" },
  { videoId: "vEqE7DnM3cg" },
  { videoId: "ThlXpUQvasg" },
  { videoId: "z61BQ0hKCLU" },
  { videoId: "bfKTpJkl82E" },
  { videoId: "ZTbZlsrLmII" },
  { videoId: "ns-HNUGti8c" },
];

// Responsive items per view
const getItemsPerView = () => {
  if (typeof window === "undefined") return 3;
  const width = window.innerWidth;
  if (width < 480) return 1;
  if (width < 768) return 2;
  return 3;
};

const ITEMS_PER_VIEW = 3;
const GAP = 20; // px — must match the gap value used in the track

function VideoCard({ video }: { video: Video }) {
  return (
    <div style={{ borderRadius: "12px", overflow: "hidden" }}>
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "177.78%", // 9:16
          height: 0,
          overflow: "hidden",
          borderRadius: "12px",
        }}
      >
        <iframe
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: "none",
            borderRadius: "12px",
          }}
          src={`https://www.youtube.com/embed/${video.videoId}?modestbranding=1&rel=0`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>
    </div>
  );
}

export default function Work() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(ITEMS_PER_VIEW);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  const TOTAL_STEPS = videos.length - itemsPerView + 1;

  // Update items per view on window resize
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 480) setItemsPerView(1);
      else if (width < 768) setItemsPerView(2);
      else setItemsPerView(3);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Translate the track so that `currentIndex` cards are scrolled past.
  // Each card is (viewport - gaps) / itemsPerView wide, so one step = cardWidth + GAP.
  // Expressed as a CSS calc so it responds to any container width.
  const translateX = (idx: number) =>
    `calc(${idx} * ((100% + ${GAP}px) / ${itemsPerView}) * -1)`;

  const goTo = useCallback(
    (idx: number) => {
      if (isTransitioning || idx === currentIndex) return;
      setIsTransitioning(true);
      setCurrentIndex(idx);
      setTimeout(() => setIsTransitioning(false), 520);
    },
    [isTransitioning, currentIndex],
  );

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => {
        const next = (prev + 1) % TOTAL_STEPS;
        setIsTransitioning(true);
        setTimeout(() => setIsTransitioning(false), 520);
        return next;
      });
    }, 5000);
  }, []);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const handlePrev = () => {
    const target = currentIndex === 0 ? TOTAL_STEPS - 1 : currentIndex - 1;
    goTo(target);
    resetTimer();
  };

  const handleNext = () => {
    goTo((currentIndex + 1) % TOTAL_STEPS);
    resetTimer();
  };

  return (
    <>
      <style>{`
        .nav-btn {
          background: rgba(255,255,255,0.08);
          border: 1px solid rgba(255,255,255,0.15);
          color: #fff;
          width: 44px;
          height: 44px;
          border-radius: 50%;
          cursor: pointer;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: 18px;
          flex-shrink: 0;
          user-select: none;
          transition: background 0.2s, border-color 0.2s, transform 0.15s;
          backdrop-filter: blur(10px);
        }
        .nav-btn:hover  { background: rgba(255,255,255,0.18); border-color: rgba(255,255,255,0.35); transform: scale(1.08); }
        .nav-btn:active { transform: scale(0.94); }
        .nav-btn:disabled { opacity: 0.35; cursor: not-allowed; transform: none; }

        .dot-btn {
          border: none;
          padding: 0;
          cursor: pointer;
          height: 8px;
          border-radius: 4px;
          transition: width 0.35s cubic-bezier(0.4,0,0.2,1), background 0.35s ease;
        }
        .dot-btn:hover { background: rgba(255,255,255,0.6) !important; }

        .carousel-row {
          gap: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 768px) {
          .carousel-row {
            gap: 12px;
            margin-bottom: 16px;
          }

          .nav-btn {
            width: 40px;
            height: 40px;
            font-size: 16px;
          }
        }

        @media (max-width: 640px) {
          .carousel-row {
            gap: 8px;
          }

          .nav-btn {
            width: 36px;
            height: 36px;
            font-size: 14px;
          }
        }

        @media (max-width: 480px) {
          .carousel-row {
            gap: 6px;
          }

          .nav-btn {
            width: 32px;
            height: 32px;
            font-size: 12px;
          }
        }
      `}</style>

      <section className="section" id="work" style={{ background: "#0D0D14" }}>
        <div className="label">Our Work</div>
        <div className="title">
          Videos We Edited.
          <br />
          For Brands You Trust.
        </div>
        <p className="subtitle">
          Every video below was scripted, cut, and delivered by our team.
        </p>

        {/* Carousel row */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
            marginBottom: "20px",
          }}
          className="carousel-row"
        >
          <button
            className="nav-btn"
            onClick={handlePrev}
            disabled={isTransitioning}
            aria-label="Previous"
          >
            ←
          </button>

          {/* Clipping viewport */}
          <div style={{ flex: 1, minWidth: 0, overflow: "hidden" }}>
            {/* Sliding track — all 9 cards in one row */}
            <div
              style={{
                display: "flex",
                gap: `${GAP}px`,
                transform: `translateX(${translateX(currentIndex)})`,
                transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                willChange: "transform",
              }}
            >
              {videos.map((video) => (
                <div
                  key={video.videoId}
                  style={{
                    // Exactly 1/itemsPerView of the viewport minus the inner gaps
                    flex: `0 0 calc((100% - ${GAP * (itemsPerView - 1)}px) / ${itemsPerView})`,
                    minWidth: 0,
                  }}
                >
                  <VideoCard video={video} />
                </div>
              ))}
            </div>
          </div>

          <button
            className="nav-btn"
            onClick={handleNext}
            disabled={isTransitioning}
            aria-label="Next"
          >
            →
          </button>
        </div>

        {/* Dot indicators */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "8px",
            marginBottom: "36px",
          }}
        >
          {Array.from({ length: TOTAL_STEPS }).map((_, idx) => (
            <button
              key={idx}
              className="dot-btn"
              onClick={() => {
                goTo(idx);
                resetTimer();
              }}
              aria-label={`Go to slide ${idx + 1}`}
              style={{
                width: idx === currentIndex ? "28px" : "8px",
                background:
                  idx === currentIndex ? "#fff" : "rgba(255,255,255,0.25)",
              }}
            />
          ))}
        </div>

        {/* Footer */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexWrap: "wrap",
            gap: "16px",
            paddingTop: "24px",
            borderTop: "0.5px solid rgba(255,255,255,0.06)",
          }}
        >
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            <span
              style={{
                fontSize: "26px",
                fontWeight: 900,
                color: "#fff",
                letterSpacing: "-1px",
                marginRight: "6px",
              }}
            >
              {videos.length}
            </span>
            videos crafted with precision
          </div>
          <button className="btn-primary btn-shimmer">
            Get Videos Like These →
          </button>
        </div>
      </section>
    </>
  );
}
