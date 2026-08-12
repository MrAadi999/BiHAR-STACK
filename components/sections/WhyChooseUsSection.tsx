"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Target, Sparkles, Cpu, Brain, Zap } from "lucide-react";
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
];

// Live Counting Number Animation Component
function AnimatedCounter({ value, duration = 1.4 }: { value: string; duration?: number }) {
  const [display, setDisplay] = useState("0");
  const nodeRef = useRef<HTMLSpanElement>(null);
  const isInView = useInView(nodeRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const match = value.match(/(\d+)/);
    if (!match) {
      setDisplay(value);
      return;
    }

    const targetNum = parseInt(match[0], 10);
    const prefix = value.substring(0, value.indexOf(match[0]));
    const suffix = value.substring(value.indexOf(match[0]) + match[0].length);

    let startTimestamp: number | null = null;
    let animFrameId: number;

    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const progress = Math.min((timestamp - startTimestamp) / (duration * 1000), 1);
      const easedProgress = 1 - Math.pow(1 - progress, 3);
      const currentNum = Math.floor(easedProgress * targetNum);

      setDisplay(`${prefix}${currentNum}${suffix}`);

      if (progress < 1) {
        animFrameId = requestAnimationFrame(step);
      } else {
        setDisplay(value);
      }
    };

    animFrameId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animFrameId);
  }, [isInView, value, duration]);

  return <span ref={nodeRef}>{display}</span>;
}

function CircularProgressGauge({
  displayValue,
  percentage,
  label,
  delay = 0,
}: {
  displayValue: string;
  percentage: number;
  label: string;
  delay?: number;
}) {
  const radius = 43;
  const strokeWidth = 6.2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <motion.div
      initial={{ opacity: 0, y: 15, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center justify-center select-none group"
    >
      {/* Circle Ring Container - Slightly Larger Circle */}
      <div className="relative w-22 h-22 sm:w-28 sm:h-28 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 102 102">
          {/* Background Dark Track Circle */}
          <circle
            cx="51"
            cy="51"
            r={radius}
            stroke="#262626"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
          {/* Animated Pure White Progress Arc */}
          <motion.circle
            cx="51"
            cy="51"
            r={radius}
            stroke="#ffffff"
            strokeWidth={strokeWidth}
            strokeDasharray={circumference}
            initial={{ strokeDashoffset: circumference }}
            whileInView={{ strokeDashoffset }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 1.4, delay: delay + 0.15, ease: [0.16, 1, 0.3, 1] }}
            strokeLinecap="round"
            fill="transparent"
          />
        </svg>

        {/* Center Display Value */}
        <span className="absolute font-sans text-xs sm:text-base font-black text-white tracking-tight text-center leading-none">
          <AnimatedCounter value={displayValue} />
        </span>
      </div>

      {/* Label Text Below Ring */}
      <span className="mt-1.5 text-[10px] sm:text-xs font-bold text-white/90 tracking-wide text-center uppercase group-hover:text-amber-400 transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="pt-8 sm:pt-12 pb-0 bg-[#e5e5e5] border-t border-neutral-300 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 mb-8 sm:mb-10">
        <SectionHeading
          badge="THE ADVANTAGE"
          title="Why Choose Us"
          subtitle="Combining world-class tech standards with local agility and unyielding dedication."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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

      {/* ULTRA-SLIM FULL-WIDTH BLACK PATTI */}
      <div className="w-full bg-black text-white py-2.5 sm:py-4 border-y-2 border-black relative overflow-hidden flex items-center min-h-[110px] sm:min-h-[130px]">
        <div className="max-w-[1400px] mx-auto w-full px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 sm:gap-6 items-center justify-center">
            <CircularProgressGauge displayValue="20+" percentage={100} label="Projects Delivered" delay={0.1} />
            <CircularProgressGauge displayValue="12+" percentage={85} label="Active Clients" delay={0.2} />
            <CircularProgressGauge displayValue="97%" percentage={97} label="Client Retention" delay={0.3} />
            <CircularProgressGauge displayValue="100%" percentage={100} label="On Time Delivery" delay={0.4} />
            <CircularProgressGauge displayValue="2+ Years" percentage={90} label="Industry Experience" delay={0.5} />
          </div>
        </div>
      </div>
    </section>
  );
}
