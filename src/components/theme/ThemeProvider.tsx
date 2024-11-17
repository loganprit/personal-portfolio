"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { type ReactNode } from "react";
import { ThemeTransition } from "./ThemeTransition";

/**
 * Provider component for theme management
 * @param {ReactNode} children - Child components to be wrapped
 */
export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <NextThemeProvider 
      attribute="class" 
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <ThemeTransition />
      {children}
    </NextThemeProvider>
  );
}
