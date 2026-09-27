import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NavigationTab } from '../types';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  activeTab: NavigationTab;
  setActiveTab: (tab: NavigationTab) => void;
  onNavigateSection?: (tab: NavigationTab) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, setActiveTab, onNavigateSection }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks: { id: NavigationTab; label: string }[] = [
    { id: 'home', label: 'HOME' },
    { id: 'about', label: 'ABOUT US' },
    { id: 'services', label: 'SERVICES' },
    { id: 'process', label: 'PROCESS' },
    { id: 'research', label: 'R&D' },
    { id: 'portfolio', label: 'PORTFOLIO' },
    { id: 'team', label: 'TEAM' },
    { id: 'blog', label: 'BLOG' },
    { id: 'contact', label: 'CONTACT US' },
  ];

  const handleNavClick = (tabId: NavigationTab) => {
    setActiveTab(tabId);
    setMobileMenuOpen(false);
    if (onNavigateSection) {
      onNavigateSection(tabId);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200/80 shadow-sm py-3'
          : 'bg-white/80 backdrop-blur-sm py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <button
          onClick={() => handleNavClick('home')}
          className="focus:outline-none focus:ring-2 focus:ring-radsys-blue p-1 rounded transition-opacity hover:opacity-90"
          aria-label="RADSYS Home"
        >
          <Logo />
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-1 xl:space-x-2" aria-label="Main Navigation">
          {navLinks.map((link) => {
            const isActive = activeTab === link.id;
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className={`relative px-3 py-2 text-xs font-semibold tracking-wider transition-colors duration-200 ${
                  isActive
                    ? 'text-radsys-blue font-bold'
                    : 'text-radsys-black hover:text-radsys-blue'
                }`}
              >
                <span>{link.label}</span>
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-radsys-blue rounded-full transition-all duration-300" />
                )}
              </button>
            );
          })}
        </nav>

        {/* Desktop Header CTA */}
        <div className="hidden lg:flex items-center space-x-4">
          <button
            onClick={() => handleNavClick('contact')}
            className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-mono tracking-wider text-white bg-radsys-black hover:bg-radsys-blue transition-colors duration-300 rounded-none shadow-sm group"
          >
            <span>GET IN TOUCH</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <div className="flex lg:hidden items-center">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-radsys-black hover:text-radsys-blue focus:outline-none focus:ring-2 focus:ring-radsys-blue"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-6 py-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3">
            {navLinks.map((link) => {
              const isActive = activeTab === link.id;
              return (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link.id)}
                  className={`text-left px-3 py-2 text-sm font-semibold tracking-wider flex items-center justify-between border-b border-slate-100 ${
                    isActive ? 'text-radsys-blue font-bold bg-slate-50' : 'text-radsys-black hover:text-radsys-blue'
                  }`}
                >
                  <span>{link.label}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-radsys-blue" />}
                </button>
              );
            })}
            <div className="pt-4">
              <button
                onClick={() => handleNavClick('contact')}
                className="w-full py-3 text-center text-xs font-mono tracking-wider text-white bg-radsys-black hover:bg-radsys-blue transition-colors"
              >
                GET IN TOUCH
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
