import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  WebTechIllustration, 
  ECommerceStoreIllustration, 
  MobileAppIllustration, 
  SaaSCloudIllustration, 
  SEOIllustration, 
  LeadGenIllustration, 
  WorkflowPipelinesIllustration, 
  PerformanceMarketingIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "Website & Custom Technology Agency | BiharStack",
  description: "Explore all 8 Web & Tech engines: Custom Next.js Websites, E-Commerce Stores, Landing Pages, Web Apps, iOS/Android Apps, SaaS Platforms, APIs & Speed Optimization.",
};

const serviceData: ServicePageMasterData = {
  slug: "website-technology",
  categoryLabel: "WEBSITE & CUSTOM TECHNOLOGY",
  title: "Website & Custom Technology",
  headline: "Website & Custom Technology",
  subheadline: "Slow, broken, or template websites cost you customers. We engineer sub-second, conversion-focused websites, native mobile applications, and scalable multi-tenant SaaS systems built with modern Next.js 14 architecture.",
  overviewTags: [
    "Next.js 14 Web",
    "E-Commerce Stores",
    "Landing Pages",
    "Full-Stack Apps",
    "iOS & Android",
    "SaaS Platforms",
    "API Integration",
    "Speed Optimization"
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
        "We build sub-second, server-side rendered (SSR) Next.js 14 websites with bespoke designs (no generic WordPress templates). Integrated with headless CMS systems, contact forms, WhatsApp triggers, and built-in technical SEO, your site effortlessly turns traffic into inquiries."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Custom+Business+Websites"
    },

    // 2. E-commerce Platforms (Shopify/Next)
    {
      id: "ecommerce-platforms",
      title: "E-commerce Platforms (Shopify/Next)",
      illustration: <ECommerceStoreIllustration />,
      description: [
        "Online stores engineered to convert visitors into orders. We build high-speed e-commerce storefronts with instantaneous product search, seamless category filtering, 1-click Razorpay/PhonePe UPI checkout, and automated WhatsApp order tracking.",
        "From custom Next.js storefronts to Shopify Plus setups, we eliminate checkout friction and reduce cart abandonment to maximize your average order value."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=E-Commerce+Platforms"
    },

    // 3. High-Converting Landing Pages
    {
      id: "landing-pages",
      title: "High-Converting Landing Pages",
      illustration: <LeadGenIllustration />,
      description: [
        "Single-focus sales pages engineered specifically to convert paid ad traffic. We combine persuasive direct-response copywriting with sub-second page load speeds and prominent call-to-action triggers.",
        "Equipped with A/B split testing and Hotjar heatmap analytics, we ensure your ad clicks turn into confirmed leads and revenue."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=High-Converting+Landing+Pages"
    },

    // 4. Full-Stack Custom Web Apps
    {
      id: "custom-web-apps",
      title: "Full-Stack Custom Web Apps",
      illustration: <WebTechIllustration />,
      description: [
        "Tailored business software designed around your exact operational workflows. We build secure full-stack web applications featuring Role-Based Access Control (RBAC), multi-level admin panels, PostgreSQL/MongoDB databases, and automated reporting.",
        "Whether it is an internal ERP, customer billing portal, or logistics management system, we build clean, documented, and secure software."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Full-Stack+Custom+Web+Apps"
    },

    // 5. iOS & Android Mobile Apps
    {
      id: "mobile-apps",
      title: "iOS & Android Mobile Apps",
      illustration: <MobileAppIllustration />,
      description: [
        "Put your business directly in every customer's pocket. We build high-performance cross-platform mobile apps for iOS and Android delivering buttery-smooth 60 FPS performance, push notifications, offline data storage, and biometric authentication.",
        "We manage the entire engineering cycle from mobile UI/UX to Apple App Store & Google Play Store publishing."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=iOS+and+Android+Mobile+Apps"
    },

    // 6. SaaS Platform Development
    {
      id: "saas-platforms",
      title: "SaaS Platform Development",
      illustration: <SaaSCloudIllustration />,
      description: [
        "Turn your software concept into a recurring monthly revenue engine. We architect multi-tenant SaaS platforms with automated subscription billing (Stripe/Razorpay Subscriptions), user tenant isolation, usage metrics, and super-admin panels.",
        "Built to scale from day one, your SaaS platform will effortlessly support 100 users or 100,000 without architectural rewrites."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=SaaS+Platform+Development"
    },

    // 7. REST & GraphQL API Integration
    {
      id: "api-integration",
      title: "REST & GraphQL API Integration",
      illustration: <WorkflowPipelinesIllustration />,
      description: [
        "Seamless connectivity across your entire technology stack. We develop and integrate secure RESTful and GraphQL APIs connecting payment gateways, shipping couriers, WhatsApp Cloud API, and external databases.",
        "With self-healing webhooks and automated rate limiting, your applications communicate with zero downtime."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=API+Integration"
    },

    // 8. Speed & Core Web Vitals Optimization
    {
      id: "speed-optimization",
      title: "Speed & Core Web Vitals Optimization",
      illustration: <PerformanceMarketingIllustration />,
      description: [
        "A slow website kills sales and ranks poorly on Google. We perform deep speed audits and code refactoring to ensure your site scores 90+ on Google Lighthouse and loads in under 1.5 seconds.",
        "We compress assets into next-gen WebP/AVIF formats, eliminate render-blocking CSS/JS, and configure global edge CDN caching."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Speed+and+Core+Web+Vitals"
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
