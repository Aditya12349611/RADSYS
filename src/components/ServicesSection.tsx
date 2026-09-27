import React, { useState } from 'react';
import { SERVICE_CATEGORIES } from '../data/content';
import { ServiceCategory, ServiceItem, NavigationTab } from '../types';
import { 
  Cpu, Code, FlaskConical, ArrowRight, ChevronRight, CheckCircle2, 
  Box, Cog, Layers, FileText, RefreshCw, Activity, Printer, Wrench, Bot,
  Terminal, Globe, Calculator, BarChart3, Brain, Zap, Sparkles, Network,
  ShieldCheck, Search, TestTube, Sparkle, Sliders, Binary, Navigation, Plane, Workflow
} from 'lucide-react';

interface ServicesSectionProps {
  onNavigate: (tab: NavigationTab) => void;
  onSelectCategory?: (categoryId: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onNavigate, onSelectCategory }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('mechanical');
  const [activeServiceDetail, setActiveServiceDetail] = useState<ServiceItem | null>(null);

  // Helper map for dynamic Lucide icons
  const renderIcon = (name: string, className: string = "w-6 h-6") => {
    const icons: Record<string, React.ReactNode> = {
      Cpu: <Cpu className={className} />,
      Code: <Code className={className} />,
      FlaskConical: <FlaskConical className={className} />,
      Box: <Box className={className} />,
      Cog: <Cog className={className} />,
      Layers: <Layers className={className} />,
      FileText: <FileText className={className} />,
      RefreshCw: <RefreshCw className={className} />,
      CheckCircle2: <CheckCircle2 className={className} />,
      Activity: <Activity className={className} />,
      Printer: <Printer className={className} />,
      Wrench: <Wrench className={className} />,
      Bot: <Bot className={className} />,
      Terminal: <Terminal className={className} />,
      Globe: <Globe className={className} />,
      Calculator: <Calculator className={className} />,
      BarChart3: <BarChart3 className={className} />,
      Brain: <Brain className={className} />,
      Zap: <Zap className={className} />,
      Sparkles: <Sparkles className={className} />,
      Network: <Network className={className} />,
      ShieldCheck: <ShieldCheck className={className} />,
      Search: <Search className={className} />,
      TestTube: <TestTube className={className} />,
      Sparkle: <Sparkle className={className} />,
      Sliders: <Sliders className={className} />,
      Binary: <Binary className={className} />,
      Navigation: <Navigation className={className} />,
      Plane: <Plane className={className} />,
      Workflow: <Workflow className={className} />
    };
    return icons[name] || <Cpu className={className} />;
  };

  const currentCategoryData = SERVICE_CATEGORIES.find(c => c.id === selectedCategory) || SERVICE_CATEGORIES[0];

  return (
    <section className="py-24 bg-white border-b border-slate-200 technical-grid relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-radsys-blue"></div>
              <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">CAPABILITIES & SERVICES</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-radsys-black tracking-tight uppercase font-display">
              OUR ENGINEERING DISCIPLINES.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed">
            Delivering end-to-end technical excellence across hardware engineering, digital computing, and experimental R&D.
          </p>
        </div>

        {/* 3 Major Interactive Panels / Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {SERVICE_CATEGORIES.map((category) => {
            const isSelected = selectedCategory === category.id;
            return (
              <div
                key={category.id}
                onClick={() => {
                  setSelectedCategory(category.id);
                  if (onSelectCategory) onSelectCategory(category.id);
                }}
                className={`cursor-pointer group relative p-8 border transition-all duration-300 flex flex-col justify-between min-h-[320px] ${
                  isSelected
                    ? 'bg-radsys-black text-white border-radsys-blue shadow-xl translate-y-[-4px]'
                    : 'bg-white text-radsys-black border-slate-200 hover:border-radsys-blue hover:shadow-md hover:translate-y-[-2px]'
                }`}
              >
                {/* Tech Corner Accent on Selected */}
                {isSelected && (
                  <>
                    <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-radsys-blue"></span>
                    <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-radsys-blue"></span>
                  </>
                )}

                <div>
                  {/* Top Badge & Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className={`text-[10px] font-mono tracking-widest uppercase px-2.5 py-1 ${
                      isSelected ? 'bg-radsys-blue text-white' : 'bg-slate-100 text-slate-700'
                    }`}>
                      {category.badge}
                    </span>
                    <div className={`p-3 rounded-none transition-transform duration-300 group-hover:scale-110 ${
                      isSelected ? 'text-radsys-blue bg-slate-900' : 'text-radsys-black bg-slate-100'
                    }`}>
                      {renderIcon(category.icon, "w-6 h-6")}
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className={`text-xl font-bold tracking-tight font-display mb-3 uppercase ${
                    isSelected ? 'text-white' : 'text-radsys-black'
                  }`}>
                    {category.title}
                  </h3>
                  <p className={`text-xs leading-relaxed font-sans ${
                    isSelected ? 'text-slate-300' : 'text-slate-600'
                  }`}>
                    {category.description}
                  </p>
                </div>

                {/* Card Action Link */}
                <div className="pt-6 border-t border-slate-200/20 flex items-center justify-between mt-6">
                  <span className={`text-xs font-mono tracking-wider uppercase flex items-center gap-1 ${
                    isSelected ? 'text-radsys-blue font-bold' : 'text-slate-700 group-hover:text-radsys-blue'
                  }`}>
                    EXPLORE SERVICES ({category.services.length})
                  </span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 ${
                    isSelected ? 'text-radsys-blue' : 'text-slate-400 group-hover:text-radsys-blue'
                  }`} />
                </div>
              </div>
            );
          })}
        </div>

        {/* Detailed Services Sub-Grid for Active Category */}
        <div className="bg-slate-50 border border-slate-200 p-8 sm:p-10 transition-all duration-300">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-6 mb-8 gap-4">
            <div>
              <span className="text-xs font-mono text-radsys-blue uppercase tracking-widest">DETAILED CAPABILITIES</span>
              <h3 className="text-2xl font-bold font-display text-radsys-black uppercase mt-1">
                {currentCategoryData.title}
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-500 bg-white px-3 py-1.5 border border-slate-200">
              TOTAL SERVICES: {currentCategoryData.services.length}
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {currentCategoryData.services.map((service) => (
              <div
                key={service.id}
                onClick={() => setActiveServiceDetail(service)}
                className="bg-white border border-slate-200 p-6 hover:border-radsys-blue transition-all duration-200 cursor-pointer flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-2 bg-slate-100 text-radsys-blue group-hover:bg-radsys-blue group-hover:text-white transition-colors">
                      {renderIcon(service.icon, "w-5 h-5")}
                    </div>
                    <h4 className="text-sm font-bold font-mono text-radsys-black group-hover:text-radsys-blue transition-colors">
                      {service.title}
                    </h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    {service.description}
                  </p>
                </div>

                {service.details && service.details.length > 0 && (
                  <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-[11px] font-mono text-slate-500 group-hover:text-radsys-blue">
                    <span>{service.details.length} SUB-CAPABILITIES</span>
                    <span className="underline">VIEW SPECS →</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Service Details Modal */}
          {activeServiceDetail && (
            <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm flex items-center justify-center p-4">
              <div className="bg-white border-2 border-radsys-black max-w-2xl w-full p-8 relative shadow-2xl animate-in zoom-in-95 duration-200">
                <button
                  onClick={() => setActiveServiceDetail(null)}
                  className="absolute top-4 right-4 text-slate-400 hover:text-radsys-black font-mono text-sm px-2 py-1 border border-slate-200"
                >
                  [CLOSE X]
                </button>

                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-radsys-black text-white">
                    {renderIcon(activeServiceDetail.icon, "w-6 h-6")}
                  </div>
                  <div>
                    <span className="text-[10px] font-mono text-radsys-blue tracking-widest uppercase">SPECIFICATION SHEET</span>
                    <h3 className="text-xl font-bold font-display text-radsys-black uppercase">{activeServiceDetail.title}</h3>
                  </div>
                </div>

                <p className="text-sm text-slate-700 leading-relaxed mb-6 font-sans">
                  {activeServiceDetail.description}
                </p>

                {activeServiceDetail.details && (
                  <div className="mb-6">
                    <h5 className="text-xs font-mono text-slate-500 uppercase tracking-wider mb-3">KEY TECHNICAL SCOPE & CAPABILITIES</h5>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeServiceDetail.details.map((detail, idx) => (
                        <div key={idx} className="p-2.5 bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 flex items-center gap-2">
                          <span className="w-1.5 h-1.5 bg-radsys-blue shrink-0"></span>
                          <span>{detail}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="pt-4 border-t border-slate-200 flex justify-end gap-3">
                  <button
                    onClick={() => {
                      setActiveServiceDetail(null);
                      onNavigate('contact');
                    }}
                    className="px-6 py-2.5 bg-radsys-black text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blue transition-colors flex items-center gap-2"
                  >
                    <span>REQUEST SERVICE ENQUIRY</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
