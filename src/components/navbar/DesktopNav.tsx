
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SpeakersDropdown from './SpeakersDropdown';
import { mainNavItems } from '@/config/navigation';

type DesktopNavProps = {
  onQuoteClick: (e: React.MouseEvent) => void;
  isScrolled?: boolean;
};

const DesktopNav = ({ onQuoteClick, isScrolled = false }: DesktopNavProps) => {
  const [showSpeakersDropdown, setShowSpeakersDropdown] = useState(false);
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onQuoteClick(e);
  };

  const linkClass = `font-medium hover:text-orange-500 transition-colors ${
    isScrolled ? 'text-gray-700' : 'text-white drop-shadow-md'
  }`;

  return (
    <>
      <nav className="hidden md:flex items-center space-x-8">
        {mainNavItems.map((item, index) => (
          <Link key={index} to={item.path} className={linkClass}>
            {item.title}
          </Link>
        ))}

        <SpeakersDropdown
          showDropdown={showSpeakersDropdown}
          setShowDropdown={setShowSpeakersDropdown}
          isScrolled={isScrolled}
        />

        <a href="/#contacto" onClick={handleQuoteClick}>
          <Button className="bg-orange-500 hover:bg-orange-600 text-white">Cotizar ahora</Button>
        </a>
      </nav>
    </>
  );
};

export default DesktopNav;
