"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"
import { divisions } from "@/lib/brand"
import { Section, SectionHeading } from "@/components/section"

export function EcosystemGrid() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
        <SectionHeading
          eyebrow="The ecosystem"
          title={
            <>
              Six brands. One{" "}
              <span className="text-primary text-glow">north star</span>.
            </>
          }
          description="Each FLETO division operates independently — but they share infrastructure, design language, and standards. The result feels less like a portfolio and more like a system."
        />
        <Link
          href="/ecosystem"
          className="group inline-flex items-center gap-2 text-sm text-foreground hover:text-primary transition-colors"
        >
          View full ecosystem
          <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </Link>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border bg-border">
        {divisions.map((d, i) => (
          <motion.div
            key={d.id}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={d.href}
              className="group relative block h-full bg-card p-6 sm:p-7 transition-colors hover:bg-secondary"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                  / 0{i + 1}
                </span>
                <span
                  className={
                    "rounded-full px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider " +
                    (d.status === "Live"
                      ? "bg-primary/15 text-primary"
                      : d.status === "Beta"
                      ? "bg-foreground/10 text-foreground"
                      : "bg-muted text-muted-foreground")
                  }
                >
                  {d.status}
                </span>
              </div>

              <h3 className="mt-10 text-2xl font-semibold tracking-tight">
                {d.name}
              </h3>
              <p className="mt-1 text-sm text-primary">{d.tagline}</p>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                {d.description}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm text-foreground/80 group-hover:text-primary transition-colors">
                Explore
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </div>

              <div
                aria-hidden
                className="absolute inset-x-0 bottom-0 h-px bg-linear-to-r from-transparent via-primary/0 to-transparent group-hover:via-primary/60 transition-all"
              />
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  )
}
