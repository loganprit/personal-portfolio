import { Avatar, AvatarFallback, AvatarImage } from "./avatar";

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
    <div className="flex items-start gap-6">
      <Avatar className="h-24 w-24">
        <AvatarImage src={avatarUrl} alt={name} />
        <AvatarFallback>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-1">
        <h1 className="text-4xl font-bold tracking-tight">{name}</h1>
        <p className="text-lg text-muted-foreground">{title}</p>
      </div>
    </div>
  );
}
