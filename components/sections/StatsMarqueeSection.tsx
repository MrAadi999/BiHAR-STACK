"use client";

import React from "react";

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
    <section className="pt-0 pb-0 bg-[#f0f0f0] text-black relative overflow-hidden">
      
      <div className="w-full bg-black text-white py-10 sm:py-14 border-y-2 border-black mt-2 sm:mt-4 lg:mt-6 relative overflow-hidden flex items-center min-h-[160px] sm:min-h-[190px]">
        
        {/* MARQUEE BRAND NAMES SCROLLING WITH EXACT 210px LEFT CUTOFF MASK (z-30 layer) */}
        <div 
          className="absolute inset-0 z-30 overflow-hidden flex items-center pt-4 sm:pt-6 pointer-events-none"
          style={{
            maskImage: "linear-gradient(to right, transparent 0px, transparent 170px, black 210px, black 100%)",
            WebkitMaskImage: "linear-gradient(to right, transparent 0px, transparent 170px, black 210px, black 100%)",
          }}
        >
          <div className="w-full">
            <div className="flex w-max gap-28 sm:gap-40 lg:gap-52 animate-[marquee_45s_linear_infinite_reverse] py-3 items-center pointer-events-auto">
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
    </section>
  );
}
