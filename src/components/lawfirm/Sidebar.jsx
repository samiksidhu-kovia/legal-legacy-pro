import React from "react";
import { Scale, Menu, X, Phone } from "lucide-react";

const navItems = [
  { id: "home", label: "Home" },
  { id: "why-us", label: "Why Choose Us" },
  { id: "practice-areas", label: "Practice Areas" },
  { id: "results", label: "Case Results" },
  { id: "attorneys", label: "Our Attorneys" },
  { id: "testimonials", label: "Testimonials" },
  { id: "contact", label: "Contact Us" },
];

export default function Sidebar({ activeSection, scrollTo, menuOpen, setMenuOpen }) {
  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-5 py-4"
        style={{ background: "#1C1008", borderBottom: "1px solid rgba(201,168,76,0.3)" }}>
        <div className="flex items-center gap-2">
           <Scale size={20} style={{ color: "#C9A84C" }} />
           <span className="playfair text-white font-semibold text-lg tracking-wide">Legal<span style={{ color: "#C9A84C" }}>Legacy</span></span>
         </div>
        <button onClick={() => setMenuOpen(!menuOpen)} className="text-white p-1">
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 z-40 pt-16" style={{ background: "rgba(15,10,5,0.97)" }}>
          <nav className="flex flex-col gap-1 px-6 pt-6">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left py-3 px-4 text-base tracking-wide transition-all ${
                  activeSection === item.id
                    ? "text-[#C9A84C] border-l-2 border-[#C9A84C] pl-5"
                    : "text-gray-300 hover:text-[#C9A84C]"
                }`}
                style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400 }}
              >
                {item.label}
              </button>
            ))}
            <div className="mt-6 pt-6 border-t border-[rgba(201,168,76,0.2)]">
              <a href="tel:+13125550199" className="flex items-center gap-2 text-[#C9A84C] text-sm">
                <Phone size={14} /> (312) 555-0199
              </a>
            </div>
          </nav>
        </div>
      )}

      {/* Desktop Sidebar */}
      <aside className="hidden lg:flex fixed left-0 top-0 h-full w-64 flex-col z-30"
        style={{ background: "#120D06", borderRight: "1px solid rgba(201,168,76,0.2)" }}>

        {/* Logo */}
        <div className="px-8 pt-10 pb-8" style={{ borderBottom: "1px solid rgba(201,168,76,0.15)" }}>
          <div className="flex items-center gap-3 mb-3">
             <Scale size={22} style={{ color: "#C9A84C" }} />
             <span className="playfair text-white font-semibold text-xl tracking-wide"
               style={{ fontFamily: "'Playfair Display', serif" }}>
               Legal<span style={{ color: "#C9A84C" }}>Legacy</span>
             </span>
           </div>
          <p className="text-xs tracking-[0.2em] uppercase" style={{ color: "rgba(201,168,76,0.6)" }}>
            Attorneys at Law
          </p>
        </div>

        {/* Navigation */}
        <nav className="flex-1 px-6 py-8 flex flex-col gap-1">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollTo(item.id)}
              className={`text-left py-2.5 px-4 text-sm tracking-wide rounded transition-all duration-200 ${
                activeSection === item.id
                  ? "text-[#C9A84C] bg-[rgba(201,168,76,0.08)] border-l-2 border-[#C9A84C] pl-5"
                  : "text-gray-400 hover:text-[#C9A84C] hover:bg-[rgba(201,168,76,0.05)]"
              }`}
              style={{ fontFamily: "'Inter', sans-serif", fontWeight: activeSection === item.id ? 500 : 400 }}
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Contact Info */}
        <div className="px-8 py-8" style={{ borderTop: "1px solid rgba(201,168,76,0.15)" }}>
          <p className="text-xs tracking-[0.15em] uppercase mb-3" style={{ color: "rgba(201,168,76,0.5)" }}>
            Free Consultation
          </p>
          <a href="tel:+13125550199" className="flex items-center gap-2 text-white hover:text-[#C9A84C] transition-colors text-sm font-medium mb-1">
            <Phone size={13} style={{ color: "#C9A84C" }} />
            (312) 555-0199
          </a>
          <p className="text-xs text-gray-500 mt-2">Available 24/7</p>
        </div>
      </aside>
    </>
  );
}