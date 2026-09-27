import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { NavigationTab } from '../types';
import { CADCanvas } from '../components/CADCanvas';
import { ArrowRight, CheckSquare, Compass, ShieldCheck, Lightbulb, Target, Eye } from 'lucide-react';

interface AboutPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigate }) => {
  return (
    <main className="pt-24 pb-20 bg-white">
      
      {/* Hero Header */}
      <section className="py-16 bg-slate-50 border-b border-slate-200 technical-grid">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-2 h-2 rounded-full bg-radsys-blue"></span>
            <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">ENTERPRISE OVERVIEW</span>
          </div>
          <h1 className="text-4xl sm:text-6xl font-extrabold text-radsys-black uppercase font-display mb-6">
            ABOUT RADSYS.
          </h1>
          <p className="text-lg sm:text-xl text-slate-700 max-w-3xl leading-relaxed font-sans">
            "{COMPANY_INFO.fullAbout}"
          </p>
        </div>
      </section>

      {/* Main Philosophy & Multi-Disciplinary Integration */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-6">
            <div className="p-6 bg-slate-900 text-white border-l-4 border-radsys-blue technical-grid-dark">
              <Lightbulb className="w-8 h-8 text-radsys-blue mb-3" />
              <h3 className="text-xs font-mono text-radsys-blue uppercase tracking-widest mb-1">FOUNDATIONAL CONVICTION</h3>
              <p className="text-lg font-medium italic leading-relaxed">
                "{COMPANY_INFO.philosophyQuote}"
              </p>
            </div>

            <h2 className="text-3xl font-extrabold text-radsys-black uppercase font-display pt-4">
              FROM CONCEPT TO REALITY
            </h2>
            <p className="text-slate-700 leading-relaxed font-sans">
              Engineering rarely exists within a single discipline. A modern product or intelligent system may require mechanical design, computational methods, electronics, software, automation, manufacturing, and rigorous experimentation to function as intended. <strong>RADSYS brings these disciplines together.</strong>
            </p>
            <p className="text-slate-600 leading-relaxed font-sans">
              We undertake the design and development of products, mechanisms, machines, prototypes, engineering systems, and digital solutions, adapting our approach to the technical requirements of each challenge.
            </p>

            <div className="pt-4 flex gap-4">
              <button
                onClick={() => onNavigate('services')}
                className="px-8 py-3.5 bg-radsys-black text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blue transition-colors flex items-center gap-2"
              >
                <span>OUR SERVICES</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          <div className="lg:col-span-6 h-[440px]">
            <CADCanvas mode="about" interactive={true} />
          </div>

        </div>
      </section>

      {/* Vision & Mission Cards */}
      <section className="py-16 bg-slate-900 text-white border-y border-slate-800 technical-grid-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            <div className="p-8 bg-slate-950 border border-slate-800 relative space-y-4">
              <div className="flex items-center gap-3">
                <Eye className="w-6 h-6 text-radsys-blue" />
                <h3 className="text-xl font-bold font-display uppercase">OUR VISION</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                {COMPANY_INFO.visionText}
              </p>
            </div>

            <div className="p-8 bg-slate-950 border border-slate-800 relative space-y-4">
              <div className="flex items-center gap-3">
                <Target className="w-6 h-6 text-radsys-blue" />
                <h3 className="text-xl font-bold font-display uppercase">OUR MISSION</h3>
              </div>
              <p className="text-sm text-slate-300 leading-relaxed font-sans">
                To transform complex engineering challenges into precise, manufacturable, and intelligent technological systems through disciplined multidisciplinary execution.
              </p>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
};
