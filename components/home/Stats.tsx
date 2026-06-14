"use client";

import { motion } from "framer-motion";
import { TrendingUp, Users, Award, Clock } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { AnimatedCounter } from "@/components/shared/AnimatedCounter";

const STATS = [
  { icon: TrendingUp, value: 50, suffix: "+", label: "Projects Delivered", description: "Across India & abroad", color: "#7C3AED" },
  { icon: Users, value: 30, suffix: "+", label: "Happy Clients", description: "Businesses & organisations", color: "#2563EB" },
  { icon: Award, value: 8, suffix: "+", label: "Years of Excellence", description: "Since 2016", color: "#06B6D4" },
  { icon: Clock, value: 99, suffix: "%", label: "Client Satisfaction", description: "Based on project reviews", color: "#10B981" },
];

export function Stats() {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Divider glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-px bg-gradient-to-r from-transparent via-violet-500/40 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6"
        >
          {STATS.map((stat) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={fadeUp}
                className="glass rounded-2xl p-6 sm:p-8 relative overflow-hidden group hover:border-white/15 transition-all duration-300 hover:-translate-y-1"
              >
                {/* Glow bg on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 50% 0%, ${stat.color}15, transparent 70%)` }}
                />

                <div
                  className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                  style={{ background: `${stat.color}18`, border: `1px solid ${stat.color}30` }}
                >
                  <Icon className="w-5 h-5" style={{ color: stat.color }} />
                </div>

                <div
                  className="text-4xl sm:text-5xl font-bold mb-1"
                  style={{ fontFamily: "var(--font-syne)", color: stat.color }}
                >
                  <AnimatedCounter to={stat.value} suffix={stat.suffix} />
                </div>
                <div className="text-sm font-semibold text-white mb-1">{stat.label}</div>
                <div className="text-xs text-slate-500">{stat.description}</div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
