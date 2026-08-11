"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  TrendingUp, Palette, Code2, Bot, ArrowRight, Check, Sparkles, Layers, Megaphone, DollarSign, Settings, Package, Wallet,
  Share2, Target, Search, MapPin, Users, Award, Mail, Layout, Film, Video, BookOpen, Image as ImageIcon, Globe,
  ShoppingCart, Rocket, Smartphone, Cloud, Cpu, Gauge, MessageSquare, Workflow, Brain, UserPlus, ShieldCheck
} from "lucide-react";
import SectionHeading from "@/components/ui/SectionHeading";

// Interactive Question Mark with Mouse Tracking Eyes & Head Tilt
function InteractiveQuestionMark() {
  const [mousePos, setMousePos] = useState({ pupilX: 0, pupilY: 0, rotateX: 0, rotateY: 0 });
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let animFrameId: number;

    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height * 0.75; // Eye height position

      const dx = e.clientX - centerX;
      const dy = e.clientY - centerY;
      const dist = Math.hypot(dx, dy);
      const maxDist = 400;
      const ratio = Math.min(dist / maxDist, 1);
      const angle = Math.atan2(dy, dx);

      // Max pupil translation in px inside eye socket
      const maxPupilMove = 3.5;
      const pupilX = Math.cos(angle) * maxPupilMove * ratio;
      const pupilY = Math.sin(angle) * maxPupilMove * ratio;

      // 3D head tilt toward mouse direction
      const rotateY = Math.min(Math.max(dx * 0.025, -16), 16);
      const rotateX = Math.min(Math.max(-dy * 0.025, -16), 16);

      cancelAnimationFrame(animFrameId);
      animFrameId = requestAnimationFrame(() => {
        setMousePos({ pupilX, pupilY, rotateX, rotateY });
      });
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      cancelAnimationFrame(animFrameId);
    };
  }, []);

  return (
    <motion.div 
      ref={containerRef}
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="absolute top-0 sm:top-0 -right-11 sm:-right-[62px] w-14 sm:w-[68px] h-14 sm:h-[68px] pointer-events-none z-30 drop-shadow-md select-none"
      style={{ perspective: 600 }}
    >
      <motion.div 
        animate={{ 
          y: [0, -4, 0],
          rotateX: mousePos.rotateX,
          rotateY: mousePos.rotateY,
        }}
        transition={{ 
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
          rotateX: { type: "spring", stiffness: 220, damping: 18 },
          rotateY: { type: "spring", stiffness: 220, damping: 18 },
        }}
        className="relative w-full h-full"
      >
        {/* Base Image */}
        <img 
          src="/images/transparent_yellow_question.png" 
          alt="Yellow question mark shrugging emoji character" 
          className="w-full h-full object-contain relative z-10" 
        />

        {/* Left Pupil Eye Tracking */}
        <div 
          className="absolute z-20 bg-[#111111] rounded-full pointer-events-none"
          style={{
            width: '6.5%',
            height: '7.5%',
            left: '43%',
            top: '73.5%',
            transform: `translate(${mousePos.pupilX}px, ${mousePos.pupilY}px)`,
            transition: 'transform 0.04s ease-out',
          }}
        />

        {/* Right Pupil Eye Tracking */}
        <div 
          className="absolute z-20 bg-[#111111] rounded-full pointer-events-none"
          style={{
            width: '6.5%',
            height: '7.5%',
            left: '51%',
            top: '73.5%',
            transform: `translate(${mousePos.pupilX}px, ${mousePos.pupilY}px)`,
            transition: 'transform 0.04s ease-out',
          }}
        />
      </motion.div>
    </motion.div>
  );
}

// 5 Color Themes Matching the User's Image Reference
const ribbonThemes = [
  {
    id: 1,
    name: "Vibrant Orange",
    barStyle: "bg-gradient-to-r from-orange-500 via-orange-600 to-amber-500",
    ringBorder: "border-orange-500",
    icon: <Sparkles className="w-5 h-5 sm:w-7 sm:h-7 text-orange-500" />,
  },
  {
    id: 2,
    name: "Electric Ocean Cyan",
    barStyle: "bg-gradient-to-r from-cyan-600 via-sky-600 to-teal-500",
    ringBorder: "border-cyan-500",
    icon: <Layers className="w-5 h-5 sm:w-7 sm:h-7 text-cyan-600" />,
  },
  {
    id: 3,
    name: "Dark Navy Slate",
    barStyle: "bg-gradient-to-r from-slate-800 via-slate-900 to-slate-950",
    ringBorder: "border-slate-800",
    icon: <Code2 className="w-5 h-5 sm:w-7 sm:h-7 text-slate-800" />,
  },
  {
    id: 4,
    name: "Espresso Charcoal",
    barStyle: "bg-gradient-to-r from-neutral-800 via-neutral-900 to-black",
    ringBorder: "border-neutral-800",
    icon: <Bot className="w-5 h-5 sm:w-7 sm:h-7 text-neutral-800" />,
  },
  {
    id: 5,
    name: "Metallic Warm Gold",
    barStyle: "bg-gradient-to-r from-amber-700 via-yellow-700 to-amber-600",
    ringBorder: "border-amber-700",
    icon: <TrendingUp className="w-5 h-5 sm:w-7 sm:h-7 text-amber-700" />,
  },
];

const services = [
  {
    id: "digital-marketing",
    icon: <TrendingUp className="w-7 h-7 text-black" />,
    title: "Digital Marketing & Performance",
    subtitle: "Data-driven marketing campaigns designed to generate high-intent leads and dominate your local and global market.",
    items: [
      "Social Media Marketing",
      "Performance Marketing",
      "Meta Ads & Google Ads",
      "Search Engine Optimization (SEO)",
      "Local SEO & GMB Ranking",
      "High-Converting Lead Gen",
      "Influencer Outreach",
      "Automated Email Campaigns",
    ],
  },
  {
    id: "branding-creative",
    icon: <Palette className="w-7 h-7 text-black" />,
    title: "Branding & Creative Design",
    subtitle: "Distinctive brand identities and visual assets that captivate audiences and establish market leadership.",
    items: [
      "Logo & Visual Brand Identity",
      "Graphic & Social Media Creatives",
      "UI/UX Design for Web & Apps",
      "Motion Graphics & 3D Visuals",
      "High-Production Video Editing",
      "Product Branding & Packaging",
      "Brand Guidelines & Voice",
      "Marketing Collaterals",
    ],
  },
  {
    id: "website-technology",
    icon: <Code2 className="w-7 h-7 text-black" />,
    title: "Website & Custom Technology",
    subtitle: "Blazing fast, pixel-perfect, scalable web and mobile applications tailored to your exact business workflow.",
    items: [
      "Custom Business Websites",
      "E-commerce Platforms (Shopify/Next)",
      "High-Converting Landing Pages",
      "Full-Stack Custom Web Apps",
      "iOS & Android Mobile Apps",
      "SaaS Platform Development",
      "REST & GraphQL API Integration",
      "Speed & Core Web Vitals Optimization",
    ],
  },
  {
    id: "ai-automation",
    icon: <Bot className="w-7 h-7 text-black" />,
    title: "AI & Workflow Automation",
    subtitle: "Cutting-edge artificial intelligence solutions that streamline operations, reduce overhead, and boost response times 24/7.",
    items: [
      "Custom AI Chatbots & Knowledge Bases",
      "WhatsApp & CRM Automation",
      "Business Process Automation",
      "Autonomous AI Agents",
      "AI Content & Asset Creation Pipelines",
      "Zapier / Make Workflow Automation",
      "Lead Enrichment & Auto-Nurturing",
      "Bespoke Enterprise AI Integration",
    ],
  },
];

// 3D Magnetic Playing Card Component with Holographic Light Flare & Cursor Tilt
function InteractivePlayingCard({
  children,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  className: string;
  delay?: number;
}) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [rotate, setRotate] = useState({ x: 0, y: 0 });
  const [shinePos, setShinePos] = useState({ x: "50%", y: "50%" });
  const [isHovered, setIsHovered] = useState(false);

  const animRef = useRef<number | null>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Smooth tilt calculation (-9deg to +9deg)
    const rotateX = -((y - centerY) / centerY) * 9;
    const rotateY = ((x - centerX) / centerX) * 9;

    if (animRef.current) cancelAnimationFrame(animRef.current);
    animRef.current = requestAnimationFrame(() => {
      setRotate({ x: rotateX, y: rotateY });
      setShinePos({ x: `${x}px`, y: `${y}px` });
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setRotate({ x: 0, y: 0 });
  };

  return (
    <motion.article
      ref={cardRef}
      initial={{ opacity: 0, y: 60, rotateX: 12, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.16, 1, 0.3, 1] }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      animate={{
        rotateX: isHovered ? rotate.x : 0,
        rotateY: isHovered ? rotate.y : 0,
        scale: isHovered ? 1.03 : 1,
        y: isHovered ? -12 : 0,
      }}
      style={{
        transformStyle: "preserve-3d",
        perspective: 1000,
        // @ts-ignore
        "--mouse-x": shinePos.x,
        // @ts-ignore
        "--mouse-y": shinePos.y,
      }}
      className={`playing-card ${className}`}
    >
      <div className="card-shine" />
      {children}
    </motion.article>
  );
}

export default function ServicesSection() {
  return (
    <section id="services" className="pt-4 sm:pt-6 pb-20 bg-[#f0f0f0] relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        
        {/* Centered Top Header for 3rd Page (Recreated exact Navy Bubble Cluster Frame from User Reference Image) */}
        <div className="text-center max-w-4xl mx-auto mb-10">
          
          {/* Compact Bubble Cluster Medallion Frame with Bihar Stack Logo */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mt-1 sm:mt-1 mb-2 sm:mb-3 relative select-none"
          >
            <div className="relative inline-flex items-center my-0 max-w-full">
              
              {/* Main Sleek Horizontal Header Container */}
              <div className="relative pl-11 sm:pl-16 pr-3.5 sm:pr-5 py-1.5 sm:py-2 flex flex-col items-center justify-center">
                
                {/* Heading Text + Question Mark Emoji directly to its right */}
                <div className="relative inline-flex items-center justify-center">
                  <h2 className="text-xl sm:text-3xl lg:text-4xl font-black uppercase tracking-wider text-[#0A2540]">
                    What We Offer
                  </h2>

                  <InteractiveQuestionMark />
                </div>

                {/* Ultra-Slim 5-Step Connected Chevron Arrow Ribbon (Exact length of What We Offer heading & just below it) */}
                <div className="w-full mt-1.5 sm:mt-2 select-none drop-shadow-sm">
                  <div className="flex items-center justify-center w-full">
                    {[
                      { id: 1, bg: "bg-[#0B2E4C]", icon: <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 2, bg: "bg-[#0088CC]", icon: <DollarSign className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 3, bg: "bg-[#00B58A]", icon: <Settings className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 4, bg: "bg-[#F59E0B]", icon: <Package className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                      { id: 5, bg: "bg-[#EF4444]", icon: <Wallet className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-white" /> },
                    ].map((step, idx) => (
                      <div
                        key={step.id}
                        className={`relative flex-1 h-3.5 sm:h-4.5 ${step.bg} flex items-center justify-center transition-transform hover:scale-105 ${idx > 0 ? "-ml-1.5 sm:-ml-2" : ""}`}
                        style={{
                          clipPath: idx === 0 
                            ? "polygon(0% 0%, calc(100% - 6px) 0%, 100% 50%, calc(100% - 6px) 100%, 0% 100%)" 
                            : "polygon(0% 0%, calc(100% - 6px) 0%, 100% 50%, calc(100% - 6px) 100%, 0% 100%, 6px 50%)"
                        }}
                      >
                        <div className="pl-0.5 sm:pl-1 pr-0.5">
                          {step.icon}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Left Bubbles Medallion Cluster with Bihar Stack Logo & 360° Orbiting Satellite Bubbles */}
              <div className="absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 z-20 pointer-events-none">
                <div className="relative w-12 h-12 sm:w-16 sm:h-16">
                  
                  {/* 1. Main Central Large Light Gray Disc with Stationary Bihar Stack Logo */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-b from-[#FAFDFE] to-[#E2E8F0] border-2 border-[#CBD5E1] shadow-[0_4px_14px_rgba(0,0,0,0.3)] flex items-center justify-center z-10">
                    <div className="w-6 h-6 sm:w-8 sm:h-8 bg-black rounded-md flex items-center justify-center shadow-md">
                      <Layers className="w-3.5 h-3.5 sm:w-5 sm:h-5 text-white" />
                    </div>
                  </div>

                  {/* True 360° Tight-Bound Pulsating Orbit Ring (Kam Distance me hi Aage-Pichhe Floating) */}
                  <motion.div 
                    animate={{ rotate: 360 }}
                    transition={{ duration: 16, repeat: Infinity, ease: "linear" }}
                    className="absolute -inset-2 sm:-inset-3.5 z-20 pointer-events-none rounded-full"
                  >
                    {/* 1. Web Code Bubble (0° - Tight Orbit) */}
                    <div className="absolute top-[50%] left-[98%] -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ 
                          x: [0, 4, -2, 3, 0],
                          y: [0, -3, 3, -2, 0],
                          scale: [1, 1.06, 0.94, 1.04, 1]
                        }}
                        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4.5 h-4.5 sm:w-6 sm:h-6 rounded-full bg-[#0A2540] border-2 border-white shadow-md flex items-center justify-center"
                      >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
                          <Code2 className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-cyan-400" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* 2. Creative Design Bubble (60° - Tight Orbit) */}
                    <div className="absolute top-[18%] left-[76%] -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ 
                          x: [0, -3, 3, -4, 0],
                          y: [0, 3, -3, 2, 0],
                          scale: [1, 0.94, 1.06, 0.96, 1]
                        }}
                        transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 rounded-full bg-[#1E3A8A] border-2 border-white shadow-sm flex items-center justify-center"
                      >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
                          <Palette className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-pink-400" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* 3. Digital Marketing Megaphone Bubble (120° - Tight Orbit) */}
                    <div className="absolute top-[2%] left-[24%] -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ 
                          x: [0, 4, -3, 2, 0],
                          y: [0, -4, 3, -2, 0],
                          scale: [1, 1.08, 0.93, 1.05, 1]
                        }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full bg-[#EA580C] border-2 border-white shadow-md flex items-center justify-center"
                      >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
                          <Megaphone className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-yellow-300" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* 4. AI & Automation Bot Bubble (180° - Tight Orbit) */}
                    <div className="absolute top-[50%] left-[2%] -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ 
                          x: [0, -4, 3, -2, 0],
                          y: [0, 3, -4, 2, 0],
                          scale: [1, 0.94, 1.07, 0.96, 1]
                        }}
                        transition={{ duration: 5.0, repeat: Infinity, ease: "easeInOut" }}
                        className="w-5 h-5 sm:w-6.5 sm:h-6.5 rounded-full bg-[#031427] border-2 border-white shadow-md flex items-center justify-center"
                      >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
                          <Bot className="w-2.5 h-2.5 sm:w-3 sm:h-3 text-purple-400" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* 5. SEO & Growth Bubble (240° - Tight Orbit) */}
                    <div className="absolute top-[98%] left-[24%] -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ 
                          x: [0, 3, -4, 2, 0],
                          y: [0, -3, 4, -3, 0],
                          scale: [1, 1.06, 0.94, 1.04, 1]
                        }}
                        transition={{ duration: 3.9, repeat: Infinity, ease: "easeInOut" }}
                        className="w-4 h-4 sm:w-5.5 sm:h-5.5 rounded-full bg-[#0284C7] border-2 border-white shadow-sm flex items-center justify-center"
                      >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
                          <TrendingUp className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-amber-300" />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* 6. Sparkles Innovation Bubble (300° - Tight Orbit) */}
                    <div className="absolute top-[85%] left-[76%] -translate-x-1/2 -translate-y-1/2">
                      <motion.div
                        animate={{ 
                          x: [0, -3, 3, -2, 0],
                          y: [0, 3, -3, 3, 0],
                          scale: [1, 0.95, 1.06, 0.95, 1]
                        }}
                        transition={{ duration: 4.6, repeat: Infinity, ease: "easeInOut" }}
                        className="w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-gradient-to-b from-white to-[#CBD5E1] border border-neutral-300 shadow-md flex items-center justify-center"
                      >
                        <motion.div animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }}>
                          <Sparkles className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-orange-500" />
                        </motion.div>
                      </motion.div>
                    </div>
                  </motion.div>

                  {/* Far Left Half-Hidden White Bubble */}
                  <div className="absolute top-1/2 -left-4 -translate-y-1/2 w-3.5 h-3.5 sm:w-4.5 sm:h-4.5 rounded-full bg-[#E2E8F0] border border-neutral-300 shadow-sm z-0" />
                </div>
              </div>

            </div>
          </motion.div>

        </div>

        <div className="cards-container">
          {/* CARD 01: DIGITAL MARKETING (BURGUNDY ACE OF SPADES) */}
          <InteractivePlayingCard className="card-burgundy" delay={0.1}>
            <div>
              <h2 className="card-title">Digital Marketing & Performance</h2>

              <div className="sub-grid">
                <div className="sub-item"><Share2 className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Social Media Marketing</span></div>
                <div className="sub-item"><TrendingUp className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Performance Marketing</span></div>
                <div className="sub-item"><Target className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Meta Ads & Google Ads</span></div>
                <div className="sub-item"><Search className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Search Engine Optimization (SEO)</span></div>
                <div className="sub-item"><MapPin className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Local SEO & GMB Ranking</span></div>
                <div className="sub-item"><Users className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>High-Converting Lead Gen</span></div>
                <div className="sub-item"><Award className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Influencer Outreach</span></div>
                <div className="sub-item"><Mail className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Automated Email Campaigns</span></div>
              </div>
            </div>

            <div className="card-footer">
              <a href="#contact" className="btn-start group">
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </a>
            </div>
          </InteractivePlayingCard>

          {/* CARD 02: BRANDING & CREATIVE (CREAM ACE OF HEARTS) */}
          <InteractivePlayingCard className="card-cream" delay={0.25}>
            <div>
              <h2 className="card-title">Branding & Creative Design</h2>

              <div className="sub-grid">
                <div className="sub-item"><Sparkles className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Logo & Visual Brand Identity</span></div>
                <div className="sub-item"><Palette className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Graphic & Social Media Creatives</span></div>
                <div className="sub-item"><Layout className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>UI/UX Design for Web & Apps</span></div>
                <div className="sub-item"><Film className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Motion Graphics & 3D Visuals</span></div>
                <div className="sub-item"><Video className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>High-Production Video Editing</span></div>
                <div className="sub-item"><Package className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Product Branding & Packaging</span></div>
                <div className="sub-item"><BookOpen className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Brand Guidelines & Voice</span></div>
                <div className="sub-item"><ImageIcon className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Marketing Collaterals</span></div>
              </div>
            </div>

            <div className="card-footer">
              <a href="#contact" className="btn-start group">
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </a>
            </div>
          </InteractivePlayingCard>

          {/* CARD 03: WEBSITE & CUSTOM TECH (OBSIDIAN ACE OF DIAMONDS) */}
          <InteractivePlayingCard className="card-obsidian" delay={0.4}>
            <div>
              <h2 className="card-title">Website & Custom Technology</h2>

              <div className="sub-grid">
                <div className="sub-item"><Globe className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Custom Business Websites</span></div>
                <div className="sub-item"><ShoppingCart className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>E-commerce Platforms (Shopify/Next)</span></div>
                <div className="sub-item"><Rocket className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>High-Converting Landing Pages</span></div>
                <div className="sub-item"><Code2 className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Full-Stack Custom Web Apps</span></div>
                <div className="sub-item"><Smartphone className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>iOS & Android Mobile Apps</span></div>
                <div className="sub-item"><Cloud className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>SaaS Platform Development</span></div>
                <div className="sub-item"><Cpu className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>REST & GraphQL API Integration</span></div>
                <div className="sub-item"><Gauge className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Speed & Core Web Vitals Optimization</span></div>
              </div>
            </div>

            <div className="card-footer">
              <a href="#contact" className="btn-start group">
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </a>
            </div>
          </InteractivePlayingCard>

          {/* CARD 04: AI & WORKFLOW AUTOMATION (EMERALD ACE OF CLUBS) */}
          <InteractivePlayingCard className="card-emerald" delay={0.55}>
            <div>
              <h2 className="card-title">AI & Workflow Automation</h2>

              <div className="sub-grid">
                <div className="sub-item"><Bot className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Custom AI Chatbots & Knowledge Bases</span></div>
                <div className="sub-item"><MessageSquare className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>WhatsApp & CRM Automation</span></div>
                <div className="sub-item"><Workflow className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Business Process Automation</span></div>
                <div className="sub-item"><Brain className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Autonomous AI Agents</span></div>
                <div className="sub-item"><Sparkles className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>AI Content & Asset Creation Pipelines</span></div>
                <div className="sub-item"><Layers className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Zapier / Make Workflow Automation</span></div>
                <div className="sub-item"><UserPlus className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Lead Enrichment & Auto-Nurturing</span></div>
                <div className="sub-item"><ShieldCheck className="w-3.5 h-3.5 shrink-0 opacity-80" /><span>Bespoke Enterprise AI Integration</span></div>
              </div>
            </div>

            <div className="card-footer">
              <a href="#contact" className="btn-start group">
                <span>Read More</span>
                <span className="btn-icon-bubble">➔</span>
              </a>
            </div>
          </InteractivePlayingCard>
        </div>
      </div>
    </section>
  );
}

