import { useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Code, Palette, Zap, Sparkles, Globe, Rocket } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  useEffect(() => {
    // Initial loading animations
    const tl = gsap.timeline();
    
    tl.fromTo('.hero-title', 
      { opacity: 0, y: 100, scale: 0.8 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1.2, ease: 'back.out(1.7)' }
    )
    .fromTo('.hero-subtitle', 
      { opacity: 0, x: -50 }, 
      { opacity: 1, x: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.8'
    )
    .fromTo('.hero-description', 
      { opacity: 0, y: 30 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.6'
    )
    .fromTo('.hero-stats', 
      { opacity: 0, scale: 0.5 }, 
      { opacity: 1, scale: 1, duration: 1, ease: 'elastic.out(1, 0.5)', stagger: 0.1 }, 
      '-=0.4'
    )
    .fromTo('.hero-cta', 
      { opacity: 0, y: 50 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }, 
      '-=0.6'
    );

    // Scroll-triggered animations
    gsap.to('.parallax-bg', {
      yPercent: -50,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });

    gsap.to('.floating-element', {
      y: -100,
      rotation: 10,
      ease: 'none',
      scrollTrigger: {
        trigger: '.hero-section',
        start: 'top bottom',
        end: 'bottom top',
        scrub: 1
      }
    });

    // Continuous floating animations
    gsap.to('.float-continuous', {
      y: -15,
      duration: 3,
      ease: 'power1.inOut',
      yoyo: true,
      repeat: -1,
      stagger: 0.3
    });

    // Stats counter animation
    gsap.fromTo('.counter', 
      { textContent: 0 },
      {
        textContent: (i, target) => target.getAttribute('data-target'),
        duration: 2,
        ease: 'power2.out',
        snap: { textContent: 1 },
        scrollTrigger: {
          trigger: '.hero-stats',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="hero-section min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic parallax background layers */}
      <div className="absolute inset-0 parallax-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10"></div>
        <div className="absolute inset-0 bg-gradient-to-tl from-transparent via-primary/5 to-transparent"></div>
      </div>
      
      {/* Animated mesh grid */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent transform rotate-12"></div>
        <div className="absolute inset-0 bg-gradient-to-l from-transparent via-primary/5 to-transparent transform -rotate-12"></div>
      </div>
      
      {/* Dynamic floating elements */}
      <div className="absolute inset-0">
        <div className="floating-element absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary/20 to-primary/5 rounded-full blur-xl float-continuous"></div>
        <div className="floating-element absolute top-40 right-20 w-24 h-24 bg-gradient-to-tl from-primary/15 to-primary/3 rounded-full blur-lg float-continuous"></div>
        <div className="floating-element absolute bottom-32 left-1/4 w-40 h-40 bg-gradient-to-tr from-primary/10 to-transparent rounded-full blur-2xl float-continuous"></div>
        <div className="floating-element absolute bottom-20 right-1/3 w-28 h-28 bg-gradient-to-bl from-primary/25 to-primary/5 rounded-full blur-xl float-continuous"></div>
        <div className="floating-element absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 bg-gradient-to-r from-primary/5 to-primary/10 rounded-full blur-3xl float-continuous"></div>
      </div>
      
      {/* Geometric patterns with scroll animation */}
      <div className="absolute inset-0 opacity-30">
        <div className="floating-element absolute top-1/4 left-1/6 w-2 h-32 bg-gradient-to-b from-primary to-transparent"></div>
        <div className="floating-element absolute bottom-1/4 right-1/6 w-2 h-32 bg-gradient-to-t from-primary to-transparent"></div>
        <div className="floating-element absolute top-1/2 right-20 w-32 h-2 bg-gradient-to-l from-primary to-transparent"></div>
        <div className="floating-element absolute top-1/3 left-20 w-32 h-2 bg-gradient-to-r from-primary to-transparent"></div>
      </div>
      
      {/* Interactive code snippets in background */}
      <div className="absolute inset-0 opacity-5">
        <div className="floating-element absolute top-1/4 right-1/4 glass-card p-4 rounded-lg font-mono text-xs">
          <div className="text-primary">{'<div className="hero">'}</div>
          <div className="ml-4 text-muted-foreground">{'/* Magic happens here */'}</div>
          <div className="text-primary">{'</div>'}</div>
        </div>
        <div className="floating-element absolute bottom-1/3 left-1/5 glass-card p-4 rounded-lg font-mono text-xs">
          <div className="text-primary">{'const build = () => {'}</div>
          <div className="ml-4 text-muted-foreground">{'return <Amazing />'}</div>
          <div className="text-primary">{'}'}</div>
        </div>
      </div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* New enhanced heading */}
          <div className="mb-8">
            <div className="hero-title">
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="text-foreground">Crafting</span>
                <br />
                <span className="text-gradient inline-flex items-center gap-4">
                  Digital Excellence
                  <Sparkles className="h-12 w-12 md:h-16 md:w-16 text-primary animate-pulse" />
                </span>
              </h1>
            </div>
            
            <h2 className="hero-subtitle text-2xl md:text-3xl text-muted-foreground mb-6 max-w-3xl mx-auto">
              Where Innovation Meets Artistry in Web Development
            </h2>
          </div>

          {/* Enhanced stats section */}
          <div className="hero-stats grid grid-cols-3 gap-8 mb-12 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary counter" data-target="50">0</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary counter" data-target="98">0</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary counter" data-target="24">0</div>
              <div className="text-sm text-muted-foreground">Support Hours</div>
            </div>
          </div>

          {/* Updated description */}
          <p className="hero-description text-xl md:text-2xl text-foreground/80 mb-12 max-w-3xl mx-auto leading-relaxed">
            We don't just build websites – we create digital experiences that inspire, engage, and convert. 
            Every pixel, every interaction, crafted with purpose and passion.
          </p>

          {/* Enhanced CTA Section */}
          <div className="hero-cta mb-16 flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-10 py-6 text-xl fleto-glow"
              asChild
            >
              <Link to="/services">
                <Rocket className="mr-3 h-6 w-6" />
                Start Your Project
                <ArrowRight className="ml-3 h-6 w-6" />
              </Link>
            </Button>
            
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/30 hover:bg-primary/10 px-10 py-6 text-xl"
              asChild
            >
              <Link to="/about">
                <Globe className="mr-3 h-6 w-6" />
                Explore Our Story
              </Link>
            </Button>
          </div>

          {/* Redesigned feature showcase */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="glass-card p-8 rounded-xl float-continuous group hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Code className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Clean Architecture</h3>
              <p className="text-muted-foreground leading-relaxed">
                Scalable, maintainable code that stands the test of time and growth.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl float-continuous group hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Palette className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Stunning Design</h3>
              <p className="text-muted-foreground leading-relaxed">
                Beautiful interfaces that captivate users and enhance experiences.
              </p>
            </div>
            
            <div className="glass-card p-8 rounded-xl float-continuous group hover:scale-105 transition-all duration-300">
              <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:bg-primary/20 transition-colors">
                <Zap className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-3">Lightning Speed</h3>
              <p className="text-muted-foreground leading-relaxed">
                Optimized performance that delivers exceptional user experiences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}