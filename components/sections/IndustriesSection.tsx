"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  HeartPulse,
  GraduationCap,
  UtensilsCrossed,
  Home,
  ShoppingBag,
  Landmark,
  Factory,
  Rocket,
  ArrowUpRight,
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    icon: <HeartPulse className="w-8 h-8 text-rose-700" />,
    title: "Healthcare & Clinics",
    desc: "Telehealth portals, appointment systems, & medical SEO",
    titleColor: "text-rose-950",
    descColor: "text-rose-900/85",
    iconBg: "text-rose-700 border-rose-200/70 bg-rose-50/80 shadow-[inset_3px_3px_6px_rgba(244,63,94,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-rose-200/40 via-pink-100/20 to-transparent",
    accentBorder: "group-hover:border-rose-300/80",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-indigo-700" />,
    title: "Education & EdTech",
    desc: "LMS platforms, student lead generation, & mobile apps",
    titleColor: "text-indigo-950",
    descColor: "text-indigo-900/85",
    iconBg: "text-indigo-700 border-indigo-200/70 bg-indigo-50/80 shadow-[inset_3px_3px_6px_rgba(99,102,241,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-indigo-200/40 via-blue-100/20 to-transparent",
    accentBorder: "group-hover:border-indigo-300/80",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-amber-700" />,
    title: "Restaurants & Hospitality",
    desc: "QR menus, delivery integration, & local footfall ads",
    titleColor: "text-amber-950",
    descColor: "text-amber-900/85",
    iconBg: "text-amber-700 border-amber-200/70 bg-amber-50/80 shadow-[inset_3px_3px_6px_rgba(245,158,11,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-amber-200/40 via-orange-100/20 to-transparent",
    accentBorder: "group-hover:border-amber-300/80",
  },
  {
    icon: <Home className="w-8 h-8 text-cyan-700" />,
    title: "Real Estate & Builders",
    desc: "Virtual property walkthroughs & high-intent lead funnels",
    titleColor: "text-cyan-950",
    descColor: "text-cyan-900/85",
    iconBg: "text-cyan-700 border-cyan-200/70 bg-cyan-50/80 shadow-[inset_3px_3px_6px_rgba(6,182,212,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-cyan-200/40 via-teal-100/20 to-transparent",
    accentBorder: "group-hover:border-cyan-300/80",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-emerald-700" />,
    title: "Retail & E-Commerce",
    desc: "Shopify stores, inventory sync, & performance marketing",
    titleColor: "text-emerald-950",
    descColor: "text-emerald-900/85",
    iconBg: "text-emerald-700 border-emerald-200/70 bg-emerald-50/80 shadow-[inset_3px_3px_6px_rgba(16,185,129,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-emerald-200/40 via-teal-100/20 to-transparent",
    accentBorder: "group-hover:border-emerald-300/80",
  },
  {
    icon: <Landmark className="w-8 h-8 text-sky-700" />,
    title: "Finance & FinTech",
    desc: "Secure web dashboards, KYC flows, & automated CRM",
    titleColor: "text-sky-950",
    descColor: "text-sky-900/85",
    iconBg: "text-sky-700 border-sky-200/70 bg-sky-50/80 shadow-[inset_3px_3px_6px_rgba(14,165,233,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-sky-200/40 via-blue-100/20 to-transparent",
    accentBorder: "group-hover:border-sky-300/80",
  },
  {
    icon: <Factory className="w-8 h-8 text-purple-700" />,
    title: "Manufacturing & Industrial",
    desc: "B2B catalog portals & global buyer export campaigns",
    titleColor: "text-purple-950",
    descColor: "text-purple-900/85",
    iconBg: "text-purple-700 border-purple-200/70 bg-purple-50/80 shadow-[inset_3px_3px_6px_rgba(168,85,247,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-purple-200/40 via-fuchsia-100/20 to-transparent",
    accentBorder: "group-hover:border-purple-300/80",
  },
  {
    icon: <Rocket className="w-8 h-8 text-teal-700" />,
    title: "Startups & SaaS",
    desc: "MVP buildouts, pitchdeck design, & rapid scaling engines",
    titleColor: "text-teal-950",
    descColor: "text-teal-900/85",
    iconBg: "text-teal-700 border-teal-200/70 bg-teal-50/80 shadow-[inset_3px_3px_6px_rgba(20,184,166,0.15),inset_-3px_-3px_6px_rgba(255,255,255,0.95)]",
    glow: "from-teal-200/40 via-emerald-100/20 to-transparent",
    accentBorder: "group-hover:border-teal-300/80",
  },
];

function NeumorphicIndustryCard({
  ind,
  idx,
}: {
  ind: (typeof industries)[0];
  idx: number;
}) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    setRotateX(-y / 12);
    setRotateY(x / 12);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
    setIsHovered(false);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.94 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: false, amount: 0.15 }}
      transition={{
        duration: 0.55,
        delay: idx * 0.06,
        ease: [0.22, 1, 0.36, 1],
      }}
      style={{ perspective: 1000 }}
      className="h-full"
    >
      <motion.div
        animate={{ rotateX, rotateY }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={handleMouseLeave}
        whileTap={{ scale: 0.97 }}
        className={`relative h-full p-7 sm:p-8 rounded-[30px] bg-[#EEF3F7] border border-white/90 shadow-[14px_16px_28px_rgba(164,179,198,0.45),-10px_-10px_22px_rgba(255,255,255,0.95)] hover:shadow-[20px_26px_40px_rgba(140,160,185,0.58),-14px_-14px_30px_rgba(255,255,255,1)] ${ind.accentBorder} transition-all duration-300 group cursor-pointer flex flex-col justify-between overflow-hidden select-none`}
      >
        {/* Ambient Color Glow Mesh */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${ind.glow} pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300`}
        />

        {/* Shimmer Edge Sweep Effect on Hover */}
        {isHovered && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: "200%" }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent pointer-events-none skew-x-12"
          />
        )}

        {/* Top Header: Icon + Floating Arrow */}
        <div className="relative z-10 mb-6 flex items-center justify-between">
          <motion.div
            animate={isHovered ? { rotate: [0, -8, 8, 0], scale: 1.12 } : { scale: 1 }}
            transition={{ duration: 0.4 }}
            className={`p-3.5 rounded-2xl ${ind.iconBg} border w-fit transition-transform duration-300`}
          >
            {ind.icon}
          </motion.div>

          <div className="w-8 h-8 rounded-full bg-[#EEF3F7] shadow-[inset_2px_2px_4px_rgba(164,179,198,0.35),inset_-2px_-2px_4px_rgba(255,255,255,0.9)] flex items-center justify-center text-slate-400 group-hover:text-slate-800 group-hover:scale-110 transition-all duration-300">
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
          </div>
        </div>

        {/* Card Body: Title & Description */}
        <div className="relative z-10">
          <h3
            className={`font-display text-lg sm:text-xl font-extrabold ${ind.titleColor} mb-2.5 tracking-tight transition-colors duration-200`}
          >
            {ind.title}
          </h3>
          <p
            className={`text-xs sm:text-sm ${ind.descColor} leading-relaxed font-semibold`}
          >
            {ind.desc}
          </p>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function IndustriesSection() {
  return (
    <section
      id="industries"
      className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#ECF1F5] relative overflow-hidden border-t border-black/5"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SECTOR DOMAIN EXPERTISE"
          title="Industries We Serve"
          subtitle="Tailored digital strategies engineered for specific industry workflows and customer expectations."
          className="mb-8 sm:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {industries.map((ind, idx) => (
            <NeumorphicIndustryCard key={ind.title} ind={ind} idx={idx} />
          ))}
        </div>
      </div>
    </section>
  );
}


