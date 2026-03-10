import type { PersonalInfo } from "./types";

export const personal: PersonalInfo = {
  name: "Logan Pritchett",
  title: "Software Engineer",
  headline: "25 year old software engineer based in Orange, Texas",
  location: "Remote",
  email: "logan.pritchett01@gmail.com",
  avatar: "/images/profile.jpg",
  shortBio: "Former chemical engineering student turned software engineer. I build a modern SaaS application at FloQast.",
  resumeUrl:
    "https://drive.google.com/uc?export=download&id=1BxGbUNqmMEVbfRCwa3GETz-3UcJlGXWj",
  socials: [
    {
      name: "GitHub",
      url: "https://github.com/loganprit",
      icon: "github",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/loganpritchett",
      icon: "linkedin",
    },
    {
      name: "Email",
      url: "mailto:logan.pritchett01@gmail.com",
      icon: "mail",
    },
  ],
  bio: [
    {
      label: "Engineering Background",
      description: "Followed my dad's footsteps into chemical engineering, realized I hated it and transitioned to software engineering.",
    },
        {
      label: "Outside the Office",
      description: "I'm a devout Christian and I serve regularly at my church. I also am an avid language learner, I can speak Spanish and I'm learning German and Russian.",
    },
    {
      label: "Based in Orange, Texas",
      description: "I grew up in Lake Charles, Louisiana and currently live in Orange, Texas.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "Express.js",
    "Tailwind CSS",
    "PostgreSQL",
    "MongoDB",
    "Docker",
    "Git",
    "Framer Motion",
    "HTML/CSS",
    "Jest",
  ],
};
