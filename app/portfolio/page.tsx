import type { Metadata } from "next";
import Link from "next/link";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Portfolio — Projects Delivered | iTechQu",
  description: "Explore projects built by iTechQu — HR management, grocery platforms, food delivery, astrology apps, GIS tools, and enterprise software.",
};

const PROJECTS = [
  {
    title: "Lorio — Grocery & Delivery Platform",
    client: "Private Client",
    type: "E-Commerce",
    stack: ["Flutter", "React", "Laravel", "Node.js", "MySQL"],
    desc: "Full-stack grocery and delivery platform with Flutter mobile app, React web storefront, vendor dashboard, real-time order tracking, and admin panel.",
    color: "#7C3AED",
    year: "2022–2023",
  },
  {
    title: "HRXtreme — HR Management Suite",
    client: "Enterprise Clients",
    type: "HR Tech",
    stack: ["Flutter", "Laravel", "MySQL", "Node.js"],
    desc: "Comprehensive HR platform covering employee onboarding, attendance, payroll, leave management, appraisals, and performance tracking. Multi-company support.",
    color: "#2563EB",
    year: "2022–2024",
  },
  {
    title: "SMOMS — Food & Community Platform",
    client: "F&B Sector",
    type: "Food Tech",
    stack: ["React", "Node.js", "MySQL", "Flutter"],
    desc: "Multi-module platform for food ordering, restaurant management, community features, and meal subscription — with separate consumer and vendor apps.",
    color: "#10B981",
    year: "2023–2024",
  },
  {
    title: "AstroGuide — Astrology Consultation",
    client: "Spiritual Tech Client",
    type: "Lifestyle",
    stack: ["Flutter", "React", "Node.js", "MySQL"],
    desc: "End-to-end astrology platform connecting users with astrologers via live chat, call, and reports. Kundali generation, horoscope, and daily predictions.",
    color: "#F59E0B",
    year: "2022–2023",
  },
  {
    title: "FixHR — Employee Tracking App",
    client: "SME Clients",
    type: "HR Tech",
    stack: ["Flutter", "Node.js", "MySQL"],
    desc: "Mobile-first HR app for field employee tracking, geo-fenced attendance, task assignment, expense claims, and real-time location monitoring.",
    color: "#EF4444",
    year: "2023–2024",
  },
  {
    title: "Parichay — Social Platform",
    client: "Social Startup",
    type: "Social",
    stack: ["React", "Node.js", "PostgreSQL"],
    desc: "Community social platform with profiles, connections, real-time messaging, events, and content feed. Built with scalable WebSocket architecture.",
    color: "#8B5CF6",
    year: "2024",
  },
  {
    title: "RescuePortal — Emergency Management",
    client: "Safety Organization",
    type: "Safety Tech",
    stack: ["React", "Node.js", "PostGIS", "Flutter"],
    desc: "Emergency response coordination system with incident reporting, GIS-based dispatch, real-time tracking of rescue teams, and case management.",
    color: "#06B6D4",
    year: "2024–2025",
  },
  {
    title: "Chat App — Real-time Communication",
    client: "Multiple Clients",
    type: "Communication",
    stack: ["React", "Node.js", "Socket.io", "MongoDB"],
    desc: "Full-featured real-time chat application with private messaging, group channels, media sharing, read receipts, push notifications, and web + mobile clients.",
    color: "#EC4899",
    year: "2023",
  },
  {
    title: "GEO AI — Spatial Intelligence",
    client: "Research & Enterprise",
    type: "GIS / AI",
    stack: ["Python", "React", "PostGIS", "TensorFlow"],
    desc: "AI-powered geospatial analytics platform combining satellite data, machine learning models, and interactive map dashboards for land and infrastructure analysis.",
    color: "#10B981",
    year: "2025",
  },
  {
    title: "TubeSnap — Video Platform",
    client: "Media Startup",
    type: "Media Tech",
    stack: ["React", "Node.js", "AWS S3", "FFmpeg"],
    desc: "Short-form video sharing platform with upload, transcoding, feed algorithm, likes, comments, creator profiles, and content moderation tools.",
    color: "#F59E0B",
    year: "2024–2025",
  },
  {
    title: "EV Charging Network Survey",
    client: "Infrastructure Client",
    type: "GIS / Survey",
    stack: ["Flutter", "Node.js", "PostGIS", "ArcGIS"],
    desc: "GIS-enabled mobile survey app for mapping EV charging stations — location capture, photos, capacity data, connectivity type, and real-time sync to a GIS dashboard.",
    color: "#7C3AED",
    year: "2025",
  },
  {
    title: "Jain RTO Management System",
    client: "Regional Transport Offices, CG",
    type: "Government",
    stack: ["React", "Node.js", "PostgreSQL", "PostGIS"],
    desc: "Our flagship government product — complete digital platform for RTOs covering vehicle registration, driving licenses, tax collection, permits, and citizen self-service. Live in 10+ RTOs.",
    color: "#2563EB",
    year: "2025–Present",
  },
];

const TYPES = ["All", "E-Commerce", "HR Tech", "Food Tech", "Lifestyle", "Social", "Safety Tech", "Communication", "GIS / AI", "Media Tech", "Government"];

export default function PortfolioPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            Our Work
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Built From <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Raipur, For the World.</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            HR tech, food delivery, astrology, GIS, social platforms, government systems — a selection of what we&apos;ve shipped since 2021.
          </p>
        </div>
      </section>

      {/* Filter tabs */}
      <section className="pb-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 mb-10">
            {TYPES.map((t) => (
              <span key={t} className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${t === "All" ? "bg-violet-500/20 text-violet-300 border border-violet-500/30" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"}`}>
                {t}
              </span>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {PROJECTS.map((p) => (
              <div key={p.title} className="glass rounded-2xl overflow-hidden group hover:border-white/15 hover:-translate-y-1 transition-all duration-300">
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold" style={{ background: `${p.color}15`, color: p.color }}>
                      {p.type}
                    </span>
                    <span className="text-xs text-slate-600">{p.year}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-1" style={{ fontFamily: "var(--font-syne)" }}>{p.title}</h3>
                  <p className="text-xs text-slate-500 mb-3">{p.client}</p>
                  <p className="text-sm text-slate-400 leading-relaxed mb-4">{p.desc}</p>
                  <div className="flex flex-wrap gap-1.5">
                    {p.stack.map((s) => (
                      <span key={s} className="px-2 py-0.5 rounded text-xs bg-white/[0.04] text-slate-500 border border-white/[0.06]">{s}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 text-center">
            <p className="text-slate-500 text-sm">
              Many projects are under NDA.{" "}
              <Link href="/contact" className="text-violet-400 hover:text-violet-300 font-medium">
                Contact us for a detailed case study →
              </Link>
            </p>
          </div>
        </div>
      </section>

      <div className="py-8" />
      <CTA />
    </div>
  );
}
