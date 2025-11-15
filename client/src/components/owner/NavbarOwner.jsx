import React from 'react';
import { assets } from '../../assets/assets';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppContext';

const NavbarOwner = () => {
  const { user } = useAppContext();

  return (
    <div className="flex items-center justify-between px-8 md:px-20 py-4 text-gray-500 border-b border-borderColor relative transition-all">
      <Link to="/">
        <img
          src={assets.logo}
          alt="Rent a Car Logo"
          className="h-10 transition-transform duration-300 hover:rotate-180"
        />
      </Link>

      <p>Welcome, {user?.name || 'Owner'}</p>
    </div>
  );
};

export default NavbarOwner;
