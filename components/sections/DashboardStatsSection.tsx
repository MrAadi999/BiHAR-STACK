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
        
        {/* BIHARSTACK_DASHBOARD Live Performance Component */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 w-full rounded-none bg-white border-2 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]"
        >
          <div className="flex items-center justify-between pb-4 mb-6 border-b-2 border-black">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-black" />
              <div className="w-3 h-3 bg-neutral-400" />
              <div className="w-3 h-3 border border-black" />
              <span className="text-xs font-mono font-bold tracking-wider text-black ml-2 uppercase">
                BIHARSTACK_DASHBOARD
              </span>
            </div>
            <span className="text-[10px] font-bold tracking-widest uppercase px-3 py-1 bg-black text-white">
              LIVE STATUS
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            <div className="p-4 bg-[#f0f0f0] border border-black">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Monthly Growth</p>
              <p className="text-3xl font-black text-black mt-1">+248.5%</p>
              <span className="text-[10px] font-bold text-black uppercase">↑ VERIFIED KPI</span>
            </div>

            <div className="p-4 bg-[#f0f0f0] border border-black">
              <p className="text-[10px] font-bold uppercase tracking-widest text-neutral-600">Ad ROI Return</p>
              <p className="text-3xl font-black text-black mt-1">4.8x</p>
              <span className="text-[10px] font-bold text-black uppercase">HIGH-CONVERTING</span>
            </div>

            <div className="p-4 bg-white border border-black space-y-2">
              <div className="flex justify-between text-xs font-bold uppercase tracking-wider text-black">
                <span>Performance Optimization</span>
                <span className="font-mono">98.2%</span>
              </div>
              <div className="w-full h-3 bg-[#f0f0f0] border border-black p-0.5">
                <motion.div
                  initial={{ width: "0%" }}
                  whileInView={{ width: "98%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, delay: 0.3 }}
                  className="h-full bg-black"
                />
              </div>
            </div>
          </div>
        </motion.div>

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
