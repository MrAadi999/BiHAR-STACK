"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  MapPin,
  Zap,
  ChevronLeft,
  ChevronRight,
  Play,
  Video,
  Image as ImageIcon,
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
    videoUrl: "https://assets.mixkit.co/videos/preview/mixkit-woman-shopping-for-clothes-in-a-boutique-41549-large.mp4",
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

function ProjectCard({
  project,
  onOpenModal,
}: {
  project: ProjectType;
  onOpenModal: (p: ProjectType) => void;
}) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [showVideo, setShowVideo] = useState(false);

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(false);
    setCurrentImgIndex((prev) =>
      prev === 0 ? project.images.length - 1 : prev - 1
    );
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowVideo(false);
    setCurrentImgIndex((prev) =>
      prev === project.images.length - 1 ? 0 : prev + 1
    );
  };

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
            <span className="absolute bottom-3 left-3 px-2.5 py-1 bg-rose-600 text-white text-[10px] font-bold uppercase tracking-wider rounded-md flex items-center gap-1">
              <Video className="w-3 h-3 animate-pulse" />
              <span>Playing Store Video</span>
            </span>
          </div>
        ) : (
          <img
            src={project.images[currentImgIndex]}
            alt={`${project.title} - photo ${currentImgIndex + 1}`}
            className="w-full h-full object-cover transition-all duration-500"
          />
        )}

        {/* Top Badges */}
        <div className="absolute top-3 left-3 flex flex-wrap gap-1.5 z-10 pointer-events-none">
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-black text-white shadow-sm rounded-md">
            {project.category}
          </span>
          <span className="px-2.5 py-1 text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-black border border-black shadow-sm flex items-center gap-1 rounded-md">
            <MapPin className="w-3 h-3" />
            <span>{project.location}</span>
          </span>
        </div>

        {/* Media Badge (Photos & Video) */}
        <div className="absolute top-3 right-3 flex items-center gap-1.5 z-10">
          {project.videoUrl && (
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowVideo(!showVideo);
              }}
              className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-md flex items-center gap-1 border border-black shadow-sm transition-transform active:scale-95 ${
                showVideo
                  ? "bg-rose-600 text-white border-rose-700"
                  : "bg-white text-black hover:bg-neutral-100"
              }`}
            >
              <Play className="w-3 h-3 fill-current" />
              <span>{showVideo ? "Photos" : "Video"}</span>
            </button>
          )}

          <span className="px-2.5 py-1 text-[10px] font-bold bg-black/80 text-white backdrop-blur-md rounded-md flex items-center gap-1">
            <ImageIcon className="w-3 h-3" />
            <span>
              {currentImgIndex + 1}/{project.images.length}
            </span>
          </span>
        </div>

        {/* Left & Right Arrow Controls */}
        {!showVideo && project.images.length > 1 && (
          <>
            <button
              onClick={prevImage}
              aria-label="Previous photo"
              className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-black text-black flex items-center justify-center shadow-md hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-80 group-hover:opacity-100"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextImage}
              aria-label="Next photo"
              className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-white/90 border border-black text-black flex items-center justify-center shadow-md hover:bg-white hover:scale-110 active:scale-95 transition-all opacity-80 group-hover:opacity-100"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </>
        )}

        {/* Bottom Thumbnail Dots Selector */}
        {!showVideo && (
          <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-sm z-10">
            {project.images.map((_, dotIdx) => (
              <button
                key={dotIdx}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImgIndex(dotIdx);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentImgIndex === dotIdx
                    ? "w-5 bg-amber-400"
                    : "w-2 bg-white/60 hover:bg-white"
                }`}
                aria-label={`View photo ${dotIdx + 1}`}
              />
            ))}
          </div>
        )}

        {/* Hover View Case Study Overlay */}
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 bg-black/40 backdrop-blur-xs transition-opacity duration-300 pointer-events-none">
          <button
            onClick={() => onOpenModal(project)}
            className="pointer-events-auto inline-flex items-center gap-2 px-4 py-2 bg-white text-black text-xs font-bold uppercase tracking-widest border-2 border-black shadow-lg hover:bg-amber-400 hover:scale-105 active:scale-95 transition-all duration-200"
          >
            <span>View Full Gallery ({project.images.length} Photos)</span>
            <ExternalLink className="w-4 h-4" />
          </button>
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

        {/* Tags & Action */}
        <div>
          <div className="flex flex-wrap gap-2 pt-4 border-t border-neutral-200 mb-4">
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
            <span>Explore 5 Photos & Details</span>
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
  const [modalActiveIndex, setModalActiveIndex] = useState(0);

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((p) => p.category === activeCategory);

  const openModal = (p: ProjectType) => {
    setSelectedProject(p);
    setModalActiveIndex(0);
  };

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
                onOpenModal={openModal}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Full Interactive Media Gallery Modal */}
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
                className="bg-white border-2 border-black max-w-4xl w-full rounded-2xl overflow-hidden shadow-2xl relative flex flex-col max-h-[90vh]"
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
                  <div className="flex flex-wrap items-center gap-2 mb-2">
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-black text-white rounded">
                      {selectedProject.category}
                    </span>
                    <span className="px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-widest bg-amber-400 text-black border border-black rounded flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      <span>{selectedProject.location}</span>
                    </span>
                  </div>
                  <h2 className="font-display text-2xl sm:text-3xl font-black text-black uppercase">
                    {selectedProject.title}
                  </h2>
                </div>

                {/* Modal Body: Main Media Preview */}
                <div className="p-6 overflow-y-auto space-y-6 flex-grow">
                  {/* Video Player or Large Photo */}
                  <div className="relative h-72 sm:h-96 w-full rounded-xl overflow-hidden bg-black border border-neutral-300">
                    {selectedProject.videoUrl && modalActiveIndex === 0 ? (
                      <video
                        src={selectedProject.videoUrl}
                        controls
                        autoPlay
                        loop
                        className="w-full h-full object-cover"
                      />
                    ) : (
                      <img
                        src={
                          selectedProject.images[
                            selectedProject.videoUrl
                              ? Math.max(0, modalActiveIndex - 1)
                              : modalActiveIndex
                          ]
                        }
                        alt={selectedProject.title}
                        className="w-full h-full object-cover"
                      />
                    )}
                  </div>

                  {/* Thumbnail Row */}
                  <div>
                    <h4 className="text-xs font-bold uppercase tracking-wider text-neutral-500 mb-3 flex items-center gap-2">
                      <ImageIcon className="w-4 h-4 text-black" />
                      <span>All Media ({selectedProject.images.length} Photos {selectedProject.videoUrl ? "+ 1 Video Tour" : ""})</span>
                    </h4>
                    <div className="flex gap-3 overflow-x-auto pb-2">
                      {selectedProject.videoUrl && (
                        <button
                          onClick={() => setModalActiveIndex(0)}
                          className={`relative flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                            modalActiveIndex === 0
                              ? "border-rose-600 scale-105 shadow-md"
                              : "border-neutral-300 opacity-70 hover:opacity-100"
                          }`}
                        >
                          <div className="w-full h-full bg-neutral-900 flex items-center justify-center text-white">
                            <Video className="w-6 h-6 text-rose-500 animate-pulse" />
                          </div>
                          <span className="absolute bottom-1 left-1 px-1 py-0.5 bg-rose-600 text-[8px] font-bold text-white uppercase rounded">
                            Video
                          </span>
                        </button>
                      )}

                      {selectedProject.images.map((imgUrl, imgIdx) => {
                        const actualIdx = selectedProject.videoUrl
                          ? imgIdx + 1
                          : imgIdx;
                        return (
                          <button
                            key={imgIdx}
                            onClick={() => setModalActiveIndex(actualIdx)}
                            className={`flex-shrink-0 w-24 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                              modalActiveIndex === actualIdx
                                ? "border-black scale-105 shadow-md"
                                : "border-neutral-300 opacity-70 hover:opacity-100"
                            }`}
                          >
                            <img
                              src={imgUrl}
                              alt="Thumbnail"
                              className="w-full h-full object-cover"
                            />
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  {/* Description & Impact */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-4 border-t border-neutral-200">
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
                        Key Performance Impact
                      </div>
                      <div className="text-lg font-black text-emerald-800 flex items-center gap-1.5">
                        <Zap className="w-5 h-5 fill-emerald-600 text-emerald-600" />
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
                    Close Gallery
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
