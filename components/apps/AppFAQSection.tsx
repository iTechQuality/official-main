"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, HelpCircle } from "lucide-react";
import { AppDetail } from "@/constants/apps";
import { fadeUp, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface AppFAQSectionProps {
  app: AppDetail;
}

export function AppFAQSection({ app }: AppFAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="py-20 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Got Questions?"
          title="Frequently Asked"
          titleHighlight="Questions"
          description={`Find answers to commonly asked questions about ${app.name} installation, privacy, and media handling.`}
          align="center"
          className="mb-12"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="space-y-3"
        >
          {app.faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div
                key={faq.question}
                className="rounded-2xl border border-white/[0.08] overflow-hidden bg-white/[0.02] backdrop-blur-md transition-colors"
              >
                <button
                  onClick={() => toggle(index)}
                  className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors"
                >
                  <span
                    className="text-base font-semibold text-white"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-white" : ""
                    }`}
                  />
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.2 }}
                      className="overflow-hidden"
                    >
                      <div className="p-5 sm:p-6 pt-0 text-sm text-slate-400 leading-relaxed border-t border-white/[0.04]">
                        {faq.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
