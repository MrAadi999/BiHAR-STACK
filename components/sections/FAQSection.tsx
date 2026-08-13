"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "How does BiharStack build and deploy digital solutions for local shops, clinics, institutes, and enterprises?",
    answer:
      "We deliver custom responsive websites, billing POS systems, WhatsApp catalog ordering setups, and Google Maps local SEO. Whether you operate a retail showroom, clinic, restaurant, coaching institute, or enterprise, you can effortlessly manage customer orders, invoices, and appointments directly from your mobile phone or laptop.",
  },
  {
    question: "What are BiharStack's pricing packages? Are there any hidden charges?",
    answer:
      "Our pricing is 100% transparent and billed in Indian Rupees (₹) with zero hidden fees. Starter Dukaan packages start at ₹3,999, Growth Vyapar packages at ₹8,999, and full-scale Enterprise Bihar solutions at ₹14,999. Every project comes with a clearly documented scope and fixed milestones.",
  },
  {
    question: "What is the typical turnaround time for project delivery and going live?",
    answer:
      "Standard business websites, clinic portals, and Google Business profile setups go live within 5 to 7 business days. Complex custom web applications, QR-based ordering portals, and coaching test series platforms are delivered within 2 to 3 weeks with complete quality assurance.",
  },
  {
    question: "Can we receive real-time WhatsApp notifications for customer orders and appointments?",
    answer:
      "Yes, absolutely. We integrate 24/7 automated WhatsApp AI bots and direct chat widgets into your website. Whenever a customer places an order, books an appointment, or submits an inquiry, both you and your customer receive immediate real-time WhatsApp notifications.",
  },
  {
    question: "Does BiharStack serve clients outside of Bihar and in global international markets?",
    answer:
      "Yes! We scale retail chains, healthcare providers, and startups across Bihar and all of India. Furthermore, we develop global B2B export portals connecting international buyers across the USA, Europe, and the Middle East with authentic Bihar handlooms, agro-products (like Makhana), and manufacturing hubs.",
  },
  {
    question: "What post-launch support and maintenance does BiharStack provide?",
    answer:
      "Every project includes complimentary post-launch technical support and hands-on staff training. Additionally, our dedicated engineering team manages 24/7 high-speed cloud hosting, daily automated backups, security firewalls, and regular feature updates.",
  },
  {
    question: "Will our business rank on Google Maps and local search results?",
    answer:
      "Yes! We implement comprehensive Google Business Profile (GMB) optimization, Google Maps pin setup, and local SEO keywords so customers searching in your city or vicinity discover your business first and visit your store directly.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-4 sm:pt-8 pb-14 sm:pb-18 bg-navy-950/90 border-t border-white/5 relative overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-80 bg-electric-600/10 blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GOT QUESTIONS?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about partnering with BiharStack."
          align="center"
          className="mb-6 sm:mb-8 text-white"
        />

        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={faq.question}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 overflow-hidden transition-colors"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left gap-4 text-white hover:text-glow-sky transition-colors focus:outline-none"
                  aria-expanded={isOpen}
                >
                  <span className="font-display text-base sm:text-lg font-semibold flex items-center gap-3">
                    <HelpCircle className="w-5 h-5 text-electric-400 shrink-0" />
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 text-electric-400" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-2 text-xs sm:text-sm text-slate-300 leading-relaxed border-t border-slate-800/60">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
