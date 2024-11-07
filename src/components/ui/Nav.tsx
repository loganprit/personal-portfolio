"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
}

/**
 * Individual navigation item component with active state styling
 */
function NavItem({ href, children, isActive }: NavItemProps) {
  return (
    <Link 
      href={href}
      className={`text-lg transition-colors py-2 relative ${
        isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
      }`}
    >
      {children}
      {isActive && (
        <motion.div
          layoutId="activeNavIndicator"
          className="absolute -left-4 top-1/2 -translate-y-1/2 w-2 h-2 rounded-full bg-foreground"
          transition={{ type: "spring", stiffness: 380, damping: 30 }}
        />
      )}
    </Link>
  );
}

/**
 * Navigation component with vertically spaced links and active state indicators
 */
export function Nav() {
  const pathname = usePathname();

  return (
    <nav className="flex flex-col gap-4">
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
