import { useEffect, useState } from "react";
import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const HOME_SECTIONS = [
  { id: "experience", label: "Work" },
  { id: "story", label: "Story" },
  { id: "skills", label: "Skills" },
  { id: "contact", label: "Contact" },
] as const;

export function SiteNav() {
  const [activeSection, setActiveSection] = useState("hero");
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  useEffect(() => {
    if (pathname !== "/") return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries.find((entry) => entry.isIntersecting);
        if (visible) setActiveSection(visible.target.id);
      },
      { rootMargin: "-20% 0px -70%" },
    );

    ["hero", ...HOME_SECTIONS.map(({ id }) => id)].forEach((id) => {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [pathname]);

  if (pathname === "/") {
    return (
      <nav className="manual-spine" aria-label="Field manual index">
        <a
          href="#hero"
          className="manual-mark"
          aria-label="Back to top"
          aria-current={activeSection === "hero" ? "location" : undefined}
        >
          <img src="/favicon-source.svg" alt="" width={42} height={42} />
        </a>
        <p>Cobalt field manual</p>
        <div className="manual-spine-links">
          {HOME_SECTIONS.map((section) => (
            <a
              key={section.id}
              href={`#${section.id}`}
              aria-current={
                activeSection === section.id ? "location" : undefined
              }
            >
              {section.label}
            </a>
          ))}
        </div>
        <span className="manual-edition">LP—01</span>
        <ThemeToggle className="manual-theme-toggle" />
      </nav>
    );
  }

  return (
    <nav className="site-nav" aria-label="Primary navigation">
      <Link to="/" search={{ experience: "work" }}>
        Home
      </Link>
      <span>Contact</span>
      <ThemeToggle />
    </nav>
  );
}
