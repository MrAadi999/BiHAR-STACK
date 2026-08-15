import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  LogoDesignIllustration, 
  SocialMediaIllustration, 
  UIUXIllustration, 
  VideoEditingIllustration, 
  PackagingIllustration, 
  BrandingIllustration, 
  PerformanceMarketingIllustration, 
  LeadGenIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "Branding & Creative Design Agency | BiharStack",
  description: "Explore all 8 Branding & Creative engines: Logo & Brand Identity, Graphic & Social Creatives, UI/UX Design, Motion & 3D, Video Editing, Packaging, Brand Guidelines, and Marketing Collaterals.",
};

const serviceData: ServicePageMasterData = {
  slug: "branding-creative",
  categoryLabel: "BRANDING & CREATIVE DESIGN",
  title: "Branding & Creative Design",
  headline: "Branding & Creative Design",
  subheadline: "In a world of noise, only brands with distinct identity stand out. We craft iconic logos, high-converting social graphics, bespoke UI/UX designs, 3D packaging, and cinematic video edits that make your brand unforgettable.",
  overviewTags: [
    "Logo & Brand Identity",
    "Graphic & Social Creatives",
    "UI/UX Design",
    "Motion & 3D",
    "Video Production",
    "Product Packaging",
    "Brand Guidelines",
    "Collaterals"
  ],
  heroIllustration: <LogoDesignIllustration />,

  rows: [
    // 1. Logo & Visual Brand Identity
    {
      id: "logo-brand-identity",
      title: "Logo & Visual Brand Identity",
      illustration: <LogoDesignIllustration />,
      description: [
        "Your logo is the signature of your business. It is the first impression that sets the tone for everything your company stands for.",
        "We don't use generic stock templates. We design custom vector geometry rooted in brand psychology, color theory, and timeless balance. From primary marks and monograms to comprehensive vector source files (AI, SVG, EPS), we ensure your identity commands instant authority across digital and print."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Logo+and+Visual+Brand+Identity"
    },

    // 2. Graphic & Social Media Creatives
    {
      id: "graphic-social-creatives",
      title: "Graphic & Social Media Creatives",
      illustration: <SocialMediaIllustration />,
      description: [
        "In an endless feed of content, only scroll-stopping visuals capture customer attention. We produce high-production social post banners, educational carousels, festival flash sale graphics, and infographics tailored to elevate your feed.",
        "Whether it is monthly Instagram grid curation or multi-platform display ad banners, our creative squad ensures every pixel reflects luxury, authority, and consistency."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Graphic+and+Social+Creatives"
    },

    // 3. UI/UX Design for Web & Apps
    {
      id: "uiux-design",
      title: "UI/UX Design for Web & Apps",
      illustration: <UIUXIllustration />,
      description: [
        "Designs that don't just look visually stunning — they feel effortless to use. We create frictionless, modern user journeys for websites and mobile applications that reduce bounce rates and maximize checkout completions.",
        "From low-fidelity wireframes to interactive Figma prototypes and scalable design token systems, we craft digital experiences your users love."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=UI+UX+Design"
    },

    // 4. Motion Graphics & 3D Visuals
    {
      id: "motion-graphics-3d",
      title: "Motion Graphics & 3D Visuals",
      illustration: <LogoDesignIllustration />,
      description: [
        "Static visuals inform; motion captivates. We produce 2D and 3D animated logo reveal stings, kinetic typography explainers, and 3D product renders that give your brand a high-tech, futuristic presence.",
        "Integrated with lightweight Lottie web animations and high-bitrate video formats, your brand stays dynamic across presentations, apps, and video intros."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Motion+Graphics+and+3D"
    },

    // 5. High-Production Video Editing
    {
      id: "video-editing",
      title: "High-Production Video Editing",
      illustration: <VideoEditingIllustration />,
      description: [
        "Video is the highest-converting medium on the internet. We edit raw footage into cinematic stories with cinema-grade color grading, sound design (SFX), animated kinetic captions, and scroll-stopping hooks.",
        "From viral 9:16 Reels and Shorts to long-form YouTube documentary edits and brand films, we ensure your videos hold maximum viewer retention from start to finish."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Video+Editing"
    },

    // 6. Product Branding & Packaging
    {
      id: "product-branding-packaging",
      title: "Product Branding & Packaging",
      illustration: <PackagingIllustration />,
      description: [
        "Your physical product deserves an undeniable shelf presence. We design custom box packaging, stand-up pouch bags, bottle labels, and cans with complete print-ready vector dielines and compliance formatting.",
        "Combined with 4K photorealistic 3D renders for Amazon and Flipkart store listings, your packaging sells before customers even read the label."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Product+Branding+and+Packaging"
    },

    // 7. Brand Guidelines & Voice
    {
      id: "brand-guidelines-voice",
      title: "Brand Guidelines & Voice",
      illustration: <BrandingIllustration />,
      description: [
        "Maintain 100% brand consistency across all marketing touchpoints. We compile a comprehensive 25+ page Master Brand Identity Bible (PDF) covering logo clear space, color swatches (Pantone/CMYK/RGB), font scales, and tone of voice rules.",
        "This master document ensures your internal team, agency partners, and vendors maintain consistent visual authority forever."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Brand+Guidelines+and+Voice"
    },

    // 8. Marketing Collaterals
    {
      id: "marketing-collaterals",
      title: "Marketing Collaterals",
      illustration: <LeadGenIllustration />,
      description: [
        "Equip your sales team with world-class offline and digital collateral. We design luxury visiting cards (NFC smart cards, matte, spot UV), company profile brochures, investor pitch decks, roll-up standees, and exhibition booth backdrops.",
        "Make every meeting and trade show appearance an undeniable display of corporate excellence."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Marketing+Collaterals"
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
      q: "Are the packaging designs ready for direct printing?",
      a: "Yes. We deliver millimeter-accurate dielines with proper bleeds, crop marks, CMYK offset color separation, and spot foil layers that can be sent straight to any packaging printing facility."
    }
  ],

  ctaHeadline: "Ready to build a brand you are truly proud of?",
  ctaSubheadline: "Let's craft an identity that makes your competitors look ordinary. Book your creative consultation today."
};

export default function BrandingCreativePage() {
  return <ServiceDetailLayout data={serviceData} />;
}
