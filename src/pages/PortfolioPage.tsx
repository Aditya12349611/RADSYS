import React from 'react';
import { PortfolioSection } from '../components/PortfolioSection';
import { NavigationTab } from '../types';

interface PortfolioPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const PortfolioPage: React.FC<PortfolioPageProps> = ({ onNavigate }) => {
  return (
    <main className="pt-20">
      <PortfolioSection onNavigate={onNavigate} />
    </main>
  );
};
