"use client";

import { motion } from "framer-motion";
import { Globe2, Layers, Radar as RadarIcon, Target } from "lucide-react";
import { GlassCard, SectionShell } from "./GlassCard";

const pillars = [
  {
    title: "Structured problem solving",
    body: "Frame ambiguous market questions into hypotheses, drivers, and testable workstreams — the same discipline used in strategy consulting engagements.",
    icon: Target,
  },
  {
    title: "Analytics at scale",
    body: "From SQL logic to Power BI and Tableau storytelling: pipelines that stay auditable when assumptions shift and stakeholders need clarity fast.",
    icon: Layers,
  },
  {
    title: "Global operating context",
    body: "Experience across India, Thailand, Vietnam, and the United States informs how I read trade flows, policy risk, and regional demand asymmetries.",
    icon: Globe2,
  },
  {
    title: "Executive communication",
    body: "Dashboards and narratives designed for decision-makers: crisp insight lines, transparent methodology, and explicit linkage to business impact.",
    icon: RadarIcon,
  },
];

export function About() {
  return (
    <SectionShell
      id="insights"
      eyebrow="Profile"
      title="About — analytical operator with a consulting mindset"
      subtitle="MS in Information Systems at the Kelley School of Business. My work sits at the intersection of analytics, technology, business strategy, and operational improvement — oriented toward energy-adjacent and intelligence-heavy problems."
    >
      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard strong className="lg:col-span-2 p-8 md:p-10">
          <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
            I approach markets like a product: define the decision, instrument the data, stress-test
            scenarios, and ship insight that holds under scrutiny. Whether mapping workflows,
            building forecast views, or translating cyber risk into business language, the through-line
            is the same —{" "}
            <span className="text-white">
              disciplined analysis that earns a seat at the strategy table.
            </span>
          </p>
          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            Fictional dashboard modules on this microsite illustrate how I think about density,
            hierarchy, and motion in intelligence interfaces — not as decoration, but as cognitive
            scaffolding for time-constrained readers.
          </p>
        </GlassCard>

        <GlassCard className="p-8">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-argus-sky">Credential</p>
          <p className="mt-4 text-2xl font-semibold text-white">Kelley MSIS</p>
          <p className="mt-2 text-sm text-slate-400">
            Coursework and projects emphasize data systems, analytics architecture, and translating
            technical depth into stakeholder-ready outcomes.
          </p>
          <div className="mt-8 space-y-3 border-t border-white/10 pt-6 text-sm text-slate-400">
            <p>
              <span className="text-slate-200">Regions:</span> India · Thailand · Vietnam · US
            </p>
            <p>
              <span className="text-slate-200">Themes:</span> market intelligence, forecasting,
              digital transformation, risk-informed operations
            </p>
          </div>
        </GlassCard>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {pillars.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.45 }}
          >
            <GlassCard className="h-full p-6">
              <p.icon className="h-5 w-5 text-argus-sky" />
              <h3 className="mt-4 text-sm font-semibold text-white">{p.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-500">{p.body}</p>
            </GlassCard>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}
