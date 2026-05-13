"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const links = [
  { href: "#insights", label: "Insights" },
  { href: "#dashboard", label: "Dashboard" },
  { href: "#projects", label: "Cases" },
  { href: "#lab", label: "Analytics Lab" },
  { href: "#markets", label: "Markets" },
  { href: "#argus", label: "Why Argus" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/5 bg-argus-navy/70 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="#" className="group flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-gradient-to-br from-argus-sky to-argus-blue font-mono text-xs font-bold text-white shadow-panel">
            MI
          </span>
          <div className="leading-tight">
            <p className="text-sm font-semibold tracking-tight text-white">Market Intelligence</p>
            <p className="font-mono text-[10px] uppercase tracking-widest text-slate-500">
              Consulting Analyst Track
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-2 text-sm text-slate-400 transition hover:bg-white/5 hover:text-white"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <Link
            href="#contact"
            className="rounded-full bg-gradient-to-r from-argus-sky to-argus-blue px-4 py-2 text-sm font-medium text-white shadow-glass transition hover:brightness-110"
          >
            Request Brief
          </Link>
        </div>

        <button
          type="button"
          className="rounded-lg p-2 text-slate-300 md:hidden"
          aria-label="Toggle menu"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="border-t border-white/5 bg-argus-navy/95 px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-sm text-slate-300 hover:bg-white/5"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-2 rounded-full bg-argus-sky px-3 py-2 text-center text-sm font-medium text-white"
            >
              Request Brief
            </Link>
          </div>
        </motion.div>
      )}
    </header>
  );
}
