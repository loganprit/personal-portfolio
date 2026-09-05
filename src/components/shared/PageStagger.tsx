import { useEffect } from "react";

const sectionTargets = [
  ["hero", ".manual-copy > *, .manual-portrait"],
  [
    "experience",
    ".manual-experience-heading, .experience-tabs, .manual-experience-item",
  ],
  ["story", ".manual-section-heading, .story-ledger > article"],
  ["skills", ".manual-section-heading, .manual-skills > li"],
  ["contact", ".contact-sheet > div"],
] as const;

// Mount after the experience data resolves so all five sections exist.
export function PageStagger() {
  useEffect(() => {
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (preference.matches || !("IntersectionObserver" in window)) return;

    const animations = new Set<Animation>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          observer.unobserve(entry.target);
          if (preference.matches) continue;
          const selector = sectionTargets.find(
            ([id]) => id === entry.target.id,
          )?.[1];
          if (!selector) continue;
          entry.target.querySelectorAll(selector).forEach((element, index) => {
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
            animations.add(animation);
            animation.onfinish = () => {
              animation.cancel();
              animations.delete(animation);
            };
          });
        }
      },
      { threshold: 0.12 },
    );

    for (const [id] of sectionTargets) {
      const section = document.getElementById(id);
      if (section) observer.observe(section);
    }
    const stop = () => {
      observer.disconnect();
      animations.forEach((animation) => animation.cancel());
      animations.clear();
    };
    preference.addEventListener("change", stop);
    return () => {
      preference.removeEventListener("change", stop);
      stop();
    };
  }, []);

  return null;
}
