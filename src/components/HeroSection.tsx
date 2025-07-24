import { useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Code, Palette, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';

export function HeroSection() {
  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 1, ease: 'power2.out' }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.5'
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.4'
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.3'
    )
    .fromTo('.hero-features', 
      { opacity: 0, scale: 0.8 }, 
      { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(1.7)' }, 
      '-=0.2'
    );

    // Floating animation for icons
    gsap.to('.float-icon', {
      y: -10,
      duration: 2,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.2
    });
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 hero-gradient opacity-50"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl animate-float" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-primary/30 rounded-full blur-lg animate-float" style={{ animationDelay: '4s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            <span className="text-gradient">FLETO</span>
            <br />
            <span className="text-foreground">Designs</span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-4">
            Crafting Digital Experiences
          </h2>

          {/* Description */}
          <p className="hero-description text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            We create stunning, modern web applications with cutting-edge technology 
            and beautiful design. Your vision, our expertise.
          </p>

          {/* CTA Button */}
          <div className="hero-cta mb-12">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-6 text-lg fleto-glow"
              asChild
            >
              <Link to="/services">
                Explore Our Work
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

          {/* Feature icons */}
          <div className="hero-features grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="glass-card p-6 rounded-lg float-icon">
              <Code className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Clean Code</h3>
              <p className="text-sm text-muted-foreground">Modern, scalable architecture</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg float-icon">
              <Palette className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Beautiful Design</h3>
              <p className="text-sm text-muted-foreground">Stunning visual experiences</p>
            </div>
            
            <div className="glass-card p-6 rounded-lg float-icon">
              <Zap className="h-8 w-8 text-primary mx-auto mb-3" />
              <h3 className="font-semibold text-foreground">Fast Performance</h3>
              <p className="text-sm text-muted-foreground">Optimized for speed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}