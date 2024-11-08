import { type ReactNode } from "react";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
}

/**
 * A glass-like card component with backdrop blur effect
 * @param {ReactNode} children - Content to be rendered inside the card
 * @param {string} className - Additional CSS classes
 */
export function GlassCard({ children, className = "" }: GlassCardProps) {
  return (
    <div
      className={`relative rounded-3xl border backdrop-blur-xl glass-card-noise ${className}`}
      style={{
        backgroundColor: "var(--card-background)",
        borderColor: "var(--card-border)",
        boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      {children}
    </div>
  );
}
