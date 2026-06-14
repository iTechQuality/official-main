import type { Metadata } from "next";
import { ContactPage } from "@/components/contact/ContactPage";

export const metadata: Metadata = {
  title: "Contact Us — Get a Free Consultation | iTechQu",
  description:
    "Get in touch with iTechQu for custom software development, ERP, GIS solutions, and government digital transformation. Book a free consultation today.",
};

export default function Contact() {
  return <ContactPage />;
}
