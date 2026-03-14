import React, { useState, useEffect } from "react";
import Sidebar from "../components/lawfirm/Sidebar";
import HeroSection from "../components/lawfirm/HeroSection";
import WhyUsSection from "../components/lawfirm/WhyUsSection";
import TrustBadgeStrip from "../components/lawfirm/TrustBadgeStrip";
import PracticeAreasSection from "../components/lawfirm/PracticeAreasSection";
import CaseResultsSection from "../components/lawfirm/CaseResultsSection";
import AttorneysSection from "../components/lawfirm/AttorneysSection";
import TestimonialsSection from "../components/lawfirm/TestimonialsSection";
import ContactSection from "../components/lawfirm/ContactSection";
import LiveInquiryPopup from "../components/lawfirm/LiveInquiryPopup";
import Footer from "../components/lawfirm/Footer";

export default function LawFirmSite() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "why-us", "practice-areas", "results", "attorneys", "testimonials", "contact"];
      for (const id of sections) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom > 100) {
            setActiveSection(id);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="flex min-h-screen bg-[#1a1a1a]" style={{ fontFamily: "'Inter', sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Inter:wght@300;400;500;600&display=swap');
        html { scroll-behavior: smooth; }
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #1a1a1a; }
        ::-webkit-scrollbar-thumb { background: #8B1A2B; border-radius: 3px; }
        .gold-text { color: #C9A84C; }
        .burgundy-bg { background-color: #8B1A2B; }
        .charcoal-bg { background-color: #2C2C2C; }
        .playfair { font-family: 'Playfair Display', serif; }
        .gold-border { border-color: #C9A84C; }
        .gold-bg { background-color: #C9A84C; }
        .section-divider { border-color: rgba(201,168,76,0.25); }
      `}</style>

      <Sidebar activeSection={activeSection} scrollTo={scrollTo} menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

      <main className="flex-1 lg:ml-64 overflow-x-hidden">
        <HeroSection scrollTo={scrollTo} />
        <TrustBadgeStrip />
        <WhyUsSection />
        <PracticeAreasSection scrollTo={scrollTo} />
        <CaseResultsSection />
        <AttorneysSection scrollTo={scrollTo} />
        <TestimonialsSection />
        <ContactSection />
        <Footer />
      </main>
      <LiveInquiryPopup />
    </div>
  );
}