import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'backdrop-blur-cinematic border-b border-border/20' 
          : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link 
            to="/" 
            className="text-2xl font-bold text-gradient hover:opacity-80 transition-opacity"
          >
            Alexx Zander Johnson
          </Link>
          
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('home')}
              className="text-foreground hover:text-neon-purple transition-colors"
            >
              Home
            </button>
            <button 
              onClick={() => scrollToSection('music')}
              className="text-foreground hover:text-neon-purple transition-colors"
            >
              Music
            </button>
            <button 
              onClick={() => scrollToSection('events')}
              className="text-foreground hover:text-neon-purple transition-colors"
            >
              Events
            </button>
            <button 
              onClick={() => scrollToSection('about')}
              className="text-foreground hover:text-neon-purple transition-colors"
            >
              About
            </button>
            <button 
              onClick={() => scrollToSection('contact')}
              className="text-foreground hover:text-neon-purple transition-colors"
            >
              Contact
            </button>
          </div>

          {/* Mobile menu button */}
          <button className="md:hidden text-foreground">
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </nav>
    </header>
  );
}
