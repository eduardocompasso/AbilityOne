import React from 'react';
import { Link } from 'react-router-dom';
import { FaHeadphones, FaBolt } from 'react-icons/fa';

interface ContactBarProps {
  onSignInClick?: () => void;
}

export const ContactBar: React.FC<ContactBarProps> = ({ onSignInClick }) => (
  <div className="text-gray-700 my-2 text-sm">
    <div className="container flex flex-col sm:flex-row justify-center sm:justify-between items-center gap-2">
      <div className="hidden sm:flex items-center gap-2">
        <FaHeadphones className="text-red-500" aria-hidden="true" />
        <span className="font-bold tracking-wide">1-877-438-5963</span>
      </div>
      <div className="flex items-center gap-4">
        <button
          type="button"
          onClick={onSignInClick}
          className="hover:underline bg-transparent border-none p-0 m-0 text-inherit cursor-pointer"
          aria-label="Sign In"
        >
          Sign In
        </button>
        <span aria-hidden="true">|</span>
        <Link to="/register" className="hover:underline" aria-label="Register">Register</Link>
        <span aria-hidden="true">|</span>
        <Link to="/contact" className="hover:underline" aria-label="Contact Us">Contact Us</Link>
        <span aria-hidden="true" className="hidden sm:block">|</span>
        <Link to="/quick-order" className="hidden sm:flex items-center gap-1 text-red-500 font-semibold" aria-label="Quick Order">
          <FaBolt aria-hidden="true" /> Quick Order
        </Link>
      </div>
    </div>
  </div>
); 