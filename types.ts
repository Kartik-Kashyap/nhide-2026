export enum ThemeDifficulty {
  BEGINNER = 'Beginner',
  INTERMEDIATE = 'Intermediate',
  ADVANCED = 'Advanced',
}

export interface Theme {
  id: string;
  title: string;
  description: string;
  deliverable: string;
  techStack: string[];
  difficulty: ThemeDifficulty;
  category: string;
}

export interface EventItem {
  id: string;
  title: string;
  date: string;
  time?: string;
  description: string;
  location?: string;
  isCompleted?: boolean;
}

export interface Prize {
  id: string;
  rank: string;
  amount: string;
  perks: string[];
  iconName: string;
}

export interface NavItem {
  label: string;
  path: string;
}

export interface Organizer {
  name: string;
  role: string;
  email: string;
  image?: string;
}

export interface Speaker {
  name: string;
  designation: string;
  organization: string;
  location: string;
  image?: string;
}

export interface VentureCapitalist {
  name: string;
  designation: string;
  organization: string;
  location?: string;
  image?: string;
  logo?: string;
  link?: string;
}