"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Car, ArrowRight, CheckCircle, Star, Play } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const HIGHLIGHTS = [
  "Fully paperless RTO operations",
  "Online citizen self-service portal",
  "Real-time dashboards & reports",
  "Integrated payment gateway",
];

const QUICK_STATS = [
  { value: 10, suffix: "+", label: "RTOs Deployed" },
  { value: 5000, suffix: "+", label: "Daily Transactions" },
  { value: 1, suffix: "M+", label: "Records Managed" },
  { value: 99, suffix: "%", label: "Uptime SLA" },
];

export function RtoHero() {
  return (
    <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-violet-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <motion.div
            variants={staggerContainer(0.1)}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeUp} className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center">
                <Car className="w-6 h-6 text-violet-400" />
              </div>
              <div>
                <span className="px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/20 text-amber-400 text-xs font-bold uppercase tracking-wider">
                  ★ Flagship Product
                </span>
              </div>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              <span className="text-white"> RTO</span>
              <br />
              <span className="gradient-text">Management System</span>
            </motion.h1>

            <motion.p variants={fadeUp} className="text-lg text-violet-400 font-medium mb-4">
              Complete Digital Platform for Regional Transport Offices
            </motion.p>

            <motion.p variants={fadeUp} className="text-slate-400 leading-relaxed mb-8 text-base">
              A comprehensive, paperless RTO management solution trusted by transport offices across India. From vehicle registration to driving licenses, tax collection to enforcement — everything in one powerful platform.
            </motion.p>

            <motion.ul variants={fadeUp} className="space-y-2 mb-8">
              {HIGHLIGHTS.map((h) => (
                <li key={h} className="flex items-center gap-2.5 text-sm text-slate-300">
                  <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                  {h}
                </li>
              ))}
            </motion.ul>

            <motion.div variants={fadeUp} className="flex flex-col sm:flex-row gap-3 mb-8">
              <Link
                href="/contact"
                className="group flex items-center justify-center gap-2 px-7 py-3.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all duration-300"
              >
                Request Demo
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
              <button className="flex items-center justify-center gap-2 px-7 py-3.5 glass border border-white/10 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all duration-300">
                <Play className="w-4 h-4 text-violet-400" />
                Watch Overview
              </button>
            </motion.div>

            <motion.div variants={fadeUp} className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4, 5].map((i) => (
                  <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                ))}
              </div>
              <span className="text-sm text-slate-400">5.0 — Trusted by 30+ transport offices</span>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="relative"
          >
            {/* Main dashboard mockup */}
            <div className="relative rounded-2xl bg-[#0F1729] border border-white/10 overflow-hidden shadow-[0_40px_80px_rgba(0,0,0,0.6)] aspect-[4/3]">
              {/* Mockup header bar */}
              <div className="h-10 bg-[#151F35] border-b border-white/5 flex items-center gap-2 px-4">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-500/40" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500/40" />
                  <div className="w-3 h-3 rounded-full bg-green-500/40" />
                </div>
                <div className="flex-1 mx-4 h-5 bg-white/5 rounded-md flex items-center px-2">
                  <span className="text-[10px] text-slate-500">rto.rajasthan.gov.in/dashboard</span>
                </div>
              </div>

              {/* Dashboard content */}
              <div className="p-5 space-y-3">
                {/* Top metric cards */}
                <div className="grid grid-cols-3 gap-2">
                  {[
                    { label: "Today's Registrations", val: "284", color: "#7C3AED" },
                    { label: "Pending Applications", val: "47", color: "#2563EB" },
                    { label: "Revenue Today", val: "₹2.4L", color: "#10B981" },
                  ].map((m) => (
                    <div key={m.label} className="bg-white/[0.03] rounded-lg p-2.5 border border-white/5">
                      <div className="text-lg font-bold mb-0.5" style={{ color: m.color, fontFamily: "var(--font-syne)" }}>
                        {m.val}
                      </div>
                      <div className="text-[9px] text-slate-500 leading-tight">{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Chart placeholder */}
                <div className="bg-white/[0.02] rounded-lg p-3 border border-white/5 h-24 flex items-end gap-1">
                  {[40, 65, 45, 80, 60, 90, 70, 85, 55, 75, 95, 80].map((h, i) => (
                    <div
                      key={i}
                      className="flex-1 rounded-sm"
                      style={{ height: `${h}%`, background: i % 2 === 0 ? "rgba(124,58,237,0.4)" : "rgba(37,99,235,0.3)" }}
                    />
                  ))}
                </div>

                {/* Table rows */}
                <div className="space-y-1.5">
                  {["MH-12-AB-1234 · Completed", "RJ-14-CD-5678 · Pending", "GJ-01-EF-9012 · Processing"].map((row, i) => (
                    <div key={i} className="flex items-center justify-between bg-white/[0.02] rounded-lg px-3 py-2 border border-white/[0.04]">
                      <span className="text-[10px] text-slate-400">{row.split(" · ")[0]}</span>
                      <span className={`text-[9px] px-2 py-0.5 rounded-full font-medium ${i === 0 ? "bg-green-500/10 text-green-400" : i === 1 ? "bg-amber-500/10 text-amber-400" : "bg-blue-500/10 text-blue-400"
                        }`}>{row.split(" · ")[1]}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Glow */}
            <div className="absolute -inset-4 bg-violet-600/10 rounded-3xl blur-2xl -z-10" />
          </motion.div>
        </div>

        {/* Stats bar */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] mt-16"
        >
          {QUICK_STATS.map((s) => (
            <div key={s.label} className="bg-[#030712] px-6 py-5 text-center">
              <div className="text-3xl font-bold gradient-text mb-1" style={{ fontFamily: "var(--font-syne)" }}>
                <AnimatedCounter to={s.value} suffix={s.suffix} />
              </div>
              <div className="text-xs text-slate-500">{s.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
