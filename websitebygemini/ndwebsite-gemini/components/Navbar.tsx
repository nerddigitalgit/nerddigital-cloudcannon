import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-nerd-light/95 backdrop-blur-sm border-b border-nerd-border py-4' : 'bg-transparent py-6'
      }`}
    >
      <div className="container mx-auto px-6 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <a href="#/">
            <img src="/images/nerddigital-logo-250.png" alt="NerdDigital" className="h-4 md:h-5" />
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a
            href="#/about"
            className="btn-primary px-6 py-2.5"
            style={{ fontSize: '0.6rem' }}
          >
            Work with Us
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-nerd-dark"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-white border-b border-nerd-border p-6 md:hidden flex flex-col gap-4">
          <a
            href="#/about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="btn-primary px-6 py-3 text-center"
            style={{ fontSize: '0.6rem' }}
          >
            Work with Us
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
