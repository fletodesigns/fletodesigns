const partners = [
  "northwave",
  "kaleo",
  "axion labs",
  "monolith",
  "halocode",
  "tessera",
  "noctua",
  "metric",
  "polymath",
  "atlas/co",
  "ferment",
  "lumen",
]

export function LogoMarquee() {
  return (
    <section
      aria-label="Trusted by"
      className="relative border-y border-border py-10"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-xs uppercase tracking-[0.18em] text-muted-foreground">
          Used by teams shipping software at
        </p>
      </div>
      <div
        className="relative mt-6 overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]"
        aria-hidden
      >
        <div className="flex w-max animate-marquee gap-12 px-6">
          {[...partners, ...partners].map((p, i) => (
            <span
              key={`${p}-${i}`}
              className="font-sans text-xl sm:text-2xl font-semibold tracking-tight text-foreground/40 hover:text-foreground transition-colors whitespace-nowrap"
            >
              {p}
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}
