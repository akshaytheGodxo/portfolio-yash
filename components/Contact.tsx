"use client";

import { useState } from "react";

type FormData = {
  name: string;
  businessType: string;
  handle: string;
  budget: string;
  message: string;
};

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: "",
    businessType: "",
    handle: "",
    budget: "",
    message: "",
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="section section--center">
      <div className="container contact-block">
        <span className="pill">Limited spots · Apply now</span>

        <h2 className="heading" style={{ marginTop: 16 }}>
          Ready to scale?{" "}
          <span className="heading-accent">Let&apos;s talk.</span>
        </h2>

        <p className="lede" style={{ marginInline: "auto", marginBottom: 28 }}>
          30 minutes. We&apos;ll map your strategy and show exactly what
          we&apos;d do for your brand.
        </p>

        <div className="contact-channels">
          <a
            href="https://wa.me/6394952571"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-channel"
          >
            <span aria-hidden="true">💬</span>
            <span>
              <strong>WhatsApp</strong>
              <span>Replies in minutes</span>
            </span>
          </a>
          <a href="mailto:whiz@rayasocial.com" className="contact-channel">
            <span aria-hidden="true">✉️</span>
            <span>
              <strong>Email</strong>
              <span>whiz@rayasocial.com</span>
            </span>
          </a>
        </div>

        <div className="contact-form-card">
          <h3>Tell us about your brand</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              alert("Thanks! We'll be in touch shortly.");
            }}
          >
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your name</label>
                <input
                  id="name"
                  name="name"
                  value={form.name}
                  onChange={onChange}
                  placeholder="Rahul Sharma"
                />
              </div>
              <div className="form-group">
                <label htmlFor="businessType">Business type</label>
                <input
                  id="businessType"
                  name="businessType"
                  value={form.businessType}
                  onChange={onChange}
                  placeholder="Finance creator"
                />
              </div>
            </div>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="handle">Instagram handle</label>
                <input
                  id="handle"
                  name="handle"
                  value={form.handle}
                  onChange={onChange}
                  placeholder="@yourhandle"
                />
              </div>
              <div className="form-group">
                <label htmlFor="budget">Monthly budget</label>
                <input
                  id="budget"
                  name="budget"
                  value={form.budget}
                  onChange={onChange}
                  placeholder="₹20,000+"
                />
              </div>
            </div>
            <div className="form-group form-group--full">
              <label htmlFor="message">What do you need help with?</label>
              <textarea
                id="message"
                name="message"
                value={form.message}
                onChange={onChange}
                placeholder="Your goals and current situation…"
              />
            </div>
            <button
              type="submit"
              className="btn-primary btn-shimmer"
              style={{ width: "100%" }}
            >
              Submit — book my call
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
