"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";

/**
 * Button component for toggling between light and dark themes
 */
export function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme, systemTheme } = useTheme();

  // Prevent hydration mismatch
  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  const currentTheme = theme === "system" ? systemTheme : theme;
  const otherMode = currentTheme === "dark" ? "light" : "dark";

  return (
    <div className="flex items-center gap-2 -ml-2">
      <button
        onClick={() => setTheme(otherMode)}
        className="rounded-full p-2 hover:bg-foreground/10 transition-colors relative z-[51]"
        aria-label={`Switch to ${otherMode} mode`}
      >
        {currentTheme === "dark" ? <FiSun size={20} /> : <FiMoon size={20} />}
      </button>
      <span className="text-sm text-foreground/60">
        Prefer {otherMode} mode?
      </span>
    </div>
  );
} 