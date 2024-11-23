import { motion } from "framer-motion";

interface StatusBadgeProps {
  status: "seeking" | "active";
  className?: string;
}

/**
 * Status badge component that displays employment status
 * @param {string} status - Current employment status ("seeking" or "active")
 * @param {string} className - Optional additional CSS classes
 */
export function StatusBadge({ status, className = "" }: StatusBadgeProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`
        inline-flex items-center px-3 py-1 rounded-full text-sm font-medium
        portrait:text-base portrait:px-4 portrait:py-1.5
        ${status === "seeking" 
          ? "bg-emerald-500/10 text-emerald-500 dark:bg-emerald-500/20" 
          : "bg-blue-500/10 text-blue-500 dark:bg-blue-500/20"}
        ${className}
      `}
    >
      <span className={`
        w-2 h-2 rounded-full mr-2
        portrait:w-2.5 portrait:h-2.5 portrait:mr-2.5
        ${status === "seeking" ? "bg-emerald-500" : "bg-blue-500"}
      `} />
      {status === "seeking" ? "Actively Seeking" : "Currently Employed"}
    </motion.div>
  );
}