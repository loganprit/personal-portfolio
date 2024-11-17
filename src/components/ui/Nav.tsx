"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

/**
 * Individual navigation item component with active state styling and underline animation
 */
function NavItem({ href, children, isActive }: NavItemProps) {
  return (
    <Link 
      href={href}
      className={`text-2xl font-semibold transition-colors py-3 relative ${
        isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-foreground"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

interface NavProps {
  className?: string;
}

/**
 * Navigation component with horizontally spaced links and active state indicators
 */
export function Nav({ className = "" }: NavProps) {
  const pathname = usePathname();

  return (
    <nav className={`flex gap-8 ${className}`}>
      <NavItem href="/" isActive={pathname === "/"}>
        Home
      </NavItem>
      <NavItem href="/projects" isActive={pathname === "/projects"}>
        Projects
      </NavItem>
      <NavItem href="/work-history" isActive={pathname === "/work-history"}>
        Work History
      </NavItem>
    </nav>
  );
}
