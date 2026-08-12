"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const faqs = [
  {
    question: "Humare local dukan/coaching/clinic ke liye BiharStack website aur app kaise kaam karta hai?",
    answer:
      "Hum aapki dukaan (Saree/Garments, Salon, Clinic, Restaurant, Coaching Institute) ke liye custom responsive website, billing POS, WhatsApp catalog ordering, aur Google Maps ranking setup karte hain. Aap apne mobile se direct orders, bills, aur client appointments manage kar sakte hain.",
  },
  {
    question: "BiharStack ke pricing packages kitne se start hote hain? Any hidden charges?",
    answer:
      "Humari pricing 100% transparent aur affordable Indian Rupee (₹) me hai! Starter Dukaan plan ₹3,999 se start hota hai, Growth Vyapar plan ₹8,999 hai, aur Enterprise Bihar plan ₹14,999 hai. Pehle se fixed scope hota hai aur koi hidden charges nahi hain.",
  },
  {
    question: "Project complete hone aur website live hone me kitna time lagta hai?",
    answer:
      "Standard dukaan/clinic website aur Google Business setup 5 se 7 dino me live ho jaati hai! Full-scale web apps, QR menu ordering, aur coaching test series portals 2 se 3 weeks me complete deliver hote hain.",
  },
  {
    question: "Kya humare phone par WhatsApp customer orders aur appointment notifications aayenge?",
    answer:
      "Haan bilkul! Hum 24/7 Automated AI WhatsApp Bot aur Direct Chat Widget integrate karte hain. Aapke customers jab website par order, booking ya enquiry karenge, aapko aur unhe turant WhatsApp notification mil jayega.",
  },
  {
    question: "Do you serve clients outside of Bihar and Global international markets?",
    answer:
      "Yes! 95% hum Bihar aur pure Bharat ke local businesses, retail chains, clinics, aur startups ko scale karte hain. 5% hum B2B export portals ke zariye Global buyers (USA, Europe, Gulf) ko Bihar ke makhana, handloom, aur manufacturing factories se connect karte hain.",
  },
  {
    question: "Website live hone ke baad post-launch support aur maintenance kaise milega?",
    answer:
      "Har project ke saath complimentary post-launch support aur staff training milti hai. Iske alawa humari BiharStack engineering team 24/7 hosting server management, security backups, aur software updates manage karti hai.",
  },
  {
    question: "Kya humari shop/clinic Google Maps aur Search me sabse upar rank karegi?",
    answer:
      "Haan! Hum har business ke liye Local Google Business (GMB) SEO, Google Maps pin setup, aur local keyword ranking karte hain taaki aapke area ke customers Google par search karke direct aapki shop par aayein.",
  },
  {
    question: "Kya hum khud website par apne products, items aur prices baad me update kar sakte hain?",
    answer:
      "Haan bilkul! Hum aapko ek super simple mobile-friendly admin dashboard aur easy WhatsApp control dete hain jahan se aap 1 click me naye saree, menu items, coaching test series ya product prices kabhi bhi update kar sakte hain.",
  },
  {
    question: "Customer payments (UPI, PhonePe, Paytm, Google Pay, Cards) hamare bank me kaise aayenge?",
    answer:
      "Hum Razorpay, PhonePe PG, ya Direct Merchant UPI QR Code seedhe aapke bank account se link kar dete hain. Customer dwara kiya gaya har online payment 100% secure tarike se direct aapke own bank account me credit hota hai.",
  },
  {
    question: "Hum BiharStack ke saath apna project start kaise kar sakte hain?",
    answer:
      "Aap niche Contact Form fill karke ya direct WhatsApp button par click karke humari team se connect kar sakte hain. Hum same day aapka requirements discuss karke project work initiate kar denge.",
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
