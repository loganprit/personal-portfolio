"use client";

import { useEffect, useState } from "react";
import { Moon, Sun, Monitor } from "lucide-react";
import { cn } from "@/lib/cn";

type Theme = "light" | "dark" | "system";

function getStoredTheme(): Theme {
  try {
    const theme = localStorage.getItem("theme");
    return theme === "light" || theme === "dark" ? theme : "system";
  } catch {
    return "light";
  }
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  const resolvedTheme =
    theme === "system"
      ? window.matchMedia("(prefers-color-scheme: dark)").matches
        ? "dark"
        : "light"
      : theme;
  const css = document.createElement("style");

  css.textContent = "*,*::before,*::after{transition:none!important}";
  document.head.appendChild(css);
  root.classList.remove("light", "dark");
  root.classList.add(resolvedTheme);
  root.style.colorScheme = resolvedTheme;
  window.getComputedStyle(document.body);
  setTimeout(() => css.remove(), 1);
}

export function ThemeToggle({ className }: { className?: string }) {
  const [mounted, setMounted] = useState(false);
  const [theme, setTheme] = useState<Theme>(getStoredTheme);

  useEffect(() => {
    const media = window.matchMedia("(prefers-color-scheme: dark)");
    const syncSystemTheme = () => theme === "system" && applyTheme(theme);
    const syncStoredTheme = (event: StorageEvent) => {
      if (event.key !== "theme") return;
      const nextTheme = getStoredTheme();
      setTheme(nextTheme);
      applyTheme(nextTheme);
    };

    setMounted(true);
    applyTheme(theme);
    media.addEventListener("change", syncSystemTheme);
    window.addEventListener("storage", syncStoredTheme);
    return () => {
      media.removeEventListener("change", syncSystemTheme);
      window.removeEventListener("storage", syncStoredTheme);
    };
  }, [theme]);

  const cycle = () => {
    const next =
      theme === "light" ? "dark" : theme === "dark" ? "system" : "light";
    try {
      localStorage.setItem("theme", next);
    } catch {}
    setTheme(next);
    applyTheme(next);
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
