import React from "react";
import { ChevronRight } from "lucide-react";

const practiceAreas = [
  { title: "Criminal Defense", desc: "DUI charges, felony defense, and federal investigations." },
  { title: "Family Law", desc: "Divorce, custody disputes, and asset division." },
  { title: "Business Litigation", desc: "Contract disputes, partnership conflicts, and corporate lawsuits." },
  { title: "Estate Planning", desc: "Wills, trusts, asset protection, and probate." },
  { title: "Immigration Law", desc: "Visa applications, green cards, and removal defense." },
];

export default function PracticeAreasSection({ scrollTo }) {
  return (
    <section id="practice-areas" style={{ background: "#1B1511" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 48px" }}>

        {/* Header */}
        <div style={{ marginBottom: "56px" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ height: "1px", width: "32px", background: "#C9A57A", opacity: 0.6 }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#C9A57A",
              fontWeight: 500,
            }}>
              Expertise
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "48px",
            color: "#ffffff",
            lineHeight: 1.2,
          }}>
            Practice Areas
          </h2>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>

          {/* LEFT — Featured card */}
          <div style={{ flex: "0 0 55%" }}>
            <div style={{
              background: "#231C17",
              borderRadius: "12px",
              padding: "40px",
              border: "1px solid rgba(201,165,122,0.12)",
            }}>
              {/* Label */}
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C9A57A",
                marginBottom: "20px",
              }}>
                Most Common Case Type
              </div>

              {/* Heading */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "38px",
                color: "#ffffff",
                lineHeight: 1.2,
                marginBottom: "20px",
              }}>
                Personal Injury
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "17px",
                color: "#B9C2D0",
                lineHeight: 1.7,
                fontWeight: 400,
                marginBottom: "36px",
              }}>
                Car accidents, workplace injuries, slip and fall cases, and medical malpractice. Our attorneys recover maximum compensation for injury victims.
              </p>

              {/* CTA */}
              <button
                onClick={() => scrollTo("contact")}
                style={{
                  background: "#8B2A2E",
                  color: "#ffffff",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "14px 28px",
                  borderRadius: "6px",
                  border: "none",
                  cursor: "pointer",
                  transition: "opacity 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.opacity = "0.85"}
                onMouseLeave={e => e.currentTarget.style.opacity = "1"}
              >
                Free Consultation
              </button>
            </div>
          </div>

          {/* RIGHT — Vertical list */}
          <div style={{ flex: "0 0 45%" }}>
            {practiceAreas.map((area, i) => (
              <div key={i}>
                <div
                  onClick={() => scrollTo("contact")}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    padding: "14px 16px",
                    cursor: "pointer",
                    background: "#1B1511",
                    transition: "background 0.2s ease",
                    borderRadius: "4px",
                  }}
                  onMouseEnter={e => e.currentTarget.style.background = "#2C241F"}
                  onMouseLeave={e => e.currentTarget.style.background = "#1B1511"}
                >
                  <div>
                    <span style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "22px",
                      color: "#ffffff",
                      fontWeight: 600,
                      display: "block",
                    }}>
                      {area.title}
                    </span>
                    <span style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "13px",
                      color: "#B9C2D0",
                      fontWeight: 400,
                    }}>
                      {area.desc}
                    </span>
                  </div>
                  <ChevronRight size={20} style={{ color: "#C9A57A", flexShrink: 0, marginLeft: "12px" }} />
                </div>
                {i < practiceAreas.length - 1 && (
                  <div style={{ height: "1px", background: "rgba(201,165,122,0.18)" }} />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}