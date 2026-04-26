import { SocialLinks } from "./SocialLinks";

interface SiteFooterProps {
  className?: string;
}

export function SiteFooter({ className }: SiteFooterProps) {
  return (
    <footer
      className={`flex flex-col gap-6 text-base font-medium text-muted-foreground sm:flex-row sm:items-center sm:justify-between ${className ?? ""}`}
    >
      <p>© 2026 loganpritchett.me</p>
      <SocialLinks className="gap-8" iconSize="h-7 w-7" />
    </footer>
  );
}
