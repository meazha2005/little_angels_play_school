import React from "react";
import { ShieldCheck, HeartHandshake, Sparkles, Users, PartyPopper, GraduationCap, CheckCircle2 } from "lucide-react";
import { WHY_CHOOSE_US } from "@/data/schoolData";

const iconMap = {
  ShieldCheck,
  HeartHandshake,
  Sparkles,
  Users,
  PartyPopper,
  GraduationCap,
};

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="py-16 md:py-24 bg-white relative scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/70 text-brand-pink text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            Why Parents Trust Us
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
            Designed Exclusively for Happy & Confident Early Childhood
          </h2>
          <p className="text-slate-600 text-base sm:text-lg">
            Every corner, toy, and activity at Little Angels Play School is thoughtfully curated to provide your child with loving security, healthy stimulation, and lifelong enthusiasm for learning.
          </p>
        </div>

        {/* 6 Feature Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {WHY_CHOOSE_US.map((item, index) => {
            const IconComponent = iconMap[item.icon as keyof typeof iconMap] || Sparkles;
            return (
              <div
                key={index}
                className="group relative p-7 rounded-3xl bg-slate-50/70 hover:bg-white border border-slate-100 hover:border-pink-200 hover:shadow-card transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className={`w-14 h-14 rounded-2xl ${item.color} text-white flex items-center justify-center mb-6 shadow-md group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-pink transition-colors">
                  {item.title}
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
