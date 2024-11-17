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
  title: "Software Engineer",
  company: "Open to Opportunities",
  location: "Remote / Hybrid / On-site",
  period: "OCTOBER 2024 — PRESENT",
  description: "Currently seeking software engineering opportunities where I can leverage my full-stack development expertise and chemical engineering background. Skilled in React, TypeScript, Node.js, and database management, with a focus on building scalable web applications.",
  technologies: [
    { name: "JavaScript" },
    { name: "TypeScript" },
    { name: "React" },
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Next.js" },
    { name: "Express.js" },
    { name: "Tailwind CSS" }
  ],
  isActive: false
};
