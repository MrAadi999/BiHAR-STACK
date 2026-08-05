"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Snake3DCoil() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
      
      {/* ========================================================================= */}
      {/* UNCOILED SINGLE REALISTIC ANACONDA SNAKE SLITHERING FREE ALONG TREE BANNER */}
      {/* ========================================================================= */}
      <motion.div
        className="absolute z-50 w-44 sm:w-64 md:w-80 lg:w-[380px] h-auto pointer-events-none"
        initial={{ left: "2%", top: "-45px", scaleX: 1 }}
        animate={{
          // Horizontal slithering across the tree trunk log (left -> right -> back)
          left: ["2%", "38%", "78%", "60%", "20%", "2%"],

          // Realistic organic peeking: moves UP above top border, drops DOWN hanging below bottom border under gravity
          top: ["-45px", "35px", "-55px", "45px", "-60px", "-45px"],

          // Directional turnaround physics (scaleX flips so snake head always faces movement direction)
          scaleX: [1, 1, 1, -1, -1, 1],

          // Organic muscle contraction & breathing flex
          scaleY: [1, 1.04, 0.96, 1.03, 0.97, 1],

          // Natural organic rotation tilt while slithering and peeking
          rotate: [-3, 5, -4, 6, -5, -3],
        }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.45, 0.65, 0.85, 1],
        }}
      >
        <div className="relative w-full">
          <img
            src="/images/anaconda_uncoiled.png"
            alt="Single Uncoiled Realistic Anaconda Snake"
            className="w-full h-auto object-contain brightness-110 contrast-125"
            style={{
              filter: "drop-shadow(0 16px 22px rgba(0,0,0,0.95)) drop-shadow(0 0 14px rgba(77,124,15,0.35))",
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}
