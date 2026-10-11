"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { X, Sparkles, ArrowRight } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function AdmissionsPopup() {
  const [isOpen, setIsOpen] = useState(true);

  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsOpen(false);
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center bg-slate-950/70 p-4 backdrop-blur-sm"
      onClick={() => setIsOpen(false)}
    >
      <section
        aria-labelledby="admissions-popup-title"
        aria-modal="true"
        className="relative grid w-full max-w-3xl overflow-hidden rounded-3xl bg-white shadow-2xl md:grid-cols-2"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
      >
        <button
          aria-label="Close admissions popup"
          className="absolute right-3 top-3 z-10 rounded-full bg-white/90 p-2 text-slate-700 shadow transition hover:bg-white hover:text-brand-pink focus:outline-none focus:ring-2 focus:ring-brand-pink"
          onClick={() => setIsOpen(false)}
          type="button"
        >
          <X className="h-5 w-5" />
        </button>

        <div className="relative min-h-56 md:min-h-[420px]">
          <Image
            alt="Little Angels Play School Vijayadashami celebration"
            className="object-cover"
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            src="/images/photos/15.png"
          />
        </div>

        <div className="flex flex-col items-start justify-center p-6 sm:p-9">
          <span className="mb-4 inline-flex items-center gap-2 rounded-full bg-pink-50 px-3 py-1.5 text-xs font-bold uppercase tracking-wide text-brand-pink">
            <Sparkles className="h-4 w-4" />
            Admissions Open
          </span>
          <h2
            className="text-2xl font-black leading-tight text-slate-900 sm:text-3xl"
            id="admissions-popup-title"
          >
            Vijayadashami Admissions Open for Academic Year 2026–2027
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-slate-600">
            Begin your child&apos;s learning journey with Little Angels Play School.
            Get in touch with us to enquire about admissions.
          </p>
          <a
            className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-brand-pink to-brand-pinkHover px-5 py-3 text-sm font-bold text-white shadow-soft transition hover:-translate-y-0.5 hover:shadow-glow"
            href={SCHOOL_INFO.whatsappUrl}
            rel="noopener noreferrer"
            target="_blank"
          >
            Enquire for Admission
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
}
