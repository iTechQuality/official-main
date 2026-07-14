"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Code2, Database, Map, Smartphone, Brain, Building2, Wrench } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SERVICES } from "@/constants/site";

const ICON_MAP: Record<string, React.FC<{ className?: string; style?: React.CSSProperties }>> = {
  Code2, Database, Map, Smartphone, Brain, Building2, Wrench,
};

export function Services() {
  return (
    <section className="section-padding bg-[#0a0f1e]/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Services"
          title="What We Build"
          titleHighlight="For You"
          description="From enterprise software to AI solutions — we deliver technology that creates measurable business impact."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {SERVICES.map((service) => {
            const Icon = ICON_MAP[service.icon] || Code2;
            return (
              <motion.div
                key={service.slug}
                variants={fadeUp}
                className="glass rounded-2xl p-6 relative overflow-hidden group hover:border-white/15 transition-all duration-400 hover:-translate-y-1.5 cursor-pointer"
              >
                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${service.color}12, transparent 60%)` }}
                />

                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${service.color}15`, border: `1px solid ${service.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: service.color }} />
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-tight">{service.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-3">{service.description}</p>

                <ul className="space-y-1 mb-5">
                  {service.features.slice(0, 3).map((f) => (
                    <li key={f} className="text-xs text-slate-500 flex items-center gap-1.5">
                      <div className="w-1 h-1 rounded-full" style={{ background: service.color }} />
                      {f}
                    </li>
                  ))}
                </ul>

                <Link
                  href={`/services#${service.slug}`}
                  className="flex items-center gap-1 text-xs font-semibold transition-colors duration-200 group-hover:gap-2"
                  style={{ color: service.color }}
                >
                  Learn more <ArrowRight className="w-3 h-3" />
                </Link>
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
            href="/services"
            className="inline-flex items-center gap-2 px-8 py-3.5 glass border border-white/10 text-white font-semibold rounded-xl hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm"
          >
            View all services
            <ArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
