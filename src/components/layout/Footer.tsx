"use client";

import { useRef } from "react";
import { motion, useInView, Variants } from "framer-motion";

const EMAIL_WORK = "haroonkhanlala47@gmail.com";
const WHATSAPP_NUM = "+92 334 0520574";
const WHATSAPP_LINK = "https://wa.me/923340520574";
const GITHUB_LINK = "https://github.com/haroonkpk";
const LINKEDIN_LINK = "https://linkedin.com/in/muhammad-haroon-237084377";
const FULL_NAME = "Haroon";

// ── Letter animation variants ────────────────────────────────
const letterVariants: Variants = {
  hidden: {
    y: "110%",
    opacity: 0,
  },
  visible: (i: number) => ({
    y: "0%",
    opacity: 1,
    transition: {
      duration: 0.7,
      ease: [0.76, 0, 0.24, 1],
      delay: i * 0.08,
    },
  }),
};

// ── Copy button ──────────────────────────────────────────────
import { useState } from "react";

function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 transition-all duration-200"
      style={{
        border: "1px solid var(--color-cream-dark)",
        borderRadius: "4px",
        color: copied ? "var(--color-text-primary)" : "var(--color-text-secondary)",
        backgroundColor: copied ? "var(--color-cream-dark)" : "transparent",
        cursor: "pointer",
        letterSpacing: "0.05em",
      }}
    >
      {copied ? (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path
              d="M2 6l3 3 5-5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Copied
        </>
      ) : (
        <>
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <rect
              x="4"
              y="4"
              width="7"
              height="7"
              rx="1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
            <path
              d="M3 8H2a1 1 0 01-1-1V2a1 1 0 011-1h5a1 1 0 011 1v1"
              stroke="currentColor"
              strokeWidth="1.2"
            />
          </svg>
          Copy
        </>
      )}
    </button>
  );
}

// ── Animated Name ────────────────────────────────────────────
function AnimatedName({ name, inView }: { name: string; inView: boolean }) {
  const letters = name.toUpperCase().split("");

  return (
    <div className="w-full flex justify-center overflow-hidden">
      <div className="flex overflow-hidden">
        {letters.map((letter, i) => (
          <div key={i} className="overflow-hidden">
            <motion.span
              custom={i}
              variants={letterVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              className="inline-block font-black leading-none"
              style={{
                fontFamily: '"Archivo Black", sans-serif',
                fontSize: "clamp(4rem, 16vw, 18rem)",
                color: "var(--color-text-primary)",
                letterSpacing: "-0.02em",
                lineHeight: 0.85,
              }}
            >
              {letter}
            </motion.span>
          </div>
        ))}
      </div>
    </div>
  );
}

// ── Main Footer ──────────────────────────────────────────────
export default function Footer() {
  const ref = useRef<HTMLElement>(null);
  const inView = useInView(ref, { once: false, margin: "-100px" });

  return (
    <footer
      ref={ref}
      className="w-full overflow-hidden flex flex-col items-center justify-center pb-4!"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      {/* ── Top columns ── */}
      <div
        className="grid grid-cols-1 md:grid-cols-2 w-full max-w-[94rem] gap-12"
        style={{ padding: "var(--section-py) var(--section-px)" }}
      >
        {/* Left — Work with me */}
        <div className="flex flex-col gap-4">
          <div
            className="w-full h-px mb-6"
            style={{ backgroundColor: "var(--color-cream-dark)" }}
          />
          <h3
            className="font-black w-fit"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--color-cream-dark)",
              backgroundColor: "var(--color-black)",
            }}
          >
            Work with me
          </h3>
          <div className="flex flex-col gap-1">
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
              Want to collaborate?
            </p>
            <div className="flex items-center gap-3 flex-wrap">
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
              <CopyButton text={EMAIL_WORK} />
            </div>
          </div>
        </div>

        {/* Right — Say hello */}
        <div className="flex flex-col gap-4">
          <div
            className="w-full h-px mb-6"
            style={{ backgroundColor: "var(--color-cream-dark)" }}
          />
          <h3
            className="font-black"
            style={{
              fontSize: "clamp(1.5rem, 3vw, 2rem)",
              color: "var(--color-text-primary)",
            }}
          >
            Say hello
          </h3>
          <div className="flex flex-col gap-2">
            <p className="text-sm" style={{ color: "var(--color-text-secondary)" }}>
              WhatsApp
            </p>
            <div className="flex items-center gap-3 flex-wrap">
              <a
                href={WHATSAPP_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium transition-opacity duration-200 hover:opacity-50"
                style={{
                  color: "var(--color-text-primary)",
                  fontSize: "clamp(0.875rem, 1.5vw, 1rem)",
                }}
              >
                {WHATSAPP_NUM}
              </a>
              <CopyButton text={WHATSAPP_NUM} />
            </div>
          </div>
        </div>
      </div>

      {/* ── Bottom bar — social links + copyright ── */}
      <div
        className="w-full max-w-[94rem] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
        style={{ padding: "0 var(--section-px) 2rem" }}
      >
        <div className="flex items-center gap-6">
          <a
            href={GITHUB_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-50"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.342-3.369-1.342-.454-1.155-1.11-1.462-1.11-1.462-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0112 6.836a9.59 9.59 0 012.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.202 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
            </svg>
            GitHub
          </a>
          <a
            href={LINKEDIN_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-sm font-medium transition-opacity duration-200 hover:opacity-50"
            style={{ color: "var(--color-text-secondary)" }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
            </svg>
            LinkedIn
          </a>
        </div>

        <p
          className="text-xs"
          style={{ color: "var(--color-text-secondary)" }}
        >
          © {new Date().getFullYear()} {FULL_NAME}. All rights reserved.
        </p>
      </div>

      {/* ── Animated letter-by-letter name ── */}
      <AnimatedName name={FULL_NAME} inView={inView} />
    </footer>
  );
}