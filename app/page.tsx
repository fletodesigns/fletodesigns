import { Hero } from "@/components/home/hero"
import { LogoMarquee } from "@/components/home/logo-marquee"
import { StatsStrip } from "@/components/home/stats-strip"
import { EcosystemGrid } from "@/components/home/ecosystem-grid"
import { ProductsPreview } from "@/components/home/products-preview"
import { MediaSection } from "@/components/home/media-section"
import { CtaSection } from "@/components/home/cta-section"

export default function HomePage() {
  return (
    <>
      <Hero />
      <LogoMarquee />
      <EcosystemGrid />
      <ProductsPreview />
      <StatsStrip />
      <MediaSection />
      <CtaSection />
    </>
  )
}
