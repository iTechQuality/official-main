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
  title: "HC Player — 4K Media Player with Saanp Seedhi Multiplayer Game",
  description:
    "HC Player for Android (v1.0.4). Experience ultra-smooth 4K video playback, PiP floating mode, gesture controls, video cutter, and built-in multiplayer Snake & Ladder game.",
  keywords: [
    "HC Player",
    "HC Player APK",
    "HC Player 4K",
    "Saanp Seedhi multiplayer",
    "Android media player PiP",
    "com.itechqu.hcplayer",
    "iTechQu media player",
  ],
  openGraph: {
    title: "HC Player — 4K Media Player & Games",
    description:
      "Hardware-accelerated 4K media player with floating PiP mode, gesture seeking, and real-time multiplayer Saanp Seedhi gaming.",
    url: "https://www.itechqu.com/hcplayer",
    type: "website",
  },
};

export default function HcPlayerPage() {
  const app = APPS_DATA.find((a) => a.id === "hcplayer");

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
