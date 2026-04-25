"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useAnimate } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/personal";
import { flipCardEntrance, flipCardPeek } from "@/lib/animations";

interface FlipCardProps {
  className?: string;
}

export function FlipCard({ className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);
  const hasInteractedRef = useRef(false);
  const [peekScope, peekAnimate] = useAnimate();
  const peekRan = useRef(false);

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
    <div className={`relative flex flex-col items-center ${className ?? ""}`}>
      {/* Card with 3D perspective — click/hover scoped here */}
      <motion.div
        variants={flipCardEntrance}
        initial="initial"
        animate="animate"
        className="[perspective:1000px] cursor-pointer"
        onClick={() => {
          hasInteractedRef.current = true;
          setFlipped((f) => !f);
        }}
        onMouseEnter={() => {
          hasInteractedRef.current = true;
          setFlipped(true);
        }}
        onMouseLeave={() => setFlipped(false)}
      >
        {/* Peek wrapper — animated independently from the CSS flip */}
        <motion.div ref={peekScope} className="[transform-style:preserve-3d]">
          <div
            className={`relative w-72 h-96 transition-transform duration-700 [transform-style:preserve-3d] ${
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
                sizes="288px"
              />
            </div>

            {/* Back face — About Me */}
            <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-border bg-card p-5 shadow-lg flex flex-col justify-center gap-2.5 overflow-hidden">
              <h3 className="text-base font-bold text-foreground text-center">About Me</h3>
              <div className="space-y-2">
                {personal.bio.slice(0, 4).map((section) => (
                  <div key={section.label}>
                    <p className="text-xs font-semibold text-foreground">{section.label}</p>
                    <p className="text-xs text-muted-foreground leading-snug">
                      {section.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hand-drawn arrow + "about me!" below card */}
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={{
          opacity: flipped ? 0 : 1,
          y: flipped ? 8 : 0,
        }}
        transition={{ duration: 0.4, delay: !flipped && !hasInteractedRef.current ? 0.4 : 0 }}
        className="pointer-events-none mt-2 flex flex-col items-end text-muted-foreground md:absolute md:left-1/2 md:top-full md:mt-2 md:-translate-x-1/2"
      >
        <svg
          width="240"
          height="60"
          viewBox="0 0 240 60"
          fill="none"
          className="text-foreground/70"
        >
          {/* Hand-drawn curved arrow path */}
          <motion.path
            id="arrow-path"
            d="M 15 15 C 60 70, 160 50, 230 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            fill="none"
            initial={{ pathLength: 0, opacity: 1 }}
            animate={
              hasInteractedRef.current
                ? { pathLength: 1, opacity: flipped ? 0 : 1 }
                : { pathLength: flipped ? 0 : 1, opacity: 1 }
            }
            transition={{ duration: hasInteractedRef.current ? 0.3 : 0.8, delay: !flipped && !hasInteractedRef.current ? 0.4 : 0, ease: "easeInOut" }}
          />
          {/* Arrowhead */}
          <motion.path
            d="M 218 13 L 230 15 L 224 26"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            fill="none"
            initial={{ opacity: 0 }}
            animate={{ opacity: flipped ? 0 : 1 }}
            transition={{ duration: 0.2, delay: !flipped && !hasInteractedRef.current ? 1.2 : 0 }}
          />
          {/* Text wrapped around the arrow path */}
          <motion.text
            className="text-lg fill-current"
            dy="-5"
            style={{ fontFamily: "var(--font-caveat), cursive" }}
            initial={{ opacity: 0 }}
            animate={{ opacity: flipped ? 0 : 1 }}
            transition={{ duration: 0.5, delay: !flipped && !hasInteractedRef.current ? 1.2 : 0 }}
          >
            <textPath href="#arrow-path" startOffset="60%">
              about me!
            </textPath>
          </motion.text>
        </svg>
      </motion.div>
    </div>
  );
}
