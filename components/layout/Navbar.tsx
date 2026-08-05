"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, ArrowRight, Layers } from "lucide-react";

const navLinks = [
  { name: "Services", href: "#services" },
  { name: "Why Us", href: "#why-us" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Process", href: "#process" },
  { name: "Industries", href: "#industries" },
  { name: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#f0f0f0]/95 backdrop-blur-md border-b border-neutral-300 py-4 shadow-sm"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 flex items-center justify-between">
        
        {/* Left Side: Logo Icon + BIHARSTACK Text */}
        <a href="#" className="flex items-center gap-3 group shrink-0">
          <div className="w-9 h-9 bg-black flex items-center justify-center p-1.5 group-hover:scale-105 transition-transform duration-300">
            <Layers className="w-5 h-5 text-white" />
          </div>
          <span className="font-display text-2xl font-black tracking-widest uppercase text-black">
            BIHARSTACK
          </span>
        </a>

        {/* Right Shifted Container: Navigation Links + Start Project CTA */}
        <div className="hidden lg:flex items-center justify-end space-x-10 ml-auto pl-8">
          <nav className="flex items-center space-x-8 text-[13px] font-black tracking-widest uppercase text-black">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-neutral-500 transition-colors font-black"
              >
                {link.name}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="bg-black text-white text-xs font-black tracking-widest uppercase px-6 py-3 hover:bg-neutral-800 transition-colors flex items-center gap-2 border-2 border-black shadow-sm shrink-0"
          >
            <span>Start Project</span>
            <ArrowRight className="w-4 h-4 text-white" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="lg:hidden flex items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 border border-black text-black"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Slide-Out Drawer */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-[#f0f0f0] border-b border-black px-6 py-6"
          >
            <div className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-xs font-bold uppercase tracking-widest text-black hover:text-neutral-500 py-2 border-b border-neutral-300"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="#contact"
                  onClick={() => setMobileMenuOpen(false)}
                  className="block text-center bg-black text-white text-xs font-bold uppercase tracking-widest py-3 hover:bg-neutral-800 transition-colors"
                >
                  Start Your Project
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
