"use client";

import { motion } from "framer-motion";
import { Download, Settings, Play, ShieldAlert, Check } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SectionHeader } from "@/components/shared/SectionHeader";

interface InstallGuideProps {
  appName: string;
  downloadUrl: string;
  accentColor: string;
}

const STEPS = [
  {
    step: "01",
    title: "Download the Official APK",
    desc: "Tap the download button on this page. Your browser will download the authentic APK package directly from our secure CDN.",
    icon: Download,
  },
  {
    step: "02",
    title: "Allow Installation",
    desc: "Open the downloaded APK from your notifications or Downloads folder. If prompted by Android, tap Settings and allow 'Install from this source'.",
    icon: Settings,
  },
  {
    step: "03",
    title: "Launch & Enjoy",
    desc: "Tap Install, and open the app once completed. Enjoy ultra-fast performance, private media storage, and clean utility tools immediately!",
    icon: Play,
  },
];

export function InstallGuide({ appName, downloadUrl, accentColor }: InstallGuideProps) {
  return (
    <section className="py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Quick Setup"
          title="How to Install"
          titleHighlight={`${appName} on Android`}
          description="Installing an APK directly takes less than 30 seconds. Follow these 3 simple steps."
          align="center"
          className="mb-14"
        />

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="grid md:grid-cols-3 gap-6 relative"
        >
          {STEPS.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.step}
                variants={fadeUp}
                className="relative p-8 rounded-3xl border border-white/[0.08] bg-white/[0.03] backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span
                      className="text-3xl font-extrabold opacity-40"
                      style={{ color: accentColor, fontFamily: "var(--font-syne)" }}
                    >
                      {item.step}
                    </span>
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center border"
                      style={{
                        backgroundColor: `${accentColor}15`,
                        borderColor: `${accentColor}30`,
                        color: accentColor,
                      }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3
                    className="text-lg font-bold text-white mb-2"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {item.title}
                  </h3>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center gap-2 text-xs text-slate-400">
                  <Check className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Step {idx + 1} of 3</span>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Security Note */}
        <div className="mt-8 p-4 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 max-w-2xl mx-auto flex items-center gap-3 text-xs text-emerald-300">
          <ShieldAlert className="w-5 h-5 shrink-0 text-emerald-400" />
          <span>
            <strong>Safety Guaranteed:</strong> All APK files distributed on iTechQu.com are signed with our official developer keystore and scanned by Play Protect for zero malware.
          </span>
        </div>
      </div>
    </section>
  );
}
