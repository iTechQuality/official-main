import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowRight, MessageCircle } from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Pricing — Enterprise Software Packages | iTechQu",
  description: "Transparent pricing for iTechQu's software development services. Starter, Professional, and Enterprise packages with custom quote options.",
};

const PLANS = [
  {
    name: "Starter",
    tagline: "For small departments & SMEs",
    price: "₹2.5L",
    period: "starting from",
    color: "#2563EB",
    popular: false,
    features: [
      "Single module development",
      "Up to 5 user roles",
      "Basic reporting dashboard",
      "3 months post-launch support",
      "Documentation & training",
      "Cloud hosting setup",
    ],
    cta: "Get a Quote",
    href: "/contact",
  },
  {
    name: "Professional",
    tagline: "For growing organisations",
    price: "₹8L",
    period: "starting from",
    color: "#7C3AED",
    popular: true,
    features: [
      "Multi-module custom software",
      "Unlimited user roles",
      "Advanced analytics & BI",
      "Mobile app (Android/iOS)",
      "API & third-party integrations",
      "6 months post-launch support",
      "Staff training & onboarding",
      "1 year AMC included",
    ],
    cta: "Get a Quote",
    href: "/contact",
  },
  {
    name: "Enterprise",
    tagline: "For government & large enterprise",
    price: "Custom",
    period: "contact us",
    color: "#06B6D4",
    popular: false,
    features: [
      "Full-scale enterprise platform",
      "Multi-department deployment",
      "GIS / AI / ML integration",
      "Citizen-facing portal",
      "VAHAN / NIC / Aadhaar integration",
      "White-labelling & branding",
      "Dedicated project team",
      "24/7 SLA-backed support",
      "Annual Maintenance Contract",
      "On-site training & handholding",
    ],
    cta: "Contact Sales",
    href: "/contact",
  },
];

const COMPARE = [
  { feature: "Custom software development", starter: true, pro: true, ent: true },
  { feature: "Mobile application", starter: false, pro: true, ent: true },
  { feature: "Third-party API integrations", starter: false, pro: true, ent: true },
  { feature: "AI / ML features", starter: false, pro: false, ent: true },
  { feature: "GIS / mapping module", starter: false, pro: false, ent: true },
  { feature: "Multi-department deployment", starter: false, pro: false, ent: true },
  { feature: "Government portal integration", starter: false, pro: false, ent: true },
  { feature: "Post-launch support", starter: "3 months", pro: "6 months", ent: "12+ months" },
  { feature: "Annual Maintenance Contract", starter: false, pro: true, ent: true },
  { feature: "24/7 SLA support", starter: false, pro: false, ent: true },
];

export default function PricingPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            Pricing
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Transparent Pricing, <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">No Surprises</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Every project is unique. These packages give you a starting point — we&apos;ll build an exact quote based on your requirements.
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-5">
            {PLANS.map((plan) => (
              <div key={plan.name} className={`glass rounded-3xl p-7 relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${plan.popular ? "border-violet-500/30 shadow-[0_0_40px_rgba(124,58,237,0.15)]" : "border-white/[0.07]"}`}>
                {plan.popular && (
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-gradient-to-r from-violet-600 to-blue-600 text-white text-xs font-bold">
                    Most Popular
                  </div>
                )}
                <div className="mb-6">
                  <h3 className="text-xl font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>{plan.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{plan.tagline}</p>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>{plan.price}</span>
                    <span className="text-sm text-slate-500">{plan.period}</span>
                  </div>
                </div>
                <ul className="space-y-2.5 mb-8 flex-1">
                  {plan.features.map((f) => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-300">
                      <CheckCircle className="w-4 h-4 shrink-0 mt-0.5" style={{ color: plan.color }} />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href={plan.href}
                  className={`flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-sm transition-all duration-300 ${plan.popular ? "bg-gradient-to-r from-violet-600 to-blue-600 text-white hover:shadow-lg hover:shadow-violet-500/25" : "glass border border-white/10 text-white hover:bg-white/10"}`}
                >
                  {plan.cta} <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Comparison table */}
      <section className="pb-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-xl font-bold text-white text-center mb-8" style={{ fontFamily: "var(--font-syne)" }}>Plan Comparison</h2>
          <div className="glass rounded-2xl overflow-hidden">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/[0.06]">
                  <th className="text-left p-4 text-slate-400 font-medium">Feature</th>
                  {["Starter", "Professional", "Enterprise"].map((h) => (
                    <th key={h} className="p-4 text-center text-white font-semibold">{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {COMPARE.map((row, i) => (
                  <tr key={row.feature} className={`border-b border-white/[0.04] ${i % 2 === 0 ? "bg-white/[0.01]" : ""}`}>
                    <td className="p-4 text-slate-400">{row.feature}</td>
                    {[row.starter, row.pro, row.ent].map((val, j) => (
                      <td key={j} className="p-4 text-center">
                        {val === true ? (
                          <CheckCircle className="w-4 h-4 text-green-400 mx-auto" />
                        ) : val === false ? (
                          <span className="text-slate-700">—</span>
                        ) : (
                          <span className="text-slate-400 text-xs">{val}</span>
                        )}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="mt-8 p-6 glass rounded-2xl border border-amber-500/20 text-center">
            <p className="text-slate-300 text-sm mb-3">
              Need something specific? Every enterprise project gets a <strong className="text-white">custom quote</strong> — call us or WhatsApp for a same-day response.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold rounded-xl">
                Get Custom Quote <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-6 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold rounded-xl">
                <MessageCircle className="w-4 h-4" /> WhatsApp Us
              </a>
            </div>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
