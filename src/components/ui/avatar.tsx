import * as React from "react";
import Image from "next/image";
import { useState, createContext, useContext } from "react";

interface AvatarContextType {
  hasError: boolean;
  setHasError: (error: boolean) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const AvatarContext = createContext<AvatarContextType | null>(null);

interface AvatarProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
}

interface AvatarImageProps {
  src: string;
  alt: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
}

interface AvatarFallbackProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}

export function Avatar({ className = "", ...props }: AvatarProps) {
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <AvatarContext.Provider value={{ hasError, setHasError, isLoading, setIsLoading }}>
      <div
        className={`relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full ${className}`}
        {...props}
      />
    </AvatarContext.Provider>
  );
}

export function AvatarImage({ src, alt, priority, quality, sizes }: AvatarImageProps) {
  const context = useContext(AvatarContext);
  if (!context) throw new Error("AvatarImage must be used within Avatar");
  const { setHasError, setIsLoading, hasError } = context;

  if (hasError) return null;

  return (
    <div className="absolute inset-0">
      <Image
        src={src}
        alt={alt}
        width={96}
        height={96}
        priority={priority}
        quality={quality}
        sizes={sizes}
        className="aspect-square h-full w-full object-cover"
        onLoadingComplete={() => setIsLoading(false)}
        onError={() => {
          setHasError(true);
          setIsLoading(false);
        }}
      />
    </div>
  );
}

export function AvatarFallback({ children, ...props }: AvatarFallbackProps) {
  const context = useContext(AvatarContext);
  if (!context) throw new Error("AvatarFallback must be used within Avatar");
  const { hasError, isLoading } = context;

  if (!hasError && !isLoading) return null;

  return (
    <div
      className="absolute inset-0 flex h-full w-full items-center justify-center rounded-full bg-muted"
      {...props}
    >
      {children}
    </div>
  );
}
