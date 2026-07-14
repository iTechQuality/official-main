"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import { CTA } from "@/components/home/CTA";

const FAQS = [
  {
    category: "General",
    items: [
      { q: "What does iTechQu specialize in?", a: "iTechQu specializes in enterprise software development for transport authorities, educational institutions, healthcare organizations, and large enterprises. Our flagship product is the RTO Management System." },
      { q: "Where is iTechQu based?", a: "Our headquarters is in Jaipur, Rajasthan, India. We serve clients across all Indian states and have delivered projects for organisations nationwide." },
      { q: "How long has iTechQu been in operation?", a: "iTechQu was founded in 2016. We have 4+ years of experience delivering enterprise software, with 30+ projects completed and a wide range of enterprise clients." },
    ],
  },
  {
    category: "Projects & Delivery",
    items: [
      { q: "What is your typical project delivery timeline?", a: "A standard module or small project takes 8–12 weeks. A full enterprise platform takes 4–8 months. We follow an agile, sprint-based delivery process with demos every 2 weeks so you see progress continuously." },
      { q: "Do you work on a fixed-price or time & material basis?", a: "Both. Small to medium projects typically run on fixed price after a detailed scope document is agreed. Larger enterprise projects may use a time & material model with monthly billing and transparent reporting." },
      { q: "Can you work with our existing IT team?", a: "Absolutely. We regularly work as an extended team alongside our clients' in-house IT staff. We adapt to your communication tools, version control, and deployment processes." },
      { q: "What happens if the scope changes mid-project?", a: "We handle scope changes through a formal change request process. We assess the impact on timeline and cost, share a revised estimate, and proceed only after your approval. No surprise invoices." },
    ],
  },
  {
    category: "Technology",
    items: [
      { q: "What technologies do you use?", a: "Our primary stack includes Next.js, React, Node.js, Flutter (mobile), Laravel (PHP), PostgreSQL + PostGIS (GIS), Redis, Python, and TensorFlow for AI/ML. We choose technologies that scale, perform, and stand the test of time." },
      { q: "Can you integrate with government portals like VAHAN, Aadhaar, DigiLocker?", a: "Yes. We have hands-on experience integrating with VAHAN, Aadhaar, DigiLocker, NIC APIs, and various state government data platforms. This is especially relevant for our RTO and government projects." },
      { q: "Do you provide source code ownership?", a: "Yes. Upon full payment, complete source code ownership is transferred to you. We provide a Git repository with full commit history, documentation, and deployment scripts." },
    ],
  },
  {
    category: "Support & Maintenance",
    items: [
      { q: "What support do you provide after go-live?", a: "All projects include a 3–12 month warranty period (depending on package) with bug fixes at no charge. After that, we offer Annual Maintenance Contracts (AMC) covering bug fixes, security patches, minor enhancements, and priority support." },
      { q: "Do you provide staff training?", a: "Yes. Comprehensive training is included for all projects — administrator training, end-user training, and a detailed user manual. For large deployments, we conduct on-site training sessions." },
      { q: "What is your SLA for support tickets?", a: "Under AMC, critical issues (system down) are responded to within 2 hours and resolved within 24 hours. High-priority issues within 4 hours response, 48-hour resolution. Standard issues within 1 business day." },
    ],
  },
];

export default function FAQPage() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <div className="min-h-screen pt-16">
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            FAQ
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Frequently Asked <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Questions</span>
          </h1>
          <p className="text-slate-400 text-lg">Everything you need to know about working with iTechQu.</p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
          {FAQS.map((group) => (
            <div key={group.category}>
              <h2 className="text-sm font-bold uppercase tracking-widest text-violet-400 mb-4">{group.category}</h2>
              <div className="space-y-2">
                {group.items.map((faq, i) => {
                  const key = `${group.category}-${i}`;
                  return (
                    <div key={key} className="glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/10 transition-colors">
                      <button onClick={() => setOpen(open === key ? null : key)} className="w-full flex items-center justify-between gap-4 p-5 text-left">
                        <span className="text-sm font-semibold text-white leading-snug">{faq.q}</span>
                        <div className={`w-7 h-7 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === key ? "bg-violet-500/20 text-violet-400" : "bg-white/5 text-slate-400"}`}>
                          {open === key ? <Minus className="w-3.5 h-3.5" /> : <Plus className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                      <AnimatePresence>
                        {open === key && (
                          <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }} className="overflow-hidden">
                            <div className="px-5 pb-5 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-3">{faq.a}</div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}

          <div className="glass rounded-2xl p-6 text-center border border-white/[0.07]">
            <p className="text-slate-400 text-sm mb-3">Still have questions? We&apos;re happy to help.</p>
            <a href="/contact" className="inline-flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold rounded-xl">
              Contact Us
            </a>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
