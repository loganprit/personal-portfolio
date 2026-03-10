"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { currentRole } from "@/data/current-role";
import { experiences } from "@/data/work-history";
import { education } from "@/data/education";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/cn";
import { tabContent, staggerContainer, staggerItem } from "@/lib/animations";

type Tab = "work" | "education";

function getInitials(name: string): string {
  const words = name.split(/\s+/);
  if (words.length > 3) return words[0][0].toUpperCase();
  return words
    .filter((w) => w.length > 0)
    .map((w) => w[0].toUpperCase())
    .join("")
    .slice(0, 2);
}

interface ExperienceTabsProps {
  id?: string;
  className?: string;
}

export function ExperienceTabs({ id = "experience", className }: ExperienceTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("work");

  const workEntries = [
    {
      title: currentRole.title,
      company: currentRole.company,
      location: currentRole.location,
      period: currentRole.period,
      description: currentRole.description,
      achievements: [] as string[],
      technologies: currentRole.technologies,
      isCurrent: true,
      logo: currentRole.logo,
      logoFill: currentRole.logoFill,
    },
    ...experiences.map((exp) => ({ ...exp, isCurrent: false })),
  ];

  return (
    <section id={id} className={cn("", className)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        {/* Sliding pill toggle */}
        <div className="flex rounded-full bg-muted p-1 mb-6">
          {(["work", "education"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative flex-1 rounded-full py-2 text-sm font-medium z-10 transition-colors",
                activeTab === tab
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab === "work" ? "Work" : "Education"}
              {activeTab === tab && (
                <motion.div
                  layoutId="section-pill"
                  className="absolute inset-0 rounded-full bg-card border border-border shadow-sm"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "work" ? (
            <motion.div
              key="work"
              variants={tabContent}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative border-l-2 border-border ml-6"
              >
                {workEntries.map((entry) => (
                  <motion.div
                    key={`${entry.company}-${entry.period}`}
                    variants={staggerItem}
                    className="relative pl-10 pb-8 last:pb-0"
                  >
                    <div
                      className={cn(
                        "absolute -left-[25px] top-0 h-12 w-12 rounded-full flex items-center justify-center overflow-hidden",
                        entry.logo
                          ? entry.logoFill
                            ? ""
                            : "bg-white"
                          : "bg-accent/10 border-2 border-accent dark:border-accent-light text-sm font-bold text-accent dark:text-accent-light",
                      )}
                    >
                      {entry.logo ? (
                        <Image
                          src={entry.logo}
                          alt={`${entry.company} logo`}
                          width={48}
                          height={48}
                          className={cn(
                            "h-full w-full",
                            entry.logoFill ? "object-cover" : "object-contain p-1",
                          )}
                        />
                      ) : (
                        getInitials(entry.company)
                      )}
                    </div>

                    <div className="flex items-center gap-2">
                      <h4 className="text-lg font-bold text-foreground">{entry.title}</h4>
                      {entry.isCurrent && (
                        <span className="inline-flex items-center rounded-full bg-green-500/10 px-2.5 py-0.5 text-xs font-medium text-green-700 dark:text-green-400 border border-green-500/20">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {entry.company}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {entry.location}
                      </span>
                      <span>{entry.period}</span>
                    </div>

                    <p className="mt-3 text-muted-foreground">{entry.description}</p>

                    {entry.achievements.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {entry.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="text-accent dark:text-accent-light shrink-0">
                              &bull;
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {entry.technologies.map((tech) => (
                        <TechBadge key={tech.name} name={tech.name} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          ) : (
            <motion.div
              key="education"
              variants={tabContent}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative border-l-2 border-border ml-6"
              >
                {education.map((edu) => (
                  <motion.div
                    key={`${edu.institution}-${edu.period}`}
                    variants={staggerItem}
                    className="relative pl-10 pb-8 last:pb-0"
                  >
                    <div
                      className={cn(
                        "absolute -left-[25px] top-0 h-12 w-12 rounded-full flex items-center justify-center overflow-hidden",
                        edu.logo
                          ? edu.logoFill
                            ? ""
                            : "bg-white"
                          : "bg-accent/10 border-2 border-accent dark:border-accent-light text-sm font-bold text-accent dark:text-accent-light",
                      )}
                    >
                      {edu.logo ? (
                        <Image
                          src={edu.logo}
                          alt={`${edu.institution} logo`}
                          width={48}
                          height={48}
                          className={cn(
                            "h-full w-full",
                            edu.logoFill ? "object-cover" : "object-contain p-1",
                          )}
                        />
                      ) : (
                        getInitials(edu.institution)
                      )}
                    </div>

                    <h4 className="text-lg font-bold text-foreground">
                      {edu.degree} — {edu.field}
                    </h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <GraduationCap className="h-3.5 w-3.5" />
                        {edu.institution}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {edu.location}
                      </span>
                      <span>{edu.period}</span>
                    </div>

                    <p className="mt-3 text-muted-foreground">{edu.description}</p>

                    {edu.achievements.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {edu.achievements.map((achievement) => (
                          <li
                            key={achievement}
                            className="text-sm text-muted-foreground flex gap-2"
                          >
                            <span className="text-accent dark:text-accent-light shrink-0">
                              &bull;
                            </span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}

                    <div className="flex flex-wrap gap-1.5 mt-4">
                      {edu.technologies.map((tech) => (
                        <TechBadge key={tech.name} name={tech.name} />
                      ))}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
