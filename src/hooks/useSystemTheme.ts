import { useEffect, useCallback, useRef } from "react";

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
  const timeoutRef = useRef<NodeJS.Timeout>();

  const handleThemeChange = useCallback((e: MediaQueryListEvent | MediaQueryList) => {
    const isDark = e.matches;

    // Only trigger if there's an actual theme change and we're in system mode
    if (theme === "system") {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }

      // Trigger the animation immediately
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
    
    // Store timeout ref in a variable for cleanup
    const currentTimeout = timeoutRef.current;
    
    return () => {
      mediaQuery.removeEventListener("change", handleThemeChange);
      if (currentTimeout) {
        clearTimeout(currentTimeout);
      }
    };
  }, [handleThemeChange, theme]);
} 