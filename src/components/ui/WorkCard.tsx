"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { motion } from "framer-motion";
import { Project } from "@/src/data/projects";
import { useTransitionNavigate } from "@/src/lib/useTransitionNavigate";

const PLACEHOLDER = "/images/projects/placeholder.webp";

interface FallbackImageProps extends ImageProps {
  fallbackSrc: string;
}
function FallbackImage({ src, fallbackSrc, alt, ...rest }: FallbackImageProps) {
  const [imgSrc, setImgSrc] = useState(src || fallbackSrc);
  return (
    <Image
      {...rest}
      src={imgSrc}
      alt={alt}
      onError={() => setImgSrc(fallbackSrc)}
    />
  );
}

interface Props {
  project: Project;
  delay?: number;
}

export default function WorkCard({ project, delay = 0 }: Props) {
  const go = useTransitionNavigate();

  return (
    <div
      onClick={() => go(`/project/${project.slug}`)}
      className="block w-full group"
    >
      <div className="w-full flex flex-col gap-3">
        {/* Image Box */}
        <div className="w-full flex flex-col gap-1 shadow-xl">
          {/* First Image */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "6/3" }}
          >
            <FallbackImage
              src={project.images[0]}
              fallbackSrc={PLACEHOLDER}
              alt={`${project.title} - image 1`}
              fill={false}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            {/* Curtain */}
            <motion.div
              initial={{ x: "0%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{ duration: 1, ease: [0.76, 0, 0.24, 1], delay }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{ backgroundColor: "var(--color-gray-warm)" }}
            />
          </div>

          {/* Second Image */}
          <div
            className="relative w-full overflow-hidden"
            style={{ aspectRatio: "6/3" }}
          >
            <FallbackImage
              src={project.images[1] ?? project.images[0]}
              fallbackSrc={PLACEHOLDER}
              alt={`${project.title} - image 2`}
              fill={false}
              width={800}
              height={600}
              className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, 50vw"
            />
            {/* Curtain — slightly later */}
            <motion.div
              initial={{ x: "0%" }}
              whileInView={{ x: "100%" }}
              viewport={{ once: true, margin: "-20px" }}
              transition={{
                duration: 1,
                ease: [0.76, 0, 0.24, 1],
                delay: delay + 0.15,
              }}
              className="absolute inset-0 z-20 pointer-events-none"
              style={{ backgroundColor: "var(--color-gray-warm)" }}
            />
          </div>
        </div>

        {/* Title — curtain too */}
        <div className="relative overflow-hidden">
          <h3
            className="font-black transition-opacity duration-300 group-hover:opacity-50"
            style={{
              fontSize: "clamp(1.25rem, 2vw, 1.8rem)",
              color: "var(--color-text-primary)",
              lineHeight: 1.2,
              letterSpacing: "var(--tracking-tight)",
            }}
          >
            {project.title}
          </h3>
        </div>
      </div>
    </div>
  );
}
