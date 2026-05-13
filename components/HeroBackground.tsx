"use client";

import { motion } from "framer-motion";

export function HeroBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div className="absolute inset-0 bg-radial-glow opacity-80" />
      <div className="absolute inset-0 grid-overlay opacity-30" />

      {/* Gradient orbs */}
      <motion.div
        className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-argus-sky/20 blur-3xl"
        animate={{ x: [0, 40, 0], y: [0, 20, 0] }}
        transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -right-20 bottom-0 h-[28rem] w-[28rem] rounded-full bg-argus-blue/25 blur-3xl"
        animate={{ x: [0, -30, 0], y: [0, -25, 0] }}
        transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Flowing energy / pipeline abstraction */}
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.35]"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <defs>
          <linearGradient id="flowGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#1e6fd9" stopOpacity="0" />
            <stop offset="50%" stopColor="#7ab8ff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#1e6fd9" stopOpacity="0" />
          </linearGradient>
        </defs>
        {[0, 1, 2, 3].map((i) => (
          <motion.path
            key={i}
            d={`M -10 ${120 + i * 90} Q 400 ${40 + i * 70} 900 ${200 + i * 50} T 1900 ${80 + i * 60}`}
            fill="none"
            stroke="url(#flowGrad)"
            strokeWidth={1.2}
            initial={{ pathLength: 0, opacity: 0 }}
            animate={{ pathLength: 1, opacity: 1 }}
            transition={{
              duration: 3 + i * 0.4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
              delay: i * 0.3,
            }}
          />
        ))}
      </svg>

      {/* Candlestick / bar hint */}
      <div className="absolute bottom-10 right-6 flex gap-1 opacity-20 md:right-16">
        {[32, 48, 28, 56, 40, 64, 36].map((h, i) => (
          <motion.div
            key={i}
            className="w-1.5 rounded-sm bg-argus-ice"
            style={{ height: h }}
            animate={{ scaleY: [0.85, 1.05, 0.85] }}
            transition={{ duration: 2 + i * 0.15, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}
