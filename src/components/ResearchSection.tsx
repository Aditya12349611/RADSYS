import React, { useState } from 'react';
import { RESEARCH_AREAS, COMPANY_INFO } from '../data/content';
import { ResearchArea, NavigationTab } from '../types';
import { 
  Bot, Cpu, Navigation, Brain, Wrench, Radio, Plane, ArrowRight, FlaskConical, Atom 
} from 'lucide-react';

interface ResearchSectionProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const ResearchSection: React.FC<ResearchSectionProps> = ({ onNavigate }) => {
  const [activeArea, setActiveArea] = useState<ResearchArea>(RESEARCH_AREAS[0]);

  const renderResearchIcon = (name: string) => {
    const map: Record<string, React.ReactNode> = {
      Bot: <Bot className="w-6 h-6" />,
      Cpu: <Cpu className="w-6 h-6" />,
      Navigation: <Navigation className="w-6 h-6" />,
      Brain: <Brain className="w-6 h-6" />,
      Wrench: <Wrench className="w-6 h-6" />,
      Radio: <Radio className="w-6 h-6" />,
      Plane: <Plane className="w-6 h-6" />
    };
    return map[name] || <FlaskConical className="w-6 h-6" />;
  };

  return (
    <section className="py-24 bg-slate-900 text-white relative border-b border-slate-800 technical-grid-dark overflow-hidden">
      
      {/* Background ambient light blur */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radsys-blue/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-3 mb-3">
            <Atom className="w-5 h-5 text-radsys-blue animate-spin-slow" />
            <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">RESEARCH & INNOVATION PLATFORM</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-display mb-6">
            ENGINEERING WITH A RESEARCH MINDSET.
          </h2>
          <p className="text-lg text-slate-300 leading-relaxed font-sans">
            "{COMPANY_INFO.aboutBrief} RADSYS is being developed as a platform for research, experimentation, and technological innovation."
          </p>
        </div>

        {/* Interactive Futuristic R&D Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Left Column: List of 7 Technological Exploration Areas */}
          <div className="lg:col-span-5 space-y-3">
            <h4 className="text-xs font-mono tracking-widest text-slate-400 uppercase mb-2">
              LONG-TERM TECHNOLOGICAL EXPLORATION AREAS
            </h4>

            {RESEARCH_AREAS.map((area) => {
              const isSelected = activeArea.id === area.id;
              return (
                <div
                  key={area.id}
                  onClick={() => setActiveArea(area)}
                  className={`p-4 border transition-all duration-300 cursor-pointer flex items-center justify-between group ${
                    isSelected
                      ? 'bg-radsys-black text-white border-radsys-blue translate-x-2 shadow-lg'
                      : 'bg-slate-950/80 text-slate-300 border-slate-800 hover:border-slate-700 hover:bg-slate-850'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 transition-colors ${
                      isSelected ? 'text-radsys-blue bg-slate-900' : 'text-slate-400 group-hover:text-radsys-blue'
                    }`}>
                      {renderResearchIcon(area.icon)}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-radsys-blue block">{area.techBadge}</span>
                      <h4 className="text-sm font-bold font-mono uppercase">{area.title}</h4>
                    </div>
                  </div>

                  <ArrowRight className={`w-4 h-4 transition-transform duration-300 ${
                    isSelected ? 'text-radsys-blue translate-x-1' : 'text-slate-600 group-hover:text-slate-300'
                  }`} />
                </div>
              );
            })}
          </div>

          {/* Right Column: Deep R&D Focus Card */}
          <div className="lg:col-span-7">
            <div className="bg-slate-950 border-2 border-slate-800 p-8 sm:p-10 relative h-full flex flex-col justify-between">
              
              {/* Tech corner accents */}
              <span className="absolute top-0 left-0 w-4 h-4 border-t-2 border-l-2 border-radsys-blue"></span>
              <span className="absolute top-0 right-0 w-4 h-4 border-t-2 border-r-2 border-radsys-blue"></span>
              <span className="absolute bottom-0 left-0 w-4 h-4 border-b-2 border-l-2 border-radsys-blue"></span>
              <span className="absolute bottom-0 right-0 w-4 h-4 border-b-2 border-r-2 border-radsys-blue"></span>

              <div>
                <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-radsys-blue animate-pulse"></span>
                    <span className="text-xs font-mono text-radsys-blue tracking-widest uppercase">{activeArea.techBadge} SPECIFICATION</span>
                  </div>
                  <span className="text-[10px] font-mono text-slate-500">R&D LAB EXPERIMENTAL VECTOR</span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-extrabold font-display text-white uppercase mb-4">
                  {activeArea.title}
                </h3>

                <p className="text-sm sm:text-base text-slate-300 leading-relaxed font-sans mb-8">
                  {activeArea.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h5 className="text-xs font-mono text-slate-400 uppercase tracking-wider">
                    PRIMARY RESEARCH VECTORS & FIELD EXPERIMENTS
                  </h5>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {activeArea.focusAreas.map((focus, idx) => (
                      <div key={idx} className="p-3 bg-slate-900 border border-slate-800 flex items-center gap-2 text-xs font-mono text-slate-200">
                        <span className="w-1.5 h-1.5 bg-radsys-blue"></span>
                        <span>{focus}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Vision Highlight Footer */}
              <div className="pt-6 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <p className="text-xs text-slate-400 font-mono italic">
                  "{COMPANY_INFO.visionText}"
                </p>
                <button
                  onClick={() => onNavigate('contact')}
                  className="w-full sm:w-auto px-6 py-3 bg-radsys-blue text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blueDark transition-colors shrink-0 flex items-center justify-center gap-2"
                >
                  <span>INQUIRE R&D COLLABORATION</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
