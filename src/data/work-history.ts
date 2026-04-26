import type { WorkExperience } from "./types";

export const experiences: WorkExperience[] = [
  {
    title: "Software Engineer I",
    company: "FloQast",
    location: "Remote",
    period: "APRIL 2025 — APRIL 2026",
    description:
      "Built product features and engineering foundations for FloQast's Journal Entry Management product while improving code quality and application performance.",
    achievements: [
      "Started a JavaScript-to-TypeScript migration initiative that gained broader company attention",
      "Led the backend Vitest migration, improving test speed by roughly 40x",
      "Resolved high-priority product defects and contributed to a 91% year-over-year reduction in open Close Engineering defects",
      "Helped establish domain refactoring patterns that improved testability, reduced cognitive load, and reached near-full coverage in refactored areas",
      "Introduced internal tooling such as a design system MCP server and a shared types package for full-stack type safety",
    ],
    technologies: [
      { name: "JavaScript" },
      { name: "TypeScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "MongoDB" },
    ],
    logo: "/logos/floqast.png",
    logoFill: true,
  },
  {
    title: "Control Systems Engineering Intern",
    company: "Valero St. Charles Refinery",
    location: "Norco, LA",
    period: "MAY 2021 — AUGUST 2021",
    description:
      "Contributed to optimizing control systems and enhancing operational efficiency at a major refinery.",
    achievements: [
      "Resolved 1,300+ critical alarm issues across 75,000 DCS blocks to prevent system failures",
      "Implemented DCS graphics for pH and speed control optimization in renewable diesel",
      "Automated alarm audits via VBA code to standardize tag formatting and improve efficiency",
    ],
    technologies: [
      { name: "Microsoft Excel VBA" },
      { name: "Aspen DMC" },
      { name: "Foxboro I/A" },
      { name: "Microsoft Visio" },
    ],
    logo: "/logos/valero.svg",
  },
  {
    title: "Process Engineering Intern",
    company: "Valero Meraux Refinery",
    location: "Meraux, LA",
    period: "MAY 2020 — AUGUST 2020",
    description:
      "Led efforts to improve process efficiency and wastewater treatment control through multi-department collaboration.",
    achievements: [
      "Led multi-phase project improving caustic control in the wastewater treatment plant",
      "Coordinated with multiple departments to manage change requests (MOCs, RACs, EWRs)",
      "Developed real-time monitoring systems by integrating PI ProcessBook tags with Excel",
      "Automated chemical usage tracking for refinery-wide chemical management",
    ],
    technologies: [
      { name: "Microsoft Excel" },
      { name: "PI ProcessBook" },
      { name: "Petro-SIM" },
    ],
    logo: "/logos/valero.svg",
  },
  {
    title: "Research Apprentice",
    company: "Energy Institute — University of Louisiana at Lafayette",
    location: "Lafayette, LA",
    period: "AUGUST 2018 — MAY 2022",
    description:
      "Conducted research in a high-throughput laboratory environment, focusing on bio-oil catalytic conversion studies.",
    achievements: [
      "Led operation and maintenance of GC/MS and Shimadzu TOC analytical instruments",
      "Headed research project on bio-oil catalytic conversion using proprietary GC/MS reactor integration",
      "Developed and presented research findings through collaborative poster presentations",
      "Conducted zeolite cracking optimization studies to determine ideal production parameters",
    ],
    technologies: [
      { name: "GC/MS" },
      { name: "TOC Analyzer" },
      { name: "Catalytic Reactor" },
      { name: "LIMS" },
    ],
    logo: "/logos/ull.png",
  },
];
