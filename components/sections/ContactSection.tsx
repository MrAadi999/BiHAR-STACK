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
    service: "Digital Marketing",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 bg-navy-950 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-electric-600/10 rounded-full blur-[110px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-glow-cyan/10 rounded-full blur-[110px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="GET IN TOUCH"
          title="Let's Build Something Great"
          subtitle="Ready to scale your business with modern tech, marketing, and AI? Talk to our core engineering & strategy team."
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
                      <option value="Digital Marketing">Digital Marketing & Meta/Google Ads</option>
                      <option value="Branding & Creative">Branding & Creative Design</option>
                      <option value="Website & Technology">Website & Custom App Dev</option>
                      <option value="AI & Automation">AI & Workflow Automation</option>
                      <option value="Full Growth Package">Full 360° Growth Package</option>
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
                href="https://wa.me/919999999999"
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
                  <p className="text-sm font-semibold text-white">+91 99999 99999</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-white/5">
                <div className="p-2.5 rounded-lg bg-glow-cyan/20 text-glow-cyan">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Official Email</p>
                  <p className="text-sm font-semibold text-white">hello@biharstack.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-white/5">
                <div className="p-2.5 rounded-lg bg-purple-600/20 text-purple-400">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-[11px] text-slate-400">Innovation Hub</p>
                  <p className="text-sm font-semibold text-white">Patna, Bihar, India (Serving Globally)</p>
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
