"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp } from "@/lib/animations";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center pt-16 overflow-hidden">
      <div className="absolute inset-0 grid-bg" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/12 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              About iTechQu
            </span>
          </motion.div>
          <motion.h1
            variants={fadeUp}
            className="text-4xl sm:text-6xl font-bold leading-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            <span className="text-white">Information Technology</span>
            <br />
            <span className="gradient-text">With Quality</span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Founded in 2021 in Raipur, Chhattisgarh — a team that started with 5 people and a single belief: quality software, built right, changes everything.
          </motion.p>
          <motion.div variants={fadeUp} className="flex flex-wrap justify-center gap-4 mt-8">
            {[
              { label: "Founded", value: "2021" },
              { label: "Headquarters", value: "Raipur, CG" },
              { label: "Udyam No.", value: "UDYAM-CG-14-0102405" },
              { label: "Category", value: "MSME · Services" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-xl px-5 py-3 text-center border border-white/8">
                <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">{item.label}</div>
                <div className="text-sm font-semibold text-white">{item.value}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
