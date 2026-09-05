// Throwaway motion comparisons on the real homepage; mounted only in development.
import { useCallback, useEffect, useRef, useState } from "react";
import { useNavigate } from "@tanstack/react-router";
import {
  motionOptions,
  motionOptionKey,
  motionSections,
  type MotionOption,
  type MotionOptionSearchKey,
  type MotionSection,
} from "@/lib/experience";

interface MotionPrototypePanelProps {
  motionSection: MotionSection;
  motionChoices: Record<MotionSection, MotionOption>;
}

const sectionLabels = {
  hero: "Hero",
  experience: "Experience",
  story: "Story",
  skills: "Skills",
  contact: "Contact",
} satisfies Record<MotionSection, string>;

const optionLabels = {
  off: "Off",
  fade: "Fade",
  rise: "Rise",
  stagger: "Stagger",
  lateral: "Lateral settle",
  focus: "Soft focus",
} satisfies Record<MotionOption, string>;

const targetSelectors = {
  hero: ".manual-copy > *, .manual-portrait",
  experience:
    ".manual-experience-heading, .manual-timeline > div > div:first-child, .manual-experience-item",
  story: ".manual-section-heading, .story-ledger > article",
  skills: ".manual-section-heading, .manual-skills > li",
  contact: ".contact-sheet > div",
} satisfies Record<MotionSection, string>;

function keyframesFor(option: MotionOption): Keyframe[] | undefined {
  switch (option) {
    case "fade":
      return [{ opacity: 0 }, { opacity: 1 }];
    case "rise":
      return [
        { opacity: 0, transform: "translateY(18px)" },
        { opacity: 1, transform: "translateY(0)" },
      ];
    case "stagger":
      return [
        { opacity: 0, transform: "translateY(12px)" },
        { opacity: 1, transform: "translateY(0)" },
      ];
    case "lateral":
      return [
        { opacity: 0, transform: "translateX(-18px)" },
        { opacity: 1, transform: "translateX(0)" },
      ];
    case "focus":
      return [
        { opacity: 0, filter: "blur(5px)" },
        { opacity: 1, filter: "blur(0)" },
      ];
    default:
      return undefined;
  }
}

export function MotionPrototypePanel({
  motionSection,
  motionChoices,
}: MotionPrototypePanelProps) {
  const navigate = useNavigate({ from: "/" });
  const [expanded, setExpanded] = useState(true);
  const [reducedMotion, setReducedMotion] = useState(false);
  const [status, setStatus] = useState("Baseline: off");
  const animations = useRef<Animation[]>([]);
  const frames = useRef<number[]>([]);
  const observer = useRef<IntersectionObserver | null>(null);
  const motionOption = motionChoices[motionSection];

  const cancelAll = useCallback(() => {
    observer.current?.disconnect();
    observer.current = null;
    frames.current.forEach((frame) => window.cancelAnimationFrame(frame));
    frames.current = [];
    animations.current.forEach((animation) => animation.cancel());
    animations.current = [];
  }, []);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReducedMotion(query.matches);
      if (query.matches) cancelAll();
    };
    update();
    query.addEventListener("change", update);
    return () => {
      query.removeEventListener("change", update);
      cancelAll();
    };
  }, [cancelAll]);

  const animateSection = useCallback(
    (section: MotionSection, option: MotionOption) => {
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
      const root = document.getElementById(section);
      const keyframes = keyframesFor(option);
      if (!root || !keyframes) return;

      root
        .querySelectorAll<HTMLElement>(targetSelectors[section])
        .forEach((element, index) => {
          const animation = element.animate(keyframes, {
            delay: option === "stagger" ? index * 75 : 0,
            duration: option === "focus" ? 620 : 540,
            easing: "cubic-bezier(.22, .8, .25, 1)",
            fill: "both",
          });
          animations.current.push(animation);
          animation.addEventListener(
            "finish",
            () => {
              animation.cancel();
              animations.current = animations.current.filter(
                (active) => active !== animation,
              );
            },
            { once: true },
          );
        });
    },
    [],
  );

  const replaySelected = useCallback(() => {
    cancelAll();
    const root = document.getElementById(motionSection);
    root?.scrollIntoView({ behavior: "instant", block: "start" });
    if (motionOption === "off" || reducedMotion) {
      setStatus(
        reducedMotion ? "Reduced motion: preview disabled" : "Baseline: off",
      );
      return;
    }
    const frame = window.requestAnimationFrame(() =>
      animateSection(motionSection, motionOption),
    );
    frames.current.push(frame);
    setStatus(
      `${sectionLabels[motionSection]} · ${optionLabels[motionOption]}`,
    );
  }, [animateSection, cancelAll, motionOption, motionSection, reducedMotion]);

  useEffect(() => {
    replaySelected();
  }, [cancelAll, motionOption, motionSection, replaySelected]);

  const replayPage = useCallback(() => {
    cancelAll();
    const hasMotion = motionSections.some(
      (section) => motionChoices[section] !== "off",
    );
    if (!hasMotion || reducedMotion) {
      setStatus(
        reducedMotion ? "Reduced motion: preview disabled" : "Baseline: off",
      );
      return;
    }

    const roots = motionSections
      .map((section) => document.getElementById(section))
      .filter((root): root is HTMLElement => root !== null);
    window.scrollTo({ top: 0, behavior: "instant" });
    if (!("IntersectionObserver" in window)) {
      roots.forEach((root) => {
        // SAFETY: roots are resolved exclusively from motionSections.
        const section = root.id as MotionSection;
        animateSection(section, motionChoices[section]);
      });
    } else {
      observer.current = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            // SAFETY: only roots resolved from motionSections are observed.
            const section = entry.target.id as MotionSection;
            animateSection(section, motionChoices[section]);
            observer.current?.unobserve(entry.target);
          });
        },
        { threshold: 0.12 },
      );
      roots.forEach((root) => observer.current?.observe(root));
    }
    setStatus("Scroll preview armed");
  }, [animateSection, cancelAll, motionChoices, reducedMotion]);

  const updateSearch = useCallback(
    (
      change: Partial<
        {
          motionSection: MotionSection;
        } & Partial<Record<MotionOptionSearchKey, MotionOption>>
      >,
    ) => {
      void navigate({
        search: (previous) => ({ ...previous, ...change }),
        replace: true,
        resetScroll: false,
      });
    },
    [navigate],
  );

  if (!import.meta.env.DEV) return null;

  return (
    <aside
      className="motion-prototype-panel"
      data-expanded={expanded}
      aria-label="Motion comparison prototype"
    >
      <div className="motion-prototype-heading">
        <span>Motion lab</span>
        <button
          type="button"
          aria-expanded={expanded}
          onClick={() => setExpanded((value) => !value)}
        >
          {expanded ? "Collapse" : "Expand"}
        </button>
      </div>
      {expanded && (
        <div className="motion-prototype-controls">
          <label className="motion-prototype-select">
            Section
            <select
              value={motionSection}
              onChange={(event) =>
                updateSearch({
                  motionSection:
                    motionSections.find(
                      (section) => section === event.target.value,
                    ) ?? "hero",
                })
              }
            >
              {motionSections.map((section) => (
                <option key={section} value={section}>
                  {sectionLabels[section]}
                </option>
              ))}
            </select>
          </label>
          <fieldset>
            <legend>Animation</legend>
            <div className="motion-prototype-options">
              {motionOptions.map((option) => (
                <button
                  key={option}
                  type="button"
                  aria-pressed={motionOption === option}
                  data-active={motionOption === option}
                  onClick={() => {
                    if (option === motionOption) replaySelected();
                    else
                      updateSearch({
                        [motionOptionKey(motionSection)]: option,
                      });
                  }}
                >
                  {optionLabels[option]}
                </button>
              ))}
            </div>
          </fieldset>
          <div className="motion-prototype-actions">
            <button type="button" onClick={replaySelected}>
              Replay selected
            </button>
            <button type="button" onClick={replayPage}>
              Preview page on scroll
            </button>
          </div>
          <output className="motion-prototype-status" aria-live="polite">
            {reducedMotion ? "Reduced motion is on. " : ""}
            {status}
          </output>
        </div>
      )}
    </aside>
  );
}
