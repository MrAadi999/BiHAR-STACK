"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const plans = [
  {
    name: "Starter",
    tagline: "Ideal for small businesses launching their digital presence.",
    price: "₹24,999",
    period: "one-time project",
    highlight: false,
    features: [
      "Custom 5-Page Responsive Website",
      "Basic SEO & Google Business Setup",
      "Brand Identity (Logo & Palette)",
      "Social Media Creatives (10 Pack)",
      "WhatsApp Chat Widget Integration",
      "High Speed Web Hosting Setup",
      "1 Month Post-Launch Support",
    ],
    cta: "Launch Starter",
    variant: "glass" as const,
  },
  {
    name: "Growth",
    tagline: "Designed for ambitious businesses ready to scale revenue.",
    price: "₹59,999",
    period: "one-time + monthly ads opt.",
    highlight: true,
    badge: "MOST POPULAR",
    features: [
      "Full Next.js Web App / E-commerce",
      "Advanced SEO & Conversion Funnel",
      "Complete Brand Book & Motion Design",
      "Meta Ads & Google Ads Setup + Run",
      "Automated AI WhatsApp Bot (24/7)",
      "Lead Capture CRM Integration",
      "Priority 24/7 Technical Support",
      "Monthly Growth Analytics Reports",
    ],
    cta: "Start Growth Plan",
    variant: "primary" as const,
  },
  {
    name: "Enterprise",
    tagline: "Bespoke digital architecture for large organizations.",
    price: "Custom",
    period: "custom scope & retainer",
    highlight: false,
    features: [
      "Custom SaaS / Mobile App Engine",
      "Bespoke Enterprise AI Agents & Workflows",
      "Omnichannel Digital Performance Ads",
      "3D Interactive Web Animations",
      "Dedicated Project Director & Engineers",
      "SLA 99.99% Uptime & Security Audit",
      "Continuous A/B Testing & Scaling",
      "Quarterly Strategy Board Meetings",
    ],
    cta: "Contact Enterprise",
    variant: "glass" as const,
  },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-24 bg-[#f0f0f0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="TRANSPARENT VALUE"
          title="Simple, Transparent Pricing"
          subtitle="No hidden fees. Choose the right growth package for your business trajectory."
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className={`relative p-8 bg-white border-2 border-black flex flex-col justify-between transition-all duration-300 ${
                plan.highlight
                  ? "shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] lg:-translate-y-4"
                  : "shadow-sm hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              }`}
            >
              {plan.badge && (
                <span className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-black text-white text-[10px] font-black uppercase tracking-widest border border-black shadow-sm">
                  {plan.badge}
                </span>
              )}

              <div>
                <h3 className="font-display text-2xl font-black text-black uppercase mb-2">{plan.name}</h3>
                <p className="text-xs text-neutral-600 font-medium min-h-[36px] mb-6">{plan.tagline}</p>

                <div className="flex items-baseline gap-2 mb-6 pb-6 border-b-2 border-black">
                  <span className="font-display text-4xl sm:text-5xl font-black text-black">
                    {plan.price}
                  </span>
                  <span className="text-xs text-neutral-600 font-bold uppercase tracking-wider">/ {plan.period}</span>
                </div>

                <div className="space-y-3 mb-8">
                  <p className="text-[11px] font-black uppercase tracking-widest text-black mb-2">
                    What&apos;s Included:
                  </p>
                  {plan.features.map((feature) => (
                    <div key={feature} className="flex items-start gap-2.5">
                      <div className="mt-0.5 p-0.5 bg-black text-white">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-semibold text-black uppercase tracking-wide">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <a href="#contact">
                  <Button
                    variant={plan.variant}
                    size="md"
                    className="w-full"
                    icon={<ArrowRight className="w-4 h-4" />}
                  >
                    {plan.cta}
                  </Button>
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
