"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Palette, Code2, Bot, ArrowRight, Check, Sparkles, Layers, Megaphone, DollarSign, Settings, Package, Wallet,
  Share2, Target, Search, MapPin, Users, Award, Mail, Layout, Film, Video, BookOpen, Image as ImageIcon, Globe,
  ShoppingCart, Rocket, Smartphone, Cloud, Cpu, Gauge, MessageSquare, Workflow, Brain, UserPlus, ShieldCheck,
  CheckCircle2, ArrowUpRight, X, ChevronRight, Zap, Flame, BarChart3, Database, Key, Terminal, ExternalLink, HelpCircle,
  Store, ShoppingBag, Receipt, Truck, QrCode, Star, RefreshCw, Eye, Clock, CheckCheck, Boxes, PhoneCall, Gift
} from "lucide-react";

// Interactive Question Mark with Mouse Tracking Eyes & Head Tilt
function InteractiveQuestionMark() {
  const [mousePos, setMousePos] = useState({ pupilX: 0, pupilY: 0, rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.75;

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);
      const maxDist = 400;
      const ratio = Math.min(dist / maxDist, 1);
      const angle = Math.atan2(dy, dx);

      const maxPupilMove = 3.5;
      const pupilX = Math.cos(angle) * maxPupilMove * ratio;
      const pupilY = Math.sin(angle) * maxPupilMove * ratio;

      const rotateY = Math.min(Math.max(dx * 0.025, -16), 16);
      const rotateX = Math.min(Math.max(-dy * 0.025, -16), 16);

      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(() => {
        setMousePos({ pupilX, pupilY, rotateX, rotateY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="absolute top-0 sm:top-0 -right-11 sm:-right-[62px] w-14 sm:w-[68px] h-14 sm:h-[68px] pointer-events-none z-30 drop-shadow-md select-none"
      style={{ perspective: 600 }}
    >
      <motion.div 
        animate={{ 
          y: [0, -4, 0],
          rotateX: mousePos.rotateX,
          rotateY: mousePos.rotateY,
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotateX: { type: "spring", stiffness: 220, damping: 18 },
          rotateY: { type: "spring", stiffness: 220, damping: 18 },
        }}
        className="relative w-full h-full"
      >
        <img 
          src="/images/transparent_yellow_question.png" 
          alt="Yellow question mark shrugging emoji character" 
          className="w-full h-full object-contain relative z-10" 
        />
        <div 
          className="absolute z-20 bg-[#111111] rounded-full pointer-events-none"
          style={{
            width: '6.5%',
            height: '7.5%',
            left: '43%',
            top: '73.5%',
            transform: `translate(${mousePos.pupilX}px, ${mousePos.pupilY}px)`,
            transition: 'transform 0.04s ease-out',
          }}
        />
        <div 
          className="absolute z-20 bg-[#111111] rounded-full pointer-events-none"
          style={{
            width: '6.5%',
            height: '7.5%',
            left: '51%',
            top: '73.5%',
            transform: `translate(${mousePos.pupilX}px, ${mousePos.pupilY}px)`,
            transition: 'transform 0.04s ease-out',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// Supermarket Real-World Transformation Case Study Data
export const SUPERMARKET_CASE_STUDY = {
  name: "Rajeshwar Mega Mart & Supermarket",
  location: "Madhubani & Darbhanga, Bihar",
  tagline: "How We Transformed a Traditional 4,000 sq.ft. Kirana & Superstore into an Automated 30-Min Fast-Delivery Digital Giant",
  metrics: [
    { value: "+380%", label: "Online Order Growth", sub: "Via 24/7 WhatsApp AI Dukaan" },
    { value: "0.4 sec", label: "Barcode Billing Speed", sub: "Zero Counter Rush & Line Clutter" },
    { value: "18,400+", label: "Active Customers", sub: "Saved in Automated Loyalty CRM" },
    { value: "₹42 Lakhs+", label: "Monthly Digital GMV", sub: "Multiplied in 90 Days" }
  ],
  pillars: [
    {
      title: "1. Smart POS & Barcode Cloud Billing",
      icon: <Receipt className="w-5 h-5 text-cyan-400" />,
      desc: "Equipped 4 billing counters with custom touchscreen POS, sub-second barcode scanners, weighing scale sync, and thermal receipt printers.",
      supermarketUse: "Customers scan & checkout in 10 seconds. Instant digital invoice automatically sent on customer's WhatsApp."
    },
    {
      title: "2. 30-Min WhatsApp Instant Dukaan & App",
      icon: <ShoppingBag className="w-5 h-5 text-emerald-400" />,
      desc: "Built a customized e-grocery ordering web app + WhatsApp automated ordering bot with 3,500+ daily grocery items catalog.",
      supermarketUse: "Customers send their monthly ration list on WhatsApp. AI automatically builds the cart and dispatches delivery riders."
    },
    {
      title: "3. 5km Hyperlocal Meta & Google Ads",
      icon: <Target className="w-5 h-5 text-rose-400" />,
      desc: "Geo-fenced ad campaigns across a 5km radius announcing weekly 'Sabse Sasta Ration Day', festive offers, and free home delivery.",
      supermarketUse: "Targeted 85,000+ local households on Instagram & Facebook, driving both massive store footfall and online orders."
    },
    {
      title: "4. Autonomous AI Stock & Expiry Alerts",
      icon: <Bot className="w-5 h-5 text-purple-400" />,
      desc: "Integrated an automated AI inventory engine that tracks 3,500+ SKUs, monitors product expiry dates, and alerts vendors automatically.",
      supermarketUse: "Zero dead stock. Automatic purchase orders sent to FMCG distributors before items run out of stock."
    }
  ],
  mockConversation: [
    { sender: "user", text: "Namaste, mujhe 5kg Basmati Rice, 1L Fortune Mustard Oil aur 2 pack Maggi chahiye ghar par." },
    { sender: "bot", text: "Namaste! Aapka cart ready hai:\n1. Daawat Basmati Rice 5kg - ₹440\n2. Fortune Mustard Oil 1L - ₹145\n3. Maggi 4-Pack (x2) - ₹96\n\nTotal: ₹681 (Free 30-Min Home Delivery)\nAapka Address: Ward 4, Station Road?\nPay via UPI ya Cash on Delivery?" },
    { sender: "user", text: "Haan wahi address, UPI link bhejo." },
    { sender: "bot", text: "✅ UPI Payment Link: biharstack.pay/rajeshwar-681\nRider 'Ramesh Kumar' order pack karke 18 min me pahuchega! 🚀" }
  ]
};

// Full In-Depth Details for all 32 Services across 4 Major Categories
export interface SubServiceDetail {
  id: string;
  name: string;
  tagline: string;
  icon: React.ReactNode;
  description: string;
  supermarketExample: string;
  deliverables: string[];
  impact: string;
  tools: string[];
}

export interface ServiceCategory {
  id: string;
  title: string;
  badge: string;
  themeColor: string;
  accentBg: string;
  accentBorder: string;
  accentText: string;
  modalTheme: string;
  icon: React.ReactNode;
  subtitle: string;
  stats: { value: string; label: string }[];
  subServices: SubServiceDetail[];
}

export const DETAILED_SERVICES_DATA: ServiceCategory[] = [
  {
    id: "digital-marketing",
    title: "Digital Marketing & Performance",
    badge: "Growth Engine",
    themeColor: "from-[#4A0E17] via-[#2A060C] to-[#120204]",
    accentBg: "bg-[#7A1826]",
    accentBorder: "border-[#A0283A]",
    accentText: "text-[#F8B4BD]",
    modalTheme: "burgundy",
    icon: <TrendingUp className="w-6 h-6 text-rose-400" />,
    subtitle: "Data-driven growth funnels and performance marketing campaigns engineered to compound high-intent leads and dominate local & global markets.",
    stats: [
      { value: "3.8x+", label: "Average Client ROAS" },
      { value: "45%", label: "Lower Cost Per Lead" },
      { value: "100%", label: "Transparent Reporting" }
    ],
    subServices: [
      {
        id: "smm",
        name: "Social Media Marketing",
        tagline: "Organic Community Growth & Viral High-Retention Content",
        icon: <Share2 className="w-5 h-5" />,
        description: "We craft data-backed organic social media strategies across Instagram, LinkedIn, YouTube, and Facebook. From viral reel scripts to custom carousels, community moderation, and brand tone development, we build loyal digital communities that consistently convert into paying customers.",
        supermarketExample: "🏪 Supermarket Example: Viral Reels showcasing 'Weekly Wednesday Fresh Veggie Market Deals', festival hamper unboxings, and recipe shorts driving hundreds of walk-ins every week.",
        deliverables: [
          "Monthly Content Calendar (15-20 Custom Posts, Carousels & Reels)",
          "High-Engagement Viral Reel & Shorts Scripts with Visual Storyboards",
          "Active Community Management & Comment-to-DM Lead Automation",
          "Trend Jacking & Regional Cultural Audio Optimization",
          "Comprehensive Monthly Growth, Reach & Follower Attribution Reports"
        ],
        impact: "Average 240% increase in organic reach and 3.2x boost in brand engagement within 60 days.",
        tools: ["Meta Business Suite", "CapCut Pro", "Figma", "Notion", "Later / Buffer", "Sprout Social"]
      },
      {
        id: "perf-mkt",
        name: "Performance Marketing",
        tagline: "Full-Funnel Paid Acquisition Engineered for Maximum ROAS",
        icon: <TrendingUp className="w-5 h-5" />,
        description: "Laser-focused paid acquisition funnels engineered around customer acquisition cost (CAC) and customer lifetime value (LTV). We test dozens of hook variations, creative angles, and landing page funnels to scale your business profitably.",
        supermarketExample: "🏪 Supermarket Example: Running automated dynamic product catalog ads targeting people whose monthly grocery cycles are due, driving repeat purchases.",
        deliverables: [
          "Audience Persona Mapping & Competitor Paid Ad Tear-Down",
          "Creative Testing Matrix (10+ Weekly Hook, Angle & CTA Variations)",
          "Multi-Tier Retargeting Funnel (Top, Middle & Bottom of Funnel)",
          "Server-Side Conversion Tracking & Custom Event Attribution",
          "Weekly Live ROAS & Customer Acquisition Cost (CAC) Dashboard"
        ],
        impact: "Consistently delivering 3.5x to 7x ROAS across D2C, education, healthcare, and retail sectors.",
        tools: ["Google Ads", "Meta Ads Manager", "Google Tag Manager", "Triple Whale", "Hotjar", "Looker Studio"]
      },
      {
        id: "meta-google-ads",
        name: "Meta Ads & Google Ads",
        tagline: "Dominating Search Intent & Social Feeds Simultaneously",
        icon: <Target className="w-5 h-5" />,
        description: "High-intent Google Search & Performance Max ads paired with hyper-targeted Instagram & Facebook lead ads. We capture customers at the exact moment they search for your solution and retarget them across all digital touchpoints.",
        supermarketExample: "🏪 Supermarket Example: When someone in your city searches 'Best supermarket near me' or 'Online ration delivery', your store shows up as the #1 sponsored result.",
        deliverables: [
          "High-Intent Google Search & Performance Max Campaign Setup",
          "Meta Conversions API (CAPI) Server-Side Pixel Tracking",
          "Negative Keyword Architecture & Smart Bid Strategy Optimization",
          "High-Converting Dynamic Ad Copy, Headlines & Banner Creatives",
          "A/B Split Testing for Lookalike Audiences & Custom Interest Clusters"
        ],
        impact: "Up to 45% reduction in Cost Per Lead (CPL) and zero wasted ad spend on irrelevant search terms.",
        tools: ["Meta Ads Manager", "Google Ads Editor", "Meta Pixel & CAPI", "Google Search Console", "SpyFu", "SEMrush"]
      },
      {
        id: "seo",
        name: "Search Engine Optimization (SEO)",
        tagline: "Rank #1 on Google Organically & Attract High-Intent Traffic 24/7",
        icon: <Search className="w-5 h-5" />,
        description: "Comprehensive technical, on-page, and off-page SEO strategy that outranks your toughest competitors. We optimize site architecture, build authoritative backlinks, and produce keyword-rich content that generates compounding organic traffic.",
        supermarketExample: "🏪 Supermarket Example: Dominating organic Google keywords like 'Grocery home delivery in Madhubani' and 'Wholesale FMCG market rates'.",
        deliverables: [
          "Comprehensive 100-Point Technical SEO & Site Speed Audit",
          "High-Value Commercial Keyword Research & Search Intent Mapping",
          "On-Page Meta Tags, Schema Structured Data & Content Optimization",
          "High-Authority Editorial Backlink Building & Digital PR",
          "Monthly Organic Traffic, Keyword Ranking & Search Impression Reports"
        ],
        impact: "Over 300% growth in organic search impressions and sustainable top-tier Google rankings.",
        tools: ["Ahrefs", "SEMrush", "Google Search Console", "Screaming Frog", "SurferSEO", "RankMath"]
      },
      {
        id: "local-seo",
        name: "Local SEO & GMB Ranking",
        tagline: "Dominate Google Maps & Top 3 Local Pack in Your City",
        icon: <MapPin className="w-5 h-5" />,
        description: "Position your business as the #1 local authority in Google Maps and local search results. We optimize your Google Business Profile (GBP), manage geo-tagged local citations, and build automated review generation workflows.",
        supermarketExample: "🏪 Supermarket Example: Ranking in the top 3 on Google Maps with 500+ authentic 5-star reviews, driving hundreds of navigation clicks daily.",
        deliverables: [
          "Google Business Profile (GBP) 100% Complete Optimization",
          "Local Top 3 Google 3-Pack Map Ranking Strategy",
          "Geo-Tagged Images & Local Business Schema Integration",
          "Local Citation Building across Top 50+ Indian Directories",
          "Automated 5-Star Review Generation & WhatsApp QR System"
        ],
        impact: "Average 4.8x increase in direct phone calls, WhatsApp inquiries, and in-store footfall from Google Maps.",
        tools: ["Google Business Profile", "BrightLocal", "Whitespark", "GeoImgr", "WhatsApp Review Automation"]
      },
      {
        id: "lead-gen",
        name: "High-Converting Lead Gen",
        tagline: "Predictable, Pre-Qualified Inbound Lead Pipelines",
        icon: <Users className="w-5 h-5" />,
        description: "End-to-end customer acquisition systems that attract, filter, and qualify high-ticket prospects before they ever speak with your sales team. Includes interactive quiz funnels, calendar booking integrations, and instant CRM routing.",
        supermarketExample: "🏪 Supermarket Example: Capturing wholesale B2B grocery accounts (Hotels, Restaurants, Messes, Caterers) with custom bulk rate quotation funnels.",
        deliverables: [
          "Interactive Multi-Step Lead Qualification Funnels",
          "Instant WhatsApp & SMS Lead Notification to Sales Team (<60 sec)",
          "Automated Lead Scoring & CRM Routing (Zoho / HubSpot / Sheets)",
          "Lead Magnet Strategy & High-Converting Download Gate Pages",
          "Real-Time Lead Pipeline Tracking & Conversion Attribution"
        ],
        impact: "Converts traffic at 8% - 15% conversion rate compared to the generic industry standard of 2%.",
        tools: ["Typeform", "Make.com", "Zapier", "Zoho CRM", "HubSpot", "Twilio / WhatsApp API"]
      },
      {
        id: "influencer",
        name: "Influencer Outreach",
        tagline: "Harness Regional & Pan-India Voices to Build Instant Trust",
        icon: <Award className="w-5 h-5" />,
        description: "Targeted influencer collaboration campaigns connecting your brand with authentic creators in Bihar, Delhi-NCR, and across India. We manage everything from creator vetting and contract negotiation to script guidelines and performance tracking.",
        supermarketExample: "🏪 Supermarket Example: Local food vloggers and lifestyle creators doing store walkthrough reels: 'Everything under ₹99 at Rajeshwar Supermarket'.",
        deliverables: [
          "Creator Identification & Fake Follower / Bot Engagement Vetting",
          "Campaign Creative Brief, Visual Guidelines & Talking Points",
          "End-to-End Outreach, Pricing & Contract Legal Negotiation",
          "Product Seeding & Video Quality Assurance before Publishing",
          "Campaign Reach, Engagement, Coupon Usage & Conversion Analytics"
        ],
        impact: "Instant brand credibility and up to 5x higher viral social reach compared to traditional banner ads.",
        tools: ["HypeAuditor", "Modash", "Instagram Creator Marketplace", "Notion Creator CRM", "Bitly Tracking"]
      },
      {
        id: "email-campaigns",
        name: "Automated Email Campaigns",
        tagline: "Turn Subscribers into Repeat Buyers on Autopilot",
        icon: <Mail className="w-5 h-5" />,
        description: "High-deliverability email marketing and lifecycle automation. We design responsive HTML email templates, write irresistible direct-response copy, and configure behavioural drip sequences that recover lost sales and boost repeat purchases.",
        supermarketExample: "🏪 Supermarket Example: Automated weekend grocery newsletters featuring digital coupon codes and weekend discount flyers to registered loyalty members.",
        deliverables: [
          "Welcome Drip Series & Brand Onboarding Email Sequences",
          "Abandoned Cart, Browse Recovery & Win-Back Automations",
          "Weekly High-Value Newsletters & Product Launch Campaigns",
          "Audience Segmentation & Email List Hygiene Optimization",
          "Dedicated IP, SPF, DKIM & DMARC 100% Deliverability Setup"
        ],
        impact: "Generates 25% - 35% of total digital revenue on autopilot with 45%+ email open rates.",
        tools: ["Klaviyo", "Mailchimp", "Brevo", "ActiveCampaign", "NeverBounce", "Litmus"]
      }
    ]
  },
  {
    id: "branding-creative",
    title: "Branding & Creative Design",
    badge: "Visual Excellence",
    themeColor: "from-[#F7F4EB] via-[#EFECE0] to-[#E3DFD0]",
    accentBg: "bg-[#2C2416]",
    accentBorder: "border-[#4D3F28]",
    accentText: "text-[#D6BA88]",
    modalTheme: "cream",
    icon: <Palette className="w-6 h-6 text-amber-500" />,
    subtitle: "Distinctive brand identities, cinema-grade video edits, 3D product visuals, and packaging systems that command authority and captivate modern audiences.",
    stats: [
      { value: "100%", label: "Original Vector Artwork" },
      { value: "3D & 4K", label: "Render Quality" },
      { value: "Full IP", label: "Complete Ownership" }
    ],
    subServices: [
      {
        id: "logo-identity",
        name: "Logo & Visual Brand Identity",
        tagline: "Timeless, Memorable Brand Identities That Command Respect",
        icon: <Sparkles className="w-5 h-5" />,
        description: "A complete visual identity system that distinguishes your brand from competitors. We design iconic logos, secondary wordmarks, brand badges, and establish psychological color harmonies and typography rules tailored to your market.",
        supermarketExample: "🏪 Supermarket Example: A high-end modern supermarket emblem with clean typography, icon for delivery bags, and recognizable storefront brand colors.",
        deliverables: [
          "Primary Logo, Secondary Wordmarks, Monograms & Sub-Marks",
          "Full Vector Source Files (.AI, .EPS, .SVG, .PNG, .PDF)",
          "Custom Color Palette & Hierarchical Typography Pairing Guide",
          "Dark Mode, Light Mode & Monochrome Logo Variations",
          "Favicons, App Icons & Social Media Profile Avatar Kits"
        ],
        impact: "Creates an instantly recognizable, premium market presence that justifies higher pricing.",
        tools: ["Adobe Illustrator", "Figma", "Adobe Photoshop", "FontLab", "Pantone Color Bridge"]
      },
      {
        id: "social-creatives",
        name: "Graphic & Social Media Creatives",
        tagline: "Stop-the-Scroll Visuals Engineered for High Engagement",
        icon: <Palette className="w-5 h-5" />,
        description: "High-impact social media creatives, promotional flyers, infographic carousels, and festival wishes designed to elevate your daily digital presence and maintain visual consistency across all platforms.",
        supermarketExample: "🏪 Supermarket Example: Eye-popping Diwali discount flyers, Sunday Big Bazaar flash banners, and price comparison posters.",
        deliverables: [
          "Monthly Pack of 20-30 Custom Social Media Posts & Ad Banners",
          "Engaging Multi-Slide Infographic Carousels & Story Highlights",
          "Festival, Occasion & Flash-Sale Creative Promo Banners",
          "Fully Editable Master Figma / Canva Templates for In-House Use",
          "Exported in Pixel-Perfect 1080x1080 & 1080x1920 Mobile Formats"
        ],
        impact: "Boosts post shareability by 3x and solidifies a cohesive, high-end visual aesthetic across your channels.",
        tools: ["Adobe Photoshop", "Adobe Illustrator", "Figma", "Canva Enterprise", "Midjourney Pro"]
      },
      {
        id: "ui-ux",
        name: "UI/UX Design for Web & Apps",
        tagline: "Intuitive, Frictionless Digital Experiences Users Love",
        icon: <Layout className="w-5 h-5" />,
        description: "User-centered design architecture for websites, SaaS dashboards, and mobile apps. We conduct user research, build low-fidelity wireframes, high-fidelity prototypes, and design scalable UI component libraries in Figma.",
        supermarketExample: "🏪 Supermarket Example: An ultra-clean 2-tap grocery shopping app interface where elderly customers can easily search items and reorder their past monthly basket.",
        deliverables: [
          "Complete User Flow Diagrams & Information Architecture",
          "Low-Fidelity Wireframes to High-Fidelity Interactive Mockups",
          "Clickable Prototypes in Figma for User Testing & Stakeholder Review",
          "Atomic Design System (Tokens, Typography, Buttons, Modals, Inputs)",
          "Complete Developer Handoff Package with Assets & CSS Specs"
        ],
        impact: "Reduces user churn by 40% and drastically lowers developer implementation time.",
        tools: ["Figma", "FigJam", "Miro", "Protopie", "Relume", "LottieFiles"]
      },
      {
        id: "motion-3d",
        name: "Motion Graphics & 3D Visuals",
        tagline: "Breathtaking 3D Renders & Kinetic Animations That Wow",
        icon: <Film className="w-5 h-5" />,
        description: "Dynamic 3D product animations, kinetic typography, animated logo reveals, and lightweight Lottie web animations that transform static digital interfaces into immersive, world-class interactive experiences.",
        supermarketExample: "🏪 Supermarket Example: 3D animated store exterior walkthrough, animated grocery basket dropping into delivery scooter, and motion price stings.",
        deliverables: [
          "3D Product Modeling, Texturing & Studio Realistic Lighting",
          "Animated Logo Reveals, Stinger Transitions & Brand Intros",
          "Kinetic Typography & Social Explainer Motion Videos",
          "Lightweight Lottie / JSON Web Vector Animations for Fast Web Loading",
          "High-Resolution 4K MP4 & Transparent WebM Alpha Exports"
        ],
        impact: "Increases average time-on-page by 65% and elevates product perceived value.",
        tools: ["Blender 3D", "Adobe After Effects", "Cinema 4D", "Spline 3D", "LottieFiles", "Octane Render"]
      },
      {
        id: "video-editing",
        name: "High-Production Video Editing",
        tagline: "Hook-Driven, Cinema-Grade Edits for YouTube & Viral Reels",
        icon: <Video className="w-5 h-5" />,
        description: "High-retention video editing that keeps viewers glued to the screen. We integrate fast-paced cuts, sound design, sound effects, motion graphics, color grading, and dynamic animated captions for YouTube, Reels, and TikTok.",
        supermarketExample: "🏪 Supermarket Example: High-energy reels capturing fresh morning vegetable unloading, fast-paced cashier scanning, and customer satisfaction soundbites.",
        deliverables: [
          "First 3-Second Hook Retention & Visual Pacing Optimizations",
          "Dynamic Animated Captions & Kinetic Text Overlay Graphics",
          "Sound Design, Audio Denoising & Licensed Music Curation",
          "Cinema-Grade Color Grading & Custom LUT Application",
          "Long-Form YouTube Videos & Short-Form 9:16 Cuts with B-Roll"
        ],
        impact: "Drives 85%+ audience retention rates and boosts video completion metrics on algorithmic feeds.",
        tools: ["Adobe Premiere Pro", "DaVinci Resolve Studio", "Adobe After Effects", "Izotope RX", "Epidemic Sound"]
      },
      {
        id: "product-packaging",
        name: "Product Branding & Packaging",
        tagline: "Packaging That Stands Out on Retail Shelves and Unboxing Videos",
        icon: <Package className="w-5 h-5" />,
        description: "End-to-end packaging and label design for physical products, food & beverage, FMCG, and luxury items. We create print-ready die lines, 3D photorealistic mockups, and sensory unboxing experience packaging.",
        supermarketExample: "🏪 Supermarket Example: In-house private label branding (e.g. 'Rajeshwar Choice Atta & Pulses') with premium matte packaging and barcodes.",
        deliverables: [
          "Print-Ready Die-Cut Artwork with Bleed & CMYK Separation",
          "3D Photorealistic Packaging Mockups for E-Commerce Listing",
          "Barcode, FSSAI, QR Codes & Legal Compliance Integration",
          "Foil Stamping, Embossing, Spot UV & Matte Varnish Specifications",
          "Unboxing Insert Cards, Stickers & Thank-You Collaterals"
        ],
        impact: "Drives customer unboxing shares on social media and maximizes retail shelf pull.",
        tools: ["Adobe Illustrator", "Esko Studio", "Adobe Dimension", "Blender", "Photoshop"]
      },
      {
        id: "brand-guidelines",
        name: "Brand Guidelines & Voice",
        tagline: "The Master Rulebook for Consistent, Unshakable Brand Authority",
        icon: <BookOpen className="w-5 h-5" />,
        description: "A comprehensive brand bible that ensures your marketing team, partners, and external agencies always speak in one unified voice. Contains complete typography, logo usage, color rules, and brand copywriting guidelines.",
        supermarketExample: "🏪 Supermarket Example: Store staff uniform color standards, price tag design system, and aisle category signage guidelines.",
        deliverables: [
          "Comprehensive 30+ Page Master Brand Identity Book (PDF)",
          "Logo Clearspace, Minimum Sizes & Incorrect Usage Rules",
          "Color Palette HEX, RGB, CMYK & Pantone Specifications",
          "Brand Tone of Voice, Editorial Style & Vocabulary Guide",
          "Corporate Pitch Deck Master Presentation Template"
        ],
        impact: "Guarantees 100% brand consistency across all marketing channels, offices, and campaigns.",
        tools: ["Figma", "Adobe InDesign", "Notion Brand Hub", "Google Slides", "Adobe Acrobat Pro"]
      },
      {
        id: "marketing-collaterals",
        name: "Marketing Collaterals",
        tagline: "Premium Tangible Assets for Corporate Pitching & Exhibitions",
        icon: <ImageIcon className="w-5 h-5" />,
        description: "High-resolution corporate brochures, visiting cards, business proposals, roll-up banners, and exhibition standees that leave a lasting impression during physical client meetings, trade shows, and conferences.",
        supermarketExample: "🏪 Supermarket Example: Custom printed eco-friendly carry bags, customer membership loyalty cards, shelf-talker discount tags, and outdoor flex hoardings.",
        deliverables: [
          "Luxury Business Card Designs (Matte, Gloss, Spot UV, NFC-Enabled)",
          "Multi-Page Corporate Profiles & Digital Product Catalogs",
          "Roll-Up Standees, Flex Banners & Event Hoardings",
          "Custom Letterheads, Envelopes & Corporate ID Card Badges",
          "Print-Ready Vector Files with CMYK Print Calibration"
        ],
        impact: "Establishes immediate trust and credibility during high-stakes B2B sales meetings.",
        tools: ["Adobe InDesign", "Adobe Illustrator", "Photoshop", "Canva Pro", "Acrobat DC"]
      }
    ]
  },
  {
    id: "website-technology",
    title: "Website & Custom Technology",
    badge: "Engineering Core",
    themeColor: "from-[#11161D] via-[#090C10] to-[#040608]",
    accentBg: "bg-[#0088CC]",
    accentBorder: "border-[#00A8FF]",
    accentText: "text-[#38BDF8]",
    modalTheme: "obsidian",
    icon: <Code2 className="w-6 h-6 text-cyan-400" />,
    subtitle: "Blazing fast, pixel-perfect, scalable web and mobile applications engineered with modern Next.js, React, Node.js, and cloud infrastructure.",
    stats: [
      { value: "<0.8s", label: "Average Load Time" },
      { value: "99.9%", label: "Uptime SLA" },
      { value: "100%", label: "Clean Next.js Code" }
    ],
    subServices: [
      {
        id: "custom-websites",
        name: "Custom Business Websites",
        tagline: "Bespoke, High-Performance Websites Built to Convert Visitors",
        icon: <Globe className="w-5 h-5" />,
        description: "Custom-engineered websites developed with Next.js, React, and modern Tailwind CSS. Tailored to your exact business objectives with instant sub-second loading, fluid animations, and robust lead capture integrations.",
        supermarketExample: "🏪 Supermarket Example: A high-performance storefront website showcasing daily deals, store locations, customer loyalty portal, and WhatsApp order gateway.",
        deliverables: [
          "100% Custom Responsive Website (Mobile, Tablet, Desktop)",
          "Next.js App Router Architecture with Server-Side Rendering (SSR)",
          "Interactive Contact Forms & Direct WhatsApp Instant Sync",
          "Google Analytics 4 & Meta Pixel Tracking Fully Configured",
          "Free SSL, Custom Domain Setup & Global Edge CDN Deployment"
        ],
        impact: "Sub-second load times and 3x higher lead conversion compared to generic WordPress templates.",
        tools: ["Next.js 14", "React", "TypeScript", "Tailwind CSS", "Framer Motion", "Vercel / Cloudflare"]
      },
      {
        id: "ecommerce-platforms",
        name: "E-commerce Platforms (Shopify/Next)",
        tagline: "High-Volume Online Stores Built for Seamless Checkout",
        icon: <ShoppingCart className="w-5 h-5" />,
        description: "Modern e-commerce stores designed for high sales velocity. Built with custom Shopify Liquid or headless Next.js, equipped with 1-click UPI checkout, automated shipping calculator, and WhatsApp order status updates.",
        supermarketExample: "🏪 Supermarket Example: Full-fledged online grocery store with 3,500+ items, instant UPI payment, pincode delivery checker, and real-time stock sync.",
        deliverables: [
          "Custom Shopify Theme or Headless Next.js Storefront",
          "Razorpay / Cashfree / Stripe & UPI 1-Click Instant Payment Gateways",
          "Shiprocket / Delhivery Courier API Automated Sync",
          "Abandoned Cart Recovery & WhatsApp Order Status Notifications",
          "Bulk Product Catalog Upload & Real-Time Inventory Sync"
        ],
        impact: "Reduces cart abandonment by up to 35% with frictionless mobile checkout flows.",
        tools: ["Shopify Plus", "Next.js", "Razorpay / Stripe", "Shiprocket API", "Tailwind CSS", "Redis"]
      },
      {
        id: "landing-pages",
        name: "High-Converting Landing Pages",
        tagline: "Laser-Focused Sales Pages Engineered for Maximum Conversions",
        icon: <Rocket className="w-5 h-5" />,
        description: "Direct-response landing pages crafted to turn paid ad traffic into immediate revenue. Designed with persuasive visual hierarchy, sticky CTAs, social proof widgets, and optimized for sub-second mobile loading.",
        supermarketExample: "🏪 Supermarket Example: Special festive ration combo landing page (e.g. 'Chhath Puja Mega Grocery Basket @ ₹999') with 1-tap WhatsApp order button.",
        deliverables: [
          "High-Impact Hero Section & Persuasive Direct-Response Copy",
          "Interactive Pricing Calculator & Lead Qualification Gate",
          "Trust Badges, Testimonial Carousels & Video Social Proofs",
          "A/B Testing Setup for Headlines & Call-to-Actions",
          "95+ Mobile Speed Score & Zero Cumulative Layout Shift (CLS)"
        ],
        impact: "Consistently achieves 12% - 22% conversion rates on paid Meta and Google traffic.",
        tools: ["Next.js", "Tailwind CSS", "Framer Motion", "Google Optimize", "Hotjar", "Vercel"]
      },
      {
        id: "custom-web-apps",
        name: "Full-Stack Custom Web Apps",
        tagline: "Scalable Enterprise Web Applications Tailored to Your Workflows",
        icon: <Code2 className="w-5 h-5" />,
        description: "Robust end-to-end web applications built from scratch to automate complex business workflows. Features secure user authentication, role-based dashboards, PostgreSQL databases, and high-concurrency cloud backend architecture.",
        supermarketExample: "🏪 Supermarket Example: Custom Multi-Counter POS Billing Software with barcode scanner support, weighing scale integration, and daily profit/loss dashboards.",
        deliverables: [
          "Complete Frontend & Backend Application Architecture",
          "Secure JWT / OAuth Authentication & Role-Based Permissions (RBAC)",
          "Relational Database Schema Design (PostgreSQL / MySQL / Supabase)",
          "Admin Dashboard with Real-Time Analytics & Excel/CSV Data Export",
          "Automated CI/CD Pipelines & Secure Cloud Hosting Setup"
        ],
        impact: "Eliminates manual spreadsheet chaos and streamlines multi-department operations into one portal.",
        tools: ["Node.js", "Express / NestJS", "PostgreSQL", "Prisma ORM", "Docker", "AWS / Supabase"]
      },
      {
        id: "mobile-apps",
        name: "iOS & Android Mobile Apps",
        tagline: "Smooth, Native Mobile Apps for Global App Store Reach",
        icon: <Smartphone className="w-5 h-5" />,
        description: "Cross-platform iOS and Android mobile applications built using React Native and Flutter. Fast 60FPS performance, native hardware integration (camera, GPS, biometrics), push notifications, and offline caching.",
        supermarketExample: "🏪 Supermarket Example: Native 30-min grocery delivery app for customers + delivery partner order dispatch app with live GPS tracking.",
        deliverables: [
          "Universal Single Codebase for Both iOS and Android Platforms",
          "App Store & Google Play Store Submission & Guaranteed Approval",
          "OneSignal / Firebase Push Notification Architecture",
          "Biometric Authentication (FaceID & Fingerprint Recognition)",
          "Offline Data Sync & In-App Purchase / UPI Gateway Integration"
        ],
        impact: "Puts your brand directly into your customers' pockets with 24/7 engagement.",
        tools: ["React Native", "Flutter", "Firebase", "OneSignal", "Expo", "Fastlane", "Xcode"]
      },
      {
        id: "saas-development",
        name: "SaaS Platform Development",
        tagline: "Multi-Tenant Cloud Software Built to Scale from 10 to 1M Users",
        icon: <Cloud className="w-5 h-5" />,
        description: "End-to-end Software-as-a-Service (SaaS) engineering. From multi-tenant database isolation, recurring subscription billing, user seat management, to interactive onboarding tours and usage telemetry.",
        supermarketExample: "🏪 Supermarket Example: Multi-Branch Supermarket Management SaaS allowing owner to monitor 5 store branches in Bihar from a single mobile dashboard.",
        deliverables: [
          "Multi-Tenant Cloud Architecture with Isolated Tenant Data",
          "Stripe Subscriptions & Razorpay Recurring Billing Integration",
          "User Role Management, Team Collaboration & Granular Permissions",
          "Usage Analytics, In-App Feedback & Interactive Onboarding Tours",
          "Automated PDF Invoicing & Automated Dunning Email Sequences"
        ],
        impact: "Fast go-to-market speed with enterprise-grade security and subscription billing ready on day one.",
        tools: ["Next.js", "TypeScript", "Stripe Subscriptions", "Supabase / AWS", "PostHog", "Resend"]
      },
      {
        id: "api-integration",
        name: "REST & GraphQL API Integration",
        tagline: "Seamless Data Pipelines Connecting All Your Business Software",
        icon: <Cpu className="w-5 h-5" />,
        description: "Custom API development and third-party integrations. We connect your web systems with CRMs, payment processors, ERPs, accounting software (Tally, Zoho), and external databases with military-grade encryption.",
        supermarketExample: "🏪 Supermarket Example: Automatic sync between POS billing counter and Tally Prime accounting software, eliminating manual data entry.",
        deliverables: [
          "RESTful & GraphQL API Architecture & Endpoint Design",
          "Third-Party API Integrations (Payments, SMS, WhatsApp, ERP)",
          "Webhook Listeners with Retry & Error-Handling Logic",
          "Interactive API Documentation (Swagger / Postman Collections)",
          "Rate Limiting, API Key Security & Token Expiry Management"
        ],
        impact: "Automates data flow between disparate systems with 99.99% uptime and zero data loss.",
        tools: ["Node.js", "GraphQL / Apollo", "Postman", "Swagger", "Redis", "Cloudflare Workers"]
      },
      {
        id: "speed-optimization",
        name: "Speed & Core Web Vitals Optimization",
        tagline: "Sub-Second Load Times and 95+ Google PageSpeed Scores",
        icon: <Gauge className="w-5 h-5" />,
        description: "Deep performance optimization for slow websites. We eliminate render-blocking JavaScript, optimize images to modern WebP/AVIF formats, implement edge caching, and achieve green scores on all Google Core Web Vitals.",
        supermarketExample: "🏪 Supermarket Example: Online grocery product search returns instant results in 50 milliseconds even on 3G/4G rural mobile networks.",
        deliverables: [
          "Comprehensive Speed Audit & Performance Bottleneck Identification",
          "Image & Video Compression with Next-Gen AVIF/WebP Formats",
          "Code Splitting, JavaScript Minification & Unused CSS Purging",
          "Edge CDN Caching & Server Time-to-First-Byte (TTFB) Optimization",
          "Guaranteed 90+ Score on Google PageSpeed Insights & Lighthouse"
        ],
        impact: "Reduces bounce rate by 50% and dramatically boosts Google search ranking positions.",
        tools: ["Google Lighthouse", "WebPageTest", "Cloudflare", "Next.js Image Optimization", "PurgeCSS"]
      }
    ]
  },
  {
    id: "ai-automation",
    title: "AI & Workflow Automation",
    badge: "Autonomous AI",
    themeColor: "from-[#081F17] via-[#04120E] to-[#020806]",
    accentBg: "bg-[#00B58A]",
    accentBorder: "border-[#00E5AE]",
    accentText: "text-[#34D399]",
    modalTheme: "emerald",
    icon: <Bot className="w-6 h-6 text-emerald-400" />,
    subtitle: "Domain-trained custom AI chatbots, autonomous multi-step agents, and WhatsApp CRM automated workflows that cut operational costs 24/7.",
    stats: [
      { value: "24/7", label: "Instant AI Response" },
      { value: "75%", label: "Queries Auto-Resolved" },
      { value: "100+ hrs", label: "Saved Every Month" }
    ],
    subServices: [
      {
        id: "ai-chatbots",
        name: "Custom AI Chatbots & Knowledge Bases",
        tagline: "Smart AI Assistants Trained on Your Private Business Data",
        icon: <Bot className="w-5 h-5" />,
        description: "Retrieval-Augmented Generation (RAG) AI chatbots trained on your company's PDFs, docs, product catalogs, and website knowledge. Answers customer inquiries with 100% factual precision 24/7 in English, Hindi, and regional languages.",
        supermarketExample: "🏪 Supermarket Example: 24/7 WhatsApp AI Grocery Bot that understands audio notes in Hindi/Maithili and creates instant delivery orders.",
        deliverables: [
          "Custom Vector Database Setup (Pinecone / ChromaDB / pgvector)",
          "Document Scraping, Chunking & Embedding Pipeline",
          "Branded Web Chatbot Widget with Custom UI & Avatars",
          "Human Hand-off Mechanism for Complex Escalations",
          "Chat History Dashboard & Search Query Insight Analytics"
        ],
        impact: "Resolves 75% of customer support queries instantly with zero human intervention required.",
        tools: ["OpenAI GPT-4o", "LangChain / LlamaIndex", "Pinecone", "ChromaDB", "Claude 3.5 Sonnet", "Next.js"]
      },
      {
        id: "whatsapp-crm-auto",
        name: "WhatsApp & CRM Automation",
        tagline: "Automate Customer Chats, Bookings & Sales on WhatsApp",
        icon: <MessageSquare className="w-5 h-5" />,
        description: "Official Meta WhatsApp Cloud API integration connected directly to your CRM. Send automated booking confirmations, trigger abandoned checkout reminders, broadcast flash sales, and accept inquiries on WhatsApp.",
        supermarketExample: "🏪 Supermarket Example: Automatic WhatsApp broadcast of 'Sunday Subzi Mandi Fresh Stock' with 1-click order buttons to 10,000+ local customers.",
        deliverables: [
          "Official WhatsApp Business Cloud API Green Tick Verification Support",
          "Interactive WhatsApp Flow Menus & Smart Keyword Triggers",
          "Automatic Real-Time CRM Sync (Zoho, HubSpot, Google Sheets)",
          "High-Delivery Broadcast Campaign Engine for Promotions",
          "Automated Payment Link & PDF Invoice Generation in Chat"
        ],
        impact: "Achieves 98% message open rates and shortens sales closing cycles from days to minutes.",
        tools: ["WhatsApp Cloud API", "Make.com", "Wati / Interakt", "Zoho CRM", "HubSpot", "Google Sheets"]
      },
      {
        id: "process-automation",
        name: "Business Process Automation",
        tagline: "Eliminate Repetitive Tasks and Save 100+ Hours Every Month",
        icon: <Workflow className="w-5 h-5" />,
        description: "Complete digital transformation of manual operational workflows. We automate invoice generation, inventory alerts, client onboarding documents, employee attendance logging, and multi-department approval flows.",
        supermarketExample: "🏪 Supermarket Example: When inventory drops below 10 units for any essential item (e.g. Mustard oil), automatic PO is generated and emailed to supplier.",
        deliverables: [
          "Operational Workflow Audit & Bottleneck Mapping Blueprint",
          "Automated PDF Invoice & Payment Receipt Generation Engine",
          "Cross-App Data Synchronization (Form → Sheet → CRM → WhatsApp)",
          "Automated Error-Monitoring & Instant Telegram/Slack Staff Alerts",
          "Comprehensive SOPs & Staff Training Video Walkthroughs"
        ],
        impact: "Saves up to 120+ employee hours monthly and eliminates human data-entry errors entirely.",
        tools: ["Make.com", "Zapier", "n8n", "Airtable", "Google Workspace APIs", "Telegram Bot API"]
      },
      {
        id: "autonomous-agents",
        name: "Autonomous AI Agents",
        tagline: "Multi-Step AI Agents That Research, Plan & Execute Tasks",
        icon: <Brain className="w-5 h-5" />,
        description: "Autonomous AI agents equipped with tools to browse the web, scrape competitor prices, summarize meeting transcripts, draft personalized email outreach, and execute complex multi-step digital workflows independently.",
        supermarketExample: "🏪 Supermarket Example: AI agent that checks competitor FMCG prices in your district every morning and recommends optimum competitive pricing.",
        deliverables: [
          "Custom AI Agent Logic (ReAct Framework / CrewAI / LangGraph)",
          "Automated Web Scraping & Real-Time Competitor Price Feeds",
          "Automated Meeting Audio Transcription & Action Item Generation",
          "Autonomous Lead Research & Personalized Outreach Drafter",
          "Safe Sandboxed Execution Environment with Human Approval Gates"
        ],
        impact: "Performs the equivalent work of 3 full-time research assistants around the clock.",
        tools: ["LangGraph", "CrewAI", "OpenAI Assistants API", "Puppeteer", "Firecrawl", "Python"]
      },
      {
        id: "ai-content-pipelines",
        name: "AI Content & Asset Creation Pipelines",
        tagline: "Scale Your Content Output by 10x with Controlled AI Pipelines",
        icon: <Sparkles className="w-5 h-5" />,
        description: "Automated content generation engines tailored to your exact brand guidelines. Generate SEO-optimized blog posts, localized social media captions, dynamic product mockups, and video voiceovers in minutes.",
        supermarketExample: "🏪 Supermarket Example: Automatically generating 100+ daily discount banner graphics with localized Hindi/Maithili copy in under 2 minutes.",
        deliverables: [
          "Brand Voice Profile & Anti-Hallucination Custom System Prompts",
          "Automated Long-Form SEO Article Writer with Internal Linking",
          "Multi-Language Translation & Regional Vernacular Content Pipeline",
          "AI Image & Banner Generation with Brand Watermarking",
          "Automated Voiceover Synthesis (ElevenLabs) for Video Content"
        ],
        impact: "Reduces content creation costs by 80% while scaling publishing output by 10x.",
        tools: ["OpenAI API", "Midjourney API", "ElevenLabs", "Claude 3.5 Sonnet", "WordPress REST API"]
      },
      {
        id: "zapier-make-auto",
        name: "Zapier / Make Workflow Automation",
        tagline: "Connect 5000+ Apps with Zero-Code Robust Logic",
        icon: <Layers className="w-5 h-5" />,
        description: "Custom Make.com (Integromat) and Zapier workflow blueprints connecting your entire software stack. We build multi-branch conditional routers, data formatters, webhook handlers, and robust error recovery mechanisms.",
        supermarketExample: "🏪 Supermarket Example: Instant connection between online grocery store, rider dispatch WhatsApp group, and accountant's Google Drive.",
        deliverables: [
          "End-to-End Visual Workflow Architecture in Make / Zapier",
          "Webhook Listeners & Custom JSON Data Transformers",
          "Multi-Branch Conditional Routing & Advanced Filter Logic",
          "Automated Error-Catching & Fallback Recovery Paths",
          "Full Documentation & Workspace Ownership Transfer"
        ],
        impact: "Seamless real-time synchronization across all your SaaS apps with zero manual maintenance.",
        tools: ["Make.com", "Zapier", "n8n Self-Hosted", "Webhooks", "JSON Parser", "Cloudflare"]
      },
      {
        id: "lead-enrichment",
        name: "Lead Enrichment & Auto-Nurturing",
        tagline: "Instantly Score, Enrich and Nurture High-Value Prospects",
        icon: <UserPlus className="w-5 h-5" />,
        description: "When a lead enters your funnel, our AI automatically searches public databases to find company revenue, employee count, LinkedIn profiles, and buyer intent. It then triggers hyper-personalized email & WhatsApp nurturing.",
        supermarketExample: "🏪 Supermarket Example: Auto-segmenting retail customers into 'Budget Shoppers', 'Organic/Premium Food Lovers', and 'Bulk Buyers' for targeted deals.",
        deliverables: [
          "Automated Data Enrichment on Form Submissions",
          "LinkedIn Profile, Tech Stack & Company Size Automatic Lookup",
          "AI Lead Scoring Algorithm (Hot, Warm, Cold Tiers)",
          "Dynamic Personalized Nurturing Sequences on WhatsApp/Email",
          "High-Priority Lead Instant Push to Senior Sales Reps"
        ],
        impact: "Increases sales conversion rates by 40% by equipping reps with deep prospect intel before the first call.",
        tools: ["Clearbit / Apollo API", "OpenAI Embeddings", "Make.com", "HubSpot CRM", "Twilio"]
      },
      {
        id: "bespoke-enterprise-ai",
        name: "Bespoke Enterprise AI Integration",
        tagline: "Private, Secure On-Premise & Cloud AI Architecture",
        icon: <ShieldCheck className="w-5 h-5" />,
        description: "Custom enterprise AI implementations with strict data privacy, SOC2 compliance, and dedicated infrastructure. Includes self-hosted open-weight LLMs (Llama 3, Mistral), custom fine-tuning, and private vector clouds.",
        supermarketExample: "🏪 Supermarket Example: Private on-premise AI computer vision system tracking footfall heatmaps and theft prevention across supermarket aisles.",
        deliverables: [
          "Enterprise Security & Data Privacy Compliance Review",
          "Private Fine-Tuned LLM Deployment (Llama 3 / Mistral)",
          "Dedicated High-Throughput Inference Endpoints (vLLM / Ollama)",
          "Role-Based Access Control & Audit Logging for AI Queries",
          "Full Source Code Ownership & Internal Engineering Handover"
        ],
        impact: "Provides enterprise-grade AI superpower while keeping 100% of proprietary business data private.",
        tools: ["Llama 3", "Mistral AI", "vLLM", "AWS Bedrock", "Ollama", "Docker", "NVIDIA CUDA"]
      }
    ]
  }
];

// 3D Magnetic Playing Card Component
function InteractivePlayingCard({
  children,
  className,
  delay = 0,
  cardIndex = 1,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
  cardIndex?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  const animRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -((y - centerY) / centerY) * 9;
    const rotateY = ((x - centerX) / centerX) * 9;

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(() => {
      setRotate({ x: rotateX, y: rotateY });
      setShinePos({ x: `${x}px`, y: `${y}px` });
    });
  };

  const handleMouseEnter = () => setIsHovered(true);
  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  const getInitialPos = (index: number) => {
    switch (index) {
      case 1: return { x: 180, y: 150, rotateZ: -14, scale: 0.72, opacity: 0 };
      case 2: return { x: -180, y: 150, rotateZ: 12, scale: 0.72, opacity: 0 };
      case 3: return { x: 180, y: -150, rotateZ: -10, scale: 0.72, opacity: 0 };
      case 4: return { x: -180, y: -150, rotateZ: 14, scale: 0.72, opacity: 0 };
      default: return { x: 0, y: 120, rotateZ: 0, scale: 0.72, opacity: 0 };
    }
  };

  return (
    <motion.article
      ref={cardRef}
      initial={getInitialPos(cardIndex)}
      whileInView={{
        x: 0,
        y: 0,
        rotateZ: 0,
        scale: 1,
        opacity: 1,
      }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{
        duration: 0.85,
        delay: cardIndex * 0.14,
        ease: [0.16, 1, 0.3, 1],
      }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotate.x : 0,
        rotateY: isHovered ? rotate.y : 0,
        scale: isHovered ? 1.03 : 1,
        y: isHovered ? -12 : 0,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        // @ts-ignore
        "--mouse-x": shinePos.x,
        // @ts-ignore
        "--mouse-y": shinePos.y,
      }}
      className={`playing-card ${className}`}
    >
      <div className="card-shine" />
      {children}
    </motion.article>
  );
}

// Master Service Details & Supermarket Transformation Modal Component
function ServiceDetailModal({
  isOpen,
  onClose,
  selectedCategoryIndex,
  onSelectCategory,
  selectedSubServiceIndex,
  onSelectSubService,
  initialView = "services",
}: {
  isOpen: boolean;
  onClose: () => void;
  selectedCategoryIndex: number;
  onSelectCategory: (idx: number) => void;
  selectedSubServiceIndex: number;
  onSelectSubService: (idx: number) => void;
  initialView?: "services" | "supermarket";
}) {
  const [activeTab, setActiveTab] = useState<"services" | "supermarket">(initialView);
  const currentCategory = DETAILED_SERVICES_DATA[selectedCategoryIndex] || DETAILED_SERVICES_DATA[0];
  const currentSubService = currentCategory.subServices[selectedSubServiceIndex] || currentCategory.subServices[0];

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleNextSubService = () => {
    if (selectedSubServiceIndex < currentCategory.subServices.length - 1) {
      onSelectSubService(selectedSubServiceIndex + 1);
    } else {
      onSelectSubService(0);
    }
  };

  const handlePrevSubService = () => {
    if (selectedSubServiceIndex > 0) {
      onSelectSubService(selectedSubServiceIndex - 1);
    } else {
      onSelectSubService(currentCategory.subServices.length - 1);
    }
  };

  const handleGetStarted = () => {
    onClose();
    const contactEl = document.getElementById("contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const whatsappMessage = encodeURIComponent(
    `Hi BiharStack Team! I want to discuss digital transformation for my Supermarket / Business under *${currentCategory.title}* (${currentSubService.name}).`
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[999] flex items-center justify-center p-2 sm:p-4 md:p-6 lg:p-8">
          {/* Backdrop Blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/85 backdrop-blur-xl transition-opacity"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
            className="relative w-full max-w-6xl max-h-[94vh] bg-[#0A0D12] text-white rounded-[32px] border-2 border-white/20 shadow-[0_25px_70px_rgba(0,0,0,0.95)] flex flex-col overflow-hidden z-10 font-sans"
          >
            {/* Top Navigation & Mode Switcher */}
            <div className="p-4 sm:p-6 border-b border-white/10 flex flex-col gap-3.5 bg-gradient-to-r from-[#12161F] via-[#0A0D12] to-[#12161F] shrink-0">
              
              {/* Row 1: Brand Identifier & Close */}
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-gradient-to-br from-[#c6f827] to-[#88b800] text-black font-black flex items-center justify-center shadow-[0_0_20px_rgba(198,248,39,0.35)] border border-white/30">
                    <Sparkles className="w-5 h-5 text-black" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-0.5 rounded-full bg-[#c6f827]/15 text-[#c6f827] border border-[#c6f827]/30">
                        Bihar Stack • 32 Production Engines
                      </span>
                      <span className="text-[10px] font-bold text-neutral-400 hidden sm:inline-block">
                        Enterprise Architecture & Real-World Deployments
                      </span>
                    </div>
                    <h2 className="text-base sm:text-xl font-black text-white uppercase tracking-tight mt-0.5">
                      Service Architecture & Execution Blueprint
                    </h2>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  {/* View Mode Toggle: Supermarket Case vs All 32 Services */}
                  <div className="bg-black/60 p-1 rounded-2xl border border-white/15 flex items-center gap-1">
                    <button
                      type="button"
                      onClick={() => setActiveTab("supermarket")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === "supermarket"
                          ? "bg-[#c6f827] text-black shadow-md"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <Store className="w-3.5 h-3.5" />
                      <span>Supermarket Blueprint</span>
                    </button>
                    <button
                      type="button"
                      onClick={() => setActiveTab("services")}
                      className={`px-3 py-1.5 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-1.5 cursor-pointer ${
                        activeTab === "services"
                          ? "bg-white text-black shadow-md"
                          : "text-neutral-400 hover:text-white"
                      }`}
                    >
                      <Layers className="w-3.5 h-3.5" />
                      <span>All 32 Services</span>
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={onClose}
                    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/20 text-white flex items-center justify-center transition-all hover:rotate-90 cursor-pointer shrink-0"
                    aria-label="Close modal"
                  >
                    <X className="w-4 h-4 sm:w-5 sm:h-5" />
                  </button>
                </div>
              </div>

              {/* Row 2: 4 Major Category Tabs (When on Services view) */}
              {activeTab === "services" && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none pt-1">
                  {DETAILED_SERVICES_DATA.map((cat, idx) => (
                    <button
                      key={cat.id}
                      type="button"
                      onClick={() => {
                        onSelectCategory(idx);
                        onSelectSubService(0);
                      }}
                      className={`px-3.5 py-2 rounded-xl text-xs font-black uppercase tracking-wider transition-all flex items-center gap-2 shrink-0 border cursor-pointer ${
                        selectedCategoryIndex === idx
                          ? `${cat.accentBg} text-white border-white/40 shadow-lg scale-100`
                          : "bg-white/5 hover:bg-white/10 text-neutral-400 border-white/10"
                      }`}
                    >
                      <span className="shrink-0">{cat.icon}</span>
                      <span className="whitespace-nowrap">{cat.title}</span>
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* TAB 1: SUPERMARKET DIGITAL TRANSFORMATION BLUEPRINT (High-Impact Real-World Case Study) */}
            {activeTab === "supermarket" ? (
              <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 bg-gradient-to-b from-[#0A0D12] via-[#0F141C] to-[#080A0E]">
                
                {/* Hero Banner with Live Transformation Stats */}
                <div className="relative rounded-3xl bg-gradient-to-br from-[#1E293B] via-[#0F172A] to-[#020617] border-2 border-cyan-500/30 p-6 sm:p-8 shadow-2xl overflow-hidden">
                  <div className="absolute top-0 right-0 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
                  
                  <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                    <div className="max-w-2xl">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/20 border border-cyan-400/40 text-cyan-300 text-[11px] font-black uppercase tracking-widest mb-3">
                        <Store className="w-3.5 h-3.5" />
                        <span>Live Supermarket Digital Transformation Blueprint</span>
                      </div>
                      
                      <h3 className="text-2xl sm:text-4xl font-black uppercase tracking-tight text-white leading-tight">
                        {SUPERMARKET_CASE_STUDY.name}
                      </h3>
                      
                      <p className="text-sm sm:text-base text-cyan-100/90 font-medium mt-2 leading-relaxed">
                        {SUPERMARKET_CASE_STUDY.tagline}
                      </p>
                      
                      <div className="flex items-center gap-2 mt-3 text-xs font-bold text-neutral-400">
                        <MapPin className="w-4 h-4 text-cyan-400" />
                        <span>{SUPERMARKET_CASE_STUDY.location}</span>
                      </div>
                    </div>

                    {/* Quick CTA */}
                    <div className="shrink-0 flex flex-col sm:flex-row md:flex-col gap-2.5">
                      <a
                        href="https://wa.me/917979067849?text=Hi%20BiharStack,%20I%20want%20the%20Supermarket%20Digital%20POS%20&%20Fast%20Delivery%20System!"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-5 py-3 rounded-2xl bg-[#c6f827] text-black font-black text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-lg hover:scale-105 transition-all"
                      >
                        <Zap className="w-4 h-4 fill-black" />
                        <span>Build For My Supermarket</span>
                      </a>
                    </div>
                  </div>

                  {/* 4 Measurable Outcome Metric Badges */}
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 mt-8 pt-6 border-t border-white/10">
                    {SUPERMARKET_CASE_STUDY.metrics.map((m, idx) => (
                      <div key={idx} className="p-3.5 rounded-2xl bg-white/[0.04] border border-white/10">
                        <strong className="font-display text-2xl sm:text-3xl font-black text-cyan-400 block">
                          {m.value}
                        </strong>
                        <span className="text-xs font-bold text-white uppercase tracking-wider block mt-0.5">
                          {m.label}
                        </span>
                        <span className="text-[10px] text-neutral-400 block mt-1">
                          {m.sub}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 4 Pillars of Supermarket Transformation (Tech + Marketing + Branding + AI) */}
                <div>
                  <h4 className="text-sm font-black uppercase tracking-widest text-neutral-300 mb-4 flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-cyan-400" />
                    How The 4 Bihar Stack Engines Power The Supermarket:
                  </h4>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {SUPERMARKET_CASE_STUDY.pillars.map((pillar, idx) => (
                      <div
                        key={idx}
                        className="rounded-2xl bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-5 transition-all flex flex-col justify-between"
                      >
                        <div>
                          <div className="flex items-center gap-3 mb-2.5">
                            <div className="p-2.5 rounded-xl bg-white/10 border border-white/15">
                              {pillar.icon}
                            </div>
                            <h5 className="font-bold text-base text-white">
                              {pillar.title}
                            </h5>
                          </div>
                          <p className="text-xs text-neutral-300 leading-relaxed mb-3">
                            {pillar.desc}
                          </p>
                        </div>

                        <div className="p-3 rounded-xl bg-cyan-950/40 border border-cyan-500/20 text-xs text-cyan-200 font-medium">
                          <strong>Live In-Store Impact:</strong> {pillar.supermarketUse}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Interactive Phone Simulation: Live 30-Min WhatsApp AI Grocery Bot */}
                <div className="rounded-3xl bg-[#121820] border-2 border-emerald-500/30 p-6 sm:p-8">
                  <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
                    <div className="max-w-md">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-black uppercase tracking-widest mb-3 border border-emerald-400/30">
                        <Bot className="w-3.5 h-3.5" />
                        <span>Interactive AI Bot Workflow</span>
                      </span>
                      <h4 className="text-2xl sm:text-3xl font-black text-white uppercase tracking-tight">
                        WhatsApp AI Smart Ration Assistant
                      </h4>
                      <p className="text-xs sm:text-sm text-neutral-300 mt-2 leading-relaxed">
                        Customers in Bihar don&apos;t want complex apps. They order everyday groceries with a single WhatsApp text or voice note. Our autonomous AI handles cart calculations, stock check, UPI link generation, and rider dispatch.
                      </p>
                      
                      <div className="mt-4 space-y-2">
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                          <CheckCheck className="w-4 h-4" />
                          <span>Understands Hindi, English & Maithili voice notes</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                          <CheckCheck className="w-4 h-4" />
                          <span>Instant itemized digital PDF bill generation</span>
                        </div>
                        <div className="flex items-center gap-2 text-xs font-bold text-emerald-400">
                          <CheckCheck className="w-4 h-4" />
                          <span>Zero commission (unlike Swiggy / Blinkit 25% cuts)</span>
                        </div>
                      </div>
                    </div>

                    {/* WhatsApp Mock Chat Window */}
                    <div className="w-full max-w-sm rounded-2xl bg-[#0B141A] border-2 border-emerald-500/40 overflow-hidden shadow-2xl">
                      {/* WhatsApp Header */}
                      <div className="bg-[#202C33] p-3 flex items-center gap-3 border-b border-white/10">
                        <div className="w-9 h-9 rounded-full bg-emerald-500 flex items-center justify-center text-black font-black text-xs">
                          RM
                        </div>
                        <div>
                          <strong className="block text-xs text-white font-bold">
                            Rajeshwar Supermarket Bot
                          </strong>
                          <span className="block text-[10px] text-emerald-400 font-medium">
                            ● Active 24/7 • Instant Delivery
                          </span>
                        </div>
                      </div>

                      {/* Chat Body */}
                      <div className="p-3.5 space-y-3 max-h-[320px] overflow-y-auto text-xs bg-[radial-gradient(#1f2c34_1px,transparent_1px)] [background-size:16px_16px]">
                        {SUPERMARKET_CASE_STUDY.mockConversation.map((msg, idx) => (
                          <div
                            key={idx}
                            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                          >
                            <div
                              className={`max-w-[85%] p-3 rounded-2xl whitespace-pre-line leading-relaxed text-xs ${
                                msg.sender === "user"
                                  ? "bg-[#005C4B] text-white rounded-br-none"
                                  : "bg-[#202C33] text-neutral-100 rounded-bl-none border border-white/10"
                              }`}
                            >
                              {msg.text}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ) : (
              /* TAB 2: ALL 32 SERVICES CATALOG (With In-Depth Scope & Supermarket Example on Every Service) */
              <div className="grid grid-cols-1 lg:grid-cols-12 flex-1 overflow-hidden">
                
                {/* Left Column: 8 Sub-Services List (Scrollable) */}
                <div className="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-white/10 bg-[#090C10]/80 p-3 sm:p-4 overflow-y-auto max-h-[200px] sm:max-h-[240px] lg:max-h-[calc(94vh-180px)]">
                  <div className="text-[11px] font-black uppercase tracking-widest text-neutral-400 px-2 py-1 mb-2">
                    Scope of Work ({currentCategory.subServices.length})
                  </div>

                  <div className="space-y-1.5">
                    {currentCategory.subServices.map((sub, sIdx) => {
                      const isSelected = selectedSubServiceIndex === sIdx;
                      return (
                        <button
                          key={sub.id}
                          type="button"
                          onClick={() => onSelectSubService(sIdx)}
                          className={`w-full text-left p-3 rounded-2xl transition-all flex items-center justify-between gap-3 border cursor-pointer ${
                            isSelected
                              ? "bg-white/15 border-white/40 text-white shadow-md translate-x-1"
                              : "bg-white/[0.03] hover:bg-white/[0.08] border-white/5 text-neutral-400 hover:text-white"
                          }`}
                        >
                          <div className="flex items-center gap-2.5 min-w-0">
                            <span className={`w-6 h-6 rounded-lg flex items-center justify-center text-xs font-black shrink-0 ${
                              isSelected ? `${currentCategory.accentBg} text-white` : "bg-white/10 text-neutral-400"
                            }`}>
                              0{sIdx + 1}
                            </span>
                            <div className="truncate">
                              <strong className="block text-xs sm:text-sm font-bold text-white truncate">
                                {sub.name}
                              </strong>
                              <span className="block text-[10px] text-neutral-400 truncate">
                                {sub.tagline}
                              </span>
                            </div>
                          </div>

                          <ChevronRight className={`w-4 h-4 shrink-0 transition-transform ${isSelected ? "text-white translate-x-1" : "text-neutral-600"}`} />
                        </button>
                      );
                    })}
                  </div>
                </div>

                {/* Right Column: In-Depth Service Specification */}
                <div className="lg:col-span-8 p-4 sm:p-6 lg:p-8 overflow-y-auto max-h-[calc(94vh-260px)] lg:max-h-[calc(94vh-180px)] bg-gradient-to-b from-[#0E1318] to-[#07090C]">
                  
                  {/* Active Sub-Service Header */}
                  <div className="mb-6">
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] sm:text-xs font-black uppercase tracking-widest ${currentCategory.accentBg} text-white shadow-xs`}>
                        <span>Service 0{selectedSubServiceIndex + 1} of 08</span>
                      </span>
                      <span className="text-xs font-mono font-bold text-neutral-400 uppercase tracking-wider">
                        {currentCategory.title}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white uppercase tracking-tight leading-tight">
                      {currentSubService.name}
                    </h3>

                    <p className={`text-sm sm:text-base font-semibold mt-1 ${currentCategory.accentText}`}>
                      {currentSubService.tagline}
                    </p>
                  </div>

                  {/* Supermarket Specific Real-World Deployment Callout */}
                  <div className="p-4 rounded-2xl bg-amber-950/30 border border-amber-500/30 text-amber-200 text-xs sm:text-sm font-medium mb-6 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-amber-500 text-black shrink-0 mt-0.5">
                      <Store className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-black uppercase tracking-wider text-amber-400 mb-0.5">
                        Real-World Retail & Supermarket Application:
                      </strong>
                      <p className="leading-relaxed">
                        {currentSubService.supermarketExample}
                      </p>
                    </div>
                  </div>

                  {/* In-Depth Execution Scope */}
                  <div className="bg-white/[0.04] border border-white/10 rounded-2xl p-4 sm:p-5 mb-6">
                    <h4 className="text-xs font-black uppercase tracking-wider text-neutral-400 mb-2 flex items-center gap-2">
                      <Zap className="w-3.5 h-3.5 text-yellow-400" />
                      How Bihar Stack Executes This
                    </h4>
                    <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed font-normal">
                      {currentSubService.description}
                    </p>
                  </div>

                  {/* Key Deliverables Checklist */}
                  <div className="mb-6">
                    <h4 className="text-xs font-black uppercase tracking-widest text-neutral-300 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-emerald-400" />
                      Key Deliverables & Included Features
                    </h4>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {currentSubService.deliverables.map((item, dIdx) => (
                        <div
                          key={dIdx}
                          className="bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 p-3 rounded-xl flex items-start gap-2.5 transition-colors"
                        >
                          <div className="p-1 rounded-full bg-emerald-500/20 text-emerald-400 shrink-0 mt-0.5">
                            <Check className="w-3 h-3" />
                          </div>
                          <span className="text-xs text-neutral-200 font-medium leading-snug">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Business Impact & Measurable Outcome */}
                  <div className="p-4 rounded-2xl bg-gradient-to-r from-emerald-950/40 via-cyan-950/30 to-slate-900/40 border border-emerald-500/30 mb-6 flex items-start gap-3">
                    <div className="p-2 rounded-xl bg-emerald-500 text-black shrink-0 mt-0.5">
                      <Flame className="w-4 h-4" />
                    </div>
                    <div>
                      <strong className="block text-xs font-black uppercase tracking-wider text-emerald-400 mb-0.5">
                        Business Impact & ROI Guarantee
                      </strong>
                      <p className="text-xs sm:text-sm text-emerald-100 font-medium">
                        {currentSubService.impact}
                      </p>
                    </div>
                  </div>

                  {/* Tools & Tech Stack */}
                  <div className="mb-8">
                    <h4 className="text-xs font-black uppercase tracking-widest text-neutral-400 mb-2.5">
                      Production Stack & Tooling
                    </h4>
                    <div className="flex flex-wrap items-center gap-2">
                      {currentSubService.tools.map((tool, tIdx) => (
                        <span
                          key={tIdx}
                          className="px-3 py-1 rounded-lg bg-white/5 border border-white/15 text-neutral-300 text-xs font-bold font-mono tracking-wide"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Bar & Quick Nav */}
                  <div className="pt-4 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4">
                    
                    {/* Prev / Next Switchers */}
                    <div className="flex items-center gap-2 w-full sm:w-auto">
                      <button
                        type="button"
                        onClick={handlePrevSubService}
                        className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all cursor-pointer"
                      >
                        ← Prev Service
                      </button>
                      <button
                        type="button"
                        onClick={handleNextSubService}
                        className="flex-1 sm:flex-initial px-3.5 py-2 rounded-xl bg-white/10 hover:bg-white/20 border border-white/15 text-xs font-bold text-white transition-all cursor-pointer"
                      >
                        Next Service →
                      </button>
                    </div>

                    {/* Direct Contact CTAs */}
                    <div className="flex items-center gap-3 w-full sm:w-auto">
                      <a
                        href={`https://wa.me/917979067849?text=${whatsappMessage}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 sm:flex-initial px-4 py-2.5 rounded-full bg-emerald-500 hover:bg-emerald-400 text-black text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-1.5 shadow-md"
                      >
                        <span>WhatsApp Enquire</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>

                      <button
                        type="button"
                        onClick={handleGetStarted}
                        className={`flex-1 sm:flex-initial px-5 py-2.5 rounded-full ${currentCategory.accentBg} hover:opacity-90 text-white text-xs font-black uppercase tracking-wider transition-all flex items-center justify-center gap-2 shadow-md cursor-pointer border border-white/20`}
                      >
                        <span>Start Project</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </button>
                    </div>

                  </div>

                </div>

              </div>
            )}

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

export default function ServicesSection() {
  const [modalOpen, setModalOpen] = useState(false);
  const [activeCategoryIdx, setActiveCategoryIdx] = useState(0);
  const [activeSubServiceIdx, setActiveSubServiceIdx] = useState(0);
  const [modalInitialView, setModalInitialView] = useState<"services" | "supermarket">("services");

  const openServiceModal = (categoryIdx: number, subServiceIdx: number = 0, view: "services" | "supermarket" = "services") => {
    setActiveCategoryIdx(categoryIdx);
    setActiveSubServiceIdx(subServiceIdx);
    setModalInitialView(view);
    setModalOpen(true);
  };

  return (
    <section id="services" className="pt-4 sm:pt-6 pb-20 bg-[#f0f0f0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Centered Top Header for 3rd Page (Navy Bubble Cluster Frame from User Reference Image) */}
        <div className="text-center max-w-4xl mx-auto mb-8">
          
          {/* Compact Bubble Cluster Medallion Frame with Bihar Stack Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mt-1 sm:mt-1 mb-2 sm:mb-3 relative select-none"
          >
            <div className="relative inline-flex items-center my-0 max-w-full">
              
              {/* Main Sleek Horizontal Header Container */}
              <div className="relative pl-12 sm:pl-16 pr-3.5 sm:pr-5 py-1.5 sm:py-2 flex flex-col items-center justify-center">
                
                {/* Heading Text + Question Mark Emoji directly to its right */}
                <div className="relative inline-flex items-center justify-center">
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-[#0A2540]">
                    What We Offer
                  </h2>

                  <InteractiveQuestionMark />
                </div>

                {/* Ultra-Slim 5-Step Connected Chevron Arrow Ribbon */}
                <div className="w-full mt-1.5 sm:mt-2 select-none drop-shadow-sm">
                  <div className="flex items-center justify-center w-full">
                    {[
                      { id: 1, bg: "bg-[#0B2E4C]", icon: <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 2, bg: "bg-[#0088CC]", icon: <DollarSign className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 3, bg: "bg-[#00B58A]", icon: <Settings className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 4, bg: "bg-[#F59E0B]", icon: <Package className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 5, bg: "bg-[#EF4444]", icon: <Wallet className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                    ].map((step, idx) => (
                      <div
                        key={step.id}
                        className={`relative flex-1 h-3.5 sm:h-4.5 ${step.bg} flex items-center justify-center transition-transform hover:scale-105 ${idx > 0 ? "-ml-1.5 sm:-ml-2" : ""}`}
                        style={{
                          clipPath: idx === 0 
                            ? "polygon(0% 0%, calc(100% - 6px) 0%, 100% 50%, calc(100% - 6px) 100%, 0% 100%)" 
                            : "polygon(0% 0%, calc(100% - 6px) 0%, 100% 50%, calc(100% - 6px) 100%, 0% 100%, 6px 50%)"
                        }}
                      >
                        <div className="pl-0.5 sm:pl-1 pr-0.5">
                          {step.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Left Bubbles Medallion Cluster with Bihar Stack Logo & 360° Orbiting Satellite Bubbles */}
              <div className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  
                  {/* 1. Main Central Disc with Large Edge-to-Edge Bihar Stack Logo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FAFDFE] to-[#E2E8F0] border-2 border-[#CBD5E1] shadow-[0_4px_14px_rgba(0,0,0,0.25)] flex items-center justify-center z-10 overflow-hidden">
                    <img
                      src="/images/biharstack-brand-logo.png"
                      alt="BiharStack Logo"
                      className="w-full h-full object-cover scale-110 drop-shadow-sm"
                    />
                  </div>

                  {/* True 360° Tight-Bound Pulsating Orbit Ring */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 sm:-inset-3.5 z-20 pointer-events-none rounded-full"
                  >
                    <div className="absolute top-[50%] left-[98%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4.5 h-4.5 sm:w-6 sm:h-6 rounded-full bg-[#0A2540] border-2 border-white shadow-md flex items-center justify-center">
                        <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                      </div>
                    </div>
                    <div className="absolute top-[18%] left-[76%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 sm:w-5.5 sm:h-5.5 rounded-full bg-[#1E3A8A] border-2 border-white shadow-sm flex items-center justify-center">
                        <Palette className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-pink-400" />
                      </div>
                    </div>
                    <div className="absolute top-[2%] left-[24%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full bg-[#EA580C] border-2 border-white shadow-md flex items-center justify-center">
                        <Megaphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-300" />
                      </div>
                    </div>
                    <div className="absolute top-[50%] left-[2%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full bg-[#031427] border-2 border-white shadow-md flex items-center justify-center">
                        <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                      </div>
                    </div>
                    <div className="absolute top-[98%] left-[24%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-4 h-4 sm:w-5.5 sm:h-5.5 rounded-full bg-[#0284C7] border-2 border-white shadow-sm flex items-center justify-center">
                        <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-amber-300" />
                      </div>
                    </div>
                    <div className="absolute top-[85%] left-[76%] -translate-x-1/2 -translate-y-1/2">
                      <div className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-gradient-to-b from-white to-[#CBD5E1] border border-neutral-300 shadow-md flex items-center justify-center">
                        <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-orange-500" />
                      </div>
                    </div>
                  </motion.div>

                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-[#E2E8F0] border border-neutral-300 shadow-sm z-0" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        <div className="cards-container">
          {/* CARD 01: DIGITAL MARKETING (BURGUNDY ACE OF SPADES) */}
          <InteractivePlayingCard className="card-burgundy" delay={0.1} cardIndex={1}>
            <div>
              <h2 className="card-title">Digital Marketing & Performance</h2>

              <div className="sub-grid">
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><Share2 className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Social Media Marketing</span></Link>
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><TrendingUp className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Performance Marketing</span></Link>
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><Target className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Meta Ads & Google Ads</span></Link>
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><Search className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Search Engine Optimization (SEO)</span></Link>
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><MapPin className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Local SEO & GMB Ranking</span></Link>
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><Users className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>High-Converting Lead Gen</span></Link>
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><Award className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Influencer Outreach</span></Link>
                <Link href="/services/digital-marketing" className="sub-item text-left cursor-pointer"><Mail className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Automated Email Campaigns</span></Link>
              </div>
            </div>

            <div className="card-footer">
              <Link
                href="/services/digital-marketing"
                className="btn-start group cursor-pointer"
              >
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </Link>
            </div>
          </InteractivePlayingCard>

          {/* CARD 02: BRANDING & CREATIVE (CREAM ACE OF HEARTS) */}
          <InteractivePlayingCard className="card-cream" delay={0.25} cardIndex={2}>
            <div>
              <h2 className="card-title">Branding & Creative Design</h2>

              <div className="sub-grid">
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><Sparkles className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Logo & Visual Brand Identity</span></Link>
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><Palette className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Graphic & Social Media Creatives</span></Link>
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><Layout className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>UI/UX Design for Web & Apps</span></Link>
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><Film className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Motion Graphics & 3D Visuals</span></Link>
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><Video className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>High-Production Video Editing</span></Link>
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><Package className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Product Branding & Packaging</span></Link>
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><BookOpen className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Brand Guidelines & Voice</span></Link>
                <Link href="/services/branding-creative" className="sub-item text-left cursor-pointer"><ImageIcon className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Marketing Collaterals</span></Link>
              </div>
            </div>

            <div className="card-footer">
              <Link
                href="/services/branding-creative"
                className="btn-start group cursor-pointer"
              >
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </Link>
            </div>
          </InteractivePlayingCard>

          {/* CARD 03: WEBSITE & CUSTOM TECH (OBSIDIAN ACE OF DIAMONDS) */}
          <InteractivePlayingCard className="card-obsidian" delay={0.4} cardIndex={3}>
            <div>
              <h2 className="card-title">Website & Custom Technology</h2>

              <div className="sub-grid">
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><Globe className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Custom Business Websites</span></Link>
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><ShoppingCart className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>E-commerce Platforms (Shopify/Next)</span></Link>
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><Rocket className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>High-Converting Landing Pages</span></Link>
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><Code2 className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Full-Stack Custom Web Apps</span></Link>
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><Smartphone className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>iOS & Android Mobile Apps</span></Link>
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><Cloud className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>SaaS Platform Development</span></Link>
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><Cpu className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>REST & GraphQL API Integration</span></Link>
                <Link href="/services/website-technology" className="sub-item text-left cursor-pointer"><Gauge className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Speed & Core Web Vitals Optimization</span></Link>
              </div>
            </div>

            <div className="card-footer">
              <Link
                href="/services/website-technology"
                className="btn-start group cursor-pointer"
              >
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </Link>
            </div>
          </InteractivePlayingCard>

          {/* CARD 04: AI & WORKFLOW AUTOMATION (EMERALD ACE OF CLUBS) */}
          <InteractivePlayingCard className="card-emerald" delay={0.55} cardIndex={4}>
            <div>
              <h2 className="card-title">AI & Workflow Automation</h2>

              <div className="sub-grid">
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><Bot className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Custom AI Chatbots & Knowledge Bases</span></Link>
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><MessageSquare className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>WhatsApp & CRM Automation</span></Link>
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><Workflow className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Business Process Automation</span></Link>
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><Brain className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Autonomous AI Agents</span></Link>
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><Sparkles className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>AI Content & Asset Creation Pipelines</span></Link>
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><Layers className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Zapier / Make Workflow Automation</span></Link>
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><UserPlus className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Lead Enrichment & Auto-Nurturing</span></Link>
                <Link href="/services/ai-automation" className="sub-item text-left cursor-pointer"><ShieldCheck className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Bespoke Enterprise AI Integration</span></Link>
              </div>
            </div>

            <div className="card-footer">
              <Link
                href="/services/ai-automation"
                className="btn-start group cursor-pointer"
              >
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </Link>
            </div>
          </InteractivePlayingCard>
        </div>
      </div>

      {/* Global Interactive Service Detail & Supermarket Blueprint Modal */}
      <ServiceDetailModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        selectedCategoryIndex={activeCategoryIdx}
        onSelectCategory={setActiveCategoryIdx}
        selectedSubServiceIndex={activeSubServiceIdx}
        onSelectSubService={setActiveSubServiceIdx}
        initialView={modalInitialView}
      />
    </section>
  );
}
