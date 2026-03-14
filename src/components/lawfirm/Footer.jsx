import React from "react";
import { Scale } from "lucide-react";

export default function Footer() {
  return (
    <footer style={{ background: "#0A0705", borderTop: "1px solid rgba(201,165,122,0.2)" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "48px 48px 32px" }}>

        {/* Top row */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "32px", marginBottom: "32px" }}>

          {/* Left */}
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "10px", marginBottom: "8px" }}>
              <Scale size={18} style={{ color: "#C9A57A" }} />
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: "18px", fontWeight: 600, color: "#ffffff" }}>
                Legal<span style={{ color: "#C9A57A" }}>Legacy</span>
              </span>
            </div>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#4A5568", marginBottom: "4px" }}>
              Attorneys at Law
            </p>
            <p style={{ fontFamily: "'Inter', sans-serif", fontSize: "12px", color: "#4A5568" }}>
              © 2026 Legal Legacy. All rights reserved.
            </p>
          </div>

          {/* Right links */}
          <div style={{ display: "flex", gap: "32px", alignItems: "center" }}>
            {["Disclaimer", "Privacy Policy", "Terms of Use"].map((link) => (
              <a
                key={link}
                href="#"
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: "12px",
                  color: "#6B7280",
                  textDecoration: "none",
                  letterSpacing: "0.05em",
                  transition: "color 0.2s ease",
                }}
                onMouseEnter={e => e.currentTarget.style.color = "#C9A57A"}
                onMouseLeave={e => e.currentTarget.style.color = "#6B7280"}
              >
                {link}
              </a>
            ))}
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: "1px", background: "rgba(201,165,122,0.12)", marginBottom: "24px" }} />

        {/* Disclaimer text */}
        <p style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "11px",
          color: "#374151",
          lineHeight: 1.7,
          maxWidth: "860px",
          fontStyle: "italic",
        }}>
          The information on this website is for informational purposes only and does not constitute legal advice.
          Viewing this site or contacting Legal Legacy does not create an attorney-client relationship.
        </p>

      </div>
    </footer>
  );
}