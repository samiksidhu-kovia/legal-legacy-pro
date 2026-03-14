import React, { useState } from "react";
import { ChevronRight, Shield, Clock, Award } from "lucide-react";

export default function HeroSection({ scrollTo }) {
  const [form, setForm] = useState({ name: "", phone: "", caseType: "", brief: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-16 lg:pt-0"
      style={{
        background: "linear-gradient(135deg, #0D0802 0%, #1C1008 40%, #2A1510 100%)",
      }}>

      {/* Background texture overlay */}
      <div className="absolute inset-0"
        style={{
          backgroundImage: `url("https://qtrypzzcjebvfcihiynt.supabase.co/storage/v1/object/public/base44-prod/public/69b37cd709fdbb5500dbacc3/a16b9e2ad_image.png")`,
          backgroundSize: "cover",
          backgroundPosition: "right center",
          mixBlendMode: "overlay",
          opacity: 0.25
        }} />

      {/* Gold accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-[#C9A84C]" />

      <div className="relative z-10 w-full px-6 lg:px-16 py-20 lg:py-24">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* Left: Copy */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-[#C9A84C]" />
              <span className="text-xs tracking-[0.3em] uppercase text-[#C9A84C] font-medium">
                Chicago's Premier Litigation Firm
              </span>
            </div>

            <h1 className="playfair text-white mb-6 leading-tight"
              style={{ fontFamily: "'Playfair Display', serif", fontSize: "clamp(2.2rem, 5vw, 3.8rem)", fontWeight: 700 }}>
              Your Rights.<br />
              <em style={{ color: "#C9A84C", fontStyle: "italic" }}>Our Legacy.</em>
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg"
              style={{ fontWeight: 300 }}>
              For over three decades, Legal Legacy has protected Chicago families and businesses with unwavering dedication. We don't just practice law. We fight for results.
            </p>

            {/* Trust badges */}
            <div className="flex flex-wrap gap-6 mb-10">
              {[
                { icon: Award, text: "30+ Years Experience" },
                { icon: Shield, text: "$95M+ Recovered" },
                { icon: Clock, text: "24/7 Availability" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2">
                  <Icon size={16} style={{ color: "#C9A84C" }} />
                  <span className="text-gray-300 text-sm">{text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollTo("contact")}
                className="px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:shadow-lg"
                style={{
                  background: "#8B1A2B",
                  color: "white",
                  border: "1px solid #8B1A2B",
                  letterSpacing: "0.1em"
                }}
              >
                Start Free Case Review
              </button>
              <button
                onClick={() => scrollTo("results")}
                className="px-8 py-3.5 text-sm font-medium tracking-wider uppercase transition-all duration-200 hover:text-white"
                style={{
                  background: "transparent",
                  color: "#C9A84C",
                  border: "1px solid rgba(201,168,76,0.5)",
                  letterSpacing: "0.1em"
                }}
              >
                View Results <ChevronRight size={14} className="inline" />
              </button>
            </div>
          </div>

          {/* Right: Intake Form */}
          <div className="rounded-lg overflow-hidden shadow-2xl"
            style={{ background: "rgba(15,10,5,0.9)", border: "1px solid rgba(201,168,76,0.25)" }}>

            <div className="px-8 py-6" style={{ background: "#8B1A2B" }}>
              <h3 className="playfair text-white text-xl font-semibold"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Start Your Case Review
              </h3>
              <p className="text-red-200 text-sm mt-1">Confidential · No obligation · Same-day response</p>
            </div>

            {submitted ? (
              <div className="px-8 py-12 text-center">
                <div className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "rgba(201,168,76,0.15)", border: "1px solid #C9A84C" }}>
                  <Award size={24} style={{ color: "#C9A84C" }} />
                </div>
                <h4 className="playfair text-white text-lg mb-2" style={{ fontFamily: "'Playfair Display', serif" }}>
                  Thank You
                </h4>
                <p className="text-gray-400 text-sm">A senior attorney will contact you within 2 hours.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="px-8 py-7 space-y-4">
                {[
                  { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                  { key: "phone", label: "Phone Number", type: "tel", placeholder: "(312) 000-0000" },
                ].map(({ key, label, type, placeholder }) => (
                  <div key={key}>
                    <label className="block text-xs tracking-wider uppercase mb-1.5"
                      style={{ color: "rgba(201,168,76,0.7)" }}>{label}</label>
                    <input
                      type={type}
                      value={form[key]}
                      onChange={e => setForm({ ...form, [key]: e.target.value })}
                      placeholder={placeholder}
                      className="w-full px-4 py-3 text-sm text-white placeholder-gray-600 outline-none transition-all"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(201,168,76,0.2)",
                        borderRadius: "2px"
                      }}
                      onFocus={e => e.target.style.borderColor = "rgba(201,168,76,0.6)"}
                      onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"}
                    />
                  </div>
                ))}

                <div>
                  <label className="block text-xs tracking-wider uppercase mb-1.5"
                    style={{ color: "rgba(201,168,76,0.7)" }}>Case Type</label>
                  <select
                    value={form.caseType}
                    onChange={e => setForm({ ...form, caseType: e.target.value })}
                    className="w-full px-4 py-3 text-sm outline-none transition-all"
                    style={{
                      background: "#1C1208",
                      border: "1px solid rgba(201,168,76,0.2)",
                      color: form.caseType ? "white" : "#4B5563",
                      borderRadius: "2px"
                    }}
                  >
                    <option value="" style={{ color: "#4B5563" }}>Select case type...</option>
                    <option>Personal Injury</option>
                    <option>Criminal Defense</option>
                    <option>Family Law</option>
                    <option>Business Litigation</option>
                    <option>Estate Planning</option>
                    <option>Immigration</option>
                    <option>Other</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase mb-1.5"
                    style={{ color: "rgba(201,168,76,0.7)" }}>Brief Description</label>
                  <textarea
                    value={form.brief}
                    onChange={e => setForm({ ...form, brief: e.target.value })}
                    placeholder="Briefly describe your situation..."
                    rows={3}
                    className="w-full px-4 py-3 text-sm text-white placeholder-gray-600 outline-none resize-none transition-all"
                    style={{
                      background: "rgba(255,255,255,0.04)",
                      border: "1px solid rgba(201,168,76,0.2)",
                      borderRadius: "2px"
                    }}
                    onFocus={e => e.target.style.borderColor = "rgba(201,168,76,0.6)"}
                    onBlur={e => e.target.style.borderColor = "rgba(201,168,76,0.2)"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold tracking-widest uppercase transition-all duration-200 hover:opacity-90"
                  style={{ background: "#8B1A2B", color: "white", letterSpacing: "0.12em" }}
                >
                  Request Free Consultation
                </button>
                <p className="text-center text-xs text-gray-600">
                  Protected by attorney-client privilege
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}