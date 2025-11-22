
import { Navbar } from "@/components/layout/navbar/Navbar";
import { Hero } from "./_components/home/Hero";
import { AboutFact } from "./_components/home/AboutFact";
import { VideoAndPillars } from "./_components/home/VideoAndPillars";
import { RecentPublications } from "./_components/home/RecentPublications";
import { LatestBooks } from "./_components/home/LatestBooks";
import { NewsSection } from "./_components/home/NewsSection";
import { EventsSlider } from "./_components/home/EventsSlider";
import { TrustedPartners } from "./_components/home/TrustedPartners";
import { Footer } from "@/components/layout/footer/Footer";

export default function LocaleHome() {

  return (
    <div className="min-h-screen">
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
