import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Clock, Briefcase } from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Careers — Join the iTechQu Team",
  description: "Work at iTechQu and help build enterprise software that powers government and business across India. Open roles in software engineering, design, and product.",
};

const OPENINGS = [
  { title: "Senior Full-Stack Developer", dept: "Engineering", location: "Jaipur / Remote", type: "Full-Time", stack: ["Next.js", "Node.js", "PostgreSQL"], desc: "Build enterprise web platforms for transport, education, and corporate clients. 3+ years experience required." },
  { title: "Flutter Developer", dept: "Mobile", location: "Jaipur", type: "Full-Time", stack: ["Flutter", "Dart", "REST APIs"], desc: "Develop cross-platform mobile apps for government and enterprise use cases. 2+ years Flutter experience." },
  { title: "GIS Developer", dept: "Engineering", location: "Jaipur", type: "Full-Time", stack: ["PostGIS", "OpenLayers", "Python"], desc: "Build geospatial solutions for smart city and government mapping projects. Experience with PostGIS essential." },
  { title: "UI/UX Designer", dept: "Design", location: "Jaipur / Remote", type: "Full-Time", stack: ["Figma", "Prototyping", "Design Systems"], desc: "Design beautiful, accessible interfaces for complex enterprise software. Portfolio of B2B/SaaS design required." },
  { title: "Business Development Manager", dept: "Sales", location: "Jaipur", type: "Full-Time", stack: ["Government Sales", "RFP/Tendering", "CRM"], desc: "Drive growth through government tender participation and enterprise client acquisition. 3+ years B2G/B2B sales." },
  { title: "Project Manager", dept: "Delivery", location: "Jaipur", type: "Full-Time", stack: ["Agile/Scrum", "JIRA", "Enterprise projects"], desc: "Lead enterprise software delivery for transport, education, and corporate clients from kickoff to go-live." },
];

const PERKS = [
  { emoji: "🚀", title: "Impactful Work", desc: "Build software used by thousands of citizens and government officers daily." },
  { emoji: "📚", title: "Learning Budget", desc: "₹20,000 annual budget for courses, books, and conferences." },
  { emoji: "🏡", title: "Flexible Work", desc: "Hybrid and remote options for most engineering and design roles." },
  { emoji: "💰", title: "Competitive Pay", desc: "Market-rate compensation with performance bonuses and equity options." },
  { emoji: "🏥", title: "Health Insurance", desc: "Comprehensive group medical insurance for you and your family." },
  { emoji: "🤝", title: "Growth Culture", desc: "Regular mentorship, code reviews, and a culture that values technical excellence." },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[250px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            We&apos;re Hiring
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Build Software That <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Matters</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto">
            Join a team of engineers, designers, and problem-solvers building the digital infrastructure of India — one enterprise system at a time.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
            {PERKS.map((perk) => (
              <div key={perk.title} className="glass rounded-2xl p-4 text-center border border-white/[0.06]">
                <span className="text-2xl mb-2 block">{perk.emoji}</span>
                <h3 className="text-xs font-bold text-white mb-1">{perk.title}</h3>
                <p className="text-[10px] text-slate-500 leading-tight">{perk.desc}</p>
              </div>
            ))}
          </div>

          {/* Open roles */}
          <h2 className="text-xl font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>Open Positions ({OPENINGS.length})</h2>
          <div className="space-y-3">
            {OPENINGS.map((job) => (
              <div key={job.title} className="glass rounded-2xl p-6 border border-white/[0.06] hover:border-white/12 hover:-translate-y-0.5 transition-all duration-300 group">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-2">
                      <h3 className="text-base font-bold text-white group-hover:text-violet-200 transition-colors">{job.title}</h3>
                      <span className="px-2.5 py-0.5 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-semibold">{job.dept}</span>
                    </div>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-slate-500 mb-2">
                      <span className="flex items-center gap-1"><MapPin className="w-3 h-3" />{job.location}</span>
                      <span className="flex items-center gap-1"><Briefcase className="w-3 h-3" />{job.type}</span>
                    </div>
                    <p className="text-sm text-slate-400">{job.desc}</p>
                    <div className="flex flex-wrap gap-1.5 mt-2">
                      {job.stack.map((s) => (
                        <span key={s} className="px-2 py-0.5 rounded bg-white/[0.04] text-slate-500 text-xs border border-white/[0.05]">{s}</span>
                      ))}
                    </div>
                  </div>
                  <Link href={`/contact?role=${encodeURIComponent(job.title)}`} className="shrink-0 flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-violet-600 to-blue-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-violet-500/25 transition-all">
                    Apply Now <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center">
            <p className="text-slate-500 text-sm">
              Don&apos;t see your role?{" "}
              <Link href="/contact" className="text-violet-400 hover:text-violet-300 font-medium">
                Send us your resume anyway →
              </Link>
            </p>
          </div>
        </div>
      </section>
      <CTA />
    </div>
  );
}
