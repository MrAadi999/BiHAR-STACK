"use client";

import React from "react";
import { motion } from "framer-motion";
import { FolderCheck, Users, RefreshCw, Award } from "lucide-react";
import GlassCard from "@/components/ui/GlassCard";

const stats = [
  {
    icon: <FolderCheck className="w-6 h-6 text-black" />,
    value: "100+",
    label: "Projects Delivered",
    description: "High-impact digital & AI products launched",
  },
  {
    icon: <Users className="w-6 h-6 text-black" />,
    value: "50+",
    label: "Active Clients",
    description: "Trusting us across India and globally",
  },
  {
    icon: <RefreshCw className="w-6 h-6 text-black" />,
    value: "95%",
    label: "Client Retention",
    description: "Long-term partners who keep growing with us",
  },
  {
    icon: <Award className="w-6 h-6 text-black" />,
    value: "5+ Years",
    label: "Industry Mastery",
    description: "Proven track record of digital transformation",
  },
];

export default function DashboardStatsSection() {
  return (
    <section id="dashboard-stats" className="py-20 bg-[#f0f0f0] text-black relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 lg:px-12 relative z-10">
        {/* 4 Stats Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard className="h-full flex flex-col justify-between p-6">
                <div>
                  <div className="p-3 bg-[#f0f0f0] border border-black w-fit mb-4">
                    {stat.icon}
                  </div>
                  <h3 className="font-display text-4xl font-black text-black tracking-tight mb-1">
                    {stat.value}
                  </h3>
                  <p className="text-xs font-bold uppercase tracking-wider text-black">{stat.label}</p>
                </div>
                <p className="text-xs text-neutral-600 font-medium mt-3 pt-3 border-t border-neutral-200">
                  {stat.description}
                </p>
              </GlassCard>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
