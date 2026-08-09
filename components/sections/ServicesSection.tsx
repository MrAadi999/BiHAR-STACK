"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TrendingUp, Palette, Code2, Bot, ArrowRight, Check, Sparkles, Layers, Palette as PaletteIcon } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// 5 Color Themes Matching the User's Image Reference
const ribbonThemes = [
  {
    id: 1,
    name: "Vibrant Orange",
    barStyle: "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500",
    ringBorder: "border-orange-500",
    icon: <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500" />,
  },
  {
    id: 2,
    name: "Electric Ocean Cyan",
    barStyle: "bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500",
    ringBorder: "border-cyan-500",
    icon: <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-600" />,
  },
  {
    id: 3,
    name: "Dark Navy Slate",
    barStyle: "bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950",
    ringBorder: "border-slate-800",
    icon: <Code2 className="w-5 h-5 sm:w-7 sm:h-7 text-slate-800" />,
  },
  {
    id: 4,
    name: "Espresso Charcoal",
    barStyle: "bg-gradient-to-r from-neutral-800 via-neutral-900 to-black",
    ringBorder: "border-neutral-800",
    icon: <Bot className="w-5 h-5 sm:w-7 sm:h-7 text-neutral-800" />,
  },
  {
    id: 5,
    name: "Metallic Warm Gold",
    barStyle: "bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-600",
    ringBorder: "border-amber-700",
    icon: <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 text-amber-700" />,
  },
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
  const [activeThemeIndex, setActiveThemeIndex] = useState(0); // Default Vibrant Orange from reference image
  const currentTheme = ribbonThemes[activeThemeIndex];

  return (
    <section id="services" className="pt-6 sm:pt-8 pb-20 bg-[#f0f0f0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Centered Top Header for 3rd Page (Recreated exact Ribbon Frame from User Reference Image) */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          
          {/* Color Switcher Dots for the 5 Themes in Image */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500 flex items-center gap-1.5 mr-2">
              <PaletteIcon className="w-3.5 h-3.5" />
              <span>Theme:</span>
            </span>
            {ribbonThemes.map((theme, idx) => (
              <button
                key={theme.id}
                onClick={() => setActiveThemeIndex(idx)}
                className={`w-6 h-6 rounded-full border-2 transition-all cursor-pointer ${
                  activeThemeIndex === idx ? "border-black scale-125 shadow-md" : "border-transparent opacity-70 hover:opacity-100"
                } ${
                  theme.id === 1 ? "bg-orange-500" :
                  theme.id === 2 ? "bg-cyan-600" :
                  theme.id === 3 ? "bg-slate-800" :
                  theme.id === 4 ? "bg-neutral-900" : "bg-amber-600"
                }`}
                title={theme.name}
              />
            ))}
          </div>

          {/* Exact 3D Ribbon Banner Frame with Left Disc & Page Curl Peel */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6 relative select-none cursor-pointer"
            onClick={() => setActiveThemeIndex((prev) => (prev + 1) % ribbonThemes.length)}
            title="Click to change ribbon color theme!"
          >
            <div className="relative inline-flex items-center my-2">
              {/* Main Horizontal Banner Bar */}
              <div className={`relative ${currentTheme.barStyle} shadow-[0_12px_28px_-6px_rgba(0,0,0,0.35)] pl-12 sm:pl-16 pr-8 sm:pr-12 py-3.5 sm:py-5 flex items-center justify-center rounded-r-sm transition-all duration-300`}>
                <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-wider text-white drop-shadow-md">
                  What We Offer
                </h2>

                {/* Bottom-Right Corner Dog-Ear / Page-Curl Peel Effect */}
                <div className="absolute bottom-0 right-0 w-6 h-6 sm:w-8 sm:h-8 pointer-events-none overflow-hidden rounded-br-sm">
                  <div className="w-full h-full bg-white shadow-[-4px_-4px_8px_rgba(0,0,0,0.35)] origin-bottom-right transform -rotate-45 translate-x-3.5 translate-y-3.5 sm:translate-x-4 sm:translate-y-4" />
                </div>
              </div>

              {/* Left Overlapping Circular Disc Medallion */}
              <div className={`absolute -left-6 sm:-left-8 top-1/2 -translate-y-1/2 w-13 h-13 sm:w-18 sm:h-18 rounded-full bg-gradient-to-b from-white via-neutral-100 to-neutral-200 border-4 ${currentTheme.ringBorder} shadow-[0_8px_20px_rgba(0,0,0,0.3)] flex items-center justify-center z-10 transition-all duration-300`}>
                <div className="w-9 h-9 sm:w-13 sm:h-13 rounded-full bg-white flex items-center justify-center border border-neutral-300 shadow-inner">
                  {currentTheme.icon}
                </div>
              </div>
            </div>
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
