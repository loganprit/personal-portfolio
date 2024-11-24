"use client";

import { type ReactNode } from "react";
import { motion } from "framer-motion";
import { animations } from "@/lib/animations";
import { useTheme } from "next-themes";

interface TechnologyBadgeProps {
  name: string;
  className?: string;
  icon?: ReactNode;
  index?: number;
}

/**
 * Shared technology badge component used across the application
 * @param {string} name - The name of the technology
 * @param {string} className - Optional additional CSS classes
 * @param {ReactNode} icon - Optional icon to display alongside the name
 * @param {number} index - Optional index for staggered animations
 */
export function TechnologyBadge({ 
  name, 
  className = "", 
  icon,
  index = 0 
}: TechnologyBadgeProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.span 
      className={`
        px-3 py-1.5 
        rounded-full 
        text-sm
        transition-colors
        flex items-center gap-2
        ${currentTheme === "dark" 
          ? "bg-[#2E3C43] backdrop-blur-sm" 
          : "bg-gray-300 backdrop-blur-sm"
        }
        ${className}
      `}
      {...animations.badge(index)}
    >
      {icon}
      {name}
    </motion.span>
  );
}