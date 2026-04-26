import type { PersonalInfo } from "./types";

export const personal: PersonalInfo = {
  name: "Logan Pritchett",
  title: "Software Engineer",
  headline: "I'm a 25-year-old software engineer based in Orange, Texas.",
  location: "Remote",
  email: "logan.pritchett01@gmail.com",
  avatar: "/images/profile.jpg",
  shortBio:
    "Full-stack with a bias toward backend by profession, macOS and terminal applications by passion. I'm also playing around with building agents.",
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
