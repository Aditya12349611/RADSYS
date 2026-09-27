import React, { useState } from 'react';
import { PORTFOLIO_PROJECTS } from '../data/content';
import { ProjectItem, NavigationTab } from '../types';
import { ArrowUpRight, Filter, Info, Wrench } from 'lucide-react';

interface PortfolioSectionProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ onNavigate }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeProjectModal, setActiveProjectModal] = useState<ProjectItem | null>(null);

  const categories = [
    'All',
    'Mechanical Engineering',
    'Product Development',
    'Robotics',
    'Software',
    'AI/ML',
    'Automation',
    'R&D'
  ];

  const filteredProjects = selectedCategory === 'All'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  return (
    <section className="py-24 bg-white border-b border-slate-200 technical-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-radsys-blue"></div>
              <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">PROJECT SHOWCASE</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-radsys-black tracking-tight uppercase font-display">
              ENGINEERING PORTFOLIO.
            </h2>
          </div>

          {/* Placeholder Disclaimer Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-amber-50 border border-amber-200 text-amber-800 text-xs font-mono">
            <Info className="w-4 h-4 shrink-0 text-amber-600" />
            <span>Demonstration project cards (Replaceable with proprietary RADSYS case studies)</span>
          </div>
        </div>

        {/* Category Filter Tabs */}
        <div className="flex flex-wrap items-center gap-2 mb-10 border-b border-slate-200 pb-4">
          <span className="text-xs font-mono text-slate-500 mr-2 flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" /> FILTER BY:
          </span>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-3.5 py-1.5 text-xs font-mono transition-all duration-200 ${
                selectedCategory === cat
                  ? 'bg-radsys-black text-white font-bold shadow-sm'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {cat.toUpperCase()}
            </button>
          ))}
        </div>

        {/* Grid Layout of Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProjectModal(project)}
              className="bg-white border border-slate-200 group relative overflow-hidden transition-all duration-300 hover:border-radsys-blue hover:shadow-xl cursor-pointer flex flex-col justify-between"
            >
              {/* Image Container with Zoom & Hover Overlay */}
              <div className="relative h-60 w-full overflow-hidden bg-slate-900">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-radsys-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>
                
                {/* Category Badge Overlay */}
                <div className="absolute top-4 left-4 bg-radsys-black/90 backdrop-blur-md text-white text-[10px] font-mono tracking-widest px-2.5 py-1 border border-slate-700">
                  {project.category.toUpperCase()}
                </div>

                {project.isPlaceholder && (
                  <div className="absolute top-4 right-4 bg-amber-500/90 text-radsys-black text-[9px] font-mono font-bold px-2 py-0.5 uppercase">
                    DEMO SPEC
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold font-display text-radsys-black group-hover:text-radsys-blue transition-colors line-clamp-2 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {project.technologies.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-slate-100 border border-slate-200 text-[10px] font-mono text-slate-700">
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 bg-slate-100 text-[10px] font-mono text-slate-500">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>

                  {/* Action Bar with Animated Line & Arrow */}
                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-mono font-bold text-slate-800 group-hover:text-radsys-blue">
                    <span className="flex items-center gap-1">
                      VIEW PROJECT DETAILS
                      <span className="w-0 group-hover:w-4 transition-all duration-300 h-[2px] bg-radsys-blue inline-block"></span>
                    </span>
                    <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Project Specification Modal */}
        {activeProjectModal && (
          <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
            <div className="bg-white border-2 border-radsys-black max-w-3xl w-full p-8 relative shadow-2xl animate-in zoom-in-95 duration-200 max-h-[90vh] overflow-y-auto">
              <button
                onClick={() => setActiveProjectModal(null)}
                className="absolute top-4 right-4 text-slate-400 hover:text-radsys-black font-mono text-xs px-3 py-1 border border-slate-200"
              >
                [CLOSE X]
              </button>

              <div className="mb-6">
                <span className="text-xs font-mono text-radsys-blue uppercase tracking-widest block mb-1">
                  PROJECT CASE STUDY // {activeProjectModal.category}
                </span>
                <h3 className="text-2xl font-bold font-display text-radsys-black uppercase">
                  {activeProjectModal.title}
                </h3>
              </div>

              <div className="mb-6 h-64 w-full overflow-hidden bg-slate-900 border border-slate-200">
                <img src={activeProjectModal.image} alt={activeProjectModal.title} className="w-full h-full object-cover" />
              </div>

              <p className="text-sm text-slate-700 leading-relaxed mb-6 font-sans">
                {activeProjectModal.description}
              </p>

              {activeProjectModal.specs && (
                <div className="mb-6">
                  <h5 className="text-xs font-mono text-slate-500 uppercase tracking-widest mb-3">ENGINEERING SPECIFICATIONS</h5>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                    {Object.entries(activeProjectModal.specs).map(([key, val]) => (
                      <div key={key} className="p-3 bg-slate-50 border border-slate-200">
                        <span className="text-[10px] font-mono text-slate-500 uppercase block">{key}</span>
                        <span className="text-xs font-mono font-bold text-radsys-black">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="pt-4 border-t border-slate-200 flex flex-wrap justify-between items-center gap-4">
                <span className="text-xs font-mono text-slate-500">
                  STATUS: DEMONSTRATION TEMPLATE READY
                </span>
                <button
                  onClick={() => {
                    setActiveProjectModal(null);
                    onNavigate('contact');
                  }}
                  className="px-6 py-2.5 bg-radsys-black text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blue transition-colors flex items-center gap-2"
                >
                  <span>DISCUSS SIMILAR SYSTEM BUILD</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
};
