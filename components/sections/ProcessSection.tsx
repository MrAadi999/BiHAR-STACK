"use client";

import { motion } from "framer-motion";
import { Search, Map, PenTool, Code, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: <Search className="w-6 h-6 text-teal-700" />,
    title: "1. Discovery & Audit",
    desc: "We analyze your target market, competitors, current digital footprint, and core business goals.",
    cardStyle: "bg-gradient-to-br from-teal-50/95 via-white/80 to-teal-100/60 border-teal-200/90 shadow-[0_20px_45px_-15px_rgba(20,184,166,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
    glow: "from-teal-300/30 via-emerald-200/20 to-transparent",
    iconBg: "bg-white/90 border-teal-300/90 text-teal-700 shadow-md",
    numColor: "text-teal-700/70 group-hover:text-teal-950",
    titleColor: "text-teal-950",
    descColor: "text-teal-950/85",
  },
  {
    number: "02",
    icon: <Map className="w-6 h-6 text-sky-700" />,
    title: "2. Blueprint Strategy",
    desc: "We map out high-converting customer journeys, technical architecture, timeline milestones, and KPI metrics.",
    cardStyle: "bg-gradient-to-br from-sky-50/95 via-white/80 to-sky-100/60 border-sky-200/90 shadow-[0_20px_45px_-15px_rgba(14,165,233,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
    glow: "from-sky-300/30 via-blue-200/20 to-transparent",
    iconBg: "bg-white/90 border-sky-300/90 text-sky-700 shadow-md",
    numColor: "text-sky-700/70 group-hover:text-sky-950",
    titleColor: "text-sky-950",
    descColor: "text-sky-950/85",
  },
  {
    number: "03",
    icon: <PenTool className="w-6 h-6 text-purple-700" />,
    title: "3. Design & Prototype",
    desc: "Crafting wireframes, UI components, brand assets, and interactive glassmorphic prototypes.",
    cardStyle: "bg-gradient-to-br from-purple-50/95 via-white/80 to-purple-100/60 border-purple-200/90 shadow-[0_20px_45px_-15px_rgba(168,85,247,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
    glow: "from-purple-300/30 via-fuchsia-200/20 to-transparent",
    iconBg: "bg-white/90 border-purple-300/90 text-purple-700 shadow-md",
    numColor: "text-purple-700/70 group-hover:text-purple-950",
    titleColor: "text-purple-950",
    descColor: "text-purple-950/85",
  },
  {
    number: "04",
    icon: <Code className="w-6 h-6 text-emerald-700" />,
    title: "4. Agile Development",
    desc: "Building clean, production-grade Next.js/AI codebases with continuous integration and security testing.",
    cardStyle: "bg-gradient-to-br from-emerald-50/95 via-white/80 to-emerald-100/60 border-emerald-200/90 shadow-[0_20px_45px_-15px_rgba(16,185,129,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
    glow: "from-emerald-300/30 via-teal-200/20 to-transparent",
    iconBg: "bg-white/90 border-emerald-300/90 text-emerald-700 shadow-md",
    numColor: "text-emerald-700/70 group-hover:text-emerald-950",
    titleColor: "text-emerald-950",
    descColor: "text-emerald-950/85",
  },
  {
    number: "05",
    icon: <Rocket className="w-6 h-6 text-rose-700" />,
    title: "5. Testing & Launch",
    desc: "Rigorous quality assurance, speed optimization, and seamless deployment to high-speed global CDNs.",
    cardStyle: "bg-gradient-to-br from-rose-50/95 via-white/80 to-rose-100/60 border-rose-200/90 shadow-[0_20px_45px_-15px_rgba(244,63,94,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
    glow: "from-rose-300/30 via-pink-200/20 to-transparent",
    iconBg: "bg-white/90 border-rose-300/90 text-rose-700 shadow-md",
    numColor: "text-rose-700/70 group-hover:text-rose-950",
    titleColor: "text-rose-950",
    descColor: "text-rose-950/85",
  },
  {
    number: "06",
    icon: <TrendingUp className="w-6 h-6 text-amber-700" />,
    title: "6. Scale & Continuous Growth",
    desc: "Performance marketing, AI workflow integration, A/B testing, and ongoing feature expansion.",
    cardStyle: "bg-gradient-to-br from-amber-50/95 via-white/80 to-amber-100/60 border-amber-200/90 shadow-[0_20px_45px_-15px_rgba(245,158,11,0.18),inset_0_1.5px_2px_rgba(255,255,255,0.95)]",
    glow: "from-amber-300/30 via-orange-200/20 to-transparent",
    iconBg: "bg-white/90 border-amber-300/90 text-amber-700 shadow-md",
    numColor: "text-amber-700/70 group-hover:text-amber-950",
    titleColor: "text-amber-950",
    descColor: "text-amber-950/85",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#F8F7F3] border-t border-black/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="How We Work"
          rightImage="/images/multitasking_businessman_transparent.png"
          rightImageAlt="Multi-tasking Process Logo"
          subtitle="A battle-tested 6-step engineering and growth framework that eliminates guesswork and guarantees results."
          className="mb-6 sm:mb-8"
        />

        {/* 6 Clean Glass Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className={`relative p-5 sm:p-6 rounded-[24px] backdrop-blur-2xl border ${step.cardStyle} group flex flex-col justify-between overflow-hidden transition-all duration-300 hover:shadow-[0_25px_50px_-12px_rgba(0,0,0,0.12)] hover:border-white`}
            >
              {/* Soft Ambient Background Mesh */}
              <div className={`absolute inset-0 bg-gradient-to-br ${step.glow} pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity duration-300`} />

              {/* Card Header: Icon + Number */}
              <div className="relative z-10 flex items-center justify-between mb-4.5">
                <div className={`p-3 rounded-2xl border ${step.iconBg}`}>
                  {step.icon}
                </div>

                <div className="w-9 h-9 rounded-full bg-white/90 border border-white shadow-sm flex items-center justify-center">
                  <span className={`font-mono text-lg font-black ${step.numColor}`}>
                    {step.number}
                  </span>
                </div>
              </div>

              {/* Title & Description */}
              <div className="relative z-10">
                <h3 className={`font-display text-xl sm:text-2xl font-black mb-2 tracking-tight ${step.titleColor}`}>
                  {step.title}
                </h3>
                <p className={`text-xs sm:text-sm leading-relaxed font-semibold ${step.descColor}`}>
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
