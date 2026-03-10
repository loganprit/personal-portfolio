"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { personal } from "@/data/personal";
import { flipCardEntrance } from "@/lib/animations";

interface FlipCardProps {
  funFacts?: string[];
  className?: string;
}

const defaultFunFacts = [
  "Chemical engineer turned software developer",
  "Based in Louisiana",
  "Loves building with TypeScript & React",
  "Coffee-powered problem solver",
];

export function FlipCard({ funFacts = defaultFunFacts, className }: FlipCardProps) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      variants={flipCardEntrance}
      initial="initial"
      animate="animate"
      className={`[perspective:1000px] cursor-pointer ${className ?? ""}`}
      onClick={() => setFlipped((f) => !f)}
      onMouseEnter={() => setFlipped(true)}
      onMouseLeave={() => setFlipped(false)}
    >
      <div
        className={`relative w-64 h-80 transition-transform duration-700 [transform-style:preserve-3d] ${
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
            sizes="256px"
          />
        </div>

        {/* Back face — fun facts */}
        <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)] rounded-2xl border border-border bg-card p-6 shadow-lg flex flex-col items-center justify-center gap-3">
          <h3 className="text-lg font-bold text-foreground">Fun Facts</h3>
          <ul className="space-y-2 text-sm text-muted-foreground text-center">
            {funFacts.map((fact) => (
              <li key={fact}>{fact}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
