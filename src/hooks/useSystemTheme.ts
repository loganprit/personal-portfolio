import { useEffect, useCallback } from "react";

interface UseSystemThemeOptions {
  onThemeChange?: (isDark: boolean) => void;
  theme?: string;
}

/**
 * Custom hook to handle system theme detection and changes
 */
export function useSystemTheme({ 
  onThemeChange, 
  theme
}: UseSystemThemeOptions = {}) {
  const handleThemeChange = useCallback((e: MediaQueryListEvent | MediaQueryList) => {
    const isDark = e.matches;

    // Only trigger if there's an actual theme change and we're in system mode
    if (theme === "system") {
      onThemeChange?.(isDark);
    }
  }, [onThemeChange, theme]);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    
    // Check initial system theme
    if (theme === "system") {
      handleThemeChange(mediaQuery);
    }
    
    mediaQuery.addEventListener("change", handleThemeChange);
    
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
    };
  }, [handleThemeChange, theme]);
}
