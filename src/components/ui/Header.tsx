import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

interface HeaderProps {
  name: string;
  title: string;
  avatarUrl: string;
  initials: string;
}

/**
 * Header component that displays a profile section with avatar, name and title
 * @param {string} name - The display name
 * @param {string} title - The professional title or subtitle
 * @param {string} avatarUrl - URL for the avatar image
 * @param {string} initials - Fallback initials when avatar fails to load
 */
export function Header({ name, title, avatarUrl, initials }: HeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 sm:gap-6">
      <Avatar className="h-24 w-24 sm:h-32 sm:w-32">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 text-center sm:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">{name}</h1>
        <p className="text-lg sm:text-xl text-muted-foreground">{title}</p>
        <div className="mt-2">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
