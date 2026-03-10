"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/personal";
import { flipCardEntrance, flipCardPeek } from "@/lib/animations";

interface FlipCardProps {
  className?: string;
}

export function FlipCard({ className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);
  const hasInteractedRef = useRef(false);
  const [peekScope, peekAnimate] = useAnimate();
  const peekRan = useRef(false);

  const handleInteract = useCallback(() => {
    if (!hasInteractedRef.current) {
      hasInteractedRef.current = true;
      setHasInteracted(true);
    }
  }, []);

  // Run peek animation once after entrance completes
  useEffect(() => {
    if (peekRan.current) return;
    peekRan.current = true;

    const timer = setTimeout(async () => {
      if (hasInteractedRef.current) return;
      try {
        await peekAnimate(
          peekScope.current,
          { rotateY: flipCardPeek.rotateY },
          flipCardPeek.transition,
        );
      } catch {
        // Animation interrupted — no problem
      }
    }, 1500);

    return () => clearTimeout(timer);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <motion.div
      variants={flipCardEntrance}
      initial="initial"
      animate="animate"
      className={`[perspective:1000px] cursor-pointer ${className ?? ""}`}
      onClick={() => {
        handleInteract();
        setFlipped((f) => !f);
      }}
      onMouseEnter={() => {
        handleInteract();
        setFlipped(true);
      }}
      onMouseLeave={() => setFlipped(false)}
    >
      {/* Peek wrapper — animated independently from the CSS flip */}
      <motion.div ref={peekScope} className="[transform-style:preserve-3d]">
        <div
          className={`relative w-56 h-72 transition-transform duration-700 [transform-style:preserve-3d] ${
            flipped ? "[transform:rotateY(180deg)]" : ""
          }`}
        >
          {/* Front face — avatar */}
          <div className="absolute inset-0 [backface-visibility:hidden] rounded-2xl overflow-hidden shadow-lg">
            <Image
              src={personal.avatar}
              alt={personal.name}
              fill
              className="object-cover"
              sizes="224px"
            />

            {/* Bottom-center "Learn more" hint */}
            <div
              className={`absolute bottom-3 left-0 right-0 flex justify-center pointer-events-none transition-opacity duration-500 ${
                hasInteracted ? "opacity-0" : "opacity-100"
              }`}
            >
              <div className="flex items-center gap-1.5 rounded-full bg-black/50 backdrop-blur-sm px-3 py-1.5 text-white/90">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M15 3h6v6" />
                  <path d="M10 14L21 3" />
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                </svg>
                <span className="text-xs font-medium">Learn more about me!</span>
              </div>
            </div>
          </div>

          {/* Back face — About Me */}
          <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-border bg-card p-5 shadow-lg flex flex-col justify-center gap-2.5 overflow-hidden">
            <h3 className="text-base font-bold text-foreground text-center">About Me</h3>
            <div className="space-y-2">
              {personal.bio.slice(0, 4).map((section) => (
                <div key={section.label}>
                  <p className="text-xs font-semibold text-foreground">{section.label}</p>
                  <p className="text-xs text-muted-foreground leading-snug line-clamp-2">
                    {section.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}
