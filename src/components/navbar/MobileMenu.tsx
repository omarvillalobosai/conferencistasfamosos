
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import SpeakersDropdown from './SpeakersDropdown';
import { mainNavItems } from '@/config/navigation';
import QuoteWizard from '@/components/QuoteWizard';

type MobileMenuProps = {
  isOpen: boolean;
  onClose: () => void;
  onQuoteClick: (e: React.MouseEvent) => void;
};

const MobileMenu = ({ isOpen, onClose, onQuoteClick }: MobileMenuProps) => {
  const [showSpeakersDropdown, setShowSpeakersDropdown] = useState(false);
  const [wizardOpen, setWizardOpen] = useState(false);
  
  if (!isOpen) return null;
  
  const handleQuoteClick = (e: React.MouseEvent) => {
    e.preventDefault();
    setWizardOpen(true);
    onQuoteClick(e);
    onClose();
  };
  
  return (
    <>
      <div className="md:hidden bg-white shadow-lg animate-fade-in">
        <div className="container mx-auto py-4 space-y-4">
          {mainNavItems.map((item, index) => (
            <Link 
              key={index}
              to={item.path} 
              className="block font-medium text-gray-700 hover:text-orange-500 transition-colors py-2"
              onClick={onClose}
            >
              {item.title}
            </Link>
          ))}
          
          <SpeakersDropdown 
            showDropdown={showSpeakersDropdown} 
            setShowDropdown={setShowSpeakersDropdown} 
            isMobile={true}
            onNavItemClick={onClose}
          />
          
          <a 
            href="#contacto"
            onClick={handleQuoteClick}
            className="block"
          >
            <Button className="w-full bg-orange-500 hover:bg-orange-600">Cotizar ahora</Button>
          </a>
        </div>
      </div>
      
      <QuoteWizard open={wizardOpen} onClose={() => setWizardOpen(false)} />
    </>
  );
};

export default MobileMenu;
