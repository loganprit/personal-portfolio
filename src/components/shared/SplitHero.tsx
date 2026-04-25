"use client";

import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { personal } from "@/data/personal";
import { SocialLinks } from "./SocialLinks";
import { staggerContainer, staggerItem } from "@/lib/animations";
import type { ReactNode } from "react";

interface SplitHeroProps {
  children?: ReactNode;
  id?: string;
  className?: string;
}

export function SplitHero({ children, id = "hero", className }: SplitHeroProps) {
  const parts = personal.name.split(" ");
  const firstName = parts.slice(0, -1).join(" ");
  const lastName = parts.at(-1) ?? "";

  return (
    <section
      id={id}
      className={`flex items-center pt-32 pb-8 md:pb-28 ${className ?? ""}`}
    >
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="max-w-3xl mx-auto px-4 sm:px-6 flex flex-col-reverse md:flex-row items-center gap-8 w-full"
      >
        {/* Text content — R7 header style: font-black split-color name */}
        <div className="flex-1 text-center md:text-left">
          <motion.h1
            variants={staggerItem}
            className="text-4xl sm:text-5xl font-black text-foreground leading-tight"
          >
            {firstName}{" "}
            <span className="text-accent dark:text-accent-light">{lastName}</span>
          </motion.h1>
          <motion.p
            variants={staggerItem}
            className="mt-3 text-lg text-accent dark:text-accent-light font-medium"
          >
            {personal.title}
          </motion.p>
          <motion.p
            variants={staggerItem}
            className="mt-2 text-muted-foreground"
          >
            {personal.headline}
          </motion.p>

          <motion.p
            variants={staggerItem}
            className="mt-3 text-sm text-muted-foreground leading-relaxed"
          >
            {personal.shortBio}
          </motion.p>

          <motion.div variants={staggerItem} className="mt-6 flex items-center gap-4 justify-center md:justify-start">
            <a
              href={personal.resumeUrl}
              className="inline-flex items-center gap-2 rounded-xl bg-accent text-white px-6 py-3 font-medium hover:bg-accent/90 transition-colors"
            >
              <Download className="h-4 w-4" />
              Resume
            </a>
            <SocialLinks />
          </motion.div>
        </div>

        {/* Right-side visual — provided by each design */}
        {children && (
          <motion.div variants={staggerItem}>
            {children}
          </motion.div>
        )}
      </motion.div>
    </section>
  );
}
