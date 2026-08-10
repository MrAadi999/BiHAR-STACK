"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Layers } from "lucide-react";

export default function LoadingScreen() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1400);

    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.6, ease: "easeInOut" } }}
          className="fixed inset-0 z-[10005] flex flex-col items-center justify-center bg-navy-950 text-white"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            <div className="relative flex items-center justify-center w-20 h-20 rounded-2xl bg-gradient-to-tr from-electric-600 to-glow-cyan p-0.5 shadow-blue-glow">
              <div className="w-full h-full bg-navy-950 rounded-[14px] flex items-center justify-center">
                <Layers className="w-10 h-10 text-electric-500 animate-pulse" />
              </div>
            </div>

            <div className="text-center mt-2">
              <h1 className="font-display text-3xl font-extrabold tracking-tight">
                Bihar<span className="text-electric-500">Stack</span>
              </h1>
              <p className="text-xs text-slate-400 tracking-widest uppercase mt-1">
                Building Bihar. Scaling Businesses.
              </p>
            </div>

            {/* Animated Loading Bar */}
            <div className="w-48 h-1 bg-slate-800 rounded-full overflow-hidden mt-4">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full bg-gradient-to-r from-electric-600 via-glow-sky to-glow-cyan"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
