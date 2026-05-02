import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  HardDrive,
  Database,
  BookOpen,
  Check,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Section, Reveal } from "@/components/section"
import { products } from "@/lib/brand"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Products — FLETO Labs",
  description:
    "Fledrive, Flestorage, and Flebooks — three products from FLETO Labs, built to the same standard.",
}

const icons = {
  fledrive: HardDrive,
  flestorage: Database,
  flebooks: BookOpen,
} as const

export default function ProductsPage() {
  return (
    <>
      <PageHeader
        eyebrow="FLETO Labs"
        title={
          <>
            Software built to a{" "}
            <span className="text-primary text-glow">single standard</span>.
          </>
        }
        description="Three products. One studio. Each tool focuses on doing one thing exceptionally — and they share the same infrastructure, account, and design system."
      />

      <Section className="py-12 sm:py-16 space-y-6">
        {products.map((p, i) => {
          const Icon = icons[p.id as keyof typeof icons]
          const reverse = i % 2 === 1
          return (
            <Reveal key={p.id} delay={i}>
              <article
                id={p.id}
                className="relative overflow-hidden rounded-3xl border border-border bg-card"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-px bg-border">
                  <div
                    className={
                      "lg:col-span-5 bg-card p-8 sm:p-12 flex flex-col " +
                      (reverse ? "lg:order-2" : "")
                    }
                  >
                    <div className="flex items-center gap-3">
                      <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary">
                        <Icon className="h-5 w-5 text-primary" />
                      </span>
                      <div>
                        <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                          FLETO Labs · 0{i + 1}
                        </p>
                        <h2 className="text-2xl font-semibold tracking-tight">
                          {p.name}
                        </h2>
                      </div>
                    </div>

                    <p className="mt-6 text-base leading-relaxed text-foreground/85">
                      {p.summary}
                    </p>

                    <ul className="mt-7 space-y-3">
                      {p.features.map((f) => (
                        <li key={f} className="flex items-start gap-3 text-sm">
                          <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-primary/15 text-primary">
                            <Check className="h-3 w-3" />
                          </span>
                          <span className="text-foreground/85">{f}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-auto pt-10 flex flex-wrap items-center gap-3">
                      <Link
                        href={p.href}
                        className="group inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-shadow hover:glow-primary"
                      >
                        {p.cta}
                        <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                      </Link>
                      <Link
                        href="/contact"
                        className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Talk to sales →
                      </Link>
                    </div>
                  </div>

                  <div
                    className={
                      "lg:col-span-7 relative bg-card overflow-hidden " +
                      (reverse ? "lg:order-1" : "")
                    }
                  >
                    <ProductMock product={p.id} />
                  </div>
                </div>
              </article>
            </Reveal>
          )
        })}
      </Section>

      <CtaSection />
    </>
  )
}

function ProductMock({ product }: { product: string }) {
  if (product === "fledrive") {
    const files = [
      { n: "Brand-2026-Q2.fig", s: "12.4 MB", t: "Figma" },
      { n: "ecosystem-launch.mp4", s: "284 MB", t: "Video" },
      { n: "mvp-deck.pdf", s: "3.1 MB", t: "PDF" },
      { n: "api-spec.md", s: "42 KB", t: "Markdown" },
      { n: "design-tokens.json", s: "18 KB", t: "JSON" },
    ]
    return (
      <div className="relative h-full min-h-[420px] p-6 sm:p-8">
        <div
          aria-hidden
          className="absolute -top-20 -right-20 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />
        <div className="relative rounded-xl border border-border bg-background/40 overflow-hidden">
          <div className="flex items-center justify-between border-b border-border px-4 py-2.5">
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <HardDrive className="h-3.5 w-3.5 text-primary" />
              fleto / drive / projects
            </div>
            <span className="font-mono text-[10px] text-muted-foreground">
              5 items
            </span>
          </div>
          <ul className="divide-y divide-border">
            {files.map((f) => (
              <li
                key={f.n}
                className="flex items-center justify-between px-4 py-3 hover:bg-secondary/60 transition-colors"
              >
                <div className="flex items-center gap-3">
                  <span className="h-7 w-7 rounded-md bg-secondary grid place-items-center text-[10px] font-medium text-foreground/70">
                    {f.t.slice(0, 1)}
                  </span>
                  <span className="text-sm">{f.n}</span>
                </div>
                <span className="font-mono text-xs text-muted-foreground">
                  {f.s}
                </span>
              </li>
            ))}
          </ul>
          <div className="border-t border-border px-4 py-3 flex items-center justify-between text-xs">
            <span className="text-muted-foreground">
              Encrypted · synced 2s ago
            </span>
            <span className="text-primary font-mono">E2EE</span>
          </div>
        </div>
      </div>
    )
  }

  if (product === "flestorage") {
    return (
      <div className="relative h-full min-h-[420px] p-6 sm:p-8 flex items-center">
        <div
          aria-hidden
          className="absolute -bottom-20 -left-10 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
        />
        <pre className="relative w-full overflow-x-auto rounded-xl border border-border bg-background/60 p-5 font-mono text-[12.5px] leading-relaxed">
          <code>
            <span className="text-muted-foreground">
              {"// install: pnpm add @fleto/storage"}
            </span>
            {"\n"}
            <span className="text-primary">import</span>
            <span className="text-foreground">{" { storage } "}</span>
            <span className="text-primary">from</span>
            <span className="text-foreground/80">{' "@fleto/storage"'}</span>
            {"\n\n"}
            <span className="text-primary">const</span>
            <span className="text-foreground">{" bucket = storage."}</span>
            <span className="text-foreground">{"bucket("}</span>
            <span className="text-foreground/80">{'"site-assets"'}</span>
            <span className="text-foreground">{")"}</span>
            {"\n\n"}
            <span className="text-primary">await</span>
            <span className="text-foreground">{" bucket."}</span>
            <span className="text-foreground">{"put"}</span>
            <span className="text-foreground">{"({"}</span>
            {"\n  "}
            <span className="text-foreground/80">{"key"}</span>
            <span className="text-foreground">{": "}</span>
            <span className="text-foreground/80">{'"hero/launch.jpg"'}</span>
            <span className="text-foreground">{","}</span>
            {"\n  "}
            <span className="text-foreground/80">{"body"}</span>
            <span className="text-foreground">{": file,"}</span>
            {"\n  "}
            <span className="text-foreground/80">{"cache"}</span>
            <span className="text-foreground">{": "}</span>
            <span className="text-foreground/80">{'"edge"'}</span>
            <span className="text-foreground">{","}</span>
            {"\n"}
            <span className="text-foreground">{"})"}</span>
            {"\n\n"}
            <span className="text-muted-foreground">{"// → 28ms · cached at 312 PoPs"}</span>
          </code>
        </pre>
      </div>
    )
  }

  // flebooks
  const books = [
    { title: "Tools for Conviviality", author: "Ivan Illich", p: 64 },
    { title: "The Pattern on the Stone", author: "Daniel Hillis", p: 22 },
    { title: "A City is Not a Tree", author: "C. Alexander", p: 88 },
    { title: "Designing Design", author: "Kenya Hara", p: 41 },
  ]
  return (
    <div className="relative h-full min-h-[420px] p-6 sm:p-8">
      <div
        aria-hidden
        className="absolute -top-10 right-0 h-64 w-64 rounded-full bg-primary/10 blur-3xl"
      />
      <div className="relative grid grid-cols-2 gap-3">
        {books.map((b) => (
          <div
            key={b.title}
            className="rounded-xl border border-border bg-background/40 p-5"
          >
            <div className="aspect-[3/4] rounded-md bg-linear-to-br from-secondary to-card border border-border flex items-end p-3">
              <p className="text-xs font-medium leading-tight">{b.title}</p>
            </div>
            <p className="mt-3 text-sm font-medium tracking-tight">{b.title}</p>
            <p className="text-xs text-muted-foreground">{b.author}</p>
            <div className="mt-3 h-1 rounded-full bg-secondary overflow-hidden">
              <div
                className="h-full bg-primary"
                style={{ width: `${b.p}%` }}
                aria-hidden
              />
            </div>
            <p className="mt-1.5 font-mono text-[10px] text-muted-foreground">
              {b.p}% · 12 highlights
            </p>
          </div>
        ))}
      </div>
    </div>
  )
}
