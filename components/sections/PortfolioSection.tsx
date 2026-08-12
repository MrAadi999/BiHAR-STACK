"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, MapPin, Zap } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

const categories = [
  "All",
  "Healthcare & Clinics",
  "Education & EdTech",
  "Restaurants & Hospitality",
  "Real Estate & Builders",
  "Retail & E-Commerce",
  "Finance & FinTech",
  "Manufacturing & Industrial",
  "Startups & SaaS",
];

const projects = [
  {
    id: 1,
    title: "Medishala Health Telemedicine Network",
    category: "Healthcare & Clinics",
    location: "Patna & Muzaffarpur, Bihar",
    impact: "100+ Clinics Connected",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=900&auto=format&fit=crop&q=80",
    description: "Comprehensive digital health portal & EHR tele-consultation system connecting rural Bihar patients with top Patna specialist doctors and medical SEO.",
    tags: ["Telehealth Portals", "Appointment Systems", "Medical SEO"],
  },
  {
    id: 2,
    title: "Zrotam Tech LMS & Skill Academy",
    category: "Education & EdTech",
    location: "Patna, Bihar",
    impact: "12,000+ Students Enrolled",
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?w=900&auto=format&fit=crop&q=80",
    description: "Full-stack LMS portal with automated student lead generation, live cohort video classrooms, and cross-platform mobile apps for tech skills.",
    tags: ["LMS Platforms", "Student Lead Funnel", "Mobile Apps"],
  },
  {
    id: 3,
    title: "Bihari Zaika Digital QR & Delivery Network",
    category: "Restaurants & Hospitality",
    location: "Patna & Gaya, Bihar",
    impact: "85+ Dining Outlets Onboarded",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80",
    description: "Contactless QR menu ordering, Zomato/Swiggy delivery API integration, and hyper-local footfall ad campaigns for top dining spots in Bihar.",
    tags: ["QR Menus", "Delivery API", "Local Footfall Ads"],
  },
  {
    id: 4,
    title: "Maurya Heights & UrbanRealty 3D",
    category: "Real Estate & Builders",
    location: "Patna & Bhagalpur, Bihar",
    impact: "₹45Cr+ Property Sales",
    image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80",
    description: "Interactive 3D virtual walkthrough web platform, architectural floor plan visualizer, and high-intent buyer lead funnels for real estate builders.",
    tags: ["Virtual Walkthroughs", "3D Real Estate", "Lead Funnels"],
  },
  {
    id: 5,
    title: "Bihart Handloom & Silk E-Store",
    category: "Retail & E-Commerce",
    location: "Madhubani & Bhagalpur",
    impact: "500+ Artisans Exporting",
    image: "https://images.unsplash.com/photo-1556742049-0a67daf4005a?w=900&auto=format&fit=crop&q=80",
    description: "Shopify Plus e-commerce storefront, real-time multi-warehouse inventory sync, and high-ROAS performance marketing for authentic Madhubani handloom.",
    tags: ["Shopify Plus", "Inventory Sync", "Performance Marketing"],
  },
  {
    id: 6,
    title: "PayGram FinTech & Rural Micro-Loans",
    category: "Finance & FinTech",
    location: "Patna, Bihar",
    impact: "₹120Cr+ Processed",
    image: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=900&auto=format&fit=crop&q=80",
    description: "Bank-grade encrypted web dashboard with instant Aadhaar KYC verification, loan approval analytics, and automated CRM workflows for micro-finance.",
    tags: ["Secure Dashboards", "KYC Verification", "Automated CRM"],
  },
  {
    id: 7,
    title: "BiharAgri Export & Industrial B2B Portal",
    category: "Manufacturing & Industrial",
    location: "Muzaffarpur & Hajipur",
    impact: "12+ Countries Exporting",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=900&auto=format&fit=crop&q=80",
    description: "B2B digital product catalog, automated RFQ quotation engine, and targeted global buyer export marketing campaigns for Bihar food processing units.",
    tags: ["B2B Catalogs", "RFQ Quotations", "Global Export SEO"],
  },
  {
    id: 8,
    title: "RodBez Intercity SaaS & Mobility Platform",
    category: "Startups & SaaS",
    location: "Patna, Bihar (Shark Tank India)",
    impact: "38 Districts Scaled",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=900&auto=format&fit=crop&q=80",
    description: "Rapid MVP buildout, high-converting investor pitchdeck design, and scalable Next.js multi-tenant SaaS cloud architecture for Bihar's top cab aggregator.",
    tags: ["MVP Buildout", "Pitchdeck Design", "SaaS Scaling"],
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
