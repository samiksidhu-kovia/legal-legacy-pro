import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "James Kowalski",
    location: "Chicago, IL",
    matter: "Personal Injury",
    quote: "After my accident, I was overwhelmed and in pain. Legal Legacy stepped in and handled everything. They recovered $1.4 million for me when the insurance company offered $80,000. I cannot recommend them highly enough.",
    stars: 5,
  },
  {
    name: "Priya Nair",
    location: "Evanston, IL",
    matter: "Criminal Defense",
    quote: "I was wrongfully accused and faced serious charges that could have destroyed my career. Richard Hargrove's team dismantled the prosecution's case piece by piece. Not guilty on all counts. They gave my life back.",
    stars: 5,
  },
  {
    name: "Thomas Brennan",
    location: "Oak Park, IL",
    matter: "Business Litigation",
    quote: "My former business partner tried to steal the company. David Okafor secured a complete victory at trial and ensured every penny of my investment was protected. Brilliant legal mind, exceptional communication.",
    stars: 5,
  },
  {
    name: "Maria Santos",
    location: "Pilsen, Chicago",
    matter: "Immigration Law",
    quote: "Sofia fought for our family's citizenship with passion and dedication. She explained every step clearly and was always available for questions. Today we are proud American citizens because of Legal Legacy.",
    stars: 5,
  },
  {
    name: "Greg Whitmore",
    location: "Lincoln Park, Chicago",
    matter: "Estate Planning",
    quote: "After losing my wife, the firm helped me restructure everything with sensitivity and professionalism. Their estate planning protected my children's future. They treated us like family during an incredibly hard time.",
    stars: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section
      id="testimonials"
      style={{
        position: "relative",
        backgroundImage: "url('https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b37cd709fdbb5500dbacc3/a090b2475_image.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Dark overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "rgba(20,16,13,0.88)",
        zIndex: 0,
      }} />

      <div style={{
        position: "relative",
        zIndex: 1,
        maxWidth: "1200px",
        margin: "0 auto",
        padding: "96px 48px",
      }}>

        {/* Header */}
        <div style={{ textAlign: "center", marginBottom: "64px" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "12px", marginBottom: "16px" }}>
            <div style={{ height: "1px", width: "32px", background: "#C9A57A", opacity: 0.6 }} />
            <span style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: "12px",
              letterSpacing: "3px",
              textTransform: "uppercase",
              color: "#C9A57A",
              fontWeight: 500,
            }}>
              Client Voices
            </span>
            <div style={{ height: "1px", width: "32px", background: "#C9A57A", opacity: 0.6 }} />
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "48px",
            color: "#ffffff",
            lineHeight: 1.2,
          }}>
            What Our Clients Say
          </h2>
        </div>

        {/* Centered testimonial card */}
        <div style={{ maxWidth: "860px", margin: "0 auto" }}>
          <div style={{
            background: "rgba(35,28,23,0.85)",
            border: "1px solid rgba(201,165,122,0.12)",
            borderRadius: "12px",
            padding: "52px 56px",
            textAlign: "center",
            backdropFilter: "blur(8px)",
          }}>
            {/* Gold quote icon */}
            <div style={{ marginBottom: "20px", display: "flex", justifyContent: "center" }}>
              <Quote size={36} style={{ color: "#C9A57A", opacity: 0.8 }} />
            </div>

            {/* Google Review stars */}
            <div style={{ display: "flex", justifyContent: "center", gap: "6px", marginBottom: "28px" }}>
              {Array(t.stars).fill(0).map((_, i) => (
                <Star key={i} size={18} fill="#C9A57A" style={{ color: "#C9A57A" }} />
              ))}
            </div>

            {/* Quote text */}
            <blockquote style={{
              fontFamily: "'Playfair Display', serif",
              fontSize: "22px",
              color: "#ffffff",
              lineHeight: 1.7,
              fontStyle: "italic",
              fontWeight: 400,
              marginBottom: "36px",
            }}>
              "{t.quote}"
            </blockquote>

            {/* Client info */}
            <div style={{ marginBottom: "32px" }}>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                color: "#ffffff",
                marginBottom: "4px",
              }}>
                {t.name}
              </p>
              <p style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "13px",
                color: "#B9C2D0",
              }}>
                {t.location} · {t.matter}
              </p>
            </div>

            {/* Navigation */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: "16px" }}>
              <button
                onClick={prev}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(201,165,122,0.4)",
                  borderRadius: "4px",
                  background: "transparent",
                  color: "#C9A57A",
                  cursor: "pointer",
                }}
              >
                <ChevronLeft size={16} />
              </button>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: "13px", color: "#B9C2D0" }}>
                {current + 1} / {testimonials.length}
              </span>
              <button
                onClick={next}
                style={{
                  width: "36px",
                  height: "36px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid rgba(201,165,122,0.4)",
                  borderRadius: "4px",
                  background: "transparent",
                  color: "#C9A57A",
                  cursor: "pointer",
                }}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* Dots */}
          <div style={{ display: "flex", justifyContent: "center", gap: "8px", marginTop: "24px" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                style={{
                  height: "6px",
                  width: i === current ? "24px" : "6px",
                  borderRadius: "3px",
                  background: i === current ? "#C9A57A" : "rgba(201,165,122,0.25)",
                  border: "none",
                  cursor: "pointer",
                  padding: 0,
                  transition: "width 0.3s ease, background 0.3s ease",
                }}
              />
            ))}
          </div>
        </div>

        {/* Review badges — scrolling ticker */}
        <div style={{ marginTop: "56px", overflow: "hidden", width: "100%" }}>
          <style>{`
            @keyframes badgeScrollLeft {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .badge-ticker {
              display: flex;
              flex-wrap: nowrap;
              width: max-content;
              animation: badgeScrollLeft 18s linear infinite;
            }
            .badge-ticker:hover {
              animation-play-state: paused;
            }
          `}</style>
          <div className="badge-ticker">
            {["Google Reviews ★ 4.9/5", "Avvo Rating ★ 10/10", "Super Lawyers® 2026", "BBB Accredited A+", "Illinois Trial Lawyers Association",
              "Google Reviews ★ 4.9/5", "Avvo Rating ★ 10/10", "Super Lawyers® 2026", "BBB Accredited A+", "Illinois Trial Lawyers Association"].map((badge, i) => (
              <span key={i} style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: "12px",
                letterSpacing: "1px",
                color: "rgba(201,165,122,0.55)",
                whiteSpace: "nowrap",
                padding: "0 48px",
                display: "inline-block",
              }}>
                {badge}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}