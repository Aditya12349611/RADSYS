import React from 'react';

interface LogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'auto';
  showTagline?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = '', variant = 'dark', showTagline = false }) => {
  return (
    <div className={`inline-flex flex-col items-start ${className}`}>
      <div className="flex items-center gap-3">
        {/* Crisp logo image fallback to high resolution JPEG */}
        <img 
          src="/logo.jpeg" 
          alt="RADSYS - Engineering the Next" 
          className="h-9 w-auto object-contain transition-transform duration-300 hover:scale-[1.02]"
        />
      </div>
      {showTagline && (
        <span className="text-[11px] font-mono tracking-widest text-radsys-blue uppercase mt-1">
          Engineering the Next!
        </span>
      )}
    </div>
  );
};
