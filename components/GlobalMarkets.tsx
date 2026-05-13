"use client";

import { motion } from "framer-motion";
import { ArrowRight, MapPin, Radio, Ship } from "lucide-react";
import { liveMarketCards } from "@/lib/chartData";
import { GlassCard, SectionShell } from "./GlassCard";

const routes = [
  { id: "r1", d: "M 120 200 Q 380 120 640 180 T 980 160", delay: 0 },
  { id: "r2", d: "M 200 320 Q 460 260 720 220 T 1020 240", delay: 0.4 },
  { id: "r3", d: "M 860 140 Q 700 260 520 320 T 240 300", delay: 0.8 },
];

export function GlobalMarkets() {
  return (
    <SectionShell
      id="markets"
      eyebrow="Global markets"
      title="Trade routes, supply chains, and logistics intelligence"
      subtitle="A stylized map layer with animated flows and latency-aware market cards — the visual language of modern market terminals, adapted for storytelling."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard strong className="relative overflow-hidden p-0 lg:col-span-2">
          <div className="absolute inset-0 bg-gradient-to-br from-argus-sky/10 via-transparent to-argus-blue/10" />
          <div className="relative flex items-center justify-between border-b border-white/10 px-6 py-4">
            <div className="flex items-center gap-2 text-xs text-slate-400">
              <MapPin className="h-4 w-4 text-argus-sky" />
              <span className="font-mono uppercase tracking-widest">Atlantic–Asia crude &amp; product lanes</span>
            </div>
            <div className="flex items-center gap-2 rounded-full border border-emerald-500/30 bg-emerald-500/10 px-2 py-1 text-[10px] font-medium text-emerald-300">
              <Radio className="h-3 w-3" />
              LIVE STYLING
            </div>
          </div>

          <div className="relative aspect-[16/9] w-full">
            <svg viewBox="0 0 1100 420" className="h-full w-full text-white/10">
              <defs>
                <linearGradient id="routeGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#1e6fd9" stopOpacity="0" />
                  <stop offset="50%" stopColor="#93c5fd" stopOpacity="1" />
                  <stop offset="100%" stopColor="#1e6fd9" stopOpacity="0" />
                </linearGradient>
                <filter id="glow">
                  <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                  <feMerge>
                    <feMergeNode in="coloredBlur" />
                    <feMergeNode in="SourceGraphic" />
                  </feMerge>
                </filter>
              </defs>

              {/* Simplified continents */}
              <path
                fill="rgba(148,163,184,0.12)"
                stroke="rgba(148,163,184,0.25)"
                strokeWidth="1"
                d="M 80 120 L 220 90 L 300 130 L 280 220 L 140 240 Z"
              />
              <path
                fill="rgba(148,163,184,0.1)"
                stroke="rgba(148,163,184,0.22)"
                strokeWidth="1"
                d="M 420 80 L 620 70 L 700 140 L 640 240 L 460 220 Z"
              />
              <path
                fill="rgba(148,163,184,0.1)"
                stroke="rgba(148,163,184,0.22)"
                strokeWidth="1"
                d="M 760 100 L 980 90 L 1040 200 L 900 260 L 780 220 Z"
              />

              {routes.map((r) => (
                <motion.path
                  key={r.id}
                  d={r.d}
                  fill="none"
                  stroke="url(#routeGrad)"
                  strokeWidth="2"
                  filter="url(#glow)"
                  initial={{ pathLength: 0, opacity: 0 }}
                  animate={{ pathLength: 1, opacity: 1 }}
                  transition={{ duration: 2.2, delay: r.delay, repeat: Infinity, repeatDelay: 3 }}
                />
              ))}

              {/* Hubs */}
              {[
                { cx: 180, cy: 170, label: "USGC" },
                { cx: 540, cy: 150, label: "NWE" },
                { cx: 900, cy: 180, label: "Asia" },
              ].map((h) => (
                <g key={h.label}>
                  <circle cx={h.cx} cy={h.cy} r="6" fill="#38bdf8" opacity="0.9" />
                  <circle cx={h.cx} cy={h.cy} r="16" fill="none" stroke="#38bdf8" opacity="0.25" strokeWidth="1" />
                  <text
                    x={h.cx + 12}
                    y={h.cy + 4}
                    fill="rgba(226,232,240,0.85)"
                    fontSize="12"
                    fontFamily="var(--font-geist-mono)"
                  >
                    {h.label}
                  </text>
                </g>
              ))}
            </svg>

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-argus-navy to-transparent" />
          </div>

          <div className="relative flex items-center gap-2 border-t border-white/10 px-6 py-3 text-xs text-slate-500">
            <Ship className="h-4 w-4 text-argus-sky" />
            Illustrative routes: VLCC crude, clean product arb, and naphtha feedstock backhaul.
          </div>
        </GlassCard>

        <div className="flex flex-col gap-3">
          {liveMarketCards.map((c, i) => (
            <motion.div
              key={c.symbol}
              initial={{ opacity: 0, x: 16 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08, duration: 0.4 }}
            >
              <GlassCard className="p-4">
                <div className="flex items-center justify-between">
                  <p className="font-mono text-xs uppercase tracking-widest text-slate-500">{c.symbol}</p>
                  <span className="rounded-full border border-white/10 bg-white/5 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                    {c.latency}
                  </span>
                </div>
                <div className="mt-3 flex items-end justify-between">
                  <p className="text-2xl font-semibold tracking-tight text-white">{c.price}</p>
                  <p
                    className={`text-xs font-medium ${
                      c.chg.startsWith("-") ? "text-rose-400" : "text-emerald-400"
                    }`}
                  >
                    {c.chg}
                  </p>
                </div>
                <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-argus-sky to-argus-blue"
                    initial={{ width: "20%" }}
                    animate={{ width: ["25%", "78%", "40%", "65%"] }}
                    transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut" }}
                  />
                </div>
              </GlassCard>
            </motion.div>
          ))}

          <GlassCard className="p-5">
            <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">Logistics layer</p>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              Freight, port congestion, and intermodal constraints can dominate short-term arb windows. I treat
              logistics as a first-class signal, not an afterthought to flat price.
            </p>
            <div className="mt-4 inline-flex items-center gap-2 text-xs font-medium text-argus-ice">
              View lane deck
              <ArrowRight className="h-3.5 w-3.5" />
            </div>
          </GlassCard>
        </div>
      </div>
    </SectionShell>
  );
}
