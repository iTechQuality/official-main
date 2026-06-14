"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Car, FileText, CreditCard, AlertTriangle, Users, BarChart3 } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeUp, viewport } from "@/lib/animations";

const MODULES = [
  {
    id: "vehicle",
    icon: Car,
    label: "Vehicle Registration",
    color: "#7C3AED",
    title: "Complete Vehicle Registration Module",
    description: "Manage the full lifecycle of vehicle registration — from new vehicle entry, fitness certificate, to transfer of ownership, hypothecation, and NOC issuance.",
    features: [
      "New vehicle registration (fresh)",
      "Re-registration and renewal",
      "Transfer of ownership (Form 29/30)",
      "Hypothecation addition/removal",
      "NOC generation for interstate transfer",
      "Fitness certificate management",
      "Green Card for transport vehicles",
      "High Security Registration Plates (HSRP) integration",
    ],
    target: "All vehicle types: private, commercial, two-wheeler, transport",
  },
  {
    id: "license",
    icon: FileText,
    label: "Driving License",
    color: "#2563EB",
    title: "Driving License Management",
    description: "End-to-end driving license processing — learner's license, permanent license, endorsements, renewals, and international driving permits.",
    features: [
      "Learner's License application & test scheduling",
      "Permanent License issuance workflow",
      "Renewal and duplicate license",
      "Endorsement for additional vehicle classes",
      "International Driving Permit (IDP)",
      "Online slot booking for driving tests",
      "Biometric integration for identity verification",
      "Aadhaar/DigiLocker integration",
    ],
    target: "Individual citizens, driving schools, renewal applicants",
  },
  {
    id: "tax",
    icon: CreditCard,
    label: "Tax & Fee Collection",
    color: "#10B981",
    title: "Tax & Revenue Management",
    description: "Comprehensive tax collection, fee management, and financial reconciliation — with online payment support and automated receipt generation.",
    features: [
      "Road tax calculation by vehicle type",
      "Quarterly / annual tax collection",
      "Online payment via UPI, NEFT, cards",
      "Bulk tax collection for fleets",
      "Automated tax due alerts",
      "Daily/monthly revenue reports",
      "Reconciliation with treasury",
      "Refund management",
    ],
    target: "Individual vehicle owners, fleet operators, transport companies",
  },
  {
    id: "permit",
    icon: AlertTriangle,
    label: "Permits & Enforcement",
    color: "#F59E0B",
    title: "Permits & Enforcement Module",
    description: "Manage all transport permits and enforcement activities — from route permits to vehicle inspections and challan management.",
    features: [
      "Route permit issuance (state & national)",
      "Temporary permit for special cases",
      "Contract carriage permit management",
      "Digital challan issuance",
      "Vehicle detention and release",
      "Insurance verification integration",
      "Pollution certificate validation",
      "Seized vehicle management",
    ],
    target: "Commercial vehicles, transport operators, enforcement officers",
  },
  {
    id: "citizen",
    icon: Users,
    label: "Citizen Portal",
    color: "#06B6D4",
    title: "Citizen Self-Service Portal",
    description: "A full-featured public portal that allows citizens to apply for services, track status, make payments, and download certificates — 24/7 without office visits.",
    features: [
      "Online application for all RTO services",
      "Real-time application status tracking",
      "Online slot booking for appointments",
      "Document upload and verification",
      "Online payment and receipt download",
      "Certificate and smart card delivery status",
      "Grievance submission portal",
      "WhatsApp / SMS status notifications",
    ],
    target: "Citizens, vehicle owners, driving license applicants",
  },
  {
    id: "reports",
    icon: BarChart3,
    label: "Reports & Analytics",
    color: "#EF4444",
    title: "Management Reports & Analytics",
    description: "Powerful reporting engine with pre-built government reports, custom dashboards, and export capabilities for state transport department compliance.",
    features: [
      "Daily registration and revenue summary",
      "Officer-wise performance reports",
      "VAHAN / NIC data sync reports",
      "Pending application aging reports",
      "Monthly statutory reports (Form 51, 52)",
      "Enforcement challan collection reports",
      "Custom date-range report builder",
      "Export to PDF, Excel, CSV",
    ],
    target: "RTO managers, transport commissioners, audit department",
  },
];

export function RtoModules() {
  const [active, setActive] = useState(MODULES[0].id);
  const current = MODULES.find((m) => m.id === active)!;
  const Icon = current.icon;

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute left-0 top-1/2 -translate-y-1/2 w-64 h-64 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="System Modules"
          title="Six Powerful"
          titleHighlight="Core Modules"
          description="Every module in the RTO system is purpose-built for the specific workflow of government transport operations."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Module tabs */}
          <div className="space-y-2">
            {MODULES.map((mod) => {
              const MIcon = mod.icon;
              return (
                <button
                  key={mod.id}
                  onClick={() => setActive(mod.id)}
                  className={`w-full flex items-center gap-3 p-4 rounded-2xl text-left transition-all duration-300 ${active === mod.id
                    ? "bg-white/8 border border-white/12"
                    : "glass border border-white/[0.05] hover:border-white/10"
                    }`}
                >
                  <div
                    className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                    style={{
                      background: active === mod.id ? `${mod.color}20` : `${mod.color}10`,
                      border: `1px solid ${mod.color}${active === mod.id ? "40" : "20"}`,
                    }}
                  >
                    <MIcon className="w-4 h-4" style={{ color: mod.color }} />
                  </div>
                  <span
                    className={`text-sm font-semibold transition-colors ${active === mod.id ? "text-white" : "text-slate-400"
                      }`}
                  >
                    {mod.label}
                  </span>
                  {active === mod.id && (
                    <div className="ml-auto w-1.5 h-1.5 rounded-full bg-violet-400" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Module detail */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl p-8 h-full"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center"
                    style={{ background: `${current.color}15`, border: `1px solid ${current.color}30` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: current.color }} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                      {current.title}
                    </h3>
                    <p className="text-sm text-slate-500 mt-0.5">{current.target}</p>
                  </div>
                </div>

                <p className="text-slate-400 leading-relaxed mb-6">{current.description}</p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {current.features.map((f) => (
                    <div key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <div
                        className="w-1.5 h-1.5 rounded-full mt-1.5 shrink-0"
                        style={{ background: current.color }}
                      />
                      {f}
                    </div>
                  ))}
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}
