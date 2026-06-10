"use client";
import { useState, useEffect } from "react";

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#0a1628]/95 backdrop-blur-md border-b border-[rgba(200,151,58,0.12)] py-3" : "bg-transparent py-5"
    }`}>
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <div className="flex flex-col leading-tight">
          <span className="text-[10px] tracking-[0.3em] uppercase font-semibold text-[#c8973a]" style={{ fontFamily: "var(--font-raleway)" }}>
            Recovery Life Collective
          </span>
          <span className="text-[16px] tracking-wide text-[#f0ebe0]" style={{ fontFamily: "var(--font-playfair)" }}>
            Younger By Design
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-[11px] tracking-[0.15em] uppercase text-[#7a9ab8]" style={{ fontFamily: "var(--font-raleway)" }}>
          <a href="#chapters" className="hover:text-[#c8973a] transition-colors duration-200">Inside</a>
          <a href="#author"   className="hover:text-[#c8973a] transition-colors duration-200">Author</a>
          <a href="#bonus"    className="hover:text-[#c8973a] transition-colors duration-200">Bonus</a>
        </div>
        <a href="#presale" className="btn-gold px-5 py-2.5 rounded-sm text-[11px] hidden sm:block">
          Pre-Order Now
        </a>
      </div>
    </nav>
  );
}
