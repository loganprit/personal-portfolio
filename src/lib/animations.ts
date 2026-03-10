import type { Variants } from "framer-motion";

export const fadeIn: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const fadeInDelayed: Variants = {
  initial: { opacity: 0 },
  animate: { opacity: 1, transition: { delay: 0.2, duration: 0.5 } },
};

export const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const scaleIn: Variants = {
  initial: { opacity: 0, scale: 0.95 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: "easeOut" } },
};

export const slideFromLeft: Variants = {
  initial: { opacity: 0, x: -30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const slideFromRight: Variants = {
  initial: { opacity: 0, x: 30 },
  animate: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const badgeVariant = (index: number): Variants => ({
  initial: { opacity: 0, filter: "blur(8px)", x: -20, scale: 0.95 },
  animate: {
    opacity: 1,
    filter: "blur(0px)",
    x: 0,
    scale: 1,
    transition: {
      duration: 0.4,
      delay: 0.3 + index * 0.05,
      ease: [0.21, 1.02, 0.73, 0.97],
    },
  },
});

export const tabContent: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};

export const flipCardEntrance: Variants = {
  initial: { opacity: 0, rotateY: -90, scale: 0.8 },
  animate: {
    opacity: 1,
    rotateY: 0,
    scale: 1,
    transition: { duration: 0.8, ease: [0.21, 1.02, 0.73, 0.97] },
  },
};

export const sidebarEntrance: Variants = {
  initial: { opacity: 0, x: -40 },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};
