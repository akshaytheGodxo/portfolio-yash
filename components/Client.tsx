"use client";

import { motion } from "motion/react";
import { useState } from "react";

type Client = {
  name: string;
  handle: string;
  photo?: string;
  initials: string;
  avatarBg: string;
  followers?: string;
};

const featuredClients: Client[] = [
  {
    name: "Payal Agarwal",
    handle: "@payalagarwalmukherjee",
    initials: "PA",
    avatarBg: "#2D1F6E",
    photo: "/clients/payal_mukharjee.jpg",
    followers: "1.4M",
  },
  {
    name: "Vaibhav Kamboj",
    handle: "@topstocker24",
    initials: "VK",
    avatarBg: "#0F3D28",
    photo: "/clients/top_stocker.jpg",
    followers: "856K",
  },
  {
    name: "Aarushi Rawat",
    handle: "@creative.thrives",
    initials: "AR",
    avatarBg: "#3D1F0A",
    photo: "/clients/creative_thrives.jpg",
    followers: "489K",
  },
  {
    name: "Nupuur Patil",
    handle: "@nupuurpatil",
    initials: "NP",
    avatarBg: "#0A2B3D",
    photo: "/clients/nupur_patil.jpg",
    followers: "723K",
  },
  {
    name: "Dr Vaishali",
    handle: "@dr.vaishali_kukreja",
    initials: "VK",
    avatarBg: "#2B1A0A",
    photo: "/clients/vaishali_kukreja.jpg",
    followers: "64.6K",
  },
  {
    name: "Rishi",
    handle: "@fit.with.rishi",
    initials: "R",
    avatarBg: "#0F3320",
    photo: "/clients/fit_with_rishi.jpg",
    followers: "312K",
  },
];

const moreClients: Client[] = [
  {
    name: "Yoga Delight",
    handle: "@_yogadelight",
    initials: "Y",
    avatarBg: "#2D1F6E",
    photo: "/clients/yogadelight.jpg",
  },
  {
    name: "Dr Pallavi",
    handle: "@drpallaviahireshelke",
    initials: "P",
    avatarBg: "#0A2B3D",
    photo: "/clients/drpallaviahireshelke.jpg",
  },
  {
    name: "Laxmi CA",
    handle: "@ca.laxmi07",
    initials: "L",
    avatarBg: "#3D1F0A",
    photo: "/clients/ca_laxmi.jpg",
  },
  {
    name: "Techno Guy",
    handle: "@thetechnoguy07",
    initials: "I",
    avatarBg: "#2B1A0A",
    photo: "/clients/technoguy.jpg",
  },
  {
    name: "Kunal Kumar",
    handle: "@ca.kunalkumar",
    initials: "K",
    avatarBg: "#0F3320",
    photo: "/clients/kunalkumar.jpg",
  },
  {
    name: "Madhav Bhatia",
    handle: "@madhavbhatia",
    initials: "M",
    avatarBg: "#1A1A2E",
    photo: "/clients/madhavbhatia.jpg",
  },
];

function LogoItem({ client }: { client: Client }) {
  const [hovered, setHovered] = useState(false);
  const href = `https://instagram.com/${client.handle.replace("@", "")}`;

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="logo-item relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <span className="logo-item__avatar">
        {client.photo ? (
          <img
            src={client.photo}
            alt={client.name}
            loading="lazy"
            decoding="async"
          />
        ) : (
          <span
            className="logo-item__initial"
            style={{ background: client.avatarBg }}
          >
            {client.initials}
          </span>
        )}
      </span>
      <span className="logo-item__name">{client.name}</span>
      {client.followers && (
        <motion.span
          initial={{ opacity: 0, y: 10, scale: 0.9 }}
          animate={
            hovered
              ? { opacity: 1, y: 0, scale: 1 }
              : { opacity: 0, y: 10, scale: 0.9 }
          }
          transition={{ duration: 0.2, ease: "easeOut" }}
          className="pointer-events-none absolute -top-2 left-1/2 z-10 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-full bg-[var(--accent)] px-3 py-1 text-xs font-semibold text-white shadow-lg"
        >
          {client.followers} followers
        </motion.span>
      )}
    </a>
  );
}

export default function Clients() {
  return (
    <section id="clients" className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">Our clients</span>
          <h2 className="heading heading--sm">You&apos;re in good hands.</h2>
          <p className="lede">
            India&apos;s top creators trust Raya Social to manage their content,
            growth, and brand.
          </p>
        </header>

        <div className="logo-grid">
          {featuredClients.map((client) => (
            <LogoItem key={client.handle} client={client} />
          ))}
        </div>

        <p className="clients-divider">And these amazing creators too…</p>

        <div className="relative mx-auto max-w-3xl overflow-hidden py-4">
          <div className="flex animate-scroll-left gap-4">
            {[...moreClients, ...moreClients].map((client, idx) => (
              <a
                key={`${client.handle}-${idx}`}
                href={`https://instagram.com/${client.handle.replace("@", "")}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex shrink-0 flex-col items-center gap-2"
              >
                <span
                  className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border-2 border-[var(--border)] text-sm font-bold transition-all duration-300 group-hover:border-[var(--accent)] group-hover:shadow-[0_0_20px_var(--accent-border)]"
                  style={{ background: client.avatarBg }}
                >
                  {client.photo ? (
                    <img
                      src={client.photo}
                      alt={client.name}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    client.initials
                  )}
                </span>
                <span className="whitespace-nowrap text-xs font-medium text-[var(--text-muted)] transition-colors group-hover:text-[var(--text-secondary)]">
                  {client.name}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
