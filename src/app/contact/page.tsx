"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Mail } from "lucide-react";
import { personal } from "@/data/personal";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { staggerContainer } from "@/lib/animations";

const contactFadeItem: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

const contactSubject = encodeURIComponent("Portfolio inquiry");
const contactBody = encodeURIComponent("Hi Logan,\n\nI'm reaching out about ");
const contactHref = `mailto:${personal.email}?subject=${contactSubject}&body=${contactBody}`;

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <main className="min-h-screen pt-36 pb-16 sm:pt-44">
        <motion.section
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl mx-auto px-4 sm:px-6"
        >
          <motion.h1
            variants={contactFadeItem}
            className="text-4xl font-black leading-tight tracking-normal text-foreground sm:text-5xl"
          >
            Contact Me
          </motion.h1>

          <motion.div
            variants={contactFadeItem}
            className="mt-10 rounded-2xl border border-border bg-card/80 p-6 shadow-xs backdrop-blur-sm sm:p-8"
          >
            <p className="text-lg leading-8 text-muted-foreground sm:text-xl">
              The best way to reach me is by email. Send a note about the role,
              project, or collaboration you have in mind and I&apos;ll follow up from
              there.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center">
              <a
                href={contactHref}
                className="inline-flex h-14 items-center justify-center gap-3 rounded-md bg-slate-950 px-6 text-lg font-semibold text-white shadow-xs transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-hidden focus:ring-4 focus:ring-slate-400/30 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
              >
                Email Logan
                <Mail className="h-5 w-5" aria-hidden="true" />
              </a>

              <p className="text-sm leading-6 text-muted-foreground sm:text-base">
                If your email app does not open, copy or use{" "}
                <a
                  href={`mailto:${personal.email}`}
                  className="break-all font-semibold text-foreground underline decoration-border underline-offset-4 transition hover:text-accent focus:outline-hidden focus:ring-4 focus:ring-accent/10 dark:hover:text-accent-light"
                >
                  {personal.email}
                </a>
                .
              </p>
            </div>
          </motion.div>

          <motion.div variants={contactFadeItem}>
            <SiteFooter className="mt-28 sm:mt-36" />
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
