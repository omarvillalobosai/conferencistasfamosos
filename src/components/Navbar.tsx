
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteWizard from '@/components/QuoteWizard';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setWizardOpen(true);
    setIsOpen(false);
  };
  
  return (
    <>
      <header 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-md py-2' 
            : 'bg-transparent py-4'
        }`}
      >
        <div className="container mx-auto flex justify-between items-center">
          <Link to="/" className="flex items-center">
            <span className="text-xl md:text-2xl font-bold text-gray-900">
              Conferencistas<span className="text-orange-500">Famosos</span>
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link to="/#quienes-somos" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Quiénes Somos
            </Link>
            <Link to="/#conferencistas" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Conferencistas
            </Link>
            <Link to="/#destacado" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Omar Villalobos
            </Link>
            <Link to="/#testimonios" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Testimonios
            </Link>
            <Link to="/blog" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Blog
            </Link>
            <a href="#contacto" onClick={handleQuoteClick}>
              <Button className="bg-orange-500 hover:bg-orange-600">Cotizar ahora</Button>
            </a>
          </nav>
          
          {/* Mobile Navigation Toggle */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-orange-500"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation Menu */}
        {isOpen && (
          <div className="md:hidden bg-white shadow-lg animate-fade-in">
            <div className="container mx-auto py-4 space-y-4">
              <Link 
                to="/#quienes-somos" 
                className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Quiénes Somos
              </Link>
              <Link 
                to="/#conferencistas" 
                className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Conferencistas
              </Link>
              <Link 
                to="/#destacado" 
                className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Omar Villalobos
              </Link>
              <Link 
                to="/#testimonios" 
                className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Testimonios
              </Link>
              <Link 
                to="/blog" 
                className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Blog
              </Link>
              <a 
                href="#contacto"
                onClick={handleQuoteClick}
                className="block"
              >
                <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar ahora</Button>
              </a>
            </div>
          </div>
        )}
      </header>

      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default Navbar;
