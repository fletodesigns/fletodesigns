import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowUpRight,
  Code2,
  Palette,
  Boxes,
  PenTool,
  Sparkles,
  Clock,
  Users,
} from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Section, SectionHeading, Reveal } from "@/components/section"
import { CtaSection } from "@/components/home/cta-section"

export const metadata: Metadata = {
  title: "Academy",
  description:
    "Courses and learning paths from FLETO Academy — practical, opinionated, modern.",
}

const paths = [
  {
    icon: Code2,
    name: "Modern Web Engineering",
    courses: 6,
    hours: 32,
    students: "2,140",
    blurb:
      "From routing fundamentals to type-safe full-stack apps. Built for engineers who want to understand the why.",
  },
  {
    icon: Palette,
    name: "Interface Design",
    courses: 5,
    hours: 24,
    students: "1,820",
    blurb:
      "A modern, opinionated take on building interfaces — typography, layout, motion, and design systems.",
  },
  {
    icon: Boxes,
    name: "Product Studio",
    courses: 4,
    hours: 18,
    students: "980",
    blurb:
      "Go from idea to v1: scoping, building, and shipping a product without losing the plot.",
  },
]

const courses = [
  {
    level: "Intermediate",
    title: "Type-safe APIs from end to end",
    teacher: "Sven Larsen",
    role: "Director, FLETO Dev",
    duration: "6h 12m",
    lessons: 24,
    icon: Code2,
  },
  {
    level: "Beginner",
    title: "Designing with restraint",
    teacher: "Aria Okafor",
    role: "Head of Design",
    duration: "4h 02m",
    lessons: 18,
    icon: PenTool,
  },
  {
    level: "Advanced",
    title: "Building a multi-product company",
    teacher: "Yuki Tanaka",
    role: "CEO, FLETO",
    duration: "5h 48m",
    lessons: 16,
    icon: Sparkles,
  },
  {
    level: "Intermediate",
    title: "Storage systems for the web",
    teacher: "Marcus Lin",
    role: "CTO, FLETO Labs",
    duration: "7h 30m",
    lessons: 22,
    icon: Boxes,
  },
  {
    level: "Beginner",
    title: "Writing better technical docs",
    teacher: "Daniel Reyes",
    role: "Editor, FLETO Media",
    duration: "3h 14m",
    lessons: 14,
    icon: PenTool,
  },
  {
    level: "Intermediate",
    title: "Motion in product UI",
    teacher: "Aria Okafor",
    role: "Head of Design",
    duration: "4h 56m",
    lessons: 19,
    icon: Sparkles,
  },
]

export default function AcademyPage() {
  return (
    <>
      <PageHeader
        eyebrow="FLETO Academy"
        title={
          <>
            Learn from people who{" "}
            <span className="text-primary text-glow">actually ship</span>.
          </>
        }
        description="FLETO Academy teaches the craft behind the products. Every course is taught by a working practitioner — no influencers, no fluff."
      >
        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-shadow hover:glow-primary"
          >
            Start learning
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-xs text-muted-foreground">
            <span className="text-foreground">15 courses</span> · 5 paths ·
            5,000+ students
          </span>
        </div>
      </PageHeader>

      {/* Paths */}
      <Section className="py-12 sm:py-16">
        <SectionHeading
          eyebrow="Learning paths"
          title="Pick a track. Go deep."
          description="Every path is a curated sequence of courses, projects, and reading — designed to take you from competent to confident."
        />

        <div className="mt-12 grid grid-cols-1 lg:grid-cols-3 gap-5">
          {paths.map((p, i) => {
            const Icon = p.icon
            return (
              <Reveal key={p.name} delay={i}>
                <Link
                  href="/academy"
                  className="group relative flex h-full flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30 hover:-translate-y-1 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-secondary group-hover:bg-primary/10 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </span>
                    <span className="font-mono text-[11px] uppercase tracking-[0.18em] text-muted-foreground">
                      Path / 0{i + 1}
                    </span>
                  </div>
                  <h3 className="mt-8 text-2xl font-semibold tracking-tight">
                    {p.name}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    {p.blurb}
                  </p>
                  <div className="mt-6 grid grid-cols-3 divide-x divide-border border-y border-border">
                    {[
                      { l: "Courses", v: p.courses },
                      { l: "Hours", v: p.hours },
                      { l: "Students", v: p.students },
                    ].map((s) => (
                      <div key={s.l} className="px-2 py-3 text-center">
                        <p className="font-mono text-base">{s.v}</p>
                        <p className="text-[10px] uppercase tracking-wider text-muted-foreground">
                          {s.l}
                        </p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 flex items-center gap-2 text-sm text-foreground group-hover:text-primary transition-colors">
                    Start path
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      {/* Course catalog */}
      <Section className="py-12 sm:py-16">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6">
          <SectionHeading
            eyebrow="Catalog"
            title="Recent & popular courses"
          />
          <Link
            href="/academy"
            className="group inline-flex items-center gap-2 text-sm hover:text-primary transition-colors"
          >
            View all 15 courses
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {courses.map((c, i) => {
            const Icon = c.icon
            return (
              <Reveal key={c.title} delay={i}>
                <Link
                  href="/academy"
                  className="group flex h-full flex-col rounded-2xl border border-border bg-card p-6 hover:border-primary/30 transition-all hover:-translate-y-1"
                >
                  <div className="aspect-video rounded-xl border border-border bg-linear-to-br from-secondary to-card relative overflow-hidden">
                    <div
                      aria-hidden
                      className="absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_70%)]"
                    />
                    <div className="absolute inset-0 grid place-items-center">
                      <Icon className="h-10 w-10 text-primary/70 group-hover:text-primary transition-colors" />
                    </div>
                    <span className="absolute top-3 left-3 rounded-full bg-background/80 backdrop-blur px-2.5 py-0.5 text-[10px] font-medium uppercase tracking-wider text-foreground">
                      {c.level}
                    </span>
                  </div>

                  <h3 className="mt-5 text-lg font-semibold tracking-tight text-balance group-hover:text-primary transition-colors">
                    {c.title}
                  </h3>
                  <p className="mt-2 text-xs text-muted-foreground">
                    {c.teacher} · {c.role}
                  </p>

                  <div className="mt-auto pt-5 flex items-center gap-4 text-xs text-muted-foreground">
                    <span className="inline-flex items-center gap-1.5">
                      <Clock className="h-3.5 w-3.5" />
                      {c.duration}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Users className="h-3.5 w-3.5" />
                      {c.lessons} lessons
                    </span>
                  </div>
                </Link>
              </Reveal>
            )
          })}
        </div>
      </Section>

      <CtaSection />
    </>
  )
}
