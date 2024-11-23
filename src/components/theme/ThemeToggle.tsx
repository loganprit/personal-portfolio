"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion, AnimatePresence } from "framer-motion";

/**
 * Button component for toggling between light and dark themes
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const otherMode = currentTheme === "dark" ? "light" : "dark";

  return (
    <motion.div 
      className="flex items-center gap-2 -ml-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <AnimatePresence mode="wait">
        <motion.button
          key={currentTheme}
          onClick={() => setTheme(otherMode)}
          className={`
            rounded-full px-3 py-2 
            transition-colors relative z-[51] 
            flex items-center gap-2
            ${currentTheme === "dark" 
              ? "bg-[#2E3C43] backdrop-blur-sm" 
              : "bg-gray-300"
            }
          `}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.9 }}
          transition={{ duration: 0.2 }}
          aria-label={`Switch to ${otherMode} mode`}
        >
          <motion.div
            initial={{ rotate: -180 }}
            animate={{ rotate: 0 }}
            transition={{ duration: 0.3 }}
          >
            {currentTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
          </motion.div>
          <motion.span 
            className={`
              text-lg
              ${currentTheme === "dark" 
                ? "text-foreground/80" 
                : "text-gray-700"
              }
            `}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
          >
            Prefer {otherMode} mode?
          </motion.span>
        </motion.button>
      </AnimatePresence>
    </motion.div>
  );
} 