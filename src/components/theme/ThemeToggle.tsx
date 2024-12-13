"use client";

import { useTheme } from "next-themes";
import { useEffect, useState, useRef } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { motion } from "framer-motion";
import { useSystemTheme } from "@/hooks/useSystemTheme";

/**
 * Button component for toggling between light and dark themes
 * Features a spinning animation on theme change
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const [isSpinning, setIsSpinning] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();
  const previousThemeRef = useRef<string | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useSystemTheme({
    theme,
    onThemeChange: () => {
      const currentTheme = theme === "system" ? systemTheme : theme;
      if (previousThemeRef.current !== currentTheme) {
        setIsSpinning(true);
      }
    }
  });

  // Track theme changes
  useEffect(() => {
    const currentTheme = theme === "system" ? systemTheme : theme;
    if (mounted && currentTheme && previousThemeRef.current !== currentTheme) {
      previousThemeRef.current = currentTheme;
    }
  }, [theme, systemTheme, mounted]);

  // Reset spinning state after animation
  useEffect(() => {
    if (isSpinning) {
      const timeout = setTimeout(() => setIsSpinning(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [isSpinning]);

  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const otherMode = currentTheme === "dark" ? "light" : "dark";

  const handleThemeChange = () => {
    setIsSpinning(true);
    setTheme(otherMode);
  };

  return (
    <motion.div 
      className="flex items-center gap-2 -ml-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      <button
        onClick={handleThemeChange}
        className={`
          rounded-full px-3 py-2 
          transition-colors relative z-[51] 
          flex items-center gap-2
          ${currentTheme === "dark" 
            ? "bg-[#2E3C43] backdrop-blur-sm" 
            : "bg-gray-300"
          }
        `}
        aria-label={`Prefer ${otherMode} mode? Click to switch theme`}
      >
        <motion.div
          animate={{ rotate: isSpinning ? 360 : 0 }}
          transition={{ 
            duration: 0.5, 
            ease: "linear",
            repeatType: "reverse",
            from: 0
          }}
        >
          {currentTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
        </motion.div>
        <span 
          className={`
            text-lg
            ${currentTheme === "dark" 
              ? "text-foreground/80" 
              : "text-gray-700"
            }
          `}
        >
          Prefer {otherMode} mode?
        </span>
      </button>
    </motion.div>
  );
} 