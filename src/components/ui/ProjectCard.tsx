"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Project } from "@/src/data/projects";

// --- 1. Custom Image Component with Fallback Logic ---
interface FallbackImageProps extends ImageProps {
  fallbackSrc: string;
}

const FallbackImage = ({ src, fallbackSrc, alt, ...rest }: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => {
        setImgSrc(fallbackSrc);
      }}
    />
  );
};

interface Props {
  project: Project;
  index: number;
}

const revealVariants = {
  hidden: { clipPath: "inset(100% 0% 0% 0%)", opacity: 0 },
  visible: {
    clipPath: "inset(0% 0% 0% 0%)",
    opacity: 1,
    transition: { duration: 0.75, ease: [0.76, 0, 0.24, 1] },
  },
} as Variants;

const IMG_CONFIG = [
  { widthPercent: 52, aspectRatio: "4/3", top: 0, leftPercent: 0, rotate: "-1.5deg", z: 1 },
  { widthPercent: 40, aspectRatio: "4/3", top: 0, leftPercent: 48, rotate: "1deg", z: 2 },
  { widthPercent: 34, aspectRatio: "3/4", top: 38, leftPercent: 60, rotate: "-0.8deg", z: 3 },
] as const;

export default function ProjectCard({ project, index }: Props) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <Link
      href={`/projects/${project.slug}`}
      className="block w-full"
      style={{ borderBottom: "1px solid var(--color-cream-dark)" }}
    >
      <motion.div
        ref={ref}
        initial="hidden"
        animate={inView ? "visible" : "hidden"}
        className="group w-full"
        style={{ padding: "clamp(2.5rem, 6vw, 5rem) var(--section-px)" }}
      >
        {/* ── Collage area ── */}
        <div
          className="relative w-full mb-10"
          style={{ paddingBottom: "48%", minHeight: "260px" }}
        >
          {project.images.map((src, i) => {
            const cfg = IMG_CONFIG[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 28 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 28 }}
                transition={{
                  duration: 0.75,
                  ease: [0.16, 1, 0.3, 1],
                  delay: 0.05 + i * 0.13,
                }}
                className="absolute overflow-hidden bg-gray-200" 
                style={{
                  width: `${cfg.widthPercent}%`,
                  left: `${cfg.leftPercent}%`,
                  top: i === 2 ? `${cfg.top}%` : `${cfg.top}px`,
                  zIndex: cfg.z,
                  transform: `rotate(${cfg.rotate})`,
                  aspectRatio: cfg.aspectRatio,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              >
                {/* ── Use FallbackImage instead of next/image ── */}
                <FallbackImage
                  src={src}
                  fallbackSrc="/images/projects/placeholder.webp" 
                  alt={`${project.title} — image ${i + 1}`}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 55vw, 45vw"
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── Text — label + title ── */}
        <div className="flex flex-col gap-3 w-full">
          {/* Label with underline */}
          <div className="overflow-hidden">
            <motion.span
              variants={revealVariants}
              className="inline-block text-xs font-medium"
              style={{
                color: "var(--color-text-muted)",
                borderBottom: "1px solid var(--color-text-muted)",
                paddingBottom: "2px",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
              }}
            >
              {String(index + 1).padStart(2, "0")} &mdash; {project.label}
            </motion.span>
          </div>

          {/* Title */}
          <div className="overflow-hidden">
            <motion.h2
              variants={revealVariants}
              className="font-black w-full transition-opacity duration-300 group-hover:opacity-50"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                color: "var(--color-text-primary)",
                lineHeight: 1.1,
                letterSpacing: "var(--tracking-tight)",
                maxWidth: "60%",
              }}
            >
              {project.title}
            </motion.h2>
          </div>
        </div>
      </motion.div>
    </Link>
  );
}