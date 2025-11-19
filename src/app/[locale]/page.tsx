"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./_components/Hero";
import { AboutFact } from "./_components/AboutFact";
import { VideoAndPillars } from "./_components/VideoAndPillars";
import { RecentPublications } from "./_components/RecentPublications";
import { LatestBooks } from "./_components/LatestBooks";
import { NewsSection } from "./_components/NewsSection";
import { EventsSlider } from "./_components/EventsSlider";
import { TrustedPartners } from "./_components/TrustedPartners";
import { Footer } from "@/components/layout/footer/Footer";

export default function LocaleHome() {
  
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <AboutFact />
      <VideoAndPillars />
      <RecentPublications />
      <LatestBooks />
      <NewsSection />
      <EventsSlider />
      <TrustedPartners />
      <Footer />
    </div>
  );
}
