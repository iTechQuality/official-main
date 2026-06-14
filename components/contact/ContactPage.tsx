"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react";
import { staggerContainer, fadeUp, fadeLeft, fadeRight, viewport } from "@/lib/animations";
import { SITE } from "@/constants/site";

const SERVICES_LIST = [
  "Custom Software Development", "ERP Development", "GIS Solutions",
  "Mobile App Development", "Web Application", "AI / Automation",
  "Government Project", "AMC / Support", "Other",
];

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", phone: "", org: "", service: "", message: "" });

  const handle = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen pt-16">
      {/* Hero */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 grid-bg" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[200px] bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
        <div className="relative max-w-4xl mx-auto px-4 text-center">
          <motion.div variants={staggerContainer(0.1)} initial="hidden" animate="visible">
            <motion.div variants={fadeUp}>
              <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass border border-white/10 text-xs font-semibold tracking-widest uppercase text-violet-400 mb-6">
                Get in Touch
              </span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="text-4xl sm:text-5xl font-bold text-white mb-4" style={{ fontFamily: "var(--font-syne)" }}>
              Let&apos;s Build Something <span className="gradient-text">Great Together</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="text-slate-400 text-lg max-w-xl mx-auto">
              Tell us about your project and we&apos;ll get back within 24 hours with a free consultation.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Main Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-10">
            {/* Info column */}
            <motion.div
              variants={fadeLeft}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:col-span-2 space-y-5"
            >
              {[
                { icon: Phone, title: "Call Us", value: SITE.phone, href: `tel:${SITE.phone}`, color: "#7C3AED" },
                { icon: Mail, title: "Email Us", value: SITE.email, href: `mailto:${SITE.email}`, color: "#2563EB" },
                { icon: MessageCircle, title: "WhatsApp", value: "Chat with us", href: `https://wa.me/${SITE.whatsapp}`, color: "#25D366" },
                { icon: MapPin, title: "Visit Us", value: `${SITE.address.city}`, href: "#", color: "#06B6D4" },
              ].map((c) => (
                <a
                  key={c.title}
                  href={c.href}
                  target={c.href.startsWith("http") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-5 glass rounded-2xl border border-white/[0.06] hover:border-white/12 transition-all duration-300 group"
                >
                  <div className="w-11 h-11 rounded-xl flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{ background: `${c.color}15`, border: `1px solid ${c.color}25` }}>
                    <c.icon className="w-5 h-5" style={{ color: c.color }} />
                  </div>
                  <div>
                    <div className="text-xs text-slate-500 font-medium uppercase tracking-wider">{c.title}</div>
                    <div className="text-sm text-white font-medium mt-0.5">{c.value}</div>
                  </div>
                </a>
              ))}

              {/* Map placeholder */}
              <div className="glass rounded-2xl overflow-hidden border border-white/[0.06] aspect-video relative">
                <div className="absolute inset-0 bg-gradient-to-br from-violet-600/10 to-blue-600/10 flex items-center justify-center">
                  <div className="text-center">
                    <MapPin className="w-10 h-10 text-violet-400/40 mx-auto mb-2" />
                    <p className="text-xs text-slate-500">{SITE.address.city}, {SITE.address.state}</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              variants={fadeRight}
              initial="hidden"
              whileInView="visible"
              viewport={viewport}
              className="lg:col-span-3"
            >
              {submitted ? (
                <div className="glass rounded-3xl p-12 text-center h-full flex flex-col items-center justify-center">
                  <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ type: "spring", damping: 12 }}>
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-white mb-2" style={{ fontFamily: "var(--font-syne)" }}>Message Received!</h3>
                  <p className="text-slate-400">We&apos;ll get back to you within 24 hours with a detailed response and next steps.</p>
                </div>
              ) : (
                <form onSubmit={submit} className="glass rounded-3xl p-8 space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    {[
                      { name: "name", label: "Full Name", placeholder: "Rajesh Sharma", type: "text", required: true },
                      { name: "email", label: "Work Email", placeholder: "rajesh@example.com", type: "email", required: true },
                      { name: "phone", label: "Phone Number", placeholder: "+91 98765 43210", type: "tel", required: false },
                      { name: "org", label: "Organisation", placeholder: "Rajasthan RTO / ABC Company", type: "text", required: false },
                    ].map((field) => (
                      <div key={field.name}>
                        <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">{field.label}</label>
                        <input
                          type={field.type}
                          name={field.name}
                          value={(form as Record<string, string>)[field.name]}
                          onChange={handle}
                          placeholder={field.placeholder}
                          required={field.required}
                          className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all"
                        />
                      </div>
                    ))}
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Service Interested In</label>
                    <select
                      name="service"
                      value={form.service}
                      onChange={handle}
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-violet-500/50 transition-all"
                    >
                      <option value="" className="bg-[#0F1729]">Select a service...</option>
                      {SERVICES_LIST.map((s) => (
                        <option key={s} value={s} className="bg-[#0F1729]">{s}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">Tell Us About Your Project</label>
                    <textarea
                      name="message"
                      value={form.message}
                      onChange={handle}
                      required
                      rows={5}
                      placeholder="Describe your project, requirements, timeline, and any specific questions..."
                      className="w-full bg-white/[0.04] border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder:text-slate-600 focus:outline-none focus:border-violet-500/50 focus:bg-white/[0.06] transition-all resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-violet-600 to-blue-600 text-white font-semibold rounded-xl text-sm shadow-lg shadow-violet-500/25 hover:shadow-violet-500/40 hover:scale-[1.01] transition-all duration-300"
                  >
                    <Send className="w-4 h-4" />
                    Send Message — We Reply Within 24 Hours
                  </button>

                  <p className="text-xs text-slate-600 text-center">
                    Your information is secure and will never be shared with third parties.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
