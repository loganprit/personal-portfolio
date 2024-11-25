import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { ThemeToggle } from "@/components/theme/ThemeToggle";
import { MdLocationPin } from "react-icons/md";

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  avatarUrl: string;
  initials: string;
}

/**
 * Header component that displays a profile section with avatar, name and title
 * @param {string} name - The display name
 * @param {string} title - The professional title or subtitle
 * @param {string} location - Where I am based
 * @param {string} avatarUrl - URL for the avatar image
 * @param {string} initials - Fallback initials when avatar fails to load
 */
export function Header({ name, title, location, avatarUrl, initials }: HeaderProps) {
  return (
    <div className="flex flex-col items-center landscape:flex-row landscape:items-start w-full landscape:w-auto gap-4 landscape:gap-6">
      <Avatar className="h-24 w-24 landscape:h-32 landscape:w-32">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-2 text-center landscape:text-left">
        <h1 className="text-3xl landscape:text-4xl lg:text-5xl font-bold tracking-tight">{name}</h1>
        <p className="text-lg landscape:text-xl text-muted-foreground">{title}</p>
        <p className="text-lg landscape:text-base text-muted-foreground flex items-center justify-center landscape:justify-start gap-1">
          <MdLocationPin className="text-lg" />
          {location}
        </p>
        <div className="mt-2 flex portrait:justify-center landscape:justify-start">
          <ThemeToggle />
        </div>
      </div>
    </div>
  );
}
