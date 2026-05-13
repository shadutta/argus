"use client";

import { motion } from "framer-motion";
import { useMemo, useState } from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  Cell,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import {
  crudeForecast,
  fertilizerDemand,
  marginAnalysis,
  petchemTrend,
  refineryUtil,
  supplyDemand,
  volatilitySeries,
} from "@/lib/chartData";
import { GlassCard, SectionShell } from "./GlassCard";
import { Activity, Gauge, GitBranch, Waves } from "lucide-react";

const ACCENT = "#3b82f6";
const MUTED = "#64748b";

function Kpi({
  label,
  value,
  delta,
  sub,
}: {
  label: string;
  value: string;
  delta: string;
  sub: string;
}) {
  return (
    <div className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-md">
      <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">{label}</p>
      <div className="mt-2 flex items-baseline gap-2">
        <span className="text-2xl font-semibold tracking-tight text-white">{value}</span>
        <span className="text-xs font-medium text-emerald-400">{delta}</span>
      </div>
      <p className="mt-1 text-xs text-slate-500">{sub}</p>
    </div>
  );
}

export function DashboardSection() {
  const [utilWindow, setUtilWindow] = useState<"8w" | "4w">("8w");
  const utilData = useMemo(
    () => (utilWindow === "4w" ? refineryUtil.slice(-4) : refineryUtil),
    [utilWindow],
  );

  const crudeData = useMemo(
    () =>
      crudeForecast.map((d) => ({
        ...d,
        bandSpread: (d.bandHigh ?? 0) - (d.bandLow ?? 0),
      })),
    [],
  );

  return (
    <SectionShell
      id="dashboard"
      eyebrow="Energy Intelligence"
      title="Executive dashboard — crude, balances, utilization, and margins"
      subtitle="Illustrative modules styled like a consulting intelligence workspace: high signal density, transparent axes, and drill-friendly KPIs. Data is fictional but structurally realistic."
    >
      <div className="mb-6 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Kpi label="Brent forward (M+1)" value="$82.64" delta="+0.42% DoD" sub="Confidence band ±$3.1" />
        <Kpi label="Global implied balance" value="+0.6 MMbbl/d" delta="Tightening" sub="vs. 4-wk avg" />
        <Kpi label="Atlantic refinery util." value="91%" delta="+120 bps WoW" sub="Maintenance season" />
        <Kpi label="Crack implied margin" value="$18.4/bbl" delta="Gasoline-led" sub="PADD III basket" />
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        <GlassCard strong className="lg:col-span-2 p-4 md:p-6">
          <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">
                Crude price forecast
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white">Actuals vs. model — forward path</h3>
            </div>
            <div className="flex items-center gap-2 text-xs text-slate-500">
              <Activity className="h-4 w-4 text-argus-sky" />
              Monte Carlo band (p10–p90)
            </div>
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={crudeData}>
                <defs>
                  <linearGradient id="band" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor={ACCENT} stopOpacity={0.35} />
                    <stop offset="100%" stopColor={ACCENT} stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis
                  tick={{ fill: MUTED, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                  domain={[70, 95]}
                  tickFormatter={(v) => `$${v}`}
                />
                <Tooltip
                  formatter={(value: number, name: string) => [`$${value?.toFixed?.(2) ?? value}`, name]}
                  labelFormatter={(l) => `Month: ${l}`}
                />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="bandLow"
                  stackId="band"
                  stroke="none"
                  fill="rgba(0,0,0,0)"
                  name="p10–p90 (base)"
                  legendType="none"
                />
                <Area
                  type="monotone"
                  dataKey="bandSpread"
                  stackId="band"
                  stroke="none"
                  fill="url(#band)"
                  name="Confidence band"
                />
                <Line type="monotone" dataKey="forecast" stroke="#93c5fd" strokeWidth={2} dot={false} name="Forecast" />
                <Line
                  type="monotone"
                  dataKey="actual"
                  stroke="#f8fafc"
                  strokeWidth={2}
                  dot
                  connectNulls
                  name="Actual"
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">
                Supply vs. demand
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white">Regional balances (Mbbl/d)</h3>
            </div>
            <GitBranch className="h-4 w-4 text-slate-600" />
          </div>
          <div className="h-[280px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={supplyDemand} layout="vertical" margin={{ left: 8 }}>
                <CartesianGrid strokeDasharray="3 3" horizontal={false} />
                <XAxis type="number" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis
                  dataKey="region"
                  type="category"
                  width={52}
                  tick={{ fill: MUTED, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="supply" fill="#1e6fd9" radius={[0, 4, 4, 0]} name="Supply" />
                <Bar dataKey="demand" fill="#94a3b8" radius={[0, 4, 4, 0]} name="Demand" />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-3">
        <GlassCard className="p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">
                Refinery utilization
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white">Operating rate trajectory</h3>
            </div>
            <div className="flex gap-1 rounded-lg border border-white/10 p-0.5">
              {(["8w", "4w"] as const).map((w) => (
                <button
                  key={w}
                  type="button"
                  onClick={() => setUtilWindow(w)}
                  className={`rounded-md px-2 py-1 text-[11px] font-medium transition ${
                    utilWindow === w ? "bg-white/10 text-white" : "text-slate-500 hover:text-slate-300"
                  }`}
                >
                  {w.toUpperCase()}
                </button>
              ))}
            </div>
          </div>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={utilData}>
                <defs>
                  <linearGradient id="utilFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#38bdf8" stopOpacity={0.5} />
                    <stop offset="100%" stopColor="#38bdf8" stopOpacity={0} />
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="week" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis
                  domain={[80, 100]}
                  tickFormatter={(v) => `${v}%`}
                  tick={{ fill: MUTED, fontSize: 11 }}
                  axisLine={false}
                  tickLine={false}
                />
                <Tooltip formatter={(v: number) => [`${v}%`, "Utilization"]} />
                <Area
                  type="monotone"
                  dataKey="rate"
                  stroke="#38bdf8"
                  fill="url(#utilFill)"
                  strokeWidth={2}
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
          <p className="mt-3 flex items-center gap-2 text-xs text-slate-500">
            <Gauge className="h-3.5 w-3.5" /> Turnaround schedule embedded as maintenance drag in model.
          </p>
        </GlassCard>

        <GlassCard className="p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">
                Petrochemical trends
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white">Feedstock-linked indices</h3>
            </div>
            <Waves className="h-4 w-4 text-slate-600" />
          </div>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={petchemTrend}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="q" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="ethylene" stroke="#60a5fa" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="propylene" stroke="#a78bfa" strokeWidth={2} dot={false} />
                <Line type="monotone" dataKey="benzene" stroke="#f472b6" strokeWidth={2} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-4 md:p-6">
          <div className="mb-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">
              Fertilizer demand
            </p>
            <h3 className="mt-1 text-sm font-semibold text-white">Seasonality-adjusted lift (Mt)</h3>
          </div>
          <div className="h-[220px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={fertilizerDemand}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="month" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Bar dataKey="urea" stackId="a" fill="#38bdf8" radius={[4, 4, 0, 0]} />
                <Bar dataKey="potash" stackId="a" fill="#6366f1" />
                <Bar dataKey="phosphate" stackId="a" fill="#22c55e" radius={[0, 0, 4, 4]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>
      </div>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <GlassCard className="p-4 md:p-6">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">
                Commodity volatility
              </p>
              <h3 className="mt-1 text-sm font-semibold text-white">Risk-on / risk-off co-movement</h3>
            </div>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={volatilitySeries}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="day" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <Tooltip />
                <Legend />
                <Area
                  type="monotone"
                  dataKey="brentVol"
                  stroke="#38bdf8"
                  fill="rgba(56,189,248,0.15)"
                  name="Brent vol proxy"
                />
                <Area
                  type="monotone"
                  dataKey="vixStyle"
                  stroke="#94a3b8"
                  fill="rgba(148,163,184,0.12)"
                  name="Macro vol index"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </GlassCard>

        <GlassCard className="p-4 md:p-6">
          <div className="mb-4">
            <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">Margin analysis</p>
            <h3 className="mt-1 text-sm font-semibold text-white">Implied cracks vs. rolling VaR</h3>
          </div>
          <div className="h-[240px] w-full">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={marginAnalysis}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} />
                <XAxis dataKey="product" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="left" tick={{ fill: MUTED, fontSize: 11 }} axisLine={false} tickLine={false} />
                <YAxis yAxisId="right" orientation="right" tick={{ fill: MUTED, fontSize: 11 }} hide />
                <Tooltip />
                <Legend />
                <Bar yAxisId="left" dataKey="crack" name="Crack ($/bbl)" radius={[6, 6, 0, 0]}>
                  {marginAnalysis.map((_, i) => (
                    <Cell key={i} fill={i % 2 === 0 ? "#1e6fd9" : "#3b82f6"} />
                  ))}
                </Bar>
                <Bar yAxisId="right" dataKey="var" name="VaR ($/bbl)" fill="#64748b" radius={[6, 6, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
          <motion.p
            className="mt-3 text-xs text-slate-500"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            VaR shown for narrative purposes; production models would tie to position-level exposure
            and refinery yield tables.
          </motion.p>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
