
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SpeakersDropdown from './SpeakersDropdown';
import { mainNavItems } from '@/config/navigation';
import QuoteWizard from '@/components/QuoteWizard';

type DesktopNavProps = {
  onQuoteClick: (e: React.MouseEvent) => void;
};

const DesktopNav = ({ onQuoteClick }: DesktopNavProps) => {
  const [showSpeakersDropdown, setShowSpeakersDropdown] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setWizardOpen(true);
    // Still call the original handler for any other behavior it might have
    onQuoteClick(e);
  };
  
  return (
    <>
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
        
        <a href="#contacto" onClick={handleQuoteClick}>
          <Button className="bg-orange-500 hover:bg-orange-600">Cotizar ahora</Button>
        </a>
      </nav>
      
      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default DesktopNav;
