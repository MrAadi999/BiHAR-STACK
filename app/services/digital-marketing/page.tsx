import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  SocialMediaIllustration, 
  PerformanceMarketingIllustration, 
  MetaGoogleAdsIllustration, 
  SEOIllustration, 
  LocalSEOGMBIllustration, 
  LeadGenIllustration, 
  InfluencerOutreachIllustration, 
  AutomatedEmailIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "Digital Marketing & Performance Services | BiharStack",
  description: "Explore all 8 Digital Marketing engines: Social Media Marketing, Performance Marketing, Meta & Google Ads, SEO, Local SEO & GMB, Lead Gen, Influencer Outreach, and Automated Email Campaigns.",
};

const serviceData: ServicePageMasterData = {
  slug: "digital-marketing",
  categoryLabel: "DIGITAL MARKETING & PERFORMANCE",
  title: "Digital Marketing & Performance",
  headline: "Digital Marketing & Performance",
  subheadline: "We engineer high-converting digital marketing systems that drive qualified leads, maximize return on ad spend (ROAS), and build long-term organic authority. Here is our complete 8-engine marketing breakdown.",
  overviewTags: [
    "Social Media",
    "Performance Marketing",
    "Meta & Google Ads",
    "SEO",
    "Local GMB",
    "Lead Gen",
    "Influencer Outreach",
    "Email Automation"
  ],
  heroIllustration: <SocialMediaIllustration />,

  rows: [
    // 1. Social Media Marketing
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      illustration: <SocialMediaIllustration />,
      description: [
        "Social media is more than just a platform; it's the stage where your brand can shine. In a world where every brand is vying for attention, genuine engagement is what sets you apart. We craft dynamic social media strategies designed to boost engagement, increase brand awareness, and foster real connections with your audience.",
        "Whether it's growing your followers or sparking meaningful interactions, we help amplify your presence across Instagram, Facebook, LinkedIn, and more. From aesthetic 30-day feed calendars and viral Reels hook scripts to daily community management, we transform your social media into a powerful tool for growth."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Social+Media+Marketing"
    },

    // 2. Performance Marketing
    {
      id: "performance-marketing",
      title: "Performance Marketing",
      illustration: <PerformanceMarketingIllustration />,
      description: [
        "Stop guessing and start scaling with data-driven paid advertising. Our performance marketing approach focuses strictly on measurable outcomes—slashing Customer Acquisition Cost (CAC), maximizing Return on Ad Spend (ROAS), and driving sustained revenue growth.",
        "We continuously test audience demographics, ad copy variations, creative video angles, and post-click landing page funnels so that every single rupee you invest generates trackable, profitable returns."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Performance+Marketing"
    },

    // 3. Meta Ads & Google Ads
    {
      id: "meta-google-ads",
      title: "Meta Ads & Google Ads",
      illustration: <MetaGoogleAdsIllustration />,
      description: [
        "Capture customers at the exact moment of high intent. Over 3 billion users scroll Meta apps daily, while billions search Google with purchasing intent. We build full-funnel paid advertising campaigns across Facebook, Instagram, Google Search, Shopping, and YouTube.",
        "From instant WhatsApp click-to-chat ad funnels and dynamic product catalog ads to high-intent Google keyword bidding and negative keyword shields, we ensure your budget reaches verified buyers ready to transact."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Meta+Ads+and+Google+Ads"
    },

    // 4. Search Engine Optimization (SEO)
    {
      id: "search-engine-optimization",
      title: "Search Engine Optimization (SEO)",
      illustration: <SEOIllustration />,
      description: [
        "In today's crowded digital marketplace, visibility is key. Without effective SEO, your website risks being buried in search results, unseen by potential customers.",
        "By optimizing your technical structure, Core Web Vitals, schema markup, and on-page content, we help you climb to #1 on Google and capture organic commercial traffic that compounds month after month without paying for every click."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Search+Engine+Optimization"
    },

    // 5. Local SEO & GMB Ranking
    {
      id: "local-seo-gmb",
      title: "Local SEO & GMB Ranking",
      illustration: <LocalSEOGMBIllustration />,
      description: [
        "Dominate your city and neighborhood. When potential customers search for retail stores, clinics, showrooms, or local services 'near me', ranking in the coveted Top 3 Google Map Pack is essential.",
        "We handle complete Google Business Profile optimization, local directory citations (NAP consistency), geo-tagged photo updates, and automated 5-star review generation systems that drive phone calls and footfall daily."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Local+SEO+and+GMB"
    },

    // 6. High-Converting Lead Gen
    {
      id: "high-converting-lead-gen",
      title: "High-Converting Lead Gen",
      illustration: <LeadGenIllustration />,
      description: [
        "Traffic without conversion is just an expensive expense. We engineer frictionless, single-focus landing pages and automated lead capture funnels that turn cold visitors into qualified, sales-ready prospects.",
        "Equipped with instant lead qualification, interactive multi-step forms, and automated CRM notifications to your sales team within 10 seconds, your close rates multiply drastically."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=High-Converting+Lead+Gen"
    },

    // 7. Influencer Outreach
    {
      id: "influencer-outreach",
      title: "Influencer Outreach",
      illustration: <InfluencerOutreachIllustration />,
      description: [
        "Influencers aren't just trendsetters—they are trusted voices who authentically connect with your target demographic. We pair authentic creator outreach with verified audience vetting, price negotiation, and creative script briefing.",
        "Whether it is micro-creators with hyper-engaged regional followings or national macro-influencers, we manage end-to-end product seeding and trackable promo campaigns that spark viral social proof."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Influencer+Outreach"
    },

    // 8. Automated Email Campaigns
    {
      id: "automated-email-campaigns",
      title: "Automated Email Campaigns",
      illustration: <AutomatedEmailIllustration />,
      description: [
        "Retain your hard-earned customers and turn one-time buyers into lifelong brand advocates. We build automated email sequences that nurture leads, welcome new subscribers, and recover abandoned carts on complete autopilot.",
        "With advanced customer segmentation, A/B tested subject lines, and 100% deliverability configuration (SPF, DKIM, DMARC), your email list becomes your highest-margin revenue channel."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Automated+Email+Campaigns"
    }
  ],

  faqs: [
    {
      q: "How soon can we expect results from digital marketing campaigns?",
      a: "Paid ad campaigns on Meta and Google Ads generate targeted inquiries and sales within 48 to 72 hours of launch. Compounding organic SEO typically takes 60 to 90 days to climb to Page 1 of Google."
    },
    {
      q: "Do you create all ad creatives, video hooks, and captions?",
      a: "Yes, 100%. Our in-house creative team designs custom banners, writes viral hook scripts for Reels and Shorts, and crafts high-converting copy so you never need to hire separate freelancers."
    },
    {
      q: "How do we track our return on ad spend (ROAS)?",
      a: "We set up server-side conversion tracking (Meta CAPI, Google Tag Manager, GA4) and provide a live 24/7 executive dashboard showing your exact spend, cost per lead, and revenue generated."
    },
    {
      q: "Can we choose specific marketing engines instead of all 8?",
      a: "Absolutely. We customize our engagement based on your immediate business priorities—whether you need pure local GMB lead generation, full-funnel Meta/Google ads, or compounding SEO."
    }
  ],

  ctaHeadline: "Ready to scale your business with predictable marketing?",
  ctaSubheadline: "Tell us about your brand goals. We'll build a tailored digital marketing growth proposal."
};

export default function DigitalMarketingPage() {
  return <ServiceDetailLayout data={serviceData} />;
}
