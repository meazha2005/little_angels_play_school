"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Sparkles, Phone, ArrowRight, ShieldCheck, Heart, Users, Award, ChevronDown } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function HeroSection() {
  return (
    <section className="relative min-h-[calc(100vh-5rem)] min-h-[calc(100dvh-5rem)] flex flex-col justify-between overflow-hidden bg-gradient-to-b from-pink-50/70 via-white to-amber-50/40 py-6 sm:py-8 lg:py-10">
      {/* Decorative background ambient blobs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-gradient-to-r from-pink-200/40 via-amber-200/30 to-sky-200/30 blur-3xl -z-10 rounded-full pointer-events-none" />
      <div className="absolute -top-16 right-10 w-60 h-60 bg-pink-100/60 rounded-full blur-3xl -z-10 pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-72 h-72 bg-sky-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />

      {/* Main Content Grid (Vertically Centered with my-auto) */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 my-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Heading, Subheading, CTAs & Stat Badges */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            {/* Admissions Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 border border-pink-200 shadow-xs text-xs sm:text-sm font-bold text-brand-pink backdrop-blur-xs">
              <span className="w-2 h-2 rounded-full bg-brand-pink animate-ping" />
              <span>Admissions Open for Academic Year 2025–2026</span>
              <Sparkles className="w-3.5 h-3.5 text-amber-500" />
            </div>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl xl:text-6xl font-black text-slate-900 tracking-tight leading-[1.14]">
              Where{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-pink via-pink-600 to-brand-purple">
                Little Angels
              </span>{" "}
              Begin Their Joyful Learning Journey
            </h1>

            {/* Subheading */}
            <p className="text-base sm:text-lg md:text-xl text-slate-600 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              A gentle, cheerful preschool sanctuary in Kundrathur exclusively for young children. We blend play, curiosity, and motherly care across{" "}
              <strong className="text-slate-900 font-semibold">PlayGroup, Pre-KG, LKG & UKG</strong>.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3.5 pt-1">
              <Link
                href="/contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-pinkHover text-white font-extrabold text-base shadow-soft hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-200"
              >
                <span>Enroll Your Child</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/classes"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white text-slate-800 hover:text-brand-pink font-bold text-base border-2 border-slate-200 hover:border-pink-300 shadow-xs transition-all duration-200"
              >
                <span>Explore Classes</span>
              </Link>

              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-full bg-amber-100/70 hover:bg-amber-100 text-amber-900 font-bold text-base transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-700" />
                <span>Call {SCHOOL_INFO.phone}</span>
              </a>
            </div>
          </div>

          {/* Right Column: Visual Showcase using Real Photos & Logo */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-lg lg:max-w-none">
              {/* Central Main Featured Photo */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white">
                <div className="relative aspect-[4/3] sm:aspect-[16/11] lg:aspect-[4/3] w-full">
                  <Image
                    src="/images/photos/4.jpeg"
                    alt="Little Angels Kindergarten Graduation Ceremony"
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/75 via-transparent to-transparent flex items-end p-5 sm:p-6">
                    <div className="text-white">
                      <span className="inline-block bg-amber-400 text-slate-950 text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider mb-1.5 shadow-sm">
                        KG Graduation Day
                      </span>
                      <p className="font-bold text-sm sm:text-base leading-tight">
                        Celebrating milestones with caps, gowns & proud smiles!
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Floating Badge 1: Official Logo */}
              <div className="absolute -top-5 -left-4 sm:-left-6 bg-white/95 backdrop-blur-xs p-2.5 rounded-2xl shadow-xl border border-pink-100 flex items-center gap-3 animate-float-slow z-10">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm shrink-0">
                  <Image
                    src="/images/logo.jpeg"
                    alt="Little Angels Logo"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="pr-2">
                  <p className="text-xs font-black text-slate-900">LITTLE ANGELS</p>
                  <p className="text-[10px] font-bold text-brand-pink">Play School • Kundrathur</p>
                </div>
              </div>

              {/* Floating Badge 2: Authentic Uniform Photo */}
              <div className="absolute -bottom-5 -right-3 sm:-right-5 bg-white/95 backdrop-blur-xs p-2.5 rounded-2xl shadow-xl border border-pink-100 max-w-[230px] hidden sm:flex items-center gap-3 z-10">
                <div className="relative w-12 h-12 rounded-xl overflow-hidden shadow-sm shrink-0">
                  <Image
                    src="/images/photos/6.jpeg"
                    alt="School pink uniform scholars"
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-[11px] font-extrabold text-slate-900 leading-tight">
                    Joyful Community
                  </p>
                  <p className="text-[10px] text-slate-500 font-medium">
                    Smart Little Angels in pink uniforms
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Subtle Scroll Down Indicator to Perfectly Anchor Full Viewport */}
      <div className="w-full flex justify-center pt-3 pb-1">
        <a
          href="#why-us"
          className="hidden md:inline-flex flex-col items-center justify-center text-slate-400 hover:text-brand-pink transition-colors group cursor-pointer"
          aria-label="Scroll to explore more"
        >
          <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 group-hover:text-brand-pink transition-colors mb-1">
            Scroll to Explore
          </span>
          <div className="w-5 h-8 rounded-full border-2 border-slate-300 group-hover:border-brand-pink transition-colors flex items-start justify-center p-1">
            <span className="w-1.5 h-1.5 bg-brand-pink rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
}
