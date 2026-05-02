import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Boxes,
  Code2,
  Palette,
  GraduationCap,
  Newspaper,
  Mic,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Section, SectionHeading, Reveal } from "@/components/section"
import { divisions } from "@/lib/brand"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Ecosystem",
  description:
    "FLETO is six brands operating under one engineering and design standard.",
}

const iconFor: Record<string, React.ComponentType<{ className?: string }>> = {
  labs: Boxes,
  dev: Code2,
  design: Palette,
  academy: GraduationCap,
  media: Newspaper,
  cast: Mic,
}

export default function EcosystemPage() {
  return (
    <>
      <PageHeader
        eyebrow="Ecosystem"
        title={
          <>
            One company. <span className="text-primary text-glow">Six divisions.</span>
            <br />
            Independent, but connected.
          </>
        }
        description="Each FLETO division has its own focus, its own users, and its own roadmap. They share infrastructure, design language, and the same engineering bar — so the whole adds up to more than the parts."
      />

      <Section className="py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5">
          {divisions.map((d, i) => {
            const Icon = iconFor[d.id]
            return (
              <Reveal key={d.id} delay={i}>
                <Link
                  href={d.href}
                  id={d.id}
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-7 sm:p-9 transition-all hover:-translate-y-1 hover:border-primary/30 hover:shadow-[0_24px_60px_-30px_rgba(204,255,0,0.45)]"
                >
                  <div className="flex items-start justify-between">
                    <span className="grid h-12 w-12 place-items-center rounded-xl border border-border bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <div className="flex items-center gap-2">
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
                  </div>

                  <h2 className="mt-10 text-3xl font-semibold tracking-tight">
                    {d.name}
                  </h2>
                  <p className="mt-1.5 text-base text-primary">{d.tagline}</p>
                  <p className="mt-5 text-base leading-relaxed text-muted-foreground max-w-md">
                    {d.description}
                  </p>

                  <div className="mt-8 flex items-center gap-2 text-sm text-foreground group-hover:text-primary transition-colors">
                    Visit division
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* How it fits together */}
      <Section className="py-24 sm:py-32">
        <SectionHeading
          eyebrow="How it fits"
          title={
            <>
              The shared{" "}
              <span className="text-primary text-glow">FLETO standard</span>.
            </>
          }
          description="Every division ships against the same internal contract. It's the reason a Fledrive feature can ship next to a FLETO Academy course in the same week, without one feeling out of place."
        />

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border bg-border">
          {[
            {
              k: "Engineering",
              v: "Type-safe by default. Performance budgets per surface. Automated review.",
            },
            {
              k: "Design",
              v: "One token system, shared motion grammar, accessible from day one.",
            },
            {
              k: "Brand",
              v: "Each division writes in its own voice — but they all speak FLETO.",
            },
          ].map((c) => (
            <div key={c.k} className="bg-card p-7">
              <p className="font-mono text-[11px] uppercase tracking-[0.18em] text-primary">
                {c.k}
              </p>
              <p className="mt-4 text-base leading-relaxed text-foreground/85">
                {c.v}
              </p>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
