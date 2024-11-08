import { FiExternalLink } from "react-icons/fi";
import { FiGithub } from "react-icons/fi";
import Link from "next/link";

interface Technology {
  name: string;
  className?: string;
}

interface Project {
  title: string;
  period: string;
  description: string;
  technologies: Technology[];
  deploy_link?: string;
  github_link?: string;
}

/**
 * Individual technology badge component
 */
function TechnologyBadge({ name, className = "" }: Technology) {
  return (
    <span className={`px-4 py-1.5 rounded-full bg-foreground/10 text-sm ${className}`}>
      {name}
    </span>
  );
}

/**
 * Individual project card component
 */
function ProjectCard({ title, period, description, technologies, deploy_link, github_link }: Project) {
  return (
    <div className="rounded-lg p-6 transition-colors hover:bg-foreground/5">
      <div className="flex items-start justify-between">
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-xl font-semibold">{title}</h3>
            {deploy_link && (
              <Link 
                href={deploy_link} 
                target="_blank" 
                className="text-foreground/60 hover:text-foreground transition-colors"
                aria-label={`Visit ${title} project`}
              >
                <FiExternalLink size={16} />
              </Link>
            )}
          </div>
          <p className="text-sm text-foreground/40 mt-0.5">{period}</p>
          {github_link && (
            <Link
              href={github_link}
              target="_blank"
              className="text-foreground/60 hover:text-foreground transition-colors inline-flex items-center gap-1.5 text-sm mt-1" 
              aria-label={`View ${title} source code on GitHub`}
            >
              <FiGithub size={14} />
              <span>View repo</span>
            </Link>
          )}
        </div>
      </div>
      
      <p className="mt-4 text-foreground/80 leading-relaxed">
        {description}
      </p>

      <div className="mt-6 flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <TechnologyBadge key={tech.name} {...tech} />
        ))}
      </div>
    </div>
  );
}

/**
 * Projects page component displaying multiple project cards
 */
export default function ProjectsPage() {
  const projects: Project[] = [
    {
        title: "Portfolio V3",
        period: "2024",
        description: "Modern portfolio website built with Next.js 14, TypeScript, and Tailwind CSS. Features a responsive design with dark mode support, smooth page transitions, and a glass-morphism UI effect.",
        technologies: [
          { name: "Next.js" },
          { name: "TypeScript" },
          { name: "Tailwind CSS" },
          { name: "Framer Motion" }
        ],
        deploy_link: "You're looking at it!",
      github_link: "https://github.com/loganprit/portfolio-v3"
    },
    {
      title: "Project Name",
      period: "NOVEMBER 2021 — PRESENT",
      description: "Description of project.",
      technologies: [
        { name: "Technology 1" },
        { name: "Technology 2" },
        { name: "Technology 3" },
        { name: "Technology 4" },
        { name: "Technology 5" },
        { name: "Technology 6" },
        { name: "Technology 7" }
      ],
      deploy_link: "https://example.com",
      github_link: "https://github.com/loganprit/project-name"
    },

  ];

  return (
    <div className="flex flex-col gap-8">
      <div>
        <h1 className="text-2xl font-bold">Projects</h1>
        <p className="mt-2 text-foreground/60">
          A collection of projects I've worked on, both professionally and personally.
        </p>
      </div>

      <div className="flex flex-col gap-6">
        {projects.map((project) => (
          <ProjectCard key={`${project.title}-${project.deploy_link}`} {...project} />
        ))}
      </div>
    </div>
  );
}
