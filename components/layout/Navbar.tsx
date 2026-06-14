"use client";

import { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import {
  Menu, X, ChevronDown, ArrowRight, Sun, Moon,
  Code2, Database, Map, Smartphone, Brain, Building2, Cloud, Wrench,
  Car, FileText, BarChart3, Settings, Users, Globe, Briefcase, LayoutGrid,
  Phone, Mail, MessageCircle,
} from "lucide-react";
import { NAV_LINKS } from "@/constants/navigation";
import { SITE } from "@/constants/site";

type IconFC = React.FC<{ className?: string }>;

const ICON_MAP: Record<string, IconFC> = {
  Code2, Database, Map, Smartphone, Brain, Building2, Cloud, Wrench,
  Car, FileText, BarChart3, Settings, Users, Globe, Briefcase, LayoutGrid,
  Phone, Mail, MessageCircle,
};

const megaMenuVariants: Variants = {
  hidden: { opacity: 0, y: -8, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.2, ease: [0.25, 0.1, 0.25, 1] } },
  exit: { opacity: 0, y: -8, scale: 0.97, transition: { duration: 0.15 } },
};

const drawerVariants: Variants = {
  hidden: { x: "100%" },
  visible: { x: 0, transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
  exit: { x: "100%", transition: { type: "spring" as const, stiffness: 300, damping: 30 } },
};

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileExpanded, setMobileExpanded] = useState<string | null>(null);
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setActiveMenu(null);
  }, [pathname]);

  useEffect(() => {
    const saved = localStorage.getItem("itechqu-theme") as "dark" | "light" | null;
    if (saved) {
      setTheme(saved);
      document.documentElement.classList.toggle("light", saved === "light");
    }
  }, []);

  const toggleTheme = () => {
    const next = theme === "dark" ? "light" : "dark";
    setTheme(next);
    localStorage.setItem("itechqu-theme", next);
    document.documentElement.classList.toggle("light", next === "light");
  };

  const isLight = theme === "light";

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "border-b border-white/10 shadow-2xl shadow-black/60"
            : "border-b border-white/5"
        }`}
        style={{
          backgroundColor: isScrolled
            ? (isLight ? "rgba(248,250,252,0.97)" : "rgba(3,7,18,0.97)")
            : (isLight ? "rgba(241,245,249,0.88)" : "rgba(3,7,18,0.80)"),
          backdropFilter: "blur(20px)",
          WebkitBackdropFilter: "blur(20px)",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-18">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-sm shadow-lg shadow-violet-500/25 group-hover:shadow-violet-500/40 transition-shadow duration-300">
                iQ
              </div>
              <span className="text-lg font-bold tracking-tight" style={{ fontFamily: "var(--font-syne)" }}>
                <span className="text-white">iTech</span>
                <span className="gradient-text">Qu</span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <div className="hidden lg:flex items-center gap-1">
              {NAV_LINKS.map((item) => (
                <div
                  key={item.label}
                  className="relative"
                  onMouseEnter={() => item.children && setActiveMenu(item.label)}
                  onMouseLeave={() => setActiveMenu(null)}
                >
                  {item.children ? (
                    <button
                      className={`flex items-center gap-1 px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        activeMenu === item.label
                          ? "text-white bg-white/8"
                          : "text-slate-300 hover:text-white hover:bg-white/6"
                      }`}
                    >
                      {item.label}
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          activeMenu === item.label ? "rotate-180" : ""
                        }`}
                      />
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        pathname === item.href
                          ? "text-white bg-white/8"
                          : "text-slate-300 hover:text-white hover:bg-white/6"
                      }`}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Mega Menu */}
                  {item.children && (
                    <AnimatePresence>
                      {activeMenu === item.label && (
                        <motion.div
                          variants={megaMenuVariants}
                          initial="hidden"
                          animate="visible"
                          exit="exit"
                          className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-[520px] rounded-2xl border border-white/10 shadow-2xl shadow-black/80 overflow-hidden p-4"
                          style={{
                            backgroundColor: isLight ? "rgba(255,255,255,0.97)" : "rgba(3,7,18,0.97)",
                            backdropFilter: "blur(24px)",
                            WebkitBackdropFilter: "blur(24px)",
                          }}
                        >
                          <div className="grid grid-cols-2 gap-1.5">
                            {item.children.map((child) => {
                              const Icon = ICON_MAP[child.icon || ""] || Code2;
                              return (
                                <Link
                                  key={child.label}
                                  href={child.href}
                                  className="flex items-start gap-3 p-3 rounded-xl hover:bg-white/8 transition-all duration-200 group"
                                >
                                  <div className="w-9 h-9 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center shrink-0 group-hover:bg-violet-500/25 transition-colors duration-200">
                                    <Icon className="w-4.5 h-4.5 text-violet-400" />
                                  </div>
                                  <div>
                                    <p className="text-sm font-semibold text-white leading-tight mb-0.5">
                                      {child.label}
                                    </p>
                                    {child.description && (
                                      <p className="text-xs text-slate-400 leading-relaxed line-clamp-2">
                                        {child.description}
                                      </p>
                                    )}
                                  </div>
                                </Link>
                              );
                            })}
                          </div>

                          {/* Footer CTA */}
                          <div className="mt-3 pt-3 border-t border-white/8 flex items-center justify-between">
                            <p className="text-xs text-slate-500">Need something custom?</p>
                            <Link
                              href="/contact"
                              className="flex items-center gap-1 text-xs font-semibold text-violet-400 hover:text-violet-300 transition-colors"
                            >
                              Talk to us <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
              >
                <Phone className="w-3.5 h-3.5" />
                <span className="hidden xl:block">{SITE.phone}</span>
              </a>
              <button
                onClick={toggleTheme}
                className="p-2 rounded-lg text-slate-400 hover:text-white hover:bg-white/6 transition-all"
                aria-label="Toggle theme"
              >
                {isLight ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
              </button>
              <Link
                href="/contact"
                className="px-4 py-2 text-sm font-semibold rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all duration-200"
              >
                Get Started
              </Link>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden p-2 rounded-lg text-slate-300 hover:text-white hover:bg-white/8 transition-all"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
              className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm lg:hidden"
            />

            {/* Drawer */}
            <motion.div
              variants={drawerVariants}
              initial="hidden"
              animate="visible"
              exit="exit"
              className="fixed top-0 right-0 bottom-0 z-50 w-80 border-l border-white/8 flex flex-col lg:hidden overflow-y-auto"
              style={{ backgroundColor: isLight ? "#ffffff" : "#070c1a" }}
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between p-4 border-b border-white/8">
                <Link href="/" className="flex items-center gap-2" onClick={() => setMobileOpen(false)}>
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-600 to-blue-600 flex items-center justify-center text-white font-bold text-xs">
                    iQ
                  </div>
                  <span className="font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
                    iTechQu
                  </span>
                </Link>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/8 transition-all"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Nav Items */}
              <div className="flex-1 p-4 space-y-1">
                {NAV_LINKS.map((item) => (
                  <div key={item.label}>
                    {item.children ? (
                      <Fragment>
                        <button
                          onClick={() =>
                            setMobileExpanded(mobileExpanded === item.label ? null : item.label)
                          }
                          className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-white/6 transition-all"
                        >
                          {item.label}
                          <ChevronDown
                            className={`w-4 h-4 transition-transform duration-200 ${
                              mobileExpanded === item.label ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        <AnimatePresence>
                          {mobileExpanded === item.label && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="pl-3 pt-1 pb-2 space-y-0.5">
                                {item.children.map((child) => {
                                  const Icon = ICON_MAP[child.icon || ""] || Code2;
                                  return (
                                    <Link
                                      key={child.label}
                                      href={child.href}
                                      onClick={() => setMobileOpen(false)}
                                      className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-slate-400 hover:text-white hover:bg-white/6 transition-all"
                                    >
                                      <Icon className="w-4 h-4 text-violet-400 shrink-0" />
                                      {child.label}
                                    </Link>
                                  );
                                })}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </Fragment>
                    ) : (
                      <Link
                        href={item.href}
                        onClick={() => setMobileOpen(false)}
                        className={`block px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                          pathname === item.href
                            ? "text-white bg-violet-500/15 border border-violet-500/20"
                            : "text-slate-300 hover:text-white hover:bg-white/6"
                        }`}
                      >
                        {item.label}
                      </Link>
                    )}
                  </div>
                ))}
              </div>

              {/* Drawer Footer */}
              <div className="p-4 border-t border-white/8 space-y-3">
                <Link
                  href="/contact"
                  onClick={() => setMobileOpen(false)}
                  className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold shadow-lg"
                >
                  Get Started <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-center gap-4">
                  <a
                    href={`tel:${SITE.phone}`}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    <Phone className="w-3.5 h-3.5" /> {SITE.phone}
                  </a>
                  <button
                    onClick={toggleTheme}
                    className="flex items-center gap-1.5 text-xs text-slate-400 hover:text-white transition-colors"
                  >
                    {isLight ? <Moon className="w-3.5 h-3.5" /> : <Sun className="w-3.5 h-3.5" />}
                    {isLight ? "Dark" : "Light"}
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
