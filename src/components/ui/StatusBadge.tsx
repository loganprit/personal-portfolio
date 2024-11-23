"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

interface StatusBadgeProps {
  status: boolean;
  className?: string;
}

/**
 * Status badge component that displays employment status
 * @param {boolean} status - Current employment status (false = seeking, true = active)
 * @param {string} className - Optional additional CSS classes
 */
export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  const { theme, systemTheme } = useTheme();
  const currentTheme = theme === "system" ? systemTheme : theme;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        portrait:text-base portrait:px-4 portrait:py-1.5
        ${!status 
          ? currentTheme === "dark"
            ? "bg-emerald-500/20 text-emerald-300" 
            : "bg-emerald-200/30 text-emerald-700"
          : currentTheme === "dark"
            ? "bg-blue-500/20 text-blue-300"
            : "bg-blue-200/50 text-blue-600"
        }
        ${className}
      `}
    >
      <span className={`
        w-2 h-2 rounded-full mr-2
        portrait:w-2.5 portrait:h-2.5 portrait:mr-2.5
        ${!status 
          ? currentTheme === "dark"
            ? "bg-emerald-300"
            : "bg-emerald-700"
          : currentTheme === "dark"
            ? "bg-blue-300"
            : "bg-blue-600"
        }
      `} />
      {!status ? "Actively Seeking" : "Currently Employed"}
    </motion.div>
  );
}