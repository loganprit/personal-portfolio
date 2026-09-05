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

    const updateActiveSection = (honorHash = false) => {
      const atBottom =
        window.scrollY > 0 &&
        window.scrollY + window.innerHeight >=
          document.documentElement.scrollHeight - 2;
      const section = [...HOME_SECTIONS].reverse().find(({ id }) => {
        const element = document.getElementById(id);
        return (
          element &&
          element.getBoundingClientRect().top <= window.innerHeight * 0.3
        );
      });
      const linkedSection = honorHash
        ? HOME_SECTIONS.find(({ id }) => window.location.hash === `#${id}`)
        : undefined;
      const linkedBounds =
        linkedSection &&
        document.getElementById(linkedSection.id)?.getBoundingClientRect();
      // Multiple final sections can fit at the scroll limit; honor the visible anchor.
      const bottomSection =
        linkedBounds && linkedBounds.top >= 0 ? linkedSection.id : "contact";
      setActiveSection(atBottom ? bottomSection : (section?.id ?? "hero"));
    };

    const updateFromViewport = () => updateActiveSection();
    const updateFromHash = () => updateActiveSection(true);

    updateFromHash();
    window.addEventListener("scroll", updateFromViewport, { passive: true });
    window.addEventListener("resize", updateFromViewport);
    window.addEventListener("hashchange", updateFromHash);
    return () => {
      window.removeEventListener("scroll", updateFromViewport);
      window.removeEventListener("resize", updateFromViewport);
      window.removeEventListener("hashchange", updateFromHash);
    };
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
