"use client";

import { motion } from "framer-motion";
import { TrendingDown, Clock, Users, Lock, Globe, Award } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const BENEFITS = [
  { icon: TrendingDown, metric: "80%", label: "Reduction in Processing Time", description: "What took 3–5 working days now completes in hours. Faster service for citizens, less workload for staff.", color: "#7C3AED" },
  { icon: Clock, metric: "24/7", label: "Citizen Self-Service", description: "Citizens apply, pay, and track applications any time without visiting the office — reducing footfall by 60%.", color: "#2563EB" },
  { icon: Users, metric: "5K+", label: "Daily Transactions Handled", description: "The system handles thousands of transactions per day without slowdowns — built for government-scale operations.", color: "#06B6D4" },
  { icon: Lock, metric: "100%", label: "Audit Trail Coverage", description: "Every action is logged. Full transparency for anti-corruption compliance, government audits, and RTI queries.", color: "#10B981" },
  { icon: Globe, metric: "VAHAN", label: "National Portal Integration", description: "Seamlessly synced with the national VAHAN portal for inter-state data sharing and national statistics.", color: "#F59E0B" },
  { icon: Award, metric: "99.9%", label: "System Uptime SLA", description: "Hosted with redundancy and automatic failover. Zero data loss, zero service interruption.", color: "#EF4444" },
];

export function RtoBenefits() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Business Impact"
          title="Proven Results"
          titleHighlight="For Every RTO"
          description="RTOs using the  system report measurable improvements in efficiency, citizen satisfaction, and revenue collection from the first month."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {BENEFITS.map((b) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.label}
                variants={fadeUp}
                className="glass rounded-2xl p-7 group hover:border-white/15 hover:-translate-y-1.5 transition-all duration-300 relative overflow-hidden"
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className="w-11 h-11 rounded-xl flex items-center justify-center"
                    style={{ background: `${b.color}15`, border: `1px solid ${b.color}25` }}
                  >
                    <Icon className="w-5 h-5" style={{ color: b.color }} />
                  </div>
                  <span
                    className="text-3xl font-bold"
                    style={{ fontFamily: "var(--font-syne)", color: b.color }}
                  >
                    {b.metric}
                  </span>
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{b.label}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{b.description}</p>

                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                  style={{ background: `radial-gradient(circle at 100% 100%, ${b.color}08, transparent 60%)` }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
