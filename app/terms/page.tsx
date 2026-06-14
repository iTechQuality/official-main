import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Terms & Conditions | iTechQu",
  description: "Terms and conditions governing the use of iTechQu's website and software development services.",
};

const SECTIONS = [
  { title: "Acceptance of Terms", content: "By accessing or using our website and services, you agree to be bound by these Terms and Conditions. If you do not agree with any part of these terms, please do not use our services. These terms apply to all visitors, clients, and others who access or use our services." },
  { title: "Services", content: "iTechQu provides custom software development, ERP systems, GIS solutions, mobile applications, web applications, AI solutions, cloud services, government digital transformation projects, and related IT consulting and support services. Specific service terms are governed by individual project agreements and contracts signed between iTechQu and the client." },
  { title: "Intellectual Property", content: "Upon full payment of all fees, clients receive full ownership of the custom software developed specifically for them, including source code. iTechQu retains ownership of our proprietary frameworks, tools, libraries, and methodologies used in development. Pre-existing iTechQu software products (such as the RTO Management System) are licensed, not sold, unless otherwise agreed in writing." },
  { title: "Confidentiality", content: "Both parties agree to maintain confidentiality of each other's proprietary information, business processes, and data shared during the engagement. We sign NDAs upon request and treat all client data with the highest level of confidentiality as standard practice." },
  { title: "Payment Terms", content: "Payment terms are specified in individual project agreements. Typically, payments are structured in milestones aligned to project deliverables. Late payments may attract interest as per the applicable agreement. iTechQu reserves the right to suspend services for accounts with overdue payments." },
  { title: "Limitation of Liability", content: "iTechQu's liability is limited to the amount paid by the client for the specific service that caused the issue. We are not liable for indirect, incidental, or consequential damages. We are not responsible for data loss caused by client actions, third-party services, or events beyond our control." },
  { title: "Governing Law", content: `These terms are governed by the laws of India and the state of Rajasthan. Any disputes shall be subject to the exclusive jurisdiction of the courts in Jaipur, Rajasthan. We encourage resolution of disputes through mutual discussion before legal proceedings.` },
  { title: "Changes to Terms", content: "We reserve the right to update these terms at any time. We will notify users of material changes by updating the date at the top of this page. Continued use of our services after changes constitutes acceptance of the revised terms." },
];

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>Terms & Conditions</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2025 · {SITE.fullName} (iTechQu)</p>
        </div>
        <p className="text-slate-400 leading-relaxed mb-10">
          These Terms and Conditions govern your use of the iTechQu website and our software development services. Please read them carefully before engaging our services.
        </p>
        <div className="space-y-8">
          {SECTIONS.map((s, i) => (
            <div key={s.title}>
              <h2 className="text-base font-bold text-white mb-3">
                <span className="text-violet-400 mr-2">{String(i + 1).padStart(2, "0")}.</span>
                {s.title}
              </h2>
              <p className="text-sm text-slate-400 leading-relaxed">{s.content}</p>
            </div>
          ))}
        </div>
        <div className="mt-12 p-5 glass rounded-2xl border border-white/[0.07]">
          <p className="text-sm text-slate-400">
            For questions about these terms, contact us at{" "}
            <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:text-violet-300">{SITE.email}</a>{" "}
            or{" "}
            <a href={`tel:${SITE.phone}`} className="text-violet-400 hover:text-violet-300">{SITE.phone}</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
