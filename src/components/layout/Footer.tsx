"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const EMAIL_WORK  = "work@muhammadharoon.dev";
const EMAIL_HELLO = "hello@muhammadharoon.dev";
const FULL_NAME   = "Haroon";

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay },
  }),
} as Variants;

const fadeVariants = {
  hidden: { opacity: 0, y: 12 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: (delay: number) => ({
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

export default function Footer() {
  const ref    = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="w-full overflow-hidden flex flex-col items-center justify-center pb-4!"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* ── Top columns ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[94rem] gap-12  "
        style={{ padding: "var(--section-py) var(--section-px)" }}
      >
        {/* Left — Work with me */}
        <div className="flex flex-col gap-4 border-t ">
          {/* Divider */}
          <motion.div
            custom={0}
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full h-px origin-left mb-6"
            style={{ backgroundColor: "var(--color-cream-dark)" }}
          />

          <div className="overflow-hidden">
            <motion.h3
              custom={0.1}
              variants={revealVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-black p-2"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--color-text-primary)",
                backgroundColor: "var(--color-gray-warm)"
              }}
            >
              Work with me
            </motion.h3>
          </div>

          <motion.div
            custom={0.2}
            variants={fadeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-1"
          >
            <p
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              Want to collaborate?
            </p>
            <a
              href={`mailto:${EMAIL_WORK}`}
              className="font-medium transition-opacity duration-200 hover:opacity-50 break-all"
              style={{
                color: "var(--color-text-primary)",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              }}
            >
              {EMAIL_WORK}
            </a>
          </motion.div>
        </div>

        {/* Right — Say hello */}
        <div className="flex flex-col gap-4 border-t">
          {/* Divider */}
          <motion.div
            custom={0.1}
            variants={lineVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="w-full h-px origin-left mb-6"
            style={{ backgroundColor: "var(--color-cream-dark)" }}
          />

          <div className="overflow-hidden">
            <motion.h3
              custom={0.2}
              variants={revealVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-black"
              style={{
                fontSize: "clamp(1.5rem, 3vw, 2rem)",
                color: "var(--color-text-primary)",
              }}
            >
              Say hello
            </motion.h3>
          </div>

          <motion.div
            custom={0.3}
            variants={fadeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex flex-col gap-1"
          >
            <p
              className="text-sm"
              style={{ color: "var(--color-text-muted)" }}
            >
              General enquiries
            </p>
            <a
              href={`mailto:${EMAIL_HELLO}`}
              className="font-medium transition-opacity duration-200 hover:opacity-50 break-all"
              style={{
                color: "var(--color-text-primary)",
                fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
              }}
            >
              {EMAIL_HELLO}
            </a>
          </motion.div>
        </div>
      </div>

      {/* ── Oversized name — bottom ── */}
      <div className="w-full flex justify-center overflow-hidden">
        <div className="overflow-hidden">
          <motion.p
            custom={0.35}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-black leading-none w-full text-center "
            style={{
              fontFamily: '"Archivo Black", sans-serif',
              fontSize: "clamp(4rem, 16vw, 18rem)",
              color: "var(--color-text-primary)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 0.85,
            }}
          >
            {FULL_NAME.toUpperCase()}
          </motion.p>
        </div>
      </div>
    </footer>
  );
}