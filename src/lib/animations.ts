import { type Variants } from "framer-motion";

/**
 * Shared animation variants for consistent page transitions and effects
 */
export const animations = {
  // Page section animations
  pageSection: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5, ease: "easeOut" }
  },

  // Delayed content animations
  delayedContent: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    transition: { delay: 0.2, duration: 0.5 }
  },

  // Card animations with stagger effect
  cardList: (index: number) => ({
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { 
      duration: 0.5,
      delay: index * 0.1,
      ease: "easeOut"
    }
  }),

  // Updates section animations
  updates: {
    container: {
      initial: { opacity: 0, y: 10 },
      animate: { opacity: 1, y: 0 },
      transition: { delay: 0.3 }
    },
    item: (index: number) => ({
      initial: { opacity: 0 },
      animate: { opacity: 1 },
      transition: { delay: 0.4 + (index * 0.1) }
    })
  },

  // Badge animations
  badge: (index: number): Variants => ({
    initial: { 
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
        delay: 0.3 + (index * 0.05),
        ease: [0.21, 1.02, 0.73, 0.97]
      }
    }
  })
} as const;