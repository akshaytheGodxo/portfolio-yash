type Reason = {
  title: string;
  description: string;
  icon: React.ReactNode;
};

const reasons: Reason[] = [
  {
    title: "48-Hour Turnaround",
    description:
      "Send raw footage. Get cinematic edits back in 48 hours — every time. No missed posting days, no excuses.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C63FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 6v6l4 2" />
      </svg>
    ),
  },
  {
    title: "Real Human Editors",
    description:
      "No AI fillers. No template recycling. Every cut and sound decision is made by a person who understands your niche.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C63FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
  {
    title: "Proven Track Record",
    description:
      "8M+ followers managed. 100M+ views generated. 300+ videos delivered every month. The numbers speak for themselves.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C63FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polyline points="22 12 18 12 15 21 9 3 6 12 2 12" />
      </svg>
    ),
  },
  {
    title: "End-to-End Execution",
    description:
      "Script. Shoot. Edit. Post. Manage. We handle every step so you focus on your expertise — not your content calendar.",
    icon: (
      <svg
        width="22"
        height="22"
        viewBox="0 0 24 24"
        fill="none"
        stroke="#6C63FF"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
      </svg>
    ),
  },
];

function ReasonCard({ reason }: { reason: Reason }) {
  return (
    <div className="card" style={{ padding: "30px 28px" }}>
      <div
        style={{
          width: "48px",
          height: "48px",
          background: "#0D0D18",
          border: "0.5px solid rgba(255,255,255,0.08)",
          borderRadius: "10px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: "20px",
        }}
      >
        {reason.icon}
      </div>
      <div
        style={{
          fontSize: "17px",
          fontWeight: 800,
          color: "#FFFFFF",
          marginBottom: "10px",
        }}
      >
        {reason.title}
      </div>
      <div
        style={{
          fontSize: "13px",
          color: "rgba(255,255,255,0.45)",
          lineHeight: 1.7,
        }}
      >
        {reason.description}
      </div>
    </div>
  );
}

export default function WhyUs() {
  return (
    <section className="section" style={{ background: "#0D0D14" }}>
      <div className="label">Why Raya Social</div>
      <div className="title">
        Why India's Top Creators
        <br />
        Choose Us.
      </div>
      <p className="subtitle">
        Four things every client gets — that most agencies can't deliver.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "14px",
        }}
      >
        {reasons.map((reason) => (
          <ReasonCard key={reason.title} reason={reason} />
        ))}
      </div>
    </section>
  );
}
