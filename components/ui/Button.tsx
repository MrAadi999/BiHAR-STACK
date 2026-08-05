"use client";

import React from "react";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?: "primary" | "secondary" | "glass" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  icon?: React.ReactNode;
}

export default function Button({
  variant = "primary",
  size = "md",
  children,
  icon,
  className,
  ...props
}: ButtonProps) {
  const baseStyles =
    "inline-flex items-center justify-center font-bold tracking-widest uppercase transition-all duration-300 focus:outline-none cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed";

  const sizeStyles = {
    sm: "px-5 py-2.5 text-xs gap-1.5",
    md: "px-7 py-3.5 text-xs gap-2",
    lg: "px-9 py-4 text-xs gap-2.5",
  };

  const variantStyles = {
    primary:
      "bg-black text-white hover:bg-neutral-800 shadow-md border border-black",
    secondary:
      "bg-neutral-200 text-black hover:bg-neutral-300 border border-neutral-300",
    glass:
      "bg-white text-black border border-black hover:bg-black hover:text-white shadow-sm",
    outline:
      "bg-transparent text-black border border-black hover:bg-black hover:text-white",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, sizeStyles[size], variantStyles[variant], className)}
      {...props}
    >
      {children}
      {icon && <span className="transition-transform group-hover:translate-x-1">{icon}</span>}
    </motion.button>
  );
}
