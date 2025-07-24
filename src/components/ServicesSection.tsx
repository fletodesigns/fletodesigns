import { useEffect } from 'react';
import { Button } from './ui/button';
import { ExternalLink, BookOpen, Archive, Search } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const projects = [
  {
    title: 'FleBooks',
    description: 'A modern digital library platform with advanced search and reading features',
    url: 'https://flebooks.netlify.app',
    icon: BookOpen,
    color: 'from-blue-500 to-purple-600',
    tags: ['React', 'Library', 'E-books']
  },
  {
    title: 'FleStorage',
    description: 'Cloud storage solution with intuitive file management and sharing capabilities',
    url: 'https://flestorage.netlify.app',
    icon: Archive,
    color: 'from-green-500 to-blue-500',
    tags: ['Cloud', 'Storage', 'File Management']
  },
  {
    title: 'FleSearch',
    description: 'Powerful search engine with smart algorithms and beautiful interface',
    url: 'https://flesearch.netlify.app',
    icon: Search,
    color: 'from-orange-500 to-red-500',
    tags: ['Search', 'AI', 'Web App']
  }
];

export function ServicesSection() {
  useEffect(() => {
    // Animate section title
    gsap.fromTo('.services-title', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.services-title',
          start: 'top 80%',
        }
      }
    );

    // Animate project cards
    gsap.fromTo('.project-card', 
      { opacity: 0, y: 50, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.projects-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section id="services" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="services-title text-4xl md:text-5xl font-bold mb-4">
            Our <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Explore our portfolio of innovative web applications and digital solutions
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projects.map((project, index) => {
            const IconComponent = project.icon;
            return (
              <div 
                key={project.title}
                className="project-card group glass-card p-6 rounded-xl hover:scale-105 transition-all duration-300 relative overflow-hidden"
              >
                {/* Background gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}></div>
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="mb-6">
                    <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span 
                        key={tag}
                        className="px-3 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA */}
                  <Button 
                    variant="outline" 
                    className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                    onClick={() => window.open(project.url, '_blank')}
                  >
                    Visit Project
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="glass-card p-8 rounded-xl max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Ready to start your project?
            </h3>
            <p className="text-muted-foreground mb-6">
              Let's bring your vision to life with cutting-edge technology and stunning design
            </p>
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground fleto-glow"
              asChild
            >
              <Link to="/contact">Get Started</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}