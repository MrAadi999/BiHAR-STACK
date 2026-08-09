"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Palette, Code2, Bot, ArrowRight, Check, Sparkles, Layers, ChevronLeft, ChevronRight, Frame } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// 25 Multi-Color & Multi-Design Frames for "What We Offer"
const frameStyles = [
  { id: 1, name: "Neubrutalist Black", className: "bg-white text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 sm:px-12 py-3.5 sm:py-4 font-black tracking-tight" },
  { id: 2, name: "Neon Cyan Glow", className: "bg-neutral-950 text-cyan-400 border-2 border-cyan-400 shadow-[0_0_25px_rgba(34,211,238,0.6)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-black tracking-widest" },
  { id: 3, name: "Cyberpunk Gradient", className: "bg-gradient-to-r from-red-600 via-amber-500 to-yellow-400 text-black border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black" },
  { id: 4, name: "Glassmorphism Frost", className: "bg-black/90 backdrop-blur-md text-white border-2 border-white/40 shadow-2xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-black tracking-wider" },
  { id: 5, name: "Solar Gold Metallic", className: "bg-amber-400 text-black border-2 border-black shadow-[5px_5px_0px_0px_rgba(0,0,0,1)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-lg font-black" },
  { id: 6, name: "Emerald Tech Matrix", className: "bg-emerald-950 text-emerald-300 border-2 border-emerald-400 shadow-[0_0_20px_rgba(52,211,153,0.5)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-extrabold" },
  { id: 7, name: "Violet Holographic", className: "bg-gradient-to-r from-purple-600 via-pink-500 to-indigo-600 text-white border-2 border-white shadow-xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-black" },
  { id: 8, name: "Sunset Orange-Pink", className: "bg-gradient-to-r from-orange-500 to-rose-500 text-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black" },
  { id: 9, name: "Retro Arcade Yellow", className: "bg-yellow-300 text-black border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-none font-black tracking-widest" },
  { id: 10, name: "Minimal Double Outline", className: "bg-white text-black border-4 border-double border-black shadow-md px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black" },
  { id: 11, name: "Dotted Tech Outline", className: "bg-black text-cyan-300 border-2 border-dashed border-cyan-400 shadow-xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black" },
  { id: 12, name: "Royal Indigo Shield", className: "bg-indigo-900 text-indigo-100 border-2 border-indigo-400 shadow-xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-black" },
  { id: 13, name: "Vercel Dark Carbon", className: "bg-neutral-900 text-white border border-neutral-700 shadow-2xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-black tracking-wide" },
  { id: 14, name: "Neon Lime Edge", className: "bg-black text-lime-400 border-2 border-lime-400 shadow-[0_0_20px_rgba(163,230,53,0.6)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black" },
  { id: 15, name: "Cosmic Nebula Blue", className: "bg-blue-950 text-blue-200 border-2 border-blue-400 shadow-xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-black" },
  { id: 16, name: "Brushed Titanium", className: "bg-gradient-to-r from-slate-200 via-slate-100 to-slate-300 text-slate-900 border-2 border-slate-700 shadow-md px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black" },
  { id: 17, name: "Candy Rainbow Frame", className: "bg-black text-white border-2 border-pink-500 shadow-[0_0_20px_rgba(236,72,153,0.5)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-black" },
  { id: 18, name: "Diamond Cut Frame", className: "bg-black text-amber-300 border-2 border-amber-400 shadow-xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-tl-2xl rounded-br-2xl font-black tracking-wider" },
  { id: 19, name: "Red Banner Ribbon", className: "bg-red-600 text-white border-2 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-none font-black uppercase" },
  { id: 20, name: "Pulse Radar Blue", className: "bg-neutral-950 text-sky-300 border-2 border-sky-400 shadow-[0_0_20px_rgba(56,189,248,0.6)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black" },
  { id: 21, name: "Electric Magenta Neon", className: "bg-black text-fuchsia-400 border-2 border-fuchsia-400 shadow-[0_0_20px_rgba(232,121,249,0.6)] px-8 sm:px-12 py-3.5 sm:py-4 rounded-2xl font-black" },
  { id: 22, name: "Dark Obsidian Gold", className: "bg-black text-amber-300 border-2 border-amber-400 shadow-xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-xl font-black tracking-wider" },
  { id: 23, name: "Glitch Cyber Edge", className: "bg-cyan-950 text-cyan-200 border-l-8 border-r-2 border-y-2 border-cyan-400 px-8 sm:px-12 py-3.5 sm:py-4 rounded-r-xl font-black" },
  { id: 24, name: "Stripe Accent Tag", className: "bg-white text-black border-l-8 border-emerald-500 border-y-2 border-r-2 border-black shadow-md px-8 sm:px-12 py-3.5 sm:py-4 rounded-r-xl font-black" },
  { id: 25, name: "Glossy Pill Emblem", className: "bg-gradient-to-b from-neutral-800 to-black text-white border-2 border-white/60 shadow-2xl px-8 sm:px-12 py-3.5 sm:py-4 rounded-full font-black tracking-widest" },
];

const services = [
  {
    id: "digital-marketing",
    icon: <TrendingUp className="w-7 h-7 text-black" />,
    title: "Digital Marketing & Performance",
    subtitle: "Data-driven marketing campaigns designed to generate high-intent leads and dominate your local and global market.",
    items: [
      "Social Media Marketing",
      "Performance Marketing",
      "Meta Ads & Google Ads",
      "Search Engine Optimization (SEO)",
      "Local SEO & GMB Ranking",
      "High-Converting Lead Gen",
      "Influencer Outreach",
      "Automated Email Campaigns",
    ],
  },
  {
    id: "branding-creative",
    icon: <Palette className="w-7 h-7 text-black" />,
    title: "Branding & Creative Design",
    subtitle: "Distinctive brand identities and visual assets that captivate audiences and establish market leadership.",
    items: [
      "Logo & Visual Brand Identity",
      "Graphic & Social Media Creatives",
      "UI/UX Design for Web & Apps",
      "Motion Graphics & 3D Visuals",
      "High-Production Video Editing",
      "Product Branding & Packaging",
      "Brand Guidelines & Voice",
      "Marketing Collaterals",
    ],
  },
  {
    id: "website-technology",
    icon: <Code2 className="w-7 h-7 text-black" />,
    title: "Website & Custom Technology",
    subtitle: "Blazing fast, pixel-perfect, scalable web and mobile applications tailored to your exact business workflow.",
    items: [
      "Custom Business Websites",
      "E-commerce Platforms (Shopify/Next)",
      "High-Converting Landing Pages",
      "Full-Stack Custom Web Apps",
      "iOS & Android Mobile Apps",
      "SaaS Platform Development",
      "REST & GraphQL API Integration",
      "Speed & Core Web Vitals Optimization",
    ],
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-7 h-7 text-black" />,
    title: "AI & Workflow Automation",
    subtitle: "Cutting-edge artificial intelligence solutions that streamline operations, reduce overhead, and boost response times 24/7.",
    items: [
      "Custom AI Chatbots & Knowledge Bases",
      "WhatsApp & CRM Automation",
      "Business Process Automation",
      "Autonomous AI Agents",
      "AI Content & Asset Creation Pipelines",
      "Zapier / Make Workflow Automation",
      "Lead Enrichment & Auto-Nurturing",
      "Bespoke Enterprise AI Integration",
    ],
  },
];

export default function ServicesSection() {
  const [activeFrameIndex, setActiveFrameIndex] = useState(0);
  const currentFrame = frameStyles[activeFrameIndex];

  const handlePrevFrame = () => {
    setActiveFrameIndex((prev) => (prev === 0 ? frameStyles.length - 1 : prev - 1));
  };

  const handleNextFrame = () => {
    setActiveFrameIndex((prev) => (prev === frameStyles.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="services" className="pt-6 sm:pt-8 pb-20 bg-[#f0f0f0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Centered Top Header for 3rd Page (With Dynamic 25 Multi-Color & Multi-Design Frames) */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          
          {/* Interactive Frame Selector Controls */}
          <div className="flex items-center justify-center gap-3 mb-6 flex-wrap">
            <button
              onClick={handlePrevFrame}
              className="px-3 py-1.5 bg-black text-white hover:bg-neutral-800 transition-colors border border-black shadow-sm flex items-center gap-1 text-xs font-bold uppercase tracking-wider cursor-pointer"
              title="Previous Frame Style"
            >
              <ChevronLeft className="w-4 h-4" />
              <span className="hidden sm:inline">Prev Frame</span>
            </button>

            <div className="flex items-center gap-2 px-4 py-1.5 bg-white border-2 border-black font-mono text-xs font-bold text-black shadow-sm">
              <Frame className="w-4 h-4 text-black" />
              <span>Frame #{currentFrame.id} / 25</span>
              <span className="text-neutral-400">|</span>
              <span className="text-neutral-800 hidden sm:inline">{currentFrame.name}</span>
            </div>

            <button
              onClick={handleNextFrame}
              className="px-3 py-1.5 bg-black text-white hover:bg-neutral-800 transition-colors border border-black shadow-sm flex items-center gap-1 text-xs font-bold uppercase tracking-wider cursor-pointer"
              title="Next Frame Style"
            >
              <span className="hidden sm:inline">Next Frame</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Framed "WHAT WE OFFER" Heading */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 relative group cursor-pointer"
            onClick={handleNextFrame}
            title="Click to switch frame design!"
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={currentFrame.id}
                initial={{ opacity: 0, y: 10, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: -10, scale: 0.96 }}
                transition={{ duration: 0.25 }}
                className={currentFrame.className}
              >
                <h2 className="text-3xl sm:text-5xl lg:text-6xl uppercase inline-block">
                  What We Offer
                </h2>
              </motion.div>
            </AnimatePresence>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-base sm:text-lg lg:text-xl text-neutral-700 font-medium leading-relaxed max-w-2xl mx-auto"
          >
            End-to-end digital solutions built for modern businesses aiming for exponential growth.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-none bg-white border-2 border-black p-8 shadow-sm hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#f0f0f0] border border-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-black transition-colors">0{index + 1}</span>
                </div>

                <h3 className="font-display text-2xl font-black text-black uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-700 font-medium leading-relaxed mb-6">
                  {service.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="mt-0.5 p-0.5 bg-black text-white group-hover:scale-110 transition-transform">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-neutral-600 transition-colors"
                >
                  <span>Learn More & Start</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Custom Built</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
