"use client";

import { motion } from "framer-motion";
import SectionHeading from "@/components/ui/SectionHeading";
import SolarSystem from "@/components/ui/SolarSystem";

export default function SolarServicesSection() {
  return (
    <section id="solar-services" className="pt-0 pb-8 bg-[#f0f0f0] text-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="10X GROWTH &bull; SOLAR SYSTEM SERVICES"
          title="Interactive Service Ecosystem"
          subtitle="Explore our core capabilities orbiting around digital transformation. Hover over any planet or moon to pause the orbit and inspect specialized capabilities."
        />

        {/* Solar System Interactive Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex justify-center -mt-10 overflow-visible"
        >
          <SolarSystem centerTitle="10X GROWTH" />
        </motion.div>

        {/* Quick Legend / Badges */}
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4 text-xs font-bold uppercase tracking-wider text-black">
          <span className="flex items-center gap-2 bg-white border border-black px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-slate-500 border border-black"></span> SEO
          </span>
          <span className="flex items-center gap-2 bg-white border border-black px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-500 border border-black"></span> Digital Marketing
          </span>
          <span className="flex items-center gap-2 bg-white border border-black px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-pink-500 border border-black"></span> Creative
          </span>
          <span className="flex items-center gap-2 bg-white border border-black px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-teal-500 border border-black"></span> Technology
          </span>
          <span className="flex items-center gap-2 bg-white border border-black px-3.5 py-1.5 rounded-full shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-purple-500 border border-black"></span> AI &amp; Automation
          </span>
        </div>
      </div>
    </section>
  );
}
