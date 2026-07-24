"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/cn";

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const cycle = () => {
    const next = theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    setTheme(next);
  };

  return (
    <button
      type="button"
      onClick={cycle}
      className={cn(
        "h-9 w-9 rounded-lg p-2 transition-colors hover:bg-muted",
        className,
      )}
      aria-label={
        mounted ? `Current theme: ${theme}. Click to switch.` : "Switch theme"
      }
    >
      {mounted && theme === "light" && <Sun className="h-5 w-5" />}
      {mounted && theme === "dark" && <Moon className="h-5 w-5" />}
      {(!mounted || theme === "system") && <Monitor className="h-5 w-5" />}
    </button>
  );
}
