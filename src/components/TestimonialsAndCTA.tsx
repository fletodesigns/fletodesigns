import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight, Quote } from 'lucide-react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'FLETO transformed our vision into a stunning web application. Their attention to detail and technical expertise is unmatched.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Product Manager, InnovateCorp',
    content: 'Working with FLETO was a game-changer for our business. They delivered beyond our expectations with incredible speed.',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Founder, Creative Studio',
    content: 'The team at FLETO doesn\'t just build websites, they craft digital experiences. Highly recommended!',
    rating: 5
  }
];

export function TestimonialsAndCTA() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    gsap.fromTo('.testimonials-title', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.testimonials-title',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.testimonial-card', 
      { opacity: 0, scale: 0.9 }, 
      { 
        opacity: 1, 
        scale: 1,
        duration: 0.8, 
        ease: 'back.out(1.7)',
        scrollTrigger: {
          trigger: '.testimonial-card',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.cta-section', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.cta-section',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const currentTest = testimonials[currentTestimonial];

  return (
    <section className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Testimonials */}
        <div className="text-center mb-16">
          <h2 className="testimonials-title text-4xl md:text-5xl font-bold mb-4">
            What Our <span className="text-gradient">Clients Say</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-20">
          <div className="testimonial-card glass-card p-8 md:p-12 rounded-2xl text-center relative overflow-hidden">
            {/* Quote icon */}
            <div className="absolute top-6 left-6 opacity-20">
              <Quote className="h-12 w-12 text-primary" />
            </div>
            
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTest.rating)].map((_, i) => (
                <div key={i} className="w-5 h-5 text-yellow-400 fill-current">
                  ⭐
                </div>
              ))}
            </div>

            {/* Testimonial content */}
            <blockquote className="text-xl md:text-2xl text-foreground mb-8 font-medium leading-relaxed">
              "{currentTest.content}"
            </blockquote>

            {/* Author */}
            <div className="border-t border-primary/20 pt-6">
              <div className="font-bold text-foreground text-lg">{currentTest.name}</div>
              <div className="text-muted-foreground">{currentTest.role}</div>
            </div>

            {/* Testimonial indicators */}
            <div className="flex justify-center space-x-2 mt-8">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentTestimonial ? 'bg-primary' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="cta-section text-center">
          <div className="glass-card p-8 md:p-12 rounded-2xl max-w-3xl mx-auto relative overflow-hidden">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary/10 to-accent/10 opacity-50"></div>
            
            <div className="relative z-10">
              <h3 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                Ready to Build Something <span className="text-gradient">Amazing?</span>
              </h3>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your project and bring your vision to life with cutting-edge technology and stunning design.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button 
                  size="lg" 
                  className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold px-8 py-4 fleto-glow"
                  asChild
                >
                  <Link to="/contact">
                    Start Your Project
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-primary/30 hover:bg-primary/10 px-8 py-4"
                  asChild
                >
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}