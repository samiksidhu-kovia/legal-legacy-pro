import React, { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

export default function ContactSection() {
  const [form, setForm] = useState({
    name: "", email: "", phone: "", caseType: "", message: ""
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact"
     style={{ background: "#0F0C09", borderTop: "1px solid rgba(201,165,122,0.15)" }}>
      <div className="max-w-6xl mx-auto px-6 lg:px-16 py-24">

        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-12 bg-[#C9A57A] opacity-60" />
            <span className="text-xs tracking-[0.3em] uppercase text-[#C9A57A]">Get In Touch</span>
            <div className="h-px w-12 bg-[#C9A57A] opacity-60" />
          </div>
          <h2 className="playfair text-white text-4xl lg:text-5xl font-bold mb-3"
            style={{ fontFamily: "'Playfair Display', serif" }}>
            Speak With a Chicago Attorney Today
          </h2>
          <p className="text-gray-400 text-base max-w-lg mx-auto" style={{ fontWeight: 300 }}>
            Request a free and confidential case review with an experienced Chicago attorney.
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-10">

          {/* Contact Details */}
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="playfair text-white text-xl font-semibold mb-6"
                style={{ fontFamily: "'Playfair Display', serif" }}>
                Chicago Office
              </h3>
              <div className="space-y-5">
                {[
                  { icon: Phone, label: "Phone", value: "(312) 555-0199", href: "tel:+13125550199" },
                  { icon: Mail, label: "Email", value: "info@legallegacy.com", href: "mailto:info@legallegacy.com" },
                  { icon: MapPin, label: "Address", value: "30 N. LaSalle Street, Suite 2400\nChicago, IL 60602" },
                  { icon: Clock, label: "Hours", value: "Mon–Fri: 8am–7pm\nWeekends & Emergencies: 24/7" },
                ].map(({ icon: Icon, label, value, href }) => (
                  <div key={label} className="flex gap-4">
                    <div className="w-9 h-9 flex-shrink-0 flex items-center justify-center"
                      style={{ border: "1px solid rgba(201,168,76,0.3)", background: "rgba(201,168,76,0.05)" }}>
                      <Icon size={15} style={{ color: "#C9A57A" }} />
                    </div>
                    <div>
                      <p className="text-xs uppercase tracking-wider text-gray-600 mb-0.5">{label}</p>
                      {href ? (
                        <a href={href} className="text-gray-300 text-sm hover:text-[#C9A57A] transition-colors whitespace-pre-line">
                          {value}
                        </a>
                      ) : (
                        <p className="text-gray-300 text-sm whitespace-pre-line">{value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bar Admissions */}
            <div className="pt-6" style={{ borderTop: "1px solid rgba(201,165,122,0.18)" }}>
              <p className="text-xs tracking-wider uppercase text-gray-600 mb-3">Bar Admissions</p>
              <p className="text-gray-400 text-sm leading-relaxed" style={{ fontWeight: 300 }}>
                State of Illinois · U.S. District Court for the Northern District of Illinois ·
                U.S. Court of Appeals for the 7th Circuit · U.S. Supreme Court
              </p>
            </div>
          </div>

          {/* Form */}
          <div className="lg:col-span-3"
            style={{ border: "1px solid rgba(201,165,122,0.12)", borderRadius: "2px", background: "#231C17" }}>
            {submitted ? (
              <div className="h-full flex items-center justify-center px-10 py-16 text-center">
                <div>
                  <div className="w-16 h-16 flex items-center justify-center mx-auto mb-5"
                    style={{ border: "1px solid #C9A57A", background: "rgba(201,165,122,0.08)" }}>
                    <Mail size={24} style={{ color: "#C9A57A" }} />
                  </div>
                  <h3 className="playfair text-white text-2xl mb-3"
                    style={{ fontFamily: "'Playfair Display', serif" }}>
                    Message Received
                  </h3>
                  <p className="text-gray-400 text-sm">
                    A senior attorney will contact you within 2 business hours.<br />
                    For urgent matters, please call (312) 555-0199.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="p-8 space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  {[
                    { key: "name", label: "Full Name", type: "text", placeholder: "John Smith" },
                    { key: "phone", label: "Phone", type: "tel", placeholder: "(312) 000-0000" },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label className="block text-xs tracking-wider uppercase mb-1.5"
                        style={{ color: "rgba(201,165,122,0.6)" }}>{label}</label>
                      <input
                        type={type}
                        value={form[key]}
                        onChange={e => setForm({ ...form, [key]: e.target.value })}
                        placeholder={placeholder}
                        className="w-full px-4 py-2.5 text-sm text-white placeholder-gray-700 outline-none"
                        style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,165,122,0.2)", borderRadius: "1px" }}
                        onFocus={e => e.target.style.borderColor = "rgba(201,165,122,0.5)"}
                        onBlur={e => e.target.style.borderColor = "rgba(201,165,122,0.2)"}
                      />
                    </div>
                  ))}
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase mb-1.5"
                   style={{ color: "rgba(201,165,122,0.6)" }}>Email Address</label>
                  <input
                   type="email"
                   value={form.email}
                   onChange={e => setForm({ ...form, email: e.target.value })}
                   placeholder="john@example.com"
                   className="w-full px-4 py-2.5 text-sm text-white placeholder-gray-700 outline-none"
                   style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,165,122,0.2)", borderRadius: "1px" }}
                   onFocus={e => e.target.style.borderColor = "rgba(201,165,122,0.5)"}
                   onBlur={e => e.target.style.borderColor = "rgba(201,165,122,0.2)"}
                  />
                </div>

                <div>
                  <label className="block text-xs tracking-wider uppercase mb-1.5"
                    style={{ color: "rgba(201,165,122,0.6)" }}>Case Type</label>
                   <select
                    value={form.caseType}
                    onChange={e => setForm({ ...form, caseType: e.target.value })}
                    className="w-full px-4 py-2.5 text-sm outline-none"
                    style={{ background: "#1A1208", border: "1px solid rgba(201,165,122,0.2)", color: form.caseType ? "white" : "#4B5563", borderRadius: "1px" }}
                  >
                    <option value="">Select case type...</option>
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
                   style={{ color: "rgba(201,165,122,0.6)" }}>Message</label>
                  <textarea
                   value={form.message}
                   onChange={e => setForm({ ...form, message: e.target.value })}
                   placeholder="Please describe your situation in as much detail as you're comfortable sharing..."
                   rows={5}
                   className="w-full px-4 py-2.5 text-sm text-white placeholder-gray-700 outline-none resize-none"
                   style={{ background: "rgba(255,255,255,0.04)", border: "1px solid rgba(201,165,122,0.2)", borderRadius: "1px" }}
                   onFocus={e => e.target.style.borderColor = "rgba(201,165,122,0.5)"}
                   onBlur={e => e.target.style.borderColor = "rgba(201,165,122,0.2)"}
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-sm font-semibold tracking-widest uppercase transition-all hover:opacity-90"
                  style={{ background: "#8B1A2B", color: "white", letterSpacing: "0.12em" }}
                >
                  Send Message
                </button>

                <p className="text-center text-xs text-gray-600">
                  All communications are protected by attorney-client privilege
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}