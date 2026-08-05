"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Rope3DCoil() {
  // 7 spiral rope coils wrapping tightly around the black marquee banner
  const coils = [0, 1, 2, 3, 4, 5, 6];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
      <svg
        className="w-full h-full absolute inset-0 overflow-visible z-30"
        viewBox="0 0 1400 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* 1. REALISTIC 3D JUTE ROPE CYLINDRICAL SHADING GRADIENT */}
          <linearGradient id="ropeCylinderGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#fef08a" />     {/* Top Light Fiber Highlight */}
            <stop offset="25%" stopColor="#d97706" />    {/* Golden Hemp Fiber */}
            <stop offset="65%" stopColor="#92400e" />    {/* Rich Jute Shadow */}
            <stop offset="90%" stopColor="#451a03" />    {/* Deep Rope Core Shadow */}
            <stop offset="100%" stopColor="#78350f" />   {/* Bottom Edge */}
          </linearGradient>

          {/* 2. REALISTIC TWISTED ROPE STRAND PATTERN */}
          <pattern id="ropeStrandPattern" width="16" height="16" patternUnits="userSpaceOnUse">
            {/* Diagonal twisted hemp fibers */}
            <path
              d="M -4,12 L 12,-4 M 0,16 L 16,0 M 4,20 L 20,4"
              stroke="#451a03"
              strokeWidth="2.5"
              strokeLinecap="round"
              opacity="0.8"
            />
            <path
              d="M -4,12 L 12,-4 M 0,16 L 16,0 M 4,20 L 20,4"
              stroke="#fef08a"
              strokeWidth="1"
              strokeLinecap="round"
              opacity="0.4"
            />
          </pattern>

          {/* 3. 3D DROP SHADOW ONTO BLACK BANNER */}
          <filter id="rope3DShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="3" dy="6" stdDeviation="5" floodColor="#000000" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* ========================================================================= */}
        {/* 1. BACK ROPE COILS (Wrapping behind the black marquee banner)            */}
        {/* ========================================================================= */}
        <g className="opacity-55" filter="url(#rope3DShadow)">
          {coils.map((i) => {
            const startX = i * 220 - 40;
            return (
              <motion.path
                key={`back-rope-${i}`}
                d={`M ${startX + 165},195 C ${startX + 195},215 ${startX + 225},-10 ${startX + 245},5`}
                stroke="url(#ropeCylinderGrad)"
                strokeWidth="18"
                strokeLinecap="round"
                animate={{
                  strokeDashoffset: [-15, 15],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                  repeatType: "reverse",
                }}
              />
            );
          })}
        </g>

        {/* ========================================================================= */}
        {/* 2. FRONT ROPE COILS (Wrapping OVER the front face of the black banner)   */}
        {/* ========================================================================= */}
        <g filter="url(#rope3DShadow)">
          {coils.map((i) => {
            const startX = i * 220 - 40;
            return (
              <g key={`front-rope-group-${i}`}>
                {/* A. Deep Cast Shadow under rope onto banner */}
                <path
                  d={`M ${startX + 25},5 C ${startX + 55},-20 ${startX + 115},215 ${startX + 165},195`}
                  stroke="#000000"
                  strokeWidth="28"
                  strokeLinecap="round"
                  opacity="0.8"
                />

                {/* B. Main 3D Rope Body (Cylindrical Base) */}
                <motion.path
                  d={`M ${startX + 25},5 C ${startX + 55},-20 ${startX + 115},215 ${startX + 165},195`}
                  stroke="url(#ropeCylinderGrad)"
                  strokeWidth="22"
                  strokeLinecap="round"
                  animate={{
                    strokeWidth: [21, 23, 21],
                  }}
                  transition={{
                    duration: 3.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.2,
                  }}
                />

                {/* C. Twisted Jute Fiber Strand Overlay */}
                <path
                  d={`M ${startX + 25},5 C ${startX + 55},-20 ${startX + 115},215 ${startX + 165},195`}
                  stroke="url(#ropeStrandPattern)"
                  strokeWidth="20"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                {/* D. Individual Fiber Ridge Texture Lines */}
                <path
                  d={`M ${startX + 25},5 C ${startX + 55},-20 ${startX + 115},215 ${startX + 165},195`}
                  stroke="#451a03"
                  strokeWidth="18"
                  strokeDasharray="4 12"
                  strokeLinecap="round"
                  opacity="0.6"
                />

                {/* E. Top Specular Specular Light Reflection Along Rope Ridge */}
                <path
                  d={`M ${startX + 25},5 C ${startX + 55},-20 ${startX + 115},215 ${startX + 165},195`}
                  stroke="#fef08a"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  opacity="0.7"
                />
              </g>
            );
          })}
        </g>
      </svg>
    </div>
  );
}
