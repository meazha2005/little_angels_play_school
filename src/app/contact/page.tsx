"use client";

import React from "react";
import { Phone, MapPin, Clock, MessageCircle } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export default function ContactPage() {
  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-pink-50/70 via-white to-white overflow-hidden border-b border-pink-100/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-brand-pink text-xs font-bold uppercase tracking-wider">
            <MessageCircle className="w-3.5 h-3.5" />
            Admissions & Inquiries
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Contact <span className="text-brand-pink">Little Angels</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            We'd love to welcome you and your child to our campus in Kundrathur. Reach out by phone, WhatsApp, or visit our campus directly.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="py-16 md:py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto space-y-3 mb-12">
            <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
              Get in Touch Directly
            </span>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
              We are Always Here to Assist Parents
            </h2>
            <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
              Call our admission counselor directly for prompt answers on fees, age eligibility, and campus visit timings.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Contact Card 1: Phone */}
            <div className="p-6 sm:p-8 rounded-3xl bg-pink-50/50 border border-pink-100 hover:border-pink-300 transition-colors flex items-start gap-5 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-brand-pink text-white flex items-center justify-center shrink-0 shadow-sm">
                <Phone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Call Us Directly
                </h3>
                <a
                  href={`tel:${SCHOOL_INFO.phone}`}
                  className="text-xl sm:text-2xl font-extrabold text-slate-900 hover:text-brand-pink transition-colors block mt-1"
                >
                  +91 {SCHOOL_INFO.phone}
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  Available Mon–Sat: 8:30 AM to 5:30 PM
                </p>
              </div>
            </div>

            {/* Contact Card 2: WhatsApp */}
            <div className="p-6 sm:p-8 rounded-3xl bg-emerald-50/50 border border-emerald-100 hover:border-emerald-300 transition-colors flex items-start gap-5 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-emerald-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MessageCircle className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Chat on WhatsApp
                </h3>
                <a
                  href={SCHOOL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-lg sm:text-xl font-extrabold text-emerald-700 hover:text-emerald-800 transition-colors block mt-1"
                >
                  Send Instant Message
                </a>
                <p className="text-xs text-slate-500 mt-1">
                  Quick response for brochure, syllabus & fee details
                </p>
              </div>
            </div>

            {/* Contact Card 3: Address */}
            <div className="p-6 sm:p-8 rounded-3xl bg-amber-50/50 border border-amber-100 hover:border-amber-300 transition-colors flex items-start gap-5 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-amber-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <MapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  Campus Address
                </h3>
                <p className="text-base font-bold text-slate-900 mt-1 leading-relaxed">
                  {SCHOOL_INFO.name}
                </p>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {SCHOOL_INFO.address}
                </p>
              </div>
            </div>

            {/* Contact Card 4: Hours */}
            <div className="p-6 sm:p-8 rounded-3xl bg-sky-50/50 border border-sky-100 hover:border-sky-300 transition-colors flex items-start gap-5 shadow-xs">
              <div className="w-14 h-14 rounded-2xl bg-sky-500 text-white flex items-center justify-center shrink-0 shadow-sm">
                <Clock className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  School & Office Hours
                </h3>
                <p className="text-base font-bold text-slate-900 mt-1">
                  {SCHOOL_INFO.timings}
                </p>
                <p className="text-xs text-slate-500 mt-1">
                  Sunday Closed
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Location Section */}
      <section className="py-12 bg-slate-50 border-t border-slate-200">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-soft">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
              <div>
                <h3 className="text-xl font-black text-slate-900 flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-brand-pink" />
                  Campus Location in Kundrathur, Chennai
                </h3>
                <p className="text-xs sm:text-sm text-slate-500 mt-1">
                  Plot no : 461 , 7 th west street, sree metha nagar , kundrathur, chennai - 69
                </p>
              </div>

              <a
                href="https://maps.google.com/?q=Little+Angels+Play+School+Kundrathur+Chennai"
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-2.5 rounded-full bg-slate-100 hover:bg-brand-pink hover:text-white text-slate-800 text-xs font-bold transition-all shrink-0 text-center"
              >
                Open in Google Maps
              </a>
            </div>

            {/* Map Frame */}
            <div className="w-full h-80 rounded-2xl overflow-hidden border border-slate-200 shadow-inner">
              <iframe
                src="https://maps.google.com/maps?q=12.9991,80.0818&z=15&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Little Angels Play School Kundrathur Map"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
