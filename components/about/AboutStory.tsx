"use client";

import { motion } from "framer-motion";
import { fadeLeft, fadeRight, viewport } from "@/lib/animations";

export function AboutStory() {
  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div variants={fadeLeft} initial="hidden" whileInView="visible" viewport={viewport}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
              Our Story
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
              Founded on a Mission to Make <span className="gradient-text">Technology Work for Everyone</span>
            </h2>
            <div className="space-y-4 text-slate-400 leading-relaxed">
              <p>
                iTechQu was born in 2021 in Raipur, Chhattisgarh — five developers who believed that great software could be built anywhere. Starting with CodeIgniter PHP and Native Android, we took on our first projects and learned what it means to deliver real value to real clients.
              </p>
              <p>
                We evolved fast. Flutter and Laravel in 2022. Node.js and React.js in 2024. GIS and spatial intelligence in 2025. Each new technology was a deliberate choice to stay at the frontier of what our clients needed. Along the way we built grocery apps, HR platforms, food delivery systems, astrology products, real-time chat, rescue portals, and much more.
              </p>
              <p>
                Then came Jain RTO — our flagship RTO product, now live across 10+ Regional Transport Offices in Chhattisgarh. Today, iTechQu is a Udyam-registered MSME headquartered at GE Road, Raipur, delivering enterprise software to businesses and organisations alike. Same city, bigger vision.
              </p>
            </div>
          </motion.div>

          <motion.div variants={fadeRight} initial="hidden" whileInView="visible" viewport={viewport} className="space-y-4">
            {[
              { label: "Mission", text: "To build enterprise-grade software that makes businesses more efficient, teams more productive, and users better served.", icon: "🎯" },
              { label: "Vision", text: "To be India's most trusted enterprise software company — known for products that last, teams that deliver, and solutions that work at scale.", icon: "🔭" },
              { label: "Values", text: "Quality over speed. Honesty over shortcuts. Long-term partnerships over one-time transactions. Enterprise thinking in every line of code.", icon: "⚡" },
            ].map((item) => (
              <div key={item.label} className="glass rounded-2xl p-6 border border-white/[0.07]">
                <div className="flex items-start gap-4">
                  <span className="text-2xl">{item.icon}</span>
                  <div>
                    <h3 className="text-sm font-bold text-white mb-1.5 uppercase tracking-wider text-violet-400">{item.label}</h3>
                    <p className="text-sm text-slate-400 leading-relaxed">{item.text}</p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
