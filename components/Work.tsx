"use client";

import { useState } from "react";

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

const INITIAL_COUNT = 3;

function VideoCard({ video }: { video: Video }) {
  return (
    <div
      style={{
        background: "#16161F",
        border: "0.5px solid rgba(255,255,255,0.08)",
        borderRadius: "14px",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          paddingBottom: "177.78%", // 9:16
          height: 0,
          overflow: "hidden",
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
  const [showAll, setShowAll] = useState(false);

  const visibleVideos = showAll ? videos : videos.slice(0, INITIAL_COUNT);
  const hiddenCount = videos.length - INITIAL_COUNT;

  return (
    <>
      <style>{`
        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
          margin-bottom: 12px;
        }

        @media (max-width: 1024px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .work-grid {
            grid-template-columns: 1fr;
          }
        }

        .show-more-btn {
          width: 100%;
          padding: 14px;
          background: #16161F;
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 14px;
          color: rgba(255,255,255,0.5);
          font-size: 13px;
          font-weight: 500;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease;
          margin-bottom: 32px;
        }

        .show-more-btn:hover {
          border-color: rgba(108,99,255,0.35);
          color: #fff;
        }

        .video-enter {
          animation: fadeSlideIn 0.35s ease forwards;
        }

        @keyframes fadeSlideIn {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      <section className="section" id="work" style={{ background: "#0D0D14" }}>
        <div className="label">Our Work</div>
        <div className="title">
          Videos We Edited.
          <br />
          For Brands You Trust.
        </div>

        <div className="work-grid">
          {visibleVideos.map((video, i) => (
            <div
              key={video.videoId}
              className={i >= INITIAL_COUNT ? "video-enter" : ""}
            >
              <VideoCard video={video} />
            </div>
          ))}
        </div>

        {!showAll && (
          <button className="show-more-btn" onClick={() => setShowAll(true)}>
            Show {hiddenCount} more videos ↓
          </button>
        )}

        {showAll && (
          <button className="show-more-btn" onClick={() => setShowAll(false)}>
            Show less ↑
          </button>
        )}

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
