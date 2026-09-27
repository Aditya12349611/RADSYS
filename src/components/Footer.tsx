import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { NavigationTab } from '../types';
import { Logo } from './Logo';
import { ArrowUp, Github, Linkedin, Twitter, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-radsys-black text-white border-t border-slate-800 technical-grid-dark relative pt-16 pb-8">
      
      {/* Top Border Blue Line */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-radsys-blue"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 pb-16 border-b border-slate-800">
          
          {/* Column 1: Brand & Tagline */}
          <div className="lg:col-span-4 space-y-4">
            <Logo showTagline={true} />
            <p className="text-xs text-slate-400 leading-relaxed font-sans max-w-sm pt-2">
              {COMPANY_INFO.aboutBrief}
            </p>
            <div className="pt-2 flex items-center space-x-3 text-slate-400">
              <a href="#" aria-label="LinkedIn" className="p-2 bg-slate-900 border border-slate-800 hover:text-radsys-blue hover:border-radsys-blue transition-colors">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" aria-label="Twitter / X" className="p-2 bg-slate-900 border border-slate-800 hover:text-radsys-blue hover:border-radsys-blue transition-colors">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" aria-label="GitHub" className="p-2 bg-slate-900 border border-slate-800 hover:text-radsys-blue hover:border-radsys-blue transition-colors">
                <Github className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Navigation */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-radsys-blue uppercase font-bold mb-4">NAVIGATION</h4>
            <ul className="space-y-2 text-xs font-mono text-slate-300">
              {[
                { id: 'home', label: 'HOME' },
                { id: 'about', label: 'ABOUT US' },
                { id: 'services', label: 'SERVICES' },
                { id: 'process', label: 'PROCESS' },
                { id: 'research', label: 'R&D LABS' },
                { id: 'portfolio', label: 'PORTFOLIO' },
                { id: 'team', label: 'OUR TEAM' },
                { id: 'blog', label: 'BLOG' },
                { id: 'contact', label: 'CONTACT US' }
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id as NavigationTab)}
                    className="hover:text-radsys-blue transition-colors flex items-center gap-1.5"
                  >
                    <span>›</span>
                    <span>{link.label}</span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Primary Disciplines */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-radsys-blue uppercase font-bold mb-4">DISCIPLINE CATEGORIES</h4>
            <ul className="space-y-2.5 text-xs font-mono text-slate-300">
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-radsys-blue text-left transition-colors font-bold text-white block">
                  MECHANICAL ENGINEERING
                </button>
                <span className="text-[10px] text-slate-500 block">CAD 3D, FEA, DFM, Prototyping & Robotics</span>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-radsys-blue text-left transition-colors font-bold text-white block">
                  INFORMATION TECHNOLOGY
                </button>
                <span className="text-[10px] text-slate-500 block">Custom Software, AI/ML & Web Apps</span>
              </li>
              <li>
                <button onClick={() => onNavigate('services')} className="hover:text-radsys-blue text-left transition-colors font-bold text-white block">
                  RESEARCH & DEVELOPMENT
                </button>
                <span className="text-[10px] text-slate-500 block">Autonomous Systems & Aerospace Tech</span>
              </li>
            </ul>
          </div>

          {/* Column 4: Contact info */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-radsys-blue uppercase font-bold mb-4">COMMUNICATIONS</h4>
            <div className="space-y-3 text-xs font-mono text-slate-300">
              <div className="flex items-start gap-2.5">
                <Mail className="w-4 h-4 text-radsys-blue shrink-0 mt-0.5" />
                <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="hover:text-radsys-blue transition-colors">
                  {COMPANY_INFO.contactEmail}
                </a>
              </div>
              <div className="flex items-start gap-2.5">
                <Phone className="w-4 h-4 text-radsys-blue shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.contactPhone}</span>
              </div>
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-radsys-blue shrink-0 mt-0.5" />
                <span>{COMPANY_INFO.location}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Rights & Scroll to top */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © {new Date().getFullYear()} RADSYS. All Rights Reserved. Engineering the Next!
          </div>

          <div className="flex items-center space-x-6">
            <a href="#" className="hover:text-slate-300 transition-colors">Privacy Policy</a>
            <span>|</span>
            <a href="#" className="hover:text-slate-300 transition-colors">Terms & Conditions</a>
            <span>|</span>
            <button
              onClick={scrollToTop}
              className="p-2 bg-slate-900 border border-slate-800 text-radsys-blue hover:bg-radsys-blue hover:text-white transition-all flex items-center gap-1"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span>TOP</span>
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
};
