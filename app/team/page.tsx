import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, MapPin, Linkedin, Github, Twitter } from "lucide-react";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Our Team | iTechQu",
  description: "Meet the people behind iTechQu — engineers, designers, and problem-solvers building enterprise software from Raipur, Chhattisgarh.",
};

const LEADERSHIP = [
  {
    name: "Hemant Chandra",
    role: "Founder",
    bio: "Leads product vision and client strategy. Started iTechQu in 2021 with a mission to build quality software from Raipur. Expert in PHP, Android, Flutter, and Node.js.",
    initials: "HC",
    color: "#7C3AED",
    stack: ["Node.js", "React", "Flutter", "Dart", "GIS", "Laravel"],
    linkedin: "https://www.linkedin.com/in/hemant-chandra-a60215192",
    github: "https://github.com/ChandraHemant",
  },
  {
    name: "Avinash Chandraker",
    role: "Co-Founder",
    bio: "Architects scalable backend systems using Node.js, Laravel, and PostgreSQL. One of the founding team of 5 who shaped iTechQu's engineering culture.",
    initials: "AC",
    color: "#2563EB",
    stack: ["Laravel", "Node.js", "PostgreSQL", "Redis"],
    linkedin: "#",
    github: "#",
  },
  {
    name: "Sandeep Sahu",
    role: "Marketing Lead",
    bio: "Drives growth, partnerships, and brand visibility for iTechQu. Connects client needs with the right solutions and keeps the pipeline moving.",
    initials: "SS",
    color: "#10B981",
    stack: ["Digital Marketing", "Business Development", "Client Relations"],
    linkedin: "#",
    github: "#",
  },
];

const TEAM = [
  { name: "Team Member", role: "Frontend Developer", initials: "FD", color: "#10B981", stack: ["React", "Next.js", "Tailwind"] },
  { name: "Team Member", role: "GIS Engineer", initials: "GE", color: "#F59E0B", stack: ["PostGIS", "ArcGIS", "Python"] },
  { name: "Team Member", role: "Android Developer", initials: "AD", color: "#EF4444", stack: ["Kotlin", "Android SDK", "REST"] },
  { name: "Team Member", role: "Backend Developer", initials: "BD", color: "#8B5CF6", stack: ["PHP", "Laravel", "MySQL"] },
  { name: "Team Member", role: "UI/UX Designer", initials: "UX", color: "#EC4899", stack: ["Figma", "Prototyping", "Design Systems"] },
  { name: "Team Member", role: "DevOps Engineer", initials: "DO", color: "#06B6D4", stack: ["Docker", "Linux", "CI/CD"] },
];

const PERKS = [
  { icon: "🏙️", title: "Raipur HQ", desc: "Based at GE Road, Raipur — heart of Chhattisgarh's growing tech ecosystem." },
  { icon: "🚀", title: "Real Product Ownership", desc: "Work on products that are live in government offices and businesses across India." },
  { icon: "📚", title: "Continuous Learning", desc: "New tech every year — from Android to Flutter, Laravel to Node.js, and now GIS." },
  { icon: "🤝", title: "Close-knit Team", desc: "Small team means everyone ships, everyone matters, and everyone grows fast." },
  { icon: "💻", title: "Full Stack Exposure", desc: "You don't get boxed in — frontend, backend, mobile, GIS, and cloud." },
  { icon: "🌱", title: "MSME Backed", desc: "Officially registered, growing steadily — building something that lasts." },
];

export default function TeamPage() {
  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[300px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            The People
          </span>
          <h1 className="text-4xl sm:text-6xl font-bold text-white mb-5 leading-tight" style={{ fontFamily: "var(--font-syne)" }}>
            Built by a Team That{" "}
            <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
              Cares About Quality
            </span>
          </h1>
          <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed">
            We started as 5 people in Raipur in 2021. We're still in Raipur — with more people, more products, and the same obsession with building things right.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mt-8">
            <div className="glass rounded-xl px-5 py-3 border border-white/8 text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Founded</div>
              <div className="text-sm font-semibold text-white">2021, Raipur</div>
            </div>
            <div className="glass rounded-xl px-5 py-3 border border-white/8 text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Started With</div>
              <div className="text-sm font-semibold text-white">5 Members</div>
            </div>
            <div className="glass rounded-xl px-5 py-3 border border-white/8 text-center">
              <div className="text-xs text-slate-500 uppercase tracking-wider mb-1">Hiring</div>
              <div className="text-sm font-semibold text-green-400">Yes, actively</div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Leadership</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-syne)" }}>
              The Founding Core
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {LEADERSHIP.map((member) => (
              <div key={member.name} className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-white/14 hover:-translate-y-1 transition-all duration-300 group">
                {/* Avatar */}
                <div className="flex items-start justify-between mb-5">
                  <div
                    className="w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white shadow-lg"
                    style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}99)` }}
                  >
                    {member.initials}
                  </div>
                  <div className="flex gap-2">
                    <a href={member.linkedin} className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                      <Linkedin className="w-3.5 h-3.5" />
                    </a>
                    <a href={member.github} className="w-8 h-8 rounded-lg glass border border-white/8 flex items-center justify-center text-slate-400 hover:text-white transition-colors">
                      <Github className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
                <h3 className="text-base font-bold text-white mb-0.5" style={{ fontFamily: "var(--font-syne)" }}>
                  {member.name}
                </h3>
                <p className="text-xs font-semibold mb-3" style={{ color: member.color }}>{member.role}</p>
                <p className="text-sm text-slate-400 leading-relaxed mb-4">{member.bio}</p>
                <div className="flex flex-wrap gap-1.5">
                  {member.stack.map((s) => (
                    <span key={s} className="px-2 py-0.5 rounded text-xs bg-white/[0.04] text-slate-500 border border-white/[0.06]">{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team grid */}
      <section className="section-padding bg-[#0a0f1e]/40">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">The Team</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-syne)" }}>
              Engineers & Designers
            </h2>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {TEAM.map((member) => (
              <div key={member.role} className="glass rounded-2xl p-5 text-center border border-white/[0.06] hover:border-white/12 hover:-translate-y-1 transition-all duration-300">
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center text-sm font-bold text-white mx-auto mb-3"
                  style={{ background: `linear-gradient(135deg, ${member.color}, ${member.color}88)` }}
                >
                  {member.initials}
                </div>
                <p className="text-xs font-bold text-white mb-1 leading-tight">{member.role}</p>
                <div className="mt-2 space-y-0.5">
                  {member.stack.slice(0, 2).map((s) => (
                    <div key={s} className="text-xs text-slate-600">{s}</div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <p className="text-center text-xs text-slate-600 mt-8">
            + more team members joining as we grow 🚀
          </p>
        </div>
      </section>

      {/* Culture perks */}
      <section className="section-padding">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-violet-400">Why Join Us</span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2" style={{ fontFamily: "var(--font-syne)" }}>
              Life at iTechQu
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {PERKS.map((perk) => (
              <div key={perk.title} className="glass rounded-2xl p-6 border border-white/[0.07] hover:border-white/12 transition-all hover:-translate-y-0.5 duration-300">
                <span className="text-2xl mb-3 block">{perk.icon}</span>
                <h3 className="text-sm font-bold text-white mb-1.5">{perk.title}</h3>
                <p className="text-xs text-slate-400 leading-relaxed">{perk.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Join us CTA */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="glass rounded-3xl p-10 border border-violet-500/15 bg-violet-500/5">
            <div className="flex items-center justify-center gap-2 mb-4">
              <MapPin className="w-4 h-4 text-violet-400" />
              <span className="text-sm text-violet-400 font-semibold">Raipur, Chhattisgarh</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Want to Build with Us?
            </h2>
            <p className="text-slate-400 text-sm leading-relaxed mb-8 max-w-lg mx-auto">
              We're always looking for developers who care about clean code, real products, and growing fast. React, Flutter, Node.js, GIS, PHP — if you're good at what you do, let's talk.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <Link
                href="/careers"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-white bg-gradient-to-r from-violet-600 to-blue-600 shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:-translate-y-0.5 transition-all"
              >
                View Open Positions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 px-7 py-3 rounded-xl text-sm font-semibold text-slate-300 glass border border-white/10 hover:bg-white/8 transition-all"
              >
                Send Your Resume
              </Link>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </div>
  );
}
