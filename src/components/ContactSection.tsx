import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/content';
import { ContactFormData } from '../types';
import confetti from 'canvas-confetti';
import { Mail, Phone, MapPin, Send, CheckCircle2, AlertCircle, Loader2, Globe } from 'lucide-react';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    company: '',
    phone: '',
    service: 'Mechanical Engineering',
    message: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) newErrors.message = 'Please provide details about your technical enquiry';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsLoading(true);

    // Simulate server response
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
      
      // Trigger subtle celebration effect
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.7 },
        colors: ['#0066FF', '#0B0F14', '#3385FF']
      });
    }, 1200);
  };

  return (
    <section id="contact" className="py-24 bg-slate-50 border-b border-slate-200 technical-grid relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div>
            <div className="flex items-center gap-3 mb-3">
              <div className="h-[2px] w-8 bg-radsys-blue"></div>
              <span className="text-xs font-mono tracking-widest text-radsys-blue uppercase">START A COLLABORATION</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-extrabold text-radsys-black tracking-tight uppercase font-display">
              LET'S BUILD SOMETHING NEXT.
            </h2>
          </div>
          <p className="text-slate-600 max-w-md text-sm leading-relaxed font-sans">
            Reach out to discuss your technical challenges, engineering projects, software architecture, or R&D initiatives.
          </p>
        </div>

        {/* 2-Column Wireframe Grid Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Validated Contact Form */}
          <div className="lg:col-span-7 bg-white border border-slate-200 p-8 sm:p-10 shadow-sm relative tech-border">
            
            {isSubmitted ? (
              <div className="py-12 flex flex-col items-center text-center space-y-4">
                <div className="w-16 h-16 bg-green-50 border-2 border-green-500 rounded-full flex items-center justify-center text-green-600">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold font-display uppercase text-radsys-black">ENQUIRY TRANSMITTED</h3>
                <p className="text-sm text-slate-600 max-w-md leading-relaxed font-sans">
                  Thank you for contacting RADSYS. Your technical inquiry has been received. Our engineering team will review your requirements and get back to you shortly.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        service: 'Mechanical Engineering',
                        message: ''
                      });
                    }}
                    className="px-6 py-2.5 bg-radsys-black text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blue transition-colors"
                  >
                    SEND ANOTHER ENQUIRY
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                
                <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                  <span className="text-xs font-mono text-radsys-blue uppercase tracking-widest">TECHNICAL ENQUIRY FORM</span>
                  <span className="text-[10px] font-mono text-slate-400">* REQUIRED FIELDS</span>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-mono text-radsys-black uppercase font-bold mb-1.5">
                      FULL NAME *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Dr. Alex Mercer"
                      className={`w-full px-4 py-3 bg-slate-50 border text-xs font-mono text-radsys-black focus:outline-none focus:bg-white transition-colors ${
                        errors.name ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-radsys-blue'
                      }`}
                    />
                    {errors.name && (
                      <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.name}
                      </span>
                    )}
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-mono text-radsys-black uppercase font-bold mb-1.5">
                      EMAIL ADDRESS *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. alex@enterprise.com"
                      className={`w-full px-4 py-3 bg-slate-50 border text-xs font-mono text-radsys-black focus:outline-none focus:bg-white transition-colors ${
                        errors.email ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-radsys-blue'
                      }`}
                    />
                    {errors.email && (
                      <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" /> {errors.email}
                      </span>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Company */}
                  <div>
                    <label className="block text-xs font-mono text-radsys-black uppercase font-bold mb-1.5">
                      ORGANIZATION / COMPANY
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      placeholder="e.g. Apex Dynamics Ltd."
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs font-mono text-radsys-black focus:outline-none focus:border-radsys-blue focus:bg-white transition-colors"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-mono text-radsys-black uppercase font-bold mb-1.5">
                      PHONE NUMBER
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 (555) 000-0000"
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs font-mono text-radsys-black focus:outline-none focus:border-radsys-blue focus:bg-white transition-colors"
                    />
                  </div>
                </div>

                {/* Service Dropdown */}
                <div>
                  <label className="block text-xs font-mono text-radsys-black uppercase font-bold mb-1.5">
                    SERVICE / AREA OF INTEREST
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-300 text-xs font-mono text-radsys-black focus:outline-none focus:border-radsys-blue focus:bg-white transition-colors cursor-pointer"
                  >
                    <option value="Mechanical Engineering">Mechanical Engineering & CAD</option>
                    <option value="Information Technology">Information Technology & Software</option>
                    <option value="Research & Development">Research & Development (R&D)</option>
                    <option value="Robotics & Mechatronics">Robotics & Mechatronics</option>
                    <option value="AI & Machine Learning">AI & Machine Learning</option>
                    <option value="Technical Consulting">Technical Advisory & Consulting</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-xs font-mono text-radsys-black uppercase font-bold mb-1.5">
                    PROJECT SCOPE & MESSAGE *
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Describe your engineering objectives, specifications, or technological challenge..."
                    className={`w-full px-4 py-3 bg-slate-50 border text-xs font-mono text-radsys-black focus:outline-none focus:bg-white transition-colors ${
                      errors.message ? 'border-red-500 bg-red-50/20' : 'border-slate-300 focus:border-radsys-blue'
                    }`}
                  ></textarea>
                  {errors.message && (
                    <span className="text-[10px] text-red-500 font-mono mt-1 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" /> {errors.message}
                    </span>
                  )}
                </div>

                {/* Submit CTA */}
                <button
                  type="submit"
                  disabled={isLoading}
                  className="w-full py-4 bg-radsys-black text-white text-xs font-mono tracking-widest uppercase hover:bg-radsys-blue transition-colors flex items-center justify-center gap-3 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin text-radsys-blue" />
                      <span>TRANSMITTING ENQUIRY...</span>
                    </>
                  ) : (
                    <>
                      <span>SEND ENQUIRY</span>
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Right Column: Contact Details & Technical Map HUD Visual */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            {/* Contact Details Panel */}
            <div className="bg-radsys-black text-white p-8 border border-slate-800 space-y-6 technical-grid-dark relative">
              <span className="absolute top-0 right-0 w-3 h-3 border-t-2 border-r-2 border-radsys-blue"></span>

              <div className="border-b border-slate-800 pb-4">
                <span className="text-[10px] font-mono text-radsys-blue uppercase tracking-widest">DIRECT COMMUNICATIONS</span>
                <h3 className="text-xl font-bold font-display text-white uppercase mt-1">HEADQUARTERS & CONTACT</h3>
              </div>

              <div className="space-y-4 font-mono text-xs">
                <div className="flex items-start gap-3 text-slate-300">
                  <Mail className="w-4 h-4 text-radsys-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 text-[10px] block">PRIMARY EMAIL</span>
                    <a href={`mailto:${COMPANY_INFO.contactEmail}`} className="hover:text-radsys-blue transition-colors">
                      {COMPANY_INFO.contactEmail}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <Phone className="w-4 h-4 text-radsys-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 text-[10px] block">TELEPHONE</span>
                    <span>{COMPANY_INFO.contactPhone}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 text-slate-300">
                  <MapPin className="w-4 h-4 text-radsys-blue shrink-0 mt-0.5" />
                  <div>
                    <span className="text-slate-500 text-[10px] block">LOCATION HUB</span>
                    <span>{COMPANY_INFO.location}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Interactive Technical Map HUD Grid */}
            <div className="bg-slate-900 border border-slate-800 p-6 flex-1 min-h-[220px] relative flex flex-col justify-between technical-grid-dark">
              <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                <span className="text-[10px] font-mono text-radsys-blue">SPATIAL GRID // GLOBAL HUB</span>
                <span className="text-[10px] font-mono text-slate-500">LAT: 37.7749 N | LON: -122.4194 W</span>
              </div>

              <div className="my-auto py-8 flex flex-col items-center justify-center text-center space-y-2">
                <Globe className="w-10 h-10 text-radsys-blue animate-pulse" />
                <span className="text-xs font-mono text-white tracking-widest uppercase font-bold">MULTIDISCIPLINARY R&D CENTER</span>
                <span className="text-[10px] font-mono text-slate-400">OPERATIONAL 24/7 FOR GLOBAL CLIENTS</span>
              </div>

              <div className="pt-2 border-t border-slate-800 flex justify-between text-[10px] font-mono text-slate-500">
                <span>RADSYS ENGINE HQ</span>
                <span className="text-radsys-blue">STATUS: ONLINE</span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
