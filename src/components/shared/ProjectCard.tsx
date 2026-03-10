"use client";

import { motion } from "framer-motion";
import { ExternalLink, Github } from "lucide-react";
import Image from "next/image";
import { TechBadge } from "./TechBadge";
import { staggerItem } from "@/lib/animations";
import { cn } from "@/lib/cn";
import type { Project } from "@/data/types";

interface ProjectCardProps {
  project: Project;
  variant?: "compact" | "expanded";
  className?: string;
}

export function ProjectCard({ project, variant = "expanded", className }: ProjectCardProps) {
  return (
    <motion.div
      variants={staggerItem}
      className={cn(
        "rounded-xl border border-border bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow",
        className,
      )}
    >
      {project.image && variant === "expanded" && (
        <div className="relative w-full h-40">
          <Image
            src={project.image}
            alt={project.title}
            fill
            className="object-cover"
            sizes="(max-width: 640px) 100vw, 50vw"
          />
        </div>
      )}
      <div className={cn("p-5", variant === "compact" && "p-4")}>
        <h3 className={cn("font-bold text-foreground", variant === "expanded" ? "text-lg" : "text-base")}>
          {project.title}
        </h3>
        <p className="text-xs text-muted-foreground mt-1">
          {project.period}
        </p>
        <p className={cn(
          "mt-3 text-sm text-muted-foreground",
          variant === "compact" ? "line-clamp-2" : "line-clamp-3",
        )}>
          {project.description}
        </p>

        {variant === "expanded" && project.updates && project.updates.completed.length > 0 && (
          <div className="mt-3">
            <p className="text-xs font-medium text-foreground mb-1">Recent updates:</p>
            <ul className="space-y-1">
              {project.updates.completed.slice(0, 2).map((update) => (
                <li key={update} className="text-xs text-muted-foreground flex gap-1.5">
                  <span className="text-accent shrink-0">&bull;</span>
                  {update}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="flex flex-wrap gap-1.5 mt-4">
          {project.technologies.slice(0, variant === "compact" ? 4 : undefined).map((tech) => (
            <TechBadge key={tech.name} name={tech.name} />
          ))}
        </div>
        <div className="flex items-center gap-3 mt-4">
          <a
            href={project.github_link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
            aria-label={`${project.title} GitHub`}
          >
            <Github className="h-4 w-4" />
          </a>
          {project.deploy_link && (
            <a
              href={project.deploy_link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground transition-colors"
              aria-label={`${project.title} live site`}
            >
              <ExternalLink className="h-4 w-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
