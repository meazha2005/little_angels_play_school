"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Phone, MapPin, Menu, X, Sparkles, Heart, ChevronRight, MessageCircle, Clock, ShieldCheck } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/classes", label: "Classes" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact Us" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  return (
    <>
      {/* Main Sticky Navbar */}
      <header
        className={`sticky top-0 z-40 w-full transition-all duration-300 ${
          scrolled
            ? "glass-nav shadow-md py-2 border-b border-pink-100"
            : "bg-white/95 backdrop-blur-sm py-3 border-b border-slate-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo & School Title */}
          <Link href="/" className="flex items-center gap-3 group focus:outline-none">
            <div className="relative w-12 h-12 sm:w-14 sm:h-14 rounded-full p-0.5 bg-gradient-to-tr from-brand-pink via-amber-400 to-sky-400 shadow-soft group-hover:scale-105 transition-transform duration-300 shrink-0">
              <Image
                src="/images/logo.jpeg"
                alt="Little Angels Play School Logo"
                width={56}
                height={56}
                className="w-full h-full object-cover rounded-full"
                priority
              />
            </div>
            <div className="flex flex-col">
              <span className="font-extrabold text-base sm:text-lg md:text-xl text-slate-900 tracking-tight leading-tight group-hover:text-brand-pink transition-colors">
                LITTLE ANGELS
              </span>
              <div className="flex items-center gap-1.5">
                <span className="text-[11px] sm:text-xs font-bold uppercase tracking-wider text-brand-pink">
                  Play School
                </span>
                <span className="text-[10px] text-slate-400 font-normal hidden sm:inline">
                  • Metha Nagar, Kundrathur
                </span>
              </div>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-4 py-2 rounded-full font-medium text-sm transition-all duration-200 ${
                    isActive
                      ? "text-brand-pink font-bold bg-brand-pinkLight shadow-xs"
                      : "text-slate-700 hover:text-brand-pink hover:bg-pink-50/50"
                  }`}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-4 h-0.5 bg-brand-pink rounded-full" />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Desktop Action Button */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="inline-flex items-center justify-center p-2.5 rounded-full text-brand-pink hover:bg-brand-pinkLight border border-pink-200 transition-colors"
              title="Call School"
            >
              <Phone className="w-4 h-4" />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-brand-pink to-brand-pinkHover hover:from-brand-pinkHover hover:to-brand-pinkDark text-white text-sm font-bold shadow-soft hover:shadow-glow transform hover:-translate-y-0.5 transition-all duration-200"
            >
              <Heart className="w-4 h-4 fill-white" />
              <span>Enquire for Admission</span>
            </Link>
          </div>

          {/* Mobile Menu Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="p-2 rounded-full bg-pink-50 text-brand-pink border border-pink-200"
              aria-label="Call Now"
            >
              <Phone className="w-4 h-4" />
            </a>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl text-slate-700 hover:text-brand-pink hover:bg-pink-50 focus:outline-none transition-colors"
              aria-label="Toggle Menu"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Menu Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div
            className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs transition-opacity"
            onClick={() => setIsOpen(false)}
          />
          <div className="fixed inset-0 w-full h-full bg-white shadow-2xl p-5 sm:p-6 flex flex-col justify-between overflow-y-auto z-10 animate-in fade-in slide-in-from-right duration-250 sm:max-w-md sm:left-auto sm:right-0">
            <div className="space-y-4">
              {/* Drawer Header */}
              <div className="flex items-center justify-between pb-3.5 border-b border-slate-100">
                <div className="flex items-center gap-2.5">
                  <div className="relative w-11 h-11 rounded-full p-0.5 bg-gradient-to-tr from-brand-pink to-amber-400 shrink-0 shadow-sm">
                    <Image
                      src="/images/logo.jpeg"
                      alt="Logo"
                      width={44}
                      height={44}
                      className="rounded-full object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <p className="font-black text-base text-slate-900 leading-tight">LITTLE ANGELS</p>
                    <div className="flex items-center gap-1.5">
                      <p className="text-[11px] text-brand-pink font-extrabold uppercase tracking-wider">
                        Play School
                      </p>
                      <span className="text-[10px] text-slate-400">• Kundrathur</span>
                    </div>
                  </div>
                </div>
                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-full text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Close menu"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Navigation Links */}
              <div className="flex flex-col gap-1">
                {NAV_LINKS.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-bold transition-all ${
                        isActive
                          ? "bg-brand-pink text-white shadow-soft"
                          : "text-slate-700 hover:bg-pink-50 hover:text-brand-pink"
                      }`}
                    >
                      <span>{link.label}</span>
                      <ChevronRight className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* Drawer Bottom Actions */}
            <div className="pt-3 border-t border-slate-100 space-y-2.5 mt-3">
              <a
                href={`tel:${SCHOOL_INFO.phone}`}
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow transition-colors"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>Call {SCHOOL_INFO.phone}</span>
              </a>
              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-2xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm shadow transition-colors"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>
              <div className="text-center pt-1">
                <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-brand-pink">
                  <Heart className="w-3 h-3 fill-brand-pink" />
                  Admissions Open 2025-2026
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
