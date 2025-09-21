import React, { useState, useEffect } from 'react';
import { cn } from '../lib/cn';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    if (id === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({ top: element.offsetTop - 80, behavior: 'smooth' });
      }
    }
  };

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
          ? 'py-3 bg-white/90 backdrop-blur-md border-b border-gray-200/20 shadow-sm'
          : 'py-5 bg-transparent'
      )}
    >
      <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
        <a
          href="#home"
          className="text-xl font-serif font-medium tracking-tight transition-opacity hover:opacity-80 cursor-pointer text-[#2f2a1e]"
        >
          Anuj Gupta
        </a>

        <div className="hidden md:flex items-center space-x-8">
          <NavLinks scrollToSection={scrollToSection} />
        </div>

        <button
          className="md:hidden flex flex-col justify-between w-6 h-5 cursor-pointer z-50"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {!isMobileMenuOpen && <Menu/>}
          {isMobileMenuOpen && <X/>}
        </button>
      </div>

      <div
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col pt-24 px-6 transition-transform duration-500 ease-in-out transform md:hidden",
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        )}
      >
        <button
          className="absolute top-5 right-5 p-2 cursor-pointer"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-label="Close menu"
        >
          <span className="block w-6 h-0.5 bg-[#faf9f6] rotate-45 translate-y-0.5" />
          <span className="block w-6 h-0.5 bg-[#faf9f6] -rotate-45" />
        </button>

        <nav className="flex flex-col space-y-6 text-lg">
          <a
            href="#home"
            className="hover:text-orangery-600 transition-colors cursor-pointer"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Home
          </a>
          <button
            className="text-left hover:text-orangery-600 transition-colors cursor-pointer"
            onClick={() => { scrollToSection('about'); setIsMobileMenuOpen(false); }}
          >
            About
          </button>
          <button
            className="text-left hover:text-orangery-600 transition-colors cursor-pointer"
            onClick={() => { scrollToSection('projects'); setIsMobileMenuOpen(false); }}
          >
            Projects
          </button>
          <button
            className="text-left hover:text-orangery-600 transition-colors cursor-pointer"
            onClick={() => { scrollToSection('contact'); setIsMobileMenuOpen(false); }}
          >
            Contact
          </button>
        </nav>
      </div>
    </header>
  );
};

const NavLinks = ({ scrollToSection }) => (
  <>
    <button
      className="text-sm font-medium hover:text-orangery-600 transition-colors cursor-pointer"
      onClick={() => scrollToSection('home')}
    >
      Home
    </button>
    <button
      className="text-sm font-medium hover:text-orangery-600 transition-colors cursor-pointer"
      onClick={() => scrollToSection('about')}
    >
      About
    </button>
    <button
      className="text-sm font-medium hover:text-orangery-600 transition-colors cursor-pointer"
      onClick={() => scrollToSection('projects')}
    >
      Projects
    </button>
    <button
      className="text-sm font-medium hover:text-orangery-600 transition-colors cursor-pointer"
      onClick={() => scrollToSection('contact')}
    >
      Contact
    </button>
  </>
);

export default Header;
