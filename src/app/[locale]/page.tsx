"use client";

import { Navbar } from "@/components/layout/Navbar";
import { Hero } from "./_components/Hero";
import { AboutFact } from "./_components/AboutFact";
import { VideoAndPillars } from "./_components/VideoAndPillars";
import { RecentPublications } from "./_components/RecentPublications";
import { LatestBooks } from "./_components/LatestBooks";
import { NewsSection } from "./_components/NewsSection";

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
    </div>
  );
}
