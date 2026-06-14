"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { TESTIMONIALS } from "@/constants/site";
import { fadeUp, viewport } from "@/lib/animations";

export function Testimonials() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setActive((a) => (a + 1) % TESTIMONIALS.length);

  return (
    <section className="section-padding relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-violet-600/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader
          eyebrow="Client Stories"
          title="What Our Clients"
          titleHighlight="Say About Us"
          description="Real results from real organizations. Here's how iTechQu has transformed businesses and organisations departments."
          className="mb-16"
        />

        <div className="grid lg:grid-cols-5 gap-8 items-center">
          {/* Main testimonial */}
          <div className="lg:col-span-3">
            <AnimatePresence mode="wait">
              <motion.div
                key={active}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                className="glass rounded-3xl p-8 sm:p-10 relative"
              >
                <Quote className="w-10 h-10 text-violet-500/30 mb-6" />

                <p className="text-lg sm:text-xl text-slate-200 leading-relaxed mb-8 italic">
                  &ldquo;{TESTIMONIALS[active].content}&rdquo;
                </p>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-violet-500 to-blue-600 flex items-center justify-center text-white font-bold text-sm shrink-0">
                    {TESTIMONIALS[active].avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-white">{TESTIMONIALS[active].name}</div>
                    <div className="text-sm text-slate-400">{TESTIMONIALS[active].role}</div>
                    <div className="text-xs text-violet-400 mt-0.5">{TESTIMONIALS[active].organization}</div>
                  </div>
                  <div className="ml-auto flex">
                    {Array.from({ length: TESTIMONIALS[active].rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                    ))}
                  </div>
                </div>

                {/* Nav buttons */}
                <div className="flex items-center gap-3 mt-8">
                  <button
                    onClick={prev}
                    className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Previous"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    onClick={next}
                    className="w-10 h-10 rounded-full glass border border-white/10 flex items-center justify-center text-slate-400 hover:text-white hover:bg-white/10 transition-colors"
                    aria-label="Next"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                  <div className="flex items-center gap-1.5 ml-2">
                    {TESTIMONIALS.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActive(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === active ? "w-6 bg-violet-500" : "w-1.5 bg-white/20"
                        }`}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Sidebar: all testimonials list */}
          <div className="lg:col-span-2 space-y-3">
            {TESTIMONIALS.map((t, i) => (
              <motion.button
                key={i}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={viewport}
                onClick={() => setActive(i)}
                className={`w-full text-left p-4 rounded-2xl transition-all duration-300 ${
                  i === active
                    ? "bg-violet-500/10 border border-violet-500/30"
                    : "glass border border-white/[0.06] hover:border-white/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center text-white font-bold text-xs shrink-0 ${
                    i === active
                      ? "bg-gradient-to-br from-violet-500 to-blue-600"
                      : "bg-white/10"
                  }`}>
                    {t.avatar}
                  </div>
                  <div className="min-w-0">
                    <div className="text-sm font-medium text-white truncate">{t.name}</div>
                    <div className="text-xs text-slate-500 truncate">{t.organization}</div>
                  </div>
                </div>
              </motion.button>
            ))}

            {/* Trust bar */}
            <div className="glass rounded-2xl p-4 mt-4 border border-white/[0.06]">
              <div className="text-xs text-slate-500 mb-2 font-medium">AVERAGE RATING</div>
              <div className="flex items-center gap-2">
                <div className="flex">
                  {[1,2,3,4,5].map((i) => (
                    <Star key={i} className="w-4 h-4 text-amber-400 fill-amber-400" />
                  ))}
                </div>
                <span className="text-white font-bold text-sm">5.0</span>
                <span className="text-slate-500 text-xs">from 30+ reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
