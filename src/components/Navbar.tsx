import React, { useState, useEffect } from "react";
import { Activity, Menu, X, Brain } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("start");

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      // Track active section for indicator
      const sections = [
        "startsida",
        "om-oss",
        "tjanster",
        "kundcase",
        "ai-texter",
        "ai-bilder",
        "videokoncept",
        "ljud-musik",
        "sa-anvande-jag-ai"
      ];

      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Start", target: "startsida" },
    { label: "Om oss", target: "om-oss" },
    { label: "Tjänster", target: "tjanster" },
    { label: "Kundcase", target: "kundcase" },
    { label: "Text", target: "ai-texter" },
    { label: "Bild", target: "ai-bilder" },
    { label: "Video", target: "videokoncept" },
    { label: "Ljud", target: "ljud-musik" },
    { label: "Metod", target: "sa-anvande-jag-ai" },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    const el = document.getElementById(target);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setIsOpen(false);
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-emerald-50/50 py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <a
            href="#startsida"
            onClick={(e) => handleNavClick(e, "startsida")}
            className="flex items-center space-x-2 group focus:outline-none"
          >
            <div className="bg-gradient-to-tr from-emerald-600 shadow-md to-green-500 text-white p-2 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-300">
              <Activity className="h-5 w-5" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-xl tracking-tight bg-gradient-to-r from-emerald-700 to-green-600 bg-clip-text text-transparent">
                PulseForge
              </span>
              <span className="text-[10px] font-mono leading-none tracking-widest text-emerald-600 font-bold uppercase">
                Träningsplattform
              </span>
            </div>
          </a>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <a
                key={link.target}
                href={`#${link.target}`}
                onClick={(e) => handleNavClick(e, link.target)}
                className={`px-3 py-2 rounded-lg font-display text-sm font-semibold transition-all duration-200 ${
                  activeSection === link.target
                    ? "bg-emerald-50 text-emerald-700"
                    : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50"
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Gymnasie-tag & Mobile Menu Button */}
          <div className="flex items-center space-x-3">
            <div className="hidden lg:flex items-center space-x-1.5 px-3 py-1 bg-amber-50 rounded-full border border-amber-200">
              <div className="h-2 w-2 rounded-full bg-amber-500 animate-pulse"></div>
              <span className="font-mono text-[10px] uppercase font-bold text-amber-800">
                Gymnasieprojekt
              </span>
            </div>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-600 hover:text-emerald-600 hover:bg-slate-50 md:hidden focus:outline-none transition-colors"
              aria-label="Meny"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Links */}
      {isOpen && (
        <div className="md:hidden bg-white/95 backdrop-blur-md border-b border-slate-100 absolute top-full left-0 right-0 shadow-lg px-4 py-3 space-y-1">
          <div className="flex justify-between items-center px-3 py-1.5 mb-2 bg-amber-50 rounded-lg border border-amber-200">
            <span className="font-mono text-[10px] uppercase font-bold text-amber-800 flex items-center gap-1">
              <Brain className="h-3 w-3 inline" /> Slutprojekt Gy26
            </span>
            <span className="text-[10px] font-semibold text-slate-500">Träning & fysiologi</span>
          </div>
          {navLinks.map((link) => (
            <a
              key={link.target}
              href={`#${link.target}`}
              onClick={(e) => handleNavClick(e, link.target)}
              className={`block px-4 py-2.5 rounded-xl font-display text-base font-semibold transition-all ${
                activeSection === link.target
                  ? "bg-emerald-600 text-white"
                  : "text-slate-700 hover:bg-slate-100"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
