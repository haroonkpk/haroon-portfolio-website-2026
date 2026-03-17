"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import ProjectLinks from "@/src/components/ui/ProjectLinks";
import { useRouter } from "next/navigation";

interface Props {
  client: string;
  deliverables: string[];
  heading: string;
  body: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay },
  }),
} as Variants;

const fadeVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

export default function Detail({
  client,
  deliverables,
  heading,
  body,
  liveUrl,
  githubUrl,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const router = useRouter();

  return (
    <section
      ref={ref}
      className="w-full"
      style={{
        backgroundColor: "var(--color-gray-warm)",
        padding: "clamp(3rem, 6vw, 5rem) var(--section-px)",
      }}
    >
      {/* ── Top row: Back | Client | Deliverables ── */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 mb-16">
        {/* Back to work */}
        <motion.div
          custom={0}
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <button
            onClick={() => router.back()}
            className="inline-flex items-center gap-2 text-sm transition-opacity duration-200 hover:opacity-50"
            style={{
              color: "var(--color-text-primary)",
              textDecoration: "underline",
              textUnderlineOffset: "4px",
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
            }}
          >
            ← Back to work
          </button>
        </motion.div>

        {/* Client */}
        <motion.div
          custom={0.1}
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-1"
        >
          <span
            className="text-sm"
            style={{ color: "var(--color-text-primary)", opacity: 0.6 }}
          >
            Client:
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--color-text-primary)" }}
          >
            {client}
          </span>
        </motion.div>

        {/* Deliverables */}
        <motion.div
          custom={0.2}
          variants={fadeVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="flex flex-col gap-1"
        >
          <span
            className="text-sm"
            style={{ color: "var(--color-text-primary)", opacity: 0.6 }}
          >
            Deliverables:
          </span>
          <span
            className="text-sm font-medium"
            style={{ color: "var(--color-text-primary)" }}
          >
            {deliverables.join(", ")}
          </span>
        </motion.div>
      </div>

      {/* ── Bottom row: Heading left | Body right ── */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
        {/* Heading + Links */}
        <div className="flex flex-col gap-5">
          <div className="overflow-hidden">
            <motion.h2
              custom={0.2}
              variants={revealVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="font-black"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                color: "var(--color-text-primary)",
                lineHeight: 1.15,
                letterSpacing: "var(--tracking-tight)",
              }}
            >
              {heading}
            </motion.h2>
          </div>

          {/* Live + GitHub buttons */}
          <motion.div
            custom={0.35}
            variants={fadeVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <ProjectLinks liveUrl={liveUrl} githubUrl={githubUrl} />
          </motion.div>
        </div>

        {/* Body paragraphs */}
        <div className="flex flex-col gap-5">
          {body.map((para, i) => (
            <motion.p
              key={i}
              custom={0.3 + i * 0.1}
              variants={fadeVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="text-sm md:text-base leading-relaxed"
              style={{ color: "var(--color-text-primary)", opacity: 0.85 }}
            >
              {para}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
