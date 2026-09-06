import { useRouterState } from "@tanstack/react-router";
import type { ReactNode } from "react";

interface PageTransitionProps {
  children: ReactNode;
}

export function PageTransition({ children }: PageTransitionProps) {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });
  return (
    <div key={pathname} className="min-h-screen">
      {children}
    </div>
  );
}
