"use client";

import React, { useState, useEffect } from "react";
import { Phone, MessageCircle, ArrowUp } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function FloatingContact() {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    const checkScroll = () => {
      setShowTopBtn(window.scrollY > 300);
    };
    window.addEventListener("scroll", checkScroll);
    return () => window.removeEventListener("scroll", checkScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-5 right-5 z-40 flex flex-col items-end gap-3 pointer-events-none">
      {/* Scroll to top */}
      {showTopBtn && (
        <button
          onClick={scrollToTop}
          className="pointer-events-auto w-11 h-11 rounded-full bg-white/90 shadow-lg border border-pink-200 text-slate-700 hover:text-brand-pink hover:bg-white flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1"
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Floating Call Button (Visible on mobile/tablet) */}
      <a
        href={`tel:${SCHOOL_INFO.phone}`}
        className="pointer-events-auto sm:hidden flex items-center gap-2 px-4 py-2.5 rounded-full bg-slate-900 text-white shadow-xl hover:bg-slate-800 transition-all duration-300 font-bold text-xs"
        aria-label="Call School"
      >
        <Phone className="w-4 h-4 text-amber-400 animate-pulse" />
        <span>Call Us</span>
      </a>

      {/* Floating WhatsApp Button */}
      <a
        href={SCHOOL_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="pointer-events-auto group relative flex items-center gap-2.5 bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-600 hover:to-emerald-700 text-white pl-4 pr-5 py-3 rounded-full shadow-2xl transition-all duration-300 transform hover:scale-105"
        aria-label="Chat with Little Angels on WhatsApp"
      >
        <span className="relative flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-white"></span>
        </span>
        <MessageCircle className="w-5 h-5 fill-white" />
        <span className="font-bold text-xs sm:text-sm tracking-wide">
          Chat on WhatsApp
        </span>
      </a>
    </div>
  );
}
