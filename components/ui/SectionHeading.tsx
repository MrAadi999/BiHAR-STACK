"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  badge?: string;
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  className?: string;
}

export default function SectionHeading({
  badge,
  title,
  subtitle,
  align = "center",
  className,
}: SectionHeadingProps) {
  const alignmentClasses = {
    left: "text-left items-start",
    center: "text-center items-center mx-auto",
    right: "text-right items-end ml-auto",
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={cn("flex flex-col max-w-3xl mb-16", alignmentClasses[align], className)}
    >
      {badge && (
        <span className="inline-flex items-center gap-2 px-3.5 py-1 text-[11px] font-bold tracking-[0.2em] uppercase bg-black text-white mb-4">
          {badge}
        </span>
      )}
      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-black uppercase leading-tight">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-4 text-sm sm:text-base text-neutral-600 font-medium tracking-wide leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
