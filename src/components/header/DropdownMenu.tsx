import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown } from 'react-icons/fa';

interface DropdownMenuProps {
  title: string;
  items: { label: string; to: string }[];
  isRouterLink?: boolean;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({ 
  title, 
  items,
  isRouterLink = false 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout>();
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200); // 200ms delay before closing
  };

  // Cleanup timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  return (
    <div 
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      ref={dropdownRef}
      role="navigation"
      aria-label={`${title} navigation menu`}
    >
      <button
        className="flex items-center gap-1 py-2 hover:underline whitespace-nowrap"
        aria-expanded={isOpen}
        aria-haspopup="true"
        aria-controls={`${title}-menu`}
        aria-label={`Open ${title} menu`}
      >
        {title}
        <FaChevronDown 
          className={`text-xs transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
          aria-hidden="true"
        />
      </button>
      
      {isOpen && (
        <div 
          id={`${title}-menu`}
          className="absolute top-full left-0 mt-1 w-48 bg-white rounded-md shadow-lg py-1 z-50"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          role="menu"
          aria-label={`${title} submenu`}
          aria-orientation="vertical"
        >
          {items.map((item, index) => (
            isRouterLink ? (
              <Link
                key={index}
                to={item.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                role="menuitem"
                aria-label={item.label}
              >
                {item.label}
              </Link>
            ) : (
              <a
                key={index}
                href={item.to}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-primary hover:text-white"
                role="menuitem"
                aria-label={item.label}
              >
                {item.label}
              </a>
            )
          ))}
        </div>
      )}
    </div>
  );
}; 