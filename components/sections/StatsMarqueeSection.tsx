"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderCheck, Users, RefreshCw, Award } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";
import Snake3DCoil from "@/components/ui/Snake3DCoil";

const stats = [
  {
    icon: <FolderCheck className="w-6 h-6 text-black" />,
    value: "100+",
    label: "Projects Delivered",
    description: "High-impact digital & AI products launched",
  },
  {
    icon: <Users className="w-6 h-6 text-black" />,
    value: "50+",
    label: "Active Clients",
    description: "Trusting us across India and globally",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-black" />,
    value: "95%",
    label: "Client Retention",
    description: "Long-term partners who keep growing with us",
  },
  {
    icon: <Award className="w-6 h-6 text-black" />,
    value: "5+ Years",
    label: "Industry Mastery",
    description: "Proven track record of digital transformation",
  },
];

const partnerLogos = [
  "NEXUS DIGITAL",
  "PATNA TECH HUB",
  "BIHAR VENTURES",
  "APEX HEALTHCARE",
  "MAURYA FOODS",
  "GLOBAL EDU",
  "SMART REALTY",
  "QUANTUM AI",
];

export default function StatsMarqueeSection() {
  return (
    <section className="pt-0 pb-16 bg-[#f0f0f0] text-black relative overflow-hidden">
      
      <div className="w-full bg-black text-white py-10 sm:py-14 mb-14 border-y-2 border-black mt-2 sm:mt-4 lg:mt-6 relative overflow-visible flex items-center min-h-[160px] sm:min-h-[190px]">
        
        {/* 3D MOVING COILED SNAKE ENCIRCLING THE BLACK BANNER */}
        <Snake3DCoil />

        {/* MARQUEE BRAND NAMES SCROLLING WITH EXACT 210px LEFT CUTOFF MASK (z-30 layer) */}
        <div 
          className="absolute inset-0 z-30 overflow-hidden flex items-center pt-4 sm:pt-6 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0px, transparent 170px, black 210px, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0px, transparent 170px, black 210px, black 100%)",
          }}
        >
          <div className="w-full">
            <div className="flex w-max gap-14 sm:gap-20 animate-marquee py-3 items-center pointer-events-auto">
              {[...partnerLogos, ...partnerLogos, ...partnerLogos].map((logo, idx) => (
                <div
                  key={idx}
                  className="text-lg sm:text-2xl lg:text-3xl font-display font-black text-white/95 hover:text-amber-400 transition-colors tracking-widest uppercase whitespace-nowrap cursor-pointer flex items-center gap-3 sm:gap-4"
                >
                  <span>{logo}</span>
                  <span className="text-amber-400 font-sans text-xs sm:text-sm">★</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* LEFT SIDE MONOCHROME ROARING LION OVERLAY (EXACT MATCH TO SCREENSHOT) */}
        <div className="absolute left-0 top-0 bottom-0 w-[42%] sm:w-[32%] lg:w-[26%] max-w-[400px] z-20 pointer-events-none flex items-center">
          <div className="relative w-full h-full overflow-hidden">
            <img
              src="/images/roaring_lion.jpg"
              alt="Roaring Lion"
              className="w-full h-full object-cover object-left opacity-100 contrast-125 brightness-110 grayscale mix-blend-screen relative z-0"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent 65% to-black z-20" />
          </div>
        </div>

      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 2. BIHARSTACK_DASHBOARD Live Performance Component (Restored to Light Theme) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-full rounded-none bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black" />
              <div className="w-3 h-3 bg-neutral-400" />
              <div className="w-3 h-3 border border-black" />
              <span className="text-xs font-mono font-bold tracking-wider text-black ml-2 uppercase">
                BIHARSTACK_DASHBOARD
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-black text-white">
              LIVE STATUS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-4 bg-[#f0f0f0] border border-black">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Monthly Growth</p>
              <p className="text-3xl font-black text-black mt-1">+248.5%</p>
              <span className="text-[10px] font-bold text-black uppercase">↑ VERIFIED KPI</span>
            </div>

            <div className="p-4 bg-[#f0f0f0] border border-black">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Ad ROI Return</p>
              <p className="text-3xl font-black text-black mt-1">4.8x</p>
              <span className="text-[10px] font-bold text-black uppercase">HIGH-CONVERTING</span>
            </div>

            <div className="p-4 bg-white border border-black space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-black">
                <span>Performance Optimization</span>
                <span className="font-mono">98.2%</span>
              </div>
              <div className="w-full h-3 bg-[#f0f0f0] border border-black p-0.5">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="h-full bg-black"
                />
              </div>
            </div>
          </div>
        </motion.div>

        {/* 3. 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="p-3 bg-[#f0f0f0] border border-black w-fit mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="font-display text-4xl font-black text-black tracking-tight mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-black">{stat.label}</p>
                </div>
                <p className="text-xs text-neutral-600 font-medium mt-3 pt-3 border-t border-neutral-200">
                  {stat.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
