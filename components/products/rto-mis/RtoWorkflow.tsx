"use client";

import { motion } from "framer-motion";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const STEPS = [
  { step: "01", title: "Citizen Applies Online", description: "Citizen submits application with documents via the self-service portal or mobile app — from home, 24/7.", color: "#7C3AED" },
  { step: "02", title: "Document Verification", description: "System auto-validates documents using AI. Officer reviews and approves digitally with full audit trail.", color: "#2563EB" },
  { step: "03", title: "Fee Calculation & Payment", description: "System automatically calculates applicable fees. Citizen pays online via UPI, NEFT, or card — instant receipt.", color: "#06B6D4" },
  { step: "04", title: "Processing & Approval", description: "Application routed to concerned officer. One-click approval with digital signature. No paperwork required.", color: "#10B981" },
  { step: "05", title: "Certificate Issuance", description: "Digital certificate generated instantly. Smart card dispatched for physical documents. SMS/email notification sent.", color: "#F59E0B" },
  { step: "06", title: "VAHAN / NIC Sync", description: "All records automatically synced with national VAHAN portal and state transport department in real-time.", color: "#EF4444" },
];

export function RtoWorkflow() {
  return (
    <section className="section-padding bg-[#0a0f1e]/50 relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="How It Works"
          title="The End-to-End"
          titleHighlight="RTO Workflow"
          description="From citizen application to certificate issuance — the entire process is digital, trackable, and transparent."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          {/* Connecting line */}
          <div className="hidden lg:block absolute top-[2.5rem] left-[8.5%] right-[8.5%] h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                variants={fadeUp}
                className="glass rounded-2xl p-6 relative group hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
              >
                {/* Step number */}
                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center text-sm font-bold mb-4 relative z-10"
                  style={{ background: `${step.color}15`, border: `1px solid ${step.color}30`, color: step.color, fontFamily: "var(--font-syne)" }}
                >
                  {step.step}
                </div>

                {/* Arrow connector for desktop */}
                {i < STEPS.length - 1 && i % 3 !== 2 && (
                  <div className="hidden lg:block absolute -right-3 top-[2.5rem] w-6 h-px z-20" style={{ background: step.color, opacity: 0.3 }} />
                )}

                <h3 className="text-base font-bold text-white mb-2">{step.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{step.description}</p>

                {/* Hover glow */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl pointer-events-none"
                  style={{ background: `radial-gradient(circle at 0% 0%, ${step.color}08, transparent 60%)` }}
                />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
