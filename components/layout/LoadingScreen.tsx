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
          className="fixed inset-0 z-[10005] flex flex-col items-center justify-center bg-[#f0f0f0] text-black"
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col items-center gap-4"
          >
            {/* Standalone Enlarged Logo (No Frame/Box) */}
            <motion.div
              animate={{
                scale: [0.96, 1.04, 0.96],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative w-36 h-36 sm:w-44 sm:h-44 flex items-center justify-center"
            >
              <img
                src="/images/biharstack-brand-logo.png"
                alt="BiharStack Logo"
                className="w-full h-full object-contain select-none drop-shadow-md"
              />
            </motion.div>

            <div className="text-center mt-2">
              <h1 className="font-display text-3xl font-black tracking-widest text-black uppercase">
                BIHAR STACK
              </h1>
              <p className="text-xs text-black font-bold tracking-widest uppercase mt-1">
                Building Bihar. Scaling Businesses.
              </p>
            </div>

            {/* Animated Loading Bar */}
            <div className="w-48 h-1 bg-neutral-300 rounded-full overflow-hidden mt-3">
              <motion.div
                initial={{ x: "-100%" }}
                animate={{ x: "0%" }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="w-full h-full bg-black"
              />
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
