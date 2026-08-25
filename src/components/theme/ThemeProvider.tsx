"use client";

import { MotionConfig } from "framer-motion";
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

  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}
