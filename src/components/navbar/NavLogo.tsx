
import React from 'react';
import { Link } from 'react-router-dom';

type NavLogoProps = { isScrolled?: boolean };

const NavLogo = ({ isScrolled = false }: NavLogoProps) => {
  return (
    <Link to="/" className="flex items-center">
      <span className={`text-xl md:text-2xl font-bold transition-colors ${isScrolled ? 'text-gray-900' : 'text-white drop-shadow-md'}`}>
        Conferencistas<span className="text-orange-500">Famosos</span>
      </span>
    </Link>
  );
};

export default NavLogo;
