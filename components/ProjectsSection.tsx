"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import { useState } from "react";
import { GlassCard, SectionShell } from "./GlassCard";

type CaseBlock = { title: string; body: string };

type Project = {
  id: string;
  client: string;
  role: string;
  headline: string;
  challenge: string;
  approach: string;
  insight: string;
  outcome: string;
  takeaway: string;
  tags: string[];
  blocks: CaseBlock[];
};

const projects: Project[] = [
  {
    id: "strayos",
    client: "Strayos",
    role: "Business Analyst Intern",
    headline: "Field-to-finance workflow optimization with analytics instrumentation",
    challenge:
      "Operations teams were losing cycle time between field capture, review gates, and downstream reporting — metrics existed in pockets, but not as a coherent control tower.",
    approach:
      "Mapped the end-to-end value stream with BPMN, prioritized bottlenecks by frequency × impact, and paired process redesign with Power BI dashboards that leadership could trust week-over-week.",
    insight:
      "The constraint was not headcount; it was decision latency at two handoff nodes where unstructured inputs met rigid downstream templates.",
    outcome:
      "Reduced rework loops on high-volume workflows and improved visibility into backlog drivers — enabling managers to intervene earlier with a single source of truth.",
    takeaway:
      "When analytics is embedded at the point of operational control, improvement becomes compounding rather than episodic.",
    tags: ["Workflow optimization", "Power BI", "BPMN", "Operational analytics"],
    blocks: [
      { title: "Diagnostic", body: "Time-in-stage distributions and exception rates by SKU / region." },
      { title: "Intervention", body: "Standardized intake templates + exception routing rules." },
      { title: "Measurement", body: "Weekly KPI pack with variance commentary tied to owners." },
    ],
  },
  {
    id: "ey",
    client: "EY",
    role: "Consulting / Cyber Risk Capstone",
    headline: "Translating cyber exposure into business language for executive decisions",
    challenge:
      "Technical risk registers rarely connect to financial materiality or strategic trade-offs — stakeholders needed a narrative that could survive board-level scrutiny.",
    approach:
      "Structured the problem as scenarios (likelihood × impact), aligned controls to business processes, and built a storyline that linked incidents to revenue, reputation, and operational continuity.",
    insight:
      "Executives engage when risk is expressed as decisions under uncertainty — not as control checklists divorced from incentives.",
    outcome:
      "A defensible prioritization framework for investment and monitoring, with clear escalation triggers and cross-functional accountability.",
    takeaway:
      "Consulting-grade cyber work is still economics: scarce resources, asymmetric information, and incentives that must be made explicit.",
    tags: ["Risk framing", "Executive narrative", "Scenario design", "Cross-functional alignment"],
    blocks: [
      { title: "Threat model", body: "Mapped assets to critical business capabilities and revenue levers." },
      { title: "Materiality", body: "Ranked scenarios using transparent scoring and sensitivity tests." },
      { title: "Roadmap", body: "Phased remediation with measurable risk reduction milestones." },
    ],
  },
];

export function ProjectsSection() {
  const [active, setActive] = useState(projects[0].id);
  const current = projects.find((p) => p.id === active)!;

  return (
    <SectionShell
      id="projects"
      eyebrow="Selected engagements"
      title="Consulting projects — structured like case studies"
      subtitle="Each engagement is presented with the same spine used in professional services: problem definition, analytical approach, insight generation, measurable outcome, and executive takeaway."
    >
      <div className="grid gap-6 lg:grid-cols-12">
        <div className="flex flex-col gap-2 lg:col-span-4">
          {projects.map((p) => (
            <button
              key={p.id}
              type="button"
              onClick={() => setActive(p.id)}
              className={`rounded-2xl border px-4 py-4 text-left transition ${
                active === p.id
                  ? "border-argus-sky/50 bg-white/[0.07] shadow-panel"
                  : "border-white/10 bg-white/[0.02] hover:border-white/20"
              }`}
            >
              <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">{p.client}</p>
              <p className="mt-1 text-sm font-semibold text-white">{p.role}</p>
              <p className="mt-2 text-xs leading-relaxed text-slate-500">{p.headline}</p>
            </button>
          ))}
        </div>

        <GlassCard strong className="lg:col-span-8 p-6 md:p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={current.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.35 }}
            >
              <div className="flex flex-wrap gap-2">
                {current.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-[11px] text-slate-300"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <h3 className="mt-6 text-xl font-semibold text-white md:text-2xl">{current.headline}</h3>

              <dl className="mt-8 space-y-6">
                {[
                  ["Challenge", current.challenge],
                  ["Analytical approach", current.approach],
                  ["Insight", current.insight],
                  ["Business outcome", current.outcome],
                  ["Executive takeaway", current.takeaway],
                ].map(([k, v]) => (
                  <div key={k as string}>
                    <dt className="font-mono text-[10px] uppercase tracking-[0.22em] text-slate-500">
                      {k}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-slate-300 md:text-base">{v}</dd>
                  </div>
                ))}
              </dl>

              <div className="mt-10 grid gap-3 sm:grid-cols-3">
                {current.blocks.map((b) => (
                  <div
                    key={b.title}
                    className="rounded-xl border border-white/10 bg-argus-deep/40 p-4"
                  >
                    <p className="flex items-center gap-1 text-xs font-semibold text-white">
                      <ChevronRight className="h-3.5 w-3.5 text-argus-sky" />
                      {b.title}
                    </p>
                    <p className="mt-2 text-xs leading-relaxed text-slate-500">{b.body}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
