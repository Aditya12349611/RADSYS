export type NavigationTab = 'home' | 'about' | 'services' | 'process' | 'research' | 'portfolio' | 'team' | 'blog' | 'contact';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  icon: string;
  details?: string[];
  deliverables?: string[];
}

export interface ServiceCategory {
  id: 'mechanical' | 'it' | 'rd';
  title: string;
  tagline: string;
  badge: string;
  description: string;
  icon: string;
  services: ServiceItem[];
  visualType: 'cad' | 'code' | 'robotics';
}

export interface ProcessStep {
  step: string;
  number: string;
  title: string;
  description: string;
  technicalDetails: string[];
}

export interface ResearchArea {
  id: string;
  title: string;
  description: string;
  focusAreas: string[];
  icon: string;
  techBadge: string;
}

export interface ProjectItem {
  id: string;
  title: string;
  category: 'Mechanical Engineering' | 'Product Development' | 'Robotics' | 'Software' | 'AI/ML' | 'Automation' | 'R&D';
  client: string;
  description: string;
  technologies: string[];
  image: string;
  featured: boolean;
  specs?: Record<string, string>;
  isPlaceholder?: boolean;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  specialization: string[];
  image: string;
  linkedin?: string;
  email?: string;
  isPlaceholder?: boolean;
}

export interface BlogPost {
  id: string;
  title: string;
  category: 'Engineering' | 'AI & Machine Learning' | 'Robotics' | 'Automation' | 'CAD / Product Design' | 'Research' | 'Technology';
  excerpt: string;
  content?: string;
  readTime: string;
  date: string;
  author: string;
  image: string;
  tags: string[];
  isPlaceholder?: boolean;
}

export interface ContactFormData {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  message: string;
}
