import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = { title: "404 — Page Not Found | iTechQu" };

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div
          className="text-8xl font-bold mb-4 bg-gradient-to-r from-violet-400 to-blue-400 bg-clip-text text-transparent"
          style={{ fontFamily: "var(--font-syne)" }}
        >
          404
        </div>
        <h1 className="text-2xl font-bold text-white mb-3">Page not found</h1>
        <p className="text-slate-400 mb-8">
          The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="px-6 py-3 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm hover:shadow-lg hover:shadow-violet-500/25 transition-all"
          >
            Back to Home
          </Link>
          <Link
            href="/contact"
            className="px-6 py-3 bg-white/5 border border-white/10 text-white font-semibold rounded-xl text-sm hover:bg-white/10 transition-all"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </div>
  );
}
