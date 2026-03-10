import type { Project } from "./types";

export const projects: Project[] = [
  {
    title: "Portfolio V3",
    period: "OCTOBER 2024 - PRESENT",
    description:
      "Modern portfolio website built with Next.js 15, TypeScript, and Tailwind CSS. Features a responsive design with dark mode support, smooth page transitions, and a glass-morphism UI effect.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" },
    ],
    github_link: "https://github.com/loganprit/personal-portfolio",
  },
  {
    title: "WeLoveMovies",
    period: "MAY 2024 - PRESENT",
    description:
      "A movie database application designed to help users discover movies, read reviews, and find local theater showtimes. Features include browsing movies currently showing in theaters, exploring detailed movie descriptions with aggregated reviews, and finding theaters showing specific movies.",
    updates: {
      completed: [
        "Refactored to TypeScript for improved type safety and developer experience",
        "Visual redesign with Tailwind CSS and comprehensive UI component library",
        "Caching layer implemented via Tanstack Query for improved performance",
      ],
    },
    technologies: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Tailwind CSS" },
      { name: "Tanstack Router" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Knex.js" },
      { name: "Jest" },
      { name: "Docker" },
    ],
    deploy_link: "https://welovemovies-front-end-ribo.onrender.com/",
    github_link: "https://github.com/loganprit/welovemovies",
    featured: true,
    image: "/images/projects/welovemovies.svg",
  },
  {
    title: "Portfolio V2",
    period: "OCTOBER 2024 - OCTOBER 2024",
    description:
      "Single-page portfolio built with HTML5 UP's Dimension template, featuring a responsive modal-based layout with smooth transitions and dynamic backgrounds.",
    technologies: [
      { name: "HTML" },
      { name: "SCSS" },
      { name: "JavaScript" },
      { name: "jQuery" },
    ],
    deploy_link: "https://v2.loganpritchett.me",
    github_link:
      "https://github.com/loganprit/personal-portfolio/tree/backup/v2",
  },
  {
    title: "Periodic Tables",
    period: "MAY 2024 - JUNE 2024",
    description:
      "A full-stack restaurant reservation system designed to manage reservations and table assignments for fine dining restaurants.",
    technologies: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "Knex.js" },
    ],
    deploy_link:
      "https://restaurant-reservation-frontend-v5ci.onrender.com/",
    github_link: "https://github.com/loganprit/periodic-tables",
    featured: true,
    image: "/images/projects/periodic-tables.svg",
  },
  {
    title: "GrubDash",
    period: "MARCH 2024",
    description:
      "A restaurant management system built with JavaScript, Node.js, Express.js, and PostgreSQL. Features include creating, updating and deleting menu items.",
    technologies: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
    ],
    deploy_link: "https://grubdash-frontend-ky4l.onrender.com",
    github_link: "https://github.com/loganprit/grubdash",
    featured: true,
    image: "/images/projects/grubdash.svg",
  },
  {
    title: "Decoder Ring",
    period: "FEBRUARY 2024",
    description:
      "A comprehensive encryption/decryption web application featuring multiple algorithms including Caesar Shift, Polybius Square, and Substitution Cipher.",
    technologies: [
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "Node.js" },
      { name: "Bootstrap" },
    ],
    deploy_link: "https://loganprit.github.io/decoder-ring/",
    github_link: "https://github.com/loganprit/decoder-ring",
  },
  {
    title: "Recipe Tracker",
    period: "FEBRUARY 2024",
    description:
      "A digital culinary companion that transforms recipe management from scattered notes to an organized collection with comprehensive ingredient and instruction tracking.",
    technologies: [
      { name: "React" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Bootstrap" },
    ],
    deploy_link: "https://recipe-app-yab9.onrender.com/",
    github_link: "https://github.com/loganprit/recipe-app",
  },
  {
    title: "Flashcard-o-matic",
    period: "FEBRUARY 2024",
    description:
      "A comprehensive study application designed to enhance learning through customizable flashcard decks with full CRUD functionality.",
    technologies: [
      { name: "React" },
      { name: "Express.js" },
      { name: "Knex.js" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS" },
    ],
    github_link: "https://github.com/loganprit/flashcard-o-matic",
  },
  {
    title: "Thinkfulbnb",
    period: "DECEMBER 2023 - JANUARY 2024",
    description:
      "A mock vacation rental website showcasing responsive design that adapts seamlessly from mobile to desktop views using modern CSS Flexbox.",
    technologies: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Flexbox" },
    ],
    deploy_link: "https://loganprit.github.io/thinkfulbnb/",
    github_link: "https://github.com/loganprit/thinkfulbnb",
  },
  {
    title: "Local Library",
    period: "NOVEMBER 2023",
    description:
      "A digital hub for managing and tracking community library resources with a comprehensive dashboard showing library stats and borrowing history.",
    technologies: [
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Bootstrap" },
      { name: "HTML5" },
      { name: "Express.js" },
    ],
    github_link: "https://github.com/loganprit/local-library-project",
  },
  {
    title: "Portfolio V1",
    period: "OCTOBER 2023",
    description:
      "A static portfolio website built with HTML5, CSS, and JavaScript featuring a clean interface focused on showcasing personal information.",
    technologies: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "JavaScript" },
    ],
    deploy_link: "https://v1.loganpritchett.me",
    github_link:
      "https://github.com/loganprit/personal-portfolio/tree/backup/v1",
  },
];
