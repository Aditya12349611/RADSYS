import React from 'react';
import { ServicesSection } from '../components/ServicesSection';
import { NavigationTab } from '../types';

interface ServicesPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({ onNavigate }) => {
  return (
    <main className="pt-20">
      <ServicesSection onNavigate={onNavigate} />
    </main>
  );
};
