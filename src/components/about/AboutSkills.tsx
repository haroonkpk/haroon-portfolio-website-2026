"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const SKILLS = [
  {
    category: "Frontend",
    items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion", "HTML/CSS"],
  },
  {
    category: "Backend",
    items: ["Node.js", "Express", "REST APIs", "GraphQL", "PostgreSQL", "MongoDB"],
  },
  {
    category: "Tools & DevOps",
    items: ["Git", "Docker", "Vercel", "AWS", "Figma", "Postman"],
  },
  {
    category: "Currently Learning",
    items: ["React Native", "Web3", "AI Integration"],
  },
];

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.7, ease: [0.76, 0, 0.24, 1], delay },
  }),
} as Variants;

const lineVariants = {
  hidden: { scaleX: 0 },
  visible: (delay: number) => ({
    scaleX: 1,
    transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

const tagVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: (delay: number) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.4, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

function SkillCategory({
  category,
  items,
  index,
}: {
  category: string;
  items: string[];
  index: number;
}) {
  const ref    = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <div ref={ref} className="w-full">
      {/* Divider */}
      <motion.div
        custom={index * 0.05}
        variants={lineVariants}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="w-full h-px origin-left mb-6"
        style={{ backgroundColor: "var(--color-cream-dark)" }}
      />

      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-4 md:gap-10 pb-8">

        {/* Category name */}
        <div className="overflow-hidden">
          <motion.h3
            custom={0.05 + index * 0.05}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="text-sm font-medium uppercase"
            style={{
              color: "var(--color-text-muted)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            {category}
          </motion.h3>
        </div>

        {/* Skill tags */}
        <div className="flex flex-wrap gap-2">
          {items.map((skill, i) => (
            <motion.span
              key={skill}
              custom={0.1 + index * 0.05 + i * 0.04}
              variants={tagVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="px-4 py-2 text-sm font-medium"
              style={{
                border: "1px solid var(--color-cream-dark)",
                color: "var(--color-text-primary)",
                letterSpacing: "var(--tracking-wide)",
              }}
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function AboutSkills() {
  const headingRef    = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: true, margin: "-60px" });

  return (
    <section
      className="w-full"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "var(--section-py) var(--section-px)",
      }}
    >
      {/* Section heading */}
      <div ref={headingRef} className="mb-12">
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

      {/* Skill categories */}
      <div className="flex flex-col w-full">
        {SKILLS.map((group, i) => (
          <SkillCategory
            key={group.category}
            category={group.category}
            items={group.items}
            index={i}
          />
        ))}
      </div>
    </section>
  );
}