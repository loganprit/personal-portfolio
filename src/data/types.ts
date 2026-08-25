export interface WorkExperience {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  logoFill?: boolean;
}

export interface CurrentRole {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: string[];
  logo?: string;
  logoFill?: boolean;
}

export interface SocialLink {
  name: string;
  url: string;
  icon: "github" | "linkedin" | "mail";
}

export interface PersonalInfo {
  name: string;
  title: string;
  headline: string;
  location: string;
  email: string;
  avatar: string;
  shortBio: string;
  resumeUrl: string;
  socials: SocialLink[];
  bio: BioSection[];
  skills: string[];
}

export interface Education {
  institution: string;
  degree: string;
  field: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
  logo?: string;
  logoFill?: boolean;
}

export interface BioSection {
  label: string;
  description: string;
}
