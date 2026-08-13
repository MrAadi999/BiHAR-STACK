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
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#f0f0f0] text-slate-100 relative w-full max-w-full overflow-x-hidden selection:bg-electric-600 selection:text-white">
      {/* 1. Processing Loading Screen */}
      <LoadingScreen />

      {/* 2. Realistic Theater Curtain Reveal Overlay */}
      <TheaterCurtain />

      {/* 2. Sticky Navigation */}
      <Navbar />

      {/* 3. Hero Section */}
      <HeroSection />

      {/* 4. Trusted By / Partner Marquee Bar */}
      <StatsMarqueeSection />

      {/* 5. Who We Are (3D Holographic Sphere + Core Mission) */}
      <WhoWeAreSection />

      {/* 6. Bihar Digital Highway / Tech Infrastructure Section */}
      <TechHighwaySection />

      {/* 7. What We Offer / 3D Interactive Services Stack */}
      <ServicesSection />

      {/* 8. Why Choose Us (Neumorphic Glass Highlights) */}
      <WhyChooseUsSection />

      {/* 9. Interactive Live Work Portfolio & Web App Showcases */}
      <PortfolioSection />

      {/* 10. Our 4-Step Engineering Execution Process */}
      <ProcessSection />

      {/* 11. Specialized Bihar Industries We Power */}
      <IndustriesSection />

      {/* 12. Client Testimonials / Success Stories */}
      <TestimonialsSection />

      {/* 13. Transparent Pricing Packages */}
      <PricingSection />

      {/* 14. Frequently Asked Questions */}
      <FAQSection />

      {/* 15. Contact Us / Get In Touch */}
      <ContactSection />

      {/* 16. Footer */}
      <Footer />

      {/* Floating Action Utilities */}
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
}
