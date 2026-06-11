type Video = {
  handle: string;
  niche: string;
  title: string;
  views?: string;
  bgColor: string;
  viral?: boolean;
  premiumEdit?: boolean;
};

const videos: Video[] = [
  {
    handle: "@financewithmadhav",
    niche: "Finance",
    title: "Bihari Babu Ka Jugaad — Business Explained",
    views: "10",
    bgColor: "#150F2A",
    viral: true,
  },
  {
    handle: "@creative.thrives",
    niche: "Infotainment",
    title: "Padma Shri Diaries 2026 — Praveen Kumar",
    views: "4.2",
    bgColor: "#0F1A18",
  },
  {
    handle: "@nupuurpatil",
    niche: "Nutrition",
    title: "I Didn't Lose Weight — I Fixed My Body",
    views: "3.1",
    bgColor: "#1A0F0F",
  },
  {
    handle: "@topstocker24",
    niche: "Finance",
    title: "Stock Market Explained in 60 Seconds",
    views: "2.8",
    bgColor: "#0F1520",
  },
  {
    handle: "@payalagarwalmukherjee",
    niche: "Fitness",
    title: "14 Days to Birthday — Handstand Journey",
    views: "2.3",
    bgColor: "#0F1A12",
  },
  {
    handle: "@fit.with.rishi",
    niche: "Fat Loss",
    title: "75kg → 63kg Transformation in 12 Weeks",
    views: "1.9",
    bgColor: "#1A150F",
  },
  {
    handle: "@dr.vaishali_kukreja",
    niche: "Doctor",
    title: "Why Resident Doctors Are Breaking Down",
    views: "1.4",
    bgColor: "#120F1A",
  },
  {
    handle: "@drpallaviahireshelke",
    niche: "Dermatology",
    title: "The Truth About Coconut Oil on Skin",
    bgColor: "#0F1A1A",
    premiumEdit: true,
  },
  {
    handle: "@ca.laxmi07",
    niche: "Finance",
    title: "I Gave My Salary Details to AI",
    bgColor: "#1A1210",
    premiumEdit: true,
  },
];

const PlayIcon = () => (
  <svg viewBox="0 0 24 24" width="16" height="16" fill="#FFFFFF">
    <polygon points="5,3 19,12 5,21" />
  </svg>
);

function VideoCard({ video }: { video: Video }) {
  return (
    <div className="card" style={{ overflow: "hidden" }}>
      {/* Thumbnail */}
      <div
        className="thumb-overlay"
        style={{
          height: "152px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "relative",
          overflow: "hidden",
          background: video.bgColor,
          cursor: "pointer",
        }}
      >
        {video.viral && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "#6C63FF",
              color: "#FFFFFF",
              fontSize: "9px",
              fontWeight: 700,
              padding: "3px 9px",
              borderRadius: "20px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              zIndex: 2,
            }}
          >
            Viral
          </div>
        )}
        {video.premiumEdit && (
          <div
            style={{
              position: "absolute",
              top: "10px",
              right: "10px",
              background: "rgba(255,255,255,0.06)",
              color: "rgba(255,255,255,0.5)",
              fontSize: "9px",
              fontWeight: 600,
              padding: "3px 9px",
              borderRadius: "20px",
              letterSpacing: "0.8px",
              textTransform: "uppercase",
              border: "0.5px solid rgba(255,255,255,0.1)",
              zIndex: 2,
            }}
          >
            Premium Edit
          </div>
        )}
        <div
          className="play-btn-inner"
          style={{
            width: "48px",
            height: "48px",
            background: "rgba(108,99,255,0.9)",
            borderRadius: "50%",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <PlayIcon />
        </div>
      </div>

      {/* Info */}
      <div style={{ padding: "18px" }}>
        <div
          style={{
            fontSize: "10px",
            color: "rgba(255,255,255,0.3)",
            marginBottom: "6px",
            fontWeight: 600,
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {video.handle} · {video.niche}
        </div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "14px",
            lineHeight: 1.45,
          }}
        >
          {video.title}
        </div>

        {video.views ? (
          <div style={{ display: "flex", alignItems: "baseline", gap: "6px" }}>
            <div
              style={{
                fontSize: "28px",
                fontWeight: 900,
                color: "#FFFFFF",
                letterSpacing: "-1px",
              }}
            >
              {video.views}
              <span style={{ color: "#6C63FF" }}>M</span>
            </div>
            <div
              style={{
                fontSize: "10px",
                color: "rgba(255,255,255,0.3)",
                textTransform: "uppercase",
                letterSpacing: "0.8px",
              }}
            >
              Views
            </div>
          </div>
        ) : (
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <div
              style={{
                width: "6px",
                height: "6px",
                background: "#6C63FF",
                borderRadius: "50%",
              }}
            />
            <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
              Watch for edit quality
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default function Work() {
  return (
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

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "16px",
          marginBottom: "36px",
        }}
      >
        {videos.map((video) => (
          <VideoCard key={video.title} video={video} />
        ))}
      </div>

      {/* Footer row */}
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
              color: "#FFFFFF",
              letterSpacing: "-1px",
              marginRight: "6px",
            }}
          >
            100<span style={{ color: "#6C63FF" }}>M+</span>
          </span>
          total views generated
        </div>
        <button className="btn-primary btn-shimmer">Get Videos Like These →</button>
      </div>
    </section>
  );
}
