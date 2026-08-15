"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { Linkedin, Instagram, Twitter, Facebook, Youtube, Send, Heart } from "lucide-react";

interface MascotLetterProps {
  src: string;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  index?: number;
  isT?: boolean;
  mouseX: MotionValue<number>;
  mouseY: MotionValue<number>;
}

function MascotLetter({
  src,
  alt,
  className = "",
  style = {},
  index = 0,
  isT = false,
  mouseX,
  mouseY,
}: MascotLetterProps) {
  // 3D Look-at tracking: Characters turn their face and eyes toward the mouse
  const rotateY = useTransform(mouseX, [-1, 1], [-24, 24]);
  const rotateX = useTransform(mouseY, [-1, 1], [18, -18]);
  const xParallax = useTransform(mouseX, [-1, 1], [-10, 10]);
  const yParallax = useTransform(mouseY, [-1, 1], [-8, 8]);

  return (
    <div
      className={`relative inline-flex items-center justify-center shrink-0 origin-bottom select-none cursor-pointer z-10 hover:z-30 ${className}`}
      style={{
        ...style,
        perspective: "800px",
      }}
    >
      {/* 3D Head/Eyes Mouse Direction Tracking Layer + Instant Fast Scroll Entrance from Bottom */}
      <motion.div
        style={{
          rotateX,
          rotateY,
          x: xParallax,
          y: yParallax,
          transformStyle: "preserve-3d",
        }}
        initial={{ y: 90, opacity: 0, scale: 0.88 }}
        whileInView={{ y: 0, opacity: 1, scale: 1 }}
        viewport={{ once: false, margin: "250px 0px 0px 0px" }}
        transition={{
          type: "spring",
          stiffness: 420,
          damping: 22,
          delay: index * 0.03,
        }}
        whileHover={{
          scale: 1.15,
          y: -14,
          transition: { type: "spring", stiffness: 400, damping: 15 },
        }}
        whileTap={{ scale: 0.95, y: 2 }}
      >
        <img
          src={src}
          alt={alt}
          className={`${isT ? "h-[clamp(35px,9.1vw,138px)]" : "h-[clamp(46px,12vw,182px)]"} object-contain pointer-events-none drop-shadow-md transition-all`}
        />
      </motion.div>
    </div>
  );
}

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

  // Mouse coordinates relative to logo section for eye/face tracking
  const rawMouseX = useMotionValue(0);
  const rawMouseY = useMotionValue(0);

  // Smooth springs for natural organic motion
  const springConfig = { damping: 25, stiffness: 220, mass: 0.4 };
  const mouseX = useSpring(rawMouseX, springConfig);
  const mouseY = useSpring(rawMouseY, springConfig);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width - 0.5) * 2;
    const y = ((e.clientY - rect.top) / rect.height - 0.5) * 2;
    rawMouseX.set(Math.max(-1, Math.min(1, x)));
    rawMouseY.set(Math.max(-1, Math.min(1, y)));
  };

  const handleMouseLeave = () => {
    rawMouseX.set(0);
    rawMouseY.set(0);
  };

  return (
    <footer className="bg-[#e5e5e5] text-black border-t-2 border-black pt-4 sm:pt-6 pb-8 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* 5 Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8">
          
          {/* Column 1: Brand & Identity */}
          <div className="lg:col-span-3 space-y-3">
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/images/biharstack-brand-logo.png"
                alt="BiharStack Logo"
                className="w-9 h-9 object-contain group-hover:scale-105 transition-transform drop-shadow-sm"
              />
              <span className="font-display text-2xl font-black tracking-widest uppercase text-black">
                BIHAR STACK
              </span>
            </Link>

            <p className="text-xs font-bold uppercase tracking-wider text-black leading-relaxed">
              &quot;Building Bihar. Scaling Businesses.&quot; <br />
              <span>&quot;Think Digital. Think Bihar Stack.&quot;</span>
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
                aria-label="Twitter"
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
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="YouTube"
                className="p-2.5 bg-white border border-black hover:bg-black hover:text-white transition-colors"
              >
                <Youtube className="w-4 h-4" />
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
                <Link href="/services/digital-marketing" className="hover:text-black transition-colors">
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link href="/services/branding-creative" className="hover:text-black transition-colors">
                  Brand Identity
                </Link>
              </li>
              <li>
                <Link href="/services/website-technology" className="hover:text-black transition-colors">
                  Web & App Dev
                </Link>
              </li>
              <li>
                <Link href="/services/ai-automation" className="hover:text-black transition-colors">
                  AI & Workflows
                </Link>
              </li>
              <li>
                <Link href="/services/digital-marketing#local-seo-gmb" className="hover:text-black transition-colors">
                  Local SEO & GMB
                </Link>
              </li>
              <li>
                <Link href="/services/website-technology#ecommerce-platforms" className="hover:text-black transition-colors">
                  E-Commerce POS
                </Link>
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
                <Link href="/company" className="hover:text-red-600 font-black transition-colors">
                  About Bihar Stack (Story)
                </Link>
              </li>
              <li>
                <Link href="/#portfolio" className="hover:text-black transition-colors">
                  Our Work
                </Link>
              </li>
              <li>
                <Link href="/#why-us" className="hover:text-black transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/#pricing" className="hover:text-black transition-colors">
                  Pricing Plans
                </Link>
              </li>
              <li>
                <Link href="/#faq" className="hover:text-black transition-colors">
                  FAQ
                </Link>
              </li>
              <li>
                <Link href="/#contact" className="hover:text-black transition-colors">
                  Contact Us
                </Link>
              </li>
              <li>
                <a href="https://wa.me/917979067849" target="_blank" rel="noopener noreferrer" className="hover:text-black transition-colors">
                  WhatsApp Support
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4: Legal */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="font-display text-xs font-black uppercase tracking-[0.2em] text-black mb-4">
              Legal
            </h4>
            <ul className="space-y-2.5 text-xs font-semibold uppercase tracking-wider text-neutral-700">
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Terms of Service
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Refund Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Security & SLA
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black transition-colors">
                  Cookie Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Column 5: Newsletter */}
          <div className="lg:col-span-3 space-y-4">
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
        <div className="pt-4 pb-4 text-center">
          <p className="text-xs sm:text-sm font-black uppercase tracking-widest text-[#0A2540] bg-white/80 border border-black/10 py-2 px-4 rounded-md inline-block shadow-xs">
            End-to-end digital solutions &ldquo;Build Digital. Grow Faster.&rdquo;
          </p>
        </div>

        {/* Divider Line */}
        <div className="border-b border-neutral-400 w-full mb-2" />

        {/* 3D Character Letter Watermark Logo for 'BIHAR STACK' with Interactive Mouse-Look Tracking */}
        <div
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          className="pt-6 pb-4 text-center select-none overflow-hidden relative flex items-center justify-center w-full max-w-full"
        >
          <div className="flex items-center justify-center flex-nowrap shrink-0 px-2 max-w-full">
            {/* BIHAR 3D Character Mascots */}
            <div className="flex items-center shrink-0">
              {/* B Mascot */}
              <MascotLetter
                src="/images/letters/letter-b.png"
                alt="B"
                mouseX={mouseX}
                mouseY={mouseY}
                index={0}
              />

              {/* I Mascot */}
              <MascotLetter
                src="/images/letters/letter-i.png"
                alt="I"
                mouseX={mouseX}
                mouseY={mouseY}
                index={1}
                style={{
                  marginLeft: "clamp(-46px, -3.3vw, -14px)",
                  marginRight: "clamp(-40px, -2.9vw, -12px)",
                }}
              />

              {/* H Mascot */}
              <MascotLetter
                src="/images/letters/letter-h.png"
                alt="H"
                mouseX={mouseX}
                mouseY={mouseY}
                index={2}
              />

              {/* A Mascot (Bihar) */}
              <MascotLetter
                src="/images/letters/letter-a.png"
                alt="A"
                mouseX={mouseX}
                mouseY={mouseY}
                index={3}
                style={{
                  marginLeft: "clamp(-31px, -2.2vw, -10px)",
                }}
              />

              {/* R Mascot */}
              <MascotLetter
                src="/images/letters/letter-r.png"
                alt="R"
                mouseX={mouseX}
                mouseY={mouseY}
                index={4}
                style={{
                  marginLeft: "clamp(-38px, -2.7vw, -12px)",
                }}
              />
            </div>

            {/* STACK 3D Character Mascots (Word gap: -3px) */}
            <div
              className="flex items-center shrink-0"
              style={{
                marginLeft: "clamp(-3px, -0.2vw, -1px)",
              }}
            >
              {/* S Mascot */}
              <MascotLetter
                src="/images/letters/letter-s.png"
                alt="S"
                mouseX={mouseX}
                mouseY={mouseY}
                index={5}
              />

              {/* T Mascot */}
              <MascotLetter
                src="/images/letters/letter-t.png"
                alt="T"
                mouseX={mouseX}
                mouseY={mouseY}
                isT={true}
                index={6}
                style={{
                  marginLeft: "clamp(-18px, -1.3vw, -6px)",
                }}
              />

              {/* A Mascot (Stack) */}
              <MascotLetter
                src="/images/letters/letter-stack-a.png"
                alt="A"
                mouseX={mouseX}
                mouseY={mouseY}
                index={7}
                style={{
                  marginLeft: "clamp(-8px, -0.6vw, -3px)",
                }}
              />

              {/* C Mascot */}
              <MascotLetter
                src="/images/letters/letter-c.png"
                alt="C"
                mouseX={mouseX}
                mouseY={mouseY}
                index={8}
                style={{
                  marginLeft: "clamp(-39px, -2.8vw, -12px)",
                  marginRight: "clamp(-36px, -2.6vw, -11px)",
                }}
              />

              {/* K Mascot */}
              <MascotLetter
                src="/images/letters/letter-k.png"
                alt="K"
                mouseX={mouseX}
                mouseY={mouseY}
                index={9}
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
