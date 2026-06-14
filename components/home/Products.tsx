"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Car, ArrowRight, CheckCircle, Star } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const PRODUCTS = [
  {
    icon: Car,
    name: "RTO Management System",
    tagline: "Complete digital platform for Regional Transport Offices",
    description:
      "A comprehensive, paperless RTO management solution that digitalizes vehicle registration, driving license management, tax collection, enforcement, and citizen services — trusted by transport offices across India.",
    href: "/products/rto-mis",
    badge: "Flagship Product",
    badgeColor: "#F59E0B",
    color: "#7C3AED",
    features: [
      "Vehicle Registration & Re-registration",
      "Driving License Processing",
      "Online Tax & Fee Collection",
      "Permit Management",
      "Enforcement & Challan System",
      "Citizen Self-Service Portal",
    ],
    stats: [
      { label: "RTOs Deployed", value: "10+" },
      { label: "Daily Transactions", value: "5K+" },
      { label: "Records Managed", value: "1M+" },
    ],
  },
];

const CHART_BARS = [38, 62, 44, 78, 58, 88, 68, 82, 62, 72, 95, 78];

const TRANSACTIONS = [
  { id: "MH-12-AB-1234", status: "Completed",  cls: "text-green-400 bg-green-500/15" },
  { id: "RJ-14-CD-5678", status: "Pending",     cls: "text-amber-400 bg-amber-500/15" },
  { id: "GJ-01-EF-9012", status: "Processing",  cls: "text-blue-400  bg-blue-500/15"  },
];

export function Products() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Our Products"
          title="Software That Powers"
          titleHighlight="Real Governance"
          description="Purpose-built enterprise products that automate complex government and business workflows — delivering speed, accuracy, and transparency at scale."
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-8"
        >
          {PRODUCTS.map((product) => {
            const Icon = product.icon;
            return (
              <motion.div
                key={product.name}
                variants={fadeUp}
                className="glass rounded-3xl overflow-hidden border border-white/[0.07] hover:border-white/12 transition-all duration-500 group"
              >
                <div className="grid lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 sm:p-10 lg:p-12">
                    <div className="flex items-center gap-3 mb-6">
                      <div
                        className="w-12 h-12 rounded-2xl flex items-center justify-center"
                        style={{ background: `${product.color}15`, border: `1px solid ${product.color}30` }}
                      >
                        <Icon className="w-6 h-6" style={{ color: product.color }} />
                      </div>
                      <span
                        className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider"
                        style={{ background: `${product.badgeColor}20`, color: product.badgeColor, border: `1px solid ${product.badgeColor}40` }}
                      >
                        ★ {product.badge}
                      </span>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>
                      {product.name}
                    </h3>
                    <p className="text-violet-400 font-medium mb-4">{product.tagline}</p>
                    <p className="text-slate-400 leading-relaxed mb-8">{product.description}</p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-8">
                      {product.features.map((f) => (
                        <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                          <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                          {f}
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3">
                      <Link
                        href={product.href}
                        className="group/btn flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
                      >
                        Learn More
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Link>
                      <Link
                        href="/contact"
                        className="flex items-center justify-center gap-2 px-6 py-3 glass border border-white/10 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all duration-300"
                      >
                        Request Demo
                      </Link>
                    </div>
                  </div>

                  {/* Visual panel */}
                  <div className="relative bg-gradient-to-br from-violet-600/10 via-blue-600/5 to-transparent p-8 sm:p-10 lg:p-12 flex flex-col justify-between border-t lg:border-t-0 lg:border-l border-white/[0.06]">

                    {/* Dashboard mockup */}
                    <div className="rounded-2xl overflow-hidden border border-white/10 shadow-2xl shadow-black/60 mb-6">
                      {/* Browser chrome */}
                      <div className="h-8 bg-dash-chrome flex items-center gap-1.5 px-3 border-b border-white/5">
                        <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                        <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                        <div className="ml-2 flex-1 bg-white/5 rounded text-[9px] text-slate-500 px-2 py-0.5 font-mono truncate">
                          rto.rajasthan.gov.in/dashboard
                        </div>
                      </div>

                      {/* Dashboard body */}
                      <div className="bg-dash-body p-3 space-y-2">
                        {/* Stat cards */}
                        <div className="grid grid-cols-3 gap-2">
                          <div className="bg-dash-card rounded-lg p-2 border border-white/5">
                            <div className="text-base font-bold text-violet-400">284</div>
                            <div className="text-[8px] text-slate-500 leading-tight">Today&apos;s Registrations</div>
                          </div>
                          <div className="bg-dash-card rounded-lg p-2 border border-white/5">
                            <div className="text-base font-bold text-slate-300">47</div>
                            <div className="text-[8px] text-slate-500 leading-tight">Pending Applications</div>
                          </div>
                          <div className="bg-dash-card rounded-lg p-2 border border-white/5">
                            <div className="text-base font-bold text-green-400">&#8377;2.4L</div>
                            <div className="text-[8px] text-slate-500 leading-tight">Revenue Today</div>
                          </div>
                        </div>

                        {/* Bar chart */}
                        <div className="bg-dash-card rounded-lg p-2.5 border border-white/5">
                          <div className="flex items-end gap-[3px] h-14">
                            {CHART_BARS.map((h, i) => (
                              <div
                                key={i}
                                className="flex-1 rounded-t-sm transition-all"
                                style={{
                                  height: `${h}%`,
                                  backgroundColor: i % 3 === 0 ? "#7C3AED" : "#4c1d95",
                                }}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Transaction list */}
                        <div className="bg-dash-card rounded-lg overflow-hidden divide-y divide-white/5 border border-white/5">
                          {TRANSACTIONS.map((t) => (
                            <div key={t.id} className="flex items-center justify-between px-2.5 py-1.5">
                              <span className="text-[9px] text-slate-400 font-mono">{t.id}</span>
                              <span className={`text-[7px] font-semibold px-1.5 py-0.5 rounded-full ${t.cls}`}>
                                {t.status}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Stats */}
                    <div className="grid grid-cols-3 gap-3">
                      {product.stats.map((s) => (
                        <div key={s.label} className="glass rounded-xl p-3 text-center">
                          <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>{s.value}</div>
                          <div className="text-xs text-slate-500 mt-0.5">{s.label}</div>
                        </div>
                      ))}
                    </div>

                    {/* Rating */}
                    <div className="mt-4 flex items-center gap-2">
                      <div className="flex">
                        {[1, 2, 3, 4, 5].map((i) => (
                          <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                      <span className="text-sm text-slate-400">5.0 · 30+ verified clients</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Coming Soon teaser */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="mt-8 glass rounded-2xl p-6 border border-dashed border-white/10 text-center"
        >
          <p className="text-slate-400 text-sm">
            <span className="text-violet-400 font-semibold">More products coming soon</span> — School ERP, Hospital Management System, Smart City Dashboard
          </p>
        </motion.div>
      </div>
    </section>
  );
}
