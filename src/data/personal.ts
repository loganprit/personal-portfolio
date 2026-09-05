import type { PersonalInfo } from "./types";

export const personal: PersonalInfo = {
  name: "Logan Pritchett",
  title: "Software Engineer",
  headline: "software engineer based in Orange, Texas",
  location: "Remote",
  email: "contact@loganpritchett.me",
  avatar: "/images/profile.jpg",
  shortBio:
    "Full-stack engineer with a bias toward backend systems. I build macOS apps, terminal tools, and agents for fun.",
  resumeUrl: "/api/resume",
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
      url: "mailto:contact@loganpritchett.me",
      icon: "mail",
    },
  ],
  bio: [
    {
      label: "Engineering Background",
      description:
        "I originally studied chemical engineering. I LOVED working with Excel's VBA and Python but didn't like the chemistry. My senior year, I dropped out of college to do a software bootcamp and it was the best decision I've ever made.",
    },
    {
      label: "Christianity",
      description:
        "I am a devout Christian and I regularly serve at my church and young adults group. My faith in Jesus shapes everything about who I am.",
    },
    {
      label: "Hobbies",
      description:
        "I like playing around with AI tools and building apps for Apple devices. I'm conversational in Spanish and I'm also learning German and Russian.",
    },
  ],
  skills: [
    "TypeScript",
    "JavaScript",
    "React",
    "Node.js",
    "Express.js",
    "PostgreSQL",
    "MongoDB",
    "Docker",
  ],
};
