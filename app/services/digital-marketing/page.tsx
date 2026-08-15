import { Metadata } from "next";
import ServiceDetailLayout, { ServicePageMasterData } from "@/components/services/ServiceDetailLayout";
import { 
  SocialMediaIllustration, 
  DigitalMarketingIllustration, 
  SEOIllustration, 
  PPCIllustration 
} from "@/components/services/ServiceIllustrations";

export const metadata: Metadata = {
  title: "Best Digital Marketing Agency | BiharStack",
  description: "SMO, SMM, PPC Management, SEO, Influencer Marketing & High-Converting Lead Generation for Ambitious Brands.",
};

const serviceData: ServicePageMasterData = {
  slug: "digital-marketing",
  categoryLabel: "DIGITAL MARKETING SERVICES",
  title: "Digital Marketing & Performance",
  headline: "Digital Marketing",
  subheadline: "We boost your online presence with strategies like SEO, SMM, PPC, and influencer marketing. Our focus is on increasing engagement, driving high-intent traffic, and maximizing business conversions.",
  overviewTags: [
    "SMO",
    "SMM",
    "Campaign & PPC management",
    "SEO",
    "Influencer Marketing"
  ],
  heroIllustration: <DigitalMarketingIllustration />,

  rows: [
    // 1. Social Media Marketing (Exact match to Screenshot 1)
    {
      id: "social-media-marketing",
      title: "Social Media Marketing",
      illustration: <SocialMediaIllustration />,
      description: [
        "Social media is more than just a platform; it's the stage where your brand can shine. In a world where every brand is vying for attention, genuine engagement is what sets you apart. We craft dynamic social media strategies designed to boost engagement, increase brand awareness, and foster real connections with your audience.",
        "Whether it's growing your followers or sparking meaningful interactions, we help amplify your presence across Instagram, Facebook, LinkedIn, and more. It's time to make an impact—let's transform your social media into a powerful tool for growth."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Social+Media+Marketing"
    },

    // 2. Campaign & PPC Management (Exact match to Screenshot 4)
    {
      id: "campaign-ppc-management",
      title: "Campaign & PPC Management",
      illustration: <PPCIllustration />,
      description: [
        "In digital marketing, precision is everything. Pay-per-click (PPC) campaigns offer one of the quickest routes to measurable results, but only if you target the right audience with the right message.",
        "We design high-converting PPC strategies that ensure your ads reach the people who are most likely to convert. From keyword bidding to ad copywriting and landing page optimization, every aspect is carefully tailored to maximize your ROI.",
        "When you need to target smarter and convert faster, we're here to turn your campaigns into success stories."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Campaign+and+PPC+Management"
    },

    // 3. SEO (Exact match to Screenshot 3)
    {
      id: "search-engine-optimization",
      title: "SEO",
      illustration: <SEOIllustration />,
      description: [
        "In today's crowded digital marketplace, visibility is key.",
        "Without effective SEO, your website risks being buried in search results, unseen by potential customers. By optimizing your content and refining your website's structure, we help you climb the search rankings and drive organic traffic to your business. With a strategic approach to keyword research, on-page SEO, and content optimization, we ensure you not only rank higher but stand out in an increasingly competitive landscape.",
        "Elevate your online presence and put your business front and center."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Search+Engine+Optimization"
    },

    // 4. Local SEO & Google Business Profile
    {
      id: "local-seo-gmb",
      title: "Local SEO & GMB Ranking",
      illustration: <SocialMediaIllustration />,
      description: [
        "Own your neighborhood and city. When potential customers search for products or services 'near me', being in the top 3 of Google Maps is the difference between a ringing phone and zero footfall.",
        "We optimize your Google Business Profile, fix citations across directories, manage review generation flows, and push localized keyword signals to drive steady local walk-ins and phone calls."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Local+SEO+and+GMB"
    },

    // 5. Influencer Outreach & Retention Marketing
    {
      id: "influencer-email-marketing",
      title: "Influencer Outreach & Email Automation",
      illustration: <DigitalMarketingIllustration />,
      description: [
        "Influencers aren't just trendsetters—they are trusted voices who authentically connect with your target demographic. We pair authentic creator outreach with automated email drip sequences that nurture first-time leads into repeat loyal buyers.",
        "By carefully selecting influencers whose audience aligns with your brand and setting up high-converting abandoned cart & welcome sequences, your customer lifetime value increases drastically."
      ],
      actionText: "View More",
      actionLink: "/#contact?service=Influencer+and+Email+Marketing"
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
    }
  ],

  ctaHeadline: "Ready to scale your business with predictable marketing?",
  ctaSubheadline: "Tell us about your brand goals. We'll build a tailored digital marketing growth proposal."
};

export default function DigitalMarketingPage() {
  return <ServiceDetailLayout data={serviceData} />;
}
