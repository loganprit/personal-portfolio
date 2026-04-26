"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";
import { currentRole } from "@/data/current-role";
import { experiences } from "@/data/work-history";
import type { Technology } from "@/data/types";
import { education } from "@/data/education";
import { TechBadge } from "./TechBadge";
import { cn } from "@/lib/cn";
import { tabContent, timelineLine, staggerContainer, staggerItem } from "@/lib/animations";

type Tab = "work" | "education";

const TIMELINE_MARKER_SIZE_PX = 53;
const TIMELINE_MARKER_OFFSET_PX = -27.5;
const TIMELINE_LINE_WIDTH_PX = 2;
const TIMELINE_LINE_OFFSET_PX =
  TIMELINE_MARKER_OFFSET_PX + TIMELINE_MARKER_SIZE_PX / 2 - TIMELINE_LINE_WIDTH_PX / 2;

interface WorkEntry {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: Technology[];
  isCurrent: boolean;
  logo?: string;
  logoFill?: boolean;
}

interface WorkGroup {
  company: string;
  location: string;
  logo?: string;
  logoFill?: boolean;
  roles: WorkEntry[];
}

function WorkRoleBody({ entry }: { entry: WorkEntry }) {
  return (
    <>
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
    </>
  );
}

function getInitials(name: string): string {
  const words = name.split(/\s+/);
  if (words.length > 3) return words[0][0].toUpperCase();
  return words
    .filter((w) => w.length > 0)
    .map((w) => w[0].toUpperCase())
    .join("")
    .slice(0, 2);
}

function isSameCompanyGroup(group: WorkGroup, entry: WorkEntry): boolean {
  return (
    group.company === entry.company &&
    group.location === entry.location &&
    group.logo === entry.logo
  );
}

function groupConsecutiveWorkEntries(entries: WorkEntry[]): WorkGroup[] {
  return entries.reduce<WorkGroup[]>((groups, entry) => {
    const previousGroup = groups[groups.length - 1];

    if (previousGroup && isSameCompanyGroup(previousGroup, entry)) {
      previousGroup.roles.push(entry);
      return groups;
    }

    groups.push({
      company: entry.company,
      location: entry.location,
      logo: entry.logo,
      logoFill: entry.logoFill,
      roles: [entry],
    });

    return groups;
  }, []);
}

interface TimelineLogoMarkerProps {
  label: string;
  logo?: string;
  logoFill?: boolean;
}

function TimelineLogoMarker({ label, logo, logoFill }: TimelineLogoMarkerProps) {
  return (
    <div
      className={cn(
        "absolute top-0 rounded-full flex items-center justify-center overflow-hidden",
        logo
          ? logoFill
            ? ""
            : "bg-white"
          : "bg-accent/10 border-2 border-accent dark:border-accent-light text-sm font-bold text-accent dark:text-accent-light",
      )}
      style={{
        left: `${TIMELINE_MARKER_OFFSET_PX}px`,
        width: `${TIMELINE_MARKER_SIZE_PX}px`,
        height: `${TIMELINE_MARKER_SIZE_PX}px`,
      }}
    >
      {logo ? (
        <Image
          src={logo}
          alt={`${label} logo`}
          width={TIMELINE_MARKER_SIZE_PX}
          height={TIMELINE_MARKER_SIZE_PX}
          className={cn(
            "h-full w-full",
            logoFill ? "object-cover" : "object-contain p-1",
          )}
        />
      ) : (
        getInitials(label)
      )}
    </div>
  );
}

interface ExperienceTabsProps {
  id?: string;
  className?: string;
}

export function ExperienceTabs({ id = "experience", className }: ExperienceTabsProps) {
  const [activeTab, setActiveTab] = useState<Tab>("work");
  const timelineLineStyle = {
    left: `${TIMELINE_LINE_OFFSET_PX}px`,
    width: `${TIMELINE_LINE_WIDTH_PX}px`,
  };

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
  const workGroups = groupConsecutiveWorkEntries(workEntries);

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
                className="relative ml-6"
              >
                <motion.div
                  aria-hidden="true"
                  variants={timelineLine}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="pointer-events-none absolute inset-y-0 bg-border origin-top"
                  style={timelineLineStyle}
                />
                {workGroups.map((group) => {
                  const [primaryRole, ...previousRoles] = group.roles;

                  return (
                    <motion.div
                      key={`${group.company}-${group.location}-${primaryRole.period}`}
                      variants={staggerItem}
                      className="relative z-10 pl-10 pb-8 last:pb-0"
                    >
                      <TimelineLogoMarker
                        label={group.company}
                        logo={group.logo}
                        logoFill={group.logoFill}
                      />

                      <h4 className="text-lg font-bold text-foreground">
                        {primaryRole.title}
                      </h4>

                      <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-1 text-sm text-muted-foreground">
                        <span className="inline-flex items-center gap-1">
                          <Briefcase className="h-3.5 w-3.5" />
                          {group.company}
                        </span>
                        <span className="inline-flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" />
                          {group.location}
                        </span>
                        <span>{primaryRole.period}</span>
                      </div>

                      <WorkRoleBody entry={primaryRole} />

                      {previousRoles.length > 0 && (
                        <div className="mt-8 space-y-6">
                          {previousRoles.map((entry) => (
                            <div key={`${entry.title}-${entry.period}`}>
                              <h5 className="text-lg font-bold text-foreground">
                                {entry.title}
                              </h5>

                              <div className="mt-1 text-sm text-muted-foreground">
                                {entry.period}
                              </div>

                              <WorkRoleBody entry={entry} />
                            </div>
                          ))}
                        </div>
                      )}
                    </motion.div>
                  );
                })}
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
                className="relative ml-6"
              >
                <motion.div
                  aria-hidden="true"
                  variants={timelineLine}
                  initial="initial"
                  whileInView="animate"
                  viewport={{ once: true }}
                  className="pointer-events-none absolute inset-y-0 bg-border origin-top"
                  style={timelineLineStyle}
                />
                {education.map((edu) => (
                  <motion.div
                    key={`${edu.institution}-${edu.period}`}
                    variants={staggerItem}
                    className="relative z-10 pl-10 pb-8 last:pb-0"
                  >
                    <TimelineLogoMarker
                      label={edu.institution}
                      logo={edu.logo}
                      logoFill={edu.logoFill}
                    />

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
