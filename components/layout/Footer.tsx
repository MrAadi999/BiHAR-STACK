"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Linkedin, Instagram, Twitter, Facebook, Send, Heart } from "lucide-react";

export default function Footer() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
    }
  };

  return (
    <footer className="bg-[#e5e5e5] text-black border-t-2 border-black pt-16 pb-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 4 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-4 space-y-4">
            <a href="#" className="font-display text-2xl font-black tracking-widest uppercase text-black">
              BIHARSTACK
            </a>

            {/* Tagline Badge */}
            <div className="inline-block py-1 px-3 bg-white border border-black/30 shadow-xs rounded text-xs font-black uppercase tracking-wider text-[#0A2540]">
              End-to-end digital solutions &ldquo;Build Digital. Grow Faster.&rdquo;
            </div>

            <p className="text-xs font-bold uppercase tracking-wider text-black leading-relaxed">
              &quot;Building Bihar. Scaling Businesses.&quot; <br />
              <span>&quot;Think Digital. Think BiharStack.&quot;</span>
            </p>

            <p className="text-xs text-neutral-700 font-medium leading-relaxed">
              Empowering global enterprises and homegrown startups with next-generation web platforms, performance digital marketing, and autonomous AI automation.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="p-2.5 bg-white border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="p-2.5 bg-white border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Instagram className="w-4 h-4" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter / X"
                className="p-2.5 bg-white border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Twitter className="w-4 h-4" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="p-2.5 bg-white border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Facebook className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Services */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black mb-4">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Digital Marketing
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Brand Identity
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Web & App Dev
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  AI & Workflows
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Local SEO & GMB
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  E-Commerce POS
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Navigation & Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <li>
                <a href="#portfolio" className="hover:text-black transition-colors">
                  Our Work
                </a>
              </li>
              <li>
                <a href="#impact" className="hover:text-black transition-colors">
                  Client Impact
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-black transition-colors">
                  Pricing Plans
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-black transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-black transition-colors">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="https://wa.me/917979067849" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black mb-4">
              STAY INFORMED
            </h4>
            <p className="text-xs font-medium text-neutral-700 leading-relaxed">
              Subscribe to the BiharStack monthly dispatch for tech updates and growth strategies.
            </p>

            {subscribed ? (
              <div className="p-3 bg-black text-white text-xs font-bold uppercase tracking-wider">
                ✓ Subscribed to BiharStack Dispatch
              </div>
            ) : (
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email address..."
                  className="w-full px-3.5 py-2.5 bg-white border border-black text-black text-xs font-medium placeholder-neutral-500 focus:outline-none"
                />
                <button
                  type="submit"
                  aria-label="Subscribe"
                  className="px-4 py-2.5 bg-black text-white hover:bg-neutral-800 text-xs font-bold uppercase tracking-wider shrink-0 flex items-center justify-center"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            )}

            <div className="pt-2 flex items-center gap-4 text-xs font-bold uppercase tracking-wider text-neutral-600">
              <a href="#pricing" className="hover:text-black">
                PRICING
              </a>
              <span>•</span>
              <a href="#" className="hover:text-black">
                PRIVACY
              </a>
              <span>•</span>
              <a href="#" className="hover:text-black">
                TERMS
              </a>
            </div>
          </div>

        </div>

        {/* Tagline Highlight Bar (Above Divider Line) */}
        <div className="pt-3 pb-8 sm:pb-10 text-center">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#0A2540] bg-white/80 border border-black/10 py-2 px-4 rounded-md inline-block shadow-xs">
            End-to-end digital solutions &ldquo;Build Digital. Grow Faster.&rdquo;
          </p>
        </div>

        {/* Divider Line (Shifted down slightly) */}
        <div className="border-b border-neutral-400 w-full mb-1" />

        {/* 3D Character Letter Watermark Logo for 'BIHAR STACK' with Living Character Motions */}
        <div className="pt-8 pb-4 text-center select-none overflow-hidden relative flex items-center justify-center w-full max-w-full">
          <div className="flex items-center justify-center flex-nowrap shrink-0 px-2 max-w-full">
            {/* BIHAR 3D Character Images */}
            <div className="flex items-center shrink-0">
              {/* B Mascot */}
              <motion.img
                src="/images/letters/letter-b.png"
                alt="B"
                animate={{
                  y: [0, -8, 0, -3, 0],
                  rotate: [0, -2.5, 0, 2.5, 0],
                  scaleY: [1, 1.03, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, -8, 8, -5, 5, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* I Mascot */}
              <motion.img
                src="/images/letters/letter-i.png"
                alt="I"
                animate={{
                  y: [0, -10, 0, -4, 0],
                  rotate: [0, 3, 0, -3, 0],
                  scaleY: [1, 1.05, 0.97, 1.03, 1]
                }}
                transition={{
                  duration: 3.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.25
                }}
                whileHover={{
                  scale: 1.18,
                  y: -20,
                  rotate: [0, 9, -9, 6, -6, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                style={{
                  marginLeft: "clamp(-46px, -3.3vw, -14px)",
                  marginRight: "clamp(-40px, -2.9vw, -12px)"
                }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* H Mascot */}
              <motion.img
                src="/images/letters/letter-h.png"
                alt="H"
                animate={{
                  y: [0, -8, 0, -3, 0],
                  rotate: [0, -2, 0, 2, 0],
                  scaleY: [1, 1.03, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 3.4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.5
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, -7, 7, -4, 4, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* A Mascot (Bihar) */}
              <motion.img
                src="/images/letters/letter-a.png"
                alt="A"
                animate={{
                  y: [0, -9, 0, -4, 0],
                  rotate: [0, 2.5, 0, -2.5, 0],
                  scaleY: [1, 1.04, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 3.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 0.75
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, 8, -8, 5, -5, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                style={{
                  marginLeft: "clamp(-31px, -2.2vw, -10px)"
                }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* R Mascot */}
              <motion.img
                src="/images/letters/letter-r.png"
                alt="R"
                animate={{
                  y: [0, -8, 0, -3, 0],
                  rotate: [0, -3, 0, 3, 0],
                  scaleY: [1, 1.03, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 3.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.0
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, -8, 8, -5, 5, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                style={{
                  marginLeft: "clamp(-38px, -2.7vw, -12px)"
                }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />
            </div>

            {/* STACK 3D Character Images (Word gap: -3px) */}
            <div
              className="flex items-center shrink-0"
              style={{
                marginLeft: "clamp(-3px, -0.2vw, -1px)"
              }}
            >
              {/* S Mascot */}
              <motion.img
                src="/images/letters/letter-s.png"
                alt="S"
                animate={{
                  y: [0, -9, 0, -4, 0],
                  rotate: [0, 3, 0, -3, 0],
                  scaleY: [1, 1.04, 0.97, 1.02, 1]
                }}
                transition={{
                  duration: 3.2,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.25
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, 8, -8, 5, -5, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* T Mascot */}
              <motion.img
                src="/images/letters/letter-t.png"
                alt="T"
                animate={{
                  y: [0, -9, 0, -4, 0],
                  rotate: [0, -2.5, 0, 2.5, 0],
                  scaleY: [1, 1.05, 0.97, 1.03, 1]
                }}
                transition={{
                  duration: 2.9,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.45
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, -9, 9, -6, 6, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                style={{
                  marginLeft: "clamp(-18px, -1.3vw, -6px)"
                }}
                className="h-[clamp(35px,9.1vw,138px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* A Mascot (Stack) */}
              <motion.img
                src="/images/letters/letter-stack-a.png"
                alt="A"
                animate={{
                  y: [0, -8, 0, -3, 0],
                  rotate: [0, 2.5, 0, -2.5, 0],
                  scaleY: [1, 1.03, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 3.1,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.7
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, 8, -8, 5, -5, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                style={{
                  marginLeft: "clamp(-8px, -0.6vw, -3px)"
                }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* C Mascot */}
              <motion.img
                src="/images/letters/letter-c.png"
                alt="C"
                animate={{
                  y: [0, -8, 0, -4, 0],
                  rotate: [0, -3.5, 0, 3.5, 0],
                  scaleY: [1, 1.04, 0.97, 1.02, 1]
                }}
                transition={{
                  duration: 3.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 1.95
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, -8, 8, -5, 5, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                style={{
                  marginLeft: "clamp(-39px, -2.8vw, -12px)",
                  marginRight: "clamp(-36px, -2.6vw, -11px)"
                }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />

              {/* K Mascot */}
              <motion.img
                src="/images/letters/letter-k.png"
                alt="K"
                animate={{
                  y: [0, -9, 0, -4, 0],
                  rotate: [0, 3, 0, -3, 0],
                  scaleY: [1, 1.04, 0.98, 1.02, 1]
                }}
                transition={{
                  duration: 3.0,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: 2.2
                }}
                whileHover={{
                  scale: 1.18,
                  y: -18,
                  rotate: [0, 9, -9, 6, -6, 0],
                  transition: { duration: 0.45, ease: "easeOut" }
                }}
                whileTap={{ scale: 0.9, y: 4 }}
                className="h-[clamp(46px,12vw,182px)] object-contain cursor-pointer relative z-10 hover:z-20 transition-transform origin-bottom"
              />
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-4 border-t border-neutral-300 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-neutral-700 text-center sm:text-left">
          <p>© 2026 BiharStack Technologies Pvt. Ltd. All rights reserved.</p>
          <p className="flex items-center gap-1.5 justify-center">
            <span>Crafted with</span>
            <Heart className="w-3.5 h-3.5 fill-black text-black inline" />
            <span>in Bihar, Serving Globally.</span>
          </p>
        </div>

      </div>
    </footer>
  );
}
