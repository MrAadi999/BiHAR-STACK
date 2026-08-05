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
    icon: <HeartPulse className="w-7 h-7 text-rose-400" />,
    title: "Healthcare & Clinics",
    desc: "Telehealth portals, appointment systems, & medical SEO",
  },
  {
    icon: <GraduationCap className="w-7 h-7 text-indigo-400" />,
    title: "Education & EdTech",
    desc: "LMS platforms, student lead generation, & mobile apps",
  },
  {
    icon: <UtensilsCrossed className="w-7 h-7 text-amber-400" />,
    title: "Restaurants & Hospitality",
    desc: "QR menus, delivery integration, & local footfall ads",
  },
  {
    icon: <Home className="w-7 h-7 text-glow-cyan" />,
    title: "Real Estate & Builders",
    desc: "Virtual property walkthroughs & high-intent lead funnels",
  },
  {
    icon: <ShoppingBag className="w-7 h-7 text-emerald-400" />,
    title: "Retail & E-Commerce",
    desc: "Shopify stores, inventory sync, & performance marketing",
  },
  {
    icon: <Landmark className="w-7 h-7 text-electric-400" />,
    title: "Finance & FinTech",
    desc: "Secure web dashboards, KYC flows, & automated CRM",
  },
  {
    icon: <Factory className="w-7 h-7 text-purple-400" />,
    title: "Manufacturing & Industrial",
    desc: "B2B catalog portals & global buyer export campaigns",
  },
  {
    icon: <Rocket className="w-7 h-7 text-glow-sky" />,
    title: "Startups & SaaS",
    desc: "MVP buildouts, pitchdeck design, & rapid scaling engines",
  },
];

export default function IndustriesSection() {
  return (
    <section id="industries" className="py-24 bg-navy-950 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="SECTOR DOMAIN EXPERTISE"
          title="Industries We Serve"
          subtitle="Tailored digital strategies engineered for specific industry workflows and customer expectations."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {industries.map((ind, idx) => (
            <motion.div
              key={ind.title}
              initial={{ opacity: 0, y: 30, scale: 0.95 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: false, amount: 0.2 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-electric-500/40 hover:shadow-blue-glow transition-all duration-300 group cursor-pointer"
            >
              <div className="p-3.5 rounded-xl bg-slate-800/80 border border-white/10 w-fit mb-4 group-hover:scale-115 transition-transform duration-300">
                {ind.icon}
              </div>
              <h3 className="font-display text-lg font-bold text-white mb-2 group-hover:text-glow-sky transition-colors">
                {ind.title}
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                {ind.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
