"use client";

import { motion, useInView, Variants } from "framer-motion";
import { EXPERIENCES } from "@/src/data";
import { useRef } from "react";
import Image from "next/image";

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1], delay },
  }),
} as Variants;

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

function ExperiencePanel({
  exp,
}: {
  exp: (typeof EXPERIENCES)[0] & { logo?: string };
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: false, margin: "-80px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={inView ? { opacity: 1 } : { opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full flex flex-col"
    >
      {/* TOP PANEL */}
      <div
        className="w-full flex items-center justify-between px-6 py-4"
        style={{
          backgroundColor: "var(--color-black)",
        }}
      >
        {/* Type label */}
        <div className="overflow-hidden">
          <motion.span
            custom={0.1}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-block font-medium uppercase"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
              color: "var(--color-gray-mid)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            {exp.type}
          </motion.span>
        </div>

        <motion.span
          custom={0.1}
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            color: "var(--color-gray-mid)",
            letterSpacing: "var(--tracking-wide)",
          }}
        >
          {exp.period}
        </motion.span>
      </div>

      {/* COMPANY NAME & LOGO  */}
      <div
        className="w-full px-6 py-6 flex items-center gap-4"
        style={{
          backgroundColor: "var(--color-black)",
        }}
      >
        {/* Company Logo */}
        {exp.logo && (
          <motion.div
            custom={0.1}
            variants={fadeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="relative w-12 h-12 overflow-hidden rounded-md bg-white flex-shrink-0"
          >
            <Image
              src={exp.logo}
              alt={`${exp.company} logo`}
              width={48}
              height={48}
              className="object-contain w-full h-full p-1"
            />
          </motion.div>
        )}

        <div className="overflow-hidden">
          <motion.h3
            custom={0.15}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="font-black"
            style={{
              fontSize: "clamp(1.5rem, 4vw, 3rem)",
              color: "var(--color-text-inverse)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1,
            }}
          >
            {exp.company}
          </motion.h3>
        </div>
      </div>

      {/* MIDDLE ROW  */}
      <div className="grid grid-cols-2 h-full">
        {/* Learned */}
        <div
          className="flex flex-col gap-3 p-5"
          style={{
            backgroundColor: "var(--color-cream-dark)",
          }}
        >
          <span
            className="font-medium uppercase"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
              color: "var(--color-text-muted)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            Learned
          </span>
          {exp.learned.map((item, i) => (
            <motion.p
              key={i}
              custom={0.2 + i * 0.05}
              variants={fadeVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
                color: "var(--color-text-primary)",
              }}
            >
              {item}
            </motion.p>
          ))}
        </div>

        {/* Built */}
        <div className="flex flex-col gap-3 p-5">
          <span
            className="font-medium uppercase"
            style={{
              fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
              color: "var(--color-text-muted)",
              letterSpacing: "var(--tracking-wider)",
            }}
          >
            Built
          </span>
          {exp.built.map((item, i) => (
            <motion.p
              key={i}
              custom={0.25 + i * 0.05}
              variants={fadeVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              style={{
                fontSize: "clamp(0.8rem, 2vw, 1rem)",
                color: "var(--color-text-primary)",
              }}
            >
              {item}
            </motion.p>
          ))}
        </div>
      </div>

      {/* BOTTOM  */}
      <div
        className="flex items-center justify-between px-6 py-4 mt-auto"
        style={{ backgroundColor: "var(--color-gray-warm)" }}
      >
        <span
          className="uppercase"
          style={{
            fontSize: "clamp(0.7rem, 1.5vw, 0.85rem)",
            color: "var(--color-text-light)",
            letterSpacing: "var(--tracking-wider)",
          }}
        >
          Projects
        </span>
        <div className="overflow-hidden">
          <motion.span
            custom={0.3}
            variants={revealVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            className="inline-block font-black"
            style={{
              fontSize: "clamp(2rem, 5vw, 3.5rem)",
              color: "var(--color-text-primary)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 1,
            }}
          >
            {exp.stat}
          </motion.span>
        </div>
      </div>
    </motion.div>
  );
}

export default ExperiencePanel;
