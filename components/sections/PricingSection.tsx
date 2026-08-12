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
    headerBg: "bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 text-slate-900 border-b-2 border-slate-400",
    borderStyle: "border-slate-300/90 shadow-[0_20px_50px_rgba(148,163,184,0.25)]",
    cardBg: "bg-gradient-to-b from-[#3a3f4d] via-[#2a2e39] to-[#1f222b]",
    buttonBg: "bg-gradient-to-r from-slate-200 via-slate-300 to-slate-400 text-black font-black hover:scale-105 shadow-lg",
    glowColor: "text-slate-200",
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
    cta: "Select Silver",
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
    borderStyle: "border-amber-400 shadow-[0_25px_60px_rgba(234,179,8,0.4)] lg:-translate-y-4 z-20",
    cardBg: "bg-gradient-to-b from-[#4d3d1e] via-[#382b13] to-[#241a0b]",
    buttonBg: "bg-gradient-to-r from-yellow-300 via-amber-400 to-yellow-500 text-black font-black shadow-xl shadow-amber-500/40 hover:scale-105",
    glowColor: "text-amber-300",
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
    cta: "Select Gold",
  },
  {
    badge: "PACK BRONZE",
    name: "Enterprise Bihar",
    tagline: "Bespoke digital architecture for factories, real estate & multi-branch firms.",
    price: "₹14,999",
    period: "custom scope retainer",
    highlight: false,
    headerBg: "bg-gradient-to-b from-orange-200 via-amber-600 to-orange-700 text-white font-black border-b-2 border-orange-800",
    borderStyle: "border-amber-600/90 shadow-[0_20px_50px_rgba(245,158,11,0.25)]",
    cardBg: "bg-gradient-to-b from-[#4a352c] via-[#36241b] to-[#21150e]",
    buttonBg: "bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 text-black font-black hover:scale-105 shadow-lg",
    glowColor: "text-orange-300",
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
    cta: "Select Bronze",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-20 sm:py-24 bg-[#ECF1F5] border-t border-black/5 relative overflow-hidden">
      {/* Metallic Glow Ambient Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-amber-500/10 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="AFFORDABLE GROWTH PACKAGES"
          title="Transparent Pricing for Bihar Businesses"
          subtitle="No hidden costs. Affordable Indian Rupee (₹) plans specially designed for local startups, shops, & growing ventures."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-12">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-[36px] ${plan.cardBg} border-2 flex flex-col justify-between overflow-hidden transition-all duration-300 ${plan.borderStyle}`}
            >
              {/* Top Corner Lens Flare Sparkle Lights (Matching Reference Photo) */}
              <div className="absolute top-3 right-3 z-30 flex items-center justify-center pointer-events-none">
                <div className="w-2.5 h-2.5 rounded-full bg-white blur-[1px] animate-ping" />
                <Sparkles className={`w-5 h-5 ${plan.glowColor} animate-pulse absolute`} />
              </div>

              {/* Highlight Popular Badge for Pack Gold */}
              {plan.popularBadge && (
                <div className="absolute top-0 left-0 z-30">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-amber-400 to-yellow-500 text-black text-[10px] font-black uppercase tracking-widest rounded-br-2xl shadow-lg flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>{plan.popularBadge}</span>
                  </span>
                </div>
              )}

              {/* Metallic 3D Top Header Badge with V-Crest Shape (Matching Reference Photo) */}
              <div>
                <div className={`p-6 text-center shadow-xl relative ${plan.headerBg}`}>
                  {/* Glass Top Highlight Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/60 pointer-events-none" />
                  
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

                  {/* Downward V-Peak Shape (Matching Reference Photo) */}
                  <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[16px] border-l-transparent border-r-[16px] border-r-transparent border-t-[14px] border-t-amber-500/80 z-20 pointer-events-none" />
                </div>

                {/* Content & Numbered Feature Checklist (Matching Reference Photo) */}
                <div className="p-6 sm:p-7 pt-8">
                  <p className="text-xs text-slate-300 font-medium min-h-[36px] mb-6 text-center leading-relaxed italic">
                    {plan.tagline}
                  </p>

                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center justify-between gap-3 text-xs font-bold py-1.5 border-b border-white/10"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Sequence Number (1, 2, 3... Matching Photo) */}
                          <span className={`text-xs font-black w-4 flex-shrink-0 ${plan.glowColor}`}>
                            {fIdx + 1}
                          </span>
                          <span
                            className={`uppercase tracking-wide leading-tight truncate ${
                              feature.included
                                ? "text-slate-100 font-bold"
                                : "text-slate-500 line-through decoration-slate-600 opacity-60"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>

                        {/* Metallic Checkmark or Cross Icon (Matching Photo) */}
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 border border-emerald-500/50 flex items-center justify-center flex-shrink-0 shadow-sm">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-rose-500/10 text-rose-400 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                            <CrossIcon className="w-3 h-3 opacity-60" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metallic Pill Action Button (Matching Reference Photo) */}
              <div className="p-6 pt-0">
                <a href="#contact" className="block w-full">
                  <button
                    className={`w-full py-4 px-6 rounded-full text-xs font-black uppercase tracking-widest flex items-center justify-center gap-2 transition-all duration-300 ${plan.buttonBg}`}
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
