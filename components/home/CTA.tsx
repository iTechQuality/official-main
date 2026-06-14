"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, MessageCircle, Phone } from "lucide-react";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";
import { SITE } from "@/constants/site";

export function CTA() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Gradient border top */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 via-blue-600/5 to-transparent" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-violet-600/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
        >
          <motion.div variants={fadeUp}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-violet-400 animate-pulse" />
              Start Your Project Today
            </span>
          </motion.div>

          <motion.h2
            variants={fadeUp}
            className="text-3xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            Ready to Build
            <br />
            <span className="gradient-text">Something Great?</span>
          </motion.h2>

          <motion.p
            variants={fadeUp}
            className="text-lg text-slate-400 leading-relaxed mb-10 max-w-2xl mx-auto"
          >
            Whether you need a government digital platform, a custom ERP, a mobile app, or AI automation — we have the team and experience to deliver it right the first time.
          </motion.p>

          <motion.div variants={fadeUp} className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <Link
              href="/contact"
              className="group flex items-center gap-2.5 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-base shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.02] transition-all duration-300"
            >
              Book a Free Consultation
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/products"
              className="flex items-center gap-2.5 px-8 py-4 glass border border-white/10 text-white font-semibold rounded-xl text-base hover:bg-white/10 hover:border-white/20 transition-all duration-300"
            >
              View Our Products
            </Link>
          </motion.div>

          {/* Quick contact row */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8 border-t border-white/[0.06]"
          >
            <span className="text-sm text-slate-500">Or reach us directly:</span>
            <a
              href={`tel:${SITE.phone}`}
              className="flex items-center gap-2 text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-4 h-4 text-violet-400" />
              {SITE.phone}
            </a>
            <span className="hidden sm:block text-slate-700">·</span>
            <a
              href={`https://wa.me/${SITE.whatsapp}`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-sm font-medium text-[#25D366] hover:text-[#25D366]/80 transition-colors"
            >
              <MessageCircle className="w-4 h-4" />
              WhatsApp
            </a>
            <span className="hidden sm:block text-slate-700">·</span>
            <a
              href={`mailto:${SITE.email}`}
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              {SITE.email}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
