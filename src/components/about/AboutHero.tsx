"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform, Variants } from "framer-motion";

const WHO = "Who I am";
const PARAGRAPHS = [
  "Hi, I'm Haroon — a Web Developer with 2 years of experience in MERN Stack and Next.js.",
  "When a client needed smooth full-page scrolling with custom animations, no existing library did the job right. So I built a custom scrolling engine with the help of AI that was stable, smooth, and exactly what was needed.",
  "I also built a SaaS for VU students that compresses 1 hour of exam preparation into under 10 minutes — because good software should save time, not waste it.",
  "Currently on contract at Apptek1, and open to new opportunities.",
];
const CV_URL = "/Muhammad_Haroon_Resume_2026.pdf";

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)" },
  visible: (delay: number) => ({
    clipPath: "inset(0% 0% 0% 0%)",
    transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay },
  }),
} as Variants;

const fadeVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1], delay },
  }),
} as Variants;

export default function AboutHero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen flex overflow-hidden"
      style={{ backgroundColor: "var(--color-bg-dark)" }}
    >
      <motion.div
        className="w-full max-w-[84rem] flex flex-col justify-center mx-auto relative"
        style={{
          y,
          paddingTop: "clamp(5rem, 10vw, 9rem)",
          paddingLeft: "var(--section-px)",
          paddingRight: "var(--section-px)",
          paddingBottom: "clamp(4rem, 8vw, 7rem)",
        }}
      >
        {/* Big heading */}
        <div className="overflow-hidden mb-12">
          <motion.h1
            custom={0.1}
            variants={revealVariants}
            initial="hidden"
            animate="visible"
            className="font-black"
            style={{
              fontSize: "clamp(3.5rem, 10vw, 9rem)",
              color: "var(--color-text-inverse)",
              letterSpacing: "var(--tracking-tight)",
              lineHeight: 0.95,
            }}
          >
            {WHO}
          </motion.h1>
        </div>

        {/* Paragraphs */}
        <div className="flex flex-col gap-6 ml-auto">
          {PARAGRAPHS.map((para, i) => (
            <div key={i} className="overflow-hidden">
              <motion.p
                custom={0.2 + i * 0.1}
                variants={revealVariants}
                initial="hidden"
                animate="visible"
                className="text-base md:text-lg leading-relaxed"
                style={{ color: "var(--color-text-inverse-muted)" }}
              >
                {para}
              </motion.p>
            </div>
          ))}

          {/* Stats + CV */}
          <motion.div
            custom={0.6}
            variants={fadeVariants}
            initial="hidden"
            animate="visible"
            className="flex flex-wrap items-center gap-8 mt-4"
          >
            <a
              href={CV_URL}
              download
              className="px-6 py-3 text-sm font-medium transition-opacity duration-300 hover:opacity-70"
              style={{
                backgroundColor: "var(--color-cream)",
                color: "var(--color-black)",
                letterSpacing: "var(--tracking-wide)",
              }}
            >
              Download CV ↓
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
