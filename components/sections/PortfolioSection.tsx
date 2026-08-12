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
    title: "Parihan Saree Emporium & Garment Store",
    category: "Retail & E-Commerce",
    location: "BakarGanj & Boring Road, Patna",
    impact: "Online Store & Billing App",
    image: "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&auto=format&fit=crop&q=80",
    description: "Traditional saree & ethnic wear shop transformed with custom billing POS, WhatsApp catalog ordering, Shopify online storefront, and inventory barcode sync.",
    tags: ["Kapda Dukaan", "Shopify E-Commerce", "WhatsApp Catalog"],
  },
  {
    id: 2,
    title: "GlamCut Unisex Salon & Hair Studio",
    category: "Startups & SaaS",
    location: "Kankarbagh, Patna",
    impact: "3,500+ Monthly Bookings",
    image: "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop&q=80",
    description: "Modern unisex salon equipped with automated SMS appointment scheduling, digital service menu tablet, customer loyalty rewards app, and Instagram ads.",
    tags: ["Saloon App", "Online Appointment", "Loyalty CRM"],
  },
  {
    id: 3,
    title: "Apex Coaching Institute & Study Library",
    category: "Education & EdTech",
    location: "Musallahpur Hat & Bikramganj, Patna",
    impact: "1,200+ Students Enrolled",
    image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
    description: "Popular competitive exam coaching & 24x7 self-study library with online test series portal, student attendance app, and automated fee reminder system.",
    tags: ["Study Center", "Online Test Portal", "Student App"],
  },
  {
    id: 4,
    title: "Dr. Verma Clinic & Diagnostic Center",
    category: "Healthcare & Clinics",
    location: "Baily Road, Patna & Muzaffarpur",
    impact: "150+ Daily Patient Visits",
    image: "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80",
    description: "Multi-specialty family clinic & pathology lab with online doctor token booking, digital prescription printing, lab test report download, and local SEO.",
    tags: ["Doctor Clinic", "Patient Token App", "Local Clinic SEO"],
  },
  {
    id: 5,
    title: "Bihari Zaika Family Restaurant & Sweets",
    category: "Restaurants & Hospitality",
    location: "Fraser Road, Patna & Gaya",
    impact: "500+ Daily Orders",
    image: "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80",
    description: "Famous local dining restaurant & sweet shop with digital QR table menus, Kitchen Display System (KDS), Zomato/Swiggy order sync, and Google Maps ranking.",
    tags: ["Restaurant & Sweets", "QR Menu", "Zomato Sync"],
  },
  {
    id: 6,
    title: "Patna City Real Estate & Property Dealers",
    category: "Real Estate & Builders",
    location: "Danapur & Saguna More, Patna",
    impact: "200+ Property Listings",
    image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop&q=80",
    description: "Prominent local real estate agency web portal featuring verified plot/flat video walkthroughs, automated WhatsApp lead enquiry routing, and CRM tracking.",
    tags: ["Property Dealer", "Plot Walkthrough", "Lead CRM"],
  },
  {
    id: 7,
    title: "Gramin Micro-Finance & Digital Seva Kendra",
    category: "Finance & FinTech",
    location: "Hajipur & Vaishali, Bihar",
    impact: "50,000+ Rural Customers",
    image: "/images/digital_seva_kendra_photo.jpg",
    description: "Rural micro-banking & Jan Seva portal for AEPS Aadhaar cash withdrawal, micro-loans approval dashboard, and utility bill payment kiosk.",
    tags: ["Digital Seva Kendra", "Micro-Finance", "AEPS Banking"],
  },
  {
    id: 8,
    title: "Maurya Steel Furniture & Metal Works",
    category: "Manufacturing & Industrial",
    location: "Bihta Industrial Area, Patna",
    impact: "1,500+ Custom Fabrications",
    image: "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop&q=80",
    description: "Custom steel Almirah, modular kitchen & metal fabrication factory with digital product B2B catalog, online price estimator, and WhatsApp inquiry tool.",
    tags: ["Furniture Factory", "B2B Catalog", "Price Estimator"],
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
