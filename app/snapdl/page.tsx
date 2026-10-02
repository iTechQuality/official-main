import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { APPS_DATA } from "@/constants/apps";
import { AppHero } from "@/components/apps/AppHero";
import { AppFeaturesGrid } from "@/components/apps/AppFeaturesGrid";
import { InstallGuide } from "@/components/apps/InstallGuide";
import { AppSpecs } from "@/components/apps/AppSpecs";
import { AppFAQSection } from "@/components/apps/AppFAQSection";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "SnapDL — Smart Video Downloader & Private Media Vault for Android",
  description:
    "Download SnapDL APK (v1.0.0). Fast multi-threaded video downloader with 4K/1080p support, MP3 audio extraction, and PIN-protected private media vault for Android.",
  keywords: [
    "SnapDL",
    "SnapDL APK",
    "SnapDL download",
    "SnapDL video downloader",
    "private media vault Android",
    "4K video downloader APK",
    "iTechQu SnapDL",
    "free video downloader",
  ],
  openGraph: {
    title: "SnapDL — Smart Video Downloader & Media Vault",
    description:
      "Ultra-fast video & media downloader with a private encrypted vault, 4K/1080p stream support, and background download manager for Android.",
    url: "https://www.itechqu.com/snapdl",
    type: "website",
  },
};

export default function SnapDlPage() {
  const app = APPS_DATA.find((a) => a.id === "snapdl");

  if (!app) {
    notFound();
  }

  return (
    <div className="min-h-screen">
      <AppHero app={app} />
      <AppFeaturesGrid app={app} />
      <InstallGuide
        appName={app.name}
        downloadUrl={app.downloadUrl}
        accentColor={app.accentColor}
      />
      <AppSpecs app={app} />
      <AppFAQSection app={app} />
      <CTA />
    </div>
  );
}
