"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Image from "next/image";
import { EXPERIENCES } from "@/src/data";
import { ExperiencePanel } from "../ui";

const GITHUB_GRAPH = "/images/github.png";

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay },
  }),
} as Variants;

export default function Experience() {
  const headingRef = useRef<HTMLDivElement>(null);
  const headingInView = useInView(headingRef, { once: false, margin: "-80px" });
  const graphRef = useRef<HTMLDivElement>(null);
  const graphInView = useInView(graphRef, { once: true, margin: "-60px" });

  return (
    <section
      className="w-full max-w-[94rem] mx-auto"
      style={{
        backgroundColor: "var(--color-cream)",
        padding: "clamp(2rem, 5vw, 5rem) clamp(1rem, 4vw, 3rem)",
      }}
    >
      {/* Heading */}
      <div ref={headingRef} className="mb-8 md:mb-12">
        <div className="overflow-hidden">
          <motion.h2
            custom={0}
            variants={revealVariants}
            initial="hidden"
            animate={headingInView ? "visible" : "hidden"}
            className="font-black"
            style={{
              fontSize: "clamp(2.5rem, 6vw, 4.5rem)",
              color: "var(--color-text-primary)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1,
            }}
          >
            Experience
          </motion.h2>
        </div>
      </div>

      {/* Panels grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-16">
        {EXPERIENCES.map((exp, i) => (
          <ExperiencePanel key={i} exp={exp} />
        ))}
      </div>

      {/* GitHub Graph */}
      <div ref={graphRef} className="w-full flex flex-col gap-4">
        <div className="overflow-hidden">
          <motion.p
            custom={0}
            variants={revealVariants}
            initial="hidden"
            animate={graphInView ? "visible" : "hidden"}
            className="font-medium uppercase"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
              color: "var(--color-text-muted)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            GitHub Contributions
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={graphInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="w-full overflow-hidden"
        >
          <Image
            src={GITHUB_GRAPH}
            alt="GitHub contribution graph"
            width={1200}
            height={200}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
