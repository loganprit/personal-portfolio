"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";
import { Send } from "lucide-react";
import { personal } from "@/data/personal";
import { SiteFooter } from "@/components/shared/SiteFooter";
import { staggerContainer } from "@/lib/animations";

const contactFadeItem: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { duration: 0.5, ease: "easeOut" } },
};

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

          <motion.form
            variants={contactFadeItem}
            action={`mailto:${personal.email}`}
            method="post"
            encType="text/plain"
            className="mt-10 space-y-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <label className="sr-only" htmlFor="contact-name">
                Name
              </label>
              <input
                id="contact-name"
                name="name"
                type="text"
                placeholder="Name"
                className="h-14 rounded-lg border border-border bg-card px-5 text-lg text-foreground shadow-sm outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10 dark:focus:border-accent-light"
              />
              <label className="sr-only" htmlFor="contact-email">
                Email
              </label>
              <input
                id="contact-email"
                name="email"
                type="email"
                placeholder="Email"
                className="h-14 rounded-lg border border-border bg-card px-5 text-lg text-foreground shadow-sm outline-none transition focus:border-accent focus:ring-4 focus:ring-accent/10 dark:focus:border-accent-light"
              />
            </div>

            <label className="sr-only" htmlFor="contact-message">
              Message
            </label>
            <textarea
              id="contact-message"
              name="message"
              rows={5}
              placeholder="Share a little about what you're working on, the role or project you have in mind, and the best way for me to follow up."
              className="min-h-40 w-full resize-y rounded-lg border border-border bg-card px-5 py-4 text-lg text-foreground shadow-sm outline-none transition placeholder:text-muted-foreground focus:border-accent focus:ring-4 focus:ring-accent/10 dark:focus:border-accent-light"
            />

            <button
              type="submit"
              className="flex h-14 w-full items-center justify-center gap-3 rounded-md bg-slate-950 px-6 text-lg font-semibold text-white shadow-sm transition hover:-translate-y-0.5 hover:bg-slate-800 focus:outline-none focus:ring-4 focus:ring-slate-400/30 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-200"
            >
              Send Message
              <Send className="h-5 w-5" />
            </button>
          </motion.form>

          <motion.div variants={contactFadeItem}>
            <SiteFooter className="mt-28 sm:mt-36" />
          </motion.div>
        </motion.section>
      </main>
    </div>
  );
}
