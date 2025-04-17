
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { speakerNavItems } from '@/config/navigation';

type SpeakersDropdownProps = {
  showDropdown: boolean;
  setShowDropdown: (show: boolean) => void;
  isMobile?: boolean;
  onNavItemClick?: () => void;
};

const SpeakersDropdown = ({ 
  showDropdown, 
  setShowDropdown, 
  isMobile = false,
  onNavItemClick
}: SpeakersDropdownProps) => {
  const navigate = useNavigate();
  
  const handleItemClick = (path: string) => {
    navigate(path);
    if (onNavItemClick) onNavItemClick();
    setShowDropdown(false);
  };
  
  if (isMobile) {
    return (
      <div className="py-2">
        <button 
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center justify-between w-full font-medium text-gray-700 hover:text-orange-500 transition-colors"
        >
          <span>Conferencistas</span>
          <svg 
            className={`w-4 h-4 transform ${showDropdown ? 'rotate-180' : 'rotate-0'}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24" 
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
          </svg>
        </button>
        
        {showDropdown && (
          <div className="pl-4 mt-2 space-y-2 border-l-2 border-gray-100">
            {speakerNavItems.map((speaker) => (
              <button 
                key={speaker.slug}
                onClick={() => handleItemClick(`/speaker/${speaker.slug}`)}
                className="block w-full text-left font-medium text-gray-700 hover:text-orange-500 transition-colors py-1"
              >
                {speaker.name}
              </button>
            ))}
            <button 
              onClick={() => handleItemClick("/#conferencistas")}
              className="block w-full text-left font-medium text-gray-500 hover:text-orange-500 transition-colors py-1"
            >
              Ver todos
            </button>
          </div>
        )}
      </div>
    );
  }
  
  // Desktop dropdown
  return (
    <div className="relative group">
      <button 
        className="font-medium text-gray-700 hover:text-orange-500 transition-colors flex items-center"
        onClick={() => setShowDropdown(!showDropdown)}
        onMouseEnter={() => setShowDropdown(true)}
        onMouseLeave={() => setShowDropdown(false)}
      >
        Conferencistas
        <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
        </svg>
      </button>
      {showDropdown && (
        <div 
          className="absolute left-0 mt-2 w-64 bg-white shadow-lg rounded-md overflow-hidden z-20"
          onMouseEnter={() => setShowDropdown(true)}
          onMouseLeave={() => setShowDropdown(false)}
        >
          {speakerNavItems.map((speaker) => (
            <button 
              key={speaker.slug}
              onClick={() => handleItemClick(`/speaker/${speaker.slug}`)}
              className="block w-full text-left px-4 py-2 text-gray-700 hover:bg-orange-50 hover:text-orange-500"
            >
              {speaker.name}
            </button>
          ))}
          <button 
            onClick={() => handleItemClick("/#conferencistas")}
            className="block w-full text-left px-4 py-2 text-gray-500 hover:bg-orange-50 hover:text-orange-500 border-t border-gray-100"
          >
            Ver todos
          </button>
        </div>
      )}
    </div>
  );
};

export default SpeakersDropdown;
