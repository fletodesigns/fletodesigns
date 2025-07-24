import { useEffect, useState } from 'react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, MessageSquare, Send, Phone, MapPin } from 'lucide-react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useToast } from '@/hooks/use-toast';

gsap.registerPlugin(ScrollTrigger);

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  useEffect(() => {
    gsap.fromTo('.contact-title', 
      { opacity: 0, y: 50 }, 
      { 
        opacity: 1, 
        y: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-title',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.contact-form', 
      { opacity: 0, x: -50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-form',
          start: 'top 80%',
        }
      }
    );

    gsap.fromTo('.contact-info', 
      { opacity: 0, x: 50 }, 
      { 
        opacity: 1, 
        x: 0, 
        duration: 1, 
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '.contact-info',
          start: 'top 80%',
        }
      }
    );
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to your backend
    console.log('Form submitted:', formData);
    
    toast({
      title: "Message sent!",
      description: "Thank you for reaching out. We'll get back to you soon.",
    });

    // Reset form
    setFormData({ name: '', email: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <section id="contact" className="py-20 relative">
      <div className="container mx-auto px-4">
        {/* Section title */}
        <div className="text-center mb-16">
          <h2 className="contact-title text-4xl md:text-5xl font-bold mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to start your next project? Let's discuss how we can help bring your vision to life.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="contact-form glass-card p-8 rounded-xl">
            <h3 className="text-2xl font-bold text-foreground mb-6 flex items-center">
              <MessageSquare className="mr-3 h-6 w-6 text-primary" />
              Send us a message
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                  Email Address
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="bg-background/50 border-primary/20 focus:border-primary"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  required
                  value={formData.message}
                  onChange={handleChange}
                  className="bg-background/50 border-primary/20 focus:border-primary min-h-[120px]"
                  placeholder="Tell us about your project..."
                />
              </div>

              <Button 
                type="submit" 
                size="lg" 
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground fleto-glow"
              >
                Send Message
                <Send className="ml-2 h-5 w-5" />
              </Button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="contact-info space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Let's start a conversation
              </h3>
              <p className="text-lg text-foreground/80 mb-8">
                We're excited to learn about your project and explore how we can help. 
                Whether you need a complete web application or want to enhance an existing platform, 
                we're here to make it happen.
              </p>
            </div>

            {/* Contact methods */}
            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Mail className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Email</h4>
                    <p className="text-muted-foreground">hello@fletodesigns.com</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <Phone className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Phone</h4>
                    <p className="text-muted-foreground">+1 (555) 123-4567</p>
                  </div>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center mr-4">
                    <MapPin className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">Location</h4>
                    <p className="text-muted-foreground">Remote & Worldwide</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Response time */}
            <div className="glass-card p-6 rounded-xl bg-primary/5 border-primary/20">
              <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
              <p className="text-sm text-muted-foreground">
                We typically respond to all inquiries within 24 hours during business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}