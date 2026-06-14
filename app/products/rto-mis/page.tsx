import type { Metadata } from "next";
import { RtoHero } from "@/components/products/rto-mis/RtoHero";
import { RtoFeatures } from "@/components/products/rto-mis/RtoFeatures";
import { RtoModules } from "@/components/products/rto-mis/RtoModules";
import { RtoWorkflow } from "@/components/products/rto-mis/RtoWorkflow";
import { RtoBenefits } from "@/components/products/rto-mis/RtoBenefits";
import { RtoFAQ } from "@/components/products/rto-mis/RtoFAQ";
import { CTA } from "@/components/home/CTA";

export const metadata: Metadata = {
  title: "RTO Management System — Complete Digital RTO Platform",
  description:
    "The RTO Management System by iTechQu is a comprehensive, paperless digital platform for Regional Transport Offices — covering vehicle registration, driving licenses, tax collection, permits, and citizen self-service.",
  keywords: [
    "RTO management system",
    "transport department software",
    "vehicle registration system",
    "driving license software",
    "RTO digitization",
    "government transport software India",
  ],
};

export default function RtoPage() {
  return (
    <>
      <RtoHero />
      <RtoFeatures />
      <RtoModules />
      <RtoWorkflow />
      <RtoBenefits />
      <RtoFAQ />
      <CTA />
    </>
  );
}
