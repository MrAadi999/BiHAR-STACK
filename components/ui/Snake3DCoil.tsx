"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Snake3DCoil() {
  // 6 spiral Anaconda body coils wrapping around the black tree-trunk banner (The single snake's coiled body)
  const coils = [0, 1, 2, 3, 4, 5];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-visible z-40">
      
      {/* ========================================================================= */}
      {/* 1. SINGLE ANACONDA BODY COILS WRAPPING AROUND THE BLACK TREE TRUNK BANNER */}
      {/* ========================================================================= */}
      <svg
        className="w-full h-full absolute inset-0 overflow-visible z-10"
        viewBox="0 0 1400 200"
        preserveAspectRatio="none"
        fill="none"
      >
        <defs>
          {/* Realistic Anaconda Skin Gradient */}
          <linearGradient id="anacondaSkinCylinder" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#4d7c0f" />     {/* Deep Olive Top */}
            <stop offset="35%" stopColor="#3f6212" />    {/* Anaconda Body Green */}
            <stop offset="70%" stopColor="#1a2e05" />    {/* Underbody Shadow */}
            <stop offset="100%" stopColor="#ca8a04" />   {/* Ventral Yellow Scale Accent */}
          </linearGradient>

          {/* Anaconda Black Blotch Pattern */}
          <pattern id="anacondaBlotches" width="24" height="24" patternUnits="userSpaceOnUse">
            <ellipse cx="12" cy="12" rx="7" ry="5" fill="#09090b" opacity="0.85" />
            <ellipse cx="12" cy="12" rx="4" ry="2.8" fill="#18181b" opacity="0.9" />
          </pattern>

          {/* 3D Drop Shadow */}
          <filter id="anaconda3DShadow" x="-30%" y="-30%" width="160%" height="160%">
            <feDropShadow dx="3" dy="8" stdDeviation="6" floodColor="#000000" floodOpacity="0.9" />
          </filter>
        </defs>

        {/* BACK COILS (Wrapping behind the tree trunk log) */}
        <g className="opacity-50" filter="url(#anaconda3DShadow)">
          {coils.map((i) => {
            const startX = i * 250 - 30;
            return (
              <motion.path
                key={`back-ana-${i}`}
                d={`M ${startX + 180},195 C ${startX + 215},215 ${startX + 245},-15 ${startX + 270},5`}
                stroke="url(#anacondaSkinCylinder)"
                strokeWidth="24"
                strokeLinecap="round"
                animate={{
                  strokeDashoffset: [-20, 20],
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

        {/* FRONT COILS (Wrapping OVER the front face of the tree trunk log) */}
        <g filter="url(#anaconda3DShadow)">
          {coils.map((i) => {
            const startX = i * 250 - 30;
            return (
              <g key={`front-ana-group-${i}`}>
                {/* Cast Shadow under coil onto tree trunk */}
                <path
                  d={`M ${startX + 30},5 C ${startX + 65},-25 ${startX + 130},220 ${startX + 180},195`}
                  stroke="#000000"
                  strokeWidth="34"
                  strokeLinecap="round"
                  opacity="0.75"
                />

                {/* Main Anaconda Coiled Body */}
                <motion.path
                  d={`M ${startX + 30},5 C ${startX + 65},-25 ${startX + 130},220 ${startX + 180},195`}
                  stroke="url(#anacondaSkinCylinder)"
                  strokeWidth="26"
                  strokeLinecap="round"
                  animate={{
                    strokeWidth: [25, 29, 25],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: i * 0.3,
                  }}
                />

                {/* Anaconda Dark Blotches Overlay */}
                <path
                  d={`M ${startX + 30},5 C ${startX + 65},-25 ${startX + 130},220 ${startX + 180},195`}
                  stroke="url(#anacondaBlotches)"
                  strokeWidth="24"
                  strokeLinecap="round"
                  opacity="0.9"
                />

                {/* Ventral Scales Accent Stripe */}
                <path
                  d={`M ${startX + 30},5 C ${startX + 65},-25 ${startX + 130},220 ${startX + 180},195`}
                  stroke="#eab308"
                  strokeWidth="4"
                  strokeDasharray="14 20"
                  strokeLinecap="round"
                  opacity="0.8"
                />

                {/* Specular Wet Scale Light Reflection */}
                <path
                  d={`M ${startX + 30},5 C ${startX + 65},-25 ${startX + 130},220 ${startX + 180},195`}
                  stroke="#ffffff"
                  strokeWidth="2"
                  strokeLinecap="round"
                  opacity="0.4"
                />
              </g>
            );
          })}
        </g>
      </svg>

      {/* ========================================================================= */}
      {/* 2. THE ONE SINGLE REALISTIC ANACONDA SNAKE (DYNAMIC PEEKING & PHYSICS)    */}
      {/* Moving randomly & realistically: Peeking UP, hanging DOWN, left, right     */}
      {/* ========================================================================= */}
      <motion.div
        className="absolute z-50 w-36 sm:w-48 md:w-60 h-auto pointer-events-none"
        initial={{ left: "5%", top: "-50px", scaleX: 1 }}
        animate={{
          // Horizontal slithering across the tree trunk log (left, middle, right, and back)
          left: ["5%", "45%", "85%", "70%", "30%", "5%"],

          // Vertical organic peeking: moves UP above top border, drops DOWN hanging below bottom border under gravity
          top: ["-55px", "30px", "-65px", "45px", "-70px", "-55px"],

          // Directional turnaround physics (scaleX flips so single snake head always faces the movement direction)
          scaleX: [1, 1, 1, -1, -1, 1],

          // Natural organic rotation tilt while slithering and peeking
          rotate: [-4, 6, -5, 7, -6, -4],
        }}
        transition={{
          duration: 26,
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
