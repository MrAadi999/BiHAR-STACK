"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const testimonials = [
  {
    name: "Vikramaditya Singh",
    role: "CEO, Maurya Healthcare Group",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "BiharStack completely transformed our online presence and patient booking pipeline. Our appointments increased by 310% in just 90 days. Their engineering speed and AI WhatsApp automation are second to none.",
  },
  {
    name: "Ananya Sharma",
    role: "Founder, Zesty Bites Chain",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "The level of design polish BiharStack delivered feels like a Silicon Valley agency, but with deep local understanding. Their Meta ad campaigns gave us our highest ROI ever recorded.",
  },
  {
    name: "Rajesh K. Verma",
    role: "Managing Director, UrbanRealty Patna",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&auto=format&fit=crop&q=80",
    rating: 5,
    quote:
      "Working with BiharStack was seamless. They built our 3D web platform on Next.js 14 within 3 weeks. They are truly putting Bihar on the global tech map!",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-navy-950/80 border-t border-white/5 relative overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-80 bg-electric-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <SectionHeading
          badge="CLIENT SUCCESS STORIES"
          title="What Clients Say"
          subtitle="Don't just take our word for it. Here is how BiharStack drives measurable growth for partners."
          className="mb-4 sm:mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <motion.div
              key={test.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative p-8 rounded-3xl bg-slate-900/60 backdrop-blur-xl border border-white/10 hover:border-electric-500/40 hover:shadow-blue-glow transition-all duration-300 flex flex-col justify-between group"
            >
              <Quote className="w-10 h-10 text-electric-500/20 mb-4 group-hover:text-electric-500/40 transition-colors" />

              <div className="mb-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-sm text-slate-200 leading-relaxed italic">
                  &quot;{test.quote}&quot;
                </p>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-slate-800">
                <img
                  src={test.avatar}
                  alt={test.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-electric-500/40"
                />
                <div>
                  <h4 className="font-display text-base font-bold text-white group-hover:text-glow-sky transition-colors">
                    {test.name}
                  </h4>
                  <p className="text-xs text-slate-400">{test.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
