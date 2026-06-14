"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, Play, Shield, Zap, Globe } from "lucide-react";
import Link from "next/link";
import { SITE } from "@/constants/site";

const TRUST_BADGES = [
  { icon: Shield, text: "ISO Certified" },
  { icon: Zap, text: "99.9% Uptime" },
  { icon: Globe, text: "Government Trusted" },
];

export function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: containerRef, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  // const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]); // removed: was hiding content in production

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16"
    >
      {/* Animated background */}
      <div className="absolute inset-0 grid-bg" />
      <motion.div style={{ y }} className="absolute inset-0 pointer-events-none">
        {/* Radial glows */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[900px] h-[500px] bg-gradient-radial from-violet-600/20 via-transparent to-transparent rounded-full blur-3xl" />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 bg-blue-600/10 rounded-full blur-3xl" />
        <div className="absolute top-1/3 right-1/4 w-48 h-48 bg-cyan-600/10 rounded-full blur-3xl" />

        {/* Floating orbs */}
        {[
          { size: 200, top: "15%", left: "8%", color: "violet", delay: 0 },
          { size: 140, top: "60%", right: "10%", color: "blue", delay: 2 },
          { size: 100, top: "80%", left: "20%", color: "cyan", delay: 4 },
        ].map((orb, i) => (
          <motion.div
            key={i}
            animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 8 + i * 2, repeat: Infinity, ease: "easeInOut", delay: orb.delay }}
            className="absolute rounded-full opacity-20"
            style={{
              width: orb.size,
              height: orb.size,
              top: orb.top,
              left: (orb as { left?: string }).left,
              right: (orb as { right?: string }).right,
              background: `radial-gradient(circle at 30% 30%, ${
                orb.color === "violet" ? "#7C3AED" : orb.color === "blue" ? "#2563EB" : "#06B6D4"
              }, transparent)`,
              filter: "blur(40px)",
            }}
          />
        ))}
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">

        {/* Main headline */}
        <div className="overflow-hidden mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
            className="text-4xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold leading-[1.05] tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-white">Enterprise Software</span>
            <br />
            <span className="gradient-text">Built to Last.</span>
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className="text-lg sm:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed mb-10"
        >
          {SITE.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
        >
          <Link
            href="/products"
            className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all duration-300"
          >
            Explore Products
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
          <Link
            href="/contact"
            className="group flex items-center gap-2.5 px-8 py-4 glass border border-white/10 text-white font-semibold rounded-xl text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
          >
            <Play className="w-5 h-5 text-violet-400" />
            Watch Demo
          </Link>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.55 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-16"
        >
          {TRUST_BADGES.map(({ icon: Icon, text }) => (
            <div key={text} className="flex items-center gap-2 px-4 py-2 rounded-full glass border border-white/[0.07] text-sm text-slate-400">
              <Icon className="w-4 h-4 text-violet-400" />
              {text}
            </div>
          ))}
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-white/[0.04] rounded-2xl overflow-hidden border border-white/[0.06] max-w-3xl mx-auto"
        >
          {SITE.stats.map((stat) => (
            <div key={stat.label} className="bg-[#030712] px-6 py-5 text-center">
              <div
                className="text-3xl font-bold gradient-text mb-1"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {stat.value}{stat.suffix}
              </div>
              <div className="text-xs text-slate-500 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-slate-600 font-medium tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          className="w-5 h-8 rounded-full border border-white/10 flex items-start justify-center pt-1.5"
        >
          <div className="w-1 h-2 rounded-full bg-violet-400" />
        </motion.div>
      </motion.div>
    </section>
  );
}
