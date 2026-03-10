"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { cn } from "@/lib/cn";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  github: Github,
  linkedin: Linkedin,
  mail: Mail,
};

interface SocialLinksProps {
  className?: string;
  iconSize?: string;
}

export function SocialLinks({ className, iconSize = "h-5 w-5" }: SocialLinksProps) {
  return (
    <div className={cn("flex items-center gap-3", className)}>
      {personal.socials.map((link) => {
        const Icon = iconMap[link.icon];
        if (!Icon) return null;
        return (
          <a
            key={link.name}
            href={link.url}
            target={link.url.startsWith("mailto:") ? undefined : "_blank"}
            rel="noopener noreferrer"
            className="rounded-lg p-2 text-muted-foreground transition-colors hover:text-foreground hover:bg-muted"
            aria-label={link.name}
          >
            <Icon className={iconSize} />
          </a>
        );
      })}
    </div>
  );
}
