// create a socials component that contains links to my github, linkedin, resume, and email as images from react-icons

import Link from "next/link";
import { FiFile, FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Socials() {
  return (
    <div>
      <Link href="https://github.com/yourusername">
        <FiGithub />
      </Link>
      <Link href="https://linkedin.com/in/yourusername">
        <FiLinkedin />
      </Link>
      <Link href="mailto:your.email@example.com">
        <FiMail />
      </Link>
      <Link href="/resume.pdf">
        <FiFile />
      </Link>
    </div>
  );

}
