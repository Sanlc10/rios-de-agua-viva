import HeroSection from "@/components/HeroSection";
import ManageTasksSection from "@/components/ManageTasksSection";
import PricingSection from "@/components/PricingSection";
import SmartCalendarSection from "@/components/SmartCalendarSection";
import GetStartedSection from "@/components/GetStartedSection";
import Footer from "@/components/Footer";

import Navbar from "@/components/Navbar";
import AIFeaturesSection from "@/components/AIFeaturesSection";
import TestimonialsSection from "@/components/TestimonialsSection";

export default function Home() {
  return (
    <main className="flex flex-col min-h-screen">
      <Navbar />
      <HeroSection />
      <SmartCalendarSection />
      <AIFeaturesSection />
      <ManageTasksSection />
      <PricingSection />
      <TestimonialsSection />
      <GetStartedSection />
      <Footer />
    </main>
  );
}
