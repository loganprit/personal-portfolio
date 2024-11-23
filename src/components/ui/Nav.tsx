"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import { useRef, useMemo } from "react";

interface NavItemProps {
  href: string;
  children: React.ReactNode;
  isActive: boolean;
  itemRef: React.RefObject<HTMLAnchorElement>;
}

/**
 * Individual navigation item component with active state styling and underline animation
 */
function NavItem({ href, children, isActive, itemRef }: NavItemProps) {
  return (
    <Link 
      ref={itemRef}
      href={href}
      className={`text-lg portrait:text-xl landscape:text-2xl font-semibold transition-colors py-2 px-2 portrait:px-2 landscape:px-3 relative ${
        isActive ? "text-foreground" : "text-foreground/60 hover:text-foreground/80"
      }`}
    >
      {children}
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
  const homeRef = useRef<HTMLAnchorElement>(null);
  const projectsRef = useRef<HTMLAnchorElement>(null);
  const workHistoryRef = useRef<HTMLAnchorElement>(null);

  const activeRef = useMemo(() => {
    switch (pathname) {
      case "/": return homeRef;
      case "/projects": return projectsRef;
      case "/work-history": return workHistoryRef;
      default: return homeRef;
    }
  }, [pathname]);

  return (
    <nav className={`flex flex-row gap-4 items-center relative ${className}`}>
      <NavItem href="/" isActive={pathname === "/"} itemRef={homeRef}>
        Home
      </NavItem>
      <NavItem href="/projects" isActive={pathname === "/projects"} itemRef={projectsRef}>
        Projects
      </NavItem>
      <NavItem href="/work-history" isActive={pathname === "/work-history"} itemRef={workHistoryRef}>
        Work History
      </NavItem>

      <motion.div
        className="absolute bottom-0 h-0.5 bg-foreground"
        layout
        transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
        style={{
          width: activeRef.current?.offsetWidth || 0,
          left: activeRef.current?.offsetLeft || 0,
        }}
      />
    </nav>
  );
}
