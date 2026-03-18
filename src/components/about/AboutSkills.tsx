"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import { SKILLS } from "@/src/data";


// ── animation variants ──────────────────────────────────────

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay },
  }),
} as Variants;

const fadeUp = {
  hidden: { opacity: 0, y: 16 },
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
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

// ── single column ────────────────────────────────────────────

function SkillColumn({
  category,
  image,
  items,
  index,
}: {
  category: string;
  image: string;
  items: string[];
  index: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const base   = index * 0.1;

  return (
    <div ref={ref} className="flex flex-col">

      {/* Category heading */}
      <div className="overflow-hidden mb-6">
        <motion.h3
          custom={base}
          variants={revealVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="font-bold"
          style={{
            fontSize: "clamp(1.4rem, 2.5vw, 2rem)",
            color: "var(--color-text-primary)",
            letterSpacing: "var(--tracking-tight)",
            lineHeight: 1,
          }}
        >
          {category}
        </motion.h3>
      </div>

      {/* Illustration — shows image if provided, otherwise placeholder box */}
      <motion.div
        custom={base + 0.05}
        variants={fadeUp}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full mb-8"
        style={{ aspectRatio: "4/3" }}
      >
        {image ? (
          <img
            src={image}
            alt={`${category} illustration`}
            className="w-full h-full object-contain"
          />
        ) : (
          // ── placeholder box ──────────────────────────────
          <div
            className="w-full h-full flex items-center justify-center"
            style={{
              border: "1.5px solid var(--color-cream-dark)",
              borderRadius: "4px",
              color: "var(--color-text-muted)",
              fontSize: "0.75rem",
              letterSpacing: "var(--tracking-wider)",
              textTransform: "uppercase",
            }}
          >
            {category} image
          </div>
        )}
      </motion.div>

      {/* Divider */}
      <motion.div
        custom={base + 0.1}
        variants={lineVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full h-px origin-left mb-6"
        style={{ backgroundColor: "var(--color-cream-dark)" }}
      />

      {/* Skill list */}
      <ul className="flex flex-col gap-3">
        {items.map((skill, i) => (
          <motion.li
            key={skill}
            custom={base + 0.15 + i * 0.05}
            variants={fadeUp}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="flex items-center gap-3 text-base"
            style={{
              color: "var(--color-text-primary)",
              letterSpacing: "var(--tracking-wide)",
            }}
          >
            {/* dash */}
            <span
              className="flex-shrink-0 w-4 h-px"
              style={{ backgroundColor: "var(--color-text-muted)" }}
            />
            {skill}
          </motion.li>
        ))}
      </ul>
    </div>
  );
}

// ── main section ─────────────────────────────────────────────

export default function AboutSkills() {
  const headingRef    = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      className="w-full max-w-[94rem]"
      style={{ padding: "var(--section-py) var(--section-px)" }}
    >
      {/* Section heading */}
      <div ref={headingRef} className="mb-16">
        <div className="overflow-hidden">
          <motion.h2
            custom={0}
            variants={revealVariants}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            className="font-black"
            style={{
              fontSize: "clamp(2rem, 5vw, 4rem)",
              color: "var(--color-text-primary)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1,
            }}
          >
            Skills
          </motion.h2>
        </div>
      </div>

      {/* 3-column grid — stacks to 1 col on mobile */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-16">
        {SKILLS.map((group, i) => (
          <SkillColumn
            key={group.category}
            category={group.category}
            image={group.image}
            items={group.items}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}