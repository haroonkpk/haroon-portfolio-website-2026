"use client";

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import Image from "next/image";

const PLACEHOLDER_IMG = "/images/projects/placeholder.webp";

interface Props {
  screenshots: string[];
  title: string;
}

function ScreenshotImage({ src, alt, delay }: { src: string; alt: string; delay: number }) {
  const [imgSrc, setImgSrc] = useState(src);
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 32 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay }}
      className="w-full"
    >
      <Image
        src={imgSrc}
        alt={alt}
        width={0}
        height={0}
        sizes="(max-width: 640px) 100vw, 50vw"
        className="w-full h-auto"
        onError={() => setImgSrc(PLACEHOLDER_IMG)}
      />
    </motion.div>
  );
}

export default function Screenshots({ screenshots, title }: Props) {
  if (!screenshots.length) return null;

  return (
    <section className="w-full px-4! sm:px-8! lg:px-16! py-10! sm:py-16!"
      style={{ backgroundColor: "var(--color-cream)" }}
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
        {screenshots.map((src, i) => (
          <ScreenshotImage
            key={i}
            src={src}
            alt={`${title} screenshot ${i + 1}`}
            delay={i * 0.1}
          />
        ))}
      </div>
    </section>
  );
}