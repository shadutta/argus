"use client";

import { useMemo, useState } from "react";
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
  Scatter,
  ScatterChart,
  Tooltip,
  XAxis,
  YAxis,
  ZAxis,
} from "recharts";
import { scenarioOutcomes } from "@/lib/chartData";
import { GlassCard, SectionShell } from "./GlassCard";
import { Brain, Cpu, Database, LineChart as LineChartIcon, Sigma } from "lucide-react";

const radarSkills = [
  { skill: "SQL", level: 92 },
  { skill: "Power BI", level: 90 },
  { skill: "Tableau", level: 84 },
  { skill: "Excel", level: 94 },
  { skill: "Forecasting", level: 88 },
  { skill: "Storytelling", level: 91 },
];

function SimulationChart({ shock }: { shock: number }) {
  const pts = useMemo(() => {
    return Array.from({ length: 14 }, (_, i) => {
      const t = i;
      const base = 80 + Math.sin(t / 2) * 4;
      const noise = (i % 3) * 0.6;
      const demandLift = shock * 0.35;
      return { t: `D${i + 1}`, baseline: base + noise, shocked: base + noise + demandLift };
    });
  }, [shock]);

  return (
    <div className="h-[220px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart data={pts}>
          <CartesianGrid strokeDasharray="3 3" vertical={false} />
          <XAxis dataKey="t" tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
          <YAxis domain={[70, 100]} tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="baseline" stroke="#64748b" strokeWidth={2} dot={false} name="Baseline" />
          <Line type="monotone" dataKey="shocked" stroke="#38bdf8" strokeWidth={2} dot={false} name="Shocked path" />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}

export function ForecastLab() {
  const [shock, setShock] = useState(18);
  const scenarioPoints = useMemo(
    () => scenarioOutcomes.map((s) => ({ ...s, z: s.npv })),
    [],
  );

  return (
    <SectionShell
      id="lab"
      eyebrow="Forecasting & analytics lab"
      title="Models, scenarios, and intelligence tooling — built for decisions"
      subtitle="Interactive views demonstrate how I think about sensitivity, capability coverage, and the bridge from quantitative output to commercial judgment."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard strong className="p-6 md:p-8">
          <div className="flex items-start justify-between gap-4">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">
                Commodity simulation
              </p>
              <h3 className="mt-1 text-lg font-semibold text-white">Demand shock overlay on forward curve</h3>
              <p className="mt-2 text-sm text-slate-500">
                Drag the control to stress-test a stylized demand impulse against a smooth baseline process.
              </p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-3 py-2 text-right font-mono text-xs text-argus-ice">
              <p className="text-[10px] uppercase tracking-widest text-slate-500">Shock</p>
              <p className="text-lg font-semibold text-white">{shock}%</p>
            </div>
          </div>

          <div className="mt-8">
            <input
              type="range"
              min={0}
              max={40}
              value={shock}
              onChange={(e) => setShock(Number(e.target.value))}
              className="w-full accent-argus-sky"
            />
            <div className="mt-2 flex justify-between text-[11px] text-slate-500">
              <span>Baseline regime</span>
              <span>High stress</span>
            </div>
          </div>

          <div className="mt-6">
            <SimulationChart shock={shock} />
          </div>
        </GlassCard>

        <GlassCard className="p-6 md:p-8">
          <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">Scenario analysis</p>
          <h3 className="mt-1 text-lg font-semibold text-white">NPV vs. risk envelope (illustrative)</h3>
          <p className="mt-2 text-sm text-slate-500">
            Bubble size encodes capital intensity; position encodes risk/return posture for strategy dialogue.
          </p>
          <div className="mt-6 h-[260px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ScatterChart margin={{ top: 12, right: 12, bottom: 12, left: 0 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  type="number"
                  dataKey="risk"
                  name="Risk index"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  label={{ value: "Risk index", position: "bottom", fill: "#64748b", fontSize: 10 }}
                />
                <YAxis
                  type="number"
                  dataKey="npv"
                  name="NPV"
                  tick={{ fill: "#64748b", fontSize: 11 }}
                  label={{ value: "NPV (index)", angle: -90, position: "insideLeft", fill: "#64748b", fontSize: 10 }}
                />
                <ZAxis type="number" dataKey="npv" range={[220, 520]} />
                <Tooltip cursor={{ strokeDasharray: "3 3" }} />
                <Scatter name="Scenarios" data={scenarioPoints} fill="#38bdf8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-12">
        <GlassCard className="p-6 md:p-8 lg:col-span-5">
          <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">Capability radar</p>
          <h3 className="mt-1 text-lg font-semibold text-white">Analytics stack coverage</h3>
          <div className="mt-4 h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={radarSkills}>
                <PolarGrid stroke="rgba(148,163,184,0.25)" />
                <PolarAngleAxis dataKey="skill" tick={{ fill: "#94a3b8", fontSize: 11 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={{ fill: "#64748b", fontSize: 10 }} />
                <Radar
                  name="Proficiency (self-assessment)"
                  dataKey="level"
                  stroke="#38bdf8"
                  fill="rgba(56,189,248,0.35)"
                  strokeWidth={2}
                />
                <Tooltip />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard strong className="p-6 md:p-8 lg:col-span-7">
          <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">Predictive analytics</p>
          <h3 className="mt-1 text-lg font-semibold text-white">Market intelligence toolchain</h3>
          <p className="mt-3 text-sm leading-relaxed text-slate-400">
            Forecasting is not a single model — it is a system: data contracts, feature hygiene, validation against
            realizeds, and a narrative layer that explains what would falsify your thesis. I build toward that
            standard whether the surface is Excel, SQL, or BI.
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {[
              { icon: Database, t: "Data foundations", d: "Entity models, joins, and QA checks that survive audits." },
              { icon: Sigma, t: "Scenario math", d: "Explicit assumptions, sensitivity tables, and breakevens." },
              { icon: Cpu, t: "Operationalized models", d: "Versioned logic suitable for refresh cycles." },
              { icon: Brain, t: "Judgment layer", d: "Translate model output into decision options and trade-offs." },
            ].map((x) => (
              <div key={x.t} className="flex gap-3 rounded-xl border border-white/10 bg-white/[0.03] p-4">
                <x.icon className="mt-0.5 h-5 w-5 shrink-0 text-argus-sky" />
                <div>
                  <p className="text-sm font-semibold text-white">{x.t}</p>
                  <p className="mt-1 text-xs leading-relaxed text-slate-500">{x.d}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6 flex flex-wrap items-center gap-3 text-xs text-slate-500">
            <LineChartIcon className="h-4 w-4 text-argus-sky" />
            <span>Stack reference: SQL · Power BI · Tableau · Excel — designed for cross-functional delivery.</span>
          </div>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
