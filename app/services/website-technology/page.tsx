import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  WebTechIllustration, 
  SEOIllustration, 
  DigitalMarketingIllustration, 
  BrandingIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "Website & Custom Technology Agency | BiharStack",
  description: "Next.js 14 Custom Websites, E-Commerce Platforms, iOS/Android Mobile Apps, SaaS Engineering & Speed Optimization.",
};

const serviceData: ServicePageMasterData = {
  slug: "website-technology",
  categoryLabel: "CUSTOM TECHNOLOGY & APPS",
  title: "Website & Custom Technology",
  headline: "Website & Custom Technology",
  subheadline: "Slow, broken, or template websites cost you customers. We engineer fast, beautiful, conversion-focused digital products and scalable mobile applications built on modern Next.js architecture.",
  overviewTags: [
    "Next.js 14 Web",
    "E-Commerce Stores",
    "iOS & Android Apps",
    "SaaS Platforms",
    "API & Speed Optimization"
  ],
  heroIllustration: <WebTechIllustration />,

  rows: [
    // 1. Custom Business Websites
    {
      id: "custom-websites",
      title: "Custom Business Websites",
      illustration: <WebTechIllustration />,
      description: [
        "Your website is your 24/7 digital headquarters. It must load instantaneously and present absolute authority to every visitor.",
        "We build sub-second, server-side rendered (SSR) Next.js 14 websites with bespoke designs (no generic WordPress templates). Integrated with headless CMS systems, contact forms, WhatsApp triggers, and built-in technical SEO, your site effortlessly turns traffic into inquiries.",
        "Launch a digital presence that puts your business front and center."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Custom+Business+Websites"
    },

    // 2. E-Commerce Platforms
    {
      id: "ecommerce-platforms",
      title: "E-Commerce Platforms & Stores",
      illustration: <DigitalMarketingIllustration />,
      description: [
        "Online stores engineered to convert visitors into orders. We build high-speed e-commerce storefronts with instantaneous product search, seamless category filtering, 1-click Razorpay/PhonePe UPI checkout, and automated WhatsApp order tracking.",
        "From custom Next.js storefronts to Shopify Plus setups, we eliminate checkout friction and reduce cart abandonment to maximize your average order value.",
        "Turn casual visitors into repeat buyers with a frictionless shopping experience."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=E-Commerce+Platforms"
    },

    // 3. Mobile App Development
    {
      id: "mobile-apps",
      title: "iOS & Android Mobile Apps",
      illustration: <SEOIllustration />,
      description: [
        "Engage your customers wherever they go. We design and build cross-platform mobile apps for iOS and Android that deliver buttery-smooth 60 FPS performance, push notifications, offline storage, and seamless biometric logins.",
        "We manage the entire engineering cycle from mobile UI/UX and React Native / Flutter engineering to Apple App Store & Google Play Store publishing."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Mobile+App+Development"
    },

    // 4. SaaS Platform Development
    {
      id: "saas-platforms",
      title: "SaaS Platform Development",
      illustration: <WebTechIllustration />,
      description: [
        "Turn your software concept into a high-margin recurring subscription business. We build multi-tenant SaaS architectures complete with automated Stripe/Razorpay billing, user tenant isolation, usage metrics, and super-admin panels.",
        "Built to scale from day one, your SaaS platform will effortlessly support 100 users or 100,000 without architectural rewrites."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=SaaS+Platform+Development"
    },

    // 5. Speed & Core Web Vitals Optimization
    {
      id: "speed-optimization",
      title: "Speed & Core Web Vitals Optimization",
      illustration: <SEOIllustration />,
      description: [
        "A slow website kills conversions and damages Google rankings. We perform deep speed audits and code refactoring to ensure your site scores 90+ on Google Lighthouse and loads in under 1.5 seconds.",
        "We compress assets into next-gen WebP/AVIF formats, eliminate render-blocking CSS/JS, and configure global edge CDN caching."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Speed+Optimization"
    }
  ],

  faqs: [
    {
      q: "How long does a website take to build?",
      a: "A custom 5 to 10 page Next.js business website takes 7 to 10 business days. An e-commerce store takes 2 to 3 weeks. Custom full-stack web applications and SaaS platforms take 4 to 8 weeks."
    },
    {
      q: "Will we be able to edit text and products ourselves without coding?",
      a: "Yes, 100%. We integrate user-friendly headless CMS solutions (such as Sanity, Strapi, or Supabase) so your team can easily update content, upload images, add products, and view leads without touching any code."
    },
    {
      q: "Do we own the full source code upon completion?",
      a: "Yes, 100%. You receive complete ownership of all source code repositories (GitHub/GitLab), database credentials, deployment configs, and API keys."
    }
  ],

  ctaHeadline: "Ready to build digital products that actually perform?",
  ctaSubheadline: "Tell us what you want to build. We'll provide a clear roadmap, technical blueprint, and quote."
};

export default function WebsiteTechnologyPage() {
  return <ServiceDetailLayout data={serviceData} />;
}
