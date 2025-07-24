import { useTheme } from './ThemeProvider';
import { Button } from './ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { gsap } from 'gsap';

export function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // GSAP animation for dynamic island header
    gsap.fromTo('.dynamic-island', 
      { opacity: 0, y: -50, scale: 0.8 }, 
      { opacity: 1, y: 0, scale: 1, duration: 1, ease: 'back.out(1.7)' }
    );
  }, []);

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="fixed top-4 left-1/2 transform -translate-x-1/2 z-50">
      {/* Dynamic Island Container */}
      <div className="dynamic-island glass-card rounded-full px-6 py-3 border border-primary/30 backdrop-blur-xl bg-background/80 shadow-2xl">
        <div className="flex items-center justify-between min-w-[280px] md:min-w-[600px]">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="text-lg font-bold text-gradient">FLETO</div>
            <span className="text-xs text-muted-foreground hidden sm:block">designs</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link 
              to="/"
              className={`text-sm transition-colors ${
                isActive('/') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Home
            </Link>
            <Link 
              to="/services"
              className={`text-sm transition-colors ${
                isActive('/services') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Services
            </Link>
            <Link 
              to="/about"
              className={`text-sm transition-colors ${
                isActive('/about') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              About
            </Link>
            <Link 
              to="/contact"
              className={`text-sm transition-colors ${
                isActive('/contact') ? 'text-primary font-medium' : 'text-foreground hover:text-primary'
              }`}
            >
              Contact
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center space-x-2">
            <Button
              variant="ghost"
              size="sm"
              onClick={toggleTheme}
              className="rounded-full w-8 h-8 p-0 hover:bg-primary/20"
            >
              {theme === 'dark' ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </Button>
            
            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden rounded-full w-8 h-8 p-0"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 mt-2 mx-4">
          <div className="glass-card rounded-2xl p-4 border border-primary/30 backdrop-blur-xl bg-background/90">
            <nav className="flex flex-col space-y-3">
              <Link 
                to="/"
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  isActive('/') ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link 
                to="/services"
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  isActive('/services') ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Services
              </Link>
              <Link 
                to="/about"
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  isActive('/about') ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link 
                to="/contact"
                className={`text-sm py-2 px-3 rounded-lg transition-colors ${
                  isActive('/contact') ? 'text-primary bg-primary/10 font-medium' : 'text-foreground hover:text-primary hover:bg-primary/5'
                }`}
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}