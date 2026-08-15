import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  BrandingIllustration, 
  SocialMediaIllustration, 
  WebTechIllustration, 
  DigitalMarketingIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "Branding & Creative Design Agency | BiharStack",
  description: "Logo Design, Brand Identity, Social Media Creatives, UI/UX Design, Motion Graphics, Video Editing & 3D Packaging Design.",
};

const serviceData: ServicePageMasterData = {
  slug: "branding-creative",
  categoryLabel: "BRANDING & CREATIVE SERVICES",
  title: "Branding & Creative Design",
  headline: "Branding & Creative Design",
  subheadline: "In a world of noise, only brands with soul stand out. We craft visual identities, packaging, UI/UX designs, and motion media that make people feel something. Premium. Memorable. Unmistakably YOU.",
  overviewTags: [
    "Logo & Brand Identity",
    "Graphic & Social Creatives",
    "UI/UX Design",
    "Motion & 3D",
    "Product Packaging"
  ],
  heroIllustration: <BrandingIllustration />,

  rows: [
    // 1. Logo & Brand Identity
    {
      id: "logo-brand-identity",
      title: "Logo & Visual Brand Identity",
      illustration: <BrandingIllustration />,
      description: [
        "Your logo is the signature of your business. It is the first impression that sets the tone for everything your company stands for.",
        "We don't use generic stock templates. We design custom vector geometry rooted in brand psychology, color theory, and timeless balance. From primary marks and monograms to comprehensive brand books, we ensure your identity commands instant authority.",
        "Give your business an identity that looks iconic today and remains relevant for decades."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Logo+and+Brand+Identity"
    },

    // 2. Graphic & Social Media Creatives
    {
      id: "graphic-social-creatives",
      title: "Graphic & Social Media Creatives",
      illustration: <SocialMediaIllustration />,
      description: [
        "In an endless feed of content, only scroll-stopping visuals capture customer attention. We produce high-production social post banners, educational carousels, festival offers, and infographics tailored to elevate your brand presence.",
        "Whether it is monthly Instagram grid curation or multi-platform display ad banners, our design team ensures every pixel reflects luxury and consistency.",
        "Transform your social media feed into a magnet for engagement and inquiries."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Graphic+and+Social+Creatives"
    },

    // 3. UI/UX Design for Web & Apps
    {
      id: "uiux-design",
      title: "UI/UX Design for Web & Apps",
      illustration: <WebTechIllustration />,
      description: [
        "Designs that don't just look visually stunning — they feel effortless to use.",
        "We create frictionless, modern user journeys for websites and mobile applications that reduce bounce rates and maximize checkout completions. From low-fidelity wireframes to interactive Figma prototypes and scalable design systems, we craft experiences users love.",
        "Elevate your product usability and convert more visitors into loyal customers."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=UI+UX+Design"
    },

    // 4. Motion Graphics & Video Editing
    {
      id: "motion-video-editing",
      title: "Motion Graphics & Video Editing",
      illustration: <DigitalMarketingIllustration />,
      description: [
        "Static visuals inform; motion captivates. We edit raw footage into cinematic stories with cinema-grade color grading, sound design, and animated kinetic typography that holds viewer attention from frame one to the final CTA.",
        "From viral 9:16 Reels and YouTube long-form videos to 3D logo reveal animations, we give your video content world-class polish.",
        "Command attention across social platforms with high-retention video production."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Motion+Graphics+and+Video"
    },

    // 5. Product Branding & Packaging Design
    {
      id: "product-packaging",
      title: "Product Branding & Packaging",
      illustration: <BrandingIllustration />,
      description: [
        "Your physical product deserves an undeniable shelf presence. We design custom box packaging, pouch bags, bottle labels, and cans with complete print-ready dielines, barcode integration, and 3D photorealistic renders for e-commerce listings.",
        "We provide millimeter-accurate dielines, bleed separations, foil stamping specs, and photorealistic 3D renders that sell before customers even read the label."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Product+Packaging+Design"
    }
  ],

  faqs: [
    {
      q: "How many logo concepts do you provide?",
      a: "You receive 3 to 5 distinctly unique conceptual directions based on your initial creative brief. Once you pick your favorite, we offer unlimited revisions until every curve and color is 100% perfect."
    },
    {
      q: "Do we get full copyright and vector source files?",
      a: "Yes, 100%. You receive complete commercial copyright ownership along with all master vector source files (AI, EPS, SVG, PDF, Figma, and transparent 4K PNGs)."
    },
    {
      q: "Can you modernize our existing brand logo?",
      a: "Yes! Brand modernizations are our specialty. We preserve your existing recognition while modernizing typography, geometry, and color psychology for a contemporary aesthetic."
    }
  ],

  ctaHeadline: "Ready to build a brand you are truly proud of?",
  ctaSubheadline: "Let's craft an identity that makes your competitors look ordinary. Book your creative consultation today."
};

export default function BrandingCreativePage() {
  return <ServiceDetailLayout data={serviceData} />;
}
