import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, CheckCircle2, Clock, Users, BookOpen, Heart, ArrowRight, MessageCircle, Phone, Calendar } from "lucide-react";
import { CLASSES, DAILY_ROUTINE, SCHOOL_INFO } from "@/data/schoolData";

export const metadata = {
  title: "Programs & Classes | PlayGroup, PreKG, LKG, UKG | Little Angels Play School",
  description:
    "Explore our 4 early childhood programs: PlayGroup (1.5-2.5 yrs), Pre-KG (2.5-3.5 yrs), LKG (3.5-4.5 yrs), UKG (4.5-5.5 yrs) at Little Angels Play School Kundrathur.",
};

export default function ClassesPage() {
  return (
    <div className="bg-white">
      {/* Page Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-pink-50/70 via-white to-white overflow-hidden border-b border-pink-100/60">
        <div className="absolute top-0 right-10 w-80 h-80 bg-amber-100/50 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 left-10 w-80 h-80 bg-pink-100/50 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-brand-pink text-xs font-bold uppercase tracking-wider">
            <BookOpen className="w-3.5 h-3.5" />
            Nurturing Curriculum
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Early Childhood <span className="text-brand-pink">Classes</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Thoughtfully structured exclusively for young children ages 1.5 to 6 years, ensuring emotional security, active play, and solid academic readiness.
          </p>
        </div>
      </section>

      {/* Program Fast Jump Bar */}
      <div className="sticky top-20 z-20 bg-white/95 backdrop-blur-md border-b border-slate-200 py-3 shadow-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-center gap-2 sm:gap-4 overflow-x-auto">
          {CLASSES.map((cls) => (
            <a
              key={cls.id}
              href={`#${cls.id}`}
              className="px-4 py-1.5 rounded-full text-xs font-bold bg-slate-100 hover:bg-pink-100 hover:text-brand-pink text-slate-700 transition-colors whitespace-nowrap"
            >
              {cls.name}
            </a>
          ))}
        </div>
      </div>

      {/* Detailed Program Cards */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {CLASSES.map((cls, index) => {
            const isEven = index % 2 === 1;
            return (
              <div
                key={cls.id}
                id={cls.id}
                className={`scroll-mt-36 rounded-3xl p-8 sm:p-12 border-2 ${cls.borderColor} bg-gradient-to-br from-white via-slate-50/50 to-pink-50/20 shadow-soft transition-all duration-300`}
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left info column */}
                  <div className="lg:col-span-8 space-y-6">
                    
                    <div>
                      <h2 className="text-3xl sm:text-4xl font-black text-slate-900 mb-2">
                        {cls.name}
                      </h2>
                      <p className={`text-sm sm:text-base font-bold ${cls.textColor}`}>
                        {cls.tagline}
                      </p>
                    </div>

                    <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                      {cls.description}
                    </p>

                    {/* Class Action Buttons */}
                    <div className="flex flex-wrap items-center gap-3 pt-4">
                      <Link
                        href={`/contact?class=${cls.id}`}
                        className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-sm shadow-soft transition-all"
                      >
                        <span>Inquire for {cls.name}</span>
                        <ArrowRight className="w-4 h-4" />
                      </Link>

                      <a
                        href={`https://wa.me/919962485335?text=Hello%20Little%20Angels%20Play%20School,%20I%20want%20to%20know%20more%20about%20${encodeURIComponent(cls.name)}%20admissions.`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-3 rounded-full bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-soft transition-all"
                      >
                        <MessageCircle className="w-4 h-4" />
                        <span>WhatsApp Inquiry</span>
                      </a>
                    </div>
                  </div>

                  {/* Right visual card */}
                  <div className="lg:col-span-4">
                    <div className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-white aspect-[4/3] bg-slate-100">
                      <Image
                        src={
                          cls.id === "ukg"
                            ? "/images/photos/4.jpeg"
                            : cls.id === "lkg"
                            ? "/images/photos/3.jpeg"
                            : cls.id === "prekg"
                            ? "/images/photos/10.jpeg"
                            : "/images/photos/5.jpeg"
                        }
                        alt={`${cls.name} at Little Angels Play School`}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-slate-900/70 via-transparent to-transparent flex items-end p-4">
                        <span className="text-white font-bold text-xs">
                          {cls.name} Real Moments
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Call Out Banner */}
      <section className="py-14 bg-gradient-to-r from-brand-pink to-brand-pinkHover text-white text-center">
        <div className="max-w-4xl mx-auto px-4 space-y-4">
          <h2 className="text-2xl sm:text-3xl font-black">Not sure which class fits your child's age?</h2>
          <p className="text-pink-100 text-sm sm:text-base max-w-xl mx-auto">
            Give our counselor a quick call at <strong>9962485335</strong>. We will guide you on the exact age criteria and seat availability!
          </p>
          <div className="pt-2">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-white text-slate-900 font-extrabold text-sm shadow-lg hover:bg-pink-50 transition-colors"
            >
              <Phone className="w-4 h-4 text-brand-pink" />
              <span>Call Us Directly</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
