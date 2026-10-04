import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ClassesPreview from "@/components/home/ClassesPreview";
import GalleryPreview from "@/components/home/GalleryPreview";
import Testimonials from "@/components/home/Testimonials";
import CtaBanner from "@/components/home/CtaBanner";

export default function HomePage() {
  return (
    <div>
      <HeroSection />
      <WhyChooseUs />
      <ClassesPreview />
      <GalleryPreview />
      <CtaBanner />
    </div>
  );
}
