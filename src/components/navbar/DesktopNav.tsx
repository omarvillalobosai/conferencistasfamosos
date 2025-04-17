
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SpeakersDropdown from './SpeakersDropdown';

type DesktopNavProps = {
  onQuoteClick: (e: React.MouseEvent) => void;
};

const DesktopNav = ({ onQuoteClick }: DesktopNavProps) => {
  const [showSpeakersDropdown, setShowSpeakersDropdown] = useState(false);
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      <Link to="/#quienes-somos" className="font-medium text-gray-700 hover:text-orange-500 transition-colors">
        Quiénes Somos
      </Link>
      
      <SpeakersDropdown 
        showDropdown={showSpeakersDropdown} 
        setShowDropdown={setShowSpeakersDropdown} 
      />
      
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
      <a href="#contacto" onClick={onQuoteClick}>
        <Button className="bg-orange-500 hover:bg-orange-600">Cotizar ahora</Button>
      </a>
    </nav>
  );
};

export default DesktopNav;
