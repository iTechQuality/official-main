"use client";

import { motion } from "framer-motion";
import { Code2, Database, Map, Smartphone, Brain, Building2, Cloud, Wrench } from "lucide-react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";
import { SERVICES } from "@/constants/site";

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Code2, Database, Map, Smartphone, Brain, Building2, Cloud, Wrench,
};

export function ServicesGrid() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Code2;
            return (
              <motion.div
                key={service.slug}
                id={service.slug}
                variants={fadeUp}
                className="glass rounded-3xl p-8 group hover:border-white/12 hover:-translate-y-1 transition-all duration-400 relative overflow-hidden"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${service.color}10, transparent 60%)` }}
                />

                <div className="flex items-start gap-5 mb-5">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-300"
                    style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: service.color }} />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-white mb-1"
                      style={{ fontFamily: "var(--font-syne)" }}
                    >
                      {service.title}
                    </h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{service.description}</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2 mb-6">
                  {service.features.map((f) => (
                    <div key={f} className="flex items-center gap-2 text-xs text-slate-400">
                      <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: service.color }} />
                      {f}
                    </div>
                  ))}
                </div>

                <Link
                  href="/contact"
                  className="inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-200"
                  style={{ color: service.color }}
                >
                  Discuss your project <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
