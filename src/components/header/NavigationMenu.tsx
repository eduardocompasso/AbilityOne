import React from 'react';
import { Link } from 'react-router-dom';
import { DropdownMenu } from './DropdownMenu';

interface NavigationItem {
  type: 'link' | 'dropdown';
  label?: string;
  to?: string;
  title?: string;
  items?: { label: string; to: string }[];
}

const NAVIGATION_ITEMS: NavigationItem[] = [
  { type: 'link', label: 'All Products', to: '/products' },
  {
    type: 'dropdown',
    title: 'Cleaning Supplies',
    items: [
      { label: 'All Cleaning', to: '/products?category=cleaning' },
      { label: 'Disinfectants', to: '/products?category=disinfectants' },
      { label: 'Paper Towels', to: '/products?category=paper-towels' },
      { label: 'Trash Bags', to: '/products?category=trash-bags' }
    ]
  },
  { type: 'link', label: 'Inks & Toners', to: '/products?category=inks-toners' },
  {
    type: 'dropdown',
    title: 'Medical Supplies',
    items: [
      { label: 'All Medical', to: '/products?category=medical' },
      { label: 'Masks', to: '/products?category=masks' },
      { label: 'Gloves', to: '/products?category=gloves' },
      { label: 'First Aid', to: '/products?category=first-aid' }
    ]
  },
  {
    type: 'dropdown',
    title: 'Office Supplies',
    items: [
      { label: 'All Office', to: '/products?category=office' },
      { label: 'Paper', to: '/products?category=paper' },
      { label: 'Pens', to: '/products?category=pens' },
      { label: 'Folders', to: '/products?category=folders' }
    ]
  }
];

export const NavigationMenu: React.FC = () => (
  <nav className="text-white text-sm font-medium relative z-10 w-full" aria-label="Main navigation">
    <div className="w-full flex flex-wrap items-center justify-between gap-2 md:gap-8 overflow-y-visible overflow-x-auto md:overflow-visible scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-transparent">
      {NAVIGATION_ITEMS.map((item, index) => (
        item.type === 'link' ? (
          <Link 
            key={index}
            to={item.to!} 
            className="hover:underline py-2 whitespace-nowrap min-w-max" 
            aria-label={item.label}
          >
            {item.label}
          </Link>
        ) : (
          <div className="min-w-max" key={index}>
            <DropdownMenu 
              title={item.title!} 
              items={item.items!} 
              isRouterLink
            />
          </div>
        )
      ))}
    </div>
  </nav>
); 