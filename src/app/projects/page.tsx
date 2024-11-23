"use client";

import { FiExternalLink, FiGithub } from "react-icons/fi";
import Link from "next/link";
import { motion } from "framer-motion";
import { projects, type Project } from "@/data/projects";
import { TechnologyBadge } from "@/components/ui/TechnologyBadge";
import { animations } from "@/lib/animations";

/**
 * Individual project card component with animation
 */
function ProjectCard({ 
  title, 
  period, 
  description, 
  updates, 
  technologies, 
  deploy_link, 
  github_link,
  index 
}: Project & { index: number }) {
  return (
    <motion.div {...animations.cardList(index)}>
      <div className="rounded-lg p-6 transition-colors hover:bg-foreground/5">
        <div className="flex items-start justify-between">
          <div>
            <div className="flex items-center gap-2">
              <h3 className="text-xl font-semibold">{title}</h3>
              {deploy_link && deploy_link !== "You're looking at it!" && (
                <Link 
                  href={deploy_link} 
                  target="_blank" 
                  className="text-foreground/60 hover:text-foreground transition-colors"
                  aria-label={`Visit ${title} project`}
                >
                  <FiExternalLink size={16} />
                </Link>
              )}
              {deploy_link === "You're looking at it!" && (
                <span className="text-sm text-foreground/60 italic">
                  (You're looking at it!)
                </span>
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

        {updates && (
          <div className="mt-4 space-y-4">
            {updates.completed && updates.completed.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 mb-2">Completed Updates</h4>
                <ul className="list-disc list-inside space-y-1">
                  {updates.completed.map((update, index) => (
                    <li 
                      key={index}
                      className="text-foreground/80 text-sm"
                    >
                      {update}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            
            {updates.planned && updates.planned.length > 0 && (
              <div>
                <h4 className="text-sm font-semibold text-foreground/60 mb-2">Planned Updates</h4>
                <ul className="list-disc list-inside space-y-1">
                  {updates.planned.map((update, index) => (
                    <li 
                      key={index}
                      className="text-foreground/80 text-sm"
                    >
                      {update}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <motion.div
              key={tech.name}
              {...animations.badge(techIndex)}
            >
              <TechnologyBadge {...tech} />
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

/**
 * Projects page component displaying multiple project cards with animations
 */
export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-8">
      <motion.div 
        className="rounded-lg"
        {...animations.pageSection}
      >
        <h1 className="text-3xl font-bold">Projects</h1>
        <motion.p 
          className="mt-6 text-lg text-foreground/80 leading-relaxed max-w-[65ch]"
          {...animations.delayedContent}
        >
          A collection of projects I've worked on, both professionally and personally.
        </motion.p>
      </motion.div>

      <div className="flex flex-col gap-6">
        {projects.map((project, index) => (
          <ProjectCard 
            key={`${project.title}-${project.deploy_link}`} 
            {...project} 
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
