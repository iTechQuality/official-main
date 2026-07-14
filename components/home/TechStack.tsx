"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TECH_STACK } from "@/constants/site";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const CATEGORY_COLORS: Record<string, string> = {
  Frontend: "#06B6D4",
  Mobile: "#54C5F8",
  Backend: "#10B981",
  Database: "#336791",
  GIS: "#4169E1",
  Cache: "#DC382D",
  "AI/ML": "#FF9900",
};

export function TechStack() {
  const categories = [...new Set(TECH_STACK.map((t) => t.category))];

  return (
    <section className="section-padding bg-[#0a0f1e]/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Technology Stack"
          title="Built With"
          titleHighlight="Modern Technology"
          description="We choose technologies that scale, perform, and stand the test of time — not just the latest trend."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3"
        >
          {TECH_STACK.map((tech) => {
            const catColor = CATEGORY_COLORS[tech.category] || "#7C3AED";
            return (
              <motion.div
                key={tech.name}
                variants={fadeUp}
                className="glass rounded-2xl p-4 text-center group hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                <div
                  className="w-10 h-10 rounded-xl mx-auto mb-2.5 flex items-center justify-center text-lg font-bold"
                  style={{ background: `${catColor}15`, border: `1px solid ${catColor}25`, color: catColor }}
                >
                  {tech.name.slice(0, 2)}
                </div>
                <div className="text-xs font-semibold text-white leading-tight">{tech.name}</div>
                <div className="text-[10px] text-slate-600 mt-0.5">{tech.category}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Category legend */}
        <motion.div
          variants={staggerContainer(0.05)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          {categories.map((cat) => {
            const color = CATEGORY_COLORS[cat] || "#7C3AED";
            return (
              <motion.div
                key={cat}
                variants={fadeUp}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-full glass border border-white/[0.06] text-xs text-slate-400"
              >
                <div className="w-2 h-2 rounded-full" style={{ background: color }} />
                {cat}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
