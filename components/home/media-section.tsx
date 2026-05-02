"use client"

import Link from "next/link"
import { ArrowUpRight, Mic, Headphones } from "lucide-react"
import { motion } from "motion/react"
import { Section, SectionHeading } from "@/components/section"

const articles = [
  {
    tag: "Essay",
    title: "Why we build six brands instead of one",
    excerpt:
      "An ecosystem isn't a portfolio. It's a bet that constraint plus context produces better products than scale alone.",
    author: "Yuki Tanaka",
    date: "Apr 12",
  },
  {
    tag: "Engineering",
    title: "Designing the storage layer behind Fledrive",
    excerpt:
      "How we built end-to-end encryption that doesn't compromise on speed, sharing, or recovery.",
    author: "Marcus Lin",
    date: "Apr 04",
  },
  {
    tag: "Interview",
    title: "Inside FLETO Design — taste as infrastructure",
    excerpt:
      "Our design lead on building a system that 200+ contributors use without it feeling generic.",
    author: "Aria Okafor",
    date: "Mar 28",
  },
]

export function MediaSection() {
  return (
    <Section className="py-24 sm:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-5">
          <SectionHeading
            eyebrow="FLETO Media & Cast"
            title={
              <>
                Fewer takes. <br />
                <span className="text-primary text-glow">More signal.</span>
              </>
            }
            description="A weekly webzine and a long-form podcast. We publish slowly because we'd rather say one thing well than five things first."
          />

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/media"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm hover:border-foreground/30 transition"
            >
              Read the webzine
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
            <Link
              href="/ecosystem#cast"
              className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm hover:border-foreground/30 transition"
            >
              <Headphones className="h-4 w-4 text-primary" />
              Listen to FLETO Cast
            </Link>
          </div>

          {/* Cast card */}
          <div className="mt-8 rounded-2xl border border-border bg-card p-5">
            <div className="flex items-center justify-between">
              <span className="inline-flex items-center gap-2 text-xs text-muted-foreground">
                <Mic className="h-3.5 w-3.5 text-primary" />
                FLETO Cast — Ep. 14
              </span>
              <span className="font-mono text-xs text-muted-foreground">42:18</span>
            </div>
            <p className="mt-3 text-base font-medium tracking-tight">
              The economics of taste in modern software
            </p>
            <div className="mt-4 flex items-center gap-3">
              <button
                type="button"
                className="grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground hover:glow-primary transition"
                aria-label="Play episode"
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5 fill-current">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </button>
              <div className="flex-1">
                <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                  <div className="h-full w-1/3 bg-primary" />
                </div>
                <div className="mt-2 flex justify-between font-mono text-[10px] text-muted-foreground">
                  <span>14:02</span>
                  <span>—28:16</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-7 space-y-3">
          {articles.map((a, i) => (
            <motion.article
              key={a.title}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href="/media"
                className="group flex items-start gap-5 rounded-2xl border border-border bg-card p-6 transition-colors hover:bg-secondary"
              >
                <div className="hidden sm:block w-24 shrink-0">
                  <span className="font-mono text-xs text-muted-foreground">
                    {a.date}
                  </span>
                </div>
                <div className="flex-1">
                  <span className="inline-block rounded-full bg-primary/15 px-2 py-0.5 text-[10px] font-medium uppercase tracking-wider text-primary">
                    {a.tag}
                  </span>
                  <h3 className="mt-3 text-lg sm:text-xl font-semibold tracking-tight text-balance group-hover:text-primary transition-colors">
                    {a.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {a.excerpt}
                  </p>
                  <p className="mt-4 text-xs text-muted-foreground">{a.author}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
              </Link>
            </motion.article>
          ))}
        </div>
      </div>
    </Section>
  )
}
