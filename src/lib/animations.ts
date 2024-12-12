import { isFirefox } from "./utils";
import { type Variants } from "framer-motion";

/**
 * Shared animation variants for consistent page transitions and effects
 * Animations are disabled in Firefox due to performance issues
 */
export const animations = {
  // Base configuration that checks for Firefox
  getConfig: () => ({
    disabled: isFirefox(),
    duration: 0.5,
    ease: "easeOut"
  }),

  // Page section animations
  pageSection: {
    initial: { opacity: isFirefox() ? 1 : 0, y: isFirefox() ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },

  // Delayed content animations
  delayedContent: {
    initial: { opacity: isFirefox() ? 1 : 0 },
    animate: { opacity: 1 },
    transition: { delay: isFirefox() ? 0 : 0.2, duration: 0.5 }
  },

  // Card animations with stagger effect
  cardList: (index: number) => ({
    initial: { opacity: isFirefox() ? 1 : 0, y: isFirefox() ? 0 : 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5,
      delay: isFirefox() ? 0 : index * 0.1,
      ease: "easeOut"
    }
  }),

  // Updates section animations
  updates: {
    container: {
      initial: { opacity: isFirefox() ? 1 : 0, y: isFirefox() ? 0 : 10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: isFirefox() ? 0 : 0.3 }
    },
    item: (index: number) => ({
      initial: { opacity: isFirefox() ? 1 : 0 },
      animate: { opacity: 1 },
      transition: { delay: isFirefox() ? 0 : 0.4 + (index * 0.1) }
    })
  },

  // Badge animations
  badge: (index: number) => ({
    initial: isFirefox() ? {
      opacity: 1,
      x: 0,
      scale: 1
    } : { 
      opacity: 0,
      filter: "blur(8px)",
      x: -20,
      scale: 0.95
    },
    animate: { 
      opacity: 1,
      filter: "blur(0px)",
      x: 0,
      scale: 1,
      transition: { 
        duration: 0.4,
        delay: isFirefox() ? 0 : 0.3 + (index * 0.05),
        ease: [0.21, 1.02, 0.73, 0.97]
      }
    }
  })
} as const;