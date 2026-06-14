"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function ServicesHero() {
  return (
    <section className="relative min-h-[55vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              What We Build
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-white">Enterprise Services</span>
            <br />
            <span className="gradient-text">That Drive Results</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            From custom software to AI automation — every service we offer is backed by deep domain expertise, a proven delivery process, and an unwavering commitment to quality.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}
