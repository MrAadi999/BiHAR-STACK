import LoadingScreen from "@/components/layout/LoadingScreen";
import TheaterCurtain from "@/components/layout/TheaterCurtain";
import Navbar from "@/components/layout/Navbar";
import HeroSection from "@/components/sections/HeroSection";
import StatsMarqueeSection from "@/components/sections/StatsMarqueeSection";
import WhoWeAreSection from "@/components/sections/WhoWeAreSection";
import TechHighwaySection from "@/components/sections/TechHighwaySection";
import ServicesSection from "@/components/sections/ServicesSection";
import WhyChooseUsSection from "@/components/sections/WhyChooseUsSection";
import PortfolioSection from "@/components/sections/PortfolioSection";
import ProcessSection from "@/components/sections/ProcessSection";
import IndustriesSection from "@/components/sections/IndustriesSection";
import TestimonialsSection from "@/components/sections/TestimonialsSection";
import PricingSection from "@/components/sections/PricingSection";
import FAQSection from "@/components/sections/FAQSection";
import ContactSection from "@/components/sections/ContactSection";
import Footer from "@/components/layout/Footer";
import CustomCursor from "@/components/ui/CustomCursor";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] text-slate-100 relative w-full max-w-full overflow-x-hidden selection:bg-electric-600 selection:text-white">
      {/* 1. Processing Loading Screen */}
      <LoadingScreen />

      {/* 2. Realistic Theater Curtain Reveal Overlay */}
      <TheaterCurtain />

      {/* Interactive Custom Cursor */}
      <CustomCursor />

      {/* 2. Sticky Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Trusted By / Partner Marquee Bar */}
      <StatsMarqueeSection />

      {/* 5. Who We Are Section */}
      <WhoWeAreSection />

      {/* Interactive Tech Highway Section */}
      <TechHighwaySection />

      {/* 5. Detailed Services Section */}
      <ServicesSection />

      {/* 6. Why BiharStack */}
      <WhyChooseUsSection />

      {/* 8. Process Section */}
      <ProcessSection />

      {/* 9. Industries We Serve */}
      <IndustriesSection />

      {/* 8. Portfolio / Work Showcase */}
      <PortfolioSection />

      {/* 10. Testimonials */}
      <TestimonialsSection />

      {/* 11. Pricing */}
      <PricingSection />

      {/* 12. FAQ */}
      <FAQSection />

      {/* 13. Contact Section */}
      <ContactSection />

      {/* 14. Footer */}
      <Footer />

      {/* Floating Action Utilities */}
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
}
