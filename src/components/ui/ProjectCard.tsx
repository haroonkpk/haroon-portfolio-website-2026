"use client";

import { useRef, useState } from "react";
import { motion, useInView, Variants } from "framer-motion";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Project } from "@/src/data/projects";

// --- Custom Image with Fallback ---
interface FallbackImageProps extends ImageProps {
  fallbackSrc: string;
}

const FallbackImage = ({
  src,
  fallbackSrc,
  alt,
  ...rest
}: FallbackImageProps) => {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
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
  {
    widthPercent: 48,
    aspectRatio: "1/1",
    topPercent: 0,
    leftPercent: 48,
    z: 1,
    delay: 0.05,
  },
  {
    widthPercent: 62,
    aspectRatio: "16/10",
    topPercent: 18,
    leftPercent: 0,
    z: 3,
    delay: 0.18,
  },
  {
    widthPercent: 32,
    aspectRatio: "4/5",
    topPercent: 45,
    leftPercent: 56,
    z: 2,
    delay: 0.31,
  },
] as const;

export default function ProjectCard({ project }: Props) {
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
          style={{ paddingBottom: "52%", minHeight: "220px" }}
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
                  delay: cfg.delay,
                }}
                className={`${i === 0 ? "hidden sm:block" : ""} absolute overflow-hidden bg-gray-2001`}
                style={{
                  width: `${cfg.widthPercent}%`,
                  left: `${cfg.leftPercent}%`,
                  top: `${cfg.topPercent}%`,
                  zIndex: cfg.z,
                  aspectRatio: cfg.aspectRatio,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              >
                <FallbackImage
                  src={src}
                  fallbackSrc="/images/projects/placeholder.webp"
                  alt={`${project.title} — image ${i + 1}`}
                  fill
                  className="transition-transform duration-700 ease-out group-hover:scale-[1.04]"
                  sizes="(max-width: 768px) 60vw, 45vw"
                />
              </motion.div>
            );
          })}
        </div>

        {/* ── Text — label + title ── */}
        <div className="flex flex-col gap-3 mt-6! w-full">
          {/* Label */}
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
              {project.label}
            </motion.span>
          </div>

          {/* Title — full width mobile, 53% desktop */}
          <div className="overflow-hidden w-full">
            <motion.h2
              variants={revealVariants}
              className="font-black transition-opacity duration-300 group-hover:opacity-50 w-full md:max-w-[53%]"
              style={{
                fontSize: "clamp(1.6rem, 4vw, 3rem)",
                color: "var(--color-text-primary)",
                lineHeight: 1.1,
                letterSpacing: "var(--tracking-tight)",
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
