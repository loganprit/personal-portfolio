"use client";

import { Avatar, AvatarFallback, AvatarImage } from "./avatar";
import { MdLocationPin } from "react-icons/md";

interface HeaderProps {
  name: string;
  title: string;
  location: string;
  avatarUrl: string;
  initials: string;
  priority?: boolean;
}

/**
 * Header component that displays a profile section with avatar, name and title
 * @param {string} name - The display name
 * @param {string} title - The professional title or subtitle
 * @param {string} location - Where I am based
 * @param {string} avatarUrl - URL for the avatar image
 * @param {string} initials - Fallback initials when avatar fails to load
 */
export function Header({ name, title, location, avatarUrl, initials, priority }: HeaderProps) {
  return (
    <div className="flex flex-col items-center landscape:flex-row landscape:items-start w-full landscape:w-auto gap-4 landscape:gap-8">
      <Avatar className="h-24 w-24 landscape:h-32 landscape:w-32">
        <AvatarImage 
          src={avatarUrl} 
          alt={name} 
          priority={priority}
          quality={95}
          sizes="(max-width: 640px) 96px, (max-width: 1024px) 128px, 96px"
        />
        <AvatarFallback aria-label={`${name}'s initials`}>{initials}</AvatarFallback>
      </Avatar>
      <div className="flex flex-col gap-4 h-32 landscape:h-32 text-center landscape:text-left">
        <h1 className="text-3xl landscape:text-4xl xl:text-5xl font-bold tracking-tight">{name}</h1>
        <p className="text-lg landscape:text-xl text-muted-foreground">{title}</p>
        <p className="text-lg landscape:text-base text-muted-foreground flex items-center justify-center landscape:justify-start gap-2">
          <MdLocationPin className="text-xl landscape:text-2xl" />
          {location}
        </p>
      </div>
    </div>
  );
}
