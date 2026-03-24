"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { PROJECTS } from "@/src/data";
import ProjectCard from "../ui";
import { useTransitionNavigate } from "@/src/lib/useTransitionNavigate";

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

export default function Projects() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-80px" });
  const go = useTransitionNavigate();

  return (
    <section className="w-full max-w-[94rem]" id="projects" style={{ backgroundColor: "var(--color-cream)" }}>
      {/* ── Section heading ── */}
      <div
        ref={headingRef}
        style={{
          padding: "clamp(3rem, 6vw, 5rem) var(--section-px) 0",
        }}
      >
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
                projects
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
                Featured work
              </motion.h2>
            </div>
          </div>
        </div>
      </div>

      {/* ── Project cards── */}
      <div className="w-full">
        {PROJECTS.map((project, i) => (
          <ProjectCard key={project.slug} project={project} index={i} />
        ))}

        <div className="flex justify-center mt-8">
          <button
            onClick={() => go("/work")}
            className="underline text-sm font-medium cursor-pointer"
            style={{ color: "var(--color-text-primary)" }}
          >
            View all projects
          </button>
        </div>
      </div>
    </section>
  );
}
