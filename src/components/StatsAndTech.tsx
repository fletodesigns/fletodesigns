import { useEffect } from 'react';
import { Star, Users, Award, Zap } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { icon: Users, label: 'Happy Clients', value: '50+', color: 'from-blue-500 to-cyan-500' },
  { icon: Award, label: 'Projects Delivered', value: '100+', color: 'from-purple-500 to-pink-500' },
  { icon: Zap, label: 'Years Experience', value: '5+', color: 'from-orange-500 to-red-500' },
  { icon: Star, label: 'Client Satisfaction', value: '99%', color: 'from-green-500 to-emerald-500' }
];

const technologies = [
  'React', 'TypeScript', 'Next.js', 'Node.js', 'Python', 'MongoDB', 
  'PostgreSQL', 'AWS', 'Docker', 'Kubernetes', 'GraphQL', 'REST APIs'
];

export function StatsAndTech() {
  useEffect(() => {
    gsap.fromTo('.stats-title', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.stats-title',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.stat-card', 
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

    gsap.fromTo('.tech-tag', 
      { opacity: 0, scale: 0.8 }, 
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.5, 
        ease: 'power2.out',
        stagger: 0.05,
        scrollTrigger: {
          trigger: '.tech-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 left-10 w-24 h-24 bg-accent/10 rounded-full blur-2xl"></div>
      
      <div className="container mx-auto px-4">
        {/* Stats section */}
        <div className="text-center mb-16">
          <h2 className="stats-title text-4xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gradient">Businesses</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Our track record speaks for itself
          </p>
        </div>

        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-20">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={stat.label} className="stat-card glass-card p-6 rounded-xl text-center group hover:scale-105 transition-transform duration-300">
                <div className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-lg flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <IconComponent className="h-6 w-6 text-white" />
                </div>
                <div className="text-3xl font-bold text-gradient mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            );
          })}
        </div>

        {/* Technologies section */}
        <div className="text-center mb-12">
          <h3 className="text-3xl font-bold text-foreground mb-4">
            Our <span className="text-gradient">Tech Stack</span>
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
            We work with cutting-edge technologies to deliver exceptional results
          </p>
        </div>

        <div className="tech-grid flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
          {technologies.map((tech, index) => (
            <span 
              key={tech}
              className="tech-tag px-4 py-2 glass-card rounded-full text-sm font-medium text-foreground hover:text-primary hover:border-primary/50 transition-all duration-300 cursor-default"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}