"use client";

import { motion } from "framer-motion";
import { staggerContainer, fadeUp, viewport } from "@/lib/animations";

const TIMELINE = [
  { year: "2021", title: "iTechQu Founded", desc: "Born in Raipur, Chhattisgarh — a 5-member team with a passion for building real software. Started with CodeIgniter PHP and Native Android, delivering first client projects.", color: "#7C3AED" },
  { year: "2022", title: "Flutter & Laravel Era", desc: "Adopted Flutter and Laravel as our core stack. Shipped first HR management system (HRXtreme) and grocery delivery platform (Lorio). Team doubled.", color: "#2563EB" },
  { year: "2023", title: "Product Diversification", desc: "Delivered 10+ diverse products — food delivery (SMOMS), astrology platform (AstroGuide), real-time chat, rescue portal, social apps. Established as a versatile product studio.", color: "#06B6D4" },
  { year: "2024", title: "Modern Stack Adoption", desc: "Shifted to Node.js and React.js for high-performance web apps. Officially incorporated as a company on 4th November 2024. Registered as Udyam MSME.", color: "#10B981" },
  { year: "2025", title: "GIS & Government Products", desc: "Entered the GIS domain with ArcGIS and PostGIS-powered solutions. Launched Jain RTO Management System — now deployed across 10+ RTOs. Udyam registered on 22 March 2025.", color: "#F59E0B" },
  { year: "2025+", title: "Scaling Up", desc: "Building AI-powered GIS solutions, expanding government product portfolio, and growing our team in Raipur. More cities, more products, more impact.", color: "#8B5CF6" },
];

export function AboutTimeline() {
  return (
    <section className="section-padding">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-4">
            Our Journey
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold text-white" style={{ fontFamily: "var(--font-syne)" }}>
            4 Years of <span className="gradient-text">Building Excellence</span>
          </h2>
        </div>

        <motion.div
          variants={staggerContainer(0.07)}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          className="relative"
        >
          {/* Vertical line */}
          <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent" />

          <div className="space-y-8">
            {TIMELINE.map((item, i) => (
              <motion.div
                key={item.year}
                variants={fadeUp}
                className={`flex gap-6 items-start ${i % 2 === 0 ? "sm:flex-row" : "sm:flex-row-reverse"}`}
              >
                {/* Content */}
                <div className={`flex-1 ${i % 2 === 0 ? "sm:text-right" : "sm:text-left"}`}>
                  <div className="glass rounded-2xl p-5 inline-block text-left">
                    <div className="text-xs font-bold uppercase tracking-widest mb-1" style={{ color: item.color }}>{item.year}</div>
                    <h3 className="text-sm font-bold text-white mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-400 leading-relaxed">{item.desc}</p>
                  </div>
                </div>

                {/* Dot */}
                <div className="relative z-10 shrink-0">
                  <div
                    className="w-5 h-5 rounded-full border-2 border-[#030712]"
                    style={{ background: item.color }}
                  />
                </div>

                {/* Spacer for alternating layout */}
                <div className="hidden sm:block flex-1" />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
