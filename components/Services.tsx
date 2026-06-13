type Service = {
  title: string;
  description: string;
  icon: React.ReactNode;
  popular?: boolean;
};

const services: Service[] = [
  {
    title: "Scriptwriting",
    description:
      "Hook-first scripts engineered to stop the scroll. Built around your niche, your voice, and what your audience actually wants to watch.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        stroke="#6C63FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 20h9" />
        <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z" />
      </svg>
    ),
  },
  {
    title: "Video Shooting",
    description:
      "Professional production for creators who want to look the part. Lighting, framing, direction — every frame works for your brand.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        stroke="#6C63FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="2" y="7" width="15" height="14" rx="2" />
        <path d="M17 9l5-2v10l-5-2" />
        <circle cx="9" cy="12" r="1" />
      </svg>
    ),
  },
  {
    title: "Video Editing",
    description:
      "Cinematic Reels and Shorts with dynamic captions, transitions, and sound. Delivered in 48 hours. Every time.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        stroke="#6C63FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    popular: true,
  },
  {
    title: "Posting & Scheduling",
    description:
      "The right content at the right time. We manage your posting schedule to maximise reach, saves, and algorithm favour.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        stroke="#6C63FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <path d="M16 2v4M8 2v4M3 10h18" />
      </svg>
    ),
  },
  {
    title: "Account Management",
    description:
      "Your DMs, comments, and community — fully handled. Plus monthly analytics reports that show exactly what's growing and why.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        stroke="#6C63FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M18 20V10M12 20V4M6 20v-6" />
      </svg>
    ),
  },
  {
    title: "Paid Ads",
    description:
      "Meta and Instagram campaigns built for real ROI. Every rupee tracked, every ad optimised for leads, sales, and followers.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        width="18"
        height="18"
        stroke="#6C63FF"
        strokeWidth="1.8"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
];

function ServiceCard({ service }: { service: Service }) {
  return (
    <div
      className="card"
      style={{
        padding: "28px 26px",
        position: "relative",
        border: service.popular
          ? "0.5px solid rgba(108,99,255,0.4)"
          : undefined,
      }}
    >
      <style>{`
        .service-card-container {
          padding: 28px 26px;
        }

        @media (max-width: 1024px) {
          .service-card-container {
            padding: 22px 20px;
          }

          .service-title {
            font-size: 14px;
          }

          .service-description {
            font-size: 12px;
          }
        }

        @media (max-width: 768px) {
          .service-card-container {
            padding: 18px 16px;
          }

          .service-title {
            font-size: 13px;
          }

          .service-description {
            font-size: 11px;
          }
        }

        @media (max-width: 480px) {
          .service-card-container {
            padding: 14px 12px;
          }

          .service-title {
            font-size: 12px;
          }

          .service-description {
            font-size: 10px;
          }
        }
      `}</style>

      {service.popular && (
        <div
          style={{
            position: "absolute",
            top: "-1px",
            right: "18px",
            background: "#6C63FF",
            color: "#FFFFFF",
            fontSize: "9px",
            fontWeight: 700,
            padding: "3px 11px",
            borderRadius: "0 0 8px 8px",
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          Most Popular
        </div>
      )}
      <div
        className="svc-icon"
        style={service.popular ? { borderColor: "rgba(108,99,255,0.25)" } : {}}
      >
        {service.icon}
      </div>
      <div
        className="service-title"
        style={{
          fontSize: "15px",
          fontWeight: 700,
          color: "#FFFFFF",
          marginBottom: "10px",
        }}
      >
        {service.title}
      </div>
      <div
        className="service-description"
        style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.7,
        }}
      >
        {service.description}
      </div>
    </div>
  );
}

export default function Services() {
  return (
    <section className="section" id="services">
      <style>{`
        .services-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 14px;
          margin-bottom: 32px;
        }

        .service-card {
          padding: 28px 26px;
        }

        @media (max-width: 1024px) {
          .services-grid {
            grid-template-columns: repeat(2, 1fr);
            gap: 12px;
          }

          .service-card {
            padding: 22px 20px;
          }
        }

        @media (max-width: 768px) {
          .services-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }

          .service-card {
            padding: 18px 16px;
          }
        }

        .cta-banner {
          background: #0E0D1A;
          border: 0.5px solid rgba(108,99,255,0.25);
          border-radius: 14px;
          padding: 26px 30px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }

        @media (max-width: 768px) {
          .cta-banner {
            padding: 20px 18px;
            flex-direction: column;
            text-align: center;
          }

          .cta-banner button {
            width: 100%;
          }
        }
      `}</style>

      <div className="label">What We Do</div>
      <div className="title">
        Everything Done For You.
        <br />
        Nothing Left on Your Plate.
      </div>
      <p className="subtitle">One agency. Six services. Zero excuses.</p>

      <div className="services-grid">
        {services.map((service) => (
          <div key={service.title} className="service-card">
            <ServiceCard service={service} />
          </div>
        ))}
      </div>

      {/* CTA Banner */}
      <div className="cta-banner">
        <div>
          <div
            style={{
              fontSize: "15px",
              fontWeight: 700,
              color: "#FFFFFF",
              marginBottom: "6px",
            }}
          >
            Need the full package?
          </div>
          <div style={{ fontSize: "13px", color: "rgba(255,255,255,0.4)" }}>
            Our retainer covers scripting, editing, posting, and account
            management — one flat monthly price.
          </div>
        </div>
        <button className="btn-primary btn-shimmer">
          Get Custom Pricing →
        </button>
      </div>
    </section>
  );
}
