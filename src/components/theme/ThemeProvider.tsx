"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ThemeTransition } from "./ThemeTransition";
import { useSystemTheme } from "@/hooks/useSystemTheme";

interface ThemeContextType {
  mounted: boolean;
}

const ThemeContext = createContext<ThemeContextType>({ mounted: false });

export function useThemeContext() {
  return useContext(ThemeContext);
}

/**
 * Provider component for theme management
 * @param {ReactNode} children - Child components to be wrapped
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useSystemTheme({
    onThemeChange: (isDark) => {
      const systemTheme = isDark ? "dark" : "light";
      const storedTheme = localStorage.getItem("theme");
      
      if (!storedTheme || storedTheme === "system") {
        const currentTheme = document.documentElement.classList.contains("dark") ? "dark" : "light";
        if (currentTheme !== systemTheme) {
          document.documentElement.classList.remove(currentTheme);
          document.documentElement.classList.add(systemTheme);
        }
      }
    }
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ mounted }}>
      <NextThemeProvider 
        attribute="class" 
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        <ThemeTransition />
        {children}
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
}
