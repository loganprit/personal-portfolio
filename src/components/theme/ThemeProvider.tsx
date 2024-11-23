"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { createContext, useContext, useEffect, useState, type ReactNode } from "react";
import { ThemeTransition } from "./ThemeTransition";

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
