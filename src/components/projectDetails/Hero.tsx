"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const PLACEHOLDER_IMG = "/images/projects/placeholder.webp";

interface Props {
  image: string;
  title: string;
  priority?: boolean;
}

export default function Hero({ image, title, priority = false }: Props) {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.3]);

  return (
    <section
      ref={sectionRef}
      className="w-full sm:p-6! sm:pb-0! max-h-[80vh] overflow-hidden"
    >
      <motion.div style={{ scale }} className="w-full h-full origin-center">
        <Image
          src={image || PLACEHOLDER_IMG}
          alt={title}
          width={1920}
          height={1080}
          priority={priority}
          loading={priority ? "eager" : "lazy"}
          decoding="async"
          className="w-full h-auto max-h-[80vh] object-contain block"
          sizes="100vw"
          onError={(e) => {
            (e.target as HTMLImageElement).src = PLACEHOLDER_IMG;
          }}
        />
      </motion.div>
    </section>
  );
}
