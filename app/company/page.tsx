"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  Compass,
  Zap,
  Bot,
  HeartHandshake,
  TrendingUp,
  MapPin,
  Calendar,
  Users,
  Globe2,
  Award,
  Briefcase,
  Sparkles,
  Building2,
  Cpu,
  Linkedin,
  Twitter,
  Github,
  Dribbble,
  Layers,
  ChevronRight,
  CheckCircle2,
  Quote,
  Coffee,
  Lightbulb,
  GraduationCap,
  PartyPopper,
  Laptop,
  Heart,
  ExternalLink,
  ShieldCheck,
  Target
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

// ================= DATA STRUCTURES ================= //

const QUICK_FACTS = [
  { icon: MapPin, label: "HQ Based In", value: "Madhubani, Bihar", subtext: "Serving Worldwide" },
  { icon: Calendar, label: "Founded", value: "2025", subtext: "2+ Years Exp" },
  { icon: Users, label: "Core Team", value: "15+ Minds", subtext: "Engineers & Strategists" },
  { icon: Globe2, label: "Reach", value: "Global Reach", subtext: "Serving Worldwide" },
  { icon: Award, label: "Delivered", value: "20+ Projects", subtext: "95% Client Retention" },
];

const BELIEFS = [
  {
    icon: Target,
    tag: "IMPACT FIRST",
    title: "Purpose Over Profit",
    description:
      "We exist to create real digital impact, not just generate invoices. Every project we architect must solve a fundamental operational friction — whether helping a traditional Bihar enterprise modernize or building autonomous AI pipelines.",
    highlight: "Real ROI & Transformation",
  },
  {
    icon: Building2,
    tag: "ROOTS & AMBITION",
    title: "Bihar First, Global Next",
    description:
      "We hire talent from Bihar. We train and mentor in Bihar. We build from Madhubani. But the software, brands, and automation systems we ship are engineered to outcompete Silicon Valley and Bangalore standards.",
    highlight: "Local Roots, Global Excellence",
  },
  {
    icon: Zap,
    tag: "ENGINEERING DISCIPLINE",
    title: "Speed With Soul",
    description:
      "We ship fast, but we never compromise what truly counts — architectural clarity, human-centered UI/UX, and robust code. True speed is the byproduct of deep technical mastery, not reckless shortcuts.",
    highlight: "Zero Technical Debt",
  },
  {
    icon: Bot,
    tag: "CORE FOUNDATION",
    title: "AI Embedded, Not Added",
    description:
      "We don't treat AI as a superficial marketing keyword. We embed autonomous agents, intelligent workflow automations, and intelligent data pipelines right into the core stack of every product we deploy.",
    highlight: "Autonomous & Future-Proof",
  },
  {
    icon: HeartHandshake,
    tag: "COLLABORATION",
    title: "Partnership, Not Transaction",
    description:
      "We don't have temporary customers; we build lasting technical alliances. When you collaborate with BIHAR STACK, you gain a dedicated growth and engineering squad that treats your balance sheet like its own.",
    highlight: "Skin in the Game",
  },
  {
    icon: TrendingUp,
    tag: "PRECISION",
    title: "Data Drives Every Decision",
    description:
      "Creativity without analytical feedback is guesswork. Every user journey we design, every API we optimize, and every marketing flywheel we launch is backed by verifiable telemetry and measurable ROI.",
    highlight: "Measurable Milestones",
  },
];

const TEAM_MEMBERS = [
  {
    name: "ADITYA KUMAR",
    role: "Founder & Chief Executive Officer",
    tag: "The Visionary",
    bio: "Pioneering the modern technology movement from Bihar. Obsessed with scalable systems, regional talent empowerment, and building global-grade digital products.",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "HARSHNATH",
    role: "Chief Technology Officer & Lead Architect",
    tag: "The Architect",
    bio: "Full-stack architect with deep expertise in distributed microservices, Next.js, and high-concurrency cloud infrastructure.",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "ANJALI SINGH",
    role: "Head of Branding & Visual Design",
    tag: "The Artist",
    bio: "Turns complex value propositions into distinct brand identities and intuitive aesthetics that stick in users' minds.",
    socials: { linkedin: "https://linkedin.com", dribbble: "https://dribbble.com" },
  },
  {
    name: "RAM KUMAR",
    role: "Head of Growth & Performance Marketing",
    tag: "The Strategist",
    bio: "Data-driven growth hacker specializing in hyper-targeted customer acquisition, CAC reduction, and multi-channel revenue funnels.",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "AMAN KUMAR",
    role: "Senior Full-Stack & Cloud Engineer",
    tag: "The Coder",
    bio: "Builds lightning-fast reactive web apps, robust backend APIs, and real-time database integrations with millimeter precision.",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "NEHA SINGH",
    role: "Lead UI/UX & Interaction Designer",
    tag: "The Thinker",
    bio: "Obsessed with micro-interactions, responsive design systems, and frictionless conversion psychology.",
    socials: { linkedin: "https://linkedin.com", dribbble: "https://dribbble.com" },
  },
  {
    name: "DHANANJAY KUMAR",
    role: "Head of AI Research & Automation",
    tag: "The Innovator",
    bio: "Spearheading our autonomous LLM agent pipelines, custom RAG models, and enterprise automated workflows.",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "GOVIND KUMAR",
    role: "Operations & Partner Success Lead",
    tag: "The Anchor",
    bio: "The powerhouse ensuring sprint deadlines are exceeded, client communication is transparent, and quality assurance remains 100%.",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "VISHAL ROY",
    role: "Lead Mobile & Cross-Platform Engineer",
    tag: "The Specialist",
    bio: "Architects responsive iOS & Android mobile platforms and seamless micro-apps with high performance and offline capabilities.",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "GOVIND KUMAR GAUTAM",
    role: "Autonomous AI & Automation Systems Engineer",
    tag: "The Builder",
    bio: "Designs production agentic workflows, multi-tool LLM routing, and WhatsApp enterprise AI systems.",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "RAMSHANKAR YADAV",
    role: "Backend Systems & Database Specialist",
    tag: "The Engineer",
    bio: "Specializes in high-throughput PostgreSQL/Redis clustering, GraphQL gateways, and serverless compute pipelines.",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "SUSHANT KUMAR",
    role: "Senior Full-Stack Developer & DevOps Lead",
    tag: "The Deployer",
    bio: "Streamlines CI/CD deployment pipelines, containerized Docker clusters, and edge caching networks.",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "ALOK KUMAR",
    role: "Enterprise Solutions & Digital Transformation Lead",
    tag: "The Consultant",
    bio: "Helps regional businesses and enterprise brands modernize legacy operations into high-velocity digital products.",
    socials: { linkedin: "https://linkedin.com" },
  },
  {
    name: "ABHISHEK KUMAR",
    role: "Data Analyst & Growth Funnel Optimizer",
    tag: "The Analyst",
    bio: "Transforms complex marketing telemetry into actionable insights, conversion boosts, and measurable client ROI.",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "Dr. SAKSHI KUMARI",
    role: "Research Lead & Enterprise Strategy Advisor",
    tag: "The Researcher",
    bio: "Advises our frontier AI roadmaps, cognitive computing methodologies, and organizational technology governance.",
    socials: { linkedin: "https://linkedin.com" },
  },
];

const CULTURE_POINTS = [
  {
    icon: Sparkles,
    title: "The Creative Hub in Madhubani",
    desc: "Our workspace is built for intense ideation, rapid prototyping, and high collaboration. Open desks, brainstorming walls, and zero corporate bureaucracy.",
    stat: "Open & Agile",
  },
  {
    icon: Layers,
    title: "Weekly Strategy & Tech Huddles",
    desc: "Every sprint kicks off with open problem-solving sessions where junior developers and founders debate architecture with equal voice.",
    stat: "Zero Hierarchy",
  },
  {
    icon: Cpu,
    title: "Continuous Upskilling",
    desc: "We dedicate 10% of every week to learning new frameworks, researching frontier AI agent patterns, and mastering state-of-the-art tools.",
    stat: "Lifelong Mastery",
  },
  {
    icon: Award,
    title: "Relentless Celebration of Wins",
    desc: "Every customer milestone, major product launch, and team personal breakthrough is celebrated with good food, joy, and shared pride.",
    stat: "High Morale",
  },
  {
    icon: Globe2,
    title: "Hybrid & High-Autonomy",
    desc: "While our spiritual home is in Bihar, our workflow is modern. We focus solely on deliverable output, velocity, and creative excellence.",
    stat: "Output Focused",
  },
  {
    icon: HeartHandshake,
    title: "Giving Back to the Ecosystem",
    desc: "We conduct hands-on technology masterclasses for students and small business founders across Bihar to accelerate digital literacy.",
    stat: "Community First",
  },
];

const MILESTONES = [
  {
    year: "Jan 2025",
    title: "Genesis & The First Defiant Laptop",
    desc: "Founded in a small room in Madhubani, Bihar by a group of engineers refusing to migrate, with a single mission: Build Bihar. Scale Businesses.",
    highlight: "Founded in Madhubani, Bihar",
  },
  {
    year: "Mid 2025",
    title: "The First Enterprise & POS Breakthrough",
    desc: "Shipped custom billing, inventory, and retail ERP stacks for regional enterprises, proving regional talent outpaces traditional agencies.",
    highlight: "Initial Enterprise Delivery",
  },
  {
    year: "Late 2025",
    title: "Autonomous AI & Growth Division",
    desc: "Integrated custom LLMs, autonomous support agents, and WhatsApp automated workflows for high-growth healthcare and D2C brands.",
    highlight: "Autonomous AI Pipeline",
  },
  {
    year: "2026 & Beyond",
    title: "20+ Enterprise Projects Milestone",
    desc: "Delivered high-performance web platforms and digital engines for clients worldwide with 95% client retention and scalable impact.",
    highlight: "20+ Projects Delivered Worldwide",
  },
];

const STATS_DATA = [
  { number: "20+", label: "Projects Shipped", sub: "Enterprise & startup apps", color: "text-black" },
  { number: "15+", label: "Active Partners", sub: "Serving clients worldwide", color: "text-black" },
  { number: "95%", label: "Client Retention Rate", sub: "Long-term engineering partners", color: "text-black" },
  { number: "100%", label: "Delivery Guarantee", sub: "On-time & SLA-backed", color: "text-black" },
  { number: "15+", label: "Core Specialists", sub: "Engineers & Designers in Bihar", color: "text-black" },
  { number: "24/7", label: "Dedicated Support", sub: "Direct WhatsApp & SLA support", color: "text-black" },
];

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Deep Discovery & Audit",
    desc: "We analyze your business bottlenecks, competitor dynamics, and customer journey before writing a single line of code.",
    accent: "bg-red-500",
  },
  {
    step: "02",
    title: "Strategic Architecture",
    desc: "We design a high-converting growth blueprint, tech stack diagram, and data flow built to handle extreme scale.",
    accent: "bg-black",
  },
  {
    step: "03",
    title: "High-Fidelity UI/UX Design",
    desc: "Interactive prototypes, custom typography, and responsive component systems crafted for high conversion.",
    accent: "bg-neutral-800",
  },
  {
    step: "04",
    title: "Full-Stack Agile Engineering",
    desc: "Next.js, TypeScript, PostgreSQL, and autonomous AI pipelines written with clean code discipline.",
    accent: "bg-black",
  },
  {
    step: "05",
    title: "Rigorous QA & Launch",
    desc: "Security auditing, load testing, SEO optimization, and seamless zero-downtime production deployment.",
    accent: "bg-red-600",
  },
  {
    step: "06",
    title: "Growth, Telemetry & Scale",
    desc: "Post-launch performance analytics, conversion rate optimization, and ongoing architectural scaling.",
    accent: "bg-neutral-900",
  },
];

const ROADMAP_ITEMS = [
  {
    year: "2026",
    title: "Madhubani Innovation & Incubator Lab",
    desc: "Establishing Bihar's most advanced digital workspace and tech incubation center to nurture the next generation of regional developers and startup founders.",
    icon: Building2,
    badge: "Underway",
  },
  {
    year: "2027",
    title: "AI-Autonomous Enterprise Suite",
    desc: "Releasing proprietary plug-and-play AI agents that automate 80% of routine customer support, sales qualification, and billing for local enterprises.",
    icon: Cpu,
    badge: "In Research",
  },
  {
    year: "2028",
    title: "Direct Global Expansion (Dubai & Singapore)",
    desc: "Opening on-the-ground client consultation offices in the Middle East and Southeast Asia to direct global tech contracts into Bihar talent.",
    icon: Globe2,
    badge: "Future Vision",
  },
];

export default function CompanyDeepDivePage() {
  const [activeSection, setActiveSection] = useState("story");
  const [showAllTeam, setShowAllTeam] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const sectionIds = [
    { id: "story", label: "Our Story" },
    { id: "beliefs", label: "Philosophy" },
    { id: "team", label: "The Builders" },
    { id: "culture", label: "Culture" },
    { id: "milestones", label: "Journey" },
    { id: "numbers", label: "Impact" },
    { id: "process", label: "Process" },
    { id: "roadmap", label: "Roadmap" },
    { id: "join", label: "Partner" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 250;
      for (const section of sectionIds) {
        const element = document.getElementById(section.id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <main className="min-h-screen bg-[#f0f0f0] text-slate-900 relative w-full overflow-x-hidden selection:bg-black selection:text-white">
      {/* Top Scroll Progress Bar */}
      <motion.div
        style={{ scaleX }}
        className="fixed top-0 left-0 right-0 h-1 bg-black z-[100] origin-left"
      />

      {/* Global Navigation */}
      <Navbar />

      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-32 pb-16 lg:pt-40 lg:pb-24 border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          {/* Breadcrumb & Identity */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-600 mb-6">
            <Link href="/" className="hover:text-black transition-colors">
              Home
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-400" />
            <span className="text-black bg-white px-2.5 py-0.5 rounded border border-black/20 shadow-xs">
              Company Deep Dive
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Column: Text & Content */}
            <div className="lg:col-span-7">
              {/* Top Pill */}
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="inline-flex items-center px-3.5 py-1.5 rounded-full bg-white border border-black text-black text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#000000] mb-6"
              >
                <span>Everything About Us • Built in Bihar, Made for the World</span>
              </motion.div>

              {/* Headline */}
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="font-display text-4xl sm:text-6xl lg:text-6xl xl:text-7xl font-black tracking-tight text-black uppercase leading-[1.05] mb-6"
              >
                This Is <br />
                <span className="underline underline-offset-8 decoration-4 decoration-black">
                  BIHAR STACK.
                </span>
              </motion.h1>

              {/* Subheadline */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-base sm:text-xl lg:text-2xl text-neutral-800 font-medium leading-relaxed mb-8 max-w-2xl"
              >
                Our story. Our builders. Our engineering culture. Our vision. Everything that defines who we are — born in Madhubani, scaling enterprises worldwide.
              </motion.p>

              {/* Action Buttons: 3D Flip Perspective Button */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-wrap items-center gap-4"
              >
                <a href="#team" className="[perspective:1000px] inline-block cursor-pointer">
                  <motion.div
                    initial={false}
                    whileHover={{ rotateX: 180, y: -2 }}
                    whileTap={{ y: 2 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="relative cursor-pointer w-60 h-12 rounded-xl [transform-style:preserve-3d] select-none"
                  >
                    {/* Front Face */}
                    <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl bg-red-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 border-2 border-black border-t-2 border-t-red-300 border-b-2 border-b-red-950 shadow-[4px_4px_0px_0px_#000000]">
                      <span>MEET THE BUILDERS</span>
                      <span className="w-6 h-6 rounded-md bg-black text-white flex items-center justify-center border border-black shadow-[1px_1px_0px_0px_#ffffff]">
                        <ArrowRight className="w-3.5 h-3.5 text-white" />
                      </span>
                    </div>

                    {/* Back Face (Flipped) */}
                    <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl bg-slate-950 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 border-2 border-black border-t-2 border-t-cyan-400 border-b-2 border-b-cyan-950 shadow-[4px_4px_0px_0px_#000000]">
                      <span>EXPLORE TEAM</span>
                      <span className="w-6 h-6 rounded-md bg-cyan-400 text-slate-950 flex items-center justify-center font-black">
                        <ArrowRight className="w-3.5 h-3.5 text-slate-950" />
                      </span>
                    </div>
                  </motion.div>
                </a>
              </motion.div>
            </div>

            {/* Right Column: Multitasking Digital Hands (Static & Stable) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="lg:col-span-5 flex items-center justify-center relative select-none"
            >
              <div className="relative w-full max-w-[460px] flex items-center justify-center">
                <img
                  src="/images/company_multitasking_transparent.png"
                  alt="Bihar Stack Digital Multitasking Engine"
                  className="w-full h-auto object-contain"
                />
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS HORIZONTAL STRIP ================= */}
      <section className="bg-black text-white border-b-2 border-black py-6 sticky top-[68px] z-40 shadow-md backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-800">
            {QUICK_FACTS.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <div key={index} className="pt-2 md:pt-0 md:px-4 first:pl-0 last:pr-0 flex items-start gap-3">
                  <div className="p-2 rounded bg-neutral-900 border border-neutral-700 shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-neutral-400">
                      {fact.label}
                    </span>
                    <strong className="block text-sm font-black text-white">
                      {fact.value}
                    </strong>
                    <span className="block text-[11px] text-neutral-400 font-medium">
                      {fact.subtext}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= STICKY TABLE OF CONTENTS NAVIGATION ================= */}
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 pt-8">
        <div className="bg-white border-2 border-black p-2 rounded-xl shadow-[4px_4px_0px_0px_#000000] flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-xs font-black uppercase tracking-widest text-neutral-400 px-3 shrink-0 flex items-center gap-1.5">
            <Compass className="w-3.5 h-3.5 text-black" />
            Jump To:
          </span>
          {sectionIds.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className={`px-3.5 py-1.5 rounded-lg text-xs font-black uppercase tracking-wider transition-all whitespace-nowrap shrink-0 ${
                activeSection === item.id
                  ? "bg-black text-white shadow-xs"
                  : "text-neutral-700 hover:text-black hover:bg-neutral-100"
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>

      {/* ================= SECTION 1: OUR ORIGIN STORY ================= */}
      <section id="story" className="py-16 lg:py-24 border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Left Narrative Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest">
                Our Origin Story
              </div>

              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black leading-tight">
                It Started With A Single Defiant Belief.
              </h2>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                In 2025, inside a small room in Madhubani, Bihar, a tight group of young engineers and designers confronted an uncomfortable reality: <em>Why was world-class technology talent always presumed to exist only in Bangalore, Gurgaon, or Silicon Valley?</em>
              </p>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                While others migrated out, we saw an immense, untapped ocean of hunger, raw intellect, and resilient engineering minds in Bihar. We refused to believe that geography dictates technological capability.
              </p>

              {/* Signature Quote Highlight */}
              <div className="p-6 bg-white border-2 border-black border-l-8 border-l-red-600 shadow-[6px_6px_0px_0px_#000000] my-6">
                <Quote className="w-8 h-8 text-neutral-300 mb-2" />
                <p className="font-display text-xl sm:text-2xl font-black italic text-black leading-snug">
                  &ldquo;We didn&apos;t leave Bihar to succeed. We stayed to rewrite the entire narrative.&rdquo;
                </p>
                <span className="block text-xs font-black uppercase tracking-widest text-neutral-600 mt-3">
                  — BIHAR STACK Founding Credo
                </span>
              </div>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                BIHAR STACK was born not as a generic agency, but as a technological movement. We began with one laptop, one client, and a non-negotiable standard: <strong>Build Bihar. Scale Businesses.</strong>
              </p>

              <p className="text-base sm:text-lg text-neutral-800 leading-relaxed font-normal">
                Today, we power full-scale digital transformations, high-performance web platforms, and autonomous AI workflows for modern growing enterprises worldwide. Our roots remain proudly in Bihar — and our standard remains uncompromisingly global.
              </p>
            </div>

            {/* Right Visual Story Stack: Exact Editorial Grid Aesthetics */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Card 01: Pure Off-White with Lime Glow */}
              <div className="relative rounded-[28px] bg-[#f8f9fa] border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000000] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_#000000] transition-all duration-300 overflow-hidden group">
                {/* Background Ambient Lime Glow */}
                <div className="absolute -top-10 -right-10 w-36 h-36 bg-[#d4ff32]/40 rounded-full blur-2xl pointer-events-none" />
                
                {/* Top Chapter Row */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    2025 • Chapter 01
                  </span>
                  <span className="text-[11px] font-black text-neutral-400 font-display uppercase tracking-wider">
                    The Genesis
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-black uppercase text-black leading-tight mb-2.5">
                    The First <br />
                    <span className="text-[#0a2540]">Breakthrough</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                    Deployed custom billing and inventory POS systems for Madhubani and Bihar retailers, proving that tailored software multiplies regional business velocity.
                  </p>
                </div>
              </div>

              {/* Card 02: Matte Dark Card with Tech Wireframe & Lime Text */}
              <div className="relative rounded-[28px] bg-[#121417] text-white border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000000] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_#000000] transition-all duration-300 overflow-hidden group">
                {/* Background Tech Wireframe / Spiral Overlay */}
                <div className="absolute right-3 top-3 w-28 h-28 opacity-20 pointer-events-none">
                  <svg viewBox="0 0 100 100" className="w-full h-full stroke-white fill-none stroke-[1.5]">
                    <circle cx="50" cy="50" r="40" />
                    <ellipse cx="50" cy="50" rx="40" ry="20" />
                    <line x1="10" y1="50" x2="90" y2="50" />
                    <line x1="50" y1="10" x2="50" y2="90" />
                  </svg>
                </div>

                {/* Top Chapter Row */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="inline-block px-3 py-1 bg-[#d4ff32] text-black text-[10px] font-black uppercase tracking-widest rounded-full">
                    2025-2026 • Chapter 02
                  </span>
                  <span className="text-[11px] font-black text-neutral-400 font-display uppercase tracking-wider">
                    AI Division
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-black uppercase text-white leading-tight mb-2.5">
                    Autonomous AI <br />
                    <span className="text-[#d4ff32]">& Growth Systems</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed font-medium">
                    Integrated custom LLMs, autonomous support agents, and WhatsApp automated workflows for high-growth healthcare and D2C brands.
                  </p>
                </div>
              </div>

              {/* Card 03: Neon Lime-Yellow Card */}
              <div className="relative rounded-[28px] bg-gradient-to-br from-[#d4ff32] via-[#e5ff65] to-[#f4f7f6] text-black border-2 border-black p-6 sm:p-8 shadow-[6px_6px_0px_0px_#000000] hover:translate-y-[-4px] hover:shadow-[10px_10px_0px_0px_#000000] transition-all duration-300 overflow-hidden group">
                
                {/* Top Chapter Row */}
                <div className="flex items-center justify-between mb-4 relative z-10">
                  <span className="inline-block px-3 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest rounded-full">
                    Present • Chapter 03
                  </span>
                  <span className="text-[11px] font-black text-black/70 font-display uppercase tracking-wider">
                    Worldwide Scale
                  </span>
                </div>

                <div className="relative z-10">
                  <h3 className="font-display text-2xl font-black uppercase text-black leading-tight mb-2.5">
                    20+ Enterprise <br />
                    <span className="underline underline-offset-4 decoration-2 decoration-black">Milestone</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-neutral-900 leading-relaxed font-semibold">
                    Delivered high-performance web platforms and digital engines for clients worldwide with 95% client retention and scalable impact.
                  </p>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHAT WE BELIEVE IN ================= */}
      <section id="beliefs" className="pt-8 pb-10 lg:pt-10 lg:pb-12 bg-white border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-2">
              Our Core DNA
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              What We Believe In
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mt-2">
              These principles aren&apos;t decorative poster slogans. They govern every pull request we merge, every contract we sign, and every client we serve.
            </p>
          </div>

          {/* 6 Belief Cards Grid - Clean Pastel Gradient & 3D Geometric Card Layout (Sleeker Height) */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            
            {/* Card 01: Warm Apricot / Peach Gradient with Angled 3D Chevron Lozenges */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#FDF0E6] via-[#FCE9DB] to-[#F8DCC5] border border-[#F2D1B8] p-6 sm:p-7 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-center group overflow-hidden min-h-[240px] sm:min-h-[250px]">
              <div className="relative z-10 max-w-[260px] sm:max-w-[280px]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-tight mb-2.5">
                  Purpose Over Profit
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {BELIEFS[0].description}
                </p>
              </div>

              {/* Right-Side 3D Abstract Graphic: Rounded Angled Chevron Lozenges */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-32 h-36 pointer-events-none opacity-90 group-hover:scale-105 transition-transform duration-500 flex flex-col justify-center gap-1.5">
                <div className="flex gap-1.5 justify-end">
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#F8B38D] to-[#E68A5C] shadow-sm transform -rotate-12" />
                  <div className="w-11 h-13 rounded-xl bg-gradient-to-br from-[#F5A175] to-[#DC7642] shadow-sm transform -rotate-12" />
                </div>
                <div className="flex gap-1.5 justify-end -mt-2">
                  <div className="w-11 h-13 rounded-xl bg-gradient-to-br from-[#F5A175] to-[#DC7642] shadow-sm transform -rotate-12" />
                  <div className="w-13 h-13 rounded-xl bg-gradient-to-br from-[#E68A5C] to-[#C95B25] shadow-sm transform -rotate-12" />
                </div>
              </div>
            </div>

            {/* Card 02: Warm Sand / Platinum Gradient with 3D Sphere & Cylinder Geometry */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#F6F5F2] via-[#EFECE6] to-[#E5E2DA] border border-[#DDD9D0] p-6 sm:p-7 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-center group overflow-hidden min-h-[240px] sm:min-h-[250px]">
              <div className="relative z-10 max-w-[260px] sm:max-w-[280px]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-tight mb-2.5">
                  Bihar First, Global Next
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {BELIEFS[1].description}
                </p>
              </div>

              {/* Right-Side 3D Abstract Graphic: Monochrome Spheres & Cylinders */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-32 h-36 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500 flex flex-col items-center justify-center gap-1.5">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#DCDAD4] via-[#B8B5AC] to-[#8C897E] shadow-md" />
                <div className="w-20 h-10 rounded-b-full bg-gradient-to-t from-[#B8B5AC] to-[#DCDAD4] shadow-sm -mt-2" />
              </div>
            </div>

            {/* Card 03: Soft Lavender / Lilac Gradient with Concentric Ripple Lens */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#F2EFF9] via-[#EAE3F5] to-[#DFD5EF] border border-[#D4C8EB] p-6 sm:p-7 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-center group overflow-hidden min-h-[240px] sm:min-h-[250px]">
              <div className="relative z-10 max-w-[260px] sm:max-w-[280px]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-tight mb-2.5">
                  Speed With Soul
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {BELIEFS[2].description}
                </p>
              </div>

              {/* Right-Side 3D Abstract Graphic: Concentric Purple Ripple Torus Lens */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-6 w-36 h-36 pointer-events-none opacity-80 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-[#C6B4EE] via-[#A890E0] to-[#8C70CF] p-4 shadow-inner flex items-center justify-center">
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-[#DFD5EF] to-[#BFAAE8] flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-[#7C5CFC]/80 shadow-md" />
                  </div>
                </div>
              </div>
            </div>

            {/* Card 04: Soft Sage / Mint Green Gradient with Connected 3D Tile Matrix */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#EEF6F0] via-[#E3EFE5] to-[#D5E6D8] border border-[#C3DEC8] p-6 sm:p-7 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-center group overflow-hidden min-h-[240px] sm:min-h-[250px]">
              <div className="relative z-10 max-w-[260px] sm:max-w-[280px]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-tight mb-2.5">
                  AI Embedded, Not Added
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {BELIEFS[3].description}
                </p>
              </div>

              {/* Right-Side 3D Abstract Graphic: Interconnected Soft Emerald Tiles */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-32 h-36 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500 flex flex-col items-end justify-center gap-1.5">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#5BA874] to-[#397B50] shadow-sm" />
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-[#80BF96] to-[#5BA874] shadow-sm -mt-3 mr-4" />
              </div>
            </div>

            {/* Card 05: Ice Sky Blue Gradient with Luminous 3D Helix Orb */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#EEF5FB] via-[#E0EDF8] to-[#D0E3F3] border border-[#C5DFEE] p-6 sm:p-7 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-center group overflow-hidden min-h-[240px] sm:min-h-[250px]">
              <div className="relative z-10 max-w-[260px] sm:max-w-[280px]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-tight mb-2.5">
                  Partnership, Not Transaction
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {BELIEFS[4].description}
                </p>
              </div>

              {/* Right-Side 3D Abstract Graphic: Luminous Blue Interlocking Rings */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-5 w-32 h-32 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500 flex items-center justify-center">
                <div className="w-28 h-28 rounded-full border-6 border-[#8AC1EB] bg-gradient-to-br from-[#B5D9F4] to-[#6BAFE4] shadow-md flex items-center justify-center">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#3B82F6] to-[#1E40AF] shadow-inner" />
                </div>
              </div>
            </div>

            {/* Card 06: Warm Amber / Honey Gold Gradient with 3D Tiered Pillars */}
            <div className="relative rounded-[28px] bg-gradient-to-br from-[#FDF8EC] via-[#F9F0DB] to-[#F4E6C5] border border-[#EFE0BC] p-6 sm:p-7 shadow-xs hover:shadow-md hover:translate-y-[-2px] transition-all duration-300 flex flex-col justify-center group overflow-hidden min-h-[240px] sm:min-h-[250px]">
              <div className="relative z-10 max-w-[260px] sm:max-w-[280px]">
                <h3 className="font-display text-xl sm:text-2xl font-bold text-neutral-900 leading-tight mb-2.5">
                  Data Drives Every Decision
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 font-normal leading-relaxed">
                  {BELIEFS[5].description}
                </p>
              </div>

              {/* Right-Side 3D Abstract Graphic: Golden Geometric Columns */}
              <div className="absolute top-1/2 -translate-y-1/2 -right-3 w-32 h-36 pointer-events-none opacity-85 group-hover:scale-105 transition-transform duration-500 flex items-end justify-center gap-1.5">
                <div className="w-6 h-16 rounded-t-lg bg-gradient-to-t from-[#D99B38] to-[#F5D48B] shadow-sm" />
                <div className="w-6 h-22 rounded-t-lg bg-gradient-to-t from-[#B87B1E] to-[#E9B859] shadow-md" />
                <div className="w-6 h-28 rounded-t-lg bg-gradient-to-t from-[#8F5A08] to-[#D99B38] shadow-lg" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SECTION 3: MEET THE BUILDERS ================= */}
      <section id="team" className="pt-8 pb-10 lg:pt-10 lg:pb-12 border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 lg:mb-10 gap-4">
            <div>
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-2.5">
                Leadership & Team
              </div>
              <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
                Meet The Minds Behind The Stack
              </h2>
              <p className="text-base sm:text-lg text-neutral-700 font-medium mt-2 max-w-2xl">
                A relentless collective of architects, UI engineers, AI researchers, and growth strategists united by a shared mission.
              </p>
            </div>

            <div className="shrink-0">
              <span className="px-4 py-2 bg-white border-2 border-black text-xs font-black uppercase tracking-widest shadow-[3px_3px_0px_0px_#000000] inline-block">
                15+ Core Specialists in Madhubani
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {(showAllTeam ? TEAM_MEMBERS : TEAM_MEMBERS.slice(0, 8)).map((member, index) => (
              <div
                key={index}
                className="relative rounded-3xl overflow-hidden bg-black border-2 border-black shadow-[6px_6px_0px_0px_#000000] hover:translate-y-[-6px] hover:shadow-[10px_10px_0px_0px_#000000] transition-all duration-500 flex flex-col justify-between group min-h-[460px]"
              >
                {/* Background Tech Card with '?' Placeholder (No real photo) */}
                <div className="absolute inset-0 w-full h-full bg-gradient-to-b from-[#1c1f24] via-[#121417] to-black flex items-center justify-center overflow-hidden">
                  {/* Ambient Glow */}
                  <div className="absolute w-44 h-44 bg-white/5 rounded-full blur-2xl group-hover:bg-[#c6f827]/10 transition-all duration-500" />
                  {/* Subtle Grid Matrix */}
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:24px_24px] opacity-40" />
                  {/* Centerpiece '?' Symbol */}
                  <span className="relative z-0 font-display text-8xl sm:text-9xl font-black text-white/20 group-hover:text-white/35 group-hover:scale-110 transition-all duration-500 select-none">
                    ?
                  </span>
                  {/* Bottom Dark Gradient for Razor-Sharp Text Readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/80 to-transparent" />
                </div>

                {/* Top Header Floating Badges */}
                <div className="relative z-10 p-4 flex items-center justify-between">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/80 backdrop-blur-md border border-white/20 text-white text-[10px] font-black uppercase tracking-widest shadow-md">
                    <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                    <span>{member.tag}</span>
                  </div>
                </div>

                {/* Bottom Content Area */}
                <div className="relative z-10 p-5 mt-auto flex flex-col justify-end">
                  <div className="mb-2">
                    <span className="inline-block px-2.5 py-0.5 rounded-md bg-red-600 text-white text-[10px] font-black uppercase tracking-wider mb-2 shadow-xs">
                      {member.role}
                    </span>
                    <h3 className="font-display text-xl font-black uppercase text-white leading-tight">
                      {member.name}
                    </h3>
                  </div>

                  <p className="text-xs text-neutral-300 font-medium leading-relaxed mb-4 line-clamp-3 group-hover:line-clamp-none transition-all">
                    {member.bio}
                  </p>

                  {/* Interactive Social Links */}
                  <div className="pt-3 border-t border-white/15 flex items-center gap-2">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-sm"
                      >
                        <Linkedin className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.twitter && (
                      <a
                        href={member.socials.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Twitter"
                        className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-sm"
                      >
                        <Twitter className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.github && (
                      <a
                        href={member.socials.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="GitHub"
                        className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-sm"
                      >
                        <Github className="w-3.5 h-3.5" />
                      </a>
                    )}
                    {member.socials.dribbble && (
                      <a
                        href={member.socials.dribbble}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Dribbble"
                        className="p-2 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white hover:text-black transition-all shadow-sm"
                      >
                        <Dribbble className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* MORE / LESS Button aligned to the Right Side with Bright Green Color */}
          <div className="mt-8 flex justify-end">
            <button
              type="button"
              onClick={() => setShowAllTeam(!showAllTeam)}
              className="inline-flex items-center gap-2.5 px-7 py-3.5 bg-[#c6f827] text-black font-display font-black text-xs uppercase tracking-widest rounded-2xl border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:bg-black hover:text-[#c6f827] hover:translate-y-[-2px] hover:shadow-[6px_6px_0px_0px_#000000] transition-all cursor-pointer"
            >
              <span>{showAllTeam ? "LESS" : "MORE"}</span>
              <span className="text-sm font-black leading-none">{showAllTeam ? "↑" : "→"}</span>
            </button>
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: LIFE & CULTURE ================= */}
      <section id="culture" className="pt-8 pb-12 lg:pt-10 lg:pb-16 bg-white border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-8 lg:mb-10">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-2">
              Workplace DNA
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              Life Inside BIHAR STACK
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mt-2">
              We work intensely, ship fearlessly, and celebrate with gratitude. Here is how we engineer every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {CULTURE_POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="relative rounded-[24px] bg-[#FAF9F5] border border-[#E5E3DB] p-5 sm:p-6 shadow-xs hover:shadow-lg hover:translate-y-[-3px] transition-all duration-300 flex flex-col justify-between group overflow-hidden min-h-[175px]"
                >
                  {/* Subtle 3D Dark Wave / Ribbon Graphic Watermark in Background */}
                  <div className="absolute -bottom-6 -right-6 w-36 h-36 pointer-events-none opacity-[0.05] group-hover:opacity-[0.10] group-hover:scale-110 transition-all duration-500">
                    <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-black">
                      <path d="M40 180C70 120 130 90 190 70C150 130 110 170 40 180Z" fill="currentColor"/>
                      <path d="M10 140C60 90 120 60 180 30C130 90 80 140 10 140Z" fill="currentColor"/>
                      <path d="M0 90C50 50 110 20 170 0C110 50 60 90 0 90Z" fill="currentColor"/>
                    </svg>
                  </div>

                  {/* Top Header Row with High-End Icon Badge and Smooth ArrowUpRight */}
                  <div className="relative z-10 flex items-center justify-between mb-3.5">
                    <div className="w-10 h-10 rounded-xl bg-black text-[#EDEB46] shadow-xs flex items-center justify-center group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>

                    {/* Smooth Interactive ArrowUpRight Badge */}
                    <div className="w-8 h-8 rounded-full bg-white border border-[#E0DED4] text-neutral-800 flex items-center justify-center group-hover:bg-[#EDEB46] group-hover:text-black group-hover:border-black group-hover:rotate-45 transition-all shadow-2xs shrink-0">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* Title & Description Body */}
                  <div className="relative z-10">
                    <h3 className="font-display text-lg sm:text-[19px] font-bold text-neutral-900 leading-snug mb-1.5 group-hover:text-black transition-colors">
                      {point.title}
                    </h3>

                    <p className="text-xs sm:text-[13px] text-neutral-600 font-normal leading-relaxed">
                      {point.desc}
                    </p>
                  </div>

                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 5: MILESTONES & JOURNEY ================= */}
      <section id="milestones" className="py-16 lg:py-24 border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-3">
              The Trajectory
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              Milestones That Define Us
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mt-3">
              Every milestone represents long nights of debugging, audacious ambition, and partner trust earned step by step.
            </p>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line for Desktop */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-black -translate-x-1/2" />

            <div className="space-y-8">
              {MILESTONES.map((item, index) => {
                const isEven = index % 2 === 0;
                return (
                  <div
                    key={index}
                    className={`relative flex flex-col md:flex-row items-center ${
                      isEven ? "md:flex-row-reverse" : ""
                    }`}
                  >
                    {/* Content Card */}
                    <div className="w-full md:w-1/2 md:px-8">
                      <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-[5px_5px_0px_0px_#000000] hover:translate-y-[-2px] transition-transform">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-xs font-black px-2.5 py-1 bg-black text-white uppercase tracking-wider rounded">
                            {item.year}
                          </span>
                          <span className="text-[10px] font-black uppercase tracking-widest px-2 py-0.5 bg-neutral-100 border border-black/20 text-neutral-600 rounded">
                            {item.badge}
                          </span>
                        </div>
                        <h3 className="font-display text-lg font-black uppercase text-black mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                          {item.desc}
                        </p>
                      </div>
                    </div>

                    {/* Timeline Node Dot */}
                    <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-7 h-7 rounded-full bg-white border-2 border-black items-center justify-center shadow-[2px_2px_0px_0px_#000000]">
                      <div className="w-2.5 h-2.5 rounded-full bg-black" />
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ================= SECTION 6: BY THE NUMBERS ================= */}
      <section id="numbers" className="py-16 lg:py-24 bg-black text-white border-b-2 border-black">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-white text-black text-xs font-black uppercase tracking-widest mb-3">
              Measurable Outcomes
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-white">
              BIHAR STACK By The Numbers
            </h2>
            <p className="text-base sm:text-lg text-neutral-300 font-medium mt-3">
              We measure our legacy by the revenue we compound for clients and the speed at which their systems run.
            </p>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {STATS_DATA.map((stat, index) => (
              <div
                key={index}
                className="bg-neutral-900 border-2 border-neutral-700 p-8 rounded-2xl shadow-lg hover:border-white transition-all flex flex-col justify-between"
              >
                <div>
                  <strong className="font-display text-4xl sm:text-6xl font-black text-white block mb-2 tracking-tight">
                    {stat.number}
                  </strong>
                  <span className="text-sm sm:text-base font-black uppercase tracking-wider text-neutral-200 block">
                    {stat.label}
                  </span>
                </div>
                <p className="text-xs text-neutral-400 font-medium mt-4 pt-4 border-t border-neutral-800">
                  {stat.sub}
                </p>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 7: THE 6-STEP PROCESS ================= */}
      <section id="process" className="py-16 lg:py-24 border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-3">
              Execution Architecture
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              The 6-Step Engineering Engine
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mt-3">
              How we take an idea from whiteboard ambiguity to enterprise scale in record time.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROCESS_STEPS.map((step, index) => (
              <div
                key={index}
                className="bg-white border-2 border-black p-8 rounded-2xl shadow-[5px_5px_0px_0px_#000000] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#000000] transition-all flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-display text-3xl font-black text-black tracking-wider">
                      {step.step}
                    </span>
                    <span className="w-3 h-3 rounded-full bg-black" />
                  </div>

                  <h3 className="font-display text-xl font-black uppercase text-black mb-3">
                    {step.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                <div className="pt-4 mt-6 border-t border-neutral-200 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-neutral-800">
                  <CheckCircle2 className="w-4 h-4 text-black shrink-0" />
                  <span>Phase Verified</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 8: FUTURE ROADMAP ================= */}
      <section id="roadmap" className="py-16 lg:py-24 bg-white border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-3">
              Vision & Horizon
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              The Road Ahead (2026 - 2028)
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mt-3">
              We have only laid the foundation. Here is how we will continue empowering Bihar and scaling global enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {ROADMAP_ITEMS.map((item, index) => {
              const Icon = item.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f0f0f0] border-2 border-black p-8 rounded-2xl shadow-[6px_6px_0px_0px_#000000] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className="p-3.5 bg-white border-2 border-black rounded-xl shadow-xs">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-xs font-black uppercase tracking-wider px-3 py-1 bg-black text-white rounded">
                        {item.badge}
                      </span>
                    </div>

                    <span className="font-display text-2xl font-black text-neutral-400 block mb-1">
                      {item.year}
                    </span>

                    <h3 className="font-display text-xl font-black uppercase text-black mb-3">
                      {item.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-black/10 flex items-center justify-between text-xs font-black uppercase tracking-wider text-black">
                    <span>Strategic Objective</span>
                    <ArrowRight className="w-4 h-4 text-black" />
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 9: JOIN US / PARTNER CTA ================= */}
      <section id="join" className="py-20 lg:py-28 bg-[#f0f0f0]">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="bg-white border-2 border-black p-8 sm:p-14 lg:p-16 rounded-3xl shadow-[8px_8px_0px_0px_#000000] text-center max-w-4xl mx-auto">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#f0f0f0] border border-black text-black text-xs font-black uppercase tracking-widest mb-6">
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Shape The Future With Us</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-black leading-tight mb-6">
              Ready To Build Something <br className="hidden sm:block" />
              Extraordinary?
            </h2>

            <p className="text-base sm:text-xl text-neutral-700 font-medium max-w-2xl mx-auto mb-10 leading-relaxed">
              Whether you are an ambitious business ready to multiply your revenue or a top-tier engineer looking to build from Bihar — there is a seat at our table.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/#contact"
                className="px-8 py-4 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]"
              >
                <span>Start Your Project</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <a
                href="https://wa.me/917979067849?text=Hi%20BiharStack%20Team,%20I%20am%20interested%20in%20joining%20or%20partnering!"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-4 bg-[#f0f0f0] text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-200 transition-all flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]"
              >
                <span>Direct WhatsApp Chat</span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </a>
            </div>
          </div>

        </div>
      </section>

      {/* Global Footer */}
      <Footer />

      {/* Global Interactive Utilities */}
      <BackToTop />
      <WhatsAppButton />
    </main>
  );
}
