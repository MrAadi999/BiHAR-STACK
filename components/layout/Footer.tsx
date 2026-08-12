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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-12 border-b border-neutral-400">
          
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

        {/* Tagline Highlight Bar */}
        <div className="mt-8 pt-4 text-center">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#0A2540] bg-white/80 border border-black/10 py-2 px-4 rounded-md inline-block shadow-xs">
            End-to-end digital solutions &ldquo;Build Digital. Grow Faster.&rdquo;
          </p>
        </div>

        {/* Soft Animated Full-Width Giant Typography Logo Watermark 'BiHAR STACK' */}
        <div className="pt-6 pb-2 text-center select-none overflow-hidden relative">
          <motion.h2
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="font-display text-[13vw] sm:text-[14vw] font-black tracking-tighter leading-none bg-gradient-to-r from-[#0A2540]/30 via-[#1E40AF]/45 to-[#0A2540]/30 bg-clip-text text-transparent opacity-85 hover:opacity-100 transition-all duration-500 pointer-events-none drop-shadow-xs select-none"
          >
            BiHAR STACK
          </motion.h2>
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
