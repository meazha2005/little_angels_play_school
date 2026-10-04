import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingContact from "@/components/layout/FloatingContact";

export const metadata: Metadata = {
  metadataBase: new URL("https://littleangelsplayschool.com"),
  title: "LITTLE ANGELS PLAY SCHOOL | PlayGroup, PreKG, LKG, UKG in Kundrathur, Chennai",
  description:
    "Little Angels Play School is a premier early childhood educational sanctuary in Kundrathur, Chennai. Offering PlayGroup, PreKG, LKG, and UKG with child-safe infrastructure, motherly care, and play-way curriculum.",
  keywords: [
    "Little Angels Play School",
    "Playschool in Kundrathur",
    "Preschool Chennai",
    "Kindergarten Kundrathur",
    "PreKG admissions Chennai",
    "Playgroup Kundrathur",
    "LKG UKG school Chennai",
    "Best nursery school Kundrathur",
  ],
  authors: [{ name: "Little Angels Play School" }],
  icons: {
    icon: "/images/logo.jpeg",
    apple: "/images/logo.jpeg",
  },
  openGraph: {
    title: "LITTLE ANGELS PLAY SCHOOL - Kundrathur, Chennai",
    description: "Nurturing little wings to fly high with joy & curiosity. Admissions open for PlayGroup, PreKG, LKG, UKG.",
    images: ["/images/logo.jpeg"],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className="min-h-screen flex flex-col bg-[#FCFBFB] text-slate-800 selection:bg-pink-100 selection:text-brand-pink font-sans">
        <Navbar />
        <main className="flex-grow">{children}</main>
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
