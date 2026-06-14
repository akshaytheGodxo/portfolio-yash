"use client";

import { useState } from "react";

const faqs = [
  {
    q: "How fast do you deliver edited videos?",
    a: "Standard turnaround is 48 hours per video. Rush 24-hour delivery is available for retainer clients at no extra cost.",
  },
  {
    q: "Do you use AI for editing?",
    a: "No. All editing is done by real human editors who understand your niche.",
  },
  {
    q: "What niches do you specialise in?",
    a: "Finance, health and fitness, wellness, education, and infotainment.",
  },
  {
    q: "What is the minimum to work with you?",
    a: "We offer video editing only and full account management. Book a call and we'll find what fits your stage.",
  },
  {
    q: "How do I get started?",
    a: "Fill the form below or WhatsApp us. We'll schedule a free 30-minute strategy call.",
  },
];

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="section">
      <div className="container">
        <header className="section-header section-header--center">
          <span className="label">FAQs</span>
          <h2 className="heading heading--sm">Questions before the call.</h2>
          <p className="lede">Everything people ask before working with us.</p>
        </header>

        <div className="faq-list">
          {faqs.map((item, i) => (
            <div key={item.q} className="faq-item">
              <button
                type="button"
                className="faq-item__btn"
                aria-expanded={open === i}
                onClick={() => setOpen(open === i ? null : i)}
              >
                <span>{item.q}</span>
                <span className="faq-item__icon">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <div className="faq-item__answer">{item.a}</div>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
