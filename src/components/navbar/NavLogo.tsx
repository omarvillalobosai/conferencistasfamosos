import React from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '@/components/BrandLogo';

type NavLogoProps = { isScrolled?: boolean };

const NavLogo = ({ isScrolled = false }: NavLogoProps) => {
  return (
    <Link to="/" className={`flex items-center ${isScrolled ? '' : 'drop-shadow-md'}`} aria-label="Conferencistas Famosos, inicio">
      <BrandLogo tone={isScrolled ? 'dark' : 'light'} height={40} />
    </Link>
  );
};

export default NavLogo;
