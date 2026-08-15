"use client";

import React from "react";

// 1. Social Media Marketing Doodle Art (Exact vibe as Screenshot 1)
export function SocialMediaIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] h-auto drop-shadow-sm select-none">
      {/* Central Social Media Bubble */}
      <g stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Text Badge */}
        <path d="M120 180 C120 160, 280 160, 280 180 C280 200, 200 210, 180 220 L160 230 L165 215 C130 215, 120 200, 120 180 Z" fill="#ffffff" strokeWidth="3" />
        <text x="200" y="185" textAnchor="middle" fill="#000000" fontFamily="Space Grotesk, sans-serif" fontWeight="900" fontSize="22" letterSpacing="-0.5">Social</text>
        <text x="200" y="206" textAnchor="middle" fill="#000000" fontFamily="Space Grotesk, sans-serif" fontWeight="900" fontSize="20" letterSpacing="-0.5">Media</text>
        
        {/* Click Pointer (Top Left) */}
        <path d="M70 60 L95 110 L80 110 L95 135 L80 142 L65 117 L50 125 Z" fill="#ffffff" strokeWidth="2.5" />
        <path d="M40 70 L25 60 M40 90 L20 90 M48 115 L30 125" />
        <text x="65" y="155" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="13">CLICK</text>

        {/* Mailbox / Envelope (Top Middle) */}
        <rect x="160" y="30" width="75" height="50" rx="8" fill="#ffffff" strokeWidth="2.5" />
        <path d="M160 30 L197 60 L235 30" />
        <path d="M197 80 L197 105 M180 105 L215 105" />
        <text x="197" y="60" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="14">MAIL</text>

        {/* Cloud & Arrow (Top Right) */}
        <path d="M290 60 C280 60, 275 50, 285 40 C295 30, 320 30, 330 40 C340 35, 360 45, 355 60 C365 70, 350 85, 335 80 C325 85, 295 85, 290 60 Z" fill="#ffffff" />
        <text x="320" y="62" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11">CLOUD</text>
        <path d="M340 85 L320 115 M320 115 L325 102 M320 115 L335 112" />

        {/* Chat Bubble (Mid Left) */}
        <path d="M40 160 L100 160 L100 190 L65 190 L50 205 L55 190 L40 190 Z" fill="#ffffff" strokeWidth="2.5" />
        <text x="70" y="180" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="13">CHAT</text>

        {/* Instagram Camera Icon */}
        <rect x="290" y="125" width="38" height="38" rx="10" fill="#ffffff" strokeWidth="2.5" />
        <circle cx="309" cy="144" r="8" strokeWidth="2" />
        <circle cx="319" cy="134" r="2.5" fill="#000000" />

        {/* Like Heart / Thumbs */}
        <path d="M335 170 L350 155 C360 145, 375 160, 365 175 L350 190 L335 175 C325 160, 340 145, 350 155 Z" fill="#ffffff" />
        <text x="350" y="208" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="11">LIKE</text>

        {/* Bird / Follow Me */}
        <circle cx="80" cy="245" r="22" fill="#ffffff" strokeWidth="2.5" />
        <text x="80" y="243" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="9">FOLLOW</text>
        <text x="80" y="254" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="9">ME</text>

        {/* Envelope Message (Bottom Right) */}
        <rect x="270" y="220" width="60" height="40" rx="6" fill="#ffffff" strokeWidth="2.5" transform="rotate(-10 300 240)" />
        <path d="M265 225 L298 245 L328 215" />

        {/* Hello Speech Bubble */}
        <path d="M230 290 C230 270, 300 270, 300 290 C300 305, 270 315, 255 315 L240 325 L245 315 C235 310, 230 300, 230 290 Z" fill="#ffffff" strokeWidth="2.5" />
        <text x="265" y="296" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="14">HELLO</text>

        {/* Map Pin (Bottom Left) */}
        <path d="M70 290 C55 290, 45 305, 45 320 C45 340, 70 355, 70 355 C70 355, 95 340, 95 320 C95 305, 85 290, 70 290 Z" fill="#ffffff" strokeWidth="2.5" />
        <circle cx="70" cy="315" r="6" fill="#000000" />
        <text x="70" y="358" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">MAP</text>

        {/* Connecting Arrows */}
        <path d="M125 100 Q150 75 160 70 M250 80 Q270 95 285 115 M325 190 Q320 205 310 215 M110 230 Q130 240 145 235" strokeDasharray="3 3" />
      </g>
    </svg>
  );
}

// 2. Digital Marketing Rocket & Gears (Exact vibe as Screenshot 2)
export function DigitalMarketingIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] h-auto drop-shadow-sm select-none">
      <g stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Background Gears */}
        <circle cx="280" cy="80" r="35" strokeWidth="2.5" strokeDasharray="10 6" fill="#ffffff" />
        <circle cx="280" cy="80" r="14" fill="#ffffff" />

        <circle cx="340" cy="130" r="25" strokeWidth="2.5" strokeDasharray="8 5" fill="#ffffff" />
        <circle cx="340" cy="130" r="10" fill="#ffffff" />

        {/* Big Dashboard Screen */}
        <rect x="140" y="90" width="220" height="150" rx="14" fill="#ffffff" strokeWidth="3" />
        <path d="M140 120 L360 120" />
        <circle cx="160" cy="105" r="4" fill="#000000" />
        <circle cx="175" cy="105" r="4" fill="#000000" />
        <circle cx="190" cy="105" r="4" fill="#000000" />

        {/* Paper Plane Flying */}
        <path d="M200 150 L250 135 L225 170 L215 155 Z" fill="#ffffff" />
        <path d="M165 175 Q185 160 200 150" strokeDasharray="4 4" />

        {/* Rocket Launching */}
        <path d="M280 200 Q280 145 320 130 Q340 165 330 200 Z" fill="#ffffff" strokeWidth="2.5" />
        <circle cx="310" cy="165" r="6" fill="#000000" />
        <path d="M280 200 L268 215 L285 208 M330 200 L342 215 L325 208" />
        {/* Flames */}
        <path d="M295 210 Q305 235 305 240 Q315 235 315 210" fill="#000000" />

        {/* Growth Bar Charts */}
        <rect x="230" y="190" width="12" height="30" fill="#000000" />
        <rect x="248" y="175" width="12" height="45" fill="#000000" />
        <rect x="266" y="160" width="12" height="60" fill="#000000" />

        {/* Character Looking at Dashboard (Left Side) */}
        {/* Head */}
        <circle cx="110" cy="120" r="28" fill="#ffffff" strokeWidth="3" />
        {/* Hair */}
        <path d="M85 120 C85 95, 125 90, 135 110 C130 115, 115 110, 110 118" fill="#000000" />
        {/* Ear */}
        <path d="M115 125 C118 120, 122 125, 118 130" />
        {/* Body & Back */}
        <path d="M85 155 C70 175, 60 220, 60 290 L160 290 C160 240, 155 180, 135 155 Z" fill="#ffffff" strokeWidth="3" />
        {/* Arm reaching out */}
        <path d="M125 175 C145 170, 175 160, 195 180 C185 190, 165 195, 140 195" fill="#ffffff" strokeWidth="2.5" />

        {/* Laptop in Foreground */}
        <path d="M170 240 L240 240 L255 285 L155 285 Z" fill="#ffffff" strokeWidth="2.5" />
        <rect x="175" y="210" width="60" height="40" rx="4" fill="#ffffff" strokeWidth="2" />
        {/* Pie chart on laptop */}
        <circle cx="205" cy="230" r="12" strokeWidth="1.5" />
        <path d="M205 230 L205 218 M205 230 L215 235" />

        {/* Floating Stars & Sparks */}
        <path d="M350 230 L355 240 L365 245 L355 250 L350 260 L345 250 L335 245 L345 240 Z" fill="#ffffff" strokeWidth="1.5" />
        <path d="M330 270 L335 280 L330 290 L325 280 Z" fill="#ffffff" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// 3. SEO Magnifying Glass & Nodes (Exact vibe as Screenshot 3)
export function SEOIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] h-auto drop-shadow-sm select-none">
      <g stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Central Magnifying Glass */}
        <circle cx="210" cy="180" r="48" fill="#ffffff" strokeWidth="4" />
        <circle cx="210" cy="180" r="40" fill="#f5f5f5" strokeWidth="1.5" />
        <text x="210" y="188" textAnchor="middle" fill="#000000" fontFamily="Space Grotesk, sans-serif" fontWeight="900" fontSize="24" letterSpacing="-0.5">SEO</text>

        {/* Magnifying Glass Handle */}
        <path d="M242 216 L290 285 C295 292, 305 292, 310 285 L315 280 C322 275, 322 265, 315 260 L268 195" fill="#ffffff" strokeWidth="3.5" />
        <path d="M275 235 L295 265" strokeWidth="2" />

        {/* Branch 1: Analysis (Top Left) */}
        <path d="M175 145 L115 105" strokeWidth="2" />
        <circle cx="110" cy="100" r="24" fill="#ffffff" strokeWidth="2" />
        <rect x="98" y="98" width="6" height="12" fill="#000000" />
        <rect x="108" y="92" width="6" height="18" fill="#000000" />
        <rect x="118" y="86" width="6" height="24" fill="#000000" />
        <text x="110" y="132" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">ANALYSIS</text>

        {/* Branch 2: HTML (Top Middle) */}
        <path d="M210 132 L210 75" strokeWidth="2" />
        <rect x="185" y="38" width="50" height="35" rx="6" fill="#ffffff" strokeWidth="2" />
        <text x="210" y="60" textAnchor="middle" fill="#000000" fontFamily="Space Grotesk, sans-serif" fontWeight="900" fontSize="13">HTML</text>

        {/* Branch 3: Social Media (Top Right) */}
        <path d="M245 145 L300 100" strokeWidth="2" />
        <circle cx="310" cy="90" r="22" fill="#ffffff" strokeWidth="2" />
        <path d="M302 92 C302 85, 318 85, 318 92 C318 100, 302 102, 302 92 Z" fill="#000000" />
        <text x="310" y="122" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">SOCIAL</text>

        {/* Branch 4: Design (Mid Right) */}
        <path d="M258 175 L330 170" strokeWidth="2" />
        <rect x="330" y="152" width="40" height="35" rx="6" fill="#ffffff" strokeWidth="2" />
        <circle cx="342" cy="165" r="3" fill="#000000" />
        <circle cx="355" cy="165" r="3" fill="#000000" />
        <circle cx="348" cy="175" r="3" fill="#000000" />
        <text x="350" y="198" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">DESIGN</text>

        {/* Branch 5: Ranking (Bottom Right) */}
        <path d="M230 225 L280 270" strokeWidth="2" />
        <circle cx="320" cy="270" r="22" fill="#ffffff" strokeWidth="2" />
        {/* Trophy */}
        <path d="M312 260 L328 260 L324 275 L316 275 Z M320 275 L320 282 M312 282 L328 282" strokeWidth="1.5" />
        <text x="320" y="302" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">RANKING</text>

        {/* Branch 6: Keywording (Bottom Left) */}
        <path d="M175 210 L115 270" strokeWidth="2" />
        <circle cx="105" cy="280" r="22" fill="#ffffff" strokeWidth="2" />
        {/* Target */}
        <circle cx="105" cy="280" r="14" strokeWidth="1.5" />
        <circle cx="105" cy="280" r="6" fill="#000000" />
        <text x="105" y="312" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">KEYWORDING</text>

        {/* Branch 7: Content (Mid Left) */}
        <path d="M162 175 L80 180" strokeWidth="2" />
        <rect x="55" y="162" width="35" height="40" rx="4" fill="#ffffff" strokeWidth="2" />
        <path d="M63 175 L80 175 M63 183 L80 183 M63 191 L75 191" strokeWidth="1.5" />
        <text x="72" y="214" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="800" fontSize="10">CONTENT</text>

        {/* Floating Drill / Tool Accent */}
        <path d="M190 20 L210 20 L205 35 L195 35 Z" fill="#E11D48" stroke="#000000" strokeWidth="2" />
      </g>
    </svg>
  );
}

// 4. PPC & Campaign Character Illustration (Exact vibe as Screenshot 4)
export function PPCIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] h-auto drop-shadow-sm select-none">
      <g stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Character Body / Legs */}
        <path d="M165 240 L150 330 C150 340, 130 340, 130 330 L150 240" fill="#ffffff" strokeWidth="3" />
        <path d="M235 240 L250 330 C250 340, 270 340, 270 330 L250 240" fill="#ffffff" strokeWidth="3" />
        {/* Yellow Shadow Oval */}
        <ellipse cx="200" cy="335" rx="80" ry="12" fill="#FACC15" opacity="0.9" stroke="none" />

        {/* Central Dashboard Screen held by Character */}
        <rect x="90" y="110" width="220" height="145" rx="14" fill="#ffffff" strokeWidth="3.5" />
        <path d="M90 135 L310 135" />
        <circle cx="110" cy="122" r="3.5" fill="#000000" />
        <circle cx="122" cy="122" r="3.5" fill="#000000" />
        <circle cx="134" cy="122" r="3.5" fill="#000000" />

        {/* Pie Chart Inside Dashboard */}
        <circle cx="160" cy="185" r="28" fill="#ffffff" strokeWidth="2.5" />
        <path d="M160 185 L160 157 A28 28 0 0 1 188 185 Z" fill="#FACC15" strokeWidth="2" />
        <path d="M160 185 L140 205" strokeWidth="2" />

        {/* Line Graph with Points */}
        <path d="M210 215 L235 190 L260 170 L285 185" strokeWidth="3" />
        <circle cx="210" cy="215" r="5" fill="#ffffff" strokeWidth="2.5" />
        <circle cx="235" cy="190" r="5" fill="#FACC15" strokeWidth="2.5" />
        <circle cx="260" cy="170" r="5" fill="#ffffff" strokeWidth="2.5" />
        <circle cx="285" cy="185" r="5" fill="#FACC15" strokeWidth="2.5" />

        {/* Hand 1: Holding Bar Chart (Top Left) */}
        <path d="M110 110 Q70 60 85 45" fill="none" strokeWidth="4" />
        {/* White cartoon hand */}
        <path d="M75 45 C75 35, 95 30, 110 40 L105 60 L80 60 Z" fill="#ffffff" strokeWidth="2.5" />
        {/* Mini Bar Chart */}
        <rect x="90" y="20" width="8" height="25" fill="#ffffff" strokeWidth="2" />
        <rect x="102" y="10" width="8" height="35" fill="#FACC15" strokeWidth="2" />
        <rect x="114" y="2" width="8" height="43" fill="#ffffff" strokeWidth="2" />

        {/* Hand 2: Holding Magnifying Glass Eye (Top Right) */}
        <path d="M290 110 Q330 60 315 45" fill="none" strokeWidth="4" />
        {/* Hand */}
        <path d="M305 45 C305 35, 325 30, 335 40 L325 60 L300 60 Z" fill="#ffffff" strokeWidth="2.5" />
        {/* Magnifying Glass */}
        <circle cx="325" cy="25" r="16" fill="#ffffff" strokeWidth="2.5" />
        <path d="M315 38 L305 50" strokeWidth="3" />
        {/* Eye inside */}
        <ellipse cx="325" cy="25" rx="10" ry="6" fill="#ffffff" strokeWidth="1.5" />
        <circle cx="325" cy="25" r="4" fill="#000000" />

        {/* Hand 3 & 4 Holding Dashboard Edges */}
        <path d="M90 180 C70 170, 70 200, 90 205" fill="#ffffff" strokeWidth="3" />
        <path d="M310 180 C330 170, 330 200, 310 205" fill="#ffffff" strokeWidth="3" />

        {/* Hand 5: Touching graph node */}
        <path d="M245 160 C235 150, 220 160, 230 175" fill="#ffffff" strokeWidth="2.5" />
      </g>
    </svg>
  );
}

// 5. Branding & Logo Identity Illustration
export function BrandingIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] h-auto drop-shadow-sm select-none">
      <g stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Drawing Compass / Geometry Tool */}
        <path d="M200 40 L160 160 L140 180" strokeWidth="3.5" />
        <path d="M200 40 L240 160 L260 180" strokeWidth="3.5" />
        <circle cx="200" cy="40" r="10" fill="#ffffff" strokeWidth="3" />
        <path d="M175 100 L225 100" strokeWidth="2" />

        {/* Golden Ratio Circle Guides */}
        <circle cx="200" cy="210" r="65" strokeDasharray="6 4" strokeWidth="1.5" />
        <circle cx="200" cy="210" r="45" strokeDasharray="4 3" strokeWidth="1.5" />
        <circle cx="200" cy="210" r="25" strokeWidth="2" />

        {/* Central Monogram Diamond */}
        <path d="M200 170 L235 210 L200 250 L165 210 Z" fill="#ffffff" strokeWidth="3" />
        <text x="200" y="217" textAnchor="middle" fill="#000000" fontFamily="Space Grotesk, sans-serif" fontWeight="900" fontSize="20">B</text>

        {/* Color Palette Swatches (Left) */}
        <rect x="50" y="150" width="30" height="80" rx="6" fill="#ffffff" strokeWidth="2" transform="rotate(-15 65 190)" />
        <rect x="55" y="155" width="20" height="20" fill="#000000" />
        <rect x="55" y="180" width="20" height="20" fill="#FACC15" />
        <rect x="55" y="205" width="20" height="20" fill="#E11D48" />

        {/* Typography Pencil (Right) */}
        <path d="M320 140 L345 165 L295 250 L270 240 Z" fill="#ffffff" strokeWidth="2" />
        <path d="M270 240 L260 260 L280 255 Z" fill="#000000" />
        <text x="320" y="275" fill="#000000" fontFamily="Space Grotesk, sans-serif" fontWeight="900" fontSize="16">Aa</text>

        {/* Sparkles */}
        <path d="M120 70 L125 80 L135 85 L125 90 L120 100 L115 90 L105 85 L115 80 Z" fill="#ffffff" strokeWidth="1.5" />
        <path d="M280 70 L285 80 L295 85 L285 90 L280 100 L275 90 L265 85 L275 80 Z" fill="#ffffff" strokeWidth="1.5" />
      </g>
    </svg>
  );
}

// 6. Web & App Code Technology Illustration
export function WebTechIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] h-auto drop-shadow-sm select-none">
      <g stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Laptop Screen */}
        <rect x="90" y="80" width="220" height="140" rx="10" fill="#ffffff" strokeWidth="3" />
        <path d="M90 105 L310 105" />
        <circle cx="105" cy="92" r="3" fill="#000000" />
        <circle cx="115" cy="92" r="3" fill="#000000" />
        <circle cx="125" cy="92" r="3" fill="#000000" />

        {/* Code Symbols on Screen */}
        <text x="130" y="135" fill="#000000" fontFamily="monospace" fontWeight="900" fontSize="18">&lt;Next.js 14 /&gt;</text>
        <text x="130" y="160" fill="#E11D48" fontFamily="monospace" fontWeight="700" fontSize="14">const fast = true;</text>
        <text x="130" y="185" fill="#000000" fontFamily="monospace" fontWeight="700" fontSize="14">export default App;</text>

        {/* Laptop Base */}
        <path d="M60 220 L340 220 L320 240 L80 240 Z" fill="#ffffff" strokeWidth="3" />
        <path d="M170 222 L230 222" strokeWidth="2" />

        {/* Mobile Phone (Right Foreground) */}
        <rect x="270" y="160" width="70" height="125" rx="12" fill="#ffffff" strokeWidth="3" />
        <rect x="280" y="175" width="50" height="90" rx="4" fill="#f5f5f5" />
        <circle cx="305" cy="275" r="3.5" fill="#000000" />
        {/* Fast Lightning on Mobile */}
        <path d="M308 195 L298 215 L306 215 L296 235" stroke="#FACC15" strokeWidth="3" />

        {/* Server Stack (Left Background) */}
        <rect x="45" y="120" width="55" height="25" rx="4" fill="#ffffff" strokeWidth="2" />
        <circle cx="58" cy="132" r="2.5" fill="#000000" />
        <rect x="45" y="150" width="55" height="25" rx="4" fill="#ffffff" strokeWidth="2" />
        <circle cx="58" cy="162" r="2.5" fill="#000000" />

        {/* Speed 100 Meter */}
        <circle cx="110" cy="290" r="30" fill="#ffffff" strokeWidth="2.5" />
        <path d="M90 290 A20 20 0 0 1 130 290" strokeWidth="3" />
        <path d="M110 290 L125 280" stroke="#E11D48" strokeWidth="3" />
        <text x="110" y="310" textAnchor="middle" fill="#000000" fontFamily="Space Grotesk, sans-serif" fontWeight="900" fontSize="12">100/100</text>
      </g>
    </svg>
  );
}

// 7. AI & Automation Robot Illustration
export function AIAutomationIllustration() {
  return (
    <svg viewBox="0 0 400 360" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full max-w-[380px] h-auto drop-shadow-sm select-none">
      <g stroke="#000000" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
        {/* Friendly AI Robot Head */}
        <rect x="140" y="90" width="120" height="100" rx="20" fill="#ffffff" strokeWidth="3.5" />
        {/* Antenna */}
        <path d="M200 90 L200 55" strokeWidth="3" />
        <circle cx="200" cy="50" r="10" fill="#FACC15" strokeWidth="2.5" />

        {/* Robot Eyes (Glowing LED) */}
        <circle cx="175" cy="135" r="14" fill="#000000" />
        <circle cx="178" cy="132" r="4" fill="#ffffff" />
        <circle cx="225" cy="135" r="14" fill="#000000" />
        <circle cx="228" cy="132" r="4" fill="#ffffff" />

        {/* Robot Smile */}
        <path d="M180 165 Q200 178 220 165" strokeWidth="3" />
        {/* Ears */}
        <rect x="128" y="125" width="12" height="30" rx="4" fill="#ffffff" strokeWidth="2.5" />
        <rect x="260" y="125" width="12" height="30" rx="4" fill="#ffffff" strokeWidth="2.5" />

        {/* Robot Body */}
        <rect x="150" y="200" width="100" height="90" rx="14" fill="#ffffff" strokeWidth="3" />
        {/* Chest screen with workflow nodes */}
        <rect x="165" y="215" width="70" height="50" rx="6" fill="#f5f5f5" strokeWidth="1.5" />
        <circle cx="180" cy="235" r="4" fill="#000000" />
        <circle cx="220" cy="235" r="4" fill="#000000" />
        <circle cx="200" cy="255" r="4" fill="#FACC15" strokeWidth="1.5" />
        <path d="M184 235 L216 235 M182 239 L198 252 M218 239 L202 252" strokeWidth="1.5" />

        {/* Arms holding gears & chat bubbles */}
        <path d="M150 220 Q100 210 90 170" strokeWidth="3" />
        {/* WhatsApp/Chat Bubble Left */}
        <path d="M60 140 C60 120, 110 120, 110 140 C110 155, 90 160, 80 160 L70 170 L75 160 Z" fill="#ffffff" strokeWidth="2.5" />
        <text x="85" y="145" textAnchor="middle" fill="#000000" fontFamily="Inter, sans-serif" fontWeight="900" fontSize="12">AI 24/7</text>

        <path d="M250 220 Q300 210 310 170" strokeWidth="3" />
        {/* Gear in Right Hand */}
        <circle cx="320" cy="155" r="22" strokeDasharray="8 5" fill="#ffffff" strokeWidth="2.5" />
        <circle cx="320" cy="155" r="8" fill="#FACC15" />

        {/* Base / Wheels */}
        <path d="M170 290 L160 325 L240 325 L230 290 Z" fill="#ffffff" strokeWidth="2.5" />
        <circle cx="175" cy="325" r="10" fill="#000000" />
        <circle cx="225" cy="325" r="10" fill="#000000" />
      </g>
    </svg>
  );
}
