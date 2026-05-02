"use client"

import { motion } from "motion/react"
import { stats } from "@/lib/brand"

export function StatsStrip() {
  return (
    <section className="relative border-y border-border bg-card/40">
      <div
        aria-hidden
        className="absolute inset-0 dot-bg [mask-image:linear-gradient(to_bottom,transparent,black_30%,black_70%,transparent)]"
      />
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-border">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
              className="px-4 sm:px-6 first:pl-0 last:pr-0"
            >
              <p className="font-sans text-3xl sm:text-5xl font-semibold tracking-tight">
                {s.value}
              </p>
              <p className="mt-2 text-xs sm:text-sm text-muted-foreground max-w-[18ch]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
