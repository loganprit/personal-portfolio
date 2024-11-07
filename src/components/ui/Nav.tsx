// create a nav component that contains home, projects, and work history which link to their components

import Link from "next/link";

export function Nav() {
  return (
    <div>
      <Link href="/">Home</Link>
      <Link href="/projects">Projects</Link>
      <Link href="/work-history">Work History</Link>
    </div>
  );
}
