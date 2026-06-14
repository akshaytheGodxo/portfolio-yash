"use client";

import { useEffect, useRef, useState } from "react";

const featuredClients = [
  {
    handle: "@payalagarwalmukherjee",
    name: "Payal Agarwal",
    niche: "Fitness · Mom",
    followers: "1.4",
    suffix: "M",
    initials: "PA",
    avatarBg: "#2D1F6E",
    photo: "/clients/payal_mukharjee.jpg",
  },
  {
    handle: "@topstocker24",
    name: "Vaibhav Kamboj",
    niche: "Finance · Stocks",
    followers: "636",
    suffix: "K",
    initials: "VK",
    avatarBg: "#0F3D28",
    photo: "/clients/top_stocker.jpg",
  },
  {
    handle: "@creative.thrives",
    name: "Aarushi Rawat",
    niche: "Infotainment",
    followers: "489",
    suffix: "K",
    initials: "AR",
    avatarBg: "#3D1F0A",
    photo: "/clients/creative_thrives.jpg",
  },
  {
    handle: "@nupuurpatil",
    name: "Nupuur Patil",
    niche: "Nutrition",
    followers: "358",
    suffix: "K",
    initials: "NP",
    avatarBg: "#0A2B3D",
    photo: "/clients/nupur_patil.jpg",
  },
  {
    handle: "@dr.vaishali_kukreja",
    name: "Dr Vaishali Kukreja",
    niche: "Nutrition",
    followers: "65.2",
    suffix: "K",
    initials: "VK",
    avatarBg: "#2B1A0A",
    photo: "/clients/vaishali_kukreja.jpg",
  },
  {
    handle: "@fit.with.rishi",
    name: "Rishi",
    niche: "Fat Loss",
    followers: "194",
    suffix: "K",
    initials: "R",
    avatarBg: "#0F3320",
    photo: "/clients/fit_with_rishi.jpg",
  },
];

const secondaryClients = [
  {
    initial: "Y",
    handle: "@_yogadelight",
    followers: "143K",
    niche: "Yoga",
    avatarBg: "#2D1F6E",
  },
  {
    initial: "P",
    handle: "@drpallaviahireshelke",
    followers: "70.1K",
    niche: "Dermatology",
    avatarBg: "#0A2B3D",
  },
  {
    initial: "V",
    handle: "@dr.vaishali_kukreja",
    followers: "64.6K",
    niche: "Doctor",
    avatarBg: "#0F3D28",
  },
  {
    initial: "L",
    handle: "@ca.laxmi07",
    followers: "56.6K",
    niche: "Finance",
    avatarBg: "#3D1F0A",
  },
  {
    initial: "I",
    handle: "@thetechnoguy07",
    followers: "46.7K",
    niche: "Tech",
    avatarBg: "#2B1A0A",
  },
  {
    initial: "K",
    handle: "@ca.kunalkumar",
    followers: "24.9K",
    niche: "Finance",
    avatarBg: "#0F3320",
  },
];

function InstagramIcon({ size = 14 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

function CreatorCard({
  client,
  index,
  visible,
}: {
  client: (typeof featuredClients)[0];
  index: number;
  visible: boolean;
}) {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        background: "#16161F",
        border: `0.5px solid ${hovered ? "rgba(108,99,255,0.35)" : "rgba(255,255,255,0.08)"}`,
        borderRadius: "14px",
        padding: "18px",
        display: "flex",
        flexDirection: "column",
        cursor: "default",
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(16px)",
        transition: `opacity 0.4s ease ${index * 60}ms, transform 0.4s ease ${index * 60}ms, border-color 0.2s ease`,
      }}
    >
      {/* Header */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "10px",
          marginBottom: "14px",
        }}
      >
        {client.photo ? (
          <img
            src={client.photo}
            alt={client.name}
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              objectFit: "cover",
              border: "1.5px solid rgba(255,255,255,0.08)",
              flexShrink: 0,
            }}
          />
        ) : (
          <div
            style={{
              width: 42,
              height: 42,
              borderRadius: "50%",
              background: client.avatarBg,
              border: "1.5px solid rgba(255,255,255,0.08)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "13px",
              fontWeight: 600,
              color: "#fff",
              flexShrink: 0,
            }}
          >
            {client.initials}
          </div>
        )}
        <div style={{ minWidth: 0 }}>
          <div
            style={{
              fontSize: "13px",
              fontWeight: 600,
              color: "#FFFFFF",
              lineHeight: 1.3,
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {client.name}
          </div>
          <div
            style={{
              fontSize: "11px",
              color: "rgba(255,255,255,0.35)",
              marginTop: "2px",
              overflow: "hidden",
              textOverflow: "ellipsis",
              whiteSpace: "nowrap",
            }}
          >
            {client.handle}
          </div>
        </div>
      </div>

      {/* Niche pill */}
      <div
        style={{
          display: "inline-block",
          alignSelf: "flex-start",
          fontSize: "10px",
          fontWeight: 500,
          padding: "3px 10px",
          borderRadius: "20px",
          background: "rgba(108,99,255,0.12)",
          color: "#A09DFF",
          border: "0.5px solid rgba(108,99,255,0.25)",
          whiteSpace: "nowrap",
        }}
      >
        {client.niche}
      </div>

      {/* Divider */}
      <div
        style={{
          height: "0.5px",
          background: "rgba(255,255,255,0.06)",
          margin: "14px 0",
        }}
      />

      {/* Follower count */}
      <div style={{ display: "flex", alignItems: "baseline", gap: "4px" }}>
        <span
          style={{
            fontSize: "clamp(22px, 5vw, 30px)",
            fontWeight: 800,
            color: "#FFFFFF",
            letterSpacing: "-1px",
            lineHeight: 1,
          }}
        >
          {client.followers}
        </span>
        <span
          style={{
            fontSize: "clamp(16px, 3.5vw, 20px)",
            fontWeight: 800,
            color: "#6C63FF",
            letterSpacing: "-0.5px",
          }}
        >
          {client.suffix}
        </span>
      </div>
      <div
        style={{
          fontSize: "10px",
          color: "rgba(255,255,255,0.25)",
          textTransform: "uppercase",
          letterSpacing: "1px",
          fontWeight: 500,
          marginTop: "5px",
        }}
      >
        Followers
      </div>

      {/* Instagram link */}
      <a
        href={`https://instagram.com/${client.handle.replace("@", "")}`}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          alignItems: "center",
          gap: "5px",
          marginTop: "14px",
          fontSize: "11px",
          color: "rgba(255,255,255,0.3)",
          textDecoration: "none",
          transition: "color 0.15s ease",
        }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.color = "rgba(255,255,255,0.6)")
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.color = "rgba(255,255,255,0.3)")
        }
      >
        <InstagramIcon size={14} />
        View profile
      </a>
    </div>
  );
}

function MarqueePill({ client }: { client: (typeof secondaryClients)[0] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "9px",
        padding: "8px 14px",
        borderRadius: "40px",
        background: "#16161F",
        border: "0.5px solid rgba(255,255,255,0.08)",
        flexShrink: 0,
        whiteSpace: "nowrap",
      }}
    >
      <div
        style={{
          width: 26,
          height: 26,
          borderRadius: "50%",
          background: client.avatarBg,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: "10px",
          fontWeight: 600,
          color: "#fff",
          flexShrink: 0,
        }}
      >
        {client.initial}
      </div>
      <span
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.7)",
          fontWeight: 500,
        }}
      >
        {client.handle}
      </span>
      <span style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
        {client.followers}
      </span>
    </div>
  );
}

export default function Clients() {
  const gridRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const el = gridRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setCardsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const doubled = [...secondaryClients, ...secondaryClients];

  return (
    <>
      <style>{`
        @keyframes marquee {
          from { transform: translateX(0); }
          to { transform: translateX(-50%); }
        }

        .clients-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 12px;
        }

        @media (max-width: 768px) {
          .clients-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 480px) {
          .clients-grid {
            grid-template-columns: 1fr;
          }
        }

        .clients-section {
          padding: 40px 32px;
        }

        @media (max-width: 480px) {
          .clients-section {
            padding: 28px 16px;
          }
        }

        .clients-heading {
          font-size: 28px;
        }

        @media (max-width: 480px) {
          .clients-heading {
            font-size: 22px;
          }
        }
      `}</style>

      <section
        id="clients"
        className="clients-section"
        style={{
          background: "#0C0C10",
          borderRadius: "16px",
          fontFamily: "var(--font-sans, system-ui, sans-serif)",
        }}
      >
        {/* Section header */}
        <div
          style={{
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#6C63FF",
            marginBottom: "10px",
          }}
        >
          Our clients
        </div>
        <h2
          className="clients-heading"
          style={{
            fontWeight: 700,
            color: "#FFFFFF",
            lineHeight: 1.2,
            margin: "0 0 8px",
          }}
        >
          You&apos;re in good hands.
        </h2>
        <p
          style={{
            fontSize: "14px",
            color: "rgba(255,255,255,0.4)",
            marginBottom: "28px",
            maxWidth: "480px",
            lineHeight: 1.6,
          }}
        >
          India&apos;s top creators trust Raya Social to manage their content,
          growth, and brand.
        </p>

        {/* Featured creators grid */}
        <div ref={gridRef} className="clients-grid">
          {featuredClients.map((client, i) => (
            <CreatorCard
              key={client.handle}
              client={client}
              index={i}
              visible={cardsVisible}
            />
          ))}
        </div>

        {/* "And these creators too..." */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "8px",
            margin: "24px 0 14px",
          }}
        >
          <div
            style={{
              width: 5,
              height: 5,
              borderRadius: "50%",
              background: "rgba(255,255,255,0.15)",
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontSize: "12px",
              color: "rgba(255,255,255,0.3)",
              fontStyle: "italic",
            }}
          >
            And these creators too...
          </span>
        </div>

        {/* Marquee */}
        <div style={{ overflow: "hidden" }}>
          <div
            style={{
              display: "flex",
              gap: "8px",
              width: "max-content",
              animation: "marquee 20s linear infinite",
            }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                "paused")
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLDivElement).style.animationPlayState =
                "running")
            }
          >
            {doubled.map((client, i) => (
              <MarqueePill key={`${client.handle}-${i}`} client={client} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
