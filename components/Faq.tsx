"use client";

import { useState } from "react";

type FAQItem = {
  question: string;
  answer: string;
};

const faqLeft: FAQItem[] = [
  {
    question: "Do you work with creators outside Raipur?",
    answer:
      "Yes — most of our clients are pan-India personal brands. We manage everything remotely.",
  },
  {
    question: "How fast do you deliver edited videos?",
    answer:
      "Standard turnaround is 48 hours per video. Rush 24-hour delivery is available for retainer clients at no extra cost.",
  },
  {
    question: "Do you use AI for editing?",
    answer:
      "No. All editing is done by real human editors. Every cut, transition, and sound decision is made by a person who understands your niche.",
  },
];

const faqRight: FAQItem[] = [
  {
    question: "What niches do you specialise in?",
    answer:
      "Finance, health and fitness, wellness, education, and infotainment. These are the niches where our editors have the deepest experience and proven results.",
  },
  {
    question: "What is the minimum to work with you?",
    answer:
      "We have options for both video editing only and full account management. Book a call and we'll figure out what makes sense for your stage and goals.",
  },
  {
    question: "How do I get started?",
    answer:
      "Fill the form below or WhatsApp us directly. We'll schedule a free 30-minute strategy call to understand your goals and tell you exactly what we'd do for your brand.",
  },
];

function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => setOpenIndex(openIndex === i ? null : i);

  return (
    <div>
      {items.map((item, i) => (
        <div
          key={item.question}
          style={{
            borderBottom: "0.5px solid rgba(255,255,255,0.07)",
            padding: "20px 0",
            cursor: "pointer",
          }}
          onClick={() => toggle(i)}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              fontSize: "14px",
              fontWeight: 600,
              color: "#FFFFFF",
            }}
          >
            {item.question}
            <span
              style={{
                fontSize: "18px",
                color: "#6C63FF",
                fontWeight: 300,
                flexShrink: 0,
                marginLeft: "16px",
              }}
            >
              {openIndex === i ? "−" : "+"}
            </span>
          </div>
          {openIndex === i && (
            <div
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.4)",
                lineHeight: 1.75,
                marginTop: "14px",
              }}
            >
              {item.answer}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default function FAQ() {
  return (
    <section className="section" id="faq">
      <div className="label">FAQs</div>
      <div className="title">Questions Before the Call</div>
      <p className="subtitle">Everything people ask before working with us.</p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "0 56px",
        }}
      >
        <FAQAccordion items={faqLeft} />
        <FAQAccordion items={faqRight} />
      </div>
    </section>
  );
}
