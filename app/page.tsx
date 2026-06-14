import type { Metadata } from "next";
import { Hero } from "@/components/home/Hero";
import { Stats } from "@/components/home/Stats";
import { Products } from "@/components/home/Products";
import { Services } from "@/components/home/Services";
import { WhyUs } from "@/components/home/WhyUs";
import { Industries } from "@/components/home/Industries";
import { Testimonials } from "@/components/home/Testimonials";
import { TechStack } from "@/components/home/TechStack";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "iTechQu — Enterprise Software for Government & Business",
  description:
    "iTechQu builds enterprise-grade software for government, transport, education, and enterprise. Explore our RTO Management System and custom software services.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <Stats />
      <Products />
      <Services />
      <WhyUs />
      <Industries />
      <Testimonials />
      <TechStack />
      <CTA />
    </>
  );
}
