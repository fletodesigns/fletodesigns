import Link from "next/link"
import { FletoMark } from "./fleto-logo"

const groups: { title: string; links: { href: string; label: string; external?: boolean }[] }[] = [
  {
    title: "Ecosystem",
    links: [
      { href: "/products", label: "FLETO Labs" },
      { href: "/ecosystem#dev", label: "FLETO Dev" },
      { href: "/ecosystem#design", label: "FLETO Design" },
      { href: "/academy", label: "FLETO Academy" },
      { href: "/media", label: "FLETO Media" },
      { href: "/ecosystem#cast", label: "FLETO Cast" },
    ],
  },
  {
    title: "Products",
    links: [
      { href: "/products#fledrive", label: "Fledrive" },
      { href: "/products#flestorage", label: "Flestorage" },
      { href: "/products#flebooks", label: "Flebooks" },
      { href: "/products", label: "Changelog" },
      { href: "/products", label: "Status" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/about", label: "About" },
      { href: "/about#manifesto", label: "Manifesto" },
      { href: "/media", label: "Press" },
      { href: "/contact", label: "Contact" },
      { href: "/contact#careers", label: "Careers" },
    ],
  },
  {
    title: "Resources",
    links: [
      { href: "/academy", label: "Learn" },
      { href: "/media", label: "Articles" },
      { href: "/ecosystem#dev", label: "Open source" },
      { href: "/contact", label: "Support" },
    ],
  },
]

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border">
      <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-primary/40 to-transparent" />
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          <div className="col-span-2">
            <Link href="/" className="inline-flex items-center gap-2">
              <FletoMark className="h-7 w-7" />
              <span className="text-base font-semibold tracking-tight">FLETO</span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A digital product and media ecosystem. Building tools, content, and
              communities for the next generation of the web.
            </p>
            <div className="mt-6 flex items-center gap-2">
              <span className="inline-flex h-2 w-2 rounded-full bg-primary shadow-[0_0_12px_var(--primary)]" />
              <span className="text-xs text-muted-foreground">All systems operational</span>
            </div>
          </div>

          {groups.map((g) => (
            <div key={g.title}>
              <h3 className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">
                {g.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {g.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-sm text-foreground/80 hover:text-primary transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 pt-8 border-t border-border">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} FLETO Holdings. All rights reserved.
          </p>
          <div className="flex items-center gap-5 text-xs text-muted-foreground">
            <Link href="/" className="hover:text-foreground">Privacy</Link>
            <Link href="/" className="hover:text-foreground">Terms</Link>
            <Link href="/" className="hover:text-foreground">Security</Link>
            <Link href="/" className="hover:text-foreground">Cookies</Link>
          </div>
        </div>
      </div>

      {/* Big watermark */}
      <div
        aria-hidden
        className="pointer-events-none select-none overflow-hidden"
      >
        <div className="text-center font-sans font-semibold leading-none tracking-tighter text-[18vw] text-foreground/[0.03] -mb-[3vw]">
          FLETO
        </div>
      </div>
    </footer>
  )
}
