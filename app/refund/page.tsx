import type { Metadata } from "next";
import { SITE } from "@/constants/site";

export const metadata: Metadata = {
  title: "Refund & Cancellation Policy | iTechQu",
  description: "iTechQu refund and cancellation policy for software development projects and SaaS products.",
};

const SECTIONS = [
  {
    title: "Nature of Our Services",
    content: "iTechQu provides custom software development, enterprise product deployments, and technology consulting services. Due to the nature of software services — which involve significant upfront investment in planning, design, architecture, and development — our refund policy reflects the work delivered at each stage of engagement.",
  },
  {
    title: "Project-Based Engagements",
    content: "For custom software development projects, payments are structured in milestones tied to deliverables. Payments made for completed milestones are non-refundable, as the work and intellectual effort for that milestone has been delivered. If a project is cancelled mid-milestone, a pro-rata refund may be considered based on the percentage of work completed, at iTechQu's discretion.",
  },
  {
    title: "Advance Payments & Retainers",
    content: "Any advance or retainer payment is applied toward the first milestone or initial phase of work. If the project does not commence within 30 days of the advance payment due to circumstances on our part, the advance will be fully refunded. If work has commenced, the advance is non-refundable for work already completed.",
  },
  {
    title: "SaaS & Annual Subscriptions",
    content: "For annual subscription plans of our software products (such as Jain RTO), a full refund is available within 7 days of purchase if the product has not been deployed or configured. After 7 days, or after deployment has begun, refunds are not available. Monthly subscription payments are non-refundable once the billing cycle has started.",
  },
  {
    title: "Cancellation by Client",
    content: "Clients may cancel a project engagement with 15 days written notice to info@itechqu.com. Work completed and billed up to the cancellation date remains payable. Any work in progress at the time of cancellation will be delivered in its current state and billed proportionally. Deposits and milestone payments already processed are non-refundable.",
  },
  {
    title: "Cancellation by iTechQu",
    content: "iTechQu reserves the right to cancel a project engagement if the client fails to provide required inputs, approvals, or payments within agreed timelines. In such cases, work completed will be billed and any excess advance payment beyond the work completed will be refunded within 15 business days.",
  },
  {
    title: "Defects & Warranty",
    content: "All delivered software comes with a 30-day post-delivery warranty covering bugs and defects in the agreed scope. Defects reported within this window will be fixed at no additional cost. This warranty does not cover new feature requests, changes to requirements, or issues arising from third-party integrations outside our control.",
  },
  {
    title: "Dispute Resolution",
    content: `If you believe a refund is warranted, please contact us at ${SITE.email} or ${SITE.phone} with your project details and reason for the request. We aim to resolve all disputes within 10 business days. All disputes are subject to the jurisdiction of courts in Raipur, Chhattisgarh, India.`,
  },
];

export default function RefundPage() {
  return (
    <div className="min-h-screen pt-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="mb-10">
          <h1 className="text-3xl sm:text-4xl font-bold text-white mb-3" style={{ fontFamily: "var(--font-syne)" }}>
            Refund & Cancellation Policy
          </h1>
          <p className="text-slate-400 text-sm">Last updated: June 2025 · {SITE.fullName} (iTechQu)</p>
        </div>
        <p className="text-slate-400 leading-relaxed mb-10">
          We strive for 100% client satisfaction. This policy outlines the terms for refunds and cancellations
          for our software development projects and product subscriptions. Please read it carefully before
          engaging our services.
        </p>

        <div className="space-y-8">
          {SECTIONS.map((section, i) => (
            <div key={section.title} className="glass rounded-2xl p-6 border border-white/[0.07]">
              <div className="flex items-start gap-4">
                <span className="w-7 h-7 rounded-lg bg-violet-500/15 border border-violet-500/20 flex items-center justify-center text-xs font-bold text-violet-400 shrink-0 mt-0.5">
                  {i + 1}
                </span>
                <div>
                  <h2 className="text-base font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>
                    {section.title}
                  </h2>
                  <p className="text-sm text-slate-400 leading-relaxed">{section.content}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 glass rounded-2xl p-6 border border-violet-500/20 bg-violet-500/5">
          <h2 className="text-base font-bold text-white mb-2">Have a Question?</h2>
          <p className="text-sm text-slate-400 mb-4">
            For any refund or cancellation requests, reach out to us directly:
          </p>
          <div className="space-y-1 text-sm">
            <p className="text-slate-300">📧 <a href={`mailto:${SITE.email}`} className="text-violet-400 hover:underline">{SITE.email}</a></p>
            <p className="text-slate-300">📞 <a href={`tel:${SITE.phone}`} className="text-violet-400 hover:underline">{SITE.phone}</a></p>
            <p className="text-slate-400">{SITE.address.city}, {SITE.address.state} — {SITE.address.pin}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
