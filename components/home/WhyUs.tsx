"use client";

import { motion } from "framer-motion";
import { Shield, Zap, Users, Clock, Code2, HeartHandshake } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const REASONS = [
  {
    icon: Shield,
    title: "Government-Grade Security",
    description:
      "Every product is built to government security standards — encrypted data, role-based access, audit trails, and compliance-ready architecture.",
    color: "#7C3AED",
  },
  {
    icon: Zap,
    title: "Fast Delivery, No Compromise",
    description:
      "Our agile process delivers production-ready software on time. Sprint-based delivery keeps you informed and in control at every milestone.",
    color: "#2563EB",
  },
  {
    icon: Users,
    title: "Dedicated Project Teams",
    description:
      "You get a dedicated team — project manager, architects, developers, and QA — not a rotating contractor pool. Continuity matters.",
    color: "#06B6D4",
  },
  {
    icon: Clock,
    title: "Long-Term Partnership",
    description:
      "We don't disappear after go-live. Our AMC and support contracts ensure your software evolves with your business needs for years.",
    color: "#10B981",
  },
  {
    icon: Code2,
    title: "Clean, Maintainable Code",
    description:
      "We write code that your future team can maintain. Full documentation, clean architecture, and technology choices that stand the test of time.",
    color: "#F59E0B",
  },
  {
    icon: HeartHandshake,
    title: "Transparent Communication",
    description:
      "No black boxes. Weekly status reports, real-time project dashboards, and direct access to the development team throughout your project.",
    color: "#EF4444",
  },
];

export function WhyUs() {
  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute right-0 top-1/2 -translate-y-1/2 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left: Header + Key differentiator */}
          <div>
            <SectionHeader
              eyebrow="Why iTechQu"
              title="The Standard Others"
              titleHighlight="Measure Against"
              description="We've spent 8+ years perfecting how enterprise software should be built, delivered, and supported. Here's what sets us apart."
              align="left"
            />

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={viewport}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 p-6 rounded-2xl bg-gradient-to-br from-violet-600/10 to-blue-600/10 border border-violet-500/20"
            >
              <blockquote className="text-lg text-slate-300 italic leading-relaxed mb-4">
                &ldquo;iTechQu delivered our RTO system in 6 months — on time, on budget, and exactly what we asked for. The system handles 5,000+ transactions daily without a single crash.&rdquo;
              </blockquote>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm">
                  RK
                </div>
                <div>
                  <div className="text-sm font-semibold text-white">Rajesh Kumar Sharma</div>
                  <div className="text-xs text-slate-500">Regional Transport Officer, Rajasthan</div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right: Reasons grid */}
          <motion.div
            variants={staggerContainer(0.08)}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
          >
            {REASONS.map((reason) => {
              const Icon = reason.icon;
              return (
                <motion.div
                  key={reason.title}
                  variants={fadeUp}
                  className="glass rounded-2xl p-5 group hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center mb-3"
                    style={{ background: `${reason.color}15`, border: `1px solid ${reason.color}25` }}
                  >
                    <Icon className="w-4 h-4" style={{ color: reason.color }} />
                  </div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{reason.title}</h4>
                  <p className="text-xs text-slate-400 leading-relaxed">{reason.description}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
