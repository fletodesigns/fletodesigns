"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { motion } from "motion/react"

export function CtaSection() {
  return (
    <section className="relative py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card noise"
        >
          <div
            aria-hidden
            className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_20%,transparent_70%)]"
          />
          <div
            aria-hidden
            className="absolute -top-32 left-1/2 -translate-x-1/2 h-72 w-[80%] rounded-full bg-primary/15 blur-3xl"
          />

          <div className="relative px-6 sm:px-12 py-16 sm:py-24 text-center">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs text-muted-foreground">
              <span className="h-1.5 w-1.5 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
              Building something with us
            </span>
            <h2 className="mt-6 text-balance text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.05]">
              Build with the FLETO standard.
            </h2>
            <p className="mt-5 mx-auto max-w-2xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
              Whether you&apos;re shipping a product, joining the academy, or
              partnering with a division — there&apos;s a way in.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-shadow hover:glow-primary"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </Link>
              <Link
                href="/about"
                className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium text-foreground hover:border-foreground/30 transition"
              >
                Read our manifesto
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
