import type { Metadata } from "next"
import Link from "next/link"
import { Github, Twitter, Linkedin, Mail, MapPin, ArrowUpRight } from "lucide-react"
import { PageHeader } from "@/components/page-header"
import { Section } from "@/components/section"
import { ContactForm } from "@/components/contact-form"

export const metadata: Metadata = {
  title: "Contact",
  description: "Get in touch with FLETO — partnerships, press, careers, support.",
}

const channels = [
  {
    icon: Mail,
    label: "Email",
    value: "hello@fleto.app",
    href: "mailto:hello@fleto.app",
  },
  {
    icon: MapPin,
    label: "Lisbon HQ",
    value: "R. da Boavista 23, 1200-068 Lisboa",
    href: "#",
  },
  {
    icon: MapPin,
    label: "Tokyo studio",
    value: "Sendagaya 4-22, Shibuya, 151-0051",
    href: "#",
  },
]

const social = [
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Linkedin, label: "LinkedIn", href: "#" },
]

export default function ContactPage() {
  return (
    <>
      <PageHeader
        eyebrow="Contact"
        title={
          <>
            Tell us what you&apos;re{" "}
            <span className="text-primary text-glow">working on</span>.
          </>
        }
        description="Whether it's a partnership, a press request, a job application, or a question about a product — we'd genuinely like to hear from you."
      />

      <Section className="py-8 sm:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          <div className="lg:col-span-7">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-10">
              <ContactForm />
            </div>
          </div>

          <aside className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Direct lines
              </h2>
              <ul className="mt-5 space-y-5">
                {channels.map((c) => {
                  const Icon = c.icon
                  return (
                    <li key={c.label}>
                      <Link
                        href={c.href}
                        className="group flex items-start gap-4 -m-2 p-2 rounded-lg hover:bg-secondary transition-colors"
                      >
                        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-lg border border-border bg-secondary">
                          <Icon className="h-4 w-4 text-primary" />
                        </span>
                        <div className="flex-1">
                          <p className="text-xs uppercase tracking-wider text-muted-foreground">
                            {c.label}
                          </p>
                          <p className="text-sm group-hover:text-primary transition-colors">
                            {c.value}
                          </p>
                        </div>
                      </Link>
                    </li>
                  )
                })}
              </ul>
            </div>

            <div
              id="careers"
              className="relative overflow-hidden rounded-3xl border border-border bg-card p-6 sm:p-8"
            >
              <div
                aria-hidden
                className="absolute -top-10 -right-10 h-40 w-40 rounded-full bg-primary/15 blur-3xl"
              />
              <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Careers
              </h2>
              <p className="mt-4 text-lg font-medium tracking-tight text-balance">
                We&apos;re hiring across Labs, Dev, and Design.
              </p>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Generalists welcome. Tell us what you&apos;ve shipped — work, side
                projects, writing — and which division you&apos;d want to land in.
              </p>
              <Link
                href="mailto:careers@fleto.app"
                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-primary hover:underline"
              >
                careers@fleto.app
                <ArrowUpRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="rounded-3xl border border-border bg-card p-6 sm:p-8">
              <h2 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                Elsewhere
              </h2>
              <div className="mt-5 flex flex-wrap gap-2">
                {social.map((s) => {
                  const Icon = s.icon
                  return (
                    <Link
                      key={s.label}
                      href={s.href}
                      className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2 text-sm text-foreground/85 hover:border-primary/40 hover:text-primary transition"
                    >
                      <Icon className="h-3.5 w-3.5" />
                      {s.label}
                    </Link>
                  )
                })}
              </div>
            </div>
          </aside>
        </div>
      </Section>

      <div className="h-24" />
    </>
  )
}
