export type Division = {
  id: string
  name: string
  tagline: string
  description: string
  href: string
  status: "Live" | "Beta" | "Soon"
  hue: string
}

export const divisions: Division[] = [
  {
    id: "labs",
    name: "FLETO Labs",
    tagline: "Products that ship.",
    description:
      "The product studio inside FLETO. Home of Fledrive, Flestorage and Flebooks — software built for clarity and speed.",
    href: "/products",
    status: "Live",
    hue: "#CCFF00",
  },
  {
    id: "dev",
    name: "FLETO Dev",
    tagline: "Tools for builders.",
    description:
      "Open-source libraries, APIs, and developer infrastructure. Composable, well-documented, production-ready.",
    href: "/ecosystem#dev",
    status: "Live",
    hue: "#A3E635",
  },
  {
    id: "design",
    name: "FLETO Design",
    tagline: "A system, not a sticker.",
    description:
      "UI kits, design systems and templates that compose into real interfaces — not just decoration.",
    href: "/ecosystem#design",
    status: "Live",
    hue: "#84CC16",
  },
  {
    id: "academy",
    name: "FLETO Academy",
    tagline: "Learn what ships.",
    description:
      "Courses and learning paths taught by people who actually build. Practical, opinionated, modern.",
    href: "/academy",
    status: "Beta",
    hue: "#BEF264",
  },
  {
    id: "media",
    name: "FLETO Media",
    tagline: "Words, weekly.",
    description:
      "A webzine of essays, interviews, and dispatches from the edge of product, design, and engineering.",
    href: "/media",
    status: "Live",
    hue: "#D9F99D",
  },
  {
    id: "cast",
    name: "FLETO Cast",
    tagline: "Conversations that matter.",
    description:
      "A podcast on craft, taste, and the people building the next generation of the web.",
    href: "/ecosystem#cast",
    status: "Soon",
    hue: "#ECFCCB",
  },
]

export const products = [
  {
    id: "fledrive",
    name: "Fledrive",
    role: "Cloud Drive",
    summary:
      "A fast, end-to-end encrypted drive built for teams that care about ownership.",
    features: [
      "End-to-end encrypted by default",
      "Granular team permissions",
      "Real-time collaborative folders",
      "Native macOS, Windows & Linux apps",
    ],
    cta: "Open Fledrive",
    href: "#fledrive",
  },
  {
    id: "flestorage",
    name: "Flestorage",
    role: "Object Storage",
    summary:
      "Developer-first object storage with predictable pricing and zero egress lock-in.",
    features: [
      "S3-compatible API",
      "Edge-cached buckets globally",
      "First-class TypeScript SDK",
      "Per-bucket signing keys",
    ],
    cta: "Read the docs",
    href: "#flestorage",
  },
  {
    id: "flebooks",
    name: "Flebooks",
    role: "Reading & Notes",
    summary:
      "A reading app that doubles as a thinking tool — your library, highlights, and notes in one calm space.",
    features: [
      "Sync across all devices",
      "Smart highlights & atomic notes",
      "EPUB, PDF & web articles",
      "Export to Markdown",
    ],
    cta: "Try Flebooks",
    href: "#flebooks",
  },
] as const

export const stats = [
  { value: "6", label: "Divisions" },
  { value: "12+", label: "Shipping products" },
  { value: "84k", label: "Developers building on FLETO" },
  { value: "27", label: "Countries" },
]
