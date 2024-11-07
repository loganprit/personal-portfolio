"use client";

import { motion } from "framer-motion";
import { useTheme } from "next-themes";

export function ThemeSwipeOverlay() {
  const { theme } = useTheme();

  return (
    <motion.div
      key={theme}
      className="fixed inset-0 z-50 pointer-events-none"
      initial={{ 
        x: theme === "dark" ? "-100%" : "100%",
        y: 0
      }}
      animate={{ 
        x: 0,
        y: 0
      }}
      exit={{ 
        x: theme === "dark" ? "100%" : "-100%",
        y: 0
      }}
      transition={{ 
        duration: 0.5,
        ease: "easeInOut"
      }}
      style={{
        background: theme === "dark" 
          ? "linear-gradient(135deg, #5f7f8e 0%, #4e6b7a 50%, #5f7f8e 100%)"
          : "linear-gradient(135deg, #dbe7ec 0%, #bbd3dd 50%, #dbe7ec 100%)"
      }}
    />
  );
}
