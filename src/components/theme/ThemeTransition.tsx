"use client";

import { useTheme } from "next-themes";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

/**
 * Component that handles smooth theme transitions with gradient backgrounds
 * Uses Framer Motion to animate between light and dark mode gradients
 */
export function ThemeTransition() {
  const [mounted, setMounted] = useState(false);
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  // Define gradient colors for light and dark themes
  const gradientColors = {
    light: {
      start: "rgb(219, 231, 236)",
      middle: "rgb(187, 211, 221)",
      end: "rgb(219, 231, 236)"
    },
    dark: {
      start: "rgb(95, 127, 142)",
      middle: "rgb(78, 107, 122)",
      end: "rgb(95, 127, 142)"
    }
  };

  return (
    <div className="fixed inset-0 z-[-1]">
      {/* Light theme gradient (base layer) */}
      <div
        className="absolute inset-0"
        style={{
          background: `linear-gradient(135deg, ${gradientColors.light.start} 0%, ${gradientColors.light.middle} 50%, ${gradientColors.light.end} 100%)`,
          backdropFilter: "blur(8px)"
        }}
      />
      
      {/* Dark theme gradient (animated overlay) */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: resolvedTheme === "dark" ? 1 : 0 
        }}
        transition={{ 
          duration: 0.5,
          ease: "easeInOut"
        }}
        style={{
          background: `linear-gradient(135deg, ${gradientColors.dark.start} 0%, ${gradientColors.dark.middle} 50%, ${gradientColors.dark.end} 100%)`,
          backdropFilter: "blur(8px)"
        }}
      />
    </div>
  );
}