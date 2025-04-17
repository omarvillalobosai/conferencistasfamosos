
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import QuoteWizard from '@/components/QuoteWizard';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  const [showSpeakersDropdown, setShowSpeakersDropdown] = useState(false);
  
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
            <div className="relative group">
              <button 
                className="font-medium text-gray-700 hover:text-orange-500 transition-colors flex items-center"
                onMouseEnter={() => setShowSpeakersDropdown(true)}
                onMouseLeave={() => setShowSpeakersDropdown(false)}
              >
                Conferencistas
                <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {showSpeakersDropdown && (
                <div 
                  className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20"
                  onMouseEnter={() => setShowSpeakersDropdown(true)}
                  onMouseLeave={() => setShowSpeakersDropdown(false)}
                >
                  <Link to="/speaker/omar-villalobos" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                    Omar Villalobos
                  </Link>
                  <Link to="/speaker/yordi-rosado" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                    Yordi Rosado
                  </Link>
                  <Link to="/speaker/daniel-habif" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                    Daniel Habif
                  </Link>
                  <Link to="/speaker/gaby-vargas" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                    Gaby Vargas
                  </Link>
                  <Link to="/speaker/vilma-nunez" className="block px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500">
                    Vilma Núñez
                  </Link>
                  <Link to="/#conferencistas" className="block px-4 py-2 text-gray-500 hover:bg-orange-50 hover:text-orange-500 border-t border-gray-100">
                    Ver todos
                  </Link>
                </div>
              )}
            </div>
            <Link to="/#destacado" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Omar Villalobos
            </Link>
            <Link to="/#testimonios" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Testimonios
            </Link>
            <Link to="/videos" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
              Videos
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
              
              <div className="py-2">
                <button 
                  onClick={() => setShowSpeakersDropdown(!showSpeakersDropdown)}
                  className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-orange-500 transition-colors"
                >
                  <span>Conferencistas</span>
                  <svg 
                    className={`w-4 h-4 transform ${showSpeakersDropdown ? 'rotate-180' : 'rotate-0'}`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </button>
                
                {showSpeakersDropdown && (
                  <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
                    <Link 
                      to="/speaker/omar-villalobos" 
                      className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Omar Villalobos
                    </Link>
                    <Link 
                      to="/speaker/yordi-rosado" 
                      className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Yordi Rosado
                    </Link>
                    <Link 
                      to="/speaker/daniel-habif" 
                      className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Daniel Habif
                    </Link>
                    <Link 
                      to="/speaker/gaby-vargas" 
                      className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Gaby Vargas
                    </Link>
                    <Link 
                      to="/speaker/vilma-nunez" 
                      className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Vilma Núñez
                    </Link>
                    <Link 
                      to="/#conferencistas" 
                      className="block font-medium text-gray-500 hover:text-orange-500 transition-colors py-1"
                      onClick={() => setIsOpen(false)}
                    >
                      Ver todos
                    </Link>
                  </div>
                )}
              </div>
              
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
                to="/videos" 
                className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
                onClick={() => setIsOpen(false)}
              >
                Videos
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
