"use client";

import { useEffect, useState } from "react";

export default function TheaterCurtain() {
  const [isOpen, setIsOpen] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    // 1. Wait for processing loading screen to finish (1.4s), then immediately open curtain
    const openTimer = setTimeout(() => {
      setIsOpen(true);
    }, 1400);

    // 2. Hide component completely after curtain animation finishes (1.4s + 3.8s)
    const doneTimer = setTimeout(() => {
      setIsDone(true);
    }, 5200);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(doneTimer);
    };
  }, []);

  if (isDone) return null;

  return (
    <div id="theater-stage" className={isOpen ? "open" : ""}>
      {/* Spotlight Effect behind Curtain */}
      <div className="stage-spotlight"></div>

      {/* Gold Ornate Arch at Top */}
      <div className="top-frame">
        <div className="gold-arch">
          <div className="gold-arch-ornament"></div>
        </div>
        {/* Draped Velvet Valance SVG with Tassels */}
        <svg className="valance-svg" viewBox="0 0 1200 140" preserveAspectRatio="none">
          <defs>
            <linearGradient id="valanceGrad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#8b0000"/>
              <stop offset="70%" stopColor="#4a0000"/>
              <stop offset="100%" stopColor="#2b0000"/>
            </linearGradient>
          </defs>
          {/* Swag Drapes */}
          <path d="M0,0 Q150,110 300,0 Q450,110 600,0 Q750,110 900,0 Q1050,110 1200,0 L1200,0 L0,0 Z" fill="url(#valanceGrad)" stroke="#ffd700" strokeWidth="3"/>
          <path d="M0,15 Q150,125 300,15 Q450,125 600,15 Q750,125 900,15 Q1050,125 1200,15" fill="none" stroke="#ffd700" strokeWidth="2" strokeDasharray="4,4"/>
        </svg>
      </div>

      {/* Left & Right Curtains */}
      <div className="curtain-container">
        <div className="curtain curtain-left"></div>
        <div className="curtain curtain-right"></div>
      </div>

      {/* Audience Silhouette */}
      <div className="audience-silhouette"></div>
    </div>
  );
}
