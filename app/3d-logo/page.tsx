"use client";

import React, { useState, useRef } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { ArrowLeft, RotateCw, Sparkles, Box, Eye, Layers, ZoomIn, ZoomOut } from "lucide-react";

export default function ThreeDLogoPage() {
  const [autoRotate, setAutoRotate] = useState(true);
  const [shimmer, setShimmer] = useState(true);
  const [zoom, setZoom] = useState(1);

  // 3D Rotation State
  const rotateX = useMotionValue(10);
  const rotateY = useMotionValue(-15);

  const springConfig = { damping: 20, stiffness: 180, mass: 0.5 };
  const smoothRotateX = useSpring(rotateX, springConfig);
  const smoothRotateY = useSpring(rotateY, springConfig);

  const isDragging = useRef(false);
  const prevMousePos = useRef({ x: 0, y: 0 });

  const handleMouseDown = (e: React.MouseEvent) => {
    isDragging.current = true;
    prevMousePos.current = { x: e.clientX, y: e.clientY };
    setAutoRotate(false);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.clientX - prevMousePos.current.x;
    const deltaY = e.clientY - prevMousePos.current.y;

    rotateY.set(rotateY.get() + deltaX * 0.4);
    rotateX.set(Math.max(-75, Math.min(75, rotateX.get() - deltaY * 0.4)));

    prevMousePos.current = { x: e.clientX, y: e.clientY };
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  // Touch Support for Mobile / Trackpad
  const handleTouchStart = (e: React.TouchEvent) => {
    isDragging.current = true;
    prevMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
    setAutoRotate(false);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;
    const deltaX = e.touches[0].clientX - prevMousePos.current.x;
    const deltaY = e.touches[0].clientY - prevMousePos.current.y;

    rotateY.set(rotateY.get() + deltaX * 0.4);
    rotateX.set(Math.max(-75, Math.min(75, rotateX.get() - deltaY * 0.4)));

    prevMousePos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
  };

  const handleTouchEnd = () => {
    isDragging.current = false;
  };

  const setView = (x: number, y: number) => {
    setAutoRotate(false);
    rotateX.set(x);
    rotateY.set(y);
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      className="relative w-screen h-screen bg-gradient-to-b from-[#180907] via-[#0d0403] to-[#050101] overflow-hidden select-none flex flex-col items-center justify-center cursor-grab active:cursor-grabbing"
    >
      {/* Ambient 3D Gold Glow Lights */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d4af37]/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/3 w-[400px] h-[400px] bg-[#ff8800]/10 rounded-full blur-[120px] pointer-events-none" />

      {/* Top Header */}
      <div className="absolute top-6 left-6 z-30 flex flex-col gap-2 pointer-events-auto">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-3.5 py-2 bg-black/60 hover:bg-black/90 border border-white/15 text-white/90 hover:text-white rounded-lg text-xs font-bold backdrop-blur-md transition-all w-fit mb-2 shadow-lg"
        >
          <ArrowLeft className="w-4 h-4" /> Back to Home
        </Link>
        <div className="inline-block px-3 py-1 bg-[#d4af37]/20 border border-[#d4af37] text-[#ffd700] rounded text-[11px] font-black uppercase tracking-widest w-fit">
          3D Gold Model Showcase
        </div>
        <h1 className="text-2xl sm:text-3xl font-black tracking-wide text-white drop-shadow-lg">
          BIHARSTACK 3D Model
        </h1>
        <p className="text-xs text-amber-200/80 font-medium">
          Exact 1:1 Original Artwork • True Multi-Layer 3D Depth • 360° Real-time Orbit
        </p>
      </div>

      {/* Main 3D Stage with Perspective */}
      <div
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
        className="w-full h-full flex items-center justify-center relative"
        style={{ perspective: "1200px" }}
      >
        <motion.div
          animate={
            autoRotate
              ? {
                  rotateY: [ -25, 25, -25 ],
                  rotateX: [ 8, -6, 8 ],
                }
              : {}
          }
          transition={
            autoRotate
              ? {
                  duration: 8,
                  repeat: Infinity,
                  ease: "easeInOut",
                }
              : {}
          }
          style={{
            rotateX: autoRotate ? undefined : smoothRotateX,
            rotateY: autoRotate ? undefined : smoothRotateY,
            scale: zoom,
            transformStyle: "preserve-3d",
          }}
          className="relative w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] flex items-center justify-center"
        >
          {/* 3D Pedestal Shadow Base */}
          <div
            style={{
              transform: "translateZ(-80px) rotateX(90deg)",
            }}
            className="absolute bottom-[-100px] w-[320px] h-[320px] rounded-full bg-black/80 blur-xl border border-[#d4af37]/20 shadow-[0_0_80px_rgba(212,175,55,0.2)]"
          />

          {/* 3D Extrusion Slabs (12 Physical Z-Layers for Authentic Solid Gold Thickness) */}
          {[ -40, -35, -30, -25, -20, -16, -12, -8, -4, 0, 4, 8, 12, 16, 20, 24 ].map((zOffset, i) => {
            const isFront = zOffset === 24;
            const darkness = Math.max(0.4, (i + 1) / 16);

            return (
              <div
                key={zOffset}
                style={{
                  transform: `translateZ(${zOffset}px)`,
                  filter: isFront
                    ? shimmer
                      ? "drop-shadow(0 0 25px rgba(255,215,0,0.6)) brightness(1.2)"
                      : "drop-shadow(0 0 15px rgba(212,175,55,0.4))"
                    : `brightness(${darkness}) sepia(0.4) saturate(2)`,
                }}
                className="absolute inset-0 flex items-center justify-center pointer-events-none transition-filter duration-300"
              >
                <img
                  src="/images/biharstack-logo-gold-transparent.png"
                  alt="BiharStack 3D Logo"
                  className="w-full h-full object-contain select-none drop-shadow-[0_0_20px_rgba(212,175,55,0.4)]"
                  draggable={false}
                />
              </div>
            );
          })}

          {/* 3D Dynamic Specular Light Glint */}
          {shimmer && (
            <motion.div
              animate={{
                x: [-180, 180, -180],
                opacity: [0.1, 0.7, 0.1],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              style={{
                transform: "translateZ(30px)",
              }}
              className="absolute w-[80px] h-[360px] bg-gradient-to-r from-transparent via-white/40 to-transparent blur-md rotate-45 pointer-events-none"
            />
          )}
        </motion.div>
      </div>

      {/* Floating Instruction */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-20 px-5 py-2 bg-black/70 border border-[#d4af37]/40 backdrop-blur-md rounded-full text-xs text-[#ffd700] font-bold tracking-wider pointer-events-none text-center shadow-2xl">
        🖱️ Mouse drag karke 360° ghumayein (Har angle se 3D depth dekhein)
      </div>

      {/* Bottom Control Bar */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 sm:gap-3 bg-black/85 border border-[#d4af37]/40 px-5 py-3 rounded-full backdrop-blur-xl shadow-2xl overflow-x-auto max-w-[95vw] pointer-events-auto">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
            autoRotate
              ? "bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.7)]"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <RotateCw className="w-3.5 h-3.5" />
          {autoRotate ? "Auto Rotate: ON" : "Auto Rotate: OFF"}
        </button>

        <button
          onClick={() => setView(0, 0)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold transition-all shrink-0"
        >
          <Eye className="w-3.5 h-3.5 text-[#ffd700]" />
          Front
        </button>

        <button
          onClick={() => setView(18, -35)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold transition-all shrink-0"
        >
          <Box className="w-3.5 h-3.5 text-[#ffd700]" />
          3D Isometric
        </button>

        <button
          onClick={() => setView(5, -65)}
          className="flex items-center gap-1.5 px-3.5 py-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full text-xs font-bold transition-all shrink-0"
        >
          <Layers className="w-3.5 h-3.5 text-[#ffd700]" />
          Side 3D Depth
        </button>

        <button
          onClick={() => setShimmer(!shimmer)}
          className={`flex items-center gap-1.5 px-3.5 py-1.5 rounded-full text-xs font-bold transition-all shrink-0 ${
            shimmer
              ? "bg-[#d4af37] text-black shadow-[0_0_15px_rgba(212,175,55,0.7)]"
              : "bg-white/10 text-white hover:bg-white/20"
          }`}
        >
          <Sparkles className="w-3.5 h-3.5" />
          Gold Shimmer
        </button>

        <div className="h-4 w-[1px] bg-white/20 mx-1 shrink-0" />

        <button
          onClick={() => setZoom((z) => Math.min(1.6, z + 0.15))}
          aria-label="Zoom In"
          className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all shrink-0"
        >
          <ZoomIn className="w-4 h-4" />
        </button>

        <button
          onClick={() => setZoom((z) => Math.max(0.6, z - 0.15))}
          aria-label="Zoom Out"
          className="p-1.5 bg-white/10 hover:bg-white/20 text-white rounded-full transition-all shrink-0"
        >
          <ZoomOut className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}
