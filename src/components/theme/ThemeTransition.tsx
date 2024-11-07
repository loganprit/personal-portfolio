"use client";

import { useTheme } from "next-themes";
import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export function ThemeTransition() {
  const [mounted, setMounted] = useState(false);
  const { theme } = useTheme();

  useEffect(() => setMounted(true), []);
  if (!mounted) return null;

  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={theme}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className="fixed inset-0 z-[-1]"
        style={{
          background: theme === "dark"
            ? "linear-gradient(135deg, #5f7f8e 0%, #4e6b7a 50%, #5f7f8e 100%)"
            : "linear-gradient(135deg, #dbe7ec 0%, #bbd3dd 50%, #dbe7ec 100%)",
          backdropFilter: "blur(8px)",
        }}
      />
    </AnimatePresence>
  );
}
