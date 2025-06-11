import React from 'react';

interface TitleBarProps {
  title: string;
  buttonText?: string;
  buttonHref?: string;
  ariaLabel?: string;
}

export const TitleBar: React.FC<TitleBarProps> = ({ title, buttonText, buttonHref, ariaLabel }) => (
  <div className="flex items-center justify-between mb-8">
    <div className="flex items-center">
      <span className="flex items-center justify-center w-12 h-12 bg-red-600 rounded-tl-lg rounded-tr-none rounded-bl-lg">
        <svg viewBox="0 0 24 24" fill="white" width="28" height="28" aria-hidden="true">
          <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
        </svg>
      </span>
      <h2 className="h-12 flex items-center px-6 text-2xl font-bold text-white bg-primary rounded-tr-lg rounded-br-lg">{title}</h2>
    </div>
    {buttonText && buttonHref && (
      <a
        href={buttonHref}
        className="flex items-center gap-2 text-primary hover:underline font-medium text-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
        aria-label={ariaLabel || buttonText}
      >
        <span className='hidden sm:block'>{buttonText}</span>
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-8 h-8 text-primary" aria-hidden="true"><circle cx="12" cy="12" r="11" stroke="#1976d2" strokeWidth="2" fill="white"/><path d="M10 8l4 4-4 4" stroke="#1976d2" strokeWidth="2" fill="none"/></svg>
      </a>
    )}
  </div>
); 