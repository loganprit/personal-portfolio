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

    let anchorScrollInProgress = false;
    // A no-op anchor click emits no scrollend, so it must not arm scroll tracking.
    const isAtAnchorPosition = (id: string) => {
      const element = document.getElementById(id);
      if (!element) return false;
      const scrollPaddingTop =
        Number.parseFloat(
          getComputedStyle(document.documentElement).scrollPaddingTop,
        ) || 0;
      const maxScrollY = Math.max(
        0,
        document.documentElement.scrollHeight - window.innerHeight,
      );
      const anchorScrollY = Math.min(
        maxScrollY,
        Math.max(
          0,
          window.scrollY +
            element.getBoundingClientRect().top -
            scrollPaddingTop,
        ),
      );
      return Math.abs(window.scrollY - anchorScrollY) <= 1;
    };
    const updateFromViewport = () =>
      updateActiveSection(anchorScrollInProgress);
    const updateFromHash = () => {
      const linkedSection = HOME_SECTIONS.find(
        ({ id }) => window.location.hash === `#${id}`,
      );
      anchorScrollInProgress = linkedSection
        ? !isAtAnchorPosition(linkedSection.id)
        : false;
      updateActiveSection(Boolean(linkedSection));
    };
    const updateFromAnchorClick = (event: MouseEvent) => {
      if (
        event.defaultPrevented ||
        event.button !== 0 ||
        event.metaKey ||
        event.ctrlKey ||
        event.shiftKey ||
        event.altKey
      )
        return;
      const target = event.target;
      if (!(target instanceof Element)) return;
      const link = target.closest(".manual-spine a");
      if (!(link instanceof HTMLAnchorElement)) return;
      const linkedSection = HOME_SECTIONS.find(
        ({ id }) => link.hash === `#${id}`,
      );
      if (!linkedSection) return;
      anchorScrollInProgress = true;
      if (window.location.hash === link.hash) {
        anchorScrollInProgress = !isAtAnchorPosition(linkedSection.id);
        updateActiveSection(true);
      }
    };
    const endAnchorScroll = () => {
      anchorScrollInProgress = false;
    };

    updateFromHash();
    window.addEventListener("click", updateFromAnchorClick);
    window.addEventListener("scroll", updateFromViewport, { passive: true });
    window.addEventListener("resize", updateFromViewport);
    window.addEventListener("hashchange", updateFromHash);
    window.addEventListener("scrollend", endAnchorScroll);
    return () => {
      window.removeEventListener("click", updateFromAnchorClick);
      window.removeEventListener("scroll", updateFromViewport);
      window.removeEventListener("resize", updateFromViewport);
      window.removeEventListener("hashchange", updateFromHash);
      window.removeEventListener("scrollend", endAnchorScroll);
    };
  }, [pathname]);

  return (
    <>
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      {pathname === "/" ? (
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
      ) : (
        <nav className="site-nav" aria-label="Primary navigation">
          <Link to="/" search={{ experience: "work" }}>
            Home
          </Link>
          <span>Contact</span>
          <ThemeToggle />
        </nav>
      )}
    </>
  );
}
