"use client";

import { motion } from "framer-motion";
import { Star, Quote, ChevronLeft, ChevronRight } from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";
import { useRef } from "react";

const testimonials = [
  {
    num: "01",
    company: "Parihan Saree Emporium & Garment Store",
    client: "Rajesh Agarwal (Owner)",
    location: "BakarGanj & Boring Road, Patna",
    rating: 5,
    quote:
      "BiharStack created our online saree store & billing POS system. Now we process 300+ WhatsApp orders daily and our inventory syncs automatically across BakarGanj & Boring Road branches!",
    badgeGradient: "from-amber-500 to-rose-500",
    ringColor: "border-rose-400",
  },
  {
    num: "02",
    company: "GlamCut Unisex Salon & Hair Studio",
    client: "Priya Sharma (Founder)",
    location: "Kankarbagh, Patna",
    rating: 5,
    quote:
      "Our client appointments are now 100% automated with BiharStack's SMS booking portal. Customer noshows dropped to zero and monthly salon revenue grew by 42%!",
    badgeGradient: "from-rose-500 to-purple-600",
    ringColor: "border-purple-400",
  },
  {
    num: "03",
    company: "Apex Coaching Institute & Study Library",
    client: "Prof. Anil Kumar (Director)",
    location: "Musallahpur Hat & Bikramganj, Patna",
    rating: 5,
    quote:
      "Over 1,200 students use our online test portal and digital library attendance app built by BiharStack. Their engineering team delivered the complete software in just 2 weeks!",
    badgeGradient: "from-purple-600 to-indigo-600",
    ringColor: "border-indigo-400",
  },
  {
    num: "04",
    company: "Dr. Verma Clinic & Diagnostic Center",
    client: "Dr. S. K. Verma (Chief Medical Officer)",
    location: "Baily Road, Patna & Muzaffarpur",
    rating: 5,
    quote:
      "Online patient token booking and digital prescription printing has streamlined our daily clinic crowd. Local SEO ranking brought 150+ new patient consultations every month.",
    badgeGradient: "from-cyan-400 to-teal-500",
    ringColor: "border-teal-400",
  },
  {
    num: "05",
    company: "Bihari Zaika Family Restaurant & Sweets",
    client: "Sanjay Gupta (Managing Director)",
    location: "Fraser Road, Patna & Gaya",
    rating: 5,
    quote:
      "The contactless QR menu ordering and Swiggy/Zomato order sync system from BiharStack helped us handle peak Sunday rush smoothly. Our kitchen orders run 3x faster now!",
    badgeGradient: "from-emerald-500 to-teal-600",
    ringColor: "border-emerald-400",
  },
  {
    num: "06",
    company: "Patna City Real Estate & Property Dealers",
    client: "Manoj Rai (Senior Partner)",
    location: "Danapur & Saguna More, Patna",
    rating: 5,
    quote:
      "Our 3D plot walkthrough portal and automated WhatsApp lead CRM generated ₹45 Lakhs in property deals within the first 60 days of launch.",
    badgeGradient: "from-amber-500 to-orange-600",
    ringColor: "border-amber-400",
  },
  {
    num: "07",
    company: "Gramin Micro-Finance & Digital Seva Kendra",
    client: "Ranjeet Kumar (CSC Director)",
    location: "Hajipur & Vaishali, Bihar",
    rating: 5,
    quote:
      "AEPS Aadhaar cash withdrawal and micro-loan approval software built by BiharStack serves 50,000+ rural customers effortlessly across Vaishali district.",
    badgeGradient: "from-sky-500 to-blue-600",
    ringColor: "border-sky-400",
  },
  {
    num: "08",
    company: "Maurya Steel Furniture & Metal Works",
    client: "Alok Singh (Proprietor)",
    location: "Bihta Industrial Area, Patna",
    rating: 5,
    quote:
      "Our digital B2B product catalog and online price estimator converted 80+ commercial furniture inquiries into direct factory bulk orders!",
    badgeGradient: "from-purple-500 to-pink-600",
    ringColor: "border-pink-400",
  },
  {
    num: "09",
    company: "Sattuz D2C Desi Superfoods",
    client: "Sachin Kumar (Co-Founder)",
    location: "Patna, Bihar",
    rating: 5,
    quote:
      "BiharStack designed our Shopify D2C store and ran Meta ad campaigns scaling our sattu superfood beverage sales to 45,000+ orders across India with 6.5x ROAS!",
    badgeGradient: "from-yellow-500 to-amber-600",
    ringColor: "border-yellow-400",
  },
  {
    num: "10",
    company: "Patna HealthHub Pharmacy & Diagnostics",
    client: "Amitabh Prasad (MD)",
    location: "Kankarbagh, Patna",
    rating: 5,
    quote:
      "Door-step medicine delivery app and lab report download portal built by BiharStack doubled our repeat prescription orders in Patna.",
    badgeGradient: "from-teal-400 to-emerald-600",
    ringColor: "border-teal-400",
  },
  {
    num: "11",
    company: "Maurya Global Exports & Foods",
    client: "Vikramaditya Roy (Export Head)",
    location: "Hajipur, Bihar",
    rating: 5,
    quote:
      "Global B2B buyer export SEO and catalog web portal connected our makhana food processing plant directly with buyers in 12 countries!",
    badgeGradient: "from-orange-500 to-amber-600",
    ringColor: "border-orange-400",
  },
  {
    num: "12",
    company: "Gaya Heritage Travels & Cab Rental",
    client: "Sunil Prasad (Founder)",
    location: "Bodh Gaya, Bihar",
    rating: 5,
    quote:
      "Multilingual AI itinerary planner and online cab booking web app boosted tourist bookings by 240% during the Bodh Gaya pilgrimage season!",
    badgeGradient: "from-rose-500 to-red-600",
    ringColor: "border-rose-400",
  },
  {
    num: "13",
    company: "Nalanda Tech Skill Academy",
    client: "Er. Rakesh Ranjan (Head Trainer)",
    location: "Bihar Sharif & Nalanda",
    rating: 5,
    quote:
      "Our coding bootcamp LMS portal with automated assignment grading helped 500+ Bihar tech students get placed in top IT firms!",
    badgeGradient: "from-blue-600 to-indigo-600",
    ringColor: "border-blue-400",
  },
  {
    num: "14",
    company: "Mithila Craft Handloom & Art Store",
    client: "Sita Devi (Master Artisan)",
    location: "Madhubani, Bihar",
    rating: 5,
    quote:
      "Selling authentic Madhubani handloom sarees globally via our new 3D gallery e-commerce site brought direct income to 300+ women artisans.",
    badgeGradient: "from-fuchsia-500 to-purple-600",
    ringColor: "border-fuchsia-400",
  },
  {
    num: "15",
    company: "Patna Digital Diagnostics & X-Ray Lab",
    client: "Dr. Meera Pandey (Radiologist)",
    location: "Boring Road, Patna",
    rating: 5,
    quote:
      "WhatsApp diagnostic report delivery and online scan appointment system reduced waiting time by 80% and improved patient satisfaction.",
    badgeGradient: "from-sky-400 to-teal-500",
    ringColor: "border-sky-400",
  },
  {
    num: "16",
    company: "Chanakya Competitive IAS Academy",
    client: "K. N. Singh (Director)",
    location: "Boring Canal Road, Patna",
    rating: 5,
    quote:
      "Online live cohort streaming and test series software built by BiharStack allows 3,000+ IAS aspirants from all 38 districts to study seamlessly!",
    badgeGradient: "from-amber-600 to-orange-700",
    ringColor: "border-amber-500",
  },
];

export default function TestimonialsSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -360, behavior: "smooth" });
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 360, behavior: "smooth" });
    }
  };

  return (
    <section className="pt-2 sm:pt-4 pb-12 sm:pb-16 bg-[#ECF1F5] border-t border-black/5 relative overflow-hidden">
      {/* Background Soft Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-96 bg-blue-400/5 blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header & Controls */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-4 sm:mb-6">
          <SectionHeading
            badge="CLIENT SUCCESS STORIES"
            title="What Clients Say"
            subtitle="Don't just take our word for it. Here is how BiharStack drives measurable growth for partners."
            className="mb-0 text-left items-start mx-0 max-w-2xl"
          />

          {/* Left / Right Carousel Control Buttons */}
          <div className="flex items-center gap-2 flex-shrink-0 self-end md:self-auto">
            <button
              onClick={scrollLeft}
              aria-label="Scroll left"
              className="w-10 h-10 rounded-full bg-white border border-neutral-300 shadow-md text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black active:scale-95 transition-all"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={scrollRight}
              aria-label="Scroll right"
              className="w-10 h-10 rounded-full bg-white border border-neutral-300 shadow-md text-black flex items-center justify-center hover:bg-black hover:text-white hover:border-black active:scale-95 transition-all"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Continuous Auto-Sliding Capsule Marquee Track */}
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-none py-6 px-2 scroll-smooth"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {/* Loop twice for seamless auto-sliding experience */}
          {[...testimonials, ...testimonials].map((test, index) => (
            <motion.div
              key={`${test.company}-${index}`}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 8) * 0.05 }}
              whileHover={{ y: -8, scale: 1.02 }}
              className="relative flex-shrink-0 w-[310px] sm:w-[340px] p-7 sm:p-8 rounded-[48px] bg-white border-2 border-neutral-200/80 shadow-[0_20px_45px_-15px_rgba(0,0,0,0.12)] hover:shadow-[0_28px_55px_-12px_rgba(0,0,0,0.18)] transition-all duration-300 flex flex-col justify-between overflow-hidden group select-none cursor-pointer"
            >
              {/* Outer Decorative Arc Ring (Matching Reference Infographic Photo) */}
              <div
                className={`absolute top-0 right-0 w-36 h-36 rounded-full border-t-4 border-r-4 ${test.ringColor} opacity-40 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none -mr-8 -mt-8`}
              />

              <div>
                {/* Top Number Badge Circle (Matching Reference Infographic) */}
                <div className="flex items-center justify-between mb-5">
                  <div
                    className={`w-14 h-14 rounded-full bg-gradient-to-br ${test.badgeGradient} text-white font-black text-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    {test.num}
                  </div>

                  <Quote className="w-8 h-8 text-neutral-300 group-hover:text-amber-500 transition-colors duration-300" />
                </div>

                {/* Rating Stars */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(test.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>

                {/* Review Text */}
                <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed font-semibold mb-6 italic">
                  &quot;{test.quote}&quot;
                </p>
              </div>

              {/* Author Info (Clean without any client avatar image) */}
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
