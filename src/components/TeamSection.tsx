import React from 'react';
import { TEAM_MEMBERS } from '../data/content';
import { NavigationTab } from '../types';
import { Linkedin, Mail, ShieldCheck, UserCheck } from 'lucide-react';

interface TeamSectionProps {
  onNavigate?: (tab: NavigationTab) => void;
}

export const TeamSection: React.FC<TeamSectionProps> = () => {
  return (
    <section className="py-24 bg-slate-50 border-b border-slate-200 technical-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-radsys-blue"></div>
              <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">ENGINEERING TALENT</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-radsys-black tracking-tight uppercase font-display">
              OUR LEADERSHIP & TEAM.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed">
            A multidisciplinary team of mechanical engineers, software architects, mechatronics researchers, and technical specialists.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TEAM_MEMBERS.map((member) => (
            <div
              key={member.id}
              className="bg-white border border-slate-200 group overflow-hidden transition-all duration-300 hover:border-radsys-blue hover:shadow-xl flex flex-col justify-between"
            >
              {/* Photo */}
              <div className="relative h-72 w-full overflow-hidden bg-slate-900">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale contrast-125 group-hover:grayscale-0"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-radsys-black/80 via-transparent to-transparent"></div>

                {member.isPlaceholder && (
                  <div className="absolute top-3 right-3 bg-radsys-black/80 text-slate-300 text-[9px] font-mono px-2 py-0.5 border border-slate-700">
                    ROLE PLACEHOLDER
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <span className="text-[10px] font-mono text-radsys-blue tracking-widest uppercase block mb-1">
                    {member.role}
                  </span>
                  <h3 className="text-lg font-bold font-display text-radsys-black group-hover:text-radsys-blue transition-colors mb-2">
                    {member.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {member.bio}
                  </p>
                </div>

                <div>
                  {/* Specialization Badges */}
                  <div className="flex flex-wrap gap-1 mb-4">
                    {member.specialization.map((spec, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[9px] font-mono text-slate-700">
                        {spec}
                      </span>
                    ))}
                  </div>

                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-slate-400">
                    <span className="text-[10px] font-mono">RADSYS ARCHITECT</span>
                    <div className="flex items-center gap-2">
                      <button aria-label="LinkedIn Profile" className="hover:text-radsys-blue transition-colors">
                        <Linkedin className="w-4 h-4" />
                      </button>
                      <button aria-label="Contact Email" className="hover:text-radsys-blue transition-colors">
                        <Mail className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
