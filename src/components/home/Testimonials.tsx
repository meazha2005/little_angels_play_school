import React from "react";
import { Star, Quote, Heart } from "lucide-react";
import { TESTIMONIALS } from "@/data/schoolData";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-pink-50/40 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100 text-brand-pink text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-brand-pink" />
            Loved By Parents
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            What Parents in Kundrathur Say About Us
          </h2>
          <p className="text-slate-600 text-base">
            Hearing from families whose children took their first educational steps with our loving teachers.
          </p>
        </div>

        {/* Testimonials Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-white border border-pink-100/80 shadow-soft hover:shadow-card transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Rating & Quote Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>
                  <Quote className="w-6 h-6 text-pink-200" />
                </div>

                <p className="text-slate-700 text-sm leading-relaxed mb-6 italic">
                  "{t.comment}"
                </p>
              </div>

              {/* Author */}
              <div className="pt-4 border-t border-slate-100 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-brand-pink to-amber-400 text-white font-black text-sm flex items-center justify-center">
                  {t.name[0]}
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 text-sm">{t.name}</h4>
                  <p className="text-xs text-slate-500 font-medium">
                    Parent of {t.parentOf} • <span className="text-brand-pink">{t.grade}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
