import React from 'react';
import { TeamSection } from '../components/TeamSection';
import { NavigationTab } from '../types';

interface TeamPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const TeamPage: React.FC<TeamPageProps> = ({ onNavigate }) => {
  return (
    <main className="pt-20">
      <TeamSection onNavigate={onNavigate} />
    </main>
  );
};
