import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Heart, Sparkles, ShieldCheck, Smile, BookOpen, Users, CheckCircle2, ArrowRight, Award } from "lucide-react";
import { SCHOOL_INFO } from "@/data/schoolData";

export const metadata = {
  title: "About Us | LITTLE ANGELS PLAY SCHOOL - Kundrathur",
  description:
    "Learn about Little Angels Play School in Kundrathur. Dedicated exclusively to child growth, early education, safety, and joyous foundational learning.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Page Hero Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-pink-50/70 via-white to-white overflow-hidden border-b border-pink-100/60">
        <div className="absolute top-0 right-0 w-96 h-96 bg-pink-100/50 rounded-full blur-3xl -z-10 pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-100/40 rounded-full blur-3xl -z-10 pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-brand-pink text-xs font-bold uppercase tracking-wider">
            <Heart className="w-3.5 h-3.5 fill-brand-pink" />
            Our Heartfelt Story
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            About <span className="text-brand-pink">Little Angels</span> Play School
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Founded with pure love for early childhood. A joyful haven in Kundrathur created exclusively for children aged 1.5 to 6 years old.
          </p>
        </div>
      </section>

      {/* Main Philosophy & Founder Message */}
      <section className="py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: Visual collage */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-100 aspect-[4/3]">
                <Image
                  src="/images/photos/6.jpeg"
                  alt="Little Angels students and caring teachers in pink uniforms"
                  fill
                  className="object-cover"
                />
              </div>

              {/* Floating child-only focus tag */}
              <div className="absolute -bottom-6 -right-4 sm:-right-6 bg-white p-4 rounded-2xl shadow-xl border border-pink-100 max-w-xs flex items-center gap-3">
                <div className="w-12 h-12 rounded-xl bg-pink-50 text-brand-pink flex items-center justify-center shrink-0">
                  <Smile className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-black text-slate-900">Exclusively for Children</p>
                  <p className="text-[11px] text-slate-500">Every single resource is scaled down for young minds.</p>
                </div>
              </div>
            </div>

            {/* Right Column: Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-brand-pink">
                  Our Guiding Philosophy
                </span>
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-slate-900 leading-tight">
                  Where Every Child is Welcomed as an Angel of Potential
                </h2>
              </div>

              <p className="text-slate-600 leading-relaxed text-base">
                At <strong>LITTLE ANGELS PLAY SCHOOL</strong>, we believe the formative years between 1.5 and 6 form the bedrock for all future learning, emotional resilience, and character. We do not rush childhood. Instead, we cultivate curiosity through playful discovery, warm encouragement, and loving individual care.
              </p>

              <p className="text-slate-600 leading-relaxed text-base">
                Located in the serene residential neighborhood of Sree Metha Nagar, Kundrathur, our campus is intentionally designed without intimidating high-school structures. It is an intimate, secure, and warm wonderland where little ones feel just as safe and cherished as they do at home.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-pink-50/60 border border-pink-100 flex items-start gap-3">
                  <Heart className="w-5 h-5 text-brand-pink shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Motherly Compassion</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Trained educators who listen, comfort, and celebrate every small achievement.</p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-amber-50/60 border border-amber-100 flex items-start gap-3">
                  <Sparkles className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="font-bold text-slate-900 text-sm">Play-Based Curriculum</h3>
                    <p className="text-xs text-slate-500 mt-0.5">Sensory tactile tables, phonics, numbers, stories, and joyful music.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-pink-100 shadow-soft relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-pink-500 text-white flex items-center justify-center mb-6 shadow-md">
                <Sparkles className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Our Vision</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To be the most trusted and loving early childhood nursery in Kundrathur and Chennai, inspiring a lifelong love of learning, self-expression, and empathetic social bonds in every child who walks through our doors.
              </p>
            </div>

            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-white border-2 border-amber-100 shadow-soft relative overflow-hidden">
              <div className="w-12 h-12 rounded-2xl bg-amber-500 text-white flex items-center justify-center mb-6 shadow-md">
                <BookOpen className="w-6 h-6" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-4">Our Mission</h3>
              <p className="text-slate-600 leading-relaxed text-sm sm:text-base">
                To nurture each child's unique cognitive, emotional, and social development through an experiential Montessori-inspired play curriculum, supported by certified caregivers and a safe, joyful, and culturally rich environment.
              </p>
            </div>
          </div>
        </div>
      </section>


      {/* Graduation Day Callout */}
      <section className="py-16 bg-gradient-to-r from-pink-50 via-purple-50 to-amber-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 sm:p-12 shadow-card border border-pink-100 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-amber-100 text-amber-800 text-xs font-bold">
                <Award className="w-3.5 h-3.5 text-amber-600" />
                A Proud Milestone
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-slate-900">
                The Signature KG Graduation Convocation
              </h3>
              <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
                Every year, we celebrate our UKG graduates with authentic academic graduation caps, robes, and diplomas on stage in front of cheering families. It creates an unforgettable childhood memory and fuels immense pride and self-worth as they step forward into primary school.
              </p>
              <div className="pt-2">
                <Link
                  href="/gallery"
                  className="inline-flex items-center gap-2 font-bold text-brand-pink hover:text-brand-pinkHover transition-colors text-sm"
                >
                  <span>See Graduation Day Photos</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="lg:col-span-4 relative aspect-[4/3] rounded-2xl overflow-hidden shadow-md">
              <Image
                src="/images/photos/2.jpeg"
                alt="Graduation celebration dance"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-16 text-center bg-white border-t border-slate-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 space-y-6">
          <h2 className="text-3xl font-black text-slate-900">Come Experience Our Campus in Person</h2>
          <p className="text-slate-600 text-base">
            We warmly invite you to walk through our play classrooms, interact with our teachers, and feel the joyful energy yourself.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-2">
            <Link
              href="/contact"
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-brand-pink hover:bg-brand-pinkHover text-white font-bold text-sm shadow-soft transition-all"
            >
              Schedule a Campus Tour
            </Link>
            <a
              href={`tel:${SCHOOL_INFO.phone}`}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-sm transition-colors"
            >
              Call Us: {SCHOOL_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
