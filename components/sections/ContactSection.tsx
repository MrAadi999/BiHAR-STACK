"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, Send, MessageCircle, CheckCircle2 } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import Button from "@/components/ui/Button";

export default function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "Website & E-Commerce (Shop, POS Billing, QR Menu)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
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
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-slate-300 mb-2">
                      Required Service *
                    </label>
                    <select
                      value={formData.service}
                      onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl bg-slate-800/80 border border-white/10 text-white focus:outline-none focus:border-electric-500 transition-colors text-sm"
                    >
                      <option value="Website & E-Commerce (Shop, POS Billing, QR Menu)">
                        Website & E-Commerce (Shop, POS Billing, QR Menu)
                      </option>
                      <option value="Growth Marketing & Meta/Google Ads Funnel">
                        Growth Marketing & Meta/Google Ads Funnel
                      </option>
                      <option value="Local SEO & Google Maps Ranking Optimization">
                        Local SEO & Google Maps Ranking Optimization
                      </option>
                      <option value="Automated AI WhatsApp Bot & CRM Pipelines">
                        Automated AI WhatsApp Bot & CRM Pipelines
                      </option>
                      <option value="Branding, Logo & Motion Design Package">
                        Branding, Logo & Motion Design Package
                      </option>
                      <option value="Custom SaaS, Mobile App & Software Engine">
                        Custom SaaS, Mobile App & Software Engine
                      </option>
                      <option value="Full 360° All-In-One Growth Package">
                        Full 360° All-In-One Growth Package
                      </option>
                    </select>
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
                  className="w-full justify-center"
                  icon={<Send className="w-4 h-4" />}
                >
                  Send Project Inquiry
                </Button>
              </form>
            )}
          </motion.div>

          {/* Right Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 space-y-6"
          >
            {/* Contact Details Card */}
            <div className="rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 p-8 shadow-2xl space-y-6">
              <h3 className="font-display text-xl font-bold text-white mb-4">Direct Contact</h3>
              
              <div className="space-y-4">
                <a
                  href="mailto:contact@biharstack.com"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-electric-400 group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase">Email Us</div>
                    <div className="text-sm font-medium text-white">contact@biharstack.com</div>
                  </div>
                </a>

                <a
                  href="tel:+919876543210"
                  className="flex items-center gap-4 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-electric-400 group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase">Call / Support</div>
                    <div className="text-sm font-medium text-white">+91 98765 43210</div>
                  </div>
                </a>

                <div className="flex items-center gap-4 text-slate-300 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-800 border border-white/10 flex items-center justify-center text-electric-400 group-hover:scale-110 transition-transform">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-xs font-semibold text-slate-400 uppercase">HQ Office</div>
                    <div className="text-sm font-medium text-white">Boring Road & IT Park, Patna, Bihar</div>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp CTA Button */}
              <div className="pt-4 border-t border-white/10">
                <a
                  href="https://wa.me/919876543210?text=Hi%20BiharStack,%20I%20want%20to%20discuss%20a%20project"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-6 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-black font-black text-xs uppercase tracking-widest flex items-center justify-center gap-3 transition-all duration-300 shadow-lg shadow-emerald-500/20"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Chat Direct on WhatsApp</span>
                </a>
              </div>
            </div>

            {/* SLA Callout */}
            <div className="rounded-2xl bg-gradient-to-r from-electric-900/50 via-slate-900/50 to-slate-900/50 border border-electric-500/20 p-6">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-xs font-bold uppercase tracking-wider text-electric-300">Quick Response Guarantee</span>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                We respond to all project inquiries within <strong className="text-slate-200">2 business hours</strong> with a technical roadmap & preliminary scope estimate.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
