import { type ReactNode } from "react";

interface TechnologyBadgeProps {
  name: string;
  className?: string;
  icon?: ReactNode;
}

/**
 * Shared technology badge component used across the application
 * @param {string} name - The name of the technology
 * @param {string} className - Optional additional CSS classes
 * @param {ReactNode} icon - Optional icon to display alongside the name
 */
export function TechnologyBadge({ name, className = "", icon }: TechnologyBadgeProps) {
  return (
    <span 
      className={`
        px-4 py-1.5 
        rounded-full 
        text-sm
        bg-foreground/15 
        backdrop-blur-sm
        transition-colors
        flex items-center gap-2
        ${className}
      `}
    >
      {icon}
      {name}
    </span>
  );
}