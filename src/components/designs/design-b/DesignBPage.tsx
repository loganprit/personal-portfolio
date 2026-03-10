"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { projects } from "@/data/projects";
import { PillNav } from "@/components/shared/PillNav";
import { SplitHero } from "@/components/shared/SplitHero";
import { FlipCard } from "@/components/shared/FlipCard";
import { ExperienceTabs } from "@/components/shared/ExperienceTabs";
import { ProjectCard } from "@/components/shared/ProjectCard";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { useActiveSection } from "@/hooks/useActiveSection";
import { fadeIn, staggerContainer, staggerItem } from "@/lib/animations";

const SECTIONS = [
  { label: "About", id: "about" },
  { label: "Experience", id: "experience" },
  { label: "Projects", id: "projects" },
  { label: "Skills", id: "skills" },
  { label: "Contact", id: "contact" },
] as const;

const SECTION_IDS = ["hero", "about", "experience", "projects", "skills", "contact"] as const;

export default function DesignBPage() {
  const activeSection = useActiveSection(SECTION_IDS);
  const featured = useMemo(() => projects.filter((p) => p.featured), []);
  const doubledSkills = useMemo(
    () => [...personal.skills, ...personal.skills],
    [],
  );

  return (
    <div className="min-h-screen bg-background text-foreground">
      <PillNav sections={[...SECTIONS]} activeSection={activeSection} />

      <main>
        {/* ── Hero ──────────────────────────────────────────── */}
        <SplitHero id="hero">
          <FlipCard />
        </SplitHero>

        {/* ── About ─────────────────────────────────────────── */}
        <section id="about" className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-12"
            >
              About Me
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="space-y-6"
            >
              {personal.bio.map((section) => (
                <motion.div
                  key={section.label}
                  variants={staggerItem}
                  className="border-l-2 border-accent dark:border-accent-light pl-6 py-2"
                >
                  <h3 className="font-semibold text-foreground text-base">
                    {section.label}
                  </h3>
                  <p className="mt-2 text-muted-foreground leading-relaxed">
                    {section.description}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Experience ────────────────────────────────────── */}
        <ExperienceTabs id="experience" className="py-24" />

        {/* ── Projects ──────────────────────────────────────── */}
        <section id="projects" className="py-24 bg-muted">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-12"
            >
              Projects
            </motion.h2>

            <motion.div
              variants={staggerContainer}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
            >
              {featured.map((project) => (
                <ProjectCard
                  key={project.title}
                  project={project}
                  variant="expanded"
                />
              ))}
            </motion.div>
          </div>
        </section>

        {/* ── Skills ────────────────────────────────────────── */}
        <section id="skills" className="py-24">
          <div className="max-w-3xl mx-auto px-4 sm:px-6">
            <motion.h2
              variants={fadeIn}
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              className="text-2xl font-bold text-foreground mb-12"
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
        <section id="contact" className="py-24">
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

            <motion.div variants={staggerItem} className="mt-10">
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
              className="mt-8 flex justify-center"
            >
              <SocialLinks />
            </motion.div>

            <motion.p
              variants={staggerItem}
              className="mt-20 text-xs text-muted-foreground"
            >
              Built with Next.js &amp; Tailwind
            </motion.p>
          </motion.div>
        </section>
      </main>

      <div className="h-20" />
    </div>
  );
}
