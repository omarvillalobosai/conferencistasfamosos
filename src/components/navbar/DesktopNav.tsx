
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SpeakersDropdown from './SpeakersDropdown';
import { mainNavItems } from '@/config/navigation';

type DesktopNavProps = {
  onQuoteClick: (e: React.MouseEvent) => void;
};

const DesktopNav = ({ onQuoteClick }: DesktopNavProps) => {
  const [showSpeakersDropdown, setShowSpeakersDropdown] = useState(false);
  
  return (
    <nav className="hidden md:flex items-center space-x-8">
      {mainNavItems.map((item, index) => (
        <Link 
          key={index} 
          to={item.path} 
          className="font-medium text-gray-700 hover:text-orange-500 transition-colors"
        >
          {item.title}
        </Link>
      ))}
      
      <SpeakersDropdown 
        showDropdown={showSpeakersDropdown} 
        setShowDropdown={setShowSpeakersDropdown} 
      />
      
      <a href="#contacto" onClick={onQuoteClick}>
        <Button className="bg-orange-500 hover:bg-orange-600">Cotizar ahora</Button>
      </a>
    </nav>
  );
};

export default DesktopNav;
