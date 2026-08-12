"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2, ChevronDown, Check,
  TrendingUp, Palette, Code2, Bot
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

const serviceCategories = [
  {
    id: "digital_marketing",
    name: "1. Digital Marketing & Performance",
    icon: TrendingUp,
    iconColor: "text-emerald-400",
    subFeatures: [
      "Meta Lead Generation Ads (Facebook & Instagram)",
      "Google Search & Keyword Bidding Campaigns",
      "Local SEO & Google Maps (GMB) Top 3 Ranking",
      "WhatsApp Direct Sales & Broadcast Campaigns",
      "Performance Retargeting & Pixel Tracking",
      "YouTube Video Ads & Channel Growth",
      "E-Commerce ROAS Scaling & Conversion Funnel",
      "Influencer & Regional Creator Marketing",
      "Monthly Growth Analytics & ROI Reporting",
    ],
  },
  {
    id: "branding",
    name: "2. Branding & Creative Design",
    icon: Palette,
    iconColor: "text-purple-400",
    subFeatures: [
      "Custom Logo & Brand Identity Guidelines",
      "Social Media Post Creatives & Ad Banners",
      "3D Motion Graphics & Promo Intro Videos",
      "Product Packaging & Label Artwork Design",
      "Business Cards, Letterheads & Brand Assets",
      "UI/UX Wireframing & App Prototype Design",
      "Flex Banners, Hoardings & Outdoor Ads Design",
      "Digital Product Catalog & Menu Cards",
      "Brand Storytelling & Copywriting Assets",
    ],
  },
  {
    id: "website_tech",
    name: "3. Website & Custom Technology",
    icon: Code2,
    iconColor: "text-electric-400",
    subFeatures: [
      "Custom 5-Page Responsive Business Website",
      "Full E-Commerce Store & WhatsApp Order Sync",
      "Contactless QR Menu & Kitchen Order System",
      "POS Billing Software & Inventory Sync",
      "Coaching Test Series & Online LMS Portal",
      "Doctor Patient Token & Appointment Portal",
      "Real Estate 3D Property Walkthrough Site",
      "Custom SaaS Platform & Mobile App Engine",
      "High-Speed Web Hosting & SSL Domain Setup",
    ],
  },
  {
    id: "ai_automation",
    name: "4. AI & Workflow Automation",
    icon: Bot,
    iconColor: "text-amber-400",
    subFeatures: [
      "24/7 Automated WhatsApp AI Sales Bot",
      "Automated SMS & WhatsApp Payment Reminders",
      "Lead Capture CRM & Follow-up Pipeline",
      "AEPS Aadhaar Cash Withdrawal & Loan App",
      "AI Voice Call Agent & Auto Appointment Booker",
      "Automated WhatsApp PDF Invoice Generator",
      "Inventory & Order Auto-Sync Across Branches",
      "Custom Enterprise AI Agents & Workflows",
      "API Integrations (Razorpay, PhonePe, Zoho)",
    ],
  },
];

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [expandedCategoryId, setExpandedCategoryId] = useState<string | null>(null);
  const dropdownRef = useRef<HTMLDivElement>(null);
  
  // No default ticks! Manually selected by user.
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedSubFeatures, setSelectedSubFeatures] = useState<string[]>([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  // Auto-close dropdown & reset open sub-drawers when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false);
        setExpandedCategoryId(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const toggleCategory = (categoryId: string) => {
    const category = serviceCategories.find((c) => c.id === categoryId);
    if (!category) return;

    if (selectedCategories.includes(categoryId)) {
      // Untick category -> remove subfeatures & collapse drawer IMMEDIATELY!
      setSelectedCategories(selectedCategories.filter((id) => id !== categoryId));
      setSelectedSubFeatures(
        selectedSubFeatures.filter((sf) => !category.subFeatures.includes(sf))
      );
      if (expandedCategoryId === categoryId) {
        setExpandedCategoryId(null);
      }
    } else {
      // Tick category -> expand its relative subfeatures drawer!
      setSelectedCategories([...selectedCategories, categoryId]);
      setExpandedCategoryId(categoryId);
    }
  };

  const toggleSubFeature = (subFeature: string) => {
    if (selectedSubFeatures.includes(subFeature)) {
      setSelectedSubFeatures(selectedSubFeatures.filter((sf) => sf !== subFeature));
    } else {
      setSelectedSubFeatures([...selectedSubFeatures, subFeature]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  // Get display text for input trigger box
  const getSelectedSummaryText = () => {
    const activeCats = serviceCategories.filter((c) => selectedCategories.includes(c.id));
    if (activeCats.length === 0) return "Select Required Services & Features...";
    
    const catNames = activeCats.map((c) => c.name.replace(/^\d+\.\s*/, "")).join(", ");
    return `${catNames} (${selectedSubFeatures.length} options selected)`;
  };

  return (
    <section id="contact" className="pt-4 sm:pt-8 pb-14 sm:pb-18 bg-navy-950 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-electric-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-glow-cyan/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something Great"
          subtitle="Ready to scale your business with modern tech, marketing, and AI? Talk to our core engineering & strategy team."
          className="mb-4 sm:mb-6 text-white"
        />

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 shadow-2xl"
          >
            {submitted ? (
              <div className="text-center py-16 flex flex-col items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-display text-2xl font-bold text-white mb-2">Message Received!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto mb-6">
                  Thank you for reaching out to BiharStack. Our lead strategist will get back to you within 2 business hours.
                </p>
                <Button variant="glass" size="md" onClick={() => setSubmitted(false)}>
                  Send Another Message
                </Button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Rahul Kumar"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 transition-colors text-sm"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="rahul@company.com"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98765 43210"
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 transition-colors text-sm"
                    />
                  </div>

                  {/* Interactive Custom Required Service Dropdown & Matching Service Icons */}
                  <div className="relative" ref={dropdownRef}>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Required Service *
                    </label>
                    
                    {/* Trigger Box with Down Arrow */}
                    <button
                      type="button"
                      onClick={() => {
                        setIsDropdownOpen(!isDropdownOpen);
                        if (isDropdownOpen) setExpandedCategoryId(null);
                      }}
                      className={`w-full px-4 py-3 rounded-xl bg-slate-800/80 border transition-colors text-sm flex items-center justify-between text-left cursor-pointer ${
                        selectedCategories.length > 0
                          ? "border-electric-500 text-white"
                          : "border-white/10 text-slate-400"
                      }`}
                    >
                      <span className="truncate pr-2 font-medium">
                        {getSelectedSummaryText()}
                      </span>
                      <ChevronDown
                        className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-300 ${
                          isDropdownOpen ? "rotate-180 text-electric-400" : ""
                        }`}
                      />
                    </button>

                    {/* Expandable Dropdown Menu */}
                    <AnimatePresence>
                      {isDropdownOpen && (
                        <motion.div
                          initial={{ opacity: 0, y: -10, scale: 0.98 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: -10, scale: 0.98 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-0 right-0 top-full mt-2 z-50 rounded-2xl bg-slate-900 border-2 border-electric-500/50 shadow-2xl p-4 space-y-3 max-h-[420px] overflow-y-auto custom-scrollbar"
                        >
                          <p className="text-[11px] font-black uppercase tracking-wider text-slate-400 border-b border-white/10 pb-2 flex items-center justify-between">
                            <span>Select Category & Features:</span>
                            <span className="text-electric-400 text-[10px] font-bold">
                              {selectedCategories.length} Categories Active
                            </span>
                          </p>

                          {serviceCategories.map((cat) => {
                            const isCatSelected = selectedCategories.includes(cat.id);
                            const isExpanded = isCatSelected && expandedCategoryId === cat.id;
                            const IconComponent = cat.icon;

                            return (
                              <div
                                key={cat.id}
                                className={`rounded-xl border transition-all overflow-hidden ${
                                  isCatSelected
                                    ? "border-electric-500/50 bg-slate-800/90"
                                    : "border-white/10 bg-slate-800/40"
                                }`}
                              >
                                {/* Main Category Bar with Work-specific Icon & Checkbox */}
                                <button
                                  type="button"
                                  onClick={() => toggleCategory(cat.id)}
                                  className={`w-full p-3 flex items-center justify-between text-left text-xs sm:text-sm font-extrabold transition-colors cursor-pointer ${
                                    isCatSelected
                                      ? "bg-electric-600/25 text-white border-b border-electric-500/30"
                                      : "text-slate-300 hover:bg-slate-800 hover:text-white"
                                  }`}
                                >
                                  <span className="flex items-center gap-2.5">
                                    <IconComponent className={`w-4 h-4 ${cat.iconColor} shrink-0`} />
                                    <span>{cat.name}</span>
                                  </span>

                                  <div className="flex items-center gap-2">
                                    <div
                                      className={`w-4 h-4 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                        isCatSelected
                                          ? "bg-electric-500 border-electric-400 text-black"
                                          : "border-slate-500 bg-slate-900"
                                      }`}
                                    >
                                      {isCatSelected && <Check className="w-3 h-3 text-black stroke-[3]" />}
                                    </div>

                                    {isCatSelected && (
                                      <ChevronDown
                                        className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-300 ${
                                          isExpanded ? "rotate-180 text-amber-400" : ""
                                        }`}
                                      />
                                    )}
                                  </div>
                                </button>

                                {/* Expand Relative Sub-Features when Category is Active & Expanded */}
                                <AnimatePresence>
                                  {isExpanded && (
                                    <motion.div
                                      initial={{ opacity: 0, height: 0 }}
                                      animate={{ opacity: 1, height: "auto" }}
                                      exit={{ opacity: 0, height: 0 }}
                                      transition={{ duration: 0.2 }}
                                      className="p-3 bg-slate-900/95 space-y-2"
                                    >
                                      <p className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mb-1">
                                        All Features ({cat.name.replace(/^\d+\.\s*/, "")}):
                                      </p>

                                      <div className="grid grid-cols-1 gap-1.5">
                                        {cat.subFeatures.map((sf) => {
                                          const isSfSelected = selectedSubFeatures.includes(sf);

                                          return (
                                            <button
                                              key={sf}
                                              type="button"
                                              onClick={() => toggleSubFeature(sf)}
                                              className={`p-2.5 rounded-lg border text-xs font-semibold flex items-center justify-between text-left transition-all cursor-pointer ${
                                                isSfSelected
                                                  ? "bg-amber-500/20 border-amber-400/60 text-amber-200"
                                                  : "bg-slate-800/40 border-white/5 text-slate-400 hover:bg-slate-800 hover:text-slate-200"
                                              }`}
                                            >
                                              <span className="truncate pr-2">✓ {sf}</span>

                                              <div
                                                className={`w-3.5 h-3.5 rounded border flex items-center justify-center shrink-0 transition-colors ${
                                                  isSfSelected
                                                    ? "bg-amber-400 border-amber-300 text-black"
                                                    : "border-slate-600 bg-slate-900"
                                                }`}
                                              >
                                                {isSfSelected && <Check className="w-2.5 h-2.5 text-black stroke-[3]" />}
                                              </div>
                                            </button>
                                          );
                                        })}
                                      </div>
                                    </motion.div>
                                  )}
                                </AnimatePresence>
                              </div>
                            );
                          })}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                    Project Details & Goals *
                  </label>
                  <textarea
                    rows={4}
                    required
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your business, current bottlenecks, and target timeline..."
                    className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-electric-500 transition-colors text-sm"
                  />
                </div>

                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  className="w-full shadow-blue-glow"
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Inquiry Now
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right Info & Dark Styled Google Map */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Quick Contact Cards */}
            <div className="p-6 rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 space-y-4">
              <h4 className="font-display text-lg font-bold text-white mb-4">Direct Communication</h4>

              <a
                href="https://wa.me/919876543210"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3.5 rounded-xl bg-emerald-500/10 border border-emerald-500/30 hover:bg-emerald-500/20 transition-colors group"
              >
                <div className="p-2.5 rounded-lg bg-emerald-500 text-white group-hover:scale-105 transition-transform">
                  <MessageCircle className="w-5 h-5 fill-current" />
                </div>
                <div>
                  <p className="text-xs text-emerald-400 font-semibold uppercase tracking-wider">Instant Chat</p>
                  <p className="text-sm font-bold text-white">WhatsApp Us Directly</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-white/5">
                <div className="p-2.5 rounded-lg bg-electric-600/20 text-electric-400">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Phone Hotline</p>
                  <p className="text-sm font-semibold text-white">+91 98765 43210</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-white/5">
                <div className="p-2.5 rounded-lg bg-glow-cyan/20 text-glow-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Official Email</p>
                  <p className="text-sm font-semibold text-white">contact@biharstack.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-white/5">
                <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Innovation Hub</p>
                  <p className="text-sm font-semibold text-white">Boring Road & IT Park, Patna, Bihar</p>
                </div>
              </div>
            </div>

            {/* Embedded Dark Styled Google Map */}
            <div className="rounded-2xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-2 overflow-hidden shadow-lg h-60">
              <iframe
                title="BiharStack Headquarters Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d115133.01016833918!2d85.07300184478149!3d25.60817557110196!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed58dce6732867%3A0x4059f39a1ac82f06!2sPatna%2C%20Bihar!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) contrast(1.2)" }}
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-xl"
              />
            </div>

          </motion.div>

        </div>
      </div>
    </section>
  );
}
