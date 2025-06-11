import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaUser, FaShoppingCart, FaBars, FaTimes } from 'react-icons/fa';
import { TopBar } from './TopBar';
import { ContactBar } from './ContactBar';
import { SearchBar } from './SearchBar';
import { NavigationMenu } from './NavigationMenu';

interface MobileMenuItem {
  type: 'link';
  label: string;
  to: string;
}

const MOBILE_MENU_ITEMS: MobileMenuItem[] = [
  { type: 'link', label: 'All Products', to: '/products' },
  { type: 'link', label: 'Cleaning Supplies', to: '/products?category=cleaning' },
  { type: 'link', label: 'Disinfectants', to: '/products?category=disinfectants' },
  { type: 'link', label: 'Paper Towels', to: '/products?category=paper-towels' },
  { type: 'link', label: 'Trash Bags', to: '/products?category=trash-bags' },
  { type: 'link', label: 'Inks & Toners', to: '/products?category=inks-toners' },
  { type: 'link', label: 'Medical Supplies', to: '/products?category=medical' },
  { type: 'link', label: 'Masks', to: '/products?category=masks' },
  { type: 'link', label: 'Gloves', to: '/products?category=gloves' },
  { type: 'link', label: 'First Aid', to: '/products?category=first-aid' },
  { type: 'link', label: 'Office Supplies', to: '/products?category=office' },
  { type: 'link', label: 'Paper', to: '/products?category=paper' },
  { type: 'link', label: 'Pens', to: '/products?category=pens' },
  { type: 'link', label: 'Folders', to: '/products?category=folders' },
];

export const Header: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => setIsMobileMenuOpen(true);
  const handleMobileMenuClose = () => setIsMobileMenuOpen(false);

  return (
    <header className="w-full relative z-50" aria-label="Main site header">
      {/* TopBar full width color */}
      <div className="bg-primary-dark w-full">
        <div className="container">
          <TopBar />
        </div>
      </div>
      {/* ContactBar full width color */}
      <div className="w-full border-b bg-white">
        <div className="container">
          <ContactBar />
        </div>
      </div>
      {/* Linha central: logo, busca, conta, carrinho */}
      <div className="w-full bg-white py-4">
        <div className="container flex flex-col md:flex-row items-center gap-4">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-start md:w-1/4">
            <img 
              src="/src/assets/images/logoAbility.jpeg" 
              alt="AbilityOne Program logo" 
              className="hidden md:block w-32 lg:w-48" 
            />
          </div>
          {/* Busca + ícones centralizados */}
          <div className="flex-1 flex items-center justify-center w-full max-w-2xl gap-4 sm:gap-8 mx-auto">
            <div className="">
              <SearchBar />
            </div>
            <Link to="/profile" className="flex items-center gap-2 text-gray-700 hover:text-primary" aria-label="My Account">
              <FaUser className="text-xl" aria-hidden="true" />
              <span className="hidden lg:inline">My Account</span>
            </Link>
            <Link to="/cart" className="relative text-gray-700 hover:text-primary" aria-label="Shopping Cart">
              <FaShoppingCart className="text-xl" aria-hidden="true" />
            </Link>
            {/* Botão hamburguer visível apenas em telas pequenas */}
            <button
              className="block md:hidden ml-2 p-2 rounded text-primary border border-primary"
              aria-label="Open menu"
              onClick={handleMobileMenuToggle}
            >
              <FaBars className="text-xl" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
      {/* NavigationMenu full width color - escondido em telas pequenas */}
      <div className="w-full bg-primary hidden md:block">
        <div className="container">
          <NavigationMenu />
        </div>
      </div>
      {/* Drawer mobile menu */}
      {isMobileMenuOpen && (
        <div className="fixed inset-0 z-[999] bg-black bg-opacity-50 flex justify-end md:hidden">
          <div className="w-64 h-full bg-white shadow-lg p-6 flex flex-col gap-4 relative">
            <button
              className="absolute top-4 right-4 p-2 text-primary"
              aria-label="Close menu"
              onClick={handleMobileMenuClose}
            >
              <FaTimes className="text-2xl" aria-hidden="true" />
            </button>
            {MOBILE_MENU_ITEMS.map((item, idx) => (
              <Link
                key={idx}
                to={item.to}
                className="text-gray-800 text-lg font-medium hover:text-primary py-2"
                onClick={handleMobileMenuClose}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}; 