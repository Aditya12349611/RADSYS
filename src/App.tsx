import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { PortfolioPage } from './pages/PortfolioPage';
import { TeamPage } from './pages/TeamPage';
import { BlogPage } from './pages/BlogPage';
import { ContactPage } from './pages/ContactPage';
import { ProcessSection } from './components/ProcessSection';
import { ResearchSection } from './components/ResearchSection';
import { NavigationTab } from './types';

export const App: React.FC = () => {
  const [activeTab, setActiveTab] = useState<NavigationTab>('home');

  const handleNavigate = (tab: NavigationTab) => {
    setActiveTab(tab);
    
    // If on homepage and selecting a section, scroll smoothly to section ID
    if (tab === 'home') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      const sectionElement = document.getElementById(tab);
      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  const renderCurrentPage = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />;
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />;
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />;
      case 'process':
        return (
          <main className="pt-20">
            <ProcessSection />
          </main>
        );
      case 'research':
        return (
          <main className="pt-20">
            <ResearchSection onNavigate={handleNavigate} />
          </main>
        );
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />;
      case 'team':
        return <TeamPage onNavigate={handleNavigate} />;
      case 'blog':
        return <BlogPage onNavigate={handleNavigate} />;
      case 'contact':
        return <ContactPage />;
      default:
        return <HomePage onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-radsys-black selection:bg-radsys-blue selection:text-white">
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} onNavigateSection={handleNavigate} />
      <div className="flex-1">
        {renderCurrentPage()}
      </div>
      <Footer onNavigate={handleNavigate} />
    </div>
  );
};

export default App;
