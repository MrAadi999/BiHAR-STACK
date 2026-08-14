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
  { icon: MapPin, label: "HQ Based In", value: "Patna, Bihar", subtext: "Serving Worldwide" },
  { icon: Calendar, label: "Founded", value: "2021", subtext: "5+ Years of Execution" },
  { icon: Users, label: "Core Team", value: "15+ Minds", subtext: "Engineers & Strategists" },
  { icon: Globe2, label: "Global Reach", value: "3+ Countries", subtext: "India • UAE • USA" },
  { icon: Award, label: "Delivered", value: "100+ Projects", subtext: "95% Client Retention" },
  { icon: Briefcase, label: "Coverage", value: "38 Districts", subtext: "Grassroot to Enterprise" },
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
      "We hire talent from Bihar. We train and mentor in Bihar. We build from Patna. But the software, brands, and automation systems we ship are engineered to outcompete Silicon Valley and Bangalore standards.",
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
    name: "Aditya Kumar",
    role: "Founder & Chief Executive Officer",
    tag: "The Visionary",
    image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80",
    bio: "Pioneering the modern technology movement from Bihar. Obsessed with scalable systems, regional talent empowerment, and building global-grade digital products.",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "Vikramaditya Verma",
    role: "Chief Technology Officer & Lead Architect",
    tag: "The Builder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&auto=format&fit=crop&q=80",
    bio: "Full-stack architect with deep expertise in distributed microservices, Next.js, and high-concurrency cloud infrastructure.",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "Sneha Sinha",
    role: "Head of Branding & Visual Design",
    tag: "The Artist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=500&auto=format&fit=crop&q=80",
    bio: "Turns complex value propositions into distinct brand identities and intuitive aesthetics that stick in users' minds.",
    socials: { linkedin: "https://linkedin.com", dribbble: "https://dribbble.com" },
  },
  {
    name: "Rohan Kashyap",
    role: "Head of Growth & Performance Marketing",
    tag: "The Strategist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&auto=format&fit=crop&q=80",
    bio: "Data-driven growth hacker specializing in hyper-targeted customer acquisition, CAC reduction, and multi-channel revenue funnels.",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "Anjali Mishra",
    role: "Senior Full-Stack & Cloud Engineer",
    tag: "The Coder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=500&auto=format&fit=crop&q=80",
    bio: "Builds lightning-fast reactive web apps, robust backend APIs, and real-time database integrations with millimeter precision.",
    socials: { linkedin: "https://linkedin.com", github: "https://github.com" },
  },
  {
    name: "Priyanshu Ranjan",
    role: "Lead UI/UX & Interaction Designer",
    tag: "The Thinker",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=500&auto=format&fit=crop&q=80",
    bio: "Obsessed with micro-interactions, responsive design systems, and frictionless conversion psychology.",
    socials: { linkedin: "https://linkedin.com", dribbble: "https://dribbble.com" },
  },
  {
    name: "Dr. Aman Pandey",
    role: "Head of AI Research & Automation",
    tag: "The Innovator",
    image: "https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?w=500&auto=format&fit=crop&q=80",
    bio: "Spearheading our autonomous LLM agent pipelines, custom RAG models, and enterprise automated workflows.",
    socials: { linkedin: "https://linkedin.com", twitter: "https://twitter.com" },
  },
  {
    name: "Pooja Kumari",
    role: "Operations & Partner Success Lead",
    tag: "The Anchor",
    image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?w=500&auto=format&fit=crop&q=80",
    bio: "The powerhouse ensuring sprint deadlines are exceeded, client communication is transparent, and quality assurance remains 100%.",
    socials: { linkedin: "https://linkedin.com" },
  },
];

const CULTURE_POINTS = [
  {
    icon: Coffee,
    title: "The Creative Hub in Patna",
    desc: "Our workspace is built for intense ideation, rapid prototyping, and high collaboration. Open desks, brainstorming walls, and zero corporate bureaucracy.",
    stat: "Open & Agile",
  },
  {
    icon: Lightbulb,
    title: "Weekly Strategy & Tech Huddles",
    desc: "Every sprint kicks off with open problem-solving sessions where junior developers and founders debate architecture with equal voice.",
    stat: "Zero Hierarchy",
  },
  {
    icon: GraduationCap,
    title: "Continuous Upskilling",
    desc: "We dedicate 10% of every week to learning new frameworks, researching frontier AI agent patterns, and mastering state-of-the-art tools.",
    stat: "Lifelong Mastery",
  },
  {
    icon: PartyPopper,
    title: "Relentless Celebration of Wins",
    desc: "Every customer milestone, major product launch, and team personal breakthrough is celebrated with good food, joy, and shared pride.",
    stat: "High Morale",
  },
  {
    icon: Laptop,
    title: "Hybrid & High-Autonomy",
    desc: "While our spiritual home is in Bihar, our workflow is modern. We focus solely on deliverable output, velocity, and creative excellence.",
    stat: "Output Focused",
  },
  {
    icon: Heart,
    title: "Giving Back to the Ecosystem",
    desc: "We conduct hands-on technology masterclasses for students and small business founders across Bihar to accelerate digital literacy.",
    stat: "Community First",
  },
];

const MILESTONES = [
  {
    year: "Jan 2021",
    title: "The Genesis",
    desc: "Started in a modest room in Patna with two engineers, one laptop, and a firm conviction: world-class software will be built right here in Bihar.",
    badge: "Origin",
  },
  {
    year: "Dec 2021",
    title: "First 25 Local Businesses Digitized",
    desc: "Built billing software, high-converting e-commerce web applications, and custom branding for regional retail and healthcare enterprises.",
    badge: "Traction",
  },
  {
    year: "Oct 2022",
    title: "First International Deployment (Dubai, UAE)",
    desc: "Secured our first global enterprise client for full-stack cloud automation, proving Bihar engineering on the international stage.",
    badge: "Global",
  },
  {
    year: "Aug 2023",
    title: "Autonomous AI Division Founded",
    desc: "Launched custom enterprise WhatsApp bots, CRM auto-sync workflows, and intelligent business AI agents across multiple sectors.",
    badge: "Innovation",
  },
  {
    year: "Nov 2024",
    title: "100+ Projects Milestone",
    desc: "Delivered over 100 production web platforms and digital engines across India, UAE, and the United States with a 95% client retention rate.",
    badge: "Scale",
  },
  {
    year: "2026 & Beyond",
    title: "Building Bihar's Premier Tech Ecosystem",
    desc: "Expanding our Patna engineering headquarters, launching student innovation labs, and expanding operations into Singapore & UAE.",
    badge: "Roadmap",
  },
];

const STATS_DATA = [
  { number: "100+", label: "Projects Shipped", sub: "Enterprise & startup apps", color: "text-black" },
  { number: "50+", label: "Active Partners", sub: "Across 3 global nations", color: "text-black" },
  { number: "₹5Cr+", label: "Client Revenue Generated", sub: "Measurable bottom-line growth", color: "text-black" },
  { number: "95%", label: "Client Retention Rate", sub: "Long-term engineering partners", color: "text-black" },
  { number: "38", label: "Districts Impacted", sub: "Pan-Bihar digital expansion", color: "text-black" },
  { number: "100%", label: "Delivery Guarantee", sub: "On-time & SLA-backed", color: "text-black" },
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
    title: "Patna Innovation & Incubator Lab",
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

          <div className="max-w-4xl">
            {/* Top Pill */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white border border-black text-black text-xs font-black uppercase tracking-widest shadow-[2px_2px_0px_0px_#000000] mb-6"
            >
              <Sparkles className="w-3.5 h-3.5 text-red-600" />
              <span>Everything About Us • Built in Bihar, Made for the World</span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-6xl lg:text-7xl font-black tracking-tight text-black uppercase leading-[1.05] mb-6"
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
              className="text-lg sm:text-2xl text-neutral-800 font-medium leading-relaxed mb-8 max-w-3xl"
            >
              Our story. Our builders. Our engineering culture. Our vision. Everything that defines who we are — born in Patna, scaling enterprises worldwide.
            </motion.p>

            {/* Action Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-wrap items-center gap-4"
            >
              <a
                href="#story"
                className="px-6 py-3.5 bg-black text-white text-xs font-black uppercase tracking-widest hover:bg-neutral-800 transition-all flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]"
              >
                <span>Read Our Origin Story</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <a
                href="#team"
                className="px-6 py-3.5 bg-white text-black text-xs font-black uppercase tracking-widest hover:bg-neutral-100 transition-all flex items-center gap-2 border-2 border-black shadow-[4px_4px_0px_0px_#000000] hover:translate-x-[2px] hover:translate-y-[2px] hover:shadow-[2px_2px_0px_0px_#000000]"
              >
                <span>Meet The Builders</span>
                <Users className="w-4 h-4 text-black" />
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= QUICK FACTS HORIZONTAL STRIP ================= */}
      <section className="bg-white border-b-2 border-black py-6 sticky top-[68px] z-40 shadow-xs backdrop-blur-md">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 divide-y md:divide-y-0 md:divide-x divide-neutral-200">
            {QUICK_FACTS.map((fact, index) => {
              const IconComponent = fact.icon;
              return (
                <div key={index} className="pt-2 md:pt-0 md:px-4 first:pl-0 last:pr-0 flex items-start gap-3">
                  <div className="p-2 rounded bg-[#f0f0f0] border border-black/20 shrink-0 mt-0.5">
                    <IconComponent className="w-4 h-4 text-black" />
                  </div>
                  <div>
                    <span className="block text-[10px] font-black uppercase tracking-wider text-neutral-500">
                      {fact.label}
                    </span>
                    <strong className="block text-sm font-black text-black">
                      {fact.value}
                    </strong>
                    <span className="block text-[11px] text-neutral-600 font-medium">
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
                In 2021, inside a small room in Patna, Bihar, a tight group of young engineers and designers confronted an uncomfortable reality: <em>Why was world-class technology talent always presumed to exist only in Bangalore, Gurgaon, or Silicon Valley?</em>
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
                Today, we power full-scale digital transformations, high-performance web platforms, and autonomous AI workflows for companies across India, the United States, and the UAE. Our roots remain proudly in Bihar — and our standard remains uncompromisingly global.
              </p>
            </div>

            {/* Right Visual Story Stack */}
            <div className="lg:col-span-5 space-y-4">
              <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000000]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black px-2.5 py-1 bg-black text-white uppercase tracking-wider rounded">
                    2021
                  </span>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Chapter 01
                  </span>
                </div>
                <h3 className="font-display text-lg font-black uppercase text-black mb-1">
                  The First Breakthrough
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Deployed custom billing and inventory POS systems for Patna retailers, proving that tailored software multiplies regional business velocity.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000000]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black px-2.5 py-1 bg-red-600 text-white uppercase tracking-wider rounded">
                    2023
                  </span>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Chapter 02
                  </span>
                </div>
                <h3 className="font-display text-lg font-black uppercase text-black mb-1">
                  Autonomous AI Division
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Integrated custom LLMs, autonomous support agents, and WhatsApp automated workflows for high-growth healthcare and D2C brands.
                </p>
              </div>

              <div className="bg-white border-2 border-black p-6 rounded-2xl shadow-[6px_6px_0px_0px_#000000]">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-black px-2.5 py-1 bg-black text-white uppercase tracking-wider rounded">
                    2025 - Present
                  </span>
                  <span className="text-xs font-bold text-neutral-500 uppercase tracking-wider">
                    Chapter 03
                  </span>
                </div>
                <h3 className="font-display text-lg font-black uppercase text-black mb-1">
                  100+ Enterprise Milestone
                </h3>
                <p className="text-xs text-neutral-700 leading-relaxed font-medium">
                  Expanded across 38 districts of Bihar and 3 international markets, driving ₹5Cr+ in client revenue with 95% retention.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ================= SECTION 2: WHAT WE BELIEVE IN ================= */}
      <section id="beliefs" className="py-16 lg:py-24 bg-white border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-3">
              Our Core DNA
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              What We Believe In
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mt-3">
              These principles aren&apos;t decorative poster slogans. They govern every pull request we merge, every contract we sign, and every client we serve.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {BELIEFS.map((belief, index) => {
              const Icon = belief.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f0f0f0] border-2 border-black p-8 rounded-2xl shadow-[5px_5px_0px_0px_#000000] hover:translate-y-[-4px] hover:shadow-[7px_7px_0px_0px_#000000] transition-all flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white border border-black rounded-xl">
                        <Icon className="w-6 h-6 text-black" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-white border border-black/20 text-neutral-600 rounded">
                        {belief.tag}
                      </span>
                    </div>

                    <h3 className="font-display text-xl font-black uppercase text-black mb-3">
                      {belief.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium mb-6">
                      {belief.description}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-black/10 flex items-center gap-2 text-xs font-black uppercase tracking-wider text-black">
                    <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                    <span>{belief.highlight}</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ================= SECTION 3: MEET THE BUILDERS ================= */}
      <section id="team" className="py-16 lg:py-24 border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-3">
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
                15+ Core Specialists in Patna
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {TEAM_MEMBERS.map((member, index) => (
              <div
                key={index}
                className="bg-white border-2 border-black rounded-2xl overflow-hidden shadow-[5px_5px_0px_0px_#000000] hover:translate-y-[-4px] hover:shadow-[8px_8px_0px_0px_#000000] transition-all flex flex-col group"
              >
                {/* Photo Area */}
                <div className="relative aspect-square w-full bg-neutral-200 overflow-hidden border-b-2 border-black">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 group-hover:grayscale-0 transition-all duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-black text-white text-[10px] font-black uppercase tracking-widest px-2.5 py-1 rounded shadow-xs">
                    {member.tag}
                  </div>
                </div>

                {/* Content Info */}
                <div className="p-5 flex flex-col justify-between flex-1">
                  <div>
                    <h3 className="font-display text-lg font-black uppercase text-black leading-tight">
                      {member.name}
                    </h3>
                    <p className="text-xs font-black uppercase tracking-wider text-red-600 mt-1 mb-3">
                      {member.role}
                    </p>
                    <p className="text-xs text-neutral-700 leading-relaxed font-medium mb-4">
                      {member.bio}
                    </p>
                  </div>

                  {/* Social Buttons */}
                  <div className="pt-3 border-t border-neutral-200 flex items-center gap-2">
                    {member.socials.linkedin && (
                      <a
                        href={member.socials.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="LinkedIn"
                        className="p-2 rounded bg-[#f0f0f0] border border-black text-black hover:bg-black hover:text-white transition-colors"
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
                        className="p-2 rounded bg-[#f0f0f0] border border-black text-black hover:bg-black hover:text-white transition-colors"
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
                        className="p-2 rounded bg-[#f0f0f0] border border-black text-black hover:bg-black hover:text-white transition-colors"
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
                        className="p-2 rounded bg-[#f0f0f0] border border-black text-black hover:bg-black hover:text-white transition-colors"
                      >
                        <Dribbble className="w-3.5 h-3.5" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* ================= SECTION 4: LIFE & CULTURE ================= */}
      <section id="culture" className="py-16 lg:py-24 bg-white border-b border-neutral-300">
        <div className="max-w-[1400px] mx-auto px-6 lg:px-12">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-block px-3 py-1 bg-black text-white text-xs font-black uppercase tracking-widest mb-3">
              Workplace DNA
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-black uppercase tracking-tight text-black">
              Life Inside BIHAR STACK
            </h2>
            <p className="text-base sm:text-lg text-neutral-700 font-medium mt-3">
              We work intensely, ship fearlessly, and celebrate with gratitude. Here is how we engineer every day.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {CULTURE_POINTS.map((point, index) => {
              const Icon = point.icon;
              return (
                <div
                  key={index}
                  className="bg-[#f0f0f0] border-2 border-black p-6 rounded-2xl shadow-[4px_4px_0px_0px_#000000] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-3 bg-white border border-black rounded-xl">
                        <Icon className="w-5 h-5 text-black" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-widest px-2.5 py-1 bg-black text-white rounded">
                        {point.stat}
                      </span>
                    </div>

                    <h3 className="font-display text-lg font-black uppercase text-black mb-2">
                      {point.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-medium">
                      {point.desc}
                    </p>
                  </div>

                  <div className="mt-4 pt-3 border-t border-black/10 flex items-center gap-2 text-[11px] font-black uppercase tracking-wider text-black">
                    <ShieldCheck className="w-3.5 h-3.5 text-black" />
                    <span>Active Team Standard</span>
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
