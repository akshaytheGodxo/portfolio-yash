type Step = {
  number: string;
  title: string;
  description: string;
  timeline: string;
};

const steps: Step[] = [
  {
    number: "01",
    title: "Strategy Call",
    description:
      "We understand your niche, audience, voice, and goals before writing a single word.",
    timeline: "Day 1–2",
  },
  {
    number: "02",
    title: "Scripts & Calendar",
    description:
      "Trending topics, hook-driven scripts, full month's calendar — shared for your approval.",
    timeline: "Day 3–5",
  },
  {
    number: "03",
    title: "Edit & Deliver",
    description:
      "Cinematic edits with captions, effects, and sound design. Delivered in 48 hours flat.",
    timeline: "Day 5–7",
  },
  {
    number: "04",
    title: "Post & Grow",
    description:
      "Posting, community management, and monthly reporting — fully handled, every month.",
    timeline: "Ongoing",
  },
];

function StepCard({ step }: { step: Step }) {
  return (
    <div className="card" style={{ padding: "26px 22px" }}>
      <div className="step-number" style={{ marginBottom: "20px" }}>
        {step.number}
      </div>
      <div
        style={{
          fontSize: "13px",
          fontWeight: 700,
          color: "#FFFFFF",
          marginBottom: "10px",
        }}
      >
        {step.title}
      </div>
      <div
        style={{
          fontSize: "12px",
          color: "rgba(255,255,255,0.4)",
          lineHeight: 1.7,
          marginBottom: "16px",
        }}
      >
        {step.description}
      </div>
      <div
        style={{
          fontSize: "10px",
          color: "rgba(255,255,255,0.22)",
          fontWeight: 600,
          textTransform: "uppercase",
          letterSpacing: "1.2px",
        }}
      >
        {step.timeline}
      </div>
    </div>
  );
}

export default function Process() {
  return (
    <section className="section" id="process">
      <div className="label">How It Works</div>
      <div className="title">
        From Zero to Viral
        <br />
        in 7 Days
      </div>
      <p className="subtitle">
        A repeatable system. Same process, every client, every month.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "14px",
        }}
      >
        {steps.map((step) => (
          <StepCard key={step.number} step={step} />
        ))}
      </div>
    </section>
  );
}
