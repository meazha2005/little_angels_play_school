import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Camera, Sparkles } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/schoolData";

export default function GalleryPreview() {
  const previewItems = GALLERY_ITEMS.filter((item) => item.featured).slice(0, 6);

  return (
    <section className="py-16 md:py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-pink-100/70 text-brand-pink text-xs font-bold uppercase tracking-wider">
              <Camera className="w-3.5 h-3.5" />
              Life at Little Angels
            </div>
            <h2 className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
              Moments of Joy, Milestones & Celebrations
            </h2>
            <p className="text-slate-600 text-base">
              A real-life glimpse into the vibrant days of our little angels — from cultural festivals to proud graduation ceremonies.
            </p>
          </div>
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 text-sm font-bold text-brand-pink hover:text-brand-pinkHover transition-colors shrink-0 group"
          >
            <span>View Full Photo Gallery</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Photos Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {previewItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 bg-slate-100 flex flex-col"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={item.src}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/20 to-transparent opacity-80 group-hover:opacity-95 transition-opacity" />
                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-pink text-white text-[10px] font-bold uppercase tracking-wider mb-1.5">
                    {item.category === "graduation"
                      ? "Graduation"
                      : item.category === "festivals"
                      ? "Festival"
                      : "Activity"}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
                    {item.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2 opacity-90">
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Gallery CTA */}
        <div className="mt-12 text-center">
          <Link
            href="/gallery"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-slate-900 hover:bg-slate-800 text-white font-bold text-sm shadow-md hover:shadow-lg transition-all"
          >
            <Sparkles className="w-4 h-4 text-amber-400" />
            <span>Explore All School Photos & Events</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
