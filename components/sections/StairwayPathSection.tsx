"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, ArrowUpRight } from "lucide-react";

export default function StairwayPathSection() {
  const steps = [
    { title: "01. ONBOARDING & AUDIT", desc: "Setting the foundation and analyzing target KPIs" },
    { title: "02. ARCHITECTURE & AI", desc: "Building scalable Next.js and AI automation systems" },
    { title: "03. AGILITY & TESTING", desc: "Rigorous performance testing and speed optimization" },
    { title: "04. LAUNCH & 10X GROWTH", desc: "Reaching the doorway of market domination" },
  ];

  return (
    <section className="py-24 bg-black text-white relative w-full max-w-full overflow-hidden border-t-2 border-black left-0 right-0">
      {/* Background ambient lighting */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-800/40 via-black to-black pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 bg-neutral-900 border-2 border-white px-4 py-1.5 shadow-[3px_3px_0px_0px_rgba(255,255,255,1)] mb-4"
          >
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-black tracking-widest uppercase text-white">
              PATHWAY TO SUCCESS
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="font-display text-3xl sm:text-5xl lg:text-6xl font-black uppercase tracking-tight text-white mb-4"
          >
            Step Up To The Next Level
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-neutral-400 text-sm sm:text-base max-w-2xl mx-auto font-medium"
          >
            A clear, elevated path designed to elevate your brand from concept to digital market leadership.
          </motion.p>
        </div>

        {/* 3D STAIRWAY & GLOWING DOORWAY GRAPHIC CONTAINER */}
        <div className="relative max-w-4xl mx-auto flex flex-col items-center justify-center pt-8 pb-12">
          
          {/* 1. GLOWING DOORWAY / WINDOW AT TOP */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative z-20 mb-2 flex flex-col items-center"
          >
            {/* Soft Radial Light Aura behind the doorway */}
            <div className="absolute -inset-16 bg-white/20 rounded-full blur-3xl pointer-events-none animate-pulse" />
            <div className="absolute -inset-8 bg-white/40 rounded-full blur-xl pointer-events-none" />

            {/* Glowing Doorway Frame */}
            <div className="w-16 h-28 bg-white border-2 border-white rounded-t-sm shadow-[0_0_50px_rgba(255,255,255,0.9)] flex items-center justify-center relative z-10 group cursor-pointer hover:scale-105 transition-transform duration-300">
              <div className="w-12 h-24 bg-white border border-neutral-200 flex flex-col items-center justify-center gap-1">
                <span className="text-[9px] font-black tracking-widest text-black uppercase text-center font-mono">
                  NEXT<br />LEVEL
                </span>
                <ArrowUpRight className="w-4 h-4 text-black" />
              </div>
            </div>
            
            <span className="text-[10px] font-mono font-extrabold tracking-[0.3em] uppercase text-white mt-3 bg-neutral-900 px-3 py-1 border border-white">
              GOAL GATEWAY
            </span>
          </motion.div>

          {/* 2. THE PERSPECTIVE STAIRWAY / PATH */}
          <div className="w-full flex flex-col items-center relative z-10 space-y-1 my-4">
            
            {/* Step 16 (Top - Narrowest) */}
            <div className="w-24 h-2.5 bg-gradient-to-b from-neutral-200 to-neutral-400 border border-neutral-500 rounded-2xs shadow-xs" />
            <div className="w-28 h-2.5 bg-gradient-to-b from-neutral-300 to-neutral-500 border border-neutral-600 rounded-2xs shadow-xs" />
            <div className="w-32 h-3 bg-gradient-to-b from-neutral-300 to-neutral-500 border border-neutral-600 rounded-2xs shadow-xs" />
            <div className="w-36 h-3 bg-gradient-to-b from-neutral-400 to-neutral-600 border border-neutral-700 rounded-2xs shadow-xs" />
            <div className="w-44 h-3.5 bg-gradient-to-b from-neutral-400 to-neutral-600 border border-neutral-700 rounded-2xs shadow-xs" />
            <div className="w-52 h-3.5 bg-gradient-to-b from-neutral-500 to-neutral-700 border border-neutral-800 rounded-2xs shadow-xs" />
            <div className="w-60 h-4 bg-gradient-to-b from-neutral-500 to-neutral-700 border border-neutral-800 rounded-2xs shadow-xs" />
            <div className="w-72 h-4 bg-gradient-to-b from-neutral-600 to-neutral-800 border border-neutral-800 rounded-2xs shadow-xs" />
            <div className="w-84 h-4.5 bg-gradient-to-b from-neutral-600 to-neutral-800 border border-neutral-800 rounded-2xs shadow-xs" />
            <div className="w-96 h-4.5 bg-gradient-to-b from-neutral-700 to-neutral-900 border border-neutral-900 rounded-2xs shadow-xs" />
            <div className="w-[440px] max-w-full h-5 bg-gradient-to-b from-neutral-700 to-neutral-900 border border-neutral-900 rounded-2xs shadow-xs" />
            <div className="w-[520px] max-w-full h-5 bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-900 rounded-2xs shadow-xs" />
            <div className="w-[600px] max-w-full h-6 bg-gradient-to-b from-neutral-800 to-neutral-950 border border-neutral-900 rounded-2xs shadow-xs" />
            <div className="w-[680px] max-w-full h-6 bg-gradient-to-b from-neutral-900 to-black border border-neutral-800 rounded-2xs shadow-xs" />
            
            {/* Bottom Base Step (Widest) */}
            <div className="w-[760px] max-w-full h-7 bg-neutral-950 border-2 border-white rounded-none shadow-[6px_6px_0px_0px_rgba(255,255,255,1)] flex items-center justify-between px-6">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-emerald-400">
                START HERE
              </span>
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-white">
                ENTERPRISES &amp; STARTUPS PATHWAY
              </span>
            </div>

          </div>

          {/* 3. FLOATING MILESTONE CARDS ALONG THE STAIRS */}
          <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-neutral-900 border-2 border-white p-5 shadow-[4px_4px_0px_0px_rgba(255,255,255,1)] hover:-translate-y-1 transition-transform"
              >
                <h4 className="font-mono text-xs font-black tracking-widest text-white uppercase mb-2">
                  {step.title}
                </h4>
                <p className="text-xs text-neutral-400 font-medium leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
