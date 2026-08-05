"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Snake3DCoil() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
      
      {/* ========================================================================= */}
      {/* STRICTLY THE ONLY ONE SINGLE REALISTIC ANACONDA SNAKE ON THE PAGE          */}
      {/* (NO SVG COILS, NO SECOND SNAKE BODY - ONLY 1 REAL ANACONDA SNAKE)         */}
      {/* ========================================================================= */}
      <motion.div
        className="absolute z-50 w-36 sm:w-48 md:w-60 h-auto pointer-events-none"
        initial={{ left: "5%", top: "-50px", scaleX: 1 }}
        animate={{
          // Slithering horizontally across the black tree-trunk banner (left -> right -> back)
          left: ["5%", "40%", "82%", "65%", "25%", "5%"],

          // Realistic organic peeking: moves UP above top border, drops DOWN hanging below bottom border under gravity
          top: ["-55px", "30px", "-65px", "45px", "-70px", "-55px"],

          // Directional turnaround physics (scaleX flips so snake head always faces movement direction)
          scaleX: [1, 1, 1, -1, -1, 1],

          // Natural organic rotation tilt while slithering and peeking
          rotate: [-4, 6, -5, 7, -6, -4],
        }}
        transition={{
          duration: 24,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.2, 0.45, 0.65, 0.85, 1],
        }}
      >
        <div className="relative w-full">
          <img
            src="/images/anaconda_peeking_up.png"
            alt="Single Realistic Anaconda Snake"
            className="w-full h-auto object-contain brightness-110 contrast-125"
            style={{
              filter: "drop-shadow(0 16px 22px rgba(0,0,0,0.95)) drop-shadow(0 0 14px rgba(77,124,15,0.4))",
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}
