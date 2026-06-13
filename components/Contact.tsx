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

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = () => {
    // Wire to your preferred form handler / API route
    console.log("Form submitted:", form);
    alert("Thanks! We'll be in touch shortly.");
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    background: "#0A0A0F",
    border: "0.5px solid rgba(255,255,255,0.1)",
    borderRadius: "8px",
    padding: "13px 14px",
    fontSize: "13px",
    color: "#FFFFFF",
    fontFamily: "Inter, sans-serif",
    outline: "none",
  };

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    color: "rgba(255,255,255,0.32)",
    marginBottom: "8px",
    fontWeight: 600,
    textTransform: "uppercase",
    letterSpacing: "1px",
    display: "block",
  };

  return (
    <section
      id="contact"
      style={{
        padding: "72px 36px",
        textAlign: "center",
        background: "#0E0D1A",
        borderBottom: "0.5px solid rgba(255,255,255,0.06)",
      }}
      className="contact-section"
    >
      <style>{`
        .contact-section {
          padding: 72px 36px;
        }

        @media (max-width: 768px) {
          .contact-section {
            padding: 56px 28px;
          }
        }

        @media (max-width: 640px) {
          .contact-section {
            padding: 48px 20px;
          }
        }

        @media (max-width: 480px) {
          .contact-section {
            padding: 40px 16px;
          }
        }
        .contact-wrapper {
          max-width: 540px;
          margin: 0 auto 28px;
        }

        .contact-options {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }

        @media (max-width: 768px) {
          .contact-wrapper {
            margin-bottom: 20px;
          }

          .contact-options {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        .contact-option {
          display: flex;
          align-items: center;
          gap: 14px;
          padding: 18px 20px;
          border-radius: 12px;
          cursor: pointer;
          text-decoration: none;
          flex-wrap: wrap;
        }

        @media (max-width: 480px) {
          .contact-option {
            padding: 14px 12px;
            gap: 10px;
            font-size: 12px;
          }

          .contact-icon {
            width: 36px !important;
            height: 36px !important;
          }

          .contact-text {
            text-align: left;
            flex: 1;
          }
        }

        .contact-form-wrapper {
          background: #111119;
          border: 0.5px solid rgba(255,255,255,0.08);
          border-radius: 16px;
          padding: 36px;
          max-width: 540px;
          margin: 0 auto;
          text-align: left;
        }

        @media (max-width: 768px) {
          .contact-form-wrapper {
            padding: 24px;
          }
        }

        @media (max-width: 480px) {
          .contact-form-wrapper {
            padding: 16px;
          }
        }

        .form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
          margin-bottom: 12px;
        }

        @media (max-width: 768px) {
          .form-grid {
            grid-template-columns: 1fr;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .form-grid {
            margin-bottom: 10px;
          }
        }

        .divider {
          display: flex;
          align-items: center;
          gap: 14px;
          margin: 26px 0;
        }

        @media (max-width: 768px) {
          .divider {
            margin: 20px 0;
            gap: 10px;
          }
        }

        @media (max-width: 480px) {
          .divider {
            margin: 16px 0;
            gap: 8px;
            font-size: 10px;
          }
        }
      `}</style>
      <div className="pill" style={{ marginBottom: "22px" }}>
        Limited Spots · Apply Now
      </div>

      <div
        style={{
          fontSize: "40px",
          fontWeight: 900,
          letterSpacing: "-2.2px",
          color: "#FFFFFF",
          marginBottom: "14px",
          lineHeight: 1.05,
        }}
      >
        Let&apos;s Build Your
        <br />
        <span style={{ color: "#6C63FF" }}>Content System.</span>
      </div>

      <p
        style={{
          fontSize: "14px",
          color: "rgba(255,255,255,0.4)",
          marginBottom: "40px",
          maxWidth: "420px",
          marginLeft: "auto",
          marginRight: "auto",
          lineHeight: 1.75,
        }}
      >
        30 minutes. We'll map out your strategy and show you exactly what we'd
        do for your brand.
      </p>

      {/* Direct contact options */}
      <div className="contact-wrapper">
        <div
          style={{
            fontSize: "11px",
            fontWeight: 600,
            color: "rgba(255,255,255,0.3)",
            textTransform: "uppercase",
            letterSpacing: "1.5px",
            marginBottom: "14px",
          }}
        >
          Reach us directly
        </div>

        <div className="contact-options">
          {/* WhatsApp */}
          <a
            href="https://wa.me/919999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-option"
            style={{
              background: "#0f1a0f",
              border: "0.5px solid rgba(37,211,102,0.3)",
              display: "flex",
              alignItems: "center", // ensure the row itself is centered
              gap: "14px",
            }}
          >
            <div
              style={{
                width: "42px",
                height: "42px",
                background: "#25D366",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
              </svg>
            </div>
            <div className="contact-text">
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "2px",
                }}
              >
                Chat on WhatsApp
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                Typically replies in minutes
              </div>
            </div>
            <div
              style={{ marginLeft: "auto", alignSelf: "center", flexShrink: 0 }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>

          {/* Email */}
          <a
            href="mailto:hello@rayasocial.in"
            className="contact-option"
            style={{
              background: "#0f0f1a",
              border: "0.5px solid rgba(108,99,255,0.3)",
            }}
          >
            <div
              className="contact-icon"
              style={{
                width: "42px",
                height: "42px",
                background: "#6C63FF",
                borderRadius: "10px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                flexShrink: 0,
              }}
            >
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                <polyline points="22,6 12,13 2,6" />
              </svg>
            </div>
            <div className="contact-text">
              <div
                style={{
                  fontSize: "13px",
                  fontWeight: 700,
                  color: "#FFFFFF",
                  marginBottom: "2px",
                }}
              >
                Send an Email
              </div>
              <div style={{ fontSize: "11px", color: "rgba(255,255,255,0.4)" }}>
                hello@rayasocial.in
              </div>
            </div>
            <div style={{ marginLeft: "auto" }}>
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="rgba(255,255,255,0.3)"
                strokeWidth="2"
              >
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </div>
          </a>
        </div>

        {/* Divider */}
        <div className="divider">
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(255,255,255,0.08)",
            }}
          />
          <div
            style={{
              fontSize: "11px",
              fontWeight: 600,
              color: "rgba(255,255,255,0.25)",
              textTransform: "uppercase",
              letterSpacing: "1.5px",
            }}
          >
            or fill the form
          </div>
          <div
            style={{
              flex: 1,
              height: "0.5px",
              background: "rgba(255,255,255,0.08)",
            }}
          />
        </div>
      </div>

      {/* Contact form */}
      <div className="contact-form-wrapper">
        <div
          style={{
            fontSize: "15px",
            fontWeight: 700,
            color: "#FFFFFF",
            marginBottom: "24px",
          }}
        >
          Tell us about your brand
        </div>

        <div className="form-grid">
          <div>
            <label style={labelStyle} htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              name="name"
              style={inputStyle}
              placeholder="e.g. Rahul Sharma"
              value={form.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="businessType">
              Business Type
            </label>
            <input
              id="businessType"
              name="businessType"
              style={inputStyle}
              placeholder="e.g. Finance Creator"
              value={form.businessType}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-grid">
          <div>
            <label style={labelStyle} htmlFor="handle">
              Instagram Handle
            </label>
            <input
              id="handle"
              name="handle"
              style={inputStyle}
              placeholder="@yourhandle"
              value={form.handle}
              onChange={handleChange}
            />
          </div>
          <div>
            <label style={labelStyle} htmlFor="budget">
              Monthly Budget
            </label>
            <input
              id="budget"
              name="budget"
              style={inputStyle}
              placeholder="e.g. ₹20,000+"
              value={form.budget}
              onChange={handleChange}
            />
          </div>
        </div>

        <div style={{ marginBottom: "24px" }}>
          <label style={labelStyle} htmlFor="message">
            What do you need help with?
          </label>
          <textarea
            id="message"
            name="message"
            style={{ ...inputStyle, minHeight: "80px", resize: "vertical" }}
            placeholder="Tell us your current situation and goals..."
            value={form.message}
            onChange={handleChange}
          />
        </div>

        <button
          className="btn-primary btn-shimmer"
          style={{ width: "100%", padding: "14px", fontSize: "14px" }}
          onClick={handleSubmit}
        >
          Submit — Book My Call
        </button>
      </div>
    </section>
  );
}
