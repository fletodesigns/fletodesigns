import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight, Headphones } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Section, Reveal } from "@/components/section"

export const metadata: Metadata = {
  title: "Media",
  description: "The FLETO webzine — essays, interviews, and dispatches.",
}

const categories = [
  "All",
  "Essays",
  "Engineering",
  "Design",
  "Interviews",
  "Field notes",
] as const

const featured = {
  tag: "Essay",
  title: "Why we build six brands instead of one",
  excerpt:
    "An ecosystem isn't a portfolio. It's a bet that constraint plus context produces better products than scale alone — and a hedge against the gravity of Big Software.",
  author: "Yuki Tanaka",
  role: "CEO, FLETO",
  date: "April 12, 2026",
  read: "12 min",
}

const articles = [
  {
    tag: "Engineering",
    title: "Designing the storage layer behind Fledrive",
    excerpt:
      "How we built end-to-end encryption that doesn't compromise on speed, sharing, or recovery.",
    author: "Marcus Lin",
    date: "Apr 04",
    read: "9 min",
  },
  {
    tag: "Interviews",
    title: "Inside FLETO Design — taste as infrastructure",
    excerpt:
      "Our design lead on building a system that 200+ contributors use without it feeling generic.",
    author: "Aria Okafor",
    date: "Mar 28",
    read: "7 min",
  },
  {
    tag: "Field notes",
    title: "What we learned shipping in three time zones",
    excerpt:
      "The boring rituals that made async work feel calm — and the ones we threw away.",
    author: "Iris Cho",
    date: "Mar 19",
    read: "6 min",
  },
  {
    tag: "Essays",
    title: "Against the dashboard",
    excerpt:
      "Most metrics aren't decisions. A short argument for fewer charts and longer notes.",
    author: "Daniel Reyes",
    date: "Mar 11",
    read: "5 min",
  },
  {
    tag: "Design",
    title: "On color in dark interfaces",
    excerpt:
      "A working theory of contrast, accent, and why our primary is a single, very specific green.",
    author: "Aria Okafor",
    date: "Mar 02",
    read: "8 min",
  },
  {
    tag: "Engineering",
    title: "Type-safe APIs across six products",
    excerpt:
      "How a single contract turns six divisions into something closer to one product.",
    author: "Sven Larsen",
    date: "Feb 23",
    read: "10 min",
  },
]

export default function MediaPage() {
  return (
    <>
      <PageHeader
        eyebrow="FLETO Media"
        title={
          <>
            Words, weekly.{" "}
            <span className="text-primary text-glow">Signal, slowly.</span>
          </>
        }
        description="A webzine of essays, interviews, and field notes from across the FLETO ecosystem. We publish less than we could — on purpose."
      >
        <div className="flex flex-wrap items-center gap-2">
          {categories.map((c, i) => (
            <button
              key={c}
              type="button"
              className={
                "rounded-full border px-3 py-1 text-xs transition-colors " +
                (i === 0
                  ? "border-primary/40 bg-primary/10 text-primary"
                  : "border-border bg-secondary/40 text-muted-foreground hover:text-foreground")
              }
            >
              {c}
            </button>
          ))}
        </div>
      </PageHeader>

      {/* Featured */}
      <Section className="py-12">
        <Reveal>
          <Link
            href="/media"
            className="group block overflow-hidden rounded-3xl border border-border bg-card hover:border-primary/30 transition-colors"
          >
            <div className="grid grid-cols-1 lg:grid-cols-12">
              <div className="lg:col-span-7 p-8 sm:p-12 flex flex-col">
                <span className="inline-block self-start rounded-full bg-primary/15 px-2.5 py-0.5 text-[11px] font-medium uppercase tracking-wider text-primary">
                  Featured · {featured.tag}
                </span>
                <h2 className="mt-6 text-balance text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight leading-[1.05] group-hover:text-primary transition-colors">
                  {featured.title}
                </h2>
                <p className="mt-5 max-w-xl text-pretty text-base sm:text-lg leading-relaxed text-muted-foreground">
                  {featured.excerpt}
                </p>
                <div className="mt-auto pt-10 flex items-center gap-4 text-sm">
                  <div className="grid h-9 w-9 place-items-center rounded-full bg-secondary border border-border text-xs">
                    YT
                  </div>
                  <div>
                    <p className="font-medium">{featured.author}</p>
                    <p className="text-xs text-muted-foreground">
                      {featured.role} · {featured.date} · {featured.read}
                    </p>
                  </div>
                  <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
              </div>
              <div className="relative lg:col-span-5 border-t lg:border-t-0 lg:border-l border-border min-h-[280px] overflow-hidden">
                <div
                  aria-hidden
                  className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black,transparent_70%)]"
                />
                <div
                  aria-hidden
                  className="absolute -top-10 left-1/2 -translate-x-1/2 h-64 w-64 rounded-full bg-primary/15 blur-3xl"
                />
                <div className="relative h-full grid place-items-center p-10">
                  <div className="font-sans text-[20vw] lg:text-[12rem] leading-none font-semibold text-foreground/[0.06] tracking-tighter">
                    06
                  </div>
                </div>
              </div>
            </div>
          </Link>
        </Reveal>
      </Section>

      {/* Article grid */}
      <Section className="py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {articles.map((a, i) => (
            <Reveal key={a.title} delay={i} as="article">
              <Link
                href="/media"
                className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:-translate-y-1 transition-all"
              >
                <div className="flex items-center justify-between">
                  <span className="rounded-full bg-secondary px-2.5 py-0.5 text-[11px] font-medium text-foreground/80">
                    {a.tag}
                  </span>
                  <span className="font-mono text-[11px] text-muted-foreground">
                    {a.date}
                  </span>
                </div>
                <h3 className="mt-6 text-xl font-semibold tracking-tight text-balance group-hover:text-primary transition-colors">
                  {a.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <div className="mt-auto pt-6 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{a.author}</span>
                  <span>{a.read} read</span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </Section>

      {/* Cast promo */}
      <Section className="py-24">
        <div className="rounded-3xl border border-border bg-card p-8 sm:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-3 py-1 text-xs">
              <Headphones className="h-3.5 w-3.5 text-primary" />
              FLETO Cast
            </span>
            <h3 className="mt-5 text-3xl font-semibold tracking-tight text-balance">
              Conversations on craft, taste, and the people building the next web.
            </h3>
          </div>
          <Link
            href="/ecosystem#cast"
            className="group inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-5 py-2.5 text-sm font-medium hover:border-foreground/30 transition"
          >
            Listen now
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>
      </Section>
    </>
  )
}
