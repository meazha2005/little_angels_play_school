import React from "react";
import Link from "next/link";
import { ArrowRight, CheckCircle2, Clock, Sparkles } from "lucide-react";
import { CLASSES } from "@/data/schoolData";

export default function ClassesPreview() {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-slate-50 via-pink-50/20 to-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-14">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5 text-amber-600" />
              Foundational Programs
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Age-Tailored Classes for Every Step
            </h2>
            <p className="text-slate-600 text-base">
              From first toddler steps to confident UKG graduation, each stage is guided by a dedicated curriculum designed to ignite curiosity and build core confidence.
            </p>
          </div>
          <Link
            href="/classes"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pinkHover transition-colors shrink-0 group"
          >
            <span>View All Curriculum Details</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* 4 Classes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {CLASSES.map((cls) => (
            <div
              key={cls.id}
              className={`rounded-3xl p-6 bg-white border-2 ${cls.borderColor} shadow-card hover:shadow-xl transition-all duration-300 flex flex-col justify-between group transform hover:-translate-y-1.5`}
            >
              <div>
                <h3 className="text-2xl font-black text-slate-900 mb-2 group-hover:text-brand-pink transition-colors">
                  {cls.name}
                </h3>
              </div>

              {/* Bottom CTA for class */}
              <Link
                href={`/classes#${cls.id}`}
                className={`w-full py-2.5 px-4 rounded-xl text-xs font-bold text-center transition-all duration-200 border ${
                  cls.id === "playgroup"
                    ? "bg-pink-50 text-pink-700 border-pink-200 hover:bg-brand-pink hover:text-white"
                    : cls.id === "prekg"
                    ? "bg-amber-50 text-amber-700 border-amber-200 hover:bg-amber-500 hover:text-white"
                    : cls.id === "lkg"
                    ? "bg-sky-50 text-sky-700 border-sky-200 hover:bg-sky-500 hover:text-white"
                    : "bg-emerald-50 text-emerald-700 border-emerald-200 hover:bg-emerald-600 hover:text-white"
                }`}
              >
                Learn More & Enroll
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
