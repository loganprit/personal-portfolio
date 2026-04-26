"use client";

import { useEffect, useRef, useState } from "react";

export function useActiveSection(sectionIds: readonly string[], defaultSection?: string) {
  const [activeSection, setActiveSection] = useState<string>(defaultSection ?? sectionIds[0]);
  const idsRef = useRef(sectionIds);
  const serialized = JSON.stringify(sectionIds);

  useEffect(() => {
    idsRef.current = sectionIds;
  }, [sectionIds]);

  useEffect(() => {
    const ids = idsRef.current;
    const observers: IntersectionObserver[] = [];

    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(id);
            }
          });
        },
        {
          rootMargin: "-30% 0px -30% 0px",
          threshold: 0,
        },
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => {
      observers.forEach((obs) => obs.disconnect());
    };
  }, [serialized]);

  return activeSection;
}
