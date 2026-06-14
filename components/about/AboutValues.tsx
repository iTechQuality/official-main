"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const VALUES = [
  { title: "Quality First", description: "We don't ship until it's right. Every release goes through rigorous QA, performance testing, and security review before reaching production.", emoji: "✅" },
  { title: "Client Partnership", description: "We treat every project as a long-term partnership, not a transaction. Your success is our success.", emoji: "🤝" },
  { title: "Transparent Communication", description: "Weekly updates, honest timelines, and direct access to the team. No hidden surprises.", emoji: "💬" },
  { title: "Innovation With Purpose", description: "We adopt new technology only when it genuinely solves a real problem — not for the sake of novelty.", emoji: "🚀" },
  { title: "Security by Design", description: "Security isn't an afterthought. Every system is built with encryption, access control, and audit trails from day one.", emoji: "🔒" },
  { title: "Continuous Improvement", description: "Software is never 'done'. We iterate, improve, and evolve our products based on real usage and client feedback.", emoji: "📈" },
];

export function AboutValues() {
  return (
    <section className="section-padding bg-[#0a0f1e]/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">
            Core Values
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            What We Stand For
          </h2>
        </div>

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {VALUES.map((v) => (
            <motion.div
              key={v.title}
              variants={fadeUp}
              className="glass rounded-2xl p-6 group hover:border-white/15 hover:-translate-y-1 transition-all duration-300"
            >
              <span className="text-3xl mb-4 block">{v.emoji}</span>
              <h3 className="text-base font-bold text-white mb-2">{v.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{v.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
