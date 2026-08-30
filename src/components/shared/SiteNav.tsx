import { Link, useRouterState } from "@tanstack/react-router";
import { ThemeToggle } from "@/components/theme/ThemeToggle";

const HOME_SECTIONS = [
  { label: "Index", href: "#hero" },
  { label: "Plates", href: "#experience" },
  { label: "Notes", href: "#story" },
  { label: "Appendix", href: "#skills" },
] as const;

export function SiteNav() {
  const pathname = useRouterState({
    select: (state) => state.location.pathname,
  });

  if (pathname === "/") {
    return (
      <nav className="manual-spine" aria-label="Field manual index">
        <a href="#hero" className="manual-mark" aria-label="Back to top">
          <img src="/favicon-source.svg" alt="" width={42} height={42} />
        </a>
        <p>Cobalt field manual</p>
        <div className="manual-spine-links">
          {HOME_SECTIONS.map((section) => (
            <a key={section.href} href={section.href}>
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
        Index
      </Link>
      <span>Contact plate</span>
      <ThemeToggle />
    </nav>
  );
}
