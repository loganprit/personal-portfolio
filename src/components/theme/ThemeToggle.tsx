"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Button component for toggling between light and dark themes
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="rounded-full p-2 hover:bg-foreground/10 transition-colors relative z-[51]"
      aria-label="Toggle theme"
    >
      {theme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
    </button>
  );
} 