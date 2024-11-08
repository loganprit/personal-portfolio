// create a socials component that contains links to my github, linkedin, resume, and email as images from react-icons

import Link from "next/link";
import { FiFile, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

interface SocialLinkProps {
  href: string;
  icon: React.ReactNode;
  label: string;
}

/**
 * Individual social link component
 */
function SocialLink({ href, icon, label }: SocialLinkProps) {
  return (
    <Link 
      href={href}
      className="p-3 hover:bg-foreground/10 rounded-full transition-colors"
      aria-label={label}
    >
      {icon}
    </Link>
  );
}

/**
 * Social links component displaying various platform links
 */
export function Socials() {
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
        href="https://docs.google.com/uc?export=download&id=1tyxpk-D8_QJhQNbYOUl21BlSxH_twZnt"
        icon={<FiFile size={30} />}
        label="Download Resume"
      />
    </div>
  );
}
