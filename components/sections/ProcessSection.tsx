"use client";

import { motion } from "framer-motion";
import { Search, Map, PenTool, Code, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// 3D Origami Arrow / Paper Plane SVG Component matching Reference Image
function OrigamiArrow({
  lightColor,
  darkColor,
  angle = 0,
}: {
  lightColor: string;
  darkColor: string;
  angle?: number;
}) {
  return (
    <motion.div
      style={{ rotate: angle }}
      className="w-20 h-20 sm:w-24 sm:h-24 xl:w-28 xl:h-28 relative filter drop-shadow-[0_18px_20px_rgba(0,0,0,0.45)] transition-transform duration-300 cursor-pointer"
    >
      <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* Top Light Facet Wing */}
        <polygon points="5,48 95,15 55,54" fill={lightColor} />

        {/* Bottom Dark Shadow Facet Wing */}
        <polygon points="5,48 55,54 95,15 42,92" fill={darkColor} />

        {/* Inner Wing Fold Shadow */}
        <polygon points="5,48 55,54 28,68" fill={darkColor} fillOpacity="0.4" />

        {/* Center Fold Ridge Specular Highlight */}
        <line x1="5" y1="48" x2="95" y2="15" stroke="#ffffff" strokeWidth="1.8" opacity="0.6" strokeLinecap="round" />
      </svg>
    </motion.div>
  );
}

const steps = [
  {
    number: "OPTION 1",
    title: "Discovery & Audit",
    desc: "Target market analysis, competitor audit, and core business goals definition.",
    icon: <Search className="w-3.5 h-3.5 text-slate-400" />,
    lightColor: "#cbd5e1", // Light Slate
    darkColor: "#64748b",  // Dark Slate
    angle: -15,
    offsetClass: "xl:translate-y-0",
  },
  {
    number: "OPTION 2",
    title: "Blueprint Strategy",
    desc: "Customer journey mapping, technical architecture, and milestone KPIs.",
    icon: <Map className="w-3.5 h-3.5 text-blue-400" />,
    lightColor: "#334155", // Deep Navy
    darkColor: "#0f172a",  // Black Navy
    angle: 18,
    offsetClass: "xl:translate-y-12",
  },
  {
    number: "OPTION 3",
    title: "Design & Prototype",
    desc: "Interactive wireframes, glassmorphic UI components, and brand design.",
    icon: <PenTool className="w-3.5 h-3.5 text-sky-400" />,
    lightColor: "#93c5fd", // Sky Blue
    darkColor: "#2563eb",  // Blue Shadow
    angle: -8,
    offsetClass: "xl:translate-y-2",
  },
  {
    number: "OPTION 4",
    title: "Agile Development",
    desc: "Production Next.js & AI codebases built with continuous integration.",
    icon: <Code className="w-3.5 h-3.5 text-emerald-400" />,
    lightColor: "#34d399", // Emerald Green
    darkColor: "#047857",  // Dark Emerald
    angle: 15,
    offsetClass: "xl:translate-y-10",
  },
  {
    number: "OPTION 5",
    title: "Testing & Launch",
    desc: "Quality assurance, speed optimization, and global CDN deployment.",
    icon: <Rocket className="w-3.5 h-3.5 text-amber-400" />,
    lightColor: "#fbbf24", // Amber Yellow
    darkColor: "#b45309",  // Dark Amber
    angle: -10,
    offsetClass: "xl:translate-y-2",
  },
  {
    number: "OPTION 6",
    title: "Scale & Growth",
    desc: "Performance marketing, AI workflow integration, and feature expansion.",
    icon: <TrendingUp className="w-3.5 h-3.5 text-rose-400" />,
    lightColor: "#f87171", // Vibrant Crimson Red
    darkColor: "#be123c",  // Dark Red
    angle: -24,
    offsetClass: "xl:translate-y-0",
    isAccent: true,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="pt-6 sm:pt-8 pb-16 sm:pb-24 bg-[#090a0f] text-white border-t border-white/10 relative overflow-hidden">
      {/* Background Subtle Mesh Grid */}
      <div 
        className="absolute inset-0 opacity-[0.12] pointer-events-none" 
        style={{ 
          backgroundImage: `radial-gradient(circle at 1.5px 1.5px, #ffffff 1.5px, transparent 0)`,
          backgroundSize: "36px 36px"
        }}
      />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="How We Work"
          subtitle="A battle-tested 6-step engineering and growth framework that eliminates guesswork and guarantees results."
          className="mb-6 sm:mb-8"
        />

        {/* Animated Curved Trajectory Dotted Line across ALL 6 Arrows */}
        <div className="relative w-full max-w-6xl mx-auto mb-10 hidden xl:block">
          <svg className="w-full h-16" viewBox="0 0 1200 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <motion.path
              d="M 80 50 Q 600 -15 1120 22"
              stroke="#64748b"
              strokeWidth="2.5"
              strokeDasharray="6 6"
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: false, amount: 0.3 }}
              transition={{ duration: 1.6, ease: "easeInOut" }}
            />
            {/* Arrow Head Pointing Top-Right */}
            <polygon points="1130,18 1115,14 1122,28" fill="#f87171" />
          </svg>
        </div>

        {/* ALL 6 Origami Arrows Fit in 1 Horizontal Wave Trajectory Row on Desktop */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-6 xl:gap-4 relative z-10 pt-2 pb-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: -40, rotate: -15, scale: 0.8 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.08, 
                ease: [0.16, 1, 0.3, 1] 
              }}
              whileHover={{ y: -8, scale: 1.05 }}
              className={`flex flex-col items-start text-left group cursor-pointer ${step.offsetClass}`}
            >
              {/* 3D Paper Plane Arrow Icon */}
              <div className="mb-4 self-center xl:self-start">
                <OrigamiArrow lightColor={step.lightColor} darkColor={step.darkColor} angle={step.angle} />
              </div>

              {/* Step Title & Details - Formatted Exactly Like Reference Image */}
              <div className="w-full">
                <div className="flex items-center gap-2 mb-1.5">
                  <span className={`font-mono text-xs font-black tracking-widest uppercase ${step.isAccent ? "text-rose-400" : "text-neutral-400 group-hover:text-white"} transition-colors`}>
                    {step.number}
                  </span>
                  <div className="p-1 rounded-full bg-neutral-900 border border-neutral-800">
                    {step.icon}
                  </div>
                </div>

                <h3 className="font-display text-base font-black uppercase text-white tracking-tight mb-1.5 group-hover:text-amber-400 transition-colors">
                  {step.title}
                </h3>

                <p className="text-xs text-neutral-400 font-medium leading-relaxed">
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
