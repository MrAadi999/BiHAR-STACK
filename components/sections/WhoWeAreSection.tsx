"use client";

import React from "react";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export default function WhoWeAreSection() {
  return (
    <section
      id="whoweare"
      className="relative bg-[#f0f0f0] text-black min-h-[calc(100vh-80px)] py-8 sm:py-12 lg:py-14 px-4 sm:px-6 lg:px-12 flex items-center justify-center overflow-hidden border-b-2 border-black selection:bg-black selection:text-white"
    >
      {/* Background Watermark & Grid */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(#000000 1px, transparent 1px)`,
            backgroundSize: "28px 28px",
          }}
        />
      </div>

      <div className="max-w-[1400px] w-full mx-auto relative z-10 flex flex-col items-center">
        
        {/* ================= TOP CENTER FRAMELESS STYLISH TITLE: B!HAR STACK (Nudged Upwards) ================= */}
        <div className="w-full flex flex-col items-center justify-center -mt-4 sm:-mt-8 mb-4 pt-0">
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            className="flex flex-col items-center gap-1"
          >


            {/* Stylish B!HAR STACK Heading (Without Frame) */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-widest font-display uppercase relative text-center">
              <span className="text-black">B</span>
              <span className="text-[#ea580c] animate-pulse drop-shadow-md">!</span>
              <span className="text-black">HAR STACK</span>

              {/* Bottom Glowing Multi-Color Underline Line - Extended on Right Side */}
              <span className="block h-2 w-[calc(100%+36px)] -mr-9 bg-gradient-to-r from-[#ea580c] via-amber-500 to-red-600 rounded-full mt-1.5 shadow-[0_0_10px_rgba(234,88,12,0.4)]" />
            </h2>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center w-full">
          
          {/* ================= LEFT COLUMN ================= */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 space-y-3.5 flex flex-col items-start"
          >

            {/* Premium Multi-Color Bold Typography Description */}
            <p className="text-black text-base sm:text-lg font-black leading-relaxed tracking-tight max-w-xl">
              <span className="bg-gradient-to-r from-[#ea580c] to-amber-600 bg-clip-text text-transparent underline decoration-4 decoration-[#ea580c] underline-offset-4">
                Bihar Stack
              </span>{" "}
              leading{" "}
              <span className="text-[#0284c7]">Digital Growth &amp; Technology Company</span>{" "}
              in Madhubani was founded in{" "}
              <span className="px-2 py-0.5 rounded bg-amber-500/20 text-[#b45309] font-black border border-amber-500/40">2025</span>{" "}
              with a{" "}
              <span className="text-[#7c3aed]">pan-India presence</span>{" "}
              and a{" "}
              <span className="text-[#059669]">global client base</span>. We specialise in delivering{" "}
              <span className="text-[#dc2626]">top-notch digital growth</span> and{" "}
              <span className="text-[#2563eb]">technology solutions</span> tailored to each client's unique needs. Our team of skilled professionals combines expertise across diverse areas to drive{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">impactful results</span> for brands worldwide.
            </p>

            {/* Exact User Attached Character Illustration (1 Step Before Graph Overlay - Right & Down Shifted) */}
            <div className="w-full pt-1 pb-1 flex items-center justify-end">
              <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                animate={{ 
                  y: [0, -8, 0],
                  rotate: [0, 1.5, 0, -1.5, 0] 
                }}
                transition={{ 
                  y: { duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
                  rotate: { duration: 6.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
                }}
                whileHover={{ scale: 1.05, rotate: 2 }}
                className="relative cursor-pointer select-none w-full max-w-[340px] sm:max-w-[380px] translate-x-2 sm:translate-x-8 translate-y-4 sm:translate-y-8"
              >
                <img 
                  src="/images/salesman_user.png?v=2026" 
                  alt="Exact Attached Character Illustration" 
                  className="w-full h-auto object-contain mix-blend-multiply drop-shadow-md"
                />
              </motion.div>
            </div>

            {/* Compact Ultra-Unique 3D Perspective Roll Read More Button (Nudged Further Upwards) */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="-mt-16 sm:-mt-24 relative z-30"
            >
              <div className="[perspective:1000px] inline-block">
                <motion.button
                  initial={false}
                  whileHover={{ rotateX: 180, y: -2 }}
                  whileTap={{ y: 2 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="relative cursor-pointer w-44 h-10 rounded-xl [transform-style:preserve-3d] select-none"
                >
                  {/* Front Face */}
                  <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl bg-red-600 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 border-2 border-black border-t-2 border-t-red-300 border-b-2 border-b-red-950 shadow-[3.5px_3.5px_0px_0px_#000000]">
                    <span>READ MORE</span>
                    <span className="w-5 h-5 rounded bg-black text-white flex items-center justify-center border border-black shadow-[1px_1px_0px_0px_#ffffff]">
                      <ArrowRight className="w-3 h-3 text-white" />
                    </span>
                  </div>

                  {/* Back Face (Flipped) */}
                  <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateX(180deg)] rounded-xl bg-slate-950 text-white font-black text-xs uppercase tracking-widest flex items-center justify-center gap-2.5 border-2 border-black border-t-2 border-t-cyan-400 border-b-2 border-b-cyan-950 shadow-[3.5px_3.5px_0px_0px_#000000]">
                    <span>EXPLORE</span>
                    <span className="w-5 h-5 rounded bg-cyan-400 text-slate-950 flex items-center justify-center font-black">
                      <ArrowRight className="w-3 h-3 text-slate-950" />
                    </span>
                  </div>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>

          {/* ================= RIGHT COLUMN: Photo 3 (Question Mark Luxury Cartoon Image Animation) ================= */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-6 flex items-center justify-center relative min-h-[320px] sm:min-h-[380px]"
          >
            {/* Rotating Background Ambient Aura Rings */}
            <motion.div 
              animate={{ rotate: 360, scale: [1, 1.04, 1] }}
              transition={{ 
                rotate: { duration: 25, repeat: Infinity, ease: "linear" }, 
                scale: { duration: 5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" } 
              }}
              className="absolute w-[280px] h-[280px] sm:w-[320px] sm:h-[320px] rounded-full border border-dashed border-black/15 pointer-events-none"
            />
            <motion.div 
              animate={{ rotate: -360 }}
              transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
              className="absolute w-[330px] h-[330px] sm:w-[380px] sm:h-[380px] rounded-full border border-dotted border-black/10 pointer-events-none"
            />

            {/* Photo 3: Question Mark 3D Levitating Image Animation */}
            <motion.div 
              animate={{ 
                y: [0, -10, 0],
                rotate: [0, 2, 0, -2, 0],
                scale: [1, 1.02, 1]
              }}
              transition={{ 
                duration: 5.5, 
                repeat: Infinity, 
                repeatType: "mirror", 
                ease: "easeInOut" 
              }}
              whileHover={{ scale: 1.05, rotate: 3 }}
              className="relative w-full max-w-[320px] sm:max-w-[380px] select-none cursor-pointer"
            >
              <img 
                src="/images/question_mark_user.png" 
                alt="Who We Are Question Mark" 
                className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl"
              />
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
