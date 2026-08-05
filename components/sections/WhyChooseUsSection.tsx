"use client";

import { motion } from "framer-motion";
import { Lightbulb, Target, Sparkles, Cpu, Brain, Zap, Wallet, Headphones } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const features = [
  {
    icon: <Lightbulb className="w-6 h-6 text-black" />,
    title: "Innovation",
    desc: "First-principles engineering & modern tech stack",
  },
  {
    icon: <Target className="w-6 h-6 text-black" />,
    title: "Strategy",
    desc: "ROI-driven roadmaps aligned with business objectives",
  },
  {
    icon: <Sparkles className="w-6 h-6 text-black" />,
    title: "Creativity",
    desc: "Aesthetically breathtaking & unforgettable designs",
  },
  {
    icon: <Cpu className="w-6 h-6 text-black" />,
    title: "Technology",
    desc: "Next.js, Cloud Native, scalable architecture",
  },
  {
    icon: <Brain className="w-6 h-6 text-black" />,
    title: "AI First",
    desc: "Integrating machine intelligence into daily workflows",
  },
  {
    icon: <Zap className="w-6 h-6 text-black" />,
    title: "Fast Delivery",
    desc: "Rapid deployment cycles without quality compromises",
  },
  {
    icon: <Wallet className="w-6 h-6 text-black" />,
    title: "Affordable Pricing",
    desc: "Enterprise-grade quality at accessible price points",
  },
  {
    icon: <Headphones className="w-6 h-6 text-black" />,
    title: "Dedicated Support",
    desc: "24/7 post-launch maintenance & dedicated team",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="py-24 bg-[#e5e5e5] border-t border-neutral-300 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="THE ADVANTAGE"
          title="Why Choose Us"
          subtitle="Combining world-class tech standards with local agility and unyielding dedication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 bg-white border border-black shadow-sm hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group cursor-pointer"
            >
              <div className="p-3 bg-[#f0f0f0] border border-black w-fit mb-4 group-hover:bg-black group-hover:text-white transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="font-display text-lg font-black text-black uppercase mb-2">
                {feature.title}
              </h3>
              <p className="text-xs text-neutral-600 font-medium leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
