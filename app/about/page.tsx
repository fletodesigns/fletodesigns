import type { Metadata } from "next"
import { PageHeader } from "@/components/page-header"
import { Section, SectionHeading, Reveal } from "@/components/section"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "About",
  description:
    "FLETO is a digital product and media ecosystem company. Here's why we build six brands instead of one.",
}

const principles = [
  {
    n: "01",
    t: "Taste compounds.",
    d: "We'd rather build slowly with a clear point of view than ship constantly with none. Every interface, line of copy, and API decision is a deposit.",
  },
  {
    n: "02",
    t: "Constraint > scale.",
    d: "Each division stays small enough to feel — but plugged into shared infrastructure so it punches far above its weight.",
  },
  {
    n: "03",
    t: "Default to the user.",
    d: "Ownership of data, transparent pricing, no dark patterns. The product is the marketing.",
  },
  {
    n: "04",
    t: "Show your work.",
    d: "We publish in public — through Media, Cast, and Academy — because the process is part of the product.",
  },
]

const timeline = [
  { y: "2021", t: "FLETO is founded as a single design studio in Lisbon." },
  { y: "2022", t: "FLETO Labs spins out as a product team. Fledrive ships v1." },
  { y: "2023", t: "FLETO Dev open-sources the storage layer behind Fledrive." },
  { y: "2024", t: "Academy launches in beta. Media publishes its first issue." },
  { y: "2026", t: "Six divisions. One operating system. Just getting started." },
]

const team = [
  { n: "Yuki Tanaka", r: "CEO · Founder" },
  { n: "Marcus Lin", r: "CTO · FLETO Labs" },
  { n: "Aria Okafor", r: "Head of Design" },
  { n: "Daniel Reyes", r: "Editor, FLETO Media" },
  { n: "Iris Cho", r: "Lead, FLETO Academy" },
  { n: "Sven Larsen", r: "Director, FLETO Dev" },
]

export default function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About FLETO"
        title={
          <>
            We&apos;re building a{" "}
            <span className="text-primary text-glow">long-term company</span> for
            people who care how software feels.
          </>
        }
        description="FLETO started as a single design studio. Today, it's six brands operating under one engineering and design standard — products, tools, learning, and media that share infrastructure but keep their own voice."
      />

      {/* Manifesto */}
      <Section id="manifesto" className="py-16 sm:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-4">
            <SectionHeading
              eyebrow="Manifesto"
              title={
                <>
                  Four principles. <br />
                  <span className="text-primary text-glow">Held lightly.</span>
                </>
              }
            />
          </div>
          <div className="lg:col-span-8 space-y-3">
            {principles.map((p, i) => (
              <Reveal key={p.n} delay={i}>
                <div className="group flex items-start gap-6 rounded-2xl border border-border bg-card p-7 hover:border-primary/30 transition-colors">
                  <span className="font-mono text-sm text-primary">{p.n}</span>
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight">{p.t}</h3>
                    <p className="mt-2 text-base leading-relaxed text-muted-foreground max-w-xl">
                      {p.d}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Section>

      {/* Timeline */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="The story so far"
          title={
            <>
              Five years.{" "}
              <span className="text-primary text-glow">Six divisions.</span>
            </>
          }
        />

        <ol className="relative mt-12 border-l border-border pl-8 space-y-10">
          {timeline.map((e, i) => (
            <Reveal key={e.y} delay={i} as="li">
              <span className="absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full bg-primary shadow-[0_0_18px_var(--primary)]" />
              <div className="font-mono text-sm text-muted-foreground">{e.y}</div>
              <p className="mt-2 max-w-2xl text-lg sm:text-xl font-medium tracking-tight text-balance">
                {e.t}
              </p>
            </Reveal>
          ))}
        </ol>
      </Section>

      {/* Team */}
      <Section className="py-16 sm:py-24">
        <SectionHeading
          eyebrow="People"
          title={
            <>
              A small team.{" "}
              <span className="text-primary text-glow">A high bar.</span>
            </>
          }
          description="FLETO is around 40 people across Lisbon, Tokyo, and remote. We hire generalists who can write, ship, and care."
        />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-px rounded-2xl overflow-hidden border border-border bg-border">
          {team.map((m) => (
            <div
              key={m.n}
              className="bg-card p-6 hover:bg-secondary transition-colors"
            >
              <div className="flex items-center gap-4">
                <div className="grid h-12 w-12 place-items-center rounded-full border border-border bg-secondary text-sm font-medium">
                  {m.n
                    .split(" ")
                    .map((s) => s[0])
                    .join("")}
                </div>
                <div>
                  <p className="text-sm font-medium tracking-tight">{m.n}</p>
                  <p className="text-xs text-muted-foreground">{m.r}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
