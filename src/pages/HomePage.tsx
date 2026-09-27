import React from 'react';
import { Hero } from '../components/Hero';
import { AboutSection } from '../components/AboutSection';
import { ServicesSection } from '../components/ServicesSection';
import { ProcessSection } from '../components/ProcessSection';
import { ResearchSection } from '../components/ResearchSection';
import { PortfolioSection } from '../components/PortfolioSection';
import { TeamSection } from '../components/TeamSection';
import { BlogSection } from '../components/BlogSection';
import { ContactSection } from '../components/ContactSection';
import { NavigationTab } from '../types';

interface HomePageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ onNavigate }) => {
  return (
    <main>
      <div id="home">
        <Hero onNavigate={onNavigate} />
      </div>
      <div id="about">
        <AboutSection onNavigate={onNavigate} />
      </div>
      <div id="services">
        <ServicesSection onNavigate={onNavigate} />
      </div>
      <div id="process">
        <ProcessSection />
      </div>
      <div id="research">
        <ResearchSection onNavigate={onNavigate} />
      </div>
      <div id="portfolio">
        <PortfolioSection onNavigate={onNavigate} />
      </div>
      <div id="team">
        <TeamSection onNavigate={onNavigate} />
      </div>
      <div id="blog">
        <BlogSection onNavigate={onNavigate} />
      </div>
      <div id="contact">
        <ContactSection />
      </div>
    </main>
  );
};
