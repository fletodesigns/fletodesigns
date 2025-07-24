import { useEffect } from 'react';
import { Button } from './ui/button';
import { ArrowRight, ExternalLink, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const featuredProjects = [
  {
    title: 'FleBooks',
    description: 'Digital library platform with advanced search capabilities',
    url: 'https://flebooks.vercel.app',
    image: '/favicon.ico',
    tags: ['React', 'TypeScript', 'Library']
  },
  {
    title: 'FleStorage',
    description: 'Cloud storage solution with intuitive file management',
    url: 'https://flestorage.vercel.app', 
    image: '/api/placeholder/400/250',
    tags: ['Cloud', 'Storage', 'React']
  },
  {
    title: 'FleSearch',
    description: 'Powerful search engine with smart algorithms',
    url: 'https://flesearch.netlify.app',
    image: '/api/placeholder/400/250', 
    tags: ['Search', 'AI', 'Web App']
  }
];

export function ProjectsPreview() {
  useEffect(() => {
    gsap.fromTo('.projects-preview-title', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.projects-preview-title',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.project-preview-card', 
      { opacity: 0, y: 50, scale: 0.9 }, 
      { 
        opacity: 1, 
        y: 0, 
        scale: 1,
        duration: 0.8, 
        ease: 'back.out(1.7)',
        stagger: 0.2,
        scrollTrigger: {
          trigger: '.projects-preview-grid',
          start: 'top 80%',
        }
      }
    );
  }, []);

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="projects-preview-title text-4xl md:text-5xl font-bold mb-4">
            Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Discover some of our most innovative and successful web applications
          </p>
        </div>

        {/* Projects grid */}
        <div className="projects-preview-grid grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-12">
          {featuredProjects.map((project, index) => (
            <div 
              key={project.title}
              className="project-preview-card group glass-card rounded-xl overflow-hidden hover:scale-105 transition-all duration-300"
            >
              {/* Project image placeholder */}
              <div className="h-48 bg-gradient-to-br from-primary/20 to-accent/20 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-xl font-bold text-foreground">{project.title}</h3>
                </div>
                <Button
                  size="sm"
                  variant="secondary"
                  className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  <ExternalLink className="h-4 w-4" />
                </Button>
              </div>

              {/* Project content */}
              <div className="p-6">
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span 
                      key={tag}
                      className="px-2 py-1 text-xs bg-primary/10 text-primary rounded-full border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <Button 
                  variant="outline" 
                  size="sm"
                  className="w-full group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
                  onClick={() => window.open(project.url, '_blank')}
                >
                  View Project
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA to full projects page */}
        <div className="text-center">
          <Button 
            size="lg" 
            variant="outline"
            className="border-primary/30 hover:bg-primary hover:text-primary-foreground"
            asChild
          >
            <Link to="/services">
              View All Projects
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}