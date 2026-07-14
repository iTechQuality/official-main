import type { Metadata } from "next";
import { ServicesHero } from "@/components/services/ServicesHero";
import { ServicesGrid } from "@/components/services/ServicesGrid";
import { ServicesProcess } from "@/components/services/ServicesProcess";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "Services — Custom Software, ERP, GIS, AI & Government Solutions",
  description:
    "iTechQu delivers custom software development, ERP systems, GIS solutions, mobile & web apps, AI automation, and government digital transformation across India.",
};

export default function ServicesPage() {
  return (
    <>
      <ServicesHero />
      <ServicesGrid />
      <ServicesProcess />
      <CTA />
    </>
  );
}
