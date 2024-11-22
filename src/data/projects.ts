/**
 * Project data store
 * @description Collection of all projects to be displayed on the projects page
 */
export const projects = [
  {
    title: "Portfolio V3",
    period: "OCTOBER 2024 - PRESENT",
    description: "Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a responsive design with dark mode support, smooth page transitions, and a glass-morphism UI effect.",
    technologies: [
      { name: "Next.js" },
      { name: "TypeScript" },
      { name: "Tailwind CSS" },
      { name: "Framer Motion" }
    ],
    deploy_link: "You're looking at it!", // TODO: Update projects page for this specific project to display the "You're looking at it!" message
    github_link: "https://github.com/loganprit/portfolio-v3" // TODO: Update with the actual GitHub link
  },
  {
    title: "Portfolio V2",
    period: "OCTOBER 2024 - OCTOBER 2024",
    description: "Single-page portfolio built with HTML5 UP's Dimension template, featuring a responsive modal-based layout with smooth transitions and dynamic backgrounds. Implemented with SCSS for enhanced styling capabilities and custom effects like background blur on modal activation.",
    technologies: [
      { name: "HTML" },
      { name: "SCSS" },
      { name: "JavaScript" },
      { name: "jQuery" }
    ],
    deploy_link: "https://loganprit.github.io/personal-portfolio/", // TODO: Update with actual deploy link (deploy it)
    github_link: "https://github.com/loganprit/personal-portfolio/tree/backup/v2"
  },
  {
    title: "Periodic Tables",
    period: "MAY 2024 - JUNE 2024",
    description: "A full-stack restaurant reservation system designed to manage reservations and table assignments for fine dining restaurants. Features include creating, updating and canceling reservations, assigning reservations to tables, validating reservation times/dates, and searching reservations by phone number.",
    updates: {
        completed: [],
        planned: [
            "Refactor to TypeScript for improved type safety and developer experience",
            "Implementing smooth transition animations between pages",
            "Adding skeleton loading states",
            "Adding search by last name functionality"
        ]
    },
    technologies: [
      { name: "JavaScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "Knex.js" }
    ],
    deploy_link: "https://restaurant-reservation-frontend-v5ci.onrender.com/",
    github_link: "https://github.com/loganprit/periodic-tables"
  },
  {
    title: "WeLoveMovies",
    period: "MAY 2024",
    description: "A movie database application designed to help users discover movies, read reviews, and find local theater showtimes. Features include browsing movies currently showing in theaters, exploring detailed movie descriptions with aggregated reviews, and finding theaters showing specific movies.",
    updates: {
        completed: [
            "Refactored to TypeScript for improved type safety and developer experience",
        ],
        planned: [
            "Visual redesign with Tailwind CSS and comprehensive UI component library",
            "Advanced filtering options for sorting by ratings, release dates, and demographics", 
            "Integration with TMDb API for expanded movie metadata",
            "Theater location search based on user geolocation",
            "Caching layer implementation for improved performance",
            "User authentication and authorization for personalized features"
        ]
    },
    technologies: [
      { name: "TypeScript" },
      { name: "React" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" },
      { name: "SQLite" },
      { name: "Knex.js" },
      { name: "Jest" },
      { name: "Docker" }
    ],
    deploy_link: "https://welovemovies-front-end-ribo.onrender.com/",
    github_link: "https://github.com/loganprit/welovemovies"
  },
  {
    title: "GrubDash",
    period: "MARCH 2024",
    description: "A restaurant management system built with JavaScript, Node.js, Express.js, and PostgreSQL. Features include creating, updating and deleting menu items, as well as searching for items by name.", // TODO: Update with actual description
    technologies: [
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Express.js" },
      { name: "PostgreSQL" }
    ], // TODO: Update with actual technologies
    deploy_link: "https://grubdash-front-end-ribo.onrender.com/", // TODO: Update with actual deploy link (deploy it)
    github_link: "https://github.com/loganprit/grubdash" // TODO: Create monorepo for GrubDash frontend and backend
  },
  {
    title: "Decoder Ring",
    period: "FEBRUARY 2024",
    description: "A comprehensive encryption/decryption web application featuring multiple algorithms including Caesar Shift, Polybius Square, and Substitution Cipher. Built with a clean, intuitive interface for encoding and decoding messages in real-time. Provides robust security options for personal, professional, and educational use cases.",
    updates: {
        completed: [],
        planned: [
            "Refactor to TypeScript for improved type safety and developer experience",
            "Implement TailwindCSS for responsive design",
            "Interactive search and sorting capabilities",
        ]
    },
    technologies: [
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "Node.js" },
      { name: "Bootstrap" }
    ],
    deploy_link: "https://loganprit.github.io/decoder-ring/",
    github_link: "https://github.com/loganprit/decoder-ring"
  },
  {
    title: "Recipe Tracker Application",
    period: "FEBRUARY 2024",
    description: "A digital culinary companion that transforms recipe management from scattered notes to an organized collection. Built with React for seamless user interaction, the application enables direct recipe addition on the homepage and provides comprehensive ingredient and instruction tracking. Features an intuitive interface that makes recipe management effortless while maintaining visual appeal across all devices.",
    updates: {
      completed: [],
      planned: [
        "Implement advanced search functionality by ingredients and recipe names",
        "Add sorting capabilities by recipe name and cuisine type", 
        "Modernize UI with enhanced visual design",
        "Enable recipe editing and revision tracking",
        "Integrate social sharing features for recipe distribution"
      ]
    },
    technologies: [
      { name: "React" },
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Bootstrap" }
    ],
    deploy_link: "https://recipe-app-yab9.onrender.com/",
    github_link: "https://github.com/loganprit/recipe-app"
  },
  {
    title: "Flashcard-o-matic",
    period: "FEBRUARY 2024",
    description: "A comprehensive study application designed to enhance learning through customizable flashcard decks. Features a clean, intuitive interface for creating, editing, and managing decks and cards with a robust REST API enabling full CRUD functionality. Built with React for seamless state management and Express/Knex for reliable data persistence, making it an ideal tool for students and educators alike.",
    updates: {
      completed: [],
      planned: [
        "Implement advanced search functionality by topic",
        "Implement spaced repetition learning algorithm", 
        "Add sorting capabilities by topic and difficulty level",
        "Enhanced UI with TailwindCSS",
        "Integrate social sharing features for flashcard distribution"
      ]
    },
    technologies: [
      { name: "React" },
      { name: "Express.js" },
      { name: "Knex.js" },
      { name: "JavaScript" },
      { name: "HTML5" },
      { name: "CSS" }
    ],
    deploy_link: "https://flashcard-o-matic-ribo.onrender.com/", // TODO: Update with actual deploy link (deploy it)
    github_link: "https://github.com/loganprit/flashcard-o-matic"
  },
  {
    title: "Thinkfulbnb",
    period: "DECEMBER 2023 - JANUARY 2024",
    description: "A mock vacation rental website inspired by platforms like Airbnb and OkCupid, showcasing responsive design that adapts seamlessly from mobile to desktop views. Features include property listings for unique accommodations like yachts and medieval castles, with layouts optimized using modern CSS Flexbox techniques for fluid responsiveness across all devices.",
    updates: {
      completed: [],
      planned: [
        "Dynamic Content: Fetch property listings from server/API for real-time availability",
        "User Authentication: Create secure authentication for personalized experiences",
        "Interactive Map & Booking System: Add interactive map search and comprehensive booking",
        "Performance & SEO: Optimize site performance and implement SEO strategies",
        "Social Media Integration: Add social sharing and engagement features"
      ]
    },
    technologies: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "Flexbox" }
    ],
    deploy_link: "https://loganprit.github.io/thinkfulbnb/",
    github_link: "https://github.com/loganprit/thinkfulbnb"
  },
  {
    title: "Local Library",
    period: "NOVEMBER 2023",
    description: "A digital hub for managing and tracking community library resources. Features a comprehensive dashboard showing library stats, account management for tracking borrowing history, and detailed book tracking capabilities.",
    updates: {
        completed: [],
        planned: [
            "Refactor to TypeScript for improved type safety and developer experience",
            "Implement TailwindCSS for responsive design",
            "Interactive search and sorting capabilities",
            "Real-time data updates",
            "Enhanced reporting and analytics features",
            "Mobile app development"
        ]
    },
    technologies: [
      { name: "JavaScript" },
      { name: "Node.js" },
      { name: "Bootstrap" },
      { name: "HTML5" },
      { name: "Express.js" }
    ],
    deploy_link: "https://local-library-front-end-v5ci.onrender.com/", // TODO: Update with actual deploy link (deploy it)
    github_link: "https://github.com/loganprit/local-library-project"
  },
  {
    title: "Portfolio V1",
    period: "OCTOBER 2023",
    description: "A static portfolio website built with HTML5, CSS, and JavaScript. Features a clean, intuitive interface with a focus on showcasing an about me section and contact information in a visually appealing manner.",
    technologies: [
      { name: "HTML5" },
      { name: "CSS" },
      { name: "JavaScript" }
    ],
    deploy_link: "https://loganprit.github.io/personal-portfolio/", // TODO: Update with actual deploy link (deploy it)
    github_link: "https://github.com/loganprit/personal-portfolio/tree/backup/v1"
  }
];

// Type definitions
interface Technology {
  name: string;
}

interface ProjectUpdates {
  completed?: string[];
  planned?: string[];
}

export type Project = {
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  deploy_link: string;
  github_link: string;
  updates?: ProjectUpdates;
};
