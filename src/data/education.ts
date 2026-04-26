import type { Education } from "./types";

export const education: Education[] = [
  {
    institution: "Chegg Skills (Thinkful)",
    degree: "Software Engineering Certificate",
    field: "Full-Stack JavaScript Development",
    location: "Remote",
    period: "OCTOBER 2023 — OCTOBER 2024",
    description:
      "Intensive full-stack JavaScript program covering modern web development, RESTful API design, algorithms, and data structures.",
    achievements: [
      "Built full-stack applications with React and Node.js",
      "Designed and implemented RESTful APIs with Express and PostgreSQL",
      "Studied algorithms and data structures for technical problem-solving",
    ],
    technologies: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express" },
      { name: "PostgreSQL" },
      { name: "HTML" },
      { name: "CSS" },
    ],
    logo: "/logos/chegg.png",
  },
  {
    institution: "University of Louisiana at Lafayette",
    degree: "B.S. Chemical Engineering",
    field: "Engineering",
    location: "Lafayette, LA",
    period: "AUGUST 2018 — DECEMBER 2022",
    description:
      "Studied Chemical Engineering with hands-on research experience at the Energy Institute of Louisiana, later transitioned to software engineering.",
    achievements: [
      "Research apprentice studying bio-oil catalytic conversion using proprietary GC/MS reactor integration",
      "Operated and maintained GC/MS and Shimadzu TOC analytical instruments",
    ],
    technologies: [
      { name: "MATLAB" },
      { name: "GC/MS" },
      { name: "Process Simulation" },
    ],
    logo: "/logos/ull.png",
  },
];
