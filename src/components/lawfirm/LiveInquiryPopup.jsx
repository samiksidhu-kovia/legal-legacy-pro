import React, { useState, useEffect, useRef } from "react";

const inquiries = [
  { text: "Personal Injury Case Inquiry", location: "Naperville, IL" },
  { text: "Employment Law Consultation", location: "Evanston, IL" },
  { text: "Workplace Injury Case Review", location: "Oak Park, IL" },
  { text: "Family Law Consultation", location: "Aurora, IL" },
  { text: "Slip and Fall Case Inquiry", location: "Schaumburg, IL" },
  { text: "Contract Dispute Inquiry", location: "Skokie, IL" },
  { text: "Car Accident Case Review", location: "Naperville, IL" },
  { text: "Wrongful Termination Inquiry", location: "Evanston, IL" },
  { text: "Construction Injury Case", location: "Aurora, IL" },
  { text: "Medical Malpractice Consultation", location: "Oak Park, IL" },
  { text: "Dog Bite Injury Case", location: "Schaumburg, IL" },
  { text: "Business Litigation Inquiry", location: "Skokie, IL" },
  { text: "Premises Liability Case", location: "Naperville, IL" },
  { text: "Truck Accident Case Review", location: "Aurora, IL" },
  { text: "Nursing Home Neglect Inquiry", location: "Evanston, IL" },
  { text: "Workplace Harassment Case", location: "Oak Park, IL" },
  { text: "Product Liability Case Review", location: "Skokie, IL" },
  { text: "Personal Injury Consultation", location: "Schaumburg, IL" },
  { text: "Auto Accident Case Inquiry", location: "Naperville, IL" },
  { text: "Civil Litigation Case Review", location: "Aurora, IL" },
  { text: "Employment Contract Dispute", location: "Evanston, IL" },
  { text: "Slip Injury Consultation", location: "Oak Park, IL" },
  { text: "Premises Liability Consultation", location: "Skokie, IL" },
  { text: "Workers Compensation Inquiry", location: "Schaumburg, IL" },
  { text: "Legal Case Review Request", location: "Naperville, IL" },
];

const timestamps = [1, 3, 6, 9, 12, 15];

function randomTimestamp() {
  return timestamps[Math.floor(Math.random() * timestamps.length)];
}

export default function LiveInquiryPopup() {
  const [opacity, setOpacity] = useState(0);
  const [mounted, setMounted] = useState(false);
  const [current, setCurrent] = useState({ ...inquiries[0], minutes: randomTimestamp() });
  const indexRef = useRef(0);

  useEffect(() => {
    let t1, t2, t3, t4;

    function showNext() {
      indexRef.current = (indexRef.current + 1) % inquiries.length;
      setCurrent({ ...inquiries[indexRef.current], minutes: randomTimestamp() });
      setMounted(true);

      // Small delay to allow mount before transitioning opacity
      t1 = setTimeout(() => setOpacity(1), 30);

      // After 12s start fade out
      t2 = setTimeout(() => setOpacity(0), 12000);

      // After fade out (1.2s), unmount and wait 5s before next
      t3 = setTimeout(() => {
        setMounted(false);
        t4 = setTimeout(showNext, 5000);
      }, 13200);
    }

    // Initial delay: 6–8 seconds
    const initialDelay = 6000 + Math.random() * 2000;
    t1 = setTimeout(showNext, initialDelay);

    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); clearTimeout(t4); };
  }, []);

  if (!mounted) return null;

  return (
    <div
      style={{
        position: "fixed",
        bottom: "24px",
        right: "24px",
        zIndex: 9999,
        width: "300px",
        background: "#1B1B1D",
        border: "1px solid #2F2F35",
        borderRadius: "6px",
        boxShadow: "0 4px 24px rgba(0,0,0,0.45)",
        padding: "14px 16px",
        fontFamily: "'Inter', sans-serif",
        opacity: opacity,
        transform: opacity === 1 ? "translateY(0)" : "translateY(8px)",
        transition: "opacity 1.2s ease, transform 1.2s ease",
        pointerEvents: "none",
      }}
    >
      {/* Label */}
      <div style={{ fontSize: "10px", letterSpacing: "0.12em", textTransform: "uppercase", color: "#C9A57A", marginBottom: "6px", fontWeight: 500 }}>
        Recent Case Inquiry
      </div>

      {/* Line 1 */}
      <div style={{ display: "flex", alignItems: "center", gap: "7px", marginBottom: "4px" }}>
        <span style={{
          width: "7px", height: "7px", borderRadius: "50%",
          background: "#8B1E2D", flexShrink: 0, display: "inline-block"
        }} />
        <span style={{ color: "#F4F4F6", fontSize: "13px", fontWeight: 600, lineHeight: 1.3 }}>
          {current.text}
        </span>
      </div>

      {/* Line 2 */}
      <div style={{ color: "#B6B6BD", fontSize: "11.5px", paddingLeft: "14px" }}>
        {current.location} &bull; {current.minutes} {current.minutes === 1 ? "minute" : "minutes"} ago
      </div>
    </div>
  );
}