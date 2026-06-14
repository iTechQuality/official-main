import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Tag, ArrowRight } from "lucide-react";
import { notFound } from "next/navigation";

const POSTS = [
  {
    title: "How the RTO Management System Reduced Processing Time by 80%",
    excerpt: "A detailed case study on how digitizing RTO workflows — from vehicle registration to tax collection — transformed citizen service delivery and officer productivity.",
    category: "Case Study",
    readTime: "8 min read",
    date: "June 2025",
    slug: "rto-management-system-case-study",
    color: "#7C3AED",
  },
  {
    title: "Why Government Software Projects Fail (And How to Fix It)",
    excerpt: "After delivering 30+ government projects, we\'ve identified the 5 most common reasons government software initiatives fail — and practical strategies to avoid each.",
    category: "GovTech",
    readTime: "6 min read",
    date: "May 2025",
    slug: "why-government-software-fails",
    color: "#2563EB",
  },
  {
    title: "PostGIS for Smart City Applications: A Practical Guide",
    excerpt: "How we use PostgreSQL + PostGIS to power geospatial intelligence for smart city platforms — from asset tracking to route optimization and environmental monitoring.",
    category: "Technology",
    readTime: "10 min read",
    date: "April 2025",
    slug: "postgis-smart-city-guide",
    color: "#06B6D4",
  },
  {
    title: "Building Citizen-First Government Portals: UX Lessons from the Field",
    excerpt: "Designing government software for citizens who are not tech-savvy requires different thinking. Here are the UX principles we\'ve learned from years of govtech projects.",
    category: "Design",
    readTime: "7 min read",
    date: "March 2025",
    slug: "citizen-first-government-portal-ux",
    color: "#10B981",
  },
  {
    title: "Flutter vs React Native for Enterprise Mobile Apps in 2025",
    excerpt: "We\'ve built 15+ enterprise mobile apps in both frameworks. Here\'s our honest comparison for government and enterprise use cases.",
    category: "Technology",
    readTime: "9 min read",
    date: "February 2025",
    slug: "flutter-vs-react-native-enterprise-2025",
    color: "#F59E0B",
  },
  {
    title: "How to Write an RFP for Enterprise Software Development",
    excerpt: "A step-by-step guide for government departments and enterprises on writing an effective Request for Proposal for custom software development.",
    category: "Guide",
    readTime: "12 min read",
    date: "January 2025",
    slug: "rfp-enterprise-software-development",
    color: "#EF4444",
  },
];

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
  return POSTS.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) return { title: "Post Not Found | iTechQu" };
  return {
    title: `${post.title} | iTechQu Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = POSTS.find((p) => p.slug === slug);
  if (!post) notFound();

  const others = POSTS.filter((p) => p.slug !== slug).slice(0, 3);

  return (
    <div className="min-h-screen pt-16">
      {/* Header */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg opacity-30" />
        <div className="absolute top-0 left-0 right-0 h-px" style={{ background: `linear-gradient(90deg, transparent, ${post.color}, transparent)` }} />
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to Blog
          </Link>

          <div className="flex flex-wrap items-center gap-3 mb-5">
            <span className="px-3 py-1 rounded-full text-xs font-bold" style={{ background: `${post.color}18`, color: post.color }}>
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-xs text-slate-500">
              <Clock className="w-3 h-3" /> {post.readTime}
            </span>
            <span className="text-xs text-slate-600">{post.date}</span>
          </div>

          <h1
            className="text-3xl sm:text-4xl font-bold text-white mb-6 leading-tight"
            style={{ fontFamily: "var(--font-syne)" }}
          >
            {post.title}
          </h1>
          <p className="text-slate-400 text-lg leading-relaxed">{post.excerpt}</p>
        </div>
      </section>

      {/* Coming Soon body */}
      <section className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pb-24">
        <div className="glass rounded-3xl p-10 sm:p-14 text-center border border-white/8">
          <div
            className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6"
            style={{ background: `${post.color}15`, border: `1px solid ${post.color}25` }}
          >
            <Tag className="w-7 h-7" style={{ color: post.color }} />
          </div>
          <h2 className="text-xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>
            Full Article Coming Soon
          </h2>
          <p className="text-slate-400 text-sm leading-relaxed max-w-md mx-auto mb-8">
            Our team is finishing this article. Subscribe or check back soon — or reach out if you&apos;d like
            to discuss this topic directly with our engineers.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-white"
              style={{ background: `linear-gradient(135deg, ${post.color}, #2563EB)` }}
            >
              Talk to Our Team <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold text-slate-300 glass border border-white/10 hover:bg-white/8 transition-all"
            >
              Browse Other Articles
            </Link>
          </div>
        </div>

        {/* Related posts */}
        {others.length > 0 && (
          <div className="mt-16">
            <h3 className="text-lg font-bold text-white mb-6" style={{ fontFamily: "var(--font-syne)" }}>
              More Articles
            </h3>
            <div className="grid sm:grid-cols-3 gap-4">
              {others.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="glass rounded-xl p-5 border border-white/[0.06] hover:border-white/12 hover:-translate-y-0.5 transition-all group"
                >
                  <div className="h-0.5 w-full mb-4 rounded" style={{ background: `linear-gradient(90deg, ${p.color}, transparent)` }} />
                  <span className="text-xs font-semibold" style={{ color: p.color }}>{p.category}</span>
                  <h4 className="text-sm font-bold text-white mt-1.5 leading-snug group-hover:text-violet-200 transition-colors line-clamp-2">
                    {p.title}
                  </h4>
                  <p className="text-xs text-slate-600 mt-2">{p.date}</p>
                </Link>
              ))}
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
