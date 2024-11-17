"use client";

import Link from "next/link";
import { FiFile, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useEffect, useCallback } from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => Promise<void>;
}

/**
 * Caches a file from a URL for 1 hour
 * @param url - The URL of the file to cache
 */
async function cacheFile(url: string): Promise<void> {
  try {
    const cache = await caches.open("resume-cache");
    const response = await fetch(url);
    
    // Create a new response with a custom Cache-Control header
    const modifiedResponse = new Response(response.body, {
      ...response,
      headers: {
        ...response.headers,
        "Cache-Control": "max-age=3600" // 1 hour cache
      }
    });
    
    await cache.put(url, modifiedResponse);
  } catch (error) {
    console.error("Failed to cache resume:", error);
  }
}

/**
 * Individual social link component
 */
function SocialLink({ href, icon, label, onClick }: SocialLinkProps) {
  return (
    <Link 
      href={href}
      className="p-3 hover:bg-foreground/10 rounded-full transition-colors"
      aria-label={label}
      onClick={onClick ? (e) => {
        e.preventDefault();
        onClick().then(() => window.location.href = href);
      } : undefined}
    >
      {icon}
    </Link>
  );
}

/**
 * Social links component displaying various platform links
 */
export function Socials() {
  const resumeUrl = "/api/resume";

  // Cache the resume on component mount
  useEffect(() => {
    cacheFile(resumeUrl).catch(console.error);
  }, [resumeUrl]);

  // Handle resume click with caching
  const handleResumeClick = useCallback(async () => {
    await cacheFile(resumeUrl);
  }, [resumeUrl]);

  return (
    <div className="flex gap-3">
      <SocialLink 
        href="https://github.com/loganprit"
        icon={<FiGithub size={30} />}
        label="GitHub Profile"
      />
      <SocialLink 
        href="https://linkedin.com/in/logan-pritchett"
        icon={<FiLinkedin size={30} />}
        label="LinkedIn Profile"
      />
      <SocialLink 
        href="mailto:hares.pill.0n@icloud.com"
        icon={<FiMail size={30} />}
        label="Email Contact"
      />
      <SocialLink 
        href={resumeUrl}
        icon={<FiFile size={30} />}
        label="Download Resume"
        onClick={handleResumeClick}
      />
    </div>
  );
}
