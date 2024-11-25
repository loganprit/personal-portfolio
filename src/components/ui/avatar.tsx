import * as React from "react";
import Image from "next/image";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface AvatarImageProps {
  src: string;
  alt: string;
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

/**
 * Avatar container component
 */
export function Avatar({ className = "", ...props }: AvatarProps) {
  return (
    <div
      className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
      {...props}
    />
  );
}

/**
 * Avatar image component
 */
export function AvatarImage({ src, alt }: AvatarImageProps) {
  return (
    <Image
      src={src}
      alt={alt}
      className="aspect-square h-full w-full object-cover"
      fill
    />
  );
}

/**
 * Avatar fallback component for when image fails to load
 */
export function AvatarFallback({ children, ...props }: AvatarFallbackProps) {
  return (
    <div
      className="flex h-full w-full items-center justify-center rounded-full bg-muted"
      {...props}
    >
      {children}
    </div>
  );
}
