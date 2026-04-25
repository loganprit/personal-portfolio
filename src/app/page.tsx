"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { PillNav } from "@/components/shared/PillNav";
import { SplitHero } from "@/components/shared/SplitHero";
import { FlipCard } from "@/components/shared/FlipCard";
import { ExperienceTabs } from "@/components/shared/ExperienceTabs";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
import { staggerContainer, staggerItem } from "@/lib/animations";

const SECTIONS = [
  { label: "Experience", id: "experience" },
  { label: "Contact", id: "contact" },
] as const;

const SECTION_IDS = ["hero", "experience", "contact"] as const;

export default function Home() {
  const activeSection = useActiveSection(SECTION_IDS);

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PillNav sections={[...SECTIONS]} activeSection={activeSection} />

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <SplitHero id="hero">
          <FlipCard />
        </SplitHero>

        {/* ── Experience ────────────────────────────────────── */}
        <ExperienceTabs id="experience" className="pt-8 pb-10 sm:pb-14" />

        {/* ── Skills ────────────────────────────────────────── */}
        <section id="skills" className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <h2 className="text-2xl font-bold text-foreground mb-6">
              Skills &amp; Technologies
            </h2>
            <div className="flex flex-wrap gap-2.5">
              {personal.skills.map((skill) => (
                <span
                  key={skill}
                  className="rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact ───────────────────────────────────────── */}
        <section id="contact" className="py-10 sm:py-14">
          <motion.div
            variants={staggerContainer}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            className="max-w-3xl mx-auto px-4 sm:px-6 text-center"
          >
            <motion.h2
              variants={staggerItem}
              className="text-2xl font-bold text-foreground"
            >
              Get in Touch
            </motion.h2>

            <motion.p
              variants={staggerItem}
              className="mt-4 text-muted-foreground max-w-md mx-auto"
            >
              Have a question or want to work together? Feel free to reach out.
            </motion.p>

            <motion.div variants={staggerItem} className="mt-6">
              <a
                href={`mailto:${personal.email}`}
                className="inline-flex items-center gap-2 rounded-full border-2 border-accent dark:border-accent-light text-accent dark:text-accent-light px-6 py-3 font-medium hover:bg-accent/10 transition-colors"
              >
                <Mail className="h-4 w-4" />
                {personal.email}
              </a>
            </motion.div>

            <motion.div
              variants={staggerItem}
              className="mt-6 flex justify-center"
            >
              <SocialLinks />
            </motion.div>

          </motion.div>
        </section>
      </main>
    </div>
  );
}
