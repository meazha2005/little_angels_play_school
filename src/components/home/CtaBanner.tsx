import React from "react";
import Link from "next/link";
import { Phone, MessageCircle, Heart, Sparkles, MapPin } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function CtaBanner() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-r from-brand-pink via-pink-600 to-brand-pinkDark text-white relative overflow-hidden">
      {/* Decorative shapes */}
      <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 rounded-full bg-white/10 blur-2xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-64 h-64 rounded-full bg-amber-400/20 blur-2xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/20 backdrop-blur-xs text-white text-xs font-extrabold uppercase tracking-wider border border-white/30">
          <Sparkles className="w-3.5 h-3.5 text-amber-300" />
          Seats Limited for Individual Attention
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight max-w-3xl mx-auto leading-tight">
          Give Your Child the Loving Foundation They Deserve
        </h2>

        <p className="text-pink-100 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
          Visit our campus in Kundrathur today to meet our mentors and see where your little angel will laugh, learn, and grow.
        </p>

        <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href={`tel:${SCHOOL_INFO.phone}`}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-white text-slate-900 font-extrabold text-base shadow-xl hover:bg-pink-50 transition-all transform hover:-translate-y-0.5"
          >
            <Phone className="w-5 h-5 text-brand-pink" />
            <span>Call Now: {SCHOOL_INFO.phone}</span>
          </a>

          <a
            href={SCHOOL_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-emerald-500 text-white font-extrabold text-base shadow-xl hover:bg-emerald-600 transition-all transform hover:-translate-y-0.5"
          >
            <MessageCircle className="w-5 h-5" />
            <span>WhatsApp Admissions</span>
          </a>

          <Link
            href="/contact"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-pink-900/40 text-white font-bold text-base border border-white/30 hover:bg-pink-900/60 transition-colors"
          >
            <span>Book a Campus Visit</span>
          </Link>
        </div>

        <div className="pt-2 text-xs text-pink-200 flex items-center justify-center gap-1">
          <MapPin className="w-3.5 h-3.5 text-amber-300" />
          <span>Plot no : 461 , 7 th west street, Sree Metha Nagar, Kundrathur, Chennai - 69</span>
        </div>
      </div>
    </section>
  );
}
