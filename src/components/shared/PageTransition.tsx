import { motion } from "framer-motion";
import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  const x = pathname === "/contact" ? 72 : -48;

  return (
    <motion.div
      key={pathname}
      initial={{ opacity: 0, x }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.58, ease: [0.21, 1.02, 0.73, 0.97] }}
      className="min-h-screen"
    >
      {children}
    </motion.div>
  );
}
