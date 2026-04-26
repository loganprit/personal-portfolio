"use client";

import Link from "next/link";
import { cn } from "@/lib/cn";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

export interface NavSection {
  label: string;
  id: string;
  href: string;
}

interface PillNavProps {
  sections: NavSection[];
  activeSection: string;
  className?: string;
}

export function PillNav({ sections, activeSection, className }: PillNavProps) {
  return (
    <nav className={cn("fixed top-0 left-0 right-0 z-40", className)}>
      <div className="max-w-3xl mx-auto">
        <div className="bg-card/80 backdrop-blur-xl border border-border rounded-full mx-4 mt-6 px-6 py-3 flex items-center justify-between">
          <div className="flex items-center gap-8 overflow-x-auto scrollbar-hide">
            {sections.map((section) => {
              const isActive = activeSection === section.id;
              return (
                <Link
                  key={section.id}
                  href={section.href}
                  className={cn(
                    "px-3 py-1.5 text-sm font-medium rounded-full transition-colors whitespace-nowrap",
                    isActive
                      ? "text-accent dark:text-accent-light bg-accent/10"
                      : "text-muted-foreground hover:text-foreground",
                  )}
                >
                  {section.label}
                </Link>
              );
            })}
          </div>
          <ThemeToggle className="ml-2 shrink-0" />
        </div>
      </div>
    </nav>
  );
}
