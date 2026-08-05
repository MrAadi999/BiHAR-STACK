"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Snake3DCoil() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-40">
      
      {/* 1. PHOTOREALISTIC SMALL GREEN TREE PYTHON (Slithering across top/middle of tree trunk banner) */}
      <motion.div
        className="absolute top-[-10px] sm:top-[-15px] z-40 w-28 sm:w-36 md:w-44 h-auto"
        initial={{ left: "2%", scaleX: 1 }}
        animate={{
          left: ["2%", "82%", "2%"],
          scaleX: [1, 1, -1, -1, 1], // Turn around head direction realistically at edges
          y: [0, -8, 6, -10, 4, 0],
          rotate: [-3, 4, -5, 3, -3],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
          times: [0, 0.48, 0.5, 0.98, 1],
        }}
      >
        <div className="relative w-full">
          <img
            src="/images/realistic_snake_green.png"
            alt="Realistic Tree Python Snake"
            className="w-full h-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.9)] contrast-125 brightness-105"
            style={{
              filter: "drop-shadow(0 12px 16px rgba(0,0,0,0.95)) drop-shadow(0 0 10px rgba(34,197,94,0.3))",
            }}
          />
        </div>
      </motion.div>

      {/* 2. PHOTOREALISTIC SMALL GOLDEN PYTHON (Slithering along bottom of tree trunk banner) */}
      <motion.div
        className="absolute bottom-[-12px] sm:bottom-[-18px] z-40 w-32 sm:w-40 md:w-48 h-auto"
        initial={{ left: "80%", scaleX: -1 }}
        animate={{
          left: ["80%", "5%", "80%"],
          scaleX: [-1, -1, 1, 1, -1], // Turns head around when changing slithering direction
          y: [0, 8, -6, 10, -4, 0],
          rotate: [3, -4, 5, -3, 3],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
          times: [0, 0.48, 0.5, 0.98, 1],
        }}
      >
        <div className="relative w-full">
          <img
            src="/images/realistic_snake_gold.png"
            alt="Realistic Golden Snake"
            className="w-full h-auto object-contain drop-shadow-[0_10px_15px_rgba(0,0,0,0.9)] contrast-125 brightness-105"
            style={{
              filter: "drop-shadow(0 12px 16px rgba(0,0,0,0.95)) drop-shadow(0 0 10px rgba(234,179,8,0.3))",
            }}
          />
        </div>
      </motion.div>

    </div>
  );
}
