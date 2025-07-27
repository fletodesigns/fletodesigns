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
      {/* Seamless background transition with projects section */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background/95 to-background/50"></div>
      
      {/* Floating particles that extend into projects section */}
      <div className="absolute inset-0 opacity-40">
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/5 rounded-full blur-[120px] animate-float" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/3 right-1/5 w-48 h-48 bg-primary/15 rounded-full blur-2xl animate-float" style={{ animationDelay: '4s' }}></div>
        <div className="absolute bottom-1/4 left-1/3 w-64 h-64 bg-primary/8 rounded-full blur-[100px] animate-float" style={{ animationDelay: '1s' }}></div>
      </div>
      
      {/* Grid pattern that continues to projects section */}
      <div className="absolute inset-0 opacity-10">
        <div className="grid grid-cols-12 h-full w-full">
          {Array.from({ length: 144 }).map((_, i) => (
            <div 
              key={i} 
              className="border-r border-b border-primary/20 animate-pulse" 
              style={{ 
                animationDelay: `${(i * 0.1) % 3}s`,
                animationDuration: '4s'
              }}
            ></div>
          ))}
        </div>
      </div>
      
      {/* Flowing lines that connect to projects section */}
      <div className="absolute inset-0 opacity-30">
        <svg className="w-full h-full" viewBox="0 0 1200 800">
          <path 
            d="M 0,400 Q 300,300 600,400 T 1200,400" 
            stroke="hsl(var(--primary))" 
            strokeWidth="2" 
            fill="none" 
            opacity="0.4"
            className="animate-pulse"
          />
          <path 
            d="M 0,300 Q 400,200 800,300 T 1200,300" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1" 
            fill="none" 
            opacity="0.3"
            className="animate-pulse"
            style={{ animationDelay: '1s' }}
          />
          <path 
            d="M 0,500 Q 200,600 600,500 T 1200,500" 
            stroke="hsl(var(--primary))" 
            strokeWidth="1.5" 
            fill="none" 
            opacity="0.2"
            className="animate-pulse"
            style={{ animationDelay: '2s' }}
          />
        </svg>
      </div>
      
      {/* Project preview cards floating in background */}
      <div className="absolute bottom-20 left-8 w-32 h-20 glass-card rounded-lg opacity-20 animate-float border border-primary/20" style={{ animationDelay: '1s' }}></div>
      <div className="absolute bottom-32 right-12 w-28 h-16 glass-card rounded-lg opacity-15 animate-float border border-primary/10" style={{ animationDelay: '3s' }}></div>
      <div className="absolute bottom-40 left-1/3 w-24 h-14 glass-card rounded-lg opacity-25 animate-float border border-primary/30" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <h1 className="hero-title text-5xl md:text-7xl font-bold mb-6">
            <span className="text-foreground">We Build</span>
            <br />
            <span className="text-gradient">Digital Magic</span>
          </h1>

          {/* Subtitle */}
          <h2 className="hero-subtitle text-xl md:text-2xl text-muted-foreground mb-4">
            Transforming Ideas into Stunning Web Experiences
          </h2>

          {/* Description */}
          <p className="hero-description text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto">
            From concept to launch, we craft exceptional web applications that captivate users 
            and drive results. Experience the future of web development with FLETO Designs.
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