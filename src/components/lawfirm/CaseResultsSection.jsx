import React, { useState, useEffect } from "react";

const tickerItems = [
  { result: "$4.2M", type: "Construction Injury" },
  { result: "$2.1M", type: "Business Litigation" },
  { result: "$1.8M", type: "Wrongful Death" },
  { result: "Not Guilty", type: "Criminal Defense" },
  { result: "Dismissed", type: "Federal Charges" },
  { result: "$950K", type: "Truck Accident Settlement" },
];

export default function CaseResultsSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prev => (prev + 1) % tickerItems.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="results" style={{ background: "#14100D" }}>
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
              Results
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "48px",
            color: "#ffffff",
            lineHeight: 1.2,
          }}>
            Case Results
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            color: "#B9C2D0",
            marginTop: "12px",
            fontWeight: 400,
          }}>
            A record of verdicts and settlements that demonstrate our commitment to maximum recovery.
          </p>
        </div>

        {/* Two-column layout */}
        <div style={{ display: "flex", gap: "48px", alignItems: "stretch" }}>

          {/* LEFT — Featured case */}
          <div style={{ flex: "0 0 50%" }}>
            <div style={{
              background: "#231C17",
              borderRadius: "12px",
              padding: "40px",
              border: "1px solid rgba(201,165,122,0.12)",
              height: "100%",
              boxSizing: "border-box",
              display: "flex",
              flexDirection: "column",
            }}>
              {/* Label */}
              <div style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                fontWeight: 500,
                letterSpacing: "2px",
                textTransform: "uppercase",
                color: "#C9A57A",
                marginBottom: "24px",
              }}>
                Featured Verdict
              </div>

              {/* Result */}
              <div style={{
                fontFamily: "'Playfair Display', serif",
                fontWeight: 700,
                fontSize: "72px",
                color: "#C9A57A",
                lineHeight: 1,
                marginBottom: "16px",
              }}>
                $3.8M
              </div>

              {/* Case title */}
              <h3 style={{
                fontFamily: "'Playfair Display', serif",
                fontSize: "26px",
                color: "#ffffff",
                fontWeight: 600,
                lineHeight: 1.3,
                marginBottom: "20px",
              }}>
                Medical Malpractice Verdict
              </h3>

              {/* Description */}
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                color: "#B9C2D0",
                lineHeight: 1.7,
                fontWeight: 400,
                marginBottom: "36px",
                flex: 1,
              }}>
                Recovered for a Chicago family after surgical negligence resulted in permanent disability.
              </p>

              {/* CTA */}
              <button
                style={{
                  background: "transparent",
                  color: "#C9A57A",
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "15px",
                  fontWeight: 500,
                  padding: "13px 28px",
                  borderRadius: "6px",
                  border: "1px solid #C9A57A",
                  cursor: "pointer",
                  alignSelf: "flex-start",
                  transition: "background 0.2s ease, color 0.2s ease",
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = "#C9A57A";
                  e.currentTarget.style.color = "#0F1B2D";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#C9A57A";
                }}
              >
                View Case Details
              </button>
            </div>
          </div>

          {/* RIGHT — Ticker list */}
          <div style={{ flex: "0 0 50%", display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <div style={{ overflow: "hidden" }}>
              {tickerItems.map((item, i) => {
                const isActive = i === activeIndex;
                const isPrev = i === (activeIndex - 1 + tickerItems.length) % tickerItems.length;
                return (
                  <div key={i}>
                    <div
                      style={{
                        height: "70px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        padding: "0 20px",
                        borderRadius: "6px",
                        background: isActive ? "#231C17" : "transparent",
                        transition: "background 0.6s ease",
                      }}
                    >
                      <span style={{
                        fontFamily: "'Playfair Display', serif",
                        fontSize: isActive ? "28px" : "22px",
                        color: isActive ? "#C9A57A" : "#ffffff",
                        fontWeight: 700,
                        transition: "font-size 0.6s ease, color 0.6s ease",
                      }}>
                        {item.result}
                      </span>
                      <span style={{
                        fontFamily: "'Inter', sans-serif",
                        fontSize: "15px",
                        color: isActive ? "#ffffff" : "#B9C2D0",
                        fontWeight: isActive ? 500 : 400,
                        transition: "color 0.6s ease",
                        }}>
                        {item.type}
                        </span>
                        {i < tickerItems.length - 1 && (
                        <div style={{ height: "1px", background: "rgba(201,165,122,0.18)", margin: "0 20px" }} />
                        )}
                    </div>
                    {i < tickerItems.length - 1 && (
                      <div style={{ height: "1px", background: "rgba(201,165,122,0.18)", margin: "0 20px" }} />
                    )}
                  </div>
                );
              })}
            </div>

            {/* Dot indicators */}
            <div style={{ display: "flex", gap: "8px", marginTop: "32px", paddingLeft: "20px" }}>
              {tickerItems.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIndex(i)}
                  style={{
                    width: i === activeIndex ? "24px" : "8px",
                    height: "8px",
                    borderRadius: "4px",
                    background: i === activeIndex ? "#C9A57A" : "#2A3953",
                    border: "none",
                    cursor: "pointer",
                    transition: "width 0.4s ease, background 0.4s ease",
                    padding: 0,
                  }}
                />
              ))}
            </div>

            {/* Disclaimer */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "11px",
              color: "#4A5568",
              marginTop: "24px",
              paddingLeft: "20px",
              fontStyle: "italic",
            }}>
              * Past results do not guarantee similar outcomes in future cases.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}