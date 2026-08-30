import type { Variants } from "framer-motion";

export const staggerContainer: Variants = {
  initial: {},
  animate: { transition: { staggerChildren: 0.1 } },
};

export const staggerItem: Variants = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

export const timelineLine: Variants = {
  initial: { opacity: 0, scaleY: 0.96 },
  animate: {
    opacity: 1,
    scaleY: 1,
    transition: { delay: 0.18, duration: 0.28, ease: "easeOut" },
  },
};

export const tabContent: Variants = {
  initial: { opacity: 0, y: 10 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  exit: { opacity: 0, y: -10, transition: { duration: 0.2 } },
};
