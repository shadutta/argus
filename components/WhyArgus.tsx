"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { GlassCard, SectionShell } from "./GlassCard";

const alignments = [
  "Deep curiosity for how physical markets, paper markets, and corporate strategy interact.",
  "Comfort operating in cross-functional pods: research, data science, product, and client-facing teams.",
  "Bias toward transparent assumptions — intelligence should be reviewable, not mystical.",
  "Interest in Argus Consulting Services as a place where analytical depth meets commercial outcomes.",
];

export function WhyArgus() {
  return (
    <SectionShell
      id="argus"
      eyebrow="Why Argus Media"
      title="Built for Argus Consulting Services — market intelligence at the center"
      subtitle="Argus sits at the intersection of what I want to do professionally: rigorous commodity and energy intelligence, forecasting discipline, and consulting-grade client delivery."
    >
      <div className="grid gap-6 lg:grid-cols-2">
        <GlassCard strong className="p-8 md:p-10">
          <p className="text-lg leading-relaxed text-slate-300 md:text-xl">
            I am motivated by environments where the quality of your thinking is measured by the decisions it
            enables. Argus Consulting Services is compelling because it pairs{" "}
            <span className="text-white">deep market datasets</span> with{" "}
            <span className="text-white">structured advisory work</span> — the same pairing that drives my strongest
            performance: analytical foundations with executive communication.
          </p>
          <p className="mt-6 text-sm leading-relaxed text-slate-500">
            Energy and commodity markets reward people who can move fluently between price action, fundamentals,
            and the commercial realities of producers, traders, and end users. That fluency is what I am building
            toward — deliberately.
          </p>
        </GlassCard>

        <GlassCard className="p-8 md:p-10">
          <p className="font-mono text-[10px] uppercase tracking-widest text-argus-sky">Alignment</p>
          <ul className="mt-6 space-y-4">
            {alignments.map((line, i) => (
              <motion.li
                key={line}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.4 }}
                className="flex gap-3 text-sm leading-relaxed text-slate-300"
              >
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-argus-sky" />
                <span>{line}</span>
              </motion.li>
            ))}
          </ul>
        </GlassCard>
      </div>
    </SectionShell>
  );
}
