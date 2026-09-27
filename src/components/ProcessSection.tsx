import React, { useState } from 'react';
import { PROCESS_STEPS } from '../data/content';
import { Layers, Activity, CheckCircle2, Cpu, Wrench, Shield, ArrowRight, Check } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  return (
    <section className="py-24 bg-radsys-black text-white relative overflow-hidden technical-grid-dark border-b border-slate-800">
      
      {/* Background glowing line */}
      <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-slate-800 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-radsys-blue"></div>
              <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">WORKFLOW & METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight uppercase font-display">
              FROM IDEA TO ENGINEERED REALITY.
            </h2>
          </div>
          <p className="text-slate-400 max-w-md text-sm leading-relaxed font-sans">
            A rigorous 8-stage engineering process bridging raw technical concepts to mission-critical operational deployment.
          </p>
        </div>

        {/* 8-Step Connected Timeline (Desktop Horizontal Bar + Clickable Nodes) */}
        <div className="relative mb-12">
          
          {/* Timeline Bar */}
          <div className="hidden lg:block absolute top-[28px] left-[5%] right-[5%] h-[2px] bg-slate-800 z-0">
            <div 
              className="h-full bg-radsys-blue transition-all duration-500"
              style={{ width: `${(activeStep / (PROCESS_STEPS.length - 1)) * 100}%` }}
            ></div>
          </div>

          {/* 8 Process Step Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-3 relative z-10">
            {PROCESS_STEPS.map((step, idx) => {
              const isActive = activeStep === idx;
              const isPast = idx < activeStep;

              return (
                <button
                  key={step.step}
                  onClick={() => setActiveStep(idx)}
                  className={`flex flex-col items-center text-center p-3 rounded-none transition-all duration-300 border focus:outline-none ${
                    isActive
                      ? 'bg-radsys-blue text-white border-radsys-blue scale-105 shadow-xl'
                      : isPast
                      ? 'bg-slate-900 text-slate-200 border-radsys-blue/40 hover:border-radsys-blue'
                      : 'bg-slate-950 text-slate-400 border-slate-800 hover:border-slate-700'
                  }`}
                >
                  {/* Step Number Dot */}
                  <div className={`w-8 h-8 mb-2 flex items-center justify-center font-mono text-xs font-bold transition-all ${
                    isActive
                      ? 'bg-white text-radsys-black'
                      : isPast
                      ? 'bg-radsys-blue text-white'
                      : 'bg-slate-800 text-slate-400'
                  }`}>
                    {isPast ? <Check className="w-3.5 h-3.5" /> : step.step}
                  </div>

                  <span className="text-xs font-bold font-mono uppercase tracking-wider line-clamp-1">
                    {step.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Stage Detailed Breakdown Panel */}
        <div className="bg-slate-900 border border-slate-800 p-8 sm:p-10 relative">
          
          {/* Tech corners */}
          <span className="absolute top-0 left-0 w-3 h-3 border-t-2 border-l-2 border-radsys-blue"></span>
          <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-radsys-blue"></span>
          <span className="absolute bottom-0 left-0 w-3 h-3 border-b-2 border-l-2 border-radsys-blue"></span>
          <span className="absolute bottom-0 right-0 w-3 h-3 border-b-2 border-r-2 border-radsys-blue"></span>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: Step Info */}
            <div className="lg:col-span-7 space-y-4">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-extrabold font-mono text-radsys-blue">
                  {PROCESS_STEPS[activeStep].number}
                </span>
                <span className="text-xs font-mono text-slate-400 tracking-widest uppercase">
                  STAGE {activeStep + 1} OF 8
                </span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold font-display text-white uppercase">
                {PROCESS_STEPS[activeStep].title}
              </h3>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed font-sans">
                {PROCESS_STEPS[activeStep].description}
              </p>

              <div className="pt-4">
                <h5 className="text-xs font-mono text-slate-400 uppercase tracking-widest mb-3">STAGE TECHNICAL DELIVERABLES</h5>
                <div className="flex flex-wrap gap-2">
                  {PROCESS_STEPS[activeStep].technicalDetails.map((detail, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-800 border border-slate-700 text-xs font-mono text-radsys-blue">
                      ✓ {detail}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Right: Technical Diagram Card */}
            <div className="lg:col-span-5 bg-slate-950 p-6 border border-slate-800 flex flex-col justify-between min-h-[220px]">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-[10px] font-mono text-radsys-blue uppercase">HUD DIAGNOSTIC STATE</span>
                <span className="text-[10px] font-mono text-slate-500">GATEWAY #{activeStep + 1}</span>
              </div>

              <div className="py-6 space-y-2 font-mono text-xs text-slate-300">
                <div className="flex justify-between">
                  <span className="text-slate-500">VERIFICATION:</span>
                  <span className="text-green-400">PASSED [100%]</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">DISCIPLINE SYNC:</span>
                  <span className="text-radsys-blue">MECH + SOFT + R&D</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">TOLERANCE CHECK:</span>
                  <span className="text-white">NOMINAL SPEC</span>
                </div>
              </div>

              <div className="flex justify-between items-center pt-3 border-t border-slate-800 text-[11px] font-mono">
                <button
                  disabled={activeStep === 0}
                  onClick={() => setActiveStep(prev => Math.max(0, prev - 1))}
                  className="text-slate-400 hover:text-white disabled:opacity-30"
                >
                  ← PREVIOUS STAGE
                </button>
                <button
                  disabled={activeStep === PROCESS_STEPS.length - 1}
                  onClick={() => setActiveStep(prev => Math.min(PROCESS_STEPS.length - 1, prev + 1))}
                  className="text-radsys-blue hover:text-white disabled:opacity-30"
                >
                  NEXT STAGE →
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
