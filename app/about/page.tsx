import type { Metadata } from "next";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";
import { AboutTimeline } from "@/components/about/AboutTimeline";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "About Us — iTechQu",
  description:
    "Learn about iTechQu — Information Technology With Quality. Our story, mission, vision, values, and the team building India's premier enterprise software solutions.",
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <AboutStory />
      <AboutValues />
      <AboutTimeline />
      <CTA />
    </>
  );
}
