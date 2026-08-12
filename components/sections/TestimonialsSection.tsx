"use client";

import { motion } from "framer-motion";
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
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isMouseDown, setIsMouseDown] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);
  const isHoveredRef = useRef(false);

  // Auto-scroll effect that pauses when hovered, touched, or dragged
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.8;

    const step = () => {
      if (!isHoveredRef.current && !isMouseDown && container) {
        container.scrollLeft += speed;
        if (
          container.scrollLeft >=
          container.scrollWidth - container.clientWidth - 10
        ) {
          container.scrollLeft = 1;
        }
      }
      animationFrameId = requestAnimationFrame(step);
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [isMouseDown]);

  // Mouse Drag Handlers for hand cursor sliding
  const handleMouseDown = (e: React.MouseEvent) => {
    if (!scrollContainerRef.current) return;
    setIsMouseDown(true);
    isHoveredRef.current = true;
    setStartX(e.pageX - scrollContainerRef.current.offsetLeft);
    setScrollLeft(scrollContainerRef.current.scrollLeft);
  };

  const handleMouseLeave = () => {
    setIsMouseDown(false);
    isHoveredRef.current = false;
  };

  const handleMouseUp = () => {
    setIsMouseDown(false);
    isHoveredRef.current = false;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMouseDown || !scrollContainerRef.current) return;
    e.preventDefault();
    const x = e.pageX - scrollContainerRef.current.offsetLeft;
    const walk = (x - startX) * 1.8; // Scroll sensitivity multiplier
    scrollContainerRef.current.scrollLeft = scrollLeft - walk;
  };

  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#ECF1F5] border-t border-black/5 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Centered Section Heading */}
        <SectionHeading
          badge="CLIENT SUCCESS STORIES"
          title="What Clients Say"
          subtitle="Don't just take our word for it. Here is how BiharStack drives measurable growth for partners."
          align="center"
          className="mb-8 sm:mb-10"
        />

        {/* Continuous Auto-Sliding + Hand Mouse Drag Track */}
        <div
          ref={scrollContainerRef}
          onMouseDown={handleMouseDown}
          onMouseLeave={handleMouseLeave}
          onMouseUp={handleMouseUp}
          onMouseMove={handleMouseMove}
          onMouseEnter={() => (isHoveredRef.current = true)}
          onTouchStart={() => (isHoveredRef.current = true)}
          onTouchEnd={() => (isHoveredRef.current = false)}
          className={`flex gap-6 overflow-x-auto scrollbar-none py-4 px-2 select-none ${
            isMouseDown ? "cursor-grabbing" : "cursor-grab"
          }`}
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Loop twice for seamless endless sliding experience */}
          {[...testimonials, ...testimonials].map((test, index) => (
            <motion.div
              key={`${test.company}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="relative flex-shrink-0 w-[310px] sm:w-[340px] p-7 sm:p-8 rounded-[40px] bg-white border-2 border-neutral-200/80 shadow-[0_18px_40px_-15px_rgba(0,0,0,0.12)] hover:shadow-[0_26px_50px_-12px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden group pointer-events-auto"
            >
              {/* Decorative Corner Arc Accent */}
              <div
                className={`absolute top-0 right-0 w-32 h-32 rounded-full border-t-4 border-r-4 ${test.ringColor} opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -mr-6 -mt-6`}
              />

              <div>
                {/* Top Quote Icon & Rating Stars */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-1">
                    {[...Array(test.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>

                  <Quote className="w-8 h-8 text-neutral-300 group-hover:text-amber-500 transition-colors duration-300" />
                </div>

                {/* Review Quote Text */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-semibold mb-6 italic">
                  &quot;{test.quote}&quot;
                </p>
              </div>

              {/* Company & Owner Details */}
              <div className="pt-4 border-t border-neutral-100">
                <h4 className="font-display text-base font-extrabold text-black group-hover:text-indigo-600 transition-colors leading-tight mb-1">
                  {test.company}
                </h4>
                <div className="text-xs font-bold text-neutral-600">
                  {test.client}
                </div>
                <div className="text-[11px] font-medium text-neutral-400 mt-0.5">
                  📍 {test.location}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
