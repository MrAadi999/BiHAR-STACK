"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { Star, Quote } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useRef, useEffect, useState } from "react";

const testimonials = [
  {
    company: "Parihan Saree Emporium & Garment Store",
    client: "Rajesh Agarwal (Owner)",
    location: "BakarGanj & Boring Road, Patna",
    rating: 5,
    quote:
      "BiharStack created our online saree store & billing POS system. Now we process 300+ WhatsApp orders daily and our inventory syncs automatically across BakarGanj & Boring Road branches!",
    ringColor: "border-rose-400",
  },
  {
    company: "GlamCut Unisex Salon & Hair Studio",
    client: "Priya Sharma (Founder)",
    location: "Kankarbagh, Patna",
    rating: 5,
    quote:
      "Our client appointments are now 100% automated with BiharStack's SMS booking portal. Customer noshows dropped to zero and monthly salon revenue grew by 42%!",
    ringColor: "border-purple-400",
  },
  {
    company: "Apex Coaching Institute & Study Library",
    client: "Prof. Anil Kumar (Director)",
    location: "Musallahpur Hat & Bikramganj, Patna",
    rating: 5,
    quote:
      "Over 1,200 students use our online test portal and digital library attendance app built by BiharStack. Their engineering team delivered the complete software in just 2 weeks!",
    ringColor: "border-indigo-400",
  },
  {
    company: "Dr. Verma Clinic & Diagnostic Center",
    client: "Dr. S. K. Verma (Chief Medical Officer)",
    location: "Baily Road, Patna & Muzaffarpur",
    rating: 5,
    quote:
      "Online patient token booking and digital prescription printing has streamlined our daily clinic crowd. Local SEO ranking brought 150+ new patient consultations every month.",
    ringColor: "border-teal-400",
  },
  {
    company: "Bihari Zaika Family Restaurant & Sweets",
    client: "Sanjay Gupta (Managing Director)",
    location: "Fraser Road, Patna & Gaya",
    rating: 5,
    quote:
      "The contactless QR menu ordering and Swiggy/Zomato order sync system from BiharStack helped us handle peak Sunday rush smoothly. Our kitchen orders run 3x faster now!",
    ringColor: "border-emerald-400",
  },
  {
    company: "Patna City Real Estate & Property Dealers",
    client: "Manoj Rai (Senior Partner)",
    location: "Danapur & Saguna More, Patna",
    rating: 5,
    quote:
      "Our 3D plot walkthrough portal and automated WhatsApp lead CRM generated ₹45 Lakhs in property deals within the first 60 days of launch.",
    ringColor: "border-amber-400",
  },
  {
    company: "Gramin Micro-Finance & Digital Seva Kendra",
    client: "Ranjeet Kumar (CSC Director)",
    location: "Hajipur & Vaishali, Bihar",
    rating: 5,
    quote:
      "AEPS Aadhaar cash withdrawal and micro-loan approval software built by BiharStack serves 50,000+ rural customers effortlessly across Vaishali district.",
    ringColor: "border-sky-400",
  },
  {
    company: "Maurya Steel Furniture & Metal Works",
    client: "Alok Singh (Proprietor)",
    location: "Bihta Industrial Area, Patna",
    rating: 5,
    quote:
      "Our digital B2B product catalog and online price estimator converted 80+ commercial furniture inquiries into direct factory bulk orders!",
    ringColor: "border-pink-400",
  },
  {
    company: "Sattuz D2C Desi Superfoods",
    client: "Sachin Kumar (Co-Founder)",
    location: "Patna, Bihar",
    rating: 5,
    quote:
      "BiharStack designed our Shopify D2C store and ran Meta ad campaigns scaling our sattu superfood beverage sales to 45,000+ orders across India with 6.5x ROAS!",
    ringColor: "border-yellow-400",
  },
  {
    company: "Patna HealthHub Pharmacy & Diagnostics",
    client: "Amitabh Prasad (MD)",
    location: "Kankarbagh, Patna",
    rating: 5,
    quote:
      "Door-step medicine delivery app and lab report download portal built by BiharStack doubled our repeat prescription orders in Patna.",
    ringColor: "border-teal-400",
  },
  {
    company: "Maurya Global Exports & Foods",
    client: "Vikramaditya Roy (Export Head)",
    location: "Hajipur, Bihar",
    rating: 5,
    quote:
      "Global B2B buyer export SEO and catalog web portal connected our makhana food processing plant directly with buyers in 12 countries!",
    ringColor: "border-orange-400",
  },
  {
    company: "Gaya Heritage Travels & Cab Rental",
    client: "Sunil Prasad (Founder)",
    location: "Bodh Gaya, Bihar",
    rating: 5,
    quote:
      "Multilingual AI itinerary planner and online cab booking web app boosted tourist bookings by 240% during the Bodh Gaya pilgrimage season!",
    ringColor: "border-rose-400",
  },
  {
    company: "Nalanda Tech Skill Academy",
    client: "Er. Rakesh Ranjan (Head Trainer)",
    location: "Bihar Sharif & Nalanda",
    rating: 5,
    quote:
      "Our coding bootcamp LMS portal with automated assignment grading helped 500+ Bihar tech students get placed in top IT firms!",
    ringColor: "border-blue-400",
  },
  {
    company: "Mithila Craft Handloom & Art Store",
    client: "Sita Devi (Master Artisan)",
    location: "Madhubani, Bihar",
    rating: 5,
    quote:
      "Selling authentic Madhubani handloom sarees globally via our new 3D gallery e-commerce site brought direct income to 300+ women artisans.",
    ringColor: "border-fuchsia-400",
  },
  {
    company: "Patna Digital Diagnostics & X-Ray Lab",
    client: "Dr. Meera Pandey (Radiologist)",
    location: "Boring Road, Patna",
    rating: 5,
    quote:
      "WhatsApp diagnostic report delivery and online scan appointment system reduced waiting time by 80% and improved patient satisfaction.",
    ringColor: "border-sky-400",
  },
  {
    company: "Chanakya Competitive IAS Academy",
    client: "K. N. Singh (Director)",
    location: "Boring Canal Road, Patna",
    rating: 5,
    quote:
      "Online live cohort streaming and test series software built by BiharStack allows 3,000+ IAS aspirants from all 38 districts to study seamlessly!",
    ringColor: "border-amber-500",
  },
];

export default function TestimonialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const x = useMotionValue(0);

  useEffect(() => {
    const updateWidth = () => {
      if (trackRef.current && containerRef.current) {
        setWidth(trackRef.current.scrollWidth / 2);
      }
    };

    updateWidth();
    window.addEventListener("resize", updateWidth);
    return () => window.removeEventListener("resize", updateWidth);
  }, []);

  // Smooth continuous auto-sliding that pauses on hover/drag and resumes on mouse leave!
  useEffect(() => {
    if (width <= 0) return;

    let controls: any;

    if (!isHovered) {
      const currentX = x.get();
      const startPos = Math.abs(currentX) >= width ? 0 : currentX;
      if (Math.abs(currentX) >= width) {
        x.set(0);
      }

      const remainingDistance = width - Math.abs(startPos);
      const duration = (remainingDistance / width) * 75; // 75s smooth slow reading speed

      controls = animate(x, -width, {
        ease: "linear",
        duration: duration,
        onComplete: () => {
          x.set(0);
        },
      });
    }

    return () => {
      if (controls) controls.stop();
    };
  }, [isHovered, width, x]);

  return (
    <section className="pt-2 sm:pt-4 pb-8 sm:pb-12 bg-[#ECF1F5] border-t border-black/5 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-80 bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Heading */}
        <SectionHeading
          badge="CLIENT SUCCESS STORIES"
          title="What Clients Say"
          subtitle="Don't just take our word for it. Here is how BiharStack drives measurable growth for partners."
          align="center"
          className="mb-6 sm:mb-8"
        />

        {/* 60fps GPU Drag Container */}
        <div
          ref={containerRef}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
          className="overflow-hidden cursor-grab active:cursor-grabbing py-3 px-1 select-none"
        >
          <motion.div
            ref={trackRef}
            drag="x"
            style={{ x }}
            dragConstraints={{ left: -width, right: 0 }}
            dragElastic={0.08}
            onDragStart={() => setIsHovered(true)}
            onDragEnd={() => setIsHovered(false)}
            whileTap={{ cursor: "grabbing" }}
            className="flex gap-4.5 w-max"
          >
            {/* Loop twice for seamless infinite scrolling */}
            {[...testimonials, ...testimonials].map((test, index) => (
              <motion.div
                key={`${test.company}-${index}`}
                whileHover={{ y: -5, scale: 1.02 }}
                className="relative flex-shrink-0 w-[240px] sm:w-[260px] p-5 sm:p-6 rounded-3xl bg-white border-2 border-neutral-200/90 shadow-[0_14px_30px_-10px_rgba(0,0,0,0.12)] hover:shadow-[0_20px_40px_-8px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none pointer-events-auto min-h-[295px] sm:min-h-[310px]"
              >
                {/* Decorative Corner Arc Accent */}
                <div
                  className={`absolute top-0 right-0 w-28 h-28 rounded-full border-t-4 border-r-4 ${test.ringColor} opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -mr-6 -mt-6`}
                />

                <div>
                  {/* Top Quote Icon & Rating Stars */}
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-0.5">
                      {[...Array(test.rating)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-3.5 h-3.5 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    <Quote className="w-6 h-6 text-neutral-300 group-hover:text-amber-500 transition-colors duration-300" />
                  </div>

                  {/* Highlighted Review Quote Text Box */}
                  <div className="bg-neutral-50 group-hover:bg-amber-50/70 p-3.5 rounded-2xl border border-neutral-200/80 shadow-xs transition-colors duration-300 mb-3">
                    <p className="text-xs sm:text-[13px] text-neutral-900 leading-relaxed font-extrabold italic pointer-events-none">
                      &quot;{test.quote}&quot;
                    </p>
                  </div>
                </div>

                {/* Company & Bold Owner Details */}
                <div className="pt-3 border-t border-neutral-200/80 pointer-events-none">
                  <h4 className="font-display text-xs sm:text-sm font-black text-black group-hover:text-indigo-600 transition-colors leading-tight mb-1">
                    {test.company}
                  </h4>
                  {/* Extra Bold Client/Owner Name */}
                  <div className="text-xs font-black text-slate-900 tracking-wide leading-tight">
                    {test.client}
                  </div>
                  <div className="text-[11px] font-bold text-neutral-500 mt-1">
                    📍 {test.location}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
