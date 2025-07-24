import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Users, Target, Award, Lightbulb } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, label: 'Happy Clients', value: '50+' },
  { icon: Target, label: 'Projects Completed', value: '100+' },
  { icon: Award, label: 'Years Experience', value: '5+' },
  { icon: Lightbulb, label: 'Technologies', value: '20+' }
];

const values = [
  {
    title: 'Innovation',
    description: 'We stay ahead of the curve with cutting-edge technologies and creative solutions.'
  },
  {
    title: 'Quality',
    description: 'Every project is crafted with attention to detail and commitment to excellence.'
  },
  {
    title: 'Collaboration',
    description: 'We work closely with our clients to understand their vision and bring it to life.'
  },
  {
    title: 'Impact',
    description: 'Our solutions are designed to make a meaningful difference for businesses and users.'
  }
];

export function AboutSection() {
  useEffect(() => {
    // Animate section elements
    gsap.fromTo('.about-title', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-title',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.about-content', 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.about-content',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.stat-item', 
      { opacity: 0, y: 30, scale: 0.8 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.6, 
        ease: 'back.out(1.7)',
        stagger: 0.1,
        scrollTrigger: {
          trigger: '.stats-grid',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.value-card', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 0.8, 
        ease: 'power2.out',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.values-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="about-title text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-gradient">FLETO</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Passionate developers creating exceptional digital experiences
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="about-content">
            <h3 className="text-3xl font-bold text-foreground mb-6">
              Crafting the Future of Web Development
            </h3>
            <div className="space-y-4 text-lg text-foreground/80">
              <p>
                At FLETO Designs, we're more than just developers – we're digital craftsmen 
                who transform ideas into extraordinary web experiences. Our team combines 
                technical expertise with creative vision to deliver solutions that don't 
                just meet expectations, but exceed them.
              </p>
              <p>
                We specialize in modern web technologies, from React and TypeScript to 
                advanced animations and glass morphism designs. Every project is an 
                opportunity to push boundaries and create something remarkable.
              </p>
              <p>
                Our portfolio speaks for itself: from digital libraries to cloud storage 
                solutions, we've helped businesses and individuals bring their visions to life 
                with cutting-edge technology and beautiful design.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="stats-grid grid grid-cols-2 gap-6">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon;
              return (
                <div key={stat.label} className="stat-item glass-card p-6 rounded-xl text-center">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mx-auto mb-4">
                    <IconComponent className="h-6 w-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-gradient mb-2">{stat.value}</div>
                  <div className="text-sm text-muted-foreground">{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Values */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">Our Values</h3>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            The principles that drive everything we do
          </p>
        </div>

        <div className="values-grid grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {values.map((value, index) => (
            <div key={value.title} className="value-card glass-card p-6 rounded-xl">
              <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}