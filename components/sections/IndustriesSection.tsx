"use client";

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
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const industries = [
  {
    icon: <HeartPulse className="w-8 h-8 text-rose-700" />,
    title: "Healthcare & Clinics",
    desc: "Telehealth portals, appointment systems, & medical SEO",
    titleColor: "text-rose-950",
    descColor: "text-rose-900/85",
    iconBg: "text-rose-700 border-rose-200/70 bg-rose-50/70",
    glow: "from-rose-200/30 via-pink-100/15 to-transparent",
  },
  {
    icon: <GraduationCap className="w-8 h-8 text-indigo-700" />,
    title: "Education & EdTech",
    desc: "LMS platforms, student lead generation, & mobile apps",
    titleColor: "text-indigo-950",
    descColor: "text-indigo-900/85",
    iconBg: "text-indigo-700 border-indigo-200/70 bg-indigo-50/70",
    glow: "from-indigo-200/30 via-blue-100/15 to-transparent",
  },
  {
    icon: <UtensilsCrossed className="w-8 h-8 text-amber-700" />,
    title: "Restaurants & Hospitality",
    desc: "QR menus, delivery integration, & local footfall ads",
    titleColor: "text-amber-950",
    descColor: "text-amber-900/85",
    iconBg: "text-amber-700 border-amber-200/70 bg-amber-50/70",
    glow: "from-amber-200/30 via-orange-100/15 to-transparent",
  },
  {
    icon: <Home className="w-8 h-8 text-cyan-700" />,
    title: "Real Estate & Builders",
    desc: "Virtual property walkthroughs & high-intent lead funnels",
    titleColor: "text-cyan-950",
    descColor: "text-cyan-900/85",
    iconBg: "text-cyan-700 border-cyan-200/70 bg-cyan-50/70",
    glow: "from-cyan-200/30 via-teal-100/15 to-transparent",
  },
  {
    icon: <ShoppingBag className="w-8 h-8 text-emerald-700" />,
    title: "Retail & E-Commerce",
    desc: "Shopify stores, inventory sync, & performance marketing",
    titleColor: "text-emerald-950",
    descColor: "text-emerald-900/85",
    iconBg: "text-emerald-700 border-emerald-200/70 bg-emerald-50/70",
    glow: "from-emerald-200/30 via-teal-100/15 to-transparent",
  },
  {
    icon: <Landmark className="w-8 h-8 text-sky-700" />,
    title: "Finance & FinTech",
    desc: "Secure web dashboards, KYC flows, & automated CRM",
    titleColor: "text-sky-950",
    descColor: "text-sky-900/85",
    iconBg: "text-sky-700 border-sky-200/70 bg-sky-50/70",
    glow: "from-sky-200/30 via-blue-100/15 to-transparent",
  },
  {
    icon: <Factory className="w-8 h-8 text-purple-700" />,
    title: "Manufacturing & Industrial",
    desc: "B2B catalog portals & global buyer export campaigns",
    titleColor: "text-purple-950",
    descColor: "text-purple-900/85",
    iconBg: "text-purple-700 border-purple-200/70 bg-purple-50/70",
    glow: "from-purple-200/30 via-fuchsia-100/15 to-transparent",
  },
  {
    icon: <Rocket className="w-8 h-8 text-teal-700" />,
    title: "Startups & SaaS",
    desc: "MVP buildouts, pitchdeck design, & rapid scaling engines",
    titleColor: "text-teal-950",
    descColor: "text-teal-900/85",
    iconBg: "text-teal-700 border-teal-200/70 bg-teal-50/70",
    glow: "from-teal-200/30 via-emerald-100/15 to-transparent",
  },
];

export default function IndustriesSection() {
  const getInitialPosition = (index: number) => {
    const col = index % 4;
    if (col === 0) return { x: -100, rotate: -3 };
    if (col === 1) return { x: -50, rotate: -1.5 };
    if (col === 2) return { x: 50, rotate: 1.5 };
    return { x: 100, rotate: 3 };
  };

  return (
    <section id="industries" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#ECF1F5] relative overflow-hidden border-t border-black/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SECTOR DOMAIN EXPERTISE"
          title="Industries We Serve"
          subtitle="Tailored digital strategies engineered for specific industry workflows and customer expectations."
          className="mb-8 sm:mb-12"
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-7">
          {industries.map((ind, idx) => {
            const pos = getInitialPosition(idx);
            return (
              <motion.div
                key={ind.title}
                initial={{ opacity: 0, x: pos.x, rotate: pos.rotate, scale: 0.94 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0, scale: 1 }}
                viewport={{ once: false, amount: 0.15 }}
                transition={{
                  type: "spring",
                  stiffness: 85,
                  damping: 14,
                  delay: (idx % 4) * 0.07 + Math.floor(idx / 4) * 0.1,
                }}
                whileHover={{ y: -6, scale: 1.02 }}
                className="relative p-7 sm:p-8 rounded-[28px] bg-[#EEF3F7] border border-white/80 shadow-[14px_16px_28px_rgba(164,179,198,0.45),-10px_-10px_22px_rgba(255,255,255,0.95)] hover:shadow-[18px_24px_36px_rgba(148,165,186,0.55),-12px_-12px_28px_rgba(255,255,255,1)] transition-all duration-300 group cursor-pointer flex flex-col justify-between overflow-hidden"
              >
                {/* Soft Ambient Inner Glow Accent */}
                <div className={`absolute inset-0 bg-gradient-to-br ${ind.glow} pointer-events-none opacity-70 group-hover:opacity-100 transition-opacity duration-300`} />

                <div className="relative z-10 mb-6">
                  <div className={`p-3.5 rounded-2xl ${ind.iconBg} shadow-[inset_3px_3px_6px_rgba(164,179,198,0.3),inset_-3px_-3px_6px_rgba(255,255,255,0.9)] border w-fit group-hover:scale-110 transition-transform duration-300`}>
                    {ind.icon}
                  </div>
                </div>

                <div className="relative z-10">
                  <h3 className={`font-display text-lg font-bold ${ind.titleColor} mb-2 tracking-tight transition-colors`}>
                    {ind.title}
                  </h3>
                  <p className={`text-xs sm:text-sm ${ind.descColor} leading-relaxed font-semibold`}>
                    {ind.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

