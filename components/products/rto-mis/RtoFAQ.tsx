"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { fadeUp, viewport } from "@/lib/animations";

const FAQS = [
  {
    q: "Can the system integrate with the national VAHAN portal?",
    a: "Yes. The RTO Management System has a built-in API integration with the national VAHAN portal maintained by NIC. All vehicle registrations, license records, and fee collections are automatically synced in real-time.",
  },
  {
    q: "How long does deployment take?",
    a: "A standard RTO deployment takes 6–10 weeks including data migration, staff training, and parallel run. Large RTOs with complex customization requirements may take up to 4 months. We work alongside your team throughout the process.",
  },
  {
    q: "Does it support Aadhaar and DigiLocker integration?",
    a: "Yes. The system supports Aadhaar-based identity verification and is integrated with DigiLocker for document retrieval. Citizens can pull their Aadhaar, PAN, and existing license records directly.",
  },
  {
    q: "What happens to existing data from old records?",
    a: "We provide a full data migration service. Our team analyzes your existing data (whether in spreadsheets, legacy software, or physical records) and migrates it to the new system with validation and quality checks.",
  },
  {
    q: "Where is the system hosted?",
    a: "We support flexible hosting options based on your department's policy — including NIC data centers, state government servers, or your own on-premise infrastructure. We handle the full deployment and setup.",
  },
  {
    q: "What kind of training and support do you provide?",
    a: "We provide comprehensive on-site training for all staff roles (clerks, officers, inspectors, managers). Post go-live, we offer 24/7 helpdesk support, monthly review calls, and an Annual Maintenance Contract (AMC) for ongoing support.",
  },
  {
    q: "Can the system handle multiple RTOs under one state?",
    a: "Absolutely. The  system is designed for multi-RTO, multi-district deployment under a single state transport department. A central dashboard gives transport commissioners a consolidated view across all RTOs.",
  },
];

export function RtoFAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="section-padding bg-[#0a0f1e]/50 relative">
      <div className="absolute inset-0 grid-bg opacity-20" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <SectionHeader
          eyebrow="FAQ"
          title="Common Questions"
          titleHighlight="Answered"
          description="Everything you need to know about deploying the RTO Management System in your department."
          className="mb-14"
        />

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-3"
        >
          {FAQS.map((faq, i) => (
            <motion.div
              key={i}
              variants={fadeUp}
              className="glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/10 transition-colors"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-sm font-semibold text-white leading-snug">{faq.q}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-colors ${open === i ? "bg-violet-500/20 text-violet-400" : "bg-white/5 text-slate-400"
                  }`}>
                  {open === i ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                </div>
              </button>

              <AnimatePresence>
                {open === i && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <div className="px-6 pb-6 text-sm text-slate-400 leading-relaxed border-t border-white/5 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
