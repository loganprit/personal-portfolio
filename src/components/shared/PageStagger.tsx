import { useEffect } from "react";

const experienceTargets = [
  [
    "experience",
    ".manual-experience-heading, .experience-tabs, .manual-experience-item",
  ],
] as const;

const pageTargets = [
  ["story", ".manual-section-heading, .story-ledger > article"],
  ["skills", ".manual-section-heading, .manual-skills > li"],
  ["contact", ".contact-sheet > div"],
] as const;

// Prepare only offscreen sections; never hide content that has already painted.
function useSectionStagger(
  sectionTargets: ReadonlyArray<readonly [string, string]>,
) {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const pending = new Map<Element, Animation[]>();
    const observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (!entry.isIntersecting) continue;
        observer.unobserve(entry.target);
        pending.get(entry.target)?.forEach((animation) => animation.play());
        pending.delete(entry.target);
      }
    });

    for (const [id, selector] of sectionTargets) {
      const section = document.getElementById(id);
      if (!section || section.getAttribute("aria-busy") === "true") continue;
      // Slow hydration or delayed experience data must not replay visible content.
      if (section.getBoundingClientRect().top < window.innerHeight) continue;
      const entrances = Array.from(
        section.querySelectorAll(selector),
        (element, index) => {
          const animation = element.animate(
            [
              { opacity: 0, transform: "translateY(12px)" },
              { opacity: 1, transform: "translateY(0)" },
            ],
            {
              delay: index * 75,
              duration: 540,
              easing: "cubic-bezier(.22, .8, .25, 1)",
              fill: "both",
            },
          );
          animation.pause();
          animations.add(animation);
          animation.onfinish = () => {
            animation.cancel();
            animations.delete(animation);
          };
          return animation;
        },
      );
      pending.set(section, entrances);
      observer.observe(section);
    }
    const stop = () => {
      observer.disconnect();
      pending.clear();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    preference.addEventListener("change", stop);
    const beforePrint = () => {
      stop();
      document
        .querySelectorAll<HTMLElement>(".manual-copy > *, .manual-portrait")
        .forEach((element) => {
          element.style.animation = "none";
        });
    };
    window.addEventListener("beforeprint", beforePrint);
    return () => {
      preference.removeEventListener("change", stop);
      window.removeEventListener("beforeprint", beforePrint);
      observer.disconnect();
      pending.clear();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
  }, [sectionTargets]);
}

export function PageStagger() {
  useSectionStagger(pageTargets);
  return null;
}

export function ExperienceStagger() {
  useSectionStagger(experienceTargets);
  return null;
}
