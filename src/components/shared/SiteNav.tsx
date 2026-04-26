"use client";

import { usePathname } from "next/navigation";
import { PillNav, type NavSection } from "./PillNav";

const SECTIONS: NavSection[] = [
  { label: "Home", id: "home", href: "/" },
  { label: "Contact", id: "contact", href: "/contact" },
];

export function SiteNav() {
  const pathname = usePathname();
  const activeSection = pathname === "/contact" ? "contact" : "home";

  return <PillNav sections={SECTIONS} activeSection={activeSection} />;
}
