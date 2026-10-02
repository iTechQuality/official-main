"use client";

import { motion } from "framer-motion";
import {
  Zap,
  ShieldCheck,
  Tv,
  Music,
  PlayCircle,
  Lock,
  Film,
  Layers,
  Sliders,
  Gamepad2,
  Scissors,
  Subtitles,
  CheckCircle,
} from "lucide-react";
import { AppDetail } from "@/constants/apps";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface AppFeaturesGridProps {
  app: AppDetail;
}

const ICON_MAP: Record<string, any> = {
  Zap,
  ShieldCheck,
  Tv,
  Music,
  PlayCircle,
  Lock,
  Film,
  Layers,
  Sliders,
  Gamepad2,
  Scissors,
  Subtitles,
};

export function AppFeaturesGrid({ app }: AppFeaturesGridProps) {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Engineered Features"
          title="Designed for Extreme Speed &"
          titleHighlight="Flawless Reliability"
          description={`Every feature in ${app.name} is built from scratch for maximum efficiency on modern Android devices.`}
          align="center"
          className="mb-16"
        />

        <motion.div
          variants={staggerContainer(0.08)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {app.features.map((feature) => {
            const Icon = ICON_MAP[feature.icon] || CheckCircle;

            return (
              <motion.div
                key={feature.title}
                variants={fadeUp}
                className="group relative p-7 rounded-3xl border border-white/[0.08] hover:border-white/20 transition-all duration-300 overflow-hidden"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(255, 255, 255, 0.04) 0%, rgba(255, 255, 255, 0.01) 100%)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                }}
              >
                {/* Glow behind icon */}
                <div
                  className="absolute -top-12 -left-12 w-28 h-28 rounded-full blur-2xl opacity-10 group-hover:opacity-30 transition-opacity"
                  style={{ backgroundColor: app.accentColor }}
                />

                <div
                  className="w-12 h-12 rounded-2xl flex items-center justify-center mb-5 border transition-transform duration-300 group-hover:scale-110"
                  style={{
                    backgroundColor: `${app.accentColor}15`,
                    borderColor: `${app.accentColor}30`,
                    color: app.accentColor,
                  }}
                >
                  <Icon className="w-6 h-6" />
                </div>

                <h3
                  className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors"
                  style={{ fontFamily: "var(--font-syne)" }}
                >
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-400 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Highlights List */}
        <div className="mt-16 p-8 rounded-3xl border border-white/[0.08] bg-white/[0.02]">
          <h4
            className="text-base font-bold text-white uppercase tracking-wider mb-6 text-center"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            What Sets {app.name} Apart
          </h4>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {app.highlights.map((h, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle
                  className="w-4 h-4 shrink-0 mt-0.5"
                  style={{ color: app.accentColor }}
                />
                <span className="text-xs sm:text-sm text-slate-300">{h}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
