"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Zap,
  Play,
  Video,
  X,
} from "lucide-react";
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
    videoUrl: "https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
    images: [
      "https://images.unsplash.com/photo-1610030469983-98e550d6193c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1609357605129-26f69add5d6e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Traditional saree & ethnic wear shop transformed with custom billing POS, WhatsApp catalog ordering, Shopify online storefront, and inventory barcode sync.",
    tags: ["Kapda Dukaan", "Shopify E-Commerce", "WhatsApp Catalog", "Video Tour"],
  },
  {
    id: 2,
    title: "GlamCut Unisex Salon & Hair Studio",
    category: "Startups & SaaS",
    location: "Kankarbagh, Patna",
    impact: "3,500+ Monthly Bookings",
    images: [
      "https://images.unsplash.com/photo-1560066984-138dadb4c035?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1503951914875-452162b0f3f1?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Modern unisex salon equipped with automated SMS appointment scheduling, digital service menu tablet, customer loyalty rewards app, and Instagram ads.",
    tags: ["Saloon App", "Online Appointment", "Loyalty CRM"],
  },
  {
    id: 3,
    title: "Apex Coaching Institute & Study Library",
    category: "Education & EdTech",
    location: "Musallahpur Hat & Bikramganj, Patna",
    impact: "1,200+ Students Enrolled",
    images: [
      "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1524178232363-1fb2b075b655?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Popular competitive exam coaching & 24x7 self-study library with online test series portal, student attendance app, and automated fee reminder system.",
    tags: ["Study Center", "Online Test Portal", "Student App"],
  },
  {
    id: 4,
    title: "Dr. Verma Clinic & Diagnostic Center",
    category: "Healthcare & Clinics",
    location: "Baily Road, Patna & Muzaffarpur",
    impact: "150+ Daily Patient Visits",
    images: [
      "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1584515979956-d9f6e5d09982?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1516549655169-df83a0774514?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Multi-specialty family clinic & pathology lab with online doctor token booking, digital prescription printing, lab test report download, and local SEO.",
    tags: ["Doctor Clinic", "Patient Token App", "Local Clinic SEO"],
  },
  {
    id: 5,
    title: "Bihari Zaika Family Restaurant & Sweets",
    category: "Restaurants & Hospitality",
    location: "Fraser Road, Patna & Gaya",
    impact: "500+ Daily Orders",
    images: [
      "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1552566626-52f8b828add9?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1514933651103-005eec06c04b?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Famous local dining restaurant & sweet shop with digital QR table menus, Kitchen Display System (KDS), Zomato/Swiggy order sync, and Google Maps ranking.",
    tags: ["Restaurant & Sweets", "QR Menu", "Zomato Sync"],
  },
  {
    id: 6,
    title: "Patna City Real Estate & Property Dealers",
    category: "Real Estate & Builders",
    location: "Danapur & Saguna More, Patna",
    impact: "200+ Property Listings",
    images: [
      "https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Prominent local real estate agency web portal featuring verified plot/flat video walkthroughs, automated WhatsApp lead enquiry routing, and CRM tracking.",
    tags: ["Property Dealer", "Plot Walkthrough", "Lead CRM"],
  },
  {
    id: 7,
    title: "Gramin Micro-Finance & Digital Seva Kendra",
    category: "Finance & FinTech",
    location: "Hajipur & Vaishali, Bihar",
    impact: "50,000+ Rural Customers",
    images: [
      "/images/digital_seva_kendra_photo.jpg",
      "https://images.unsplash.com/photo-1556742031-c6961e85179d?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556740758-90de374c12ad?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1526304640581-d334cdbbf45e?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1556742111-a301076d9d18?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Rural micro-banking & Jan Seva portal for AEPS Aadhaar cash withdrawal, micro-loans approval dashboard, and utility bill payment kiosk.",
    tags: ["Digital Seva Kendra", "Micro-Finance", "AEPS Banking"],
  },
  {
    id: 8,
    title: "Maurya Steel Furniture & Metal Works",
    category: "Manufacturing & Industrial",
    location: "Bihta Industrial Area, Patna",
    impact: "1,500+ Custom Fabrications",
    images: [
      "https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1538688525198-9b88f6f53126?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1540574163026-643ea20ade25?w=900&auto=format&fit=crop&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=900&auto=format&fit=crop&q=80",
    ],
    description: "Custom steel Almirah, modular kitchen & metal fabrication factory with digital product B2B catalog, online price estimator, and WhatsApp inquiry tool.",
    tags: ["Furniture Factory", "B2B Catalog", "Price Estimator"],
  },
];

type ProjectType = (typeof projects)[0];

// Unique auto-slide timers (in milliseconds) for each card so photos slide asynchronously
const cardIntervals = [3400, 4800, 2900, 5300, 3800, 4500, 3100, 4900];

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: ProjectType;
  onOpenModal: (p: ProjectType) => void;
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  // Auto-rotate photos asynchronously per card
  useEffect(() => {
    if (showVideo) return;
    const intervalTime = cardIntervals[(project.id - 1) % cardIntervals.length];
    const timer = setInterval(() => {
      setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
    }, intervalTime);

    return () => clearInterval(timer);
  }, [project.images.length, project.id, showVideo]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.4 }}
      className="group relative bg-white border-2 border-black overflow-hidden flex flex-col justify-between hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all duration-300 rounded-2xl"
    >
      {/* Image & Video Container */}
      <div className="relative h-60 w-full overflow-hidden border-b-2 border-black bg-neutral-900">
        {showVideo && project.videoUrl ? (
          <div className="relative w-full h-full">
            <video
              src={project.videoUrl}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover"
            />
            <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md flex items-center gap-1 shadow-md z-10">
              <Video className="w-3.5 h-3.5 animate-pulse" />
              <span>Live Video Tour</span>
            </span>
          </div>
        ) : (
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImgIndex}
              src={project.images[currentImgIndex]}
              alt={project.title}
              initial={{ opacity: 0.8 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0.8 }}
              transition={{ duration: 0.5 }}
              className="w-full h-full object-cover"
            />
          </AnimatePresence>
        )}

        {/* Top Left: Category Badge Only */}
        <div className="absolute top-3 left-3 z-10">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-black text-white shadow-sm rounded-md">
            {project.category}
          </span>
        </div>

        {/* Top Right: Video Toggle Button (for Parihan Saree Emporium) */}
        {project.videoUrl && (
          <div className="absolute top-3 right-3 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowVideo(!showVideo);
              }}
              className={`px-3 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md flex items-center gap-1 border border-black shadow-md transition-all active:scale-95 ${
                showVideo
                  ? "bg-rose-600 text-white border-rose-700"
                  : "bg-white text-black hover:bg-neutral-100"
              }`}
            >
              {showVideo ? (
                <span>Show Photos</span>
              ) : (
                <>
                  <Play className="w-3 h-3 fill-current text-rose-600" />
                  <span>Watch Video</span>
                </>
              )}
            </button>
          </div>
        )}

        {/* Hover View Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300 pointer-events-none">
          <button
            onClick={() => onOpenModal(project)}
            className="pointer-events-auto inline-flex items-center gap-2 px-5 py-2.5 bg-white text-black text-xs font-bold uppercase tracking-widest border-2 border-black shadow-lg hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>Details</span>
            <ExternalLink className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 flex-grow flex flex-col justify-between">
        <div>
          {/* Impact Metric Badge */}
          <div className="mb-2 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-emerald-100 border border-emerald-300 text-emerald-900 text-[11px] font-bold">
            <Zap className="w-3.5 h-3.5 fill-emerald-600 text-emerald-600" />
            <span>{project.impact}</span>
          </div>

          {/* Title */}
          <h3 className="font-display text-xl font-black text-black uppercase mb-1 leading-tight">
            {project.title}
          </h3>

          {/* Location Shifted Under Title */}
          <div className="flex items-center gap-1 text-xs text-neutral-600 font-semibold mb-3">
            <MapPin className="w-3.5 h-3.5 text-rose-500 flex-shrink-0" />
            <span>{project.location}</span>
          </div>

          {/* Description */}
          <p className="text-xs text-neutral-700 font-medium leading-relaxed mb-4">
            {project.description}
          </p>
        </div>

        {/* Tags & Details Button */}
        <div>
          <div className="flex flex-wrap gap-2 pt-3 border-t border-neutral-200 mb-4">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-0.5 bg-[#f0f0f0] border border-neutral-300 text-[10px] font-bold uppercase tracking-wider text-black rounded-sm"
              >
                {tag}
              </span>
            ))}
          </div>

          <button
            onClick={() => onOpenModal(project)}
            className="w-full py-2.5 px-4 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-amber-400 hover:text-black border border-black transition-colors duration-200 flex items-center justify-center gap-2 rounded-lg"
          >
            <span>Details</span>
            <ExternalLink className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(
    null
  );

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  return (
    <section
      id="portfolio"
      className="pt-8 sm:pt-12 pb-16 sm:pb-20 bg-[#f0f0f0] relative overflow-hidden border-t border-black/5"
    >
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        <SectionHeading
          badge="CASE STUDIES"
          title="Our Work"
          subtitle="Explore recent digital platforms, branding overhauls, and AI solutions crafted by BiharStack."
          className="mb-8 sm:mb-10"
        />

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2.5 mb-8 sm:mb-10">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 text-xs font-bold uppercase tracking-widest transition-all duration-300 rounded-lg ${
                activeCategory === category
                  ? "bg-black text-white border border-black shadow-md scale-105"
                  : "bg-white text-black border border-neutral-300 hover:border-black"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.id}
                project={project}
                onOpenModal={setSelectedProject}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Interactive Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md flex items-center justify-center p-4 sm:p-6"
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white border-2 border-black max-w-3xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 z-20 p-2 rounded-full bg-black text-white hover:bg-rose-600 transition-colors shadow-md"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Modal Header */}
                <div className="p-6 border-b border-neutral-200 bg-neutral-50 pr-16">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-black text-white rounded">
                      {selectedProject.category}
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-black uppercase mb-1">
                    {selectedProject.title}
                  </h2>
                  <div className="flex items-center gap-1.5 text-xs text-neutral-600 font-semibold">
                    <MapPin className="w-3.5 h-3.5 text-rose-500" />
                    <span>{selectedProject.location}</span>
                  </div>
                </div>

                {/* Modal Body */}
                <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                  {/* Media View */}
                  <div className="relative h-64 sm:h-80 w-full rounded-xl overflow-hidden bg-black border border-neutral-300">
                    {selectedProject.videoUrl ? (
                      <video
                        src={selectedProject.videoUrl}
                        controls
                        autoPlay
                        loop
                        playsInline
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={selectedProject.images[0]}
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Description & Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
                    <div className="md:col-span-2">
                      <h4 className="text-sm font-bold uppercase tracking-wider text-black mb-2">
                        About This Project & Business
                      </h4>
                      <p className="text-sm text-neutral-700 font-medium leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="bg-neutral-100 p-4 rounded-xl border border-neutral-300">
                      <div className="mb-2 text-xs font-bold uppercase text-neutral-500">
                        Performance Impact
                      </div>
                      <div className="text-base font-black text-emerald-800 flex items-center gap-1.5">
                        <Zap className="w-4 h-4 fill-emerald-600 text-emerald-600" />
                        <span>{selectedProject.impact}</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Modal Footer */}
                <div className="p-4 border-t border-neutral-200 bg-neutral-50 flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((t) => (
                      <span
                        key={t}
                        className="px-2.5 py-0.5 bg-white border border-neutral-300 text-[10px] font-bold uppercase tracking-wider text-black rounded"
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => setSelectedProject(null)}
                    className="px-5 py-2 bg-black text-white text-xs font-bold uppercase tracking-widest hover:bg-neutral-800 rounded-lg"
                  >
                    Close Details
                  </button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
