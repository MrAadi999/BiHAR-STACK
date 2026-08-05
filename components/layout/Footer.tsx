"use client";

import React, { useState } from "react";
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
                  Next.js Web Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  Mobile Apps
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-black transition-colors">
                  AI Chatbots
                </a>
              </li>
            </ul>
          </div>

          {/* Column 3: Company */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black mb-4">
              Company
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <li>
                <a href="#why-us" className="hover:text-black transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#portfolio" className="hover:text-black transition-colors">
                  Case Studies
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-black transition-colors">
                  6-Step Process
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

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-bold uppercase tracking-widest text-neutral-700 text-center sm:text-left">
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
