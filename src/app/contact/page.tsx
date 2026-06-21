"use client";

import { ArrowUpRight, Mail, MessageSquareText } from "lucide-react";
import { motion } from "framer-motion";
import { personal } from "@/data/personal";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { SocialLinks } from "@/components/shared/SocialLinks";
import { staggerContainer, staggerItem } from "@/lib/animations";

const contactSubject = encodeURIComponent("Portfolio inquiry");
const contactBody = encodeURIComponent("Hi Logan,\n\nI'm reaching out about ");
const contactHref = `mailto:${personal.email}?subject=${contactSubject}&body=${contactBody}`;

const responsePrompts = [
  "The role, project, or problem you have in mind",
  "Any timeline or collaboration details worth knowing",
  "The best way for me to follow up",
];

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen pt-32 pb-16 sm:pt-40">
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <motion.p
            variants={staggerItem}
            className="text-sm font-medium text-accent dark:text-accent-light"
          >
            Contact
          </motion.p>

          <motion.h1
            variants={staggerItem}
            className="mt-3 max-w-2xl text-4xl font-black leading-tight tracking-normal text-foreground sm:text-5xl"
          >
            Have a role, project, or useful tool idea?
          </motion.h1>

          <motion.p
            variants={staggerItem}
            className="mt-4 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8"
          >
            Email is the most reliable way to reach me. Send a short note with
            what you&apos;re working on and I&apos;ll follow up from there.
          </motion.p>

          <motion.div
            variants={staggerItem}
            className="mt-10 grid gap-6 md:grid-cols-[minmax(0,1fr)_17rem]"
          >
            <div className="rounded-2xl border border-border bg-card/80 p-6 shadow-xs backdrop-blur-sm sm:p-7">
              <div className="flex items-start gap-4">
                <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-accent/20 bg-accent/10 text-accent dark:border-accent-light/25 dark:text-accent-light">
                  <Mail className="h-5 w-5" aria-hidden="true" />
                </div>

                <div>
                  <h2 className="text-xl font-bold text-foreground">
                    Email Logan
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    This opens your email app with a starter subject and note.
                    If that does not work, use the address below directly.
                  </p>
                </div>
              </div>

              <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={contactHref}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-xl bg-accent px-5 py-3 text-sm font-semibold text-white shadow-xs transition hover:-translate-y-0.5 hover:bg-accent/90 focus:outline-hidden focus:ring-4 focus:ring-accent/20 dark:bg-accent-light dark:text-slate-950 dark:hover:bg-accent-light/90"
                >
                  Start an email
                  <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </a>

                <a
                  href={`mailto:${personal.email}`}
                  className="inline-flex min-h-12 items-center justify-center rounded-xl border border-border bg-muted/60 px-4 py-3 text-center text-sm font-medium text-foreground shadow-xs transition hover:bg-card focus:outline-hidden focus:ring-4 focus:ring-accent/10"
                >
                  <span className="break-all">{personal.email}</span>
                </a>
              </div>
            </div>

            <aside className="rounded-2xl border border-border bg-muted/40 p-5">
              <div className="flex items-center gap-2 text-sm font-semibold text-foreground">
                <MessageSquareText
                  className="h-4 w-4 text-accent dark:text-accent-light"
                  aria-hidden="true"
                />
                Helpful context
              </div>

              <ul className="mt-5 space-y-4">
                {responsePrompts.map((prompt) => (
                  <li key={prompt} className="flex gap-3 text-sm leading-6 text-muted-foreground">
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent dark:bg-accent-light"
                    />
                    <span>{prompt}</span>
                  </li>
                ))}
              </ul>
            </aside>
          </motion.div>

          <motion.div
            variants={staggerItem}
            className="mt-8 flex flex-col gap-4 border-t border-border pt-6 sm:flex-row sm:items-center sm:justify-between"
          >
            <p className="text-sm font-medium text-muted-foreground">
              You can also find me here.
            </p>
            <SocialLinks className="gap-8" iconSize="h-7 w-7" />
          </motion.div>

          <motion.div variants={staggerItem}>
            <SiteFooter className="mt-24 sm:mt-32" />
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
