"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "What makes BiharStack different from traditional digital agencies?",
    answer:
      "BiharStack combines modern software engineering (Next.js 14, Tailwind, Framer Motion) with high-converting performance marketing and custom AI workflow automation under one roof. We focus strictly on measurable business ROI rather than vanity metrics.",
  },
  {
    question: "How long does it take to complete a project?",
    answer:
      "Timelines depend on scope. A custom high-performance website or branding package typically takes 2 to 3 weeks. Full-scale SaaS web platforms, mobile apps, or enterprise AI automations range from 4 to 8 weeks with bi-weekly sprint demos.",
  },
  {
    question: "Do you serve clients outside of Bihar?",
    answer:
      "Yes, absolutely! While our roots and core innovation lab are in Bihar, we proudly serve clients across India, North America, Europe, and the Middle East. All collaboration happens seamlessly via Slack, Zoom, and real-time preview links.",
  },
  {
    question: "What is your pricing structure for custom projects?",
    answer:
      "We offer transparent tiered packages starting from ₹24,999 for Starter projects up to custom retainer models for Enterprise clients. Before any work begins, you get a fixed quote with clear scope boundaries and no surprise charges.",
  },
  {
    question: "Can BiharStack integrate AI automation into our existing business tools?",
    answer:
      "Yes! We build custom AI chatbots, WhatsApp bots, and automated CRM pipelines that connect directly with your existing software (HubSpot, Salesforce, Zoho, Google Sheets, WhatsApp Business API).",
  },
  {
    question: "What kind of post-launch support and maintenance do you offer?",
    answer:
      "Every project includes complimentary post-launch support. Afterward, we offer monthly growth retainers covering server management, security updates, conversion rate optimization, and new feature releases.",
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-24 bg-navy-950/90 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GOT QUESTIONS?"
          title="Frequently Asked Questions"
          subtitle="Everything you need to know about partnering with BiharStack."
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
                transition={{ duration: 0.4, delay: index * 0.08 }}
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
