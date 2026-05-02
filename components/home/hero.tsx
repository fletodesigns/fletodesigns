"use client"

import Link from "next/link"
import { ArrowUpRight, ArrowRight } from "lucide-react"
import { motion } from "motion/react"

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-32 sm:pt-40 pb-24">
      {/* spotlight */}
      <div aria-hidden className="absolute inset-x-0 top-0 h-[600px] spotlight" />
      {/* grid */}
      <div
        aria-hidden
        className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_top,black_30%,transparent_70%)]"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="flex flex-col items-center text-center"
        >
          <Link
            href="/products"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground hover:text-foreground hover:border-primary/40 transition"
          >
            <span className="rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider text-primary">
              New
            </span>
            Fledrive 2.0 — fully end-to-end encrypted
            <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-0.5" />
          </Link>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 text-balance text-5xl sm:text-6xl md:text-7xl lg:text-[88px] font-semibold tracking-tight leading-[0.95]"
          >
            One ecosystem.
            <br />
            <span className="text-foreground/60">Six brands.</span>{" "}
            <span className="text-primary text-glow">Built to ship.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-2xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground"
          >
            FLETO is a multi-brand company building products, developer tools, design
            systems, learning, and media — connected by one taste and one engineering
            standard.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10 flex flex-col sm:flex-row items-center gap-3"
          >
            <Link
              href="/ecosystem"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-shadow hover:glow-primary"
            >
              Explore the ecosystem
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/products"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30 transition"
            >
              View products
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="mt-16 flex items-center gap-6 text-xs text-muted-foreground"
          >
            <span className="font-mono">v6.2 · {new Date().getFullYear()}</span>
            <span className="h-3 w-px bg-border" />
            <span>Trusted by teams in 27 countries</span>
          </motion.div>
        </motion.div>

        {/* Showcase frame */}
        <motion.div
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="relative mt-20"
        >
          <div className="absolute inset-x-10 -top-10 h-40 bg-primary/10 blur-3xl rounded-full" aria-hidden />
          <div className="relative overflow-hidden rounded-2xl border border-border bg-card glass">
            <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              </div>
              <div className="font-mono text-[11px] text-muted-foreground">
                fleto.app/dashboard
              </div>
              <div className="w-12" />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-px bg-border">
              {/* Sidebar */}
              <div className="md:col-span-3 bg-card p-5">
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                  Workspace
                </p>
                <div className="mt-3 flex items-center gap-2 rounded-md bg-secondary px-2.5 py-2">
                  <span className="h-6 w-6 rounded bg-primary/20 grid place-items-center text-primary text-xs font-bold">
                    F
                  </span>
                  <span className="text-sm">FLETO Studio</span>
                </div>
                <ul className="mt-5 space-y-1 text-sm">
                  {[
                    "Overview",
                    "Products",
                    "Storage",
                    "Library",
                    "Members",
                    "Billing",
                  ].map((it, i) => (
                    <li
                      key={it}
                      className={`px-2.5 py-1.5 rounded-md ${
                        i === 0
                          ? "bg-primary/10 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {it}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Main */}
              <div className="md:col-span-9 bg-card p-5">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-[11px] uppercase tracking-wider text-muted-foreground">
                      Today
                    </p>
                    <h3 className="mt-1 text-xl font-semibold tracking-tight">
                      Ecosystem health
                    </h3>
                  </div>
                  <span className="rounded-full border border-primary/40 bg-primary/10 px-2.5 py-1 text-[11px] font-medium text-primary">
                    All systems normal
                  </span>
                </div>

                <div className="mt-5 grid grid-cols-2 lg:grid-cols-4 gap-3">
                  {[
                    { l: "Active users", v: "84,210", d: "+4.8%" },
                    { l: "Storage served", v: "1.42 PB", d: "+12%" },
                    { l: "API calls", v: "928M", d: "+2.1%" },
                    { l: "Articles read", v: "210k", d: "+9%" },
                  ].map((s) => (
                    <div
                      key={s.l}
                      className="rounded-lg border border-border bg-background/40 p-4"
                    >
                      <p className="text-xs text-muted-foreground">{s.l}</p>
                      <p className="mt-2 font-mono text-xl">{s.v}</p>
                      <p className="mt-1 text-[11px] text-primary">{s.d}</p>
                    </div>
                  ))}
                </div>

                {/* Sparkline */}
                <div className="mt-5 rounded-lg border border-border bg-background/40 p-4">
                  <div className="flex items-center justify-between">
                    <p className="text-xs text-muted-foreground">Daily traffic · 30d</p>
                    <p className="font-mono text-xs text-foreground">+18.4%</p>
                  </div>
                  <svg
                    viewBox="0 0 600 120"
                    className="mt-3 w-full h-24"
                    preserveAspectRatio="none"
                  >
                    <defs>
                      <linearGradient id="g" x1="0" x2="0" y1="0" y2="1">
                        <stop offset="0%" stopColor="#CCFF00" stopOpacity="0.45" />
                        <stop offset="100%" stopColor="#CCFF00" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                    <path
                      d="M0,80 C60,75 90,40 150,55 C210,70 240,30 300,42 C360,54 390,20 450,35 C510,50 540,30 600,18 L600,120 L0,120 Z"
                      fill="url(#g)"
                    />
                    <path
                      d="M0,80 C60,75 90,40 150,55 C210,70 240,30 300,42 C360,54 390,20 450,35 C510,50 540,30 600,18"
                      fill="none"
                      stroke="#CCFF00"
                      strokeWidth="2"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
