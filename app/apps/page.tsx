import type { Metadata } from "next";
import Link from "next/link";
import { APPS_DATA, UPCOMING_UTILITIES } from "@/constants/apps";
import { AppCard } from "@/components/apps/AppCard";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { CTA } from "@/components/home/CTA";
import {
  Sparkles,
  Smartphone,
  ShieldCheck,
  Zap,
  Lock,
  ArrowRight,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Apps & Utilities — High-Performance Mobile Software | iTechQu",
  description:
    "Discover high-performance Android mobile apps and utility tools by iTechQu Labs — featuring SnapDL video downloader, HC Player 4K media player, and smart everyday tools.",
  keywords: [
    "SnapDL",
    "SnapDL APK",
    "HC Player",
    "iTechQu apps",
    "Android video downloader",
    "4K video player Android",
    "private media vault",
    "mobile utilities India",
  ],
};

export default function AppsHubPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30 pointer-events-none" />
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-gradient-to-r from-cyan-600/15 via-violet-600/20 to-blue-600/15 rounded-full blur-[120px] pointer-events-none" />

        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-cyan-400 mb-6">
            <Smartphone className="w-3.5 h-3.5" />
            iTechQu Labs & Utilities
          </span>

          <h1
            className="text-4xl sm:text-6xl font-extrabold text-white mb-6 leading-tight tracking-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Crafted for Speed.{" "}
            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-violet-400 bg-clip-text text-transparent">
              Engineered for Privacy.
            </span>
          </h1>

          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            High-performance Android consumer applications and intelligent media utilities built by iTechQu with zero bloat, high frame rates, and encrypted security.
          </p>

          <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <span className="flex items-center gap-1.5">
              <Zap className="w-4 h-4 text-cyan-400" />
              Ultra-Fast Performance
            </span>
            <span className="flex items-center gap-1.5">
              <Lock className="w-4 h-4 text-emerald-400" />
              100% Zero-Tracking Privacy
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-4 h-4 text-violet-400" />
              Play Protect Certified
            </span>
          </div>
        </div>
      </section>

      {/* Featured Flagship Apps */}
      <section className="pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2
                className="text-2xl sm:text-3xl font-bold text-white"
                style={{ fontFamily: "var(--font-syne)" }}
              >
                Featured Applications
              </h2>
              <p className="text-sm text-slate-400 mt-1">
                Download verified Android applications directly or via Google Play.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {APPS_DATA.map((app) => (
              <AppCard key={app.id} app={app} />
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Lab Tools */}
      <section className="py-20 bg-white/[0.01] border-y border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Labs & Innovation"
            title="Next-Generation Utilities"
            titleHighlight="Coming Soon"
            description="Our engineering team is actively building intelligent tools to make your digital life faster, simpler, and completely secure."
            align="center"
            className="mb-14"
          />

          <div className="grid md:grid-cols-3 gap-6">
            {UPCOMING_UTILITIES.map((tool) => (
              <div
                key={tool.name}
                className="p-7 rounded-3xl border border-white/[0.08] bg-white/[0.02] backdrop-blur-md flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span
                      className="px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider border"
                      style={{
                        backgroundColor: `${tool.color}15`,
                        borderColor: `${tool.color}30`,
                        color: tool.color,
                      }}
                    >
                      {tool.status}
                    </span>
                    <Sparkles className="w-4 h-4 text-slate-500" />
                  </div>

                  <h3
                    className="text-xl font-bold text-white mb-1"
                    style={{ fontFamily: "var(--font-syne)" }}
                  >
                    {tool.name}
                  </h3>
                  <p className="text-xs text-slate-400 font-medium mb-3">
                    {tool.tagline}
                  </p>
                  <p className="text-sm text-slate-400 leading-relaxed">
                    {tool.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/[0.06] text-xs text-slate-500">
                  Built by iTechQu Labs
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Cross-Promotion / Enterprise CTA */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 text-center">
          <div className="p-10 rounded-3xl border border-white/10 bg-gradient-to-br from-violet-600/10 via-blue-600/10 to-transparent">
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              Need a Custom Android or iOS App for Your Enterprise?
            </h3>
            <p className="text-slate-400 text-sm sm:text-base max-w-2xl mx-auto mb-8">
              We build custom high-performance mobile and web solutions for startups, institutions, and government bodies. Let&apos;s turn your vision into reality.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link
                href="/services#mobile-web"
                className="px-6 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
              >
                Explore Mobile Development
              </Link>
              <Link
                href="/contact"
                className="px-6 py-3 rounded-xl glass border border-white/15 text-white font-semibold text-sm hover:bg-white/10 transition-all"
              >
                Schedule Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
