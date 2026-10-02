"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  Smartphone,
  Star,
  ShieldCheck,
  CheckCircle2,
  ArrowLeft,
  Zap,
  Film,
  Sparkles,
} from "lucide-react";
import { AppDetail } from "@/constants/apps";
import { fadeUp, staggerContainer } from "@/lib/animations";

interface AppHeroProps {
  app: AppDetail;
}

export function AppHero({ app }: AppHeroProps) {
  const isSnapDL = app.id === "snapdl";

  return (
    <section className="relative pt-28 pb-16 overflow-hidden">
      {/* Ambient background glows */}
      <div
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[360px] rounded-full blur-[130px] pointer-events-none opacity-30"
        style={{
          background: `radial-gradient(circle, ${app.accentColor} 0%, ${app.secondaryColor} 50%, transparent 80%)`,
        }}
      />
      <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex items-center gap-2 text-xs text-slate-400 mb-8"
        >
          <Link href="/" className="hover:text-white transition-colors">
            Home
          </Link>
          <span>/</span>
          <Link href="/apps" className="hover:text-white transition-colors">
            Apps & Utilities
          </Link>
          <span>/</span>
          <span className="text-white font-medium">{app.name}</span>
        </motion.div>

        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          animate="visible"
          className="grid lg:grid-cols-12 gap-12 items-center"
        >
          {/* Left Column: App Info & CTAs */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-3">
              <span
                className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider border"
                style={{
                  backgroundColor: `${app.accentColor}15`,
                  borderColor: `${app.accentColor}35`,
                  color: app.accentColor,
                }}
              >
                <Sparkles className="w-3.5 h-3.5" />
                {app.badge}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                Version {app.version}
              </span>
              <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
                {app.minAndroid}
              </span>
            </motion.div>

            <motion.div variants={fadeUp} className="space-y-2">
              <h1
                className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.1]"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                {app.name}{" "}
                <span
                  style={{
                    background: `linear-gradient(135deg, ${app.accentColor}, ${app.secondaryColor})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}
                >
                  for Android
                </span>
              </h1>
              <p className="text-lg sm:text-xl font-medium text-slate-300">
                {app.tagline}
              </p>
            </motion.div>

            <motion.p
              variants={fadeUp}
              className="text-base text-slate-400 leading-relaxed max-w-2xl"
            >
              {app.description}
            </motion.p>

            {/* Quick Ratings & Download stats */}
            <motion.div
              variants={fadeUp}
              className="flex items-center gap-6 py-3 border-y border-white/[0.08]"
            >
              <div className="flex items-center gap-2">
                <div className="flex items-center text-amber-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400" />
                  ))}
                </div>
                <span className="text-sm font-bold text-white">{app.rating}</span>
                <span className="text-xs text-slate-400">({app.ratingCount})</span>
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="text-xs text-slate-300">
                <span className="font-bold text-white">{app.downloads}</span> Active Installs
              </div>
              <div className="h-4 w-px bg-white/10" />
              <div className="flex items-center gap-1.5 text-xs text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                Verified & Clean
              </div>
            </motion.div>

            {/* Main Action Buttons */}
            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2"
            >
              <a
                href={app.downloadUrl}
                target="_blank"
                rel="noopener noreferrer"
                download
                className="flex items-center justify-center gap-3 px-8 py-4 rounded-2xl text-base font-bold text-white shadow-2xl transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
                style={{
                  background: `linear-gradient(135deg, ${app.accentColor}, ${app.secondaryColor})`,
                  boxShadow: `0 14px 40px -10px ${app.accentColor}70`,
                }}
              >
                <Download className="w-5 h-5" />
                <span>Download APK ({app.size})</span>
              </a>

              {app.playStoreUrl ? (
                <a
                  href={app.playStoreUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 px-7 py-4 rounded-2xl text-base font-bold text-slate-200 glass border border-white/15 hover:bg-white/10 hover:text-white transition-all duration-300"
                >
                  <Smartphone className="w-5 h-5 text-green-400" />
                  <span>Google Play Store</span>
                </a>
              ) : (
                <div className="flex items-center justify-center gap-2 px-5 py-3 rounded-2xl bg-white/[0.04] border border-white/10 text-xs text-slate-400">
                  <span>Google Play Store listing coming soon</span>
                </div>
              )}
            </motion.div>

            {/* Quick Guarantees */}
            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center gap-4 text-xs text-slate-400"
            >
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>100% Free & No Sign-up</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>No Ads During Free Trial</span>
              </div>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                <span>Encrypted & Private</span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Visual Mockup Card */}
          <div className="lg:col-span-5 flex justify-center">
            <motion.div
              variants={fadeUp}
              className="relative w-full max-w-[360px] aspect-[9/18.5] rounded-[44px] p-4 border-[6px] border-slate-700/80 shadow-2xl bg-slate-950 overflow-hidden flex flex-col justify-between"
              style={{
                boxShadow: `0 25px 60px -15px ${app.accentColor}40`,
              }}
            >
              {/* Phone Speaker Notch */}
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-28 h-4 bg-slate-900 rounded-full flex items-center justify-center">
                <div className="w-10 h-1 bg-slate-700 rounded-full" />
              </div>

              {/* Mockup Header */}
              <div className="pt-6 pb-2 px-2 flex items-center justify-between border-b border-white/10">
                <div className="flex items-center gap-2">
                  <div
                    className="w-7 h-7 rounded-lg flex items-center justify-center text-white"
                    style={{ background: app.iconBg }}
                  >
                    {isSnapDL ? (
                      <Zap className="w-4 h-4 text-white" />
                    ) : (
                      <Film className="w-4 h-4 text-white" />
                    )}
                  </div>
                  <span className="font-bold text-white text-sm">{app.name}</span>
                </div>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-500/20 text-emerald-400 font-semibold border border-emerald-500/30">
                  Ready
                </span>
              </div>

              {/* Mockup Body Content */}
              <div className="flex-1 py-4 px-2 space-y-3 overflow-hidden text-xs">
                {isSnapDL ? (
                  <>
                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="text-[11px] text-slate-400 font-medium">
                        Instant URL Downloader
                      </div>
                      <div className="flex items-center gap-2 p-2 rounded-xl bg-black/40 border border-white/10 text-slate-300 text-[10px]">
                        <span className="truncate">https://social.video/watch?v=...</span>
                        <span className="ml-auto text-cyan-400 font-bold shrink-0">Paste</span>
                      </div>
                      <div className="flex items-center justify-between text-[10px] text-slate-400 pt-1">
                        <span>Quality: 4K UHD 60fps</span>
                        <span className="text-cyan-400 font-semibold">14.8 MB/s</span>
                      </div>
                      <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                        <div className="w-[84%] h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full" />
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-[11px] text-white font-semibold">
                          Encrypted Media Vault
                        </span>
                        <span className="text-[10px] text-emerald-400 font-bold">🔒 PIN Locked</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        Hidden from Gallery & Photos. Accessible only via biometric scan.
                      </p>
                    </div>

                    <div className="p-3 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 flex items-center justify-between">
                      <div>
                        <div className="text-[11px] font-bold text-white">Audio Extractor</div>
                        <div className="text-[10px] text-slate-400">Extract 320kbps MP3s</div>
                      </div>
                      <span className="px-2.5 py-1 rounded-lg bg-cyan-500 text-black text-[10px] font-bold">
                        1-Tap
                      </span>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="relative aspect-video rounded-2xl bg-slate-900 border border-white/10 overflow-hidden flex items-center justify-center group">
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
                      <div className="w-10 h-10 rounded-full bg-violet-600/80 flex items-center justify-center shadow-lg">
                        <Film className="w-5 h-5 text-white" />
                      </div>
                      <div className="absolute bottom-2 left-2 right-2 flex items-center justify-between text-[10px] text-white">
                        <span>4K Ultra HD • 60fps</span>
                        <span className="text-violet-400">Hardware Accel</span>
                      </div>
                    </div>

                    <div className="p-3 rounded-2xl bg-white/5 border border-white/10 space-y-2">
                      <div className="flex items-center justify-between text-[11px]">
                        <span className="text-white font-semibold">Saanp Seedhi Multiplayer</span>
                        <span className="text-pink-400 font-bold">🎲 Live Rooms</span>
                      </div>
                      <p className="text-[10px] text-slate-400 leading-tight">
                        Online relay multiplayer + pass-and-play offline mode with friends.
                      </p>
                    </div>

                    <div className="p-2.5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between text-[10px]">
                      <span className="text-slate-300">Picture-in-Picture (PiP)</span>
                      <span className="text-emerald-400 font-semibold">Enabled</span>
                    </div>
                  </>
                )}
              </div>

              {/* Mockup Footer CTA */}
              <div className="p-2 border-t border-white/10">
                <a
                  href={app.downloadUrl}
                  className="flex items-center justify-center gap-2 w-full py-2.5 rounded-xl font-bold text-white text-xs"
                  style={{
                    background: `linear-gradient(135deg, ${app.accentColor}, ${app.secondaryColor})`,
                  }}
                >
                  <Download className="w-3.5 h-3.5" />
                  Install {app.name} APK
                </a>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
