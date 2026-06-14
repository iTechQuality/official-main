"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const STEPS = [
  { n: "01", title: "Discovery & Requirements", desc: "We start with deep discovery — understanding your business, users, pain points, and goals before writing a single line of code.", color: "#7C3AED" },
  { n: "02", title: "Architecture & Design", desc: "Our architects design the system. UI/UX designers create wireframes and prototypes. You approve before development begins.", color: "#2563EB" },
  { n: "03", title: "Agile Development", desc: "Development in 2-week sprints with demos at each milestone. You see working software early and often — no surprises.", color: "#06B6D4" },
  { n: "04", title: "QA & Testing", desc: "Dedicated QA engineers run functional, performance, security, and UAT. No release without a passing test suite.", color: "#10B981" },
  { n: "05", title: "Deployment & Training", desc: "We handle production deployment, data migration, and comprehensive staff training. Go-live is planned, not rushed.", color: "#F59E0B" },
  { n: "06", title: "Support & Evolution", desc: "Post-launch support, monitoring, bug fixes, and continuous improvement. We're your long-term technology partner.", color: "#EF4444" },
];

export function ServicesProcess() {
  return (
    <section className="section-padding bg-[#0a0f1e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">
            Our Process
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            How We Deliver <span className="gradient-text">Every Project</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {STEPS.map((step) => (
            <motion.div
              key={step.n}
              variants={fadeUp}
              className="glass rounded-2xl p-6 group hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <div
                className="text-4xl font-bold mb-4 opacity-30"
                style={{ fontFamily: "var(--font-syne)", color: step.color }}
              >
                {step.n}
              </div>
              <div className="w-1 h-8 rounded-full mb-4" style={{ background: step.color }} />
              <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{step.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
