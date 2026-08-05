"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

import SolarSystem from "@/components/ui/SolarSystem";

function InstagramBlueTick() {
  return (
    <svg className="w-5 h-5 shrink-0 drop-shadow-2xs" viewBox="0 0 24 24" fill="none">
      {/* 8-Point Rounded Starburst Badge with Neo-Brutalist Black Outline */}
      <path
        d="M12 2l2.4 2.4L17.8 3l.6 3.4L21 8l-1.8 3 1.8 3-2.6 1.6-.6 3.4-3.4-1.4L12 22l-2.4-2.4L6.2 21l-.6-3.4L3 16l1.8-3L3 8l2.6-1.6.6-3.4 3.4 1.4L12 2z"
        fill="#1d9bf0"
        stroke="#000000"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      {/* Crisp White Checkmark (✓) */}
      <path
        d="M9.5 15.2l-3.2-3.2 1.41-1.41 1.79 1.79 5.59-5.59 1.41 1.41-7 7z"
        fill="#ffffff"
      />
    </svg>
  );
}

export default function HeroSection() {
  return (
    <section className="relative min-h-[85vh] pt-20 sm:pt-24 pb-12 flex flex-col items-center justify-between overflow-hidden bg-[#f0f0f0]">
      
      {/* Continuous Marquee Watermark - Strictly Right to Left Motion */}
      <div className="absolute top-[36%] inset-x-0 flex items-center justify-start pointer-events-none z-0 overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 25,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          }}
          className="whitespace-nowrap select-none flex gap-8"
        >
          <h1 className="gazu-text text-black text-center whitespace-nowrap opacity-[0.09] tracking-widest uppercase font-black">
            BIHAR STACK &bull; YOUR DIGITAL PARTNER &bull; BIHAR STACK &bull; YOUR DIGITAL PARTNER &bull;&nbsp;
          </h1>
          <h1 className="gazu-text text-black text-center whitespace-nowrap opacity-[0.09] tracking-widest uppercase font-black">
            BIHAR STACK &bull; YOUR DIGITAL PARTNER &bull; BIHAR STACK &bull; YOUR DIGITAL PARTNER &bull;&nbsp;
          </h1>
        </motion.div>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10 w-full">
        
        {/* GAZU Style Top Left Architectural Typography */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-6"
        >
          <p className="text-xs font-bold tracking-[0.25em] leading-relaxed uppercase text-black">
            DIGITAL TECH<br />
            THAT SCALES<br />
            WITH YOU.
          </p>
          <div className="w-12 h-[2px] bg-black mt-2" />
        </motion.div>

        {/* 2-Column Hero Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Headline & Info */}
          <div className="lg:col-span-7">
            
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black tracking-tight text-black uppercase leading-[1.03] mb-6"
            >
              We Build <br />
              <span className="underline underline-offset-8 decoration-4 decoration-black">
                Digital Businesses
              </span> <br />
              That Scale.
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-base sm:text-xl text-neutral-800 font-medium leading-relaxed max-w-2xl mb-8 tracking-wide"
            >
              From branding and performance marketing to custom web apps and AI automation,{" "}
              <strong className="text-black font-extrabold uppercase">BiharStack</strong> delivers high-impact technology solutions for modern enterprises.
            </motion.p>

            {/* Trust points */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-wrap items-center gap-8 text-xs font-bold uppercase tracking-widest text-neutral-800 pt-6 border-t-2 border-neutral-300"
            >
              <div className="flex items-center gap-2.5">
                <InstagramBlueTick />
                <span>AI-Driven Systems</span>
              </div>
              <div className="flex items-center gap-2.5">
                <InstagramBlueTick />
                <span>100% Delivery Guarantee</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Solar System Interactive Services Diagram */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-5 flex justify-center py-0 lg:-mt-36 -mt-12 relative overflow-visible"
          >
            <SolarSystem centerTitle="10X GROWTH" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
