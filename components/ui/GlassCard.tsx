"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: React.ReactNode;
  className?: string;
  glow?: boolean;
  hoverEffect?: boolean;
  onClick?: () => void;
}

export default function GlassCard({
  children,
  className,
  glow = false,
  hoverEffect = true,
  onClick,
}: GlassCardProps) {
  return (
    <motion.div
      onClick={onClick}
      whileHover={hoverEffect ? { y: -4, transition: { duration: 0.2 } } : undefined}
      className={cn(
        "relative bg-white border border-neutral-300 p-6 shadow-sm transition-all duration-300 overflow-hidden group",
        hoverEffect && "hover:border-black hover:shadow-md",
        className
      )}
    >
      {children}
    </motion.div>
  );
}
