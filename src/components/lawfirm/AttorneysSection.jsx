import React from "react";

const attorneys = {
  featured: {
    name: "Richard A. Hargrove",
    title: "Founding Partner",
    focus: "Criminal Defense & Civil Rights",
    bio: "Former federal prosecutor with more than three decades of courtroom experience. Known for landmark civil rights victories and high-profile criminal defense.",
    school: "Northwestern Pritzker School of Law, J.D. 1991",
    img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=900&q=80&fit=crop&crop=top",
  },
  supporting: [
    {
      name: "Catherine M. Wells",
      title: "Senior Partner",
      focus: "Personal Injury & Medical Malpractice",
      bio: "Nationally recognized trial attorney. Has recovered more than $45M for injured clients across 25 years of practice.",
      school: "University of Chicago Law School, J.D. 1998",
      img: "https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b37cd709fdbb5500dbacc3/0f0bb751b_image.png",
    },
    {
      name: "David T. Okafor",
      title: "Partner",
      focus: "Corporate Litigation & Arbitration",
      bio: "Former in-house counsel specializing in complex commercial disputes and international arbitration proceedings.",
      school: "Columbia Law School, J.D. 2005",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=700&q=80&fit=crop&crop=top",
    },
  ],
};

function AttorneyCard({ attorney }) {
  return (
    <div style={{
      background: "#231C17",
      borderRadius: "12px",
      overflow: "hidden",
      border: "1px solid rgba(201,165,122,0.12)",
      display: "flex",
      flexDirection: "column",
      height: "100%",
    }}>
      {/* Image with badge overlay */}
      <div style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: "3/4",
        flexShrink: 0,
      }}>
        <img
          src={attorney.img}
          alt={attorney.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            objectPosition: "center top",
            filter: "grayscale(100%) brightness(0.85)",
            display: "block",
          }}
        />
        {/* Badge overlaid on image */}
        <span style={{
          position: "absolute",
          bottom: "16px",
          left: "16px",
          background: "#8B1E2D",
          color: "#ffffff",
          fontFamily: "'Inter', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "1.5px",
          textTransform: "uppercase",
          padding: "6px 12px",
          borderRadius: "3px",
        }}>
          {attorney.title}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "28px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        {/* Name */}
        <h3 className="attorney-name" style={{
          fontFamily: "'Playfair Display', serif",
          fontWeight: 700,
          fontSize: "22px",
          color: "#ffffff",
          lineHeight: 1.2,
          marginBottom: "12px",
        }}>
          {attorney.name}
        </h3>

        {/* Focus */}
        <p className="attorney-focus" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          fontWeight: 600,
          letterSpacing: "1px",
          textTransform: "uppercase",
          color: "#C9A57A",
          marginBottom: "16px",
        }}>
          {attorney.focus}
        </p>

        {/* Bio */}
        <p className="attorney-bio" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "14px",
          color: "#B9C2D0",
          lineHeight: 1.7,
          fontWeight: 400,
          marginBottom: "16px",
          flex: 1,
        }}>
          {attorney.bio}
        </p>

        {/* School */}
        <p className="attorney-school" style={{
          fontFamily: "'Inter', sans-serif",
          fontSize: "12px",
          fontStyle: "italic",
          color: "rgba(201,165,122,0.45)",
        }}>
          {attorney.school}
        </p>
      </div>
    </div>
  );
}

export default function AttorneysSection({ scrollTo }) {
  return (
    <section id="attorneys" style={{ background: "#1B1511" }}>
      <style>{`
        @media (max-width: 768px) {
          .attorneys-section-pad { padding: 64px 24px !important; }
          .attorneys-grid { flex-wrap: wrap !important; }
          .attorneys-grid > div { flex: 0 0 calc(50% - 12px) !important; min-width: 0 !important; }
          .attorneys-grid > div:last-child { flex: 0 0 100% !important; }
          .attorney-bio { display: none !important; }
          .attorney-school { display: none !important; }
          .attorney-name { font-size: 16px !important; }
          .attorney-focus { font-size: 10px !important; }
        }
      `}</style>
      <div className="attorneys-section-pad" style={{ maxWidth: "1200px", margin: "0 auto", padding: "96px 48px" }}>

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
              The Team
            </span>
          </div>
          <h2 style={{
            fontFamily: "'Playfair Display', serif",
            fontWeight: 700,
            fontSize: "48px",
            color: "#ffffff",
            lineHeight: 1.2,
          }}>
            Our Attorneys
          </h2>
          <p style={{
            fontFamily: "'Inter', sans-serif",
            fontSize: "16px",
            color: "#B9C2D0",
            marginTop: "12px",
            fontWeight: 400,
            maxWidth: "480px",
          }}>
            Elite legal representation from attorneys who have argued before the nation's highest courts.
          </p>
        </div>

        {/* Three equal cards layout */}
        <div className="attorneys-grid" style={{ display: "flex", gap: "24px", alignItems: "stretch" }}>
          <div style={{ flex: 1 }}>
            <AttorneyCard attorney={attorneys.featured} large={false} />
          </div>
          {attorneys.supporting.map((attorney) => (
            <div key={attorney.name} style={{ flex: 1 }}>
              <AttorneyCard attorney={attorney} large={false} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}