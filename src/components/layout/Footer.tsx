import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Clock, MessageCircle, Heart, Star, Sparkles } from "lucide-react";
import { SCHOOL_INFO, CLASSES } from "@/data/schoolData";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-16 pb-12 border-t-4 border-brand-pink relative overflow-hidden">
      {/* Decorative subtle background accents */}
      <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-brand-pink/5 blur-3xl pointer-events-none" />
      <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-amber-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8 pb-12 border-b border-slate-800">
          {/* Column 1: School Profile */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="relative w-12 h-12 rounded-full p-0.5 bg-gradient-to-tr from-brand-pink to-amber-400 shadow-md shrink-0">
                <Image
                  src="/images/logo.jpeg"
                  alt="Little Angels Play School"
                  width={48}
                  height={48}
                  className="rounded-full object-cover w-full h-full"
                />
              </div>
              <div>
                <p className="font-black text-white text-lg tracking-tight">LITTLE ANGELS</p>
                <p className="text-brand-pink text-xs font-bold tracking-wider uppercase">
                  Play School
                </p>
              </div>
            </div>

            <p className="text-sm text-slate-400 leading-relaxed">
              Exclusively dedicated to child growth and early years. We create a joyful, safe, and nurturing world where toddlers and young learners blossom into confident little stars.
            </p>

            <div className="flex items-center gap-2 pt-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-pink-950/60 border border-pink-700/50 text-pink-300 text-xs font-semibold">
                <Heart className="w-3.5 h-3.5 fill-brand-pink text-brand-pink" />
                Ages 1.5 - 6 Years Only
              </span>
            </div>
          </div>

          {/* Column 2: Our Programs */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-400" />
              Our Classes
            </h3>
            <ul className="space-y-2.5 text-sm">
              {CLASSES.map((cls) => (
                <li key={cls.id}>
                  <Link
                    href={`/classes#${cls.id}`}
                    className="hover:text-brand-pink transition-colors flex items-center justify-between group py-1"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {cls.name}
                    </span>
                    <span className="text-[11px] text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full">
                      {cls.age}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Quick Navigation */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <Star className="w-4 h-4 text-amber-400" />
              Quick Links
            </h3>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link href="/" className="hover:text-brand-pink transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="hover:text-brand-pink transition-colors">
                  About Our Philosophy
                </Link>
              </li>
              <li>
                <Link href="/classes" className="hover:text-brand-pink transition-colors">
                  Curriculum & Daily Routine
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="hover:text-brand-pink transition-colors">
                  Photo Gallery & Events
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-brand-pink transition-colors">
                  Admissions & Campus Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Location & Contact Details */}
          <div>
            <h3 className="text-white font-bold text-base mb-4 flex items-center gap-2">
              <MapPin className="w-4 h-4 text-brand-pink" />
              Visit & Contact Us
            </h3>
            <div className="space-y-3.5 text-sm text-slate-300">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-brand-pink shrink-0 mt-1" />
                <p className="text-xs leading-relaxed text-slate-300">
                  <span className="font-semibold text-white block">Little Angels Play School</span>
                  {SCHOOL_INFO.address}
                </p>
              </div>

              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-amber-400 shrink-0" />
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="hover:text-amber-300 font-bold text-white transition-colors"
                >
                  +91 {SCHOOL_INFO.phone}
                </a>
              </div>

              <div className="flex items-center gap-2.5">
                <MessageCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <a
                  href={SCHOOL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-300 text-emerald-400 font-medium transition-colors"
                >
                  WhatsApp: 9962485335
                </a>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-sky-400 shrink-0 mt-0.5" />
                <span className="text-xs text-slate-400">{SCHOOL_INFO.timings}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-400 text-center sm:text-left">
          <p>
            © {new Date().getFullYear()} <strong className="text-white">LITTLE ANGELS PLAY SCHOOL</strong>. All rights reserved.
          </p>
          <p className="flex items-center gap-1 justify-center">
            Crafted with <Heart className="w-3.5 h-3.5 text-brand-pink fill-brand-pink" /> for our little angels in Kundrathur, Chennai.
          </p>
        </div>
      </div>
    </footer>
  );
}
