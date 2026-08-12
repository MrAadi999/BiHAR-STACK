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
    headerBg: "bg-gradient-to-b from-slate-100 via-slate-300 to-slate-400 text-slate-900 border-b-2 border-slate-300",
    borderStyle: "border-2 border-slate-300 shadow-[0_0_40px_rgba(203,213,225,0.35)] hover:shadow-[0_0_60px_rgba(203,213,225,0.55)]",
    cardBg: "bg-gradient-to-b from-[#404656] via-[#2d3240] to-[#1e222c]",
    buttonBg: "bg-gradient-to-r from-slate-100 via-slate-300 to-slate-400 text-black font-black hover:scale-105 shadow-xl shadow-slate-300/30",
    glowColor: "text-slate-200",
    vColor: "border-t-slate-400",
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
    headerBg: "bg-gradient-to-b from-amber-100 via-yellow-400 to-amber-500 text-black font-black border-b-2 border-amber-600",
    borderStyle: "border-2 border-amber-300 shadow-[0_0_60px_rgba(251,191,36,0.6)] hover:shadow-[0_0_80px_rgba(251,191,36,0.8)] lg:-translate-y-4 z-20",
    cardBg: "bg-gradient-to-b from-[#5c4923] via-[#423317] to-[#2b200d]",
    buttonBg: "bg-gradient-to-r from-yellow-200 via-amber-400 to-yellow-500 text-black font-black shadow-2xl shadow-amber-400/50 hover:scale-105",
    glowColor: "text-amber-300",
    vColor: "border-t-amber-500",
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
    badge: "PACK PLATINUM",
    name: "Enterprise Bihar",
    tagline: "Bespoke digital architecture for factories, real estate & multi-branch firms.",
    price: "₹14,999",
    period: "custom scope retainer",
    highlight: false,
    headerBg: "bg-gradient-to-b from-sky-100 via-indigo-200 to-slate-400 text-slate-900 font-black border-b-2 border-sky-400",
    borderStyle: "border-2 border-sky-300 shadow-[0_0_45px_rgba(56,189,248,0.45)] hover:shadow-[0_0_65px_rgba(56,189,248,0.65)]",
    cardBg: "bg-gradient-to-b from-[#344059] via-[#222c40] to-[#151c2b]",
    buttonBg: "bg-gradient-to-r from-sky-100 via-indigo-200 to-slate-300 text-black font-black hover:scale-105 shadow-xl shadow-sky-300/30",
    glowColor: "text-sky-300",
    vColor: "border-t-sky-400",
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
    cta: "Select Platinum",
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="pt-4 sm:pt-8 pb-14 sm:pb-18 bg-[#ECF1F5] border-t border-black/5 relative overflow-hidden">
      {/* Metallic Glow Ambient Backdrops */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-amber-500/15 blur-[120px] pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="AFFORDABLE GROWTH PACKAGES"
          title="Transparent Pricing for Bihar Businesses"
          subtitle="No hidden costs. Affordable Indian Rupee (₹) plans specially designed for local startups, shops, & growing ventures."
          className="mb-4 sm:mb-6"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mt-6 sm:mt-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.badge}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative rounded-[36px] ${plan.cardBg} flex flex-col justify-between overflow-hidden transition-all duration-300 group ${plan.borderStyle}`}
            >
              {/* Glass Diagonal Sheen Overlay (Matching Metallic Reference Photo) */}
              <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/10 to-transparent pointer-events-none opacity-60 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Top Right Lens Flare Sparkle Lights */}
              <div className="absolute top-3 right-3 z-30 flex items-center justify-center pointer-events-none">
                <div className="w-3 h-3 rounded-full bg-white blur-[1.5px] animate-ping" />
                <Sparkles className={`w-6 h-6 ${plan.glowColor} animate-pulse absolute drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]`} />
              </div>

              {/* Bottom Left Secondary Sparkle Light */}
              <div className="absolute bottom-4 left-4 z-30 flex items-center justify-center pointer-events-none opacity-70">
                <Sparkles className={`w-4 h-4 ${plan.glowColor} animate-pulse`} />
              </div>

              {/* Highlight Popular Badge for Pack Gold */}
              {plan.popularBadge && (
                <div className="absolute top-0 left-0 z-30">
                  <span className="px-4 py-1.5 bg-gradient-to-r from-amber-300 via-yellow-400 to-amber-500 text-black text-[10px] font-black uppercase tracking-widest rounded-br-2xl shadow-xl flex items-center gap-1">
                    <Sparkles className="w-3 h-3 fill-black" />
                    <span>{plan.popularBadge}</span>
                  </span>
                </div>
              )}

              {/* Metallic 3D Top Header Badge with V-Crest Shape */}
              <div>
                <div className={`p-6 text-center shadow-2xl relative ${plan.headerBg}`}>
                  {/* Gloss Top Highlight Line */}
                  <div className="absolute top-0 left-0 right-0 h-1 bg-white/80 pointer-events-none" />
                  
                  <span className="text-xs font-black uppercase tracking-[0.25em] block mb-1 drop-shadow-xs">
                    {plan.badge}
                  </span>
                  <h3 className="font-display text-2xl font-black uppercase tracking-tight drop-shadow-xs">
                    {plan.name}
                  </h3>
                  <div className="mt-3 flex items-baseline justify-center gap-1.5">
                    <span className="font-display text-4xl sm:text-5xl font-black tracking-tight drop-shadow-md">
                      {plan.price}
                    </span>
                    <span className="text-[11px] font-bold uppercase tracking-wider opacity-90">
                      / {plan.period}
                    </span>
                  </div>

                  {/* Downward V-Peak Crest (Matching Reference Photo) */}
                  <div className={`absolute -bottom-3.5 left-1/2 -translate-x-1/2 w-0 h-0 border-l-[18px] border-l-transparent border-r-[18px] border-r-transparent border-t-[16px] ${plan.vColor} z-20 pointer-events-none drop-shadow-md`} />
                </div>

                {/* Content & Numbered Feature Checklist */}
                <div className="p-6 sm:p-7 pt-9">
                  <p className="text-xs text-slate-200 font-semibold min-h-[36px] mb-6 text-center leading-relaxed italic drop-shadow-xs">
                    {plan.tagline}
                  </p>

                  <div className="space-y-3.5 mb-8">
                    {plan.features.map((feature, fIdx) => (
                      <div
                        key={fIdx}
                        className="flex items-center justify-between gap-3 text-xs font-bold py-1.5 border-b border-white/15"
                      >
                        <div className="flex items-center gap-2.5 min-w-0">
                          {/* Sequence Number (1, 2, 3... Matching Photo) */}
                          <span className={`text-xs font-black w-4 flex-shrink-0 ${plan.glowColor} drop-shadow-xs`}>
                            {fIdx + 1}
                          </span>
                          <span
                            className={`uppercase tracking-wide leading-tight truncate ${
                              feature.included
                                ? "text-white font-extrabold"
                                : "text-slate-400 line-through decoration-slate-500 opacity-60"
                            }`}
                          >
                            {feature.text}
                          </span>
                        </div>

                        {/* Metallic Checkmark or Cross Icon (Matching Photo) */}
                        {feature.included ? (
                          <div className="w-5 h-5 rounded-full bg-emerald-400/25 text-emerald-300 border border-emerald-400/60 flex items-center justify-center flex-shrink-0 shadow-md shadow-emerald-500/20">
                            <Check className="w-3 h-3 stroke-[3]" />
                          </div>
                        ) : (
                          <div className="w-5 h-5 rounded-full bg-rose-500/15 text-rose-300 border border-rose-500/30 flex items-center justify-center flex-shrink-0">
                            <CrossIcon className="w-3 h-3 opacity-60" />
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Metallic Pill Action Button */}
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
