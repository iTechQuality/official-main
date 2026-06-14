import type { Metadata } from "next";
import { motion } from "framer-motion";
import Link from "next/link";
import { Car, ArrowRight, CheckCircle, Star, Clock } from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Products — Enterprise Software Solutions | iTechQu",
  description:
    "Explore iTechQu's enterprise product suite — the RTO Management System and upcoming products for education, healthcare, and smart city sectors.",
};

const PRODUCTS = [
  {
    icon: "🚗",
    name: "RTO Management System",
    tagline: "Complete Digital Platform for Regional Transport Offices",
    description: "A paperless, end-to-end solution for vehicle registration, driving licenses, tax collection, permits, enforcement, and citizen self-service — trusted by 10+ RTOs across India.",
    href: "/products/rto-mis",
    status: "live",
    features: ["Vehicle Registration", "Driving Licenses", "Tax Collection", "Permit Management", "Enforcement & Challan", "Citizen Portal"],
    clients: "10+ RTOs",
    rating: 5,
    color: "#7C3AED",
  },
];

const COMING_SOON = [
  { icon: "🎓", name: "School ERP System", desc: "Complete school management — admissions, attendance, fees, results, parent portal.", color: "#2563EB" },
  { icon: "🏥", name: "Hospital Management System", desc: "Patient records, OPD/IPD management, billing, pharmacy, and lab integration.", color: "#10B981" },
  { icon: "🏙️", name: "Smart City Dashboard", desc: "GIS-powered urban management, citizen grievance, asset tracking, and analytics.", color: "#06B6D4" },
  { icon: "🏭", name: "Manufacturing ERP", desc: "Production planning, inventory, quality control, and supply chain management.", color: "#F59E0B" },
];

export default function ProductsPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-violet-600/12 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            Our Products
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            Software That <span className="bg-gradient-to-r from-violet-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">Works at Scale</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Purpose-built enterprise products for government, transport, education, and healthcare — designed for the real complexity of institutional workflows.
          </p>
        </div>
      </section>

      {/* Live Products */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Available Now</h2>
          {PRODUCTS.map((product) => (
            <div key={product.name} className="glass rounded-3xl overflow-hidden border border-white/[0.07] hover:border-white/12 transition-all duration-500">
              <div className="grid lg:grid-cols-2">
                <div className="p-8 sm:p-12">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="text-4xl">{product.icon}</span>
                    <span className="px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-400 text-xs font-bold uppercase tracking-wider">
                      ● Live
                    </span>
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    {product.name}
                  </h3>
                  <p className="text-violet-400 font-medium mb-4">{product.tagline}</p>
                  <p className="text-slate-400 leading-relaxed mb-7">{product.description}</p>
                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {product.features.map((f) => (
                      <div key={f} className="flex items-center gap-2 text-sm text-slate-300">
                        <CheckCircle className="w-4 h-4 text-violet-400 shrink-0" />
                        {f}
                      </div>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Link href={product.href} className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300">
                      Explore Product <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <Link href="/contact" className="flex items-center gap-2 px-6 py-3 glass border border-white/10 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all">
                      Request Demo
                    </Link>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-violet-600/10 via-blue-600/5 to-transparent p-8 sm:p-12 border-t lg:border-t-0 lg:border-l border-white/[0.06] flex flex-col justify-between">
                  <div className="glass rounded-2xl p-6 mb-6">
                    <div className="flex items-center gap-1 mb-3">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />)}
                      <span className="text-sm text-slate-400 ml-2">{product.rating}.0</span>
                    </div>
                    <p className="text-sm text-slate-300 italic">&ldquo;The system handles 5,000+ daily transactions without a glitch. Absolute game-changer for our department.&rdquo;</p>
                    <p className="text-xs text-slate-500 mt-2">— Regional Transport Officer, Rajasthan</p>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    {[{ v: "10+", l: "RTOs Deployed" }, { v: "5K+", l: "Daily Transactions" }, { v: "1M+", l: "Records" }, { v: "99.9%", l: "Uptime" }].map((s) => (
                      <div key={s.l} className="glass rounded-xl p-3 text-center">
                        <div className="text-lg font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>{s.v}</div>
                        <div className="text-xs text-slate-500">{s.l}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Coming Soon */}
      <section className="pb-24 bg-[#0a0f1e]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16">
          <h2 className="text-xs font-semibold uppercase tracking-widest text-slate-500 mb-6">Coming Soon</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {COMING_SOON.map((p) => (
              <div key={p.name} className="glass rounded-2xl p-6 border border-dashed border-white/10 hover:border-white/15 transition-colors group">
                <span className="text-3xl mb-4 block">{p.icon}</span>
                <div className="flex items-center gap-2 mb-2">
                  <h3 className="text-sm font-bold text-white">{p.name}</h3>
                </div>
                <p className="text-xs text-slate-500 leading-relaxed mb-3">{p.desc}</p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold" style={{ color: p.color }}>
                  <Clock className="w-3 h-3" /> In Development
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Building a custom product?{" "}
              <Link href="/contact" className="text-violet-400 hover:text-violet-300 font-medium transition-colors">
                Let&apos;s discuss your requirements →
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
