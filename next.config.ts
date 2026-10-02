import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "standalone",
  images: {
    remotePatterns: [],
    formats: ["image/avif", "image/webp"],
  },
  async rewrites() {
    return [
      {
        source: "/SnapDL.apk",
        destination: "/downloads/SnapDL.apk",
      },
      {
        source: "/snapdl.apk",
        destination: "/downloads/SnapDL.apk",
      },
    ];
  },
};

export default nextConfig;
