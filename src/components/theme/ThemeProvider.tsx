"use client";

import { ThemeProvider as NextThemeProvider } from "next-themes";
import { useEffect, useState, type ReactNode } from "react";

export function ThemeProvider({ children }: { children: ReactNode }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // Clean up any extension attributes
    const dataAttrs = document.documentElement.getAttributeNames();
    dataAttrs.forEach((attr) => {
      if (attr.startsWith("data-darkreader")) {
        document.documentElement.removeAttribute(attr);
      }
    });

    setMounted(true);
  }, []);

  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {mounted ? children : null}
    </NextThemeProvider>
  );
}
