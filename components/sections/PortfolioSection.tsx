"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MapPin, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = ["All", "Websites", "Branding", "Marketing", "AI Projects"];

const projects = [
  {
    id: 1,
    title: "DeHaat Kisan AI AgTech Engine",
    category: "AI Projects",
    location: "Patna, Bihar",
    impact: "1.5M+ Farmers Powered",
    image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?w=900&auto=format&fit=crop&q=80",
    description: "Bihar's leading AgTech unicorn ecosystem delivering satellite GIS crop advisory, AI plant disease diagnosis, and direct mandi supply chain logistics.",
    tags: ["Next.js 14", "Python AI", "Satellite GIS"],
  },
  {
    id: 2,
    title: "RodBez Intercity Mobility Platform",
    category: "Websites",
    location: "Patna, Bihar (Shark Tank India)",
    impact: "38 Districts Connected",
    image: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?w=900&auto=format&fit=crop&q=80",
    description: "Founded by Dilkhush Kumar in Patna, RodBez is Bihar's premier taxi aggregation portal offering one-way intercity cab bookings at 50% reduced cost.",
    tags: ["React Native", "Node.js", "GPS Tracking"],
  },
  {
    id: 3,
    title: "Bihart Global Madhubani Marketplace",
    category: "Branding",
    location: "Madhubani & Patna",
    impact: "500+ Local Artisans Exporting",
    image: "https://images.unsplash.com/photo-1579783902614-a3fb3927b675?w=900&auto=format&fit=crop&q=80",
    description: "End-to-end luxury digital brand identity & global e-commerce store showcasing authentic Madhubani handloom, Sikki craft, and Bhagalpuri silk worldwide.",
    tags: ["Brand Identity", "Shopify Plus", "3D Gallery"],
  },
  {
    id: 4,
    title: "Medishala Rural Telemedicine Portal",
    category: "Websites",
    location: "Muzaffarpur & Patna",
    impact: "100+ Rural Clinics Hubs",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80",
    description: "Low-bandwidth tele-consultation platform connecting rural patients in tier-3 Bihar villages with top Patna specialist doctors and automated EHR prescriptions.",
    tags: ["React", "WebRTC", "HIPAA Health"],
  },
  {
    id: 5,
    title: "Sattuz D2C Performance Ad Campaign",
    category: "Marketing",
    location: "Patna, Bihar",
    impact: "6.5x ROAS & 45K+ Orders",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf4005a?w=900&auto=format&fit=crop&q=80",
    description: "High-converting performance marketing funnel & D2C brand strategy bringing Bihar's native sattu superfood beverage to pan-India quick commerce retail.",
    tags: ["Meta Ads", "Google Ads", "D2C Funnel"],
  },
  {
    id: 6,
    title: "KalaPrabhat AI Heritage Archiving Engine",
    category: "AI Projects",
    location: "Nalanda & Bodh Gaya",
    impact: "10K+ Ancient Texts Digitized",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=900&auto=format&fit=crop&q=80",
    description: "Cutting-edge computer vision & Custom LLM engine preserving ancient Pali/Sanskrit manuscripts and generating interactive 3D virtual monument tours.",
    tags: ["OpenAI API", "PyTorch", "Three.js"],
  },
  {
    id: 7,
    title: "Zrotam Tech Skill & Hiring Portal",
    category: "Websites",
    location: "Patna, Bihar",
    impact: "12,000+ Students Trained",
    image: "https://images.unsplash.com/photo-1531403009284-440f080d1e12?w=900&auto=format&fit=crop&q=80",
    description: "Full-stack EdTech LMS platform empowering Bihar's tech talent with interactive code playgrounds, live cohort webinars, and AI resume screening.",
    tags: ["Next.js 14", "Tailwind CSS", "Monaco IDE"],
  },
  {
    id: 8,
    title: "Discover Bihar AI Travel Guide",
    category: "Marketing",
    location: "Bodh Gaya & Rajgir",
    impact: "250K+ Monthly Tourists",
    image: "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?w=900&auto=format&fit=crop&q=80",
    description: "Multilingual AI travel companion & SEO marketing engine offering personalized heritage itineraries, smart hotel bookings, and audio-guided temple tours.",
    tags: ["AI Travel Agent", "SEO Funnel", "WebXR"],
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

                  <div className="absolute top-3 left-3 flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-black text-white shadow-sm">
                      {project.category}
                    </span>
                    <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-black border border-black shadow-sm flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{project.location}</span>
                    </span>
                  </div>

                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/50 backdrop-blur-xs transition-opacity duration-300">
                    <span className="inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest border border-black shadow-lg">
                      <span>View Case Study</span>
                      <ExternalLink className="w-4 h-4" />
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6 flex-grow flex flex-col justify-between">
                  <div>
                    {/* Impact Metric Badge */}
                    <div className="mb-2.5 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-[11px] font-bold">
                      <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
                      <span>{project.impact}</span>
                    </div>

                    <h3 className="font-display text-xl font-black text-black uppercase mb-2 leading-tight">
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
