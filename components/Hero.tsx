"use client";

import { motion } from "framer-motion";
import { ArrowRight, BarChart3, LineChart, Sparkles } from "lucide-react";
import Link from "next/link";
import { HeroBackground } from "./HeroBackground";

const ctas = [
  { href: "#insights", label: "View Insights", icon: Sparkles },
  { href: "#dashboard", label: "Explore Analytics", icon: BarChart3 },
  { href: "#lab", label: "See Forecast Models", icon: LineChart },
];

export function Hero() {
  return (
    <section className="relative min-h-[100svh] overflow-hidden pt-16">
      <HeroBackground />

      <div className="relative mx-auto flex min-h-[calc(100svh-4rem)] max-w-7xl flex-col justify-center px-4 pb-20 pt-10 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-[11px] uppercase tracking-[0.2em] text-argus-ice/90 backdrop-blur-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-emerald-400" />
            Energy · Commodities · Intelligence
          </div>

          <h1 className="text-4xl font-semibold leading-[1.08] tracking-tight text-white sm:text-5xl md:text-6xl lg:text-7xl">
            Aspiring <span className="text-gradient">Consulting Analyst</span>
            <br className="hidden sm:block" /> in Energy &amp; Market Intelligence
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-400 md:text-xl">
            I translate volatile commodity markets into structured insight: forecasting pipelines,
            scenario design, and executive narratives that connect data to commercial decisions.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            {ctas.map(({ href, label, icon: Icon }) => (
              <motion.div key={href} whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }}>
                <Link
                  href={href}
                  className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.06] px-5 py-3 text-sm font-medium text-white shadow-panel backdrop-blur-md transition hover:border-argus-sky/50 hover:bg-white/[0.1]"
                >
                  <Icon className="h-4 w-4 text-argus-sky" />
                  {label}
                  <ArrowRight className="h-4 w-4 opacity-60 transition group-hover:translate-x-0.5 group-hover:opacity-100" />
                </Link>
              </motion.div>
            ))}
          </div>

          <motion.dl
            className="mt-14 grid max-w-3xl grid-cols-2 gap-6 border-t border-white/10 pt-10 sm:grid-cols-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            {[
              { k: "Focus", v: "Crude & products" },
              { k: "Toolkit", v: "SQL · BI · Models" },
              { k: "Lens", v: "Consulting rigor" },
              { k: "Output", v: "Board-ready decks" },
            ].map((row) => (
              <div key={row.k}>
                <dt className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
                  {row.k}
                </dt>
                <dd className="mt-1 text-sm font-medium text-slate-200">{row.v}</dd>
              </div>
            ))}
          </motion.dl>
        </motion.div>
      </div>
    </section>
  );
}
