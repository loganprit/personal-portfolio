"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, Briefcase } from "lucide-react";
import { currentRole } from "@/data/current-role";
import { experiences } from "@/data/work-history";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/cn";
import { fadeIn, tabContent, staggerContainer, staggerItem } from "@/lib/animations";

type Tab = "current" | "past";

function getInitials(company: string): string {
  const words = company.split(/\s+/);
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
  const [activeTab, setActiveTab] = useState<Tab>("current");

  return (
    <section id={id} className={cn("py-20", className)}>
      <div className="max-w-3xl mx-auto px-4 sm:px-6">
        <motion.h2
          variants={fadeIn}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="text-2xl font-bold text-foreground mb-8"
        >
          Experience
        </motion.h2>

        {/* Tabs */}
        <div className="flex gap-6 border-b border-border mb-8">
          {(["current", "past"] as const).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={cn(
                "relative pb-3 text-sm font-medium transition-colors",
                activeTab === tab
                  ? "text-foreground"
                  : "text-muted-foreground hover:text-foreground",
              )}
            >
              {tab === "current" ? "Current Role" : "Past Experience"}
              {activeTab === tab && (
                <motion.div
                  layoutId="tab-underline"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent dark:bg-accent-light"
                />
              )}
            </button>
          ))}
        </div>

        {/* Tab content */}
        <AnimatePresence mode="wait">
          {activeTab === "current" ? (
            <motion.div
              key="current"
              variants={tabContent}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              <div className="rounded-xl border border-border bg-card p-6 shadow-sm">
                <h3 className="text-lg font-bold text-foreground">
                  {currentRole.title}
                </h3>
                <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2 text-sm text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Briefcase className="h-3.5 w-3.5" />
                    {currentRole.company}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-3.5 w-3.5" />
                    {currentRole.location}
                  </span>
                  <span>{currentRole.period}</span>
                </div>
                <p className="mt-4 text-muted-foreground">
                  {currentRole.description}
                </p>
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {currentRole.technologies.map((tech) => (
                    <TechBadge key={tech.name} name={tech.name} />
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="past"
              variants={tabContent}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {/* Timeline */}
              <motion.div
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="relative border-l-2 border-border ml-6"
              >
                {experiences.map((exp) => (
                  <motion.div
                    key={`${exp.company}-${exp.period}`}
                    variants={staggerItem}
                    className="relative pl-10 pb-12 last:pb-0"
                  >
                    <div className="absolute -left-[28px] top-0 h-12 w-12 rounded-full bg-accent/10 border-2 border-accent dark:border-accent-light flex items-center justify-center text-sm font-bold text-accent dark:text-accent-light">
                      {getInitials(exp.company)}
                    </div>

                    <h4 className="text-lg font-bold text-foreground">{exp.title}</h4>
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                      <span className="inline-flex items-center gap-1">
                        <Briefcase className="h-3.5 w-3.5" />
                        {exp.company}
                      </span>
                      <span className="inline-flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" />
                        {exp.location}
                      </span>
                      <span>{exp.period}</span>
                    </div>

                    <p className="mt-3 text-muted-foreground">{exp.description}</p>

                    {exp.achievements.length > 0 && (
                      <ul className="mt-3 space-y-1.5">
                        {exp.achievements.map((achievement) => (
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
                      {exp.technologies.map((tech) => (
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
