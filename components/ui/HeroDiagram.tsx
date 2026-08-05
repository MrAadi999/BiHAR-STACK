"use client";

import { motion } from "framer-motion";
import {
  Search,
  ShoppingCart,
  LineChart,
  Target,
  Layout,
  Lightbulb,
  Smartphone,
  Megaphone,
  HelpCircle,
  ThumbsUp,
  Heart,
  Mail,
  Play,
} from "lucide-react";

const nodes = [
  {
    id: "seo",
    title: "SEO & SEARCH",
    icon: <Search className="w-5 h-5 text-black" />,
    pos: "top-2 left-12",
  },
  {
    id: "ecommerce",
    title: "E-COMMERCE",
    icon: <ShoppingCart className="w-5 h-5 text-black" />,
    pos: "-top-6 left-1/2 -translate-x-1/2",
  },
  {
    id: "analytics",
    title: "DATA ANALYTICS",
    icon: <LineChart className="w-5 h-5 text-black" />,
    pos: "top-2 right-12",
  },
  {
    id: "social",
    title: "SOCIAL MEDIA",
    icon: <Target className="w-5 h-5 text-black" />,
    pos: "top-1/3 -right-6",
  },
  {
    id: "website",
    title: "WEBSITE / UX",
    icon: <Layout className="w-5 h-5 text-black" />,
    pos: "bottom-12 right-6",
  },
  {
    id: "strategy",
    title: "STRATEGY HUB",
    icon: <Lightbulb className="w-5 h-5 text-black" />,
    pos: "-bottom-6 left-1/2 -translate-x-1/2",
  },
  {
    id: "advertising",
    title: "ADVERTISING",
    icon: <Smartphone className="w-5 h-5 text-black" />,
    pos: "bottom-12 left-6",
  },
  {
    id: "content",
    title: "CONTENT TECH",
    icon: <Megaphone className="w-5 h-5 text-black" />,
    pos: "top-1/3 -left-6",
  },
];

export default function HeroDiagram() {
  return (
    <div className="relative w-full max-w-lg aspect-square flex items-center justify-center select-none">
      
      {/* Background Orbital Dashed Circle */}
      <svg className="absolute inset-0 w-full h-full pointer-events-none" viewBox="0 0 500 500">
        <motion.circle
          cx="250"
          cy="250"
          r="190"
          fill="none"
          stroke="#000000"
          strokeWidth="1.5"
          strokeDasharray="8 8"
          opacity="0.25"
          animate={{ rotate: 360 }}
          transition={{ duration: 60, ease: "linear", repeat: Infinity }}
          style={{ transformOrigin: "250px 250px" }}
        />
        
        {/* Inner Connecting Vectors */}
        <line x1="250" y1="120" x2="250" y2="380" stroke="#000" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
        <line x1="120" y1="250" x2="380" y2="250" stroke="#000" strokeWidth="1" strokeDasharray="4 4" opacity="0.2" />
      </svg>

      {/* Center Giant Question Mark Hub with Engagement Icons */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
        className="relative flex flex-col items-center justify-center p-8 bg-transparent"
      >
        <div className="relative">
          {/* Hand-sketched Question Mark Icon */}
          <HelpCircle className="w-48 h-48 sm:w-56 sm:h-56 text-black stroke-[1.2] opacity-90 drop-shadow-md" />

          {/* Integrated Engagement Badges inside question mark */}
          <div className="absolute top-10 left-12 p-1.5 bg-white border border-black shadow-xs flex gap-1 items-center">
            <ThumbsUp className="w-3.5 h-3.5 text-black" />
            <Heart className="w-3.5 h-3.5 text-black" />
          </div>

          <div className="absolute top-20 right-10 p-1.5 bg-white border border-black shadow-xs flex gap-1 items-center">
            <Mail className="w-3.5 h-3.5 text-black" />
            <Play className="w-3.5 h-3.5 text-black" />
          </div>
        </div>

        <p className="font-display text-xs font-black tracking-[0.3em] uppercase text-black mt-2 bg-[#f0f0f0] px-3 py-1 border border-black">
          GROWTH FRAMEWORK
        </p>
      </motion.div>

      {/* Surrounding Interactive Node Bubbles */}
      {nodes.map((node, index) => (
        <motion.div
          key={node.id}
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: index * 0.08 }}
          whileHover={{ scale: 1.15 }}
          className={`absolute ${node.pos} flex flex-col items-center group cursor-pointer z-20`}
        >
          <div className="w-12 h-12 rounded-full bg-white border-2 border-black flex items-center justify-center shadow-md group-hover:bg-black group-hover:text-white transition-colors duration-300">
            {node.icon}
          </div>
          <span className="text-[10px] font-extrabold tracking-widest uppercase text-black mt-1 bg-white/80 backdrop-blur-xs px-2 py-0.5 border border-black/30 whitespace-nowrap shadow-2xs">
            {node.title}
          </span>
        </motion.div>
      ))}

    </div>
  );
}
