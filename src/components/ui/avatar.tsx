import * as React from "react";

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface AvatarImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
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
export function AvatarImage({ src, alt, ...props }: AvatarImageProps) {
  return (
    <img
      src={src}
      alt={alt}
      className="aspect-square h-full w-full object-cover"
      {...props}
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
