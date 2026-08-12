"use client";

import { motion } from "framer-motion";
import { Search, Map, PenTool, Code, Rocket, TrendingUp } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const steps = [
  {
    number: "01",
    icon: <Search className="w-6 h-6 text-electric-400" />,
    title: "1. Discovery & Audit",
    desc: "We analyze your target market, competitors, current digital footprint, and core business goals.",
  },
  {
    number: "02",
    icon: <Map className="w-6 h-6 text-glow-cyan" />,
    title: "2. Blueprint Strategy",
    desc: "We map out high-converting customer journeys, technical architecture, timeline milestones, and KPI metrics.",
  },
  {
    number: "03",
    icon: <PenTool className="w-6 h-6 text-purple-400" />,
    title: "3. Design & Prototype",
    desc: "Crafting wireframes, UI components, brand assets, and interactive glassmorphic prototypes.",
  },
  {
    number: "04",
    icon: <Code className="w-6 h-6 text-emerald-400" />,
    title: "4. Agile Development",
    desc: "Building clean, production-grade Next.js/AI codebases with continuous integration and security testing.",
  },
  {
    number: "05",
    icon: <Rocket className="w-6 h-6 text-rose-400" />,
    title: "5. Testing & Launch",
    desc: "Rigorous quality assurance, speed optimization, and seamless deployment to high-speed global CDNs.",
  },
  {
    number: "06",
    icon: <TrendingUp className="w-6 h-6 text-amber-400" />,
    title: "6. Scale & Continuous Growth",
    desc: "Performance marketing, AI workflow integration, A/B testing, and ongoing feature expansion.",
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="pt-10 sm:pt-14 pb-20 sm:pb-24 bg-navy-950/90 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="OUR METHODOLOGY"
          title="How We Work"
          subtitle="A battle-tested 6-step engineering and growth framework that eliminates guesswork and guarantees results."
          className="mb-8 sm:mb-10"
        />

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              whileHover={{ y: -6 }}
              className="relative p-6 rounded-2xl bg-gradient-to-b from-slate-800/40 to-slate-900/80 backdrop-blur-xl border border-white/10 hover:border-electric-500/50 hover:shadow-blue-glow transition-all duration-300 group"
            >
              {/* Connector line for desktop layout */}
              <div className="flex items-center justify-between mb-4">
                <div className="p-3 rounded-xl bg-slate-800/80 border border-white/10 text-white group-hover:scale-110 transition-transform duration-300">
                  {step.icon}
                </div>
                <span className="font-mono text-2xl font-extrabold text-slate-600 group-hover:text-electric-400 transition-colors">
                  {step.number}
                </span>
              </div>

              <h3 className="font-display text-xl font-bold text-white mb-2 group-hover:text-glow-sky transition-colors">
                {step.title}
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
