"use client";

import { motion } from "framer-motion";
import { TrendingUp, Palette, Code2, Bot, ArrowRight, Check } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const services = [
  {
    id: "digital-marketing",
    icon: <TrendingUp className="w-7 h-7 text-black" />,
    title: "Digital Marketing & Performance",
    subtitle: "Data-driven marketing campaigns designed to generate high-intent leads and dominate your local and global market.",
    items: [
      "Social Media Marketing",
      "Performance Marketing",
      "Meta Ads & Google Ads",
      "Search Engine Optimization (SEO)",
      "Local SEO & GMB Ranking",
      "High-Converting Lead Gen",
      "Influencer Outreach",
      "Automated Email Campaigns",
    ],
  },
  {
    id: "branding-creative",
    icon: <Palette className="w-7 h-7 text-black" />,
    title: "Branding & Creative Design",
    subtitle: "Distinctive brand identities and visual assets that captivate audiences and establish market leadership.",
    items: [
      "Logo & Visual Brand Identity",
      "Graphic & Social Media Creatives",
      "UI/UX Design for Web & Apps",
      "Motion Graphics & 3D Visuals",
      "High-Production Video Editing",
      "Product Branding & Packaging",
      "Brand Guidelines & Voice",
      "Marketing Collaterals",
    ],
  },
  {
    id: "website-technology",
    icon: <Code2 className="w-7 h-7 text-black" />,
    title: "Website & Custom Technology",
    subtitle: "Blazing fast, pixel-perfect, scalable web and mobile applications tailored to your exact business workflow.",
    items: [
      "Custom Business Websites",
      "E-commerce Platforms (Shopify/Next)",
      "High-Converting Landing Pages",
      "Full-Stack Custom Web Apps",
      "iOS & Android Mobile Apps",
      "SaaS Platform Development",
      "REST & GraphQL API Integration",
      "Speed & Core Web Vitals Optimization",
    ],
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-7 h-7 text-black" />,
    title: "AI & Workflow Automation",
    subtitle: "Cutting-edge artificial intelligence solutions that streamline operations, reduce overhead, and boost response times 24/7.",
    items: [
      "Custom AI Chatbots & Knowledge Bases",
      "WhatsApp & CRM Automation",
      "Business Process Automation",
      "Autonomous AI Agents",
      "AI Content & Asset Creation Pipelines",
      "Zapier / Make Workflow Automation",
      "Lead Enrichment & Auto-Nurturing",
      "Bespoke Enterprise AI Integration",
    ],
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-24 bg-[#f0f0f0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-6">
          <div className="flex-1">
            <SectionHeading
              badge="OUR CAPABILITIES"
              title="What We Do"
              subtitle="End-to-end digital solutions built for modern businesses aiming for exponential growth."
            />
          </div>
          
          {/* Coder Photo (Shifted from 2nd Page to 3rd Page) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            animate={{ 
              y: [0, -10, 0],
              rotate: [0, -2, 0, 2, 0] 
            }}
            transition={{ 
              y: { duration: 4.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" },
              rotate: { duration: 6.5, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
            }}
            whileHover={{ scale: 1.08, rotate: -2 }}
            className="relative cursor-pointer select-none max-w-[240px] sm:max-w-[280px] -mt-6 lg:-mt-12"
          >
            <img 
              src="/images/coder_user.png" 
              alt="Bihar Stack Coder" 
              className="w-full h-auto object-contain mix-blend-multiply drop-shadow-xl"
            />
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, amount: 0.15 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -6 }}
              className="relative rounded-none bg-white border-2 border-black p-8 shadow-sm hover:shadow-[10px_10px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 group flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="p-3 bg-[#f0f0f0] border border-black group-hover:bg-black group-hover:text-white transition-colors duration-300">
                    {service.icon}
                  </div>
                  <span className="text-xs font-mono font-bold text-neutral-400 group-hover:text-black transition-colors">0{index + 1}</span>
                </div>

                <h3 className="font-display text-2xl font-black text-black uppercase mb-3">
                  {service.title}
                </h3>
                <p className="text-xs text-neutral-700 font-medium leading-relaxed mb-6">
                  {service.subtitle}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 mb-8">
                  {service.items.map((item) => (
                    <div key={item} className="flex items-start gap-2">
                      <div className="mt-0.5 p-0.5 bg-black text-white group-hover:scale-110 transition-transform">
                        <Check className="w-3 h-3" />
                      </div>
                      <span className="text-xs font-semibold text-neutral-900 uppercase tracking-wide">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-neutral-200 flex items-center justify-between">
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-black hover:text-neutral-600 transition-colors"
                >
                  <span>Learn More & Start</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1.5 transition-transform" />
                </a>
                <span className="text-[10px] font-bold uppercase tracking-wider text-neutral-500">Custom Built</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
