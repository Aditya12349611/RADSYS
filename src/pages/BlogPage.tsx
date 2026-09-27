import React from 'react';
import { BlogSection } from '../components/BlogSection';
import { NavigationTab } from '../types';

interface BlogPageProps {
  onNavigate: (tab: NavigationTab) => void;
}

export const BlogPage: React.FC<BlogPageProps> = ({ onNavigate }) => {
  return (
    <main className="pt-20">
      <BlogSection onNavigate={onNavigate} />
    </main>
  );
};
