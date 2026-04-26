"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, type ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  useEffect(() => {
    // Clean up any extension attributes
    const dataAttrs = document.documentElement.getAttributeNames();
    dataAttrs.forEach((attr) => {
      if (attr.startsWith("data-darkreader")) {
        document.documentElement.removeAttribute(attr);
      }
    });
  }, []);

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
    </NextThemeProvider>
  );
}
