"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Download,
  Star,
  CheckCircle,
  Smartphone,
  ArrowRight,
  Zap,
  Film,
} from "lucide-react";
import { AppDetail } from "@/constants/apps";
import { fadeUp } from "@/lib/animations";

interface AppCardProps {
  app: AppDetail;
}

export function AppCard({ app }: AppCardProps) {
  const isSnapDL = app.id === "snapdl";

  return (
    <motion.div
      variants={fadeUp}
      whileHover={{ y: -4, scale: 1.01 }}
      className="relative group rounded-3xl p-8 border border-white/[0.08] transition-all duration-300 overflow-hidden flex flex-col justify-between"
      style={{
        background:
          "linear-gradient(135deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.02) 100%)",
        backdropFilter: "blur(16px)",
        WebkitBackdropFilter: "blur(16px)",
      }}
    >
      {/* Background ambient glow */}
      <div
        className="absolute -top-24 -right-24 w-60 h-60 rounded-full blur-3xl pointer-events-none opacity-20 group-hover:opacity-40 transition-opacity duration-500"
        style={{ backgroundColor: app.accentColor }}
      />

      <div>
        {/* Top Badges */}
        <div className="flex flex-wrap items-center justify-between gap-3 mb-6">
          <div className="flex items-center gap-2">
            <span
              className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider border"
              style={{
                backgroundColor: `${app.accentColor}15`,
                borderColor: `${app.accentColor}35`,
                color: app.accentColor,
              }}
            >
              <span
                className="w-1.5 h-1.5 rounded-full animate-pulse"
                style={{ backgroundColor: app.accentColor }}
              />
              {app.badge}
            </span>
            <span className="px-2.5 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-semibold text-slate-300">
              {app.version}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs text-amber-400 font-semibold bg-amber-400/10 border border-amber-400/20 px-2.5 py-1 rounded-full">
            <Star className="w-3.5 h-3.5 fill-amber-400 text-amber-400" />
            <span>{app.rating}</span>
            <span className="text-slate-400 font-normal">({app.downloads})</span>
          </div>
        </div>

        {/* Icon & Title Row */}
        <div className="flex items-start gap-4 mb-5">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-xl shrink-0 group-hover:scale-105 transition-transform duration-300"
            style={{
              background: app.iconBg,
              boxShadow: `0 12px 30px -10px ${app.accentColor}60`,
            }}
          >
            {isSnapDL ? (
              <Zap className="w-8 h-8 text-white" />
            ) : (
              <Film className="w-8 h-8 text-white" />
            )}
          </div>

          <div>
            <h3
              className="text-2xl font-bold text-white group-hover:text-cyan-300 transition-colors duration-200"
              style={{ fontFamily: "var(--font-syne)" }}
            >
              {app.name}
            </h3>
            <p className="text-sm text-slate-400 font-medium leading-snug mt-0.5">
              {app.tagline}
            </p>
          </div>
        </div>

        {/* Short Description */}
        <p className="text-sm text-slate-300 leading-relaxed mb-6">
          {app.shortDesc}
        </p>

        {/* Feature Pills */}
        <div className="space-y-2 mb-8">
          {app.features.slice(0, 3).map((f) => (
            <div key={f.title} className="flex items-center gap-2 text-xs text-slate-300">
              <CheckCircle
                className="w-3.5 h-3.5 shrink-0"
                style={{ color: app.accentColor }}
              />
              <span className="font-medium text-white">{f.title}:</span>
              <span className="text-slate-400 truncate">{f.description}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Action Footer */}
      <div className="pt-6 border-t border-white/[0.08] flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-3">
        <Link
          href={`/${app.slug}`}
          className="flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all duration-300 group/btn"
          style={{
            background: `linear-gradient(135deg, ${app.accentColor}, ${app.secondaryColor})`,
            boxShadow: `0 8px 24px -6px ${app.accentColor}50`,
          }}
        >
          View Details
          <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>

        <div className="flex items-center gap-2">
          {app.playStoreUrl ? (
            <a
              href={app.playStoreUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-all"
              title="Google Play Store"
            >
              <Smartphone className="w-3.5 h-3.5 text-green-400" />
              Play Store
            </a>
          ) : null}

          <a
            href={app.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            download
            className="flex-1 sm:flex-initial flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-white/5 border border-white/10 text-xs font-semibold text-slate-200 hover:text-white hover:bg-white/10 transition-all"
            title="Direct APK Download"
          >
            <Download className="w-3.5 h-3.5 text-cyan-400" />
            APK ({app.size})
          </a>
        </div>
      </div>
    </motion.div>
  );
}
