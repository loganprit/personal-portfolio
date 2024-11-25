"use client";

import Link from "next/link";
import { FiFile, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";
import { useEffect, useCallback, useState } from "react";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
  onClick?: () => Promise<void>;
}

/**
 * Caches a file from a URL for 1 hour
 * @param url - The URL of the file to cache
 * @throws Error if the response is not ok
 */
async function cacheFile(url: string): Promise<void> {
  try {
    const cache = await caches.open("resume-cache");
    const response = await fetch(url);
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    // Create a new response with a custom Cache-Control header
    const modifiedResponse = new Response(response.body, {
      status: response.status,
      statusText: response.statusText,
      headers: new Headers({
        ...Object.fromEntries(response.headers.entries()),
        "Cache-Control": "max-age=3600" // 1 hour cache
      })
    });
    
    await cache.put(url, modifiedResponse);
  } catch (error) {
    console.error("Failed to cache resume:", error);
    throw error; // Re-throw to handle in the component
  }
}

/**
 * Individual social link component
 */
function SocialLink({ href, icon, label, onClick }: SocialLinkProps) {
  return (
    <Link 
      href={href}
      className="p-3 hover:bg-foreground/10 rounded-full transition-colors inline-flex items-center gap-2"
      aria-label={label}
      onClick={onClick ? (e) => {
        e.preventDefault();
        onClick().then(() => window.location.href = href);
      } : undefined}
    >
      {icon}
      <span className="sr-only">{label}</span>
    </Link>
  );
}

/**
 * Social links component displaying various platform links
 */
export function Socials() {
  const resumeUrl = "/api/resume";
  const [isCaching, setIsCaching] = useState(false);

  // Cache the resume on component mount
  useEffect(() => {
    const cacheResume = async () => {
      if (isCaching) return;
      
      try {
        setIsCaching(true);
        await cacheFile(resumeUrl);
      } catch (error) {
        // Handle error silently on initial load
        console.error("Failed to cache resume on initial load:", error);
      } finally {
        setIsCaching(false);
      }
    };

    void cacheResume();
  }, [resumeUrl, isCaching]);

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
