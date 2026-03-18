"use client";

import { useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { useTransitionNavigate } from "@/src/lib/useTransitionNavigate";

const NAV_LINKS = [
  { label: "Home", sub: "start here", href: "/" },
  { label: "Work", sub: "selected projects", href: "/work" },
  { label: "About", sub: "who I am", href: "/about" },
];

// Full screen overlay
const overlayVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.4, ease: [0.76, 0, 0.24, 1] },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.35, ease: [0.76, 0, 0.24, 1], delay: 0.2 },
  },
} as Variants;

// Each nav item reveal
const itemVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  visible: (i: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: {
      duration: 0.6,
      ease: [0.76, 0, 0.24, 1],
      delay: 0.15 + i * 0.08,
    },
  }),
  exit: (i: number) => ({
    clipPath: "inset(100% 0% 0% 0%)",
    opacity: 0,
    transition: {
      duration: 0.4,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.04,
    },
  }),
} as Variants;

// Divider lines
const dividerVariants = {
  hidden: { scaleX: 0 },
  visible: (i: number) => ({
    scaleX: 1,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
      delay: 0.2 + i * 0.08,
    },
  }),
  exit: { scaleX: 0, transition: { duration: 0.3 } },
} as Variants;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);
  const go = useTransitionNavigate();

  return (
    <>
      {/* Trigger icon — fixed top center */}
      <div className="fixed top-0 left-1/2 -translate-x-1/2 z-50">
        <motion.button
          onClick={() => setOpen((prev) => !prev)}
          className="group flex flex-col items-center justify-center w-12 h-12 md:w-24 md:h-24 gap-[5px]"
          aria-label="Toggle menu"
          whileTap={{ scale: 0.92 }}
        >
          <AnimatePresence mode="wait">
            {open ? (
              /* Close icon */
              <motion.div
                key="close"
                initial={{ opacity: 0, rotate: -45 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: 45 }}
                transition={{ duration: 0.25 }}
                className="flex flex-col items-center justify-center w-10 h-10 md:w-20 md:h-20"
                style={{ backgroundColor: "var(--color-cream)" }}
              >
                <span
                  className="block w-5 md:w-10 h-px"
                  style={{
                    backgroundColor: "var(--color-black)",
                    transform: "rotate(45deg) translateY(0.5px)",
                  }}
                />
                <span
                  className="block w-5 h-px md:w-10"
                  style={{
                    backgroundColor: "var(--color-black)",
                    transform: "rotate(-45deg) translateY(-0.5px)",
                  }}
                />
              </motion.div>
            ) : (
              /* Hamburger icon */
              <motion.div
                key="open"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="flex flex-col items-center justify-center w-12 h-12 md:w-20 md:h-20 gap-[5px]"
                style={{ backgroundColor: "var(--color-black-soft)" }}
              >
                <span
                  className="block w-5 h-px md:w-10"
                  style={{ backgroundColor: "var(--color-cream)" }}
                />
                <span
                  className="block w-8 h-px"
                  style={{ backgroundColor: "var(--color-cream)" }}
                />
              </motion.div>
            )}
          </AnimatePresence>
        </motion.button>
      </div>

      {/* Full screen overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="overlay"
            variants={overlayVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="fixed inset-0 z-40 flex flex-col items-center justify-center"
            style={{ backgroundColor: "var(--color-cream)" }}
          >
            {/* Nav links */}
            <nav className="flex flex-col items-center w-full max-w-sm px-6">
              {NAV_LINKS.map((link, i) => (
                <div key={link.href} className="w-full">
                  {/* Divider top */}
                  <motion.div
                    custom={i}
                    variants={dividerVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="w-full h-px origin-left"
                    style={{ backgroundColor: "var(--color-cream-dark)" }}
                  />

                  {/* Link item */}
                  <motion.div
                    custom={i}
                    variants={itemVariants}
                    initial="hidden"
                    animate="visible"
                    exit="exit"
                    className="overflow-hidden flex justify-center"
                  >
                    <button
                      onClick={() => {
                        go(link.href);
                        close();
                      }}
                      className="flex flex-col items-center py-4 group"
                    >
                      <span
                        className="font-black transition-opacity duration-200 group-hover:opacity-50"
                        style={{
                          fontSize: "clamp(2rem, 8vw, 3.5rem)",
                          color: "var(--color-text-primary)",
                          lineHeight: 1.1,
                        }}
                      >
                        {link.label}
                      </span>
                      <span
                        className="text-sm transition-opacity duration-200 group-hover:opacity-40"
                        style={{ color: "var(--color-text-muted)" }}
                      >
                        {link.sub}
                      </span>
                    </button>
                  </motion.div>
                </div>
              ))}

              {/* Last divider */}
              <motion.div
                custom={NAV_LINKS.length}
                variants={dividerVariants}
                initial="hidden"
                animate="visible"
                exit="exit"
                className="w-full h-px origin-left"
                style={{ backgroundColor: "var(--color-cream-dark)" }}
              />
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
