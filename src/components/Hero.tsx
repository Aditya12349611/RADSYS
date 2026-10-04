import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { CADCanvas } from './CADCanvas';
import { NavigationTab } from '../types';
import { ArrowRight, ChevronDown, Cpu, ShieldCheck, Binary } from 'lucide-react';

interface HeroProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const Hero: React.FC<HeroProps> = ({ onNavigate }) => {
  return (
    <section className="relative min-h-[92vh] pt-28 pb-16 flex items-center justify-center overflow-hidden bg-white technical-grid border-b border-slate-200">
      {/* Background Engineering Accent Lines */}
      <div className="absolute inset-0 pointer-events-none opacity-30">
        <div className="absolute top-1/4 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-radsys-blue to-transparent"></div>
        <div className="absolute bottom-1/3 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-slate-300 to-transparent"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Headlines & Positioning */}
          <div className="lg:col-span-7 flex flex-col items-start space-y-6">
            
            {/* Tech Status Pill */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-slate-100 border border-slate-200 text-[11px] font-mono tracking-widest text-radsys-black uppercase">
              <span className="w-2 h-2 rounded-full bg-radsys-blue animate-pulse"></span>
              <span>ENGINEERING & TECHNOLOGY ENTERPRISE</span>
            </div>

            {/* Main Bold Headline */}
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-radsys-black leading-[1.02] uppercase font-display">
  RADSYS <br />
    <span className="text-radsys-blue inline-block relative text-5xl sm:text-5xl lg:text-6xl">
    ENGINEERING THE NEXT.
    <span className="text-radsys-blue inline-block relative text-4xl sm:text-5xl lg:text-5xl"> </span>
  </span>
</h1>

            {/* Authoritative Subtitle */}
           {/* <p className="text-lg sm:text-xl text-slate-700 font-normal leading-relaxed max-w-2xl">
              "{COMPANY_INFO.heroSubheadline}"
            </p> */}

            {/* CTAs */}
            <div className="pt-2 flex flex-wrap items-center gap-4 w-full sm:w-auto">
              <button
                onClick={() => onNavigate('services')}
                className="w-full sm:w-auto px-8 py-4 bg-radsys-black text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blue transition-all duration-300 shadow-md hover:shadow-lg flex items-center justify-center gap-3 group tech-border"
              >
                <span>EXPLORE OUR SERVICES</span>
                <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>

              <button
                onClick={() => onNavigate('about')}
                className="w-full sm:w-auto px-8 py-4 bg-white text-radsys-black border border-slate-300 text-xs font-mono tracking-widest uppercase hover:bg-slate-100 transition-colors flex items-center justify-center gap-2"
              >
                <span>LEARN MORE</span>
              </button>
            </div>

            {/* Key Discipline Metrics */}
            <div className="pt-8 border-t border-slate-200/80 grid grid-cols-3 gap-6 w-full max-w-xl">
              <div className="flex flex-col">
                <div className="flex items-center gap-1.5 text-radsys-blue font-mono font-bold text-sm">
                  <Cpu className="w-4 h-4" />
                  <span>MECHANICAL</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 font-mono">CAD, FEA & DFM</span>
              </div>

              <div className="flex flex-col border-l border-slate-200 pl-4">
                <div className="flex items-center gap-1.5 text-radsys-black font-mono font-bold text-sm">
                  <Binary className="w-4 h-4 text-radsys-blue" />
                  <span>COMPUTATION</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 font-mono">AI, Web & Tools</span>
              </div>

              <div className="flex flex-col border-l border-slate-200 pl-4">
                <div className="flex items-center gap-1.5 text-radsys-black font-mono font-bold text-sm">
                  <ShieldCheck className="w-4 h-4 text-radsys-blue" />
                  <span>R&D LABS</span>
                </div>
                <span className="text-xs text-slate-500 mt-1 font-mono">Robotics & UAV</span>
              </div>
            </div>

          </div>

          {/* Right Column: 3D CAD Blueprint Visual */}
          <div className="lg:col-span-5 relative w-full h-[420px] lg:h-[480px]">
            <CADCanvas mode="hero" interactive={true} />
          </div>

        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-1 opacity-70 hover:opacity-100 transition-opacity">
        <span className="text-[10px] font-mono tracking-widest text-slate-500 uppercase">SCROLL TO DISCOVER</span>
        <ChevronDown className="w-4 h-4 text-radsys-blue animate-bounce" />
      </div>
    </section>
  );
};
