"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Websites", "Branding", "Marketing", "AI Projects"];

const projects = [
  {
    id: 1,
    title: "Apex Horizon SaaS Platform",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=80",
    description: "Next.js 14 web app with real-time financial analytics, minimalist design system, and multi-tenant subdomains.",
    tags: ["Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    id: 2,
    title: "Patna HealthHub Telemedicine App",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&auto=format&fit=crop&q=80",
    description: "Comprehensive patient booking & remote video consultation portal for healthcare provider network in Bihar.",
    tags: ["React", "Node.js", "WebRTC"],
  },
  {
    id: 3,
    title: "Maurya Global Rebranding",
    category: "Branding",
    image: "https://images.unsplash.com/photo-1600132806370-bf17e65e942f?w=800&auto=format&fit=crop&q=80",
    description: "End-to-end luxury identity redesign, brand guidelines, packaging, and digital motion graphics logo.",
    tags: ["Brand Identity", "UI/UX", "3D Design"],
  },
  {
    id: 4,
    title: "BiharAgri Performance Meta Campaign",
    category: "Marketing",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&auto=format&fit=crop&q=80",
    description: "High-scale ad funnel generating 45,000+ verified B2B leads across 12 Indian states with 6.2x ROAS.",
    tags: ["Meta Ads", "Google Ads", "Funnel SEO"],
  },
  {
    id: 5,
    title: "SmartSupport AI WhatsApp Agent",
    category: "AI Projects",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=80",
    description: "Autonomous AI chatbot trained on custom enterprise docs, resolving 85% of customer queries instantly.",
    tags: ["OpenAI API", "WhatsApp API", "Python"],
  },
  {
    id: 6,
    title: "UrbanRealty Luxury Property Portal",
    category: "Websites",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop&q=80",
    description: "3D virtual walkthrough real-estate web platform with integrated CRM lead capturing.",
    tags: ["Three.js", "Next.js", "Tailwind CSS"],
  },
];

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section id="portfolio" className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#f0f0f0] relative overflow-hidden border-t border-black/5">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="CASE STUDIES"
          title="Our Work"
          subtitle="Explore recent digital platforms, branding overhauls, and AI solutions crafted by BiharStack."
          className="mb-8 sm:mb-10"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-8 sm:mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 ${
                activeCategory === category
                  ? "bg-black text-white border border-black shadow-md"
                  : "bg-white text-black border border-neutral-300 hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative bg-white border-2 border-black overflow-hidden flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300"
              >
                {/* Image Container */}
                <div className="relative h-56 w-full overflow-hidden border-b-2 border-black">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />

                  <span className="absolute top-4 left-4 px-3 py-1 text-[10px] font-bold uppercase tracking-widest bg-black text-white">
                    {project.category}
                  </span>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest border border-black">
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    <h3 className="font-display text-xl font-black text-black uppercase mb-2">
                      {project.title}
                    </h3>
                    <p className="text-xs text-neutral-700 font-medium leading-relaxed mb-4">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 bg-[#f0f0f0] border border-neutral-300 text-[10px] font-bold uppercase tracking-wider text-black"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
