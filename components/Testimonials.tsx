type Testimonial = {
  initial: string;
  name: string;
  role: string;
  quote: string;
  highlight: string;
  videoBg: string;
  videoCaption: string;
};

const testimonials: Testimonial[] = [
  {
    initial: "P",
    name: "Payal Agarwal Mukherjee",
    role: "Fitness Creator · 1.4M followers",
    quote:
      "completely transformed how my brand shows up online. Scripts, edits, consistency — they own the entire system. I just show up on camera.",
    highlight: "completely transformed",
    videoBg: "linear-gradient(135deg,#150F2A,#0a0a12)",
    videoCaption: '"they own the entire system."',
  },
  {
    initial: "V",
    name: "Dr Vaishali Kukreja",
    role: "Doctor · 64.6K followers",
    quote:
      "As a doctor, content is not my world. Raya handles everything — scripts, edits, posting. My audience kept growing without me thinking about content once.",
    highlight: "everything",
    videoBg: "linear-gradient(135deg,#120F1A,#0a0a12)",
    videoCaption: '"my audience kept growing."',
  },
  {
    initial: "M",
    name: "Madhav Bhatia",
    role: "Finance Creator · 315K followers",
    quote:
      "The Bihari Babu Jugaad video crossed 10 million views — fully edited by Raya. That single video added 20K followers overnight. Their understanding of finance hooks is unmatched.",
    highlight: "10 million views",
    videoBg: "linear-gradient(135deg,#0F1520,#0a0a12)",
    videoCaption: '"10 million views — fully edited by Raya."',
  },
  {
    initial: "A",
    name: "Aarushi Rawat",
    role: "Infotainment Creator · 489K followers",
    quote:
      "I went from struggling with inconsistent content to 489K followers. Raya understood my niche better than I did. Every reel they made was built to perform.",
    highlight: "489K followers",
    videoBg: "linear-gradient(135deg,#0F1A12,#0a0a12)",
    videoCaption: '"489K followers — Raya understood my niche."',
  },
];

const PlayCircle = () => (
  <div className="play-circle play-btn-inner is-center">
    <svg viewBox="0 0 24 24" width="18" height="18" fill="#FFFFFF">
      <polygon points="5,3 19,12 5,21" />
    </svg>
  </div>
);

function HighlightedQuote({
  quote,
  highlight,
}: {
  quote: string;
  highlight: string;
}) {
  const parts = quote.split(highlight);
  return (
    <div
      style={{
        fontSize: "15px",
        fontWeight: 600,
        color: "#FFFFFF",
        lineHeight: 1.6,
        marginBottom: "20px",
      }}
    >
      {parts[0]}
      <span style={{ color: "#6C63FF" }}>{highlight}</span>
      {parts[1]}
    </div>
  );
}

function VideoThumb({
  bg,
  caption,
  height,
}: {
  bg: string;
  caption: string;
  height: number;
}) {
  return (
    <div
      className="thumb-overlay"
      style={{
        position: "relative",
        cursor: "pointer",
        overflow: "hidden",
        height: `${height}px`,
        background: bg,
      }}
    >
      <PlayCircle />
      <div
        style={{
          position: "absolute",
          bottom: "10px",
          left: "12px",
          right: "12px",
          fontSize: "11px",
          color: "rgba(255,255,255,0.75)",
          fontStyle: "italic",
          background: "rgba(10,10,15,0.65)",
          backdropFilter: "blur(6px)",
          padding: "7px 11px",
          borderRadius: "7px",
          border: "0.5px solid rgba(255,255,255,0.07)",
        }}
      >
        {caption}
      </div>
    </div>
  );
}

function TestimonialAuthor({ t }: { t: Testimonial }) {
  return (
    <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
      <div className="t-avatar">{t.initial}</div>
      <div>
        <div style={{ fontSize: "13px", fontWeight: 700, color: "#FFFFFF" }}>
          {t.name}
        </div>
        <div
          style={{
            fontSize: "11px",
            color: "rgba(255,255,255,0.38)",
            marginTop: "2px",
          }}
        >
          {t.role}
        </div>
      </div>
    </div>
  );
}

export default function Testimonials() {
  const [payal, vaishali, madhav, aarushi] = testimonials;

  return (
    <>
      <style>{`
        .testimonials-heading {
          font-size: 38px;
          font-weight: 900;
          letter-spacing: -1.8px;
          color: #FFFFFF;
          line-height: 1.08;
          margin-bottom: 12px;
        }

        .testimonials-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
          align-items: start;
        }

        .testimonials-col {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        @media (max-width: 640px) {
          .testimonials-heading {
            font-size: 26px;
            letter-spacing: -1px;
          }

          .testimonials-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>

      <section className="section">
        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "52px" }}>
          <div className="pill" style={{ marginBottom: "18px" }}>
            Testimonials
          </div>
          <div className="testimonials-heading">
            Hear it directly from
            <br />
            <span style={{ color: "#6C63FF", fontStyle: "italic" }}>
              our clients.
            </span>
          </div>
          <p
            style={{
              fontSize: "14px",
              color: "rgba(255,255,255,0.38)",
              maxWidth: "440px",
              margin: "0 auto",
              lineHeight: 1.7,
            }}
          >
            Real creators. Real results. Here&apos;s what they say about working
            with Raya Social.
          </p>
        </div>

        {/* Two-column masonry-style grid */}
        <div className="testimonials-grid">
          {/* Left column */}
          <div className="testimonials-col">
            {/* Payal — video top */}
            <div
              className="card"
              style={{
                background: "#111119",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <VideoThumb
                bg={payal.videoBg}
                caption={payal.videoCaption}
                height={220}
              />
              <div style={{ padding: "22px 24px" }}>
                <div style={{ marginBottom: "6px" }}>
                  <span
                    style={{
                      fontSize: "14px",
                      fontWeight: 600,
                      color: "#FFFFFF",
                    }}
                  >
                    Raya Social{" "}
                  </span>
                </div>
                <HighlightedQuote
                  quote={payal.quote}
                  highlight={payal.highlight}
                />
                <TestimonialAuthor t={payal} />
              </div>
            </div>

            {/* Vaishali — text top, video bottom */}
            <div
              className="card"
              style={{
                background: "#111119",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                paddingTop: "26px",
              }}
            >
              <div style={{ padding: "0 24px" }}>
                <HighlightedQuote
                  quote={vaishali.quote}
                  highlight={vaishali.highlight}
                />
                <div
                  style={{
                    paddingBottom: "22px",
                    borderBottom: "0.5px solid rgba(255,255,255,0.06)",
                    marginBottom: "0",
                  }}
                >
                  <TestimonialAuthor t={vaishali} />
                </div>
              </div>
              <VideoThumb
                bg={vaishali.videoBg}
                caption={vaishali.videoCaption}
                height={190}
              />
            </div>
          </div>

          {/* Right column */}
          <div className="testimonials-col">
            {/* Madhav — text top, video bottom */}
            <div
              className="card"
              style={{
                background: "#111119",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
                paddingTop: "26px",
              }}
            >
              <div style={{ padding: "0 24px" }}>
                <HighlightedQuote
                  quote={madhav.quote}
                  highlight={madhav.highlight}
                />
                <div style={{ paddingBottom: "22px" }}>
                  <TestimonialAuthor t={madhav} />
                </div>
              </div>
              <VideoThumb
                bg={madhav.videoBg}
                caption={madhav.videoCaption}
                height={200}
              />
            </div>

            {/* Aarushi — video top */}
            <div
              className="card"
              style={{
                background: "#111119",
                border: "0.5px solid rgba(255,255,255,0.08)",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <VideoThumb
                bg={aarushi.videoBg}
                caption={aarushi.videoCaption}
                height={210}
              />
              <div style={{ padding: "22px 24px" }}>
                <HighlightedQuote
                  quote={aarushi.quote}
                  highlight={aarushi.highlight}
                />
                <TestimonialAuthor t={aarushi} />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
