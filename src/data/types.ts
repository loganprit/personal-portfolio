export interface Technology {
  name: string;
}

export interface ProjectUpdates {
  completed: string[];
}

export interface Project {
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  deploy_link?: string;
  github_link: string;
  updates?: ProjectUpdates;
  featured?: boolean;
  image?: string;
}

export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: Technology[];
}

export interface CurrentRole {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: Technology[];
  isActive: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  tagline: string;
  location: string;
  email: string;
  avatar: string;
  resumeUrl: string;
  socials: SocialLink[];
  bio: BioSection[];
  skills: string[];
}

export interface BioSection {
  label: string;
  description: string;
}
