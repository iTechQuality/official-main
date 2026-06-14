import type { MetadataRoute } from "next";

const BASE = "https://www.itechqu.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const routes = [
    { url: "/", priority: 1.0, changeFrequency: "weekly" as const },
    { url: "/about", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/team", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/products", priority: 0.9, changeFrequency: "weekly" as const },
    { url: "/products/rto-mis", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/services", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/industries", priority: 0.7, changeFrequency: "monthly" as const },
    { url: "/portfolio", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/pricing", priority: 0.8, changeFrequency: "monthly" as const },
    { url: "/blog", priority: 0.7, changeFrequency: "weekly" as const },
    { url: "/careers", priority: 0.6, changeFrequency: "weekly" as const },
    { url: "/contact", priority: 0.9, changeFrequency: "monthly" as const },
    { url: "/faq", priority: 0.6, changeFrequency: "monthly" as const },
    { url: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/terms", priority: 0.3, changeFrequency: "yearly" as const },
    { url: "/refund", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  return routes.map(({ url, priority, changeFrequency }) => ({
    url: `${BASE}${url}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));
}
