import React from "react";
import { Award, Users, Shield, Scale, Clock } from "lucide-react";

const stats = [
  { value: "30+", label: "Years Trial Experience" },
  { value: "$95M+", label: "Recovered" },
  { value: "850+", label: "Cases Resolved" },
  { value: "98%", label: "Client Satisfaction" },
];

const features = [
  {
    icon: Award,
    title: "Trial-Tested Excellence",
    desc: "Our attorneys have argued before the Illinois Supreme Court and secured landmark verdicts that define legal precedent.",
  },
  {
    icon: Users,
    title: "Client-First Philosophy",
    desc: "You receive direct access to your attorney, not a paralegal, with guaranteed response times.",
  },
  {
    icon: Shield,
    title: "Aggressive Defense",
    desc: "We challenge every piece of evidence and leave no stone unturned in pursuit of the strongest outcome.",
  },
  {
    icon: Scale,
    title: "Ethical & Transparent",
    desc: "No hidden fees. No surprise billing. Flat-fee and contingency arrangements for maximum accessibility.",
  },
  {
    icon: Clock,
    title: "24/7 Legal Availability",
    desc: "Legal emergencies don't respect business hours. Our team is available around the clock for urgent consultations.",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" style={{ background: "#14100D" }}>
      <div style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 48px" }}>
        <div style={{ display: "flex", gap: "80px", alignItems: "flex-start" }}>

          {/* LEFT COLUMN — 40% */}
          <div style={{ flex: "0 0 40%" }}>
            {/* Label */}
            <div style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 500,
              fontSize: "12px",
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: "#C9A57A",
              marginBottom: "20px",
            }}>
              OUR DISTINCTION
            </div>

            {/* Heading */}
            <h2 style={{
              fontFamily: "'Playfair Display', serif",
              fontWeight: 700,
              fontSize: "48px",
              color: "#ffffff",
              lineHeight: 1.2,
              marginBottom: "24px",
            }}>
              Why Chicago Clients Trust Legal Legacy
            </h2>

            {/* Paragraph */}
            <p style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "18px",
              color: "#BFB6AE",
              maxWidth: "420px",
              lineHeight: 1.7,
              marginBottom: "48px",
              fontWeight: 400,
            }}>
              Decades of courtroom experience combined with relentless client advocacy. We do not settle for easy resolutions. We fight for the strongest outcome every time.
            </p>

            {/* Stats stack */}
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              {stats.map(({ value, label }, i) => (
                <div key={i} style={{ display: "flex", alignItems: "baseline", gap: "14px" }}>
                  <span style={{
                    fontFamily: "'Playfair Display', serif",
                    fontWeight: 700,
                    fontSize: "44px",
                    color: "#C9A57A",
                    lineHeight: 1,
                  }}>
                    {value}
                  </span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: "14px",
                    color: "#BFB6AE",
                    fontWeight: 400,
                  }}>
                    {label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT COLUMN — 60% */}
          <div style={{ flex: "0 0 60%", display: "flex", flexDirection: "column", gap: "16px" }}>
            {features.map(({ icon: Icon, title, desc }, i) => {
              const isShifted = i % 2 === 1;
              return (
                <div
                  key={i}
                  style={{
                    background: "#231C17",
                    borderRadius: "10px",
                    padding: "24px",
                    border: "1px solid rgba(201,165,122,0.12)",
                    marginLeft: isShifted ? "60px" : "0px",
                    display: "flex",
                    alignItems: "flex-start",
                    gap: "16px",
                  }}
                >
                  <div style={{ flexShrink: 0, marginTop: "3px" }}>
                    <Icon size={18} style={{ color: "#C9A57A" }} />
                  </div>
                  <div>
                    <h3 style={{
                      fontFamily: "'Playfair Display', serif",
                      fontSize: "22px",
                      color: "#ffffff",
                      fontWeight: 600,
                      marginBottom: "8px",
                      lineHeight: 1.2,
                    }}>
                      {title}
                    </h3>
                    <p style={{
                      fontFamily: "'Inter', sans-serif",
                      fontSize: "15px",
                      color: "#BFB6AE",
                      lineHeight: 1.6,
                      fontWeight: 400,
                      margin: 0,
                    }}>
                      {desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}