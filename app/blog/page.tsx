import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Clock, Tag } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog — Insights on Enterprise Software & GovTech | iTechQu",
  description: "Expert insights on enterprise software development, government digital transformation, GIS technology, AI automation, and software best practices from the iTechQu team.",
};

const POSTS = [
  {
    title: "How the RTO Management System Reduced Processing Time by 80%",
    excerpt: "A detailed case study on how digitizing RTO workflows — from vehicle registration to tax collection — transformed citizen service delivery and officer productivity.",
    category: "Case Study",
    readTime: "8 min read",
    date: "June 2025",
    slug: "rto-management-system-case-study",
    featured: true,
    color: "#7C3AED",
  },
  {
    title: "Why Government Software Projects Fail (And How to Fix It)",
    excerpt: "After delivering 30+ government projects, we've identified the 5 most common reasons government software initiatives fail — and practical strategies to avoid each.",
    category: "GovTech",
    readTime: "6 min read",
    date: "May 2025",
    slug: "why-government-software-fails",
    featured: false,
    color: "#2563EB",
  },
  {
    title: "PostGIS for Smart City Applications: A Practical Guide",
    excerpt: "How we use PostgreSQL + PostGIS to power geospatial intelligence for smart city platforms — from asset tracking to route optimization and environmental monitoring.",
    category: "Technology",
    readTime: "10 min read",
    date: "April 2025",
    slug: "postgis-smart-city-guide",
    featured: false,
    color: "#06B6D4",
  },
  {
    title: "Building Citizen-First Government Portals: UX Lessons from the Field",
    excerpt: "Designing government software for citizens who are not tech-savvy requires different thinking. Here are the UX principles we've learned from 8 years of govtech projects.",
    category: "Design",
    readTime: "7 min read",
    date: "March 2025",
    slug: "citizen-first-government-portal-ux",
    featured: false,
    color: "#10B981",
  },
  {
    title: "Flutter vs React Native for Enterprise Mobile Apps in 2025",
    excerpt: "We've built 15+ enterprise mobile apps in both frameworks. Here's our honest comparison for government and enterprise use cases — performance, maintainability, and developer experience.",
    category: "Technology",
    readTime: "9 min read",
    date: "February 2025",
    slug: "flutter-vs-react-native-enterprise-2025",
    featured: false,
    color: "#F59E0B",
  },
  {
    title: "How to Write an RFP for Enterprise Software Development",
    excerpt: "A step-by-step guide for government departments and enterprises on writing an effective Request for Proposal for custom software development — what to include, what to avoid.",
    category: "Guide",
    readTime: "12 min read",
    date: "January 2025",
    slug: "rfp-enterprise-software-development",
    featured: false,
    color: "#EF4444",
  },
];

const CATEGORIES = ["All", "Case Study", "GovTech", "Technology", "Design", "Guide"];

export default function BlogPage() {
  const [featured, ...rest] = POSTS;

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0" style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
            Blog & Insights
          </span>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
            Enterprise Software <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">Insights</span>
          </h1>
          <p className="text-slate-400 text-lg max-w-xl mx-auto">
            Deep-dives, case studies, and technical guides from a team that builds enterprise software every day.
          </p>
        </div>
      </section>

      <section className="pb-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Category filter */}
          <div className="flex flex-wrap gap-2 mb-10">
            {CATEGORIES.map((c) => (
              <span key={c} className={`px-4 py-1.5 rounded-full text-xs font-semibold cursor-pointer transition-all ${c === "All" ? "bg-violet-500/20 text-violet-300 border border-violet-500/30" : "bg-white/5 text-slate-400 border border-white/10 hover:bg-white/10"}`}>
                {c}
              </span>
            ))}
          </div>

          {/* Featured post */}
          <div className="glass rounded-3xl overflow-hidden border border-white/[0.07] mb-8 group hover:border-white/12 transition-all hover:-translate-y-0.5 duration-300">
            <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${featured.color}, transparent)` }} />
            <div className="p-8 sm:p-10">
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: `${featured.color}15`, color: featured.color }}>
                  ★ Featured
                </span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-slate-400">{featured.category}</span>
                <span className="flex items-center gap-1 text-xs text-slate-500"><Clock className="w-3 h-3" />{featured.readTime}</span>
                <span className="text-xs text-slate-600">{featured.date}</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 group-hover:text-violet-200 transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                {featured.title}
              </h2>
              <p className="text-slate-400 leading-relaxed mb-5 max-w-3xl">{featured.excerpt}</p>
              <Link href={`/blog/${featured.slug}`} className="inline-flex items-center gap-2 text-sm font-semibold text-violet-400 hover:text-violet-300 transition-colors group/link">
                Read full article <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Other posts grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="glass rounded-2xl overflow-hidden border border-white/[0.06] hover:border-white/12 hover:-translate-y-1 transition-all duration-300 group block">
                <div className="h-1 w-full" style={{ background: `linear-gradient(90deg, ${post.color}, transparent)` }} />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold" style={{ background: `${post.color}15`, color: post.color }}>{post.category}</span>
                    <span className="flex items-center gap-1 text-xs text-slate-600"><Clock className="w-3 h-3" />{post.readTime}</span>
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-violet-200 transition-colors" style={{ fontFamily: "var(--font-syne)" }}>
                    {post.title}
                  </h3>
                  <p className="text-sm text-slate-500 leading-relaxed line-clamp-3">{post.excerpt}</p>
                  <div className="mt-4 text-xs text-slate-600">{post.date}</div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
