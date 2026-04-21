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
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const SECTIONS = [
  { label: "Experience", id: "experience" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

const SECTION_IDS = ["hero", "experience", "skills", "contact"] as const;
const doubledSkills = [...personal.skills, ...personal.skills];

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
        <ExperienceTabs id="experience" className="py-10 sm:py-14" />

        {/* ── Skills ────────────────────────────────────────── */}
        <section id="skills" className="py-10 sm:py-14">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-6"
            >
              Skills &amp; Technologies
            </motion.h2>
          </div>

          <div className="overflow-hidden">
            <div className="marquee-track flex gap-3 w-max">
              {doubledSkills.map((skill, i) => (
                <span
                  key={`${skill}-${i}`}
                  className="shrink-0 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium text-foreground whitespace-nowrap"
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

            <motion.p
              variants={staggerItem}
              className="mt-10 text-xs text-muted-foreground"
            >
              Built with Next.js &amp; Tailwind
            </motion.p>
          </motion.div>
        </section>
      </main>
    </div>
  );
}
