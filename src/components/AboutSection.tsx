import React from 'react';
import { COMPANY_INFO } from '../data/content';
import { NavigationTab } from '../types';
import { ArrowRight, CheckSquare, Compass, Layers, Cpu, Wrench, Shield, Lightbulb } from 'lucide-react';

interface AboutSectionProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const AboutSection: React.FC<AboutSectionProps> = ({ onNavigate }) => {
  const deliverables = [
    { title: 'Products', desc: 'Market-ready technical hardware & systems' },
    { title: 'Mechanisms', desc: 'Precision motion & kinematic assemblies' },
    { title: 'Machines', desc: 'High-duty industrial & automated machinery' },
    { title: 'Prototypes', desc: 'Rapid functional physical & digital builds' },
    { title: 'Engineering Systems', desc: 'Multidisciplinary integrated platforms' },
    { title: 'Digital Solutions', desc: 'Custom software, AI tools & data pipelines' },
  ];

  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header Badge */}
        <div className="flex items-center gap-3 mb-10">
          <div className="h-[2px] w-8 bg-radsys-blue"></div>
          <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">ABOUT RADSYS</span>
        </div>

        {/* 2-Column Wireframe Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Authoritative Text */}
          <div className="lg:col-span-7 space-y-6">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-radsys-black uppercase tracking-tight leading-tight">
              FROM CONCEPT TO REALITY.
            </h2>

            <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-sans">
              {COMPANY_INFO.fullAbout}
            </p>

            <div className="p-6 bg-white border-l-4 border-radsys-blue shadow-sm technical-grid">
              <div className="flex items-start gap-3">
                <Lightbulb className="w-6 h-6 text-radsys-blue shrink-0 mt-1" />
                <div>
                  <h4 className="text-xs font-mono tracking-wider text-radsys-black uppercase font-bold mb-1">COMPANY PHILOSOPHY</h4>
                  <p className="text-sm font-medium italic text-slate-900 leading-snug">
                    "{COMPANY_INFO.philosophyQuote}"
                  </p>
                </div>
              </div>
            </div>

            <p className="text-slate-600 text-sm leading-relaxed">
              Engineering rarely exists within a single discipline. A modern product or intelligent system may require mechanical design, computational methods, electronics, software, automation, manufacturing, and rigorous experimentation to function as intended. <strong>RADSYS brings these disciplines together.</strong>
            </p>

            {/* Developed Capabilities Grid */}
            <div className="pt-2">
              <h4 className="text-xs font-mono tracking-widest text-slate-500 uppercase mb-4">WHAT RADSYS DEVELOPS</h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {deliverables.map((item, idx) => (
                  <div key={idx} className="p-3 bg-white border border-slate-200 flex items-start gap-3 hover:border-radsys-blue transition-colors">
                    <CheckSquare className="w-4 h-4 text-radsys-blue shrink-0 mt-0.5" />
                    <div>
                      <h5 className="text-xs font-bold font-mono text-radsys-black">{item.title}</h5>
                      <p className="text-[11px] text-slate-500">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4">
              <button
                onClick={() => onNavigate('about')}
                className="px-6 py-3.5 bg-radsys-black text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blue transition-all duration-300 inline-flex items-center gap-2 group"
              >
                <span>DISCOVER RADSYS</span>
                <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
              </button>
            </div>

          </div>

          {/* Right Column: Visual Engineering Schematic Blueprint */}
          <div className="lg:col-span-5 relative">
            <div className="bg-radsys-black text-white p-8 border border-slate-800 shadow-2xl relative technical-grid-dark overflow-hidden">
              
              {/* Corner tech accents */}
              <div className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-radsys-blue"></div>
              <div className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-radsys-blue"></div>
              <div className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-radsys-blue"></div>
              <div className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-radsys-blue"></div>

              <div className="flex items-center justify-between border-b border-slate-800 pb-4 mb-6">
                <span className="text-xs font-mono text-radsys-blue tracking-widest uppercase">MULTIDISCIPLINARY CORE</span>
                <span className="text-[10px] font-mono text-slate-400">REF: RAD-CORE-2026</span>
              </div>

              {/* Multidisciplinary Diagram Nodes */}
              <div className="space-y-4">
                <div className="p-4 bg-slate-900/90 border border-slate-800 flex items-center justify-between hover:border-radsys-blue transition-colors">
                  <div className="flex items-center gap-3">
                    <Cpu className="w-5 h-5 text-radsys-blue" />
                    <div>
                      <h4 className="text-xs font-bold font-mono">MECHANICAL & CAD</h4>
                      <p className="text-[11px] text-slate-400">Kinematics, FEA & DFM</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-radsys-blue/20 text-radsys-blue px-2 py-0.5">HARDWARE</span>
                </div>

                <div className="p-4 bg-slate-900/90 border border-slate-800 flex items-center justify-between hover:border-radsys-blue transition-colors">
                  <div className="flex items-center gap-3">
                    <Layers className="w-5 h-5 text-radsys-blue" />
                    <div>
                      <h4 className="text-xs font-bold font-mono">SOFTWARE & COMPUTATION</h4>
                      <p className="text-[11px] text-slate-400">AI/ML, Web & Automation</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-radsys-blue/20 text-radsys-blue px-2 py-0.5">SOFTWARE</span>
                </div>

                <div className="p-4 bg-slate-900/90 border border-slate-800 flex items-center justify-between hover:border-radsys-blue transition-colors">
                  <div className="flex items-center gap-3">
                    <Compass className="w-5 h-5 text-radsys-blue" />
                    <div>
                      <h4 className="text-xs font-bold font-mono">RESEARCH & R&D LABS</h4>
                      <p className="text-[11px] text-slate-400">Robotics, Autonomous & UAV</p>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono bg-radsys-blue/20 text-radsys-blue px-2 py-0.5">INNOVATION</span>
                </div>
              </div>

              {/* Vision quote footer in card */}
              <div className="mt-8 pt-6 border-t border-slate-800">
                <p className="text-xs text-slate-400 font-mono leading-relaxed">
                  "Our emphasis remains on engineering solutions that are practical, precise, scalable, and purposeful."
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
