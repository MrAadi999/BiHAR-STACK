"use client";

import { motion } from "framer-motion";
import { Check, X as CrossIcon, ArrowRight, Sparkles } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const plans = [
  {
    badge: "PACK SILVER",
    name: "Starter Dukaan",
    tagline: "Ideal for local shops, saree emporiums, salons, clinics & initial web launch.",
    price: "₹3,999",
    period: "one-time setup",
    highlight: false,
    headerBg: "bg-gradient-to-b from-slate-200 via-slate-300 to-slate-400 text-slate-900 border-b-2 border-slate-400",
    borderStyle: "border-slate-300 shadow-lg",
    buttonBg: "bg-gradient-to-r from-slate-800 to-slate-900 text-white font-black hover:bg-black shadow-md",
    features: [
      { text: "Custom 5-Page Responsive Website", included: true },
      { text: "WhatsApp Direct Order & Chat Button", included: true },
      { text: "Google Maps Location & Local SEO", included: true },
      { text: "High-Speed Hosting & Domain Setup", included: true },
      { text: "Custom Logo & Banner Creatives", included: true },
      { text: "1 Month Free Technical Support", included: true },
      { text: "Automated AI WhatsApp Bot (24/7)", included: false },
      { text: "Paid Meta Ads & Google Ads Funnel", included: false },
    ],
    cta: "Launch Silver Plan",
  },
  {
    badge: "PACK GOLD",
    name: "Growth Vyapar",
    tagline: "Designed for coaching centers, clinics, restaurants & fast-scaling Bihar ventures.",
    price: "₹8,999",
    period: "one-time + growth tools",
    highlight: true,
    popularBadge: "MOST POPULAR",
    headerBg: "bg-gradient-to-b from-amber-200 via-yellow-400 to-amber-500 text-black font-black border-b-2 border-amber-600",
    borderStyle: "border-amber-400 shadow-[0_20px_50px_rgba(234,179,8,0.25)] z-20 lg:-translate-y-4",
    buttonBg: "bg-gradient-to-r from-amber-500 via-amber-400 to-yellow-500 text-black font-black shadow-xl shadow-amber-500/30 hover:scale-105",
    features: [
      { text: "Full Web App / POS / QR Menu / Test Portal", included: true },
      { text: "Automated AI WhatsApp Bot (24/7)", included: true },
      { text: "Advanced Local SEO & Google Ranking", included: true },
      { text: "Complete Brand Identity & Motion Design", included: true },
      { text: "Meta Ads & Google Ads Funnel Setup", included: true },
      { text: "Lead Capture CRM & SMS Reminders", included: true },
      { text: "Priority 24/7 Technical Support", included: true },
      { text: "Monthly Growth Analytics Report", included: true },
    ],
    cta: "Start Gold Vyapar",
  },
  {
    badge: "PACK BRONZE",
    name: "Enterprise Bihar",
    tagline: "Bespoke digital architecture for factories, real estate & multi-branch firms.",
    price: "₹14,999",
    period: "custom scope retainer",
    highlight: false,
    headerBg: "bg-gradient-to-b from-orange-200 via-amber-600 to-orange-700 text-white font-black border-b-2 border-orange-800",
    borderStyle: "border-amber-600/80 shadow-lg",
    buttonBg: "bg-gradient-to-r from-amber-700 via-orange-600 to-amber-800 text-white font-black hover:bg-black shadow-md",
    features: [
      { text: "Custom SaaS Engine / Mobile App Engine", included: true },
      { text: "B2B Global Buyer Export Web Portal", included: true },
      { text: "Micro-Finance AEPS / KYC Integration", included: true },
      { text: "3D Interactive Web Animations", included: true },
      { text: "Dedicated BiharStack Software Engineer", included: true },
      { text: "SLA 99.99% Uptime & Security Audit", included: true },
      { text: "Continuous A/B Testing & Retainer", included: true },
      { text: "Quarterly Strategy Board Meetings", included: true },
    ],
    cta: "Contact Enterprise",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#ECF1F5] border-t border-black/5 relative overflow-hidden">
      {/* Soft Light Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-amber-500/5 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="AFFORDABLE GROWTH PACKAGES"
          title="Transparent Pricing for Bihar Businesses"
          subtitle="No hidden costs. Affordable Indian Rupee (₹) plans specially designed for local startups, shops, & growing ventures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-10">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-[32px] bg-white border-2 flex flex-col justify-between overflow-hidden transition-all duration-300 ${plan.borderStyle}`}
            >
              {/* Highlight Popular Badge for Pack Gold */}
              {plan.popularBadge && (
                <div className="absolute top-0 right-0 z-30">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[10px] font-black uppercase tracking-widest rounded-bl-2xl shadow-md flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>{plan.popularBadge}</span>
                  </span>
                </div>
              )}

              {/* Metallic 3D Top Header Badge (Matching Reference Photo) */}
              <div>
                <div className={`p-6 text-center shadow-md relative overflow-hidden ${plan.headerBg}`}>
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/50 pointer-events-none" />
                  <span className="text-xs font-black uppercase tracking-[0.25em] block mb-1">
                    {plan.badge}
                  </span>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline justify-center gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-black tracking-tight">
                      {plan.price}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-85">
                      / {plan.period}
                    </span>
                  </div>
                </div>

                {/* Content & Feature Checklist */}
                <div className="p-6 sm:p-7">
                  <p className="text-xs text-neutral-600 font-semibold min-h-[36px] mb-6 text-center leading-relaxed">
                    {plan.tagline}
                  </p>

                  <div className="space-y-3 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center justify-between gap-3 text-xs font-bold py-1 border-b border-neutral-100"
                      >
                        <span
                          className={`uppercase tracking-wide leading-tight ${
                            feature.included
                              ? "text-black font-extrabold"
                              : "text-neutral-400 line-through"
                          }`}
                        >
                          {feature.text}
                        </span>

                        {/* Metallic Checkmark or Cross Icon (Matching Reference Photo) */}
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 border border-emerald-300 flex items-center justify-center flex-shrink-0 shadow-xs">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-neutral-100 text-neutral-400 border border-neutral-200 flex items-center justify-center flex-shrink-0">
                            <CrossIcon className="w-3 h-3 opacity-60" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Glossy Metallic Action Button */}
              <div className="p-6 pt-0">
                <a href="#contact" className="block w-full">
                  <button
                    className={`w-full py-4 px-6 rounded-2xl text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${plan.buttonBg}`}
                  >
                    <span>{plan.cta}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
