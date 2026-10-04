"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Camera, X, ChevronLeft, ChevronRight, Sparkles, Heart } from "lucide-react";
import { GALLERY_ITEMS } from "@/data/schoolData";
import { GalleryItem } from "@/types";

const CATEGORIES = [
  { id: "all", label: "All Photos (11)" },
  { id: "graduation", label: "KG Graduation Day" },
  { id: "festivals", label: "Festivals & Culture" },
  { id: "activities", label: "Class Activities & Fancy Dress" },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [selectedPhoto, setSelectedPhoto] = useState<GalleryItem | null>(null);

  const filteredItems =
    activeCategory === "all"
      ? GALLERY_ITEMS
      : GALLERY_ITEMS.filter((item) => item.category === activeCategory);

  const currentIndex = selectedPhoto
    ? filteredItems.findIndex((item) => item.id === selectedPhoto.id)
    : -1;

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex < filteredItems.length - 1) {
      setSelectedPhoto(filteredItems[currentIndex + 1]);
    } else {
      setSelectedPhoto(filteredItems[0]); // Loop around
    }
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentIndex > 0) {
      setSelectedPhoto(filteredItems[currentIndex - 1]);
    } else {
      setSelectedPhoto(filteredItems[filteredItems.length - 1]); // Loop around
    }
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header */}
      <section className="relative py-16 md:py-24 bg-gradient-to-b from-pink-50/70 via-white to-white overflow-hidden border-b border-pink-100/60 text-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-4">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pink-100 text-brand-pink text-xs font-bold uppercase tracking-wider">
            <Camera className="w-3.5 h-3.5" />
            School Photo Albums
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 tracking-tight">
            Our Little Angels <span className="text-brand-pink">Gallery</span>
          </h1>
          <p className="text-slate-600 text-base sm:text-lg max-w-2xl mx-auto leading-relaxed">
            Real smiles, real milestones. Explore our joyous graduation ceremonies, vibrant Pongal & Christmas celebrations, fancy dress competitions, and classroom activities.
          </p>
        </div>
      </section>

      {/* Category Filter Pills */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-10">
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all duration-200 ${
                activeCategory === cat.id
                  ? "bg-brand-pink text-white shadow-soft"
                  : "bg-slate-100 text-slate-700 hover:bg-pink-50 hover:text-brand-pink"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Gallery Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredItems.map((photo) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className="group cursor-pointer relative rounded-3xl overflow-hidden shadow-soft hover:shadow-2xl transition-all duration-300 bg-slate-100 border border-slate-100 hover:border-pink-200 transform hover:-translate-y-1"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={photo.src}
                  alt={photo.title}
                  fill
                  className="object-cover group-hover:scale-108 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/20 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                <div className="absolute bottom-0 inset-x-0 p-5 text-white">
                  <span className="inline-block px-2.5 py-0.5 rounded-full bg-brand-pink text-white text-[10px] font-bold uppercase tracking-wider mb-2">
                    {photo.category === "graduation"
                      ? "Graduation Ceremony"
                      : photo.category === "festivals"
                      ? "Festival & Heritage"
                      : "School Activity"}
                  </span>
                  <h3 className="font-bold text-base sm:text-lg leading-snug drop-shadow-sm">
                    {photo.title}
                  </h3>
                  <p className="text-xs text-slate-200 mt-1 line-clamp-2 opacity-90">
                    {photo.description}
                  </p>
                </div>

                {/* Click to zoom badge */}
                <div className="absolute top-4 right-4 bg-white/30 backdrop-blur-xs text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  <Camera className="w-4 h-4" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div
          className="fixed inset-0 z-50 bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200"
          onClick={() => setSelectedPhoto(null)}
        >
          {/* Close Button */}
          <button
            onClick={() => setSelectedPhoto(null)}
            className="absolute top-4 right-4 sm:top-6 sm:right-6 text-white/80 hover:text-white bg-white/10 hover:bg-white/20 p-2.5 rounded-full transition-colors z-50"
            aria-label="Close photo"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Prev Button */}
          <button
            onClick={handlePrev}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-colors z-50"
            aria-label="Previous photo"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={handleNext}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 text-white/80 hover:text-white bg-white/10 hover:bg-white/25 p-3 rounded-full transition-colors z-50"
            aria-label="Next photo"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Modal Content Box */}
          <div
            className="max-w-4xl w-full flex flex-col items-center"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative w-full max-h-[72vh] aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border-2 border-white/20">
              <Image
                src={selectedPhoto.src}
                alt={selectedPhoto.title}
                fill
                className="object-contain"
                priority
              />
            </div>

            {/* Photo Details */}
            <div className="w-full text-center text-white mt-4 space-y-1.5 px-4">
              <span className="inline-block px-3 py-1 rounded-full bg-brand-pink text-white text-xs font-bold uppercase tracking-wider">
                {selectedPhoto.category === "graduation"
                  ? "KG Graduation Day"
                  : selectedPhoto.category === "festivals"
                  ? "Festival Celebration"
                  : "Classroom & Fun Activity"}
              </span>
              <h2 className="text-lg sm:text-xl font-bold">{selectedPhoto.title}</h2>
              <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto">
                {selectedPhoto.description}
              </p>
              <p className="text-[11px] text-slate-400 pt-1">
                Photo {currentIndex + 1} of {filteredItems.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
