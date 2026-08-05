"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Snake3DCoil() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
      
      {/* ========================================================================= */}
      {/* 360-DEGREE CONTINUOUS WRAPPING OF REALISTIC ANACONDA AROUND ALL 4 BORDERS */}
      {/* (Slithers Top -> Down Right Edge -> Across Bottom -> Up Left Edge -> Loop) */}
      {/* ========================================================================= */}
      <motion.div
        className="absolute z-50 w-40 sm:w-56 md:w-72 lg:w-[320px] h-auto pointer-events-none"
        initial={{ left: "0%", top: "-45px", rotate: 0 }}
        animate={{
          // 1. Slither Top Edge (Left -> Right)
          // 2. Wrap Down Right Edge (Top -> Bottom)
          // 3. Slither Bottom Edge (Right -> Left)
          // 4. Wrap Up Left Edge (Bottom -> Top)
          left: ["0%", "78%", "85%", "78%", "0%", "-40px", "0%"],
          top: ["-45px", "-45px", "115px", "135px", "135px", "-45px", "-45px"],

          // Smooth 360-degree rotation along 4 border edges
          rotate: [0, 0, 90, 180, 180, 270, 360],

          // Organic muscle contraction & slithering flex
          scaleY: [1, 1.05, 0.95, 1.04, 0.96, 1.03, 1],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.28, 0.35, 0.65, 0.72, 0.93, 1],
        }}
      >
        <div className="relative w-full">
          <img
            src="/images/anaconda_uncoiled.png"
            alt="Single Uncoiled Realistic Anaconda Snake"
            className="w-full h-auto object-contain brightness-110 contrast-125 pointer-events-none"
            style={{
              mixBlendMode: "screen",
              filter: "drop-shadow(0 16px 22px rgba(0,0,0,0.95)) drop-shadow(0 0 14px rgba(77,124,15,0.35))",
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}
