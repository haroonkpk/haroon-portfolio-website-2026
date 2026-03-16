"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { PROJECTS } from "@/src/data";
import ProjectCard from "../ui";

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
} as Variants;

export default function Projects() {
  const headingRef    = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });

  return (
    <section
      id="projects"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* ── Section heading ── */}
      <div
        ref={headingRef}
        style={{
          padding: "clamp(3rem, 6vw, 5rem) var(--section-px) 0",
        }}
      >
        {/* Top divider */}
        <motion.div
          variants={lineVariants}
          initial="hidden"
          animate={headingInView ? "visible" : "hidden"}
          className="w-full h-px origin-left mb-8"
          style={{ backgroundColor: "var(--color-cream-dark)" }}
        />

        <div className="flex items-end justify-between gap-4 flex-wrap">
          {/* Left — label + heading */}
          <div className="flex flex-col gap-2">
            <div className="overflow-hidden">
              <motion.span
                variants={revealVariants}
                initial="hidden"
                animate={headingInView ? "visible" : "hidden"}
                className="inline-block text-xs font-medium uppercase"
                style={{
                  color: "var(--color-text-muted)",
                  letterSpacing: "var(--tracking-wider)",
                }}
              >
                Selected Work
              </motion.span>
            </div>

            <div className="overflow-hidden">
              <motion.h2
                variants={revealVariants}
                initial="hidden"
                animate={headingInView ? "visible" : "hidden"}
                className="font-black"
                style={{
                  fontSize: "clamp(2rem, 5vw, 3.5rem)",
                  color: "var(--color-text-primary)",
                  letterSpacing: "var(--tracking-tight)",
                  lineHeight: 1.1,
                }}
              >
                Projects
              </motion.h2>
            </div>
          </div>

          {/* Right — project count */}
          <motion.span
            initial={{ opacity: 0 }}
            animate={headingInView ? { opacity: 1 } : { opacity: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-black"
            style={{
              fontSize: "clamp(3rem, 8vw, 6rem)",
              color: "var(--color-cream-dark)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1,
            }}
          >
            {String(PROJECTS.length).padStart(2, "0")}
          </motion.span>
        </div>
      </div>

      {/* ── Project cards — full width, stacked ── */}
      <div className="w-full">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}
      </div>
    </section>
  );
}