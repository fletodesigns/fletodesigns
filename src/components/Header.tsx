import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { gsap } from 'gsap';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    // GSAP animation for header
    gsap.fromTo('.header-logo', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' }
    );
    
    gsap.fromTo('.header-nav', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.8, delay: 0.1, ease: 'power2.out' }
    );
    
    gsap.fromTo('.header-actions', 
      { opacity: 0, y: -20 }, 
      { opacity: 1, y: 0, duration: 0.8, delay: 0.2, ease: 'power2.out' }
    );
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b border-primary/20">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="header-logo">
            <h1 className="text-2xl font-bold text-gradient">
              FLETO
            </h1>
            <p className="text-xs text-muted-foreground">designs</p>
          </div>

          {/* Desktop Navigation */}
          <nav className="header-nav hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('services')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Services
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-primary transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-primary transition-colors"
            >
              Contact
            </button>
          </nav>

          {/* Actions */}
          <div className="header-actions flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="fleto-glow"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pt-4 border-t border-primary/20">
            <div className="flex flex-col space-y-4">
              <button 
                onClick={() => scrollToSection('home')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Home
              </button>
              <button 
                onClick={() => scrollToSection('services')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Services
              </button>
              <button 
                onClick={() => scrollToSection('about')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                About
              </button>
              <button 
                onClick={() => scrollToSection('contact')}
                className="text-left text-foreground hover:text-primary transition-colors"
              >
                Contact
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  );
}