"use client";

import { useEffect, useRef, useState } from "react";

const featuredClients = [
  {
    handle: "@payalagarwalmukherjee",
    name: "Payal Agarwal Mukherjee",
    niche: "Fitness · Mom",
    followers: "1.4",
    suffix: "M",
  },
  {
    handle: "@topstocker24",
    name: "Vaibhav Kamboj",
    niche: "Finance · Stocks",
    followers: "636",
    suffix: "K",
  },
  {
    handle: "@creative.thrives",
    name: "Aarushi Rawat",
    niche: "Infotainment",
    followers: "489",
    suffix: "K",
  },
  {
    handle: "@nupuurpatil",
    name: "Nupuur Patil",
    niche: "Nutrition",
    followers: "358",
    suffix: "K",
  },
  {
    handle: "@financewithmadhav",
    name: "Madhav Bhatia",
    niche: "Finance",
    followers: "315",
    suffix: "K",
  },
  {
    handle: "@fit.with.rishi",
    name: "Rishi",
    niche: "Fat Loss",
    followers: "194",
    suffix: "K",
  },
];

const secondaryClients = [
  { initial: "Y", handle: "@_yogadelight", followers: "143K", niche: "Yoga" },
  {
    initial: "P",
    handle: "@drpallaviahireshelke",
    followers: "70.1K",
    niche: "Dermatology",
  },
  {
    initial: "V",
    handle: "@dr.vaishali_kukreja",
    followers: "64.6K",
    niche: "Doctor",
  },
  { initial: "L", handle: "@ca.laxmi07", followers: "56.6K", niche: "Finance" },
  {
    initial: "I",
    handle: "@thetechnoguy07",
    followers: "46.7K",
    niche: "Tech",
  },
  {
    initial: "K",
    handle: "@ca.kunalkumar",
    followers: "24.9K",
    niche: "Finance",
  },
];

function ClientCard({
  client,
  index,
  visible,
}: {
  client: (typeof featuredClients)[0];
  index: number;
  visible: boolean;
}) {
  return (
    <div
      className={`card client-card${visible ? " visible" : ""}`}
      style={
        {
          padding: "24px 22px",
          position: "relative",
          overflow: "hidden",
          "--enter-delay": `${index * 80}ms`,
        } as React.CSSProperties
      }
    >
      {/* Top accent bar */}
      <div
        className="accent-bar"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "2px",
          background: "#6C63FF",
          width: "0%",
        }}
      />
      <div
        style={{
          display: "inline-block",
          fontSize: "10px",
          fontWeight: 600,
          color: "#6C63FF",
          background: "rgba(108,99,255,0.12)",
          border: "0.5px solid rgba(108,99,255,0.3)",
          padding: "3px 11px",
          borderRadius: "20px",
          marginBottom: "16px",
        }}
      >
        {client.niche}
      </div>
      <div
        style={{
          fontSize: "14px",
          fontWeight: 700,
          color: "#FFFFFF",
          marginBottom: "3px",
        }}
      >
        {client.handle}
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.3)",
          marginBottom: "20px",
        }}
      >
        {client.name}
      </div>
      <div
        style={{
          fontSize: "42px",
          fontWeight: 900,
          color: "#FFFFFF",
          letterSpacing: "-2px",
          lineHeight: 1,
        }}
      >
        {client.followers}
        <span style={{ color: "#6C63FF" }}>{client.suffix}</span>
      </div>
      <div
        style={{
          fontSize: "10px",
          color: "rgba(255,255,255,0.28)",
          marginTop: "6px",
          textTransform: "uppercase",
          letterSpacing: "1.2px",
          fontWeight: 600,
        }}
      >
        Followers
      </div>
    </div>
  );
}

function ClientPill({ client }: { client: (typeof secondaryClients)[0] }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "12px",
        padding: "14px 16px",
        background: "#0F0F17",
        border: "0.5px solid rgba(255,255,255,0.06)",
        borderRadius: "50px",
        flexShrink: 0,
      }}
    >
      <div className="client-avatar">{client.initial}</div>
      <div>
        <div
          style={{
            fontSize: "13px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.85)",
          }}
        >
          {client.handle}
        </div>
        <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.3)" }}>
          {client.followers} · {client.niche}
        </div>
      </div>
    </div>
  );
}

export default function Clients() {
  const cardsRef = useRef<HTMLDivElement>(null);
  const [cardsVisible, setCardsVisible] = useState(false);

  useEffect(() => {
    const el = cardsRef.current;
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

  return (
    <section className="section" id="clients">
      <div className="label">Our Clients</div>
      <div className="title">You&apos;re in Good Hands.</div>
      <p className="subtitle">
        India&apos;s top creators trust Raya Social to manage their content,
        growth, and brand.
      </p>

      <div
        ref={cardsRef}
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          gap: "14px",
          marginBottom: "18px",
        }}
      >
        {featuredClients.map((client, i) => (
          <ClientCard
            key={client.handle}
            client={client}
            index={i}
            visible={cardsVisible}
          />
        ))}
      </div>

      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: "8px",
          margin: "28px 0 18px",
        }}
      >
        <div
          style={{
            width: "6px",
            height: "6px",
            background: "#6C63FF",
            borderRadius: "50%",
          }}
        />
        <div
          style={{
            fontSize: "13px",
            color: "rgba(255,255,255,0.4)",
            fontStyle: "italic",
          }}
        >
          And these creators too...
        </div>
      </div>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...secondaryClients, ...secondaryClients].map((client, i) => (
            <ClientPill key={`${client.handle}-${i}`} client={client} />
          ))}
        </div>
      </div>
    </section>
  );
}
