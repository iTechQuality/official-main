"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Mail, Phone, MapPin, Twitter, Linkedin, Github,
  Youtube, Instagram, ArrowRight, MessageCircle,
} from "lucide-react";
import { SITE } from "@/constants/site";
import { FOOTER_LINKS as NAV_FOOTER } from "@/constants/navigation";
import { fadeUp, staggerContainer, viewport } from "@/lib/animations";

const SOCIAL_ICONS = [
  { icon: Twitter, href: SITE.social.twitter, label: "Twitter" },
  { icon: Linkedin, href: SITE.social.linkedin, label: "LinkedIn" },
  { icon: Github, href: SITE.social.github, label: "GitHub" },
  { icon: Youtube, href: SITE.social.youtube, label: "YouTube" },
  { icon: Instagram, href: SITE.social.instagram, label: "Instagram" },
];

export function Footer() {
  return (
    <footer className="relative bg-[#030712] border-t border-white/[0.06] overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute -top-40 left-1/4 w-80 h-80 bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -top-40 right-1/4 w-80 h-80 bg-blue-600/5 rounded-full blur-3xl pointer-events-none" />

      {/* Newsletter CTA Bar */}
      <div className="border-b border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                Ready to transform your business?
              </h3>
              <p className="text-slate-400 text-sm mt-1">
                Let&apos;s discuss your project. Book a free consultation today.
              </p>
            </div>
            <div className="flex items-center gap-3 shrink-0">
              <a
                href={`https://wa.me/${SITE.whatsapp}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 bg-[#25D366]/10 border border-[#25D366]/30 text-[#25D366] text-sm font-semibold rounded-xl hover:bg-[#25D366]/20 transition-all duration-300"
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <Link
                href="/contact"
                className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all duration-300"
              >
                Book a Demo
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Grid */}
      <motion.div
        variants={staggerContainer(0.05)}
        initial="hidden"
        whileInView="visible"
        viewport={viewport}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8">
          {/* Brand Column */}
          <motion.div variants={fadeUp} className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-2.5 mb-5">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center shadow-lg shadow-violet-500/30">
                <span className="text-white font-bold text-sm" style={{ fontFamily: "var(--font-syne)" }}>iQ</span>
              </div>
              <span className="font-bold text-white text-xl" style={{ fontFamily: "var(--font-syne)" }}>
                iTech<span className="gradient-text">Qu</span>
              </span>
            </Link>
            <p className="text-slate-400 text-sm leading-relaxed mb-6 max-w-xs">
              Enterprise-grade software solutions for government, transport, education, and enterprise.
              Building the digital future of India, one solution at a time.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              <a href={`mailto:${SITE.email}`} className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-violet-500/10 transition-colors">
                  <Mail className="w-3.5 h-3.5 text-violet-400" />
                </div>
                {SITE.email}
              </a>
              <a href={`tel:${SITE.phone}`} className="flex items-center gap-2.5 text-sm text-slate-400 hover:text-white transition-colors group">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center group-hover:bg-violet-500/10 transition-colors">
                  <Phone className="w-3.5 h-3.5 text-violet-400" />
                </div>
                {SITE.phone}
              </a>
              <div className="flex items-start gap-2.5 text-sm text-slate-400">
                <div className="w-7 h-7 rounded-lg bg-white/5 flex items-center justify-center shrink-0 mt-0.5">
                  <MapPin className="w-3.5 h-3.5 text-violet-400" />
                </div>
                <span>{SITE.address.city}, {SITE.address.state} — {SITE.address.pin}</span>
              </div>
            </div>

            {/* Socials */}
            <div className="flex items-center gap-2 mt-6">
              {SOCIAL_ICONS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-violet-500/10 hover:border-violet-500/30 transition-all duration-300"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </motion.div>

          {/* Links Columns */}
          {[
            { title: "Products & Services", links: [...(NAV_FOOTER.products || []), ...(NAV_FOOTER.services || []).slice(0, 5)] },
            { title: "Company", links: NAV_FOOTER.company || [] },
            { title: "Legal & Support", links: NAV_FOOTER.legal || [] },
          ].map((col) => (
            <motion.div key={col.title} variants={fadeUp}>
              <h4 className="text-sm font-semibold text-white mb-4 uppercase tracking-wider">{col.title}</h4>
              <ul className="space-y-2.5">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm text-slate-400 hover:text-white transition-colors duration-200 hover:translate-x-0.5 inline-block"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Bottom Bar */}
      <div className="border-t border-white/[0.06]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} {SITE.fullName} (iTechQu). All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms</Link>
            <Link href="/sitemap.xml" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Sitemap</Link>
          </div>
          <p className="text-xs text-slate-600">
            Crafted with ❤️ in India
          </p>
        </div>
      </div>
    </footer>
  );
}
