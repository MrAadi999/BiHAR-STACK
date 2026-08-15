"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ArrowRight, ChevronRight, MessageCircle, ChevronDown
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import BackToTop from "@/components/ui/BackToTop";
import WhatsAppButton from "@/components/ui/WhatsAppButton";

export interface ServiceRow {
  id: string;
  title: string;
  tags?: string;
  description: string[];
  illustration: React.ReactNode;
  actionText?: string;
  actionLink?: string;
}

export interface ServicePageMasterData {
  slug: string;
  categoryLabel: string;
  title: string;
  headline: string;
  subheadline: string;
  overviewTags?: string[];
  heroIllustration: React.ReactNode;
  rows: ServiceRow[];
  faqs?: { q: string; a: string }[];
  ctaHeadline: string;
  ctaSubheadline: string;
}

export default function ServiceDetailLayout({ data }: { data: ServicePageMasterData }) {
  const [activeFaq, setActiveFaq] = useState<number | null>(0);

  const whatsappMessage = encodeURIComponent(
    `Hi BiharStack! I want to discuss *${data.title}* services for my company.`
  );

  return (
    <div className="min-h-screen bg-white text-black font-sans antialiased selection:bg-black selection:text-white">
      
      {/* ================= STICKY NAVBAR ================= */}
      <Navbar />

      <main className="pt-24 lg:pt-28">
        
        {/* ================= HERO SECTION ================= */}
        <section className="py-12 lg:py-16 max-w-[1240px] mx-auto px-6 lg:px-8">
          
          {/* Breadcrumb */}
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-neutral-400 mb-8">
            <Link href="/" className="hover:text-black transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
            <Link href="/#services" className="hover:text-black transition-colors">Services</Link>
            <ChevronRight className="w-3.5 h-3.5 text-neutral-300" />
            <span className="text-black font-bold">
              {data.title}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <span className="text-xs font-black uppercase tracking-widest text-[#E11D48] block">
                {data.categoryLabel}
              </span>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-black leading-[1.1]">
                {data.headline}
              </h1>

              {data.overviewTags && data.overviewTags.length > 0 && (
                <p className="text-sm font-semibold text-neutral-800 tracking-wide">
                  {data.overviewTags.join(" | ")}
                </p>
              )}

              <p className="text-base sm:text-lg text-neutral-600 leading-relaxed font-normal max-w-xl">
                {data.subheadline}
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-3">
                <Link
                  href="/#contact"
                  className="px-7 py-3.5 rounded-lg bg-black hover:bg-neutral-800 text-white font-bold text-sm tracking-wide transition-all shadow-sm flex items-center gap-2"
                >
                  <span>Get Free Proposal</span>
                  <ArrowRight className="w-4 h-4 text-[#c6f827]" />
                </Link>

                <a
                  href={`https://wa.me/917979067849?text=${whatsappMessage}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-6 py-3.5 rounded-lg border-2 border-black hover:bg-black hover:text-white text-black font-bold text-sm tracking-wide transition-all flex items-center gap-2"
                >
                  <MessageCircle className="w-4 h-4 text-emerald-600" />
                  <span>WhatsApp Chat</span>
                </a>
              </div>
            </div>

            {/* Right Hero Illustration (Frameless, clean canvas) */}
            <div className="lg:col-span-5 flex items-center justify-center">
              <div className="w-full max-w-[440px] flex items-center justify-center">
                {data.heroIllustration}
              </div>
            </div>

          </div>
        </section>

        <div className="max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="h-[1px] bg-neutral-200 w-full" />
        </div>

        {/* ================= ALTERNATING SHOWCASE ROWS (FRAMELESS, CRYSTAL CLEAR) ================= */}
        <section className="py-16 lg:py-24 max-w-[1240px] mx-auto px-6 lg:px-8">
          <div className="space-y-24 lg:space-y-32">
            {data.rows.map((row, idx) => {
              const isEven = idx % 2 === 1;

              return (
                <div
                  key={row.id}
                  id={row.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
                >
                  
                  {/* Frameless Illustration Column */}
                  <div className={`lg:col-span-5 flex items-center justify-center ${isEven ? "lg:order-2" : "lg:order-1"}`}>
                    <div className="w-full max-w-[440px] flex items-center justify-center">
                      {row.illustration}
                    </div>
                  </div>

                  {/* Content Column */}
                  <div className={`lg:col-span-7 space-y-5 ${isEven ? "lg:order-1" : "lg:order-2"}`}>
                    <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-black tracking-tight leading-tight">
                      {row.title}
                    </h2>

                    {row.tags && (
                      <p className="text-sm font-semibold text-neutral-800 tracking-wide">
                        {row.tags}
                      </p>
                    )}

                    <div className="space-y-4 text-base text-neutral-600 leading-relaxed font-normal">
                      {row.description.map((p, pIdx) => (
                        <p key={pIdx}>{p}</p>
                      ))}
                    </div>

                    <div className="pt-3">
                      <Link
                        href={row.actionLink || `/#contact?service=${encodeURIComponent(row.title)}`}
                        className="inline-block font-bold text-sm tracking-wider uppercase text-[#E11D48] hover:text-black border-b-2 border-[#E11D48] pb-1 hover:border-black transition-all"
                      >
                        {row.actionText || "View More"}
                      </Link>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>
        </section>

        {/* ================= FAQ SECTION ================= */}
        {data.faqs && data.faqs.length > 0 && (
          <section className="py-16 bg-[#fafafa] border-t border-b border-neutral-200">
            <div className="max-w-[860px] mx-auto px-6">
              
              <div className="text-center mb-10">
                <span className="text-xs font-bold uppercase tracking-widest text-[#E11D48] block mb-1">
                  Common Questions
                </span>
                <h2 className="font-display text-3xl sm:text-4xl font-bold text-black">
                  Frequently Asked Questions
                </h2>
              </div>

              <div className="space-y-3">
                {data.faqs.map((faq, idx) => {
                  const isOpen = activeFaq === idx;
                  return (
                    <div
                      key={idx}
                      className="bg-white border border-neutral-300 rounded-xl overflow-hidden shadow-sm"
                    >
                      <button
                        type="button"
                        onClick={() => setActiveFaq(isOpen ? null : idx)}
                        className="w-full p-5 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-neutral-50 transition-colors"
                      >
                        <span className="font-bold text-base text-black">
                          {faq.q}
                        </span>
                        <ChevronDown
                          className={`w-5 h-5 text-black transition-transform duration-200 shrink-0 ${
                            isOpen ? "rotate-180 text-[#E11D48]" : ""
                          }`}
                        />
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="px-5 pb-5 pt-1 text-sm text-neutral-600 leading-relaxed border-t border-neutral-100 font-normal">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>

            </div>
          </section>
        )}

        {/* ================= FINAL CALL TO ACTION ================= */}
        <section className="py-20 max-w-[1240px] mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto space-y-5">
            <span className="text-xs font-black uppercase tracking-widest text-[#E11D48]">
              Ready to take your business to the next level?
            </span>

            <h2 className="font-display text-3xl sm:text-5xl font-bold text-black tracking-tight">
              {data.ctaHeadline}
            </h2>

            <p className="text-base text-neutral-600 font-normal">
              {data.ctaSubheadline}
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link
                href="/#contact"
                className="px-8 py-3.5 rounded-lg bg-black hover:bg-neutral-800 text-white font-bold text-sm tracking-wide transition-all shadow-md flex items-center gap-2"
              >
                <span>Book Free Strategy Call</span>
                <ArrowRight className="w-4 h-4 text-[#c6f827]" />
              </Link>

              <a
                href={`https://wa.me/917979067849?text=${whatsappMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                className="px-7 py-3.5 rounded-lg border-2 border-black hover:bg-black hover:text-white text-black font-bold text-sm tracking-wide transition-all flex items-center gap-2"
              >
                <MessageCircle className="w-4 h-4 text-emerald-600" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>
        </section>

      </main>

      <Footer />
      <BackToTop />
      <WhatsAppButton />
    </div>
  );
}
