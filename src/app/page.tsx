import HeroSection from "@/components/HeroSection";
import UpcomingEventsSection from "@/components/UpcomingEventsSection";
import LocationTimesSection from "@/components/LocationTimesSection";
import AboutUsSection from "@/components/AboutUsSection";
import JoinUsSection from "@/components/JoinUsSection";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import MinistriesSection from "@/components/MinistriesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <AboutUsSection />
      <MinistriesSection />
      <UpcomingEventsSection />
      <LocationTimesSection />
      <TestimonialsSection />
      <JoinUsSection />
      <Footer />
    </main>
  );
}
