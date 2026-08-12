"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Lightbulb, Target, Palette, Cpu, BrainCircuit, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// 3D Pushpin Button Component matching Reference Image
function PushPin({ color }: { color: string }) {
  return (
    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 z-20 pointer-events-none flex flex-col items-center">
      {/* 3D Spherical Head */}
      <div
        className="w-5 h-5 rounded-full shadow-[0_4px_8px_rgba(0,0,0,0.35)] relative overflow-hidden flex items-center justify-center transition-transform duration-300 group-hover:scale-110"
        style={{
          background: `radial-gradient(circle at 35% 35%, #ffffff 0%, ${color} 65%, #000000 100%)`,
        }}
      >
        {/* Specular Highlight */}
        <div className="absolute top-1 left-1.5 w-1.5 h-1.5 rounded-full bg-white/70 blur-[0.5px]" />
      </div>
      {/* Pin Shadow on Card */}
      <div className="w-4 h-1 bg-black/30 rounded-full blur-[1px] -mt-0.5" />
    </div>
  );
}

// 1. Innovation Icon matching Reference Image 1 (Brain Lightbulb with Glasses & Lightning)
function InnovationBrainBulbIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 120" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Orange Brain Top */}
      <path
        d="M 32 35 C 24 35, 18 25, 26 15 C 32 8, 44 8, 50 14 C 56 8, 68 8, 74 15 C 82 25, 76 35, 68 35 Z"
        fill="#f97316"
      />
      <path d="M 28 22 C 34 18, 42 24, 50 20 C 58 24, 66 18, 72 22" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M 34 14 C 42 10, 58 10, 66 14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />
      <path d="M 38 28 C 44 32, 56 32, 62 28" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" opacity="0.8" />

      {/* Lightbulb Body Outline */}
      <path d="M 28 35 C 24 45, 26 60, 36 68 L 36 78 H 64 L 64 68 C 74 60, 76 45, 72 35 Z" stroke="currentColor" strokeWidth="4.5" fill="currentColor" fillOpacity="0.1" />

      {/* Round Glasses */}
      <circle cx="40" cy="46" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <circle cx="60" cy="46" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
      <line x1="50" y1="46" x2="50" y2="46" stroke="currentColor" strokeWidth="4" />
      <line x1="48" y1="46" x2="52" y2="46" stroke="currentColor" strokeWidth="4" />

      {/* Sleepy Eyes inside glasses */}
      <path d="M 35 46 Q 40 42 45 46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />
      <path d="M 55 46 Q 60 42 65 46" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

      {/* Smile */}
      <path d="M 46 58 Q 50 62 54 58" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

      {/* Base Screw Threads */}
      <rect x="38" y="78" width="24" height="4" fill="currentColor" rx="1" />
      <rect x="40" y="84" width="20" height="4" fill="currentColor" rx="1" />
      <polygon points="46,90 54,90 50,95" fill="currentColor" />

      {/* Yellow Lightning Bolt at bottom */}
      <polygon points="52,95 44,108 50,108 47,118 57,103 50,103" fill="#facc15" />
    </svg>
  );
}

// 2. Strategy Icon matching Reference Image 2 (Magnifying Glass with Bar Chart & Upward Arrow)
function StrategyMagnifierChartIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Magnifying Glass Lens Outer Circle */}
      <circle cx="45" cy="45" r="32" stroke="currentColor" strokeWidth="6.5" fill="none" />

      {/* Bar Chart Bars Inside */}
      <rect x="28" y="48" width="8" height="18" rx="1.5" fill="currentColor" />
      <rect x="39" y="42" width="8" height="24" rx="1.5" fill="currentColor" />
      <rect x="50" y="34" width="8" height="32" rx="1.5" fill="currentColor" />

      {/* Upward Growth Arrow Path */}
      <path d="M 24 50 L 36 38 L 44 44 L 58 26" stroke="currentColor" strokeWidth="5.5" strokeLinecap="round" strokeLinejoin="round" />
      <polygon points="62,24 50,25 58,33" fill="currentColor" />

      {/* Magnifying Glass Handle */}
      <rect x="66" y="62" width="12" height="28" rx="6" fill="currentColor" transform="rotate(-45 66 62)" />
    </svg>
  );
}

// 3. Creativity Icon matching Reference Image 3 (Thinking Profile Silhouette with Book)
function CreativityThinkingProfileIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Book / Folded Paper Shape at Back */}
      <polygon points="30,15 52,24 30,32" fill="currentColor" opacity="0.8" />
      <rect x="24" y="24" width="12" height="45" fill="currentColor" opacity="0.9" />

      {/* Silhouette Profile Face (Nose, Lips, Chin) */}
      <path
        d="M 36 24 C 44 24, 54 30, 54 38 C 54 41, 50 43, 56 46 C 58 47, 56 50, 52 50 C 48 50, 48 53, 50 56 C 46 62, 40 64, 36 68 Z"
        fill="currentColor"
      />

      {/* Hand Resting on Chin */}
      <path
        d="M 52 52 C 54 50, 58 54, 56 58 L 46 72 C 42 78, 38 82, 34 85 L 42 94 C 48 88, 54 80, 58 72 L 62 62 C 64 56, 60 50, 54 50 Z"
        fill="currentColor"
      />
    </svg>
  );
}

// 4. Technology Icon matching Reference Image 4 (Hooded Coder with Laptop & Circuit Nodes)
function TechnologyHoodedCoderIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Hooded Head Outline */}
      <path d="M 28 36 C 28 16, 72 16, 72 36 C 72 45, 68 56, 50 56 C 32 56, 28 45, 28 36 Z" fill="currentColor" />
      {/* Inner Face Shadow Void */}
      <path d="M 36 34 C 36 24, 64 24, 64 34 C 64 42, 58 48, 50 48 C 42 48, 36 42, 36 34 Z" fill="#000000" fillOpacity="0.6" />

      {/* Hood Shoulders */}
      <path d="M 20 62 C 20 48, 32 44, 50 44 C 68 44, 80 48, 80 62 Z" fill="currentColor" />

      {/* Laptop Screen in Front */}
      <rect x="28" y="44" width="44" height="26" rx="4" fill="currentColor" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="50" cy="57" r="3" fill="#ffffff" />

      {/* Circuit Nodes & Connections Spreading Left, Right, Bottom */}
      <path d="M 28 50 H 16 V 38 H 8" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="6" cy="38" r="3.5" fill="currentColor" />
      <path d="M 28 62 H 14 V 74 H 6" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="4" cy="74" r="3.5" fill="currentColor" />

      <path d="M 72 50 H 84 V 38 H 92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="94" cy="38" r="3.5" fill="currentColor" />
      <path d="M 72 62 H 86 V 74 H 94" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="96" cy="74" r="3.5" fill="currentColor" />

      <path d="M 40 70 V 82 H 34 V 92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="34" cy="94" r="3.5" fill="currentColor" />
      <path d="M 60 70 V 82 H 66 V 92" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="66" cy="94" r="3.5" fill="currentColor" />
    </svg>
  );
}

// 5. AI Icon matching Reference Image 5 (Rounded AI Badge with 3 Sparkle Stars)
function AIBadgeSparklesIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Rounded Badge Frame (open at top right) */}
      <path
        d="M 62 34 H 28 C 20 34, 14 40, 14 48 V 74 C 14 82, 20 88, 28 88 H 62 C 70 88, 76 82, 76 74 V 52"
        stroke="currentColor"
        strokeWidth="6"
        strokeLinecap="round"
        fill="none"
      />

      {/* "AI" Text inside Badge */}
      <text x="25" y="74" fontFamily="sans-serif" fontWeight="900" fontSize="32" fill="currentColor">
        AI
      </text>

      {/* 3 Sparkle Stars at Top Right */}
      <path d="M 68 18 Q 68 38 48 38 Q 68 38 68 58 Q 68 38 88 38 Q 68 38 68 18 Z" fill="currentColor" />
      <path d="M 78 8 Q 78 18 68 18 Q 78 18 78 28 Q 78 18 88 18 Q 78 18 78 8 Z" fill="currentColor" />
      <path d="M 52 16 Q 52 24 44 24 Q 52 24 52 32 Q 52 24 60 24 Q 52 24 52 16 Z" fill="currentColor" />
    </svg>
  );
}

// 6. Custom Running Cardboard Box Mascot Icon matching reference image for Fast Delivery
function RunningFastDeliveryBoxIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" className={className} fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* Speed Wind Motion Trails on the Left */}
      <path d="M 6 36 H 24 M 4 52 H 20 M 10 68 H 26" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.9" />

      {/* Main Cardboard Box Body */}
      <path
        d="M 32 40 L 72 32 L 80 62 C 80 66, 76 70, 70 72 L 40 78 C 34 80, 30 76, 28 70 Z"
        fill="currentColor"
        fillOpacity="0.25"
        stroke="currentColor"
        strokeWidth="4.5"
        strokeLinejoin="round"
      />

      {/* Top Open Flaps */}
      <path d="M 32 40 L 20 28 L 52 20 L 72 32 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />
      <path d="M 72 32 L 92 24 L 76 12 L 52 20 Z" fill="currentColor" fillOpacity="0.4" stroke="currentColor" strokeWidth="4" strokeLinejoin="round" />

      {/* Cute Eyes & Mouth */}
      <circle cx="56" cy="52" r="3.5" fill="currentColor" />
      <circle cx="68" cy="49" r="3.5" fill="currentColor" />
      <path d="M 58 60 Q 64 65 69 58" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" />

      {/* Running Arms */}
      <path d="M 30 52 C 20 54, 18 64, 22 70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
      <path d="M 75 48 C 82 50, 88 44, 85 38" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />

      {/* Running Legs & Shoes */}
      <path d="M 40 76 C 36 86, 26 88, 22 94" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <ellipse cx="20" cy="94" rx="6" ry="3" fill="currentColor" />

      <path d="M 64 74 C 70 82, 78 84, 82 92" stroke="currentColor" strokeWidth="4.5" strokeLinecap="round" />
      <ellipse cx="84" cy="92" rx="6" ry="3" fill="currentColor" />
    </svg>
  );
}

const features = [
  {
    num: "01",
    title: "Innovation",
    desc: "First-principles engineering & modern tech stack",
    icon: InnovationBrainBulbIcon,
    pinColor: "#2563eb", // Royal Blue
    frameStyle: "bg-[#dbeafe] border-2 border-[#bfdbfe] shadow-[0_12px_30px_rgba(37,99,235,0.15)]",
    badgeBg: "bg-[#2563eb] text-white",
    numColor: "text-[#2563eb]",
    offsetClass: "lg:translate-y-0",
  },
  {
    num: "02",
    title: "Strategy",
    desc: "ROI-driven roadmaps aligned with business objectives",
    icon: StrategyMagnifierChartIcon,
    pinColor: "#e11d48", // Rose Red
    frameStyle: "bg-[#ffe4e6] border-2 border-[#fecdd3] shadow-[0_12px_30px_rgba(225,29,72,0.15)]",
    badgeBg: "bg-[#e11d48] text-white",
    numColor: "text-[#e11d48]",
    offsetClass: "lg:translate-y-10",
  },
  {
    num: "03",
    title: "Creativity",
    desc: "Aesthetically breathtaking & unforgettable designs",
    icon: CreativityThinkingProfileIcon,
    pinColor: "#16a34a", // Lime Green
    frameStyle: "bg-[#dcfce7] border-2 border-[#bbf7d0] shadow-[0_12px_30px_rgba(22,163,74,0.15)]",
    badgeBg: "bg-[#16a34a] text-white",
    numColor: "text-[#16a34a]",
    offsetClass: "lg:translate-y-0",
  },
  {
    num: "04",
    title: "Technology",
    desc: "Next.js, Cloud Native, scalable architecture",
    icon: TechnologyHoodedCoderIcon,
    pinColor: "#db2777", // Magenta Pink
    frameStyle: "bg-[#fce7f3] border-2 border-[#fbcfe8] shadow-[0_12px_30px_rgba(219,39,119,0.15)]",
    badgeBg: "bg-[#db2777] text-white",
    numColor: "text-[#db2777]",
    offsetClass: "lg:mt-4 lg:translate-y-0",
  },
  {
    num: "05",
    title: "AI First",
    desc: "Integrating machine intelligence into daily workflows",
    icon: AIBadgeSparklesIcon,
    pinColor: "#0d9488", // Teal Mint
    frameStyle: "bg-[#ccfbf1] border-2 border-[#99f6e4] shadow-[0_12px_30px_rgba(13,148,136,0.15)]",
    badgeBg: "bg-[#0d9488] text-white",
    numColor: "text-[#0d9488]",
    offsetClass: "lg:mt-4 lg:translate-y-10",
  },
  {
    num: "06",
    title: "Fast Delivery",
    desc: "Rapid deployment cycles without quality compromises",
    icon: RunningFastDeliveryBoxIcon,
    pinColor: "#0284c7", // Cyan Sky
    frameStyle: "bg-[#e0f2fe] border-2 border-[#bae6fd] shadow-[0_12px_30px_rgba(2,132,199,0.15)]",
    badgeBg: "bg-[#0284c7] text-white",
    numColor: "text-[#0284c7]",
    offsetClass: "lg:mt-4 lg:translate-y-0",
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
      <div className="relative w-22 h-22 sm:w-28 sm:h-28 flex items-center justify-center">
        <svg className="w-full h-full transform -rotate-90" viewBox="0 0 102 102">
          <circle
            cx="51"
            cy="51"
            r={radius}
            stroke="#262626"
            strokeWidth={strokeWidth}
            fill="transparent"
          />
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

        <span className="absolute font-sans text-xs sm:text-base font-black text-white tracking-tight text-center leading-none">
          <AnimatedCounter value={displayValue} />
        </span>
      </div>

      <span className="mt-1.5 text-[10px] sm:text-xs font-bold text-white/90 tracking-wide text-center uppercase group-hover:text-amber-400 transition-colors">
        {label}
      </span>
    </motion.div>
  );
}

export default function WhyChooseUsSection() {
  return (
    <section id="why-us" className="pt-8 sm:pt-14 pb-0 bg-[#f4f4f6] border-t border-neutral-300 relative overflow-hidden">
      {/* Background Subtle Grid pattern matching reference image */}
      <div 
        className="absolute inset-0 opacity-[0.4] pointer-events-none" 
        style={{ 
          backgroundImage: `linear-gradient(to right, #cbd5e1 1px, transparent 1px), linear-gradient(to bottom, #cbd5e1 1px, transparent 1px)`,
          backgroundSize: "40px 40px"
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 mb-12 sm:mb-16">
        <SectionHeading
          badge="THE ADVANTAGE"
          title="Why Choose Us"
          subtitle="Combining world-class tech standards with local agility and unyielding dedication."
        />

        {/* Dashed Connector Line running behind the cards matching reference image */}
        <div className="absolute top-[38%] left-12 right-12 hidden lg:block pointer-events-none z-0">
          <svg className="w-full h-32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M 50 30 C 250 100, 450 -20, 680 60 C 900 120, 1100 10, 1300 50"
              stroke="#94a3b8"
              strokeWidth="2"
              strokeDasharray="6 6"
              opacity="0.6"
            />
          </svg>
        </div>

        {/* Pin Card Staggered Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-10 relative z-10 pb-6">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;

            return (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 35, scale: 0.94 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.2 }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                whileHover={{ y: -6, scale: 1.02 }}
                className={`p-2.5 rounded-3xl transition-all duration-300 group cursor-pointer relative ${feature.frameStyle} ${feature.offsetClass}`}
              >
                {/* 3D Pushpin on top of card */}
                <PushPin color={feature.pinColor} />

                {/* Inner Pure White Card Container */}
                <div className="bg-white rounded-2xl p-6 sm:p-7 h-full flex flex-col justify-between shadow-[0_2px_8px_rgba(0,0,0,0.04)]">
                  {/* Card Header: Number on Left, Icon Badge on Right */}
                  <div className="flex items-center justify-between mb-4">
                    <span className={`font-mono text-3xl font-black tracking-tight ${feature.numColor}`}>
                      {feature.num}
                    </span>
                    <div className={`p-3 rounded-2xl ${feature.badgeBg} shadow-md flex items-center justify-center transition-transform duration-300 group-hover:scale-110 group-hover:rotate-6`}>
                      <IconComponent className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Description */}
                  <div>
                    <h3 className="font-display text-xl font-black text-black uppercase tracking-tight mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-neutral-600 font-medium leading-relaxed">
                      {feature.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
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
