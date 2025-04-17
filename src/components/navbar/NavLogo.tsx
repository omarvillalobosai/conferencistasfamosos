
import React from 'react';
import { Link } from 'react-router-dom';

const NavLogo = () => {
  return (
    <Link to="/" className="flex items-center">
      <span className="text-xl md:text-2xl font-bold text-gray-900">
        Conferencistas<span className="text-orange-500">Famosos</span>
      </span>
    </Link>
  );
};

export default NavLogo;
