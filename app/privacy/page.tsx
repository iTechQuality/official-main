import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Privacy Policy | iTechQu",
  description: "iTechQu's privacy policy — how we collect, use, and protect your personal information.",
};

const SECTIONS = [
  { title: "Information We Collect", content: "We collect information you provide directly to us when you fill out contact forms, request demos, or correspond with our team. This may include your name, email address, phone number, organization name, and project requirements. We also collect limited technical data (such as IP address and browser type) for security and analytics purposes." },
  { title: "How We Use Your Information", content: "We use the information we collect to respond to your inquiries, provide project consultations and quotes, send project updates and communications, improve our services and website, and comply with legal obligations. We do not use your personal information for automated decision-making or profiling." },
  { title: "Information Sharing", content: "We do not sell, trade, or otherwise transfer your personal information to third parties for marketing purposes. We may share information with trusted third-party service providers who assist us in operating our website and conducting our business, subject to confidentiality agreements. We may disclose information if required by law or to protect our legal rights." },
  { title: "Data Security", content: "We implement industry-standard security measures to protect your personal information, including SSL/TLS encryption, secure server infrastructure, access controls, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security." },
  { title: "Data Retention", content: "We retain your personal information for as long as necessary to fulfill the purposes outlined in this policy, unless a longer retention period is required by law. Project-related data is retained for the duration of our engagement and for a reasonable period thereafter for legal and business purposes." },
  { title: "Your Rights", content: "You have the right to access, correct, or delete your personal information. You may opt out of marketing communications at any time. To exercise these rights, please contact us at the details below. We will respond to your request within 30 days." },
  { title: "Cookies", content: "Our website uses essential cookies for functionality and analytics cookies to understand how visitors use our site. You can control cookie settings through your browser. Disabling cookies may affect some website features." },
  { title: "Contact Us", content: `If you have questions about this Privacy Policy or our data practices, please contact us at ${SITE.email} or ${SITE.phone}. Our registered office is at ${SITE.address.city}, ${SITE.address.state} — ${SITE.address.pin}.` },
];

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>Privacy Policy</h1>
          <p className="text-slate-400 text-sm">Last updated: June 2025 · {SITE.fullName} (iTechQu)</p>
        </div>
        <p className="text-slate-400 leading-relaxed mb-10">
          At iTechQu, your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services. Please read this policy carefully.
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
      </div>
    </div>
  );
}
