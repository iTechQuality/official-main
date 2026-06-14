"use client";

import { motion } from "framer-motion";
import { FileText, CreditCard, Search, BarChart3, Bell, Shield, Smartphone, Globe } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const FEATURES = [
  {
    icon: FileText,
    title: "End-to-End Registration",
    description: "Complete vehicle registration workflow — new registration, re-registration, transfer of ownership, and NOC — with document verification and approval trails.",
    color: "#7C3AED",
  },
  {
    icon: CreditCard,
    title: "Integrated Payment Gateway",
    description: "Collect road tax, fees, and penalties online via UPI, NEFT, credit/debit cards. Automated receipts and reconciliation reports.",
    color: "#2563EB",
  },
  {
    icon: Search,
    title: "Citizen Self-Service Portal",
    description: "Citizens apply online for registrations, licenses, and permits. Track application status in real-time without visiting the RTO office.",
    color: "#06B6D4",
  },
  {
    icon: BarChart3,
    title: "Real-Time Analytics Dashboard",
    description: "Live dashboards showing daily registrations, revenue, pending applications, officer performance, and compliance metrics for management.",
    color: "#10B981",
  },
  {
    icon: Bell,
    title: "Smart Notifications & Alerts",
    description: "Automated SMS and email alerts for license expiry, tax dues, renewal reminders, application updates, and enforcement notices.",
    color: "#F59E0B",
  },
  {
    icon: Shield,
    title: "Enforcement & Challan System",
    description: "Digital enforcement module for field officers — issue challans, verify insurance, check vehicle status, and upload evidence in real-time.",
    color: "#EF4444",
  },
  {
    icon: Smartphone,
    title: "Mobile Officer App",
    description: "Dedicated mobile app for RTO officers and inspectors — field operations, vehicle inspections, and document scanning from anywhere.",
    color: "#8B5CF6",
  },
  {
    icon: Globe,
    title: "GIS Vehicle Tracking",
    description: "Geospatial vehicle mapping for fleet registration, route permits, and commercial vehicle tracking integrated with national VAHAN portal.",
    color: "#EC4899",
  },
];

export function RtoFeatures() {
  return (
    <section className="section-padding bg-[#0a0f1e]/50 relative">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="Core Features"
          title="Everything a Modern"
          titleHighlight="RTO Needs"
          description="The RTO Management System covers every workflow in a Regional Transport Office — from citizen applications to field enforcement to management reporting."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
        >
          {FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="glass rounded-2xl p-6 group hover:border-white/15 hover:-translate-y-1.5 transition-all duration-300"
              >
                <div
                  className="w-11 h-11 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300"
                  style={{ background: `${feature.color}15`, border: `1px solid ${feature.color}25` }}
                >
                  <Icon className="w-5 h-5" style={{ color: feature.color }} />
                </div>
                <h3 className="text-sm font-bold text-white mb-2">{feature.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{feature.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
