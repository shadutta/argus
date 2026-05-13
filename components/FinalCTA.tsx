"use client";

import { motion } from "framer-motion";
import { Mail, Sparkles } from "lucide-react";
import Link from "next/link";

export function FinalCTA() {
  return (
    <section id="contact" className="relative py-24 md:py-32">
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-argus-sky/10 via-transparent to-transparent" />
      <div className="relative mx-auto max-w-5xl px-4 text-center sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.55 }}
          className="glass-panel-strong mx-auto max-w-3xl px-8 py-14 md:px-14 md:py-16"
        >
          <div className="mx-auto mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-argus-sky to-argus-blue shadow-glass">
            <Sparkles className="h-6 w-6 text-white" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-argus-sky">Recruiter narrative</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-white md:text-4xl">
            Turning complex market data into strategic business insight.
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-slate-400 md:text-base">
            If you are hiring for Argus Media Consulting Services, I would welcome a conversation on how I can
            contribute to client engagements spanning analytics, forecasting, and market intelligence delivery.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <Link
              href="mailto:you@example.com"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-argus-sky to-argus-blue px-6 py-3 text-sm font-semibold text-white shadow-glass transition hover:brightness-110"
            >
              <Mail className="h-4 w-4" />
              Email for interview scheduling
            </Link>
            <Link
              href="#insights"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-argus-sky/40"
            >
              Return to profile
            </Link>
          </div>
          <p className="mt-8 font-mono text-[11px] text-slate-600">
            Replace mailto with your preferred contact · PDF resume link can be added beside CTA.
          </p>
        </motion.div>
      </div>

      <footer className="relative mx-auto mt-16 max-w-7xl border-t border-white/10 px-4 py-10 text-center text-xs text-slate-600 sm:px-6 lg:px-8">
        <p>Portfolio microsite · Next.js · Tailwind · Framer Motion · Recharts · Deploy-ready for Vercel</p>
      </footer>
    </section>
  );
}
