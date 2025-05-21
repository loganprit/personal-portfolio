interface Technology {
  name: string;
  className?: string;
}

interface CurrentRole {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  technologies: Technology[];
  isActive: boolean;
}

export const currentRole: CurrentRole = {
  title: "Software Engineer I",
  company: "FloQast",
  location: "Remote",
  period: "APRIL 2025 — PRESENT",
  description: "Currently working on the Journal Entry product for FloQast.",
  technologies: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "Express.js" },
    { name: "MongoDB" },
  ],
  isActive: true,
};
