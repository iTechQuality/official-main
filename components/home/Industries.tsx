"use client";

import { motion } from "framer-motion";
import { Building2, Car, GraduationCap, Heart, Globe, Factory, ShoppingBag, Leaf } from "lucide-react";
import Link from "next/link";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";
import { INDUSTRIES } from "@/constants/site";

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Building2, Car, GraduationCap, Heart, Globe, Factory, ShoppingBag, Leaf,
};

const COLORS = ["#7C3AED", "#2563EB", "#06B6D4", "#10B981", "#F59E0B", "#EF4444", "#8B5CF6", "#EC4899"];

export function Industries() {
  return (
    <section className="section-padding bg-[#0a0f1e]/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Industries We Serve"
          title="Trusted Across"
          titleHighlight="Every Sector"
          description="From government transport departments to smart cities — our solutions are deployed across diverse industries, delivering measurable impact."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4"
        >
          {INDUSTRIES.map((industry, idx) => {
            const Icon = ICON_MAP[industry.icon] || Building2;
            const color = COLORS[idx % COLORS.length];
            return (
              <motion.div
                key={industry.name}
                variants={fadeUp}
                className="glass rounded-2xl p-5 text-center group hover:border-white/15 hover:-translate-y-1.5 transition-all duration-300 cursor-pointer"
              >
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${color}15`, border: `1px solid ${color}25` }}
                >
                  <Icon className="w-6 h-6" style={{ color }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-1 leading-tight">{industry.name}</h3>
                <p className="text-xs text-slate-500 mb-3 leading-tight">{industry.description}</p>
                <span
                  className="inline-block px-2.5 py-1 rounded-full text-xs font-semibold"
                  style={{ background: `${color}15`, color }}
                >
                  {industry.count}
                </span>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-10 text-center"
        >
          <Link
            href="/industries"
            className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors"
          >
            Explore all industries →
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
