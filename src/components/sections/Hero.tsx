"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";

const FIRST_NAME = "Muhammad";
const LAST_NAME = "Haroon";
const TITLE = "Full Stack Developer";
const BIO = "Building digital experiences";
const CTA_PRIMARY = { label: "View Work", href: "#projects" };
const CTA_SECONDARY = { label: "Get in Touch", href: "#contact" };

// Curtain reveal — height 0 to full height
const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: {
      duration: 0.8,
      ease: [0.76, 0, 0.24, 1],
      delay,
    },
  }),
} as Variants;

const fadeUpVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;
 
export default function Hero() {
  return (
    <section
      className="relative w-full min-h-screen flex flex-col items-center justify-center px-6 py-24 overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      {/* Inner container — centered */}
      <div className="flex flex-col items-center text-center gap-6 w-full max-w-5xl">
        {/* Title — small label upar */}
        <div className="overflow-hidden">
          <motion.p
            custom={0.1}
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="text-xs md:text-sm font-medium"
            style={{
              color: "var(--color-text-inverse-muted)",
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
            }}
          >
            {TITLE}
          </motion.p>
        </div>

        {/* Name — oversized */}
        <div className="flex flex-col items-center leading-none gap-1 w-full">
          {/* First name */}
          <div className=" w-full">
            <motion.h1
              custom={0.25}
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              className="font-black font-archivo w-full"
              style={{
                 fontFamily: '"Archivo Black", sans-serif',
                fontSize: "clamp(3rem, 14vw, 10rem)",
                color: "var(--color-text-inverse)",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: 0.9,
              }}
            >
              {FIRST_NAME}
            </motion.h1>
          </div>

          {/* Last name */}
          <div className="overflow-hidden w-full">
            <motion.h1
              custom={0.38}
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              className="font-black w-full"
              style={{
                 fontFamily: '"Archivo Black", sans-serif',
                fontSize: "clamp(3.5rem, 14vw, 12rem)",
                color: "var(--color-text-inverse)",
                letterSpacing: "var(--tracking-tight)",
                lineHeight: 0.9,
              }}
            >
              {LAST_NAME}
            </motion.h1>
          </div>
        </div>

        {/* Bio */}
        <div className="overflow-hidden">
          <motion.p
            custom={0.55}
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="text-base md:text-lg max-w-md"
            style={{
              color: "var(--color-text-inverse-muted)",
              lineHeight: 1.7,
            }}
          >
            {BIO}
          </motion.p>
        </div>

        {/* CTA Buttons */}
        <motion.div
          custom={0.7}
          variants={fadeUpVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center gap-4 mt-2"
        >
          {/* Primary — filled cream */}
          <Link
            href={CTA_PRIMARY.href}
            className="w-full sm:w-auto text-center px-8 py-3 text-sm font-medium transition-opacity duration-300 hover:opacity-80"
            style={{
              backgroundColor: "var(--color-cream)",
              color: "var(--color-black)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            {CTA_PRIMARY.label}
          </Link>

          {/* Secondary — outline */}
          <Link
            href={CTA_SECONDARY.href}
            className="w-full sm:w-auto text-center px-8 py-3 text-sm font-medium border transition-opacity duration-300 hover:opacity-60"
            style={{
              borderColor: "var(--color-gray-warm)",
              color: "var(--color-text-inverse)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            {CTA_SECONDARY.label}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
