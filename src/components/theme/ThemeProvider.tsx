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
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    // Clean up any extension attributes
    const dataAttrs = document.documentElement.getAttributeNames();
    dataAttrs.forEach(attr => {
      if (attr.startsWith("data-")) {
        document.documentElement.removeAttribute(attr);
      }
    });
    
    setMounted(true);
  }, []);

  return (
    <ThemeContext.Provider value={{ mounted }}>
      <NextThemeProvider 
        attribute="class" 
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
        forcedTheme={!isClient ? undefined : undefined}
      >
        <ThemeTransition />
        {mounted ? children : null}
      </NextThemeProvider>
    </ThemeContext.Provider>
  );
}
