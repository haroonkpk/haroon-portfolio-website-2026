"use client";

import { useRef, useState } from "react";
import {
  motion,
  useInView,
  useScroll,
  useTransform,
  useSpring,
  Variants,
} from "framer-motion";
import Image, { ImageProps } from "next/image";
import { Project } from "@/src/data/projects";
import { useTransitionNavigate } from "@/src/lib/useTransitionNavigate";

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
  priority?: boolean;
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
    widthPercent: 62,
    aspectRatio: "16/10",
    topPercent: 18,
    leftPercent: 0,
    z: 3,
    delay: 0.08,
  },
  {
    widthPercent: 48,
    aspectRatio: "1/1",
    topPercent: 0,
    leftPercent: 48,
    z: 1,
    delay: 0.01,
  },
  {
    widthPercent: 32,
    aspectRatio: "4/5",
    topPercent: 45,
    leftPercent: 56,
    z: 2,
    delay: 0.01,
  },
] as const;

export default function ProjectCard({
  project,
  index,
  priority = false,
}: Props) {
  const containerRef = useRef<HTMLDivElement>(null);
  const go = useTransitionNavigate();

  const textRef = useRef<HTMLDivElement>(null);
  const inView = useInView(textRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const y1 = useTransform(smoothProgress, [0, 1], ["-5%", "5%"]);
  const y2 = useTransform(smoothProgress, [0, 1], ["5%", "-5%"]);
  const y3 = useTransform(smoothProgress, [0, 1], ["-4%", "4%"]);

  const parallaxTransforms = [y1, y2, y3];

  const collageImages = project.images.slice(0, 3);

  return (
    <div
      onClick={() => go(`/project/${project.slug}`)}
      className="block w-full cursor-pointer"
      style={{ borderBottom: "1px solid var(--color-cream-dark)" }}
    >
      <div
        ref={containerRef}
        className="group w-full"
        style={{ padding: "clamp(2.5rem, 6vw, 5rem) var(--section-px)" }}
      >
        {/* ── Collage area ── */}
        <div
          className="relative w-full mb-10"
          style={{ paddingBottom: "52%", minHeight: "220px" }}
        >
          {collageImages.map((src, i) => {
            const cfg = IMG_CONFIG[i];
            return (
              <motion.div
                key={src}
                initial={{ y: 28 }}
                whileInView={{ y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.75, delay: cfg.delay }}
                className="absolute bg-transparent overflow-hidden"
                style={{
                  width: `${cfg.widthPercent}%`,
                  left: `${cfg.leftPercent}%`,
                  top: `${cfg.topPercent}%`,
                  zIndex: cfg.z,
                  aspectRatio: cfg.aspectRatio,
                  boxShadow: "0 4px 24px rgba(0,0,0,0.10)",
                }}
              >
                {/* ── Curtain effect ── */}
                <motion.div
                  initial={{ x: "-0%" }}
                  whileInView={{ x: "100%" }}
                  viewport={{ once: true, margin: "-20px" }}
                  transition={{
                    duration: 1,
                    ease: [0.76, 0, 0.24, 1],
                    delay: cfg.delay,
                  }}
                  className="absolute inset-0 z-20 pointer-events-none"
                  style={{ backgroundColor: "var(--color-gray-warm)" }}
                />

                {/* ── Image ── */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.01, delay: cfg.delay + 0.45 }}
                  style={{
                    width: "100%",
                    height: "120%",
                    top: "-10%",
                    position: "relative",
                    y: parallaxTransforms[i],
                  }}
                >
                  <FallbackImage
                    src={src}
                    fallbackSrc="/images/projects/placeholder.webp"
                    alt={`${project.title} — image ${i + 1}`}
                    fill
                    style={{ objectFit: "cover" }}
                    className="transition-transform duration-700 ease-out"
                    sizes="(max-width: 768px) 60vw, 45vw"
                    priority={priority && i === 0}
                    loading={priority && i === 0 ? "eager" : "lazy"}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* ── Text — label + title ── */}
        <div ref={textRef} className="flex flex-col gap-3 mt-8! w-full">
          <div className="overflow-hidden">
            <motion.span
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              variants={revealVariants}
              className="inline-block text-xs font-medium"
              style={{
                color: "var(--color-text-muted)",
                backgroundColor: "var(--color-cream-dark)",
                borderBottom: "1px solid var(--color-text-muted)",
                paddingBottom: "2px",
                letterSpacing: "var(--tracking-wider)",
                textTransform: "uppercase",
              }}
            >
              {project.label}
            </motion.span>
          </div>

          <div className="overflow-hidden w-full">
            <motion.h2
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
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
      </div>
    </div>
  );
}
