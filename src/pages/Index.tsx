import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { ProjectsPreview } from "@/components/ProjectsPreview";
import { StatsAndTech } from "@/components/StatsAndTech";
import { TestimonialsAndCTA } from "@/components/TestimonialsAndCTA";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <ProjectsPreview />
        <StatsAndTech />
        <TestimonialsAndCTA />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
