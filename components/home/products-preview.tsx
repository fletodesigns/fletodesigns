"use client"

import Link from "next/link"
import { ArrowUpRight, HardDrive, Database, BookOpen } from "lucide-react"
import { motion } from "motion/react"
import { products } from "@/lib/brand"
import { Section, SectionHeading } from "@/components/section"

const icons = {
  fledrive: HardDrive,
  flestorage: Database,
  flebooks: BookOpen,
} as const

export function ProductsPreview() {
  return (
    <Section className="py-24 sm:py-32">
      <SectionHeading
        eyebrow="FLETO Labs"
        title={
          <>
            Software with a{" "}
            <span className="text-primary text-glow">point of view</span>.
          </>
        }
        description="Three products, one studio. Each tool focuses on doing one thing exceptionally — built by the same team, with the same standard."
      />

      <div className="mt-14 grid grid-cols-1 lg:grid-cols-3 gap-5">
        {products.map((p, i) => {
          const Icon = icons[p.id as keyof typeof icons]
          return (
            <motion.article
              key={p.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(204,255,0,0.4)]"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <span className="grid h-10 w-10 place-items-center rounded-lg border border-border bg-secondary">
                    <Icon className="h-4 w-4 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight">{p.name}</h3>
                    <p className="text-xs text-muted-foreground">{p.role}</p>
                  </div>
                </div>
                <span className="font-mono text-[11px] text-muted-foreground">
                  Labs / 0{i + 1}
                </span>
              </div>

              <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
                {p.summary}
              </p>

              <ul className="mt-6 space-y-2.5 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-foreground/85">
                    <span
                      aria-hidden
                      className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-primary"
                    />
                    {f}
                  </li>
                ))}
              </ul>

              <div className="mt-8 flex items-center justify-between border-t border-border pt-5">
                <Link
                  href={`/products${p.href}`}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground group-hover:text-primary transition-colors"
                >
                  {p.cta}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </Link>
                <span className="font-mono text-[10px] uppercase tracking-wider text-muted-foreground">
                  v{i + 2}.{i + 1}
                </span>
              </div>
            </motion.article>
          )
        })}
      </div>
    </Section>
  )
}
