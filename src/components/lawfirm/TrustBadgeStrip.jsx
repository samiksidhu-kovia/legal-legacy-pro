import React from "react";
import { Star, Award, Shield, CheckCircle, Scale } from "lucide-react";

const badges = [
  { icon: Star, label: "Google Reviews ★ 4.9" },
  { icon: Award, label: "AVVO Rating 10.0" },
  { icon: Shield, label: "Super Lawyers 2026" },
  { icon: CheckCircle, label: "BBB Accredited A+" },
];

const allBadges = [...badges, ...badges, ...badges, ...badges];

export default function TrustBadgeStrip() {
  return (
    <div
      style={{
        background: "#1B1511",
        height: "110px",
        display: "flex",
        alignItems: "center",
        overflow: "hidden",
        width: "100%",
        position: "relative",
      }}
    >
      {/* Left fade overlay */}
      <div style={{
        position: "absolute",
        left: 0,
        top: 0,
        bottom: 0,
        width: "200px",
        background: "linear-gradient(to right, #1B1511 0%, transparent 100%)",
        zIndex: 2,
        pointerEvents: "none",
      }} />
      {/* Right fade overlay */}
      <div style={{
        position: "absolute",
        right: 0,
        top: 0,
        bottom: 0,
        width: "200px",
        background: "linear-gradient(to left, #1B1511 0%, transparent 100%)",
        zIndex: 2,
        pointerEvents: "none",
      }} />

      <style>{`
        @keyframes trustScrollLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .trust-ticker {
          display: flex;
          flex-wrap: nowrap;
          width: max-content;
          animation: trustScrollLeft 36s linear infinite;
        }
        .trust-ticker:hover {
          animation-play-state: paused;
        }
        .trust-badge:hover .badge-text {
          color: #ffffff;
        }
      `}</style>

      <div className="trust-ticker">
        {allBadges.map((badge, i) => {
          const Icon = badge.icon;
          return (
            <React.Fragment key={i}>
              <div
                className="trust-badge"
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  cursor: "default",
                  whiteSpace: "nowrap",
                  padding: "0 48px",
                }}
              >
                <Icon size={16} style={{ color: "#C9A57A", flexShrink: 0 }} />
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontWeight: 500,
                    fontSize: "16px",
                    color: "#B9C2D0",
                    transition: "color 0.2s ease",
                  }}
                  className="badge-text"
                >
                  {badge.label}
                </span>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </div>
  );
}