import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { CTA } from "@/components/home/CTA";
import { INDUSTRIES } from "@/constants/site";

export const metadata: Metadata = {
  title: "Industries We Serve — Government, Transport, Education & More | iTechQu",
  description: "iTechQu builds software for government & public sector, transport & RTO, education, healthcare, smart cities, manufacturing, retail, and NGOs across India.",
};

const DETAIL = {
  "Government & Public Sector": {
    color: "#7C3AED",
    longDesc: "We build digital platforms for state and central government departments — citizen portals, e-governance systems, compliance platforms, and inter-department data sharing systems. Our solutions are built to government security standards with full audit trails and RTI-ready reporting.",
    solutions: ["Citizen Service Portals", "e-Governance Platforms", "Inter-department Integration", "Government ERP", "Compliance & Reporting", "Document Management"],
  },
  "Transport & RTO": {
    color: "#2563EB",
    longDesc: "Our flagship RTO Management System has transformed how Regional Transport Offices operate — replacing paper-heavy processes with a fully digital, transparent, and citizen-friendly platform.",
    solutions: ["RTO Management System", "Vehicle Registration", "Driving License Processing", "Tax Collection", "Permit Management", "Enforcement System"],
  },
  "Education": {
    color: "#10B981",
    longDesc: "School ERP, university admission portals, student information systems, e-learning platforms, and fee management — we build education technology that actually gets adopted by staff and students.",
    solutions: ["School ERP", "Admission Portal", "Fee Management", "Learning Management", "Result & Report Cards", "Parent Communication"],
  },
  "Healthcare": {
    color: "#EF4444",
    longDesc: "Hospital management systems, patient records, OPD/IPD management, billing, pharmacy, and lab integrations — built for Indian healthcare workflows and compliance requirements.",
    solutions: ["Hospital Management", "Patient Records (EMR)", "OPD & IPD Module", "Lab & Pharmacy", "Billing & Insurance", "Telemedicine Portal"],
  },
  "Smart City": {
    color: "#06B6D4",
    longDesc: "GIS-powered urban management platforms for smart city initiatives — from citizen grievance portals to asset tracking, utility management, and real-time city dashboards.",
    solutions: ["City Dashboard", "GIS Asset Management", "Citizen Grievance Portal", "Utility Management", "Traffic Analytics", "Environmental Monitoring"],
  },
  "Manufacturing": {
    color: "#F59E0B",
    longDesc: "Production planning, inventory control, quality management, and supply chain systems tailored for Indian manufacturing SMEs and large enterprises.",
    solutions: ["Production ERP", "Inventory Management", "Quality Control", "Supply Chain", "Vendor Management", "MIS Reporting"],
  },
  "Retail & Commerce": {
    color: "#8B5CF6",
    longDesc: "Omni-channel retail platforms, POS systems, inventory management, and customer loyalty systems for retail chains and e-commerce businesses.",
    solutions: ["Retail POS", "Inventory System", "E-commerce Platform", "Loyalty Program", "Multi-store Management", "Analytics Dashboard"],
  },
  "NGOs & Social Sector": {
    color: "#EC4899",
    longDesc: "Impact tracking, beneficiary management, donor reporting, and grant management systems for NGOs and social sector organisations — built cost-effectively.",
    solutions: ["Beneficiary Management", "Impact Tracking", "Donor Portal", "Grant Management", "Field Data Collection", "Annual Report Generator"],
  },
};

export default function IndustriesPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-cyan-600/8 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            Industries
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            Deep Expertise Across <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Every Sector</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            We don&apos;t build generic software — we build for specific industries, with deep knowledge of their workflows, compliance needs, and user expectations.
          </p>
        </div>
      </section>

      {/* Industries Detail */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
          {INDUSTRIES.map((industry) => {
            const detail = DETAIL[industry.name as keyof typeof DETAIL];
            if (!detail) return null;
            return (
              <div key={industry.name} id={industry.name.toLowerCase().replace(/\s+/g, "-")} className="glass rounded-3xl p-8 border border-white/[0.07] hover:border-white/11 transition-colors">
                <div className="grid md:grid-cols-3 gap-8">
                  <div className="md:col-span-1">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-2xl" style={{ background: `${detail.color}15`, border: `1px solid ${detail.color}25` }}>
                        {["🏛️", "🚗", "🎓", "🏥", "🏙️", "🏭", "🛍️", "🌱"][INDUSTRIES.indexOf(industry)]}
                      </div>
                      <div>
                        <h2 className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>{industry.name}</h2>
                        <span className="text-xs font-semibold" style={{ color: detail.color }}>{industry.count}</span>
                      </div>
                    </div>
                    <p className="text-sm text-slate-400 leading-relaxed">{detail.longDesc}</p>
                    <Link href="/contact" className="inline-flex items-center gap-1.5 mt-4 text-sm font-semibold transition-colors" style={{ color: detail.color }}>
                      Discuss your project <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                  <div className="md:col-span-2">
                    <p className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-3">Solutions We Deliver</p>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                      {detail.solutions.map((sol) => (
                        <div key={sol} className="flex items-center gap-2 text-sm text-slate-300 bg-white/[0.03] rounded-lg px-3 py-2">
                          <div className="w-1.5 h-1.5 rounded-full shrink-0" style={{ background: detail.color }} />
                          {sol}
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <CTA />
    </div>
  );
}
