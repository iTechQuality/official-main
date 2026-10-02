"use client";

import { motion } from "framer-motion";
import { AppDetail } from "@/constants/apps";
import { fadeUp, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface AppSpecsProps {
  app: AppDetail;
}

export function AppSpecs({ app }: AppSpecsProps) {
  return (
    <section className="py-16 relative">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Technical Data"
          title="App Specifications &"
          titleHighlight="Compatibility"
          align="center"
          className="mb-10"
        />

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="rounded-3xl border border-white/[0.08] overflow-hidden bg-white/[0.02] backdrop-blur-md"
        >
          <div className="divide-y divide-white/[0.06]">
            {app.specifications.map((spec) => (
              <div
                key={spec.label}
                className="flex flex-col sm:flex-row sm:items-center justify-between p-4 sm:px-6 hover:bg-white/[0.02] transition-colors"
              >
                <span className="text-sm font-medium text-slate-400">
                  {spec.label}
                </span>
                <span className="text-sm font-semibold text-white mt-1 sm:mt-0">
                  {spec.value}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
