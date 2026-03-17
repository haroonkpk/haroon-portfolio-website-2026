"use client";

import { useState } from "react";
import Link from "next/link";
import Image, { ImageProps } from "next/image";
import { Project } from "@/src/data/projects";

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
}

export default function WorkCard({ project }: Props) {
  return (
    <Link href={`/project/${project.slug}`} className="block w-full group">
      <div className="w-full flex flex-col gap-3">
        {/* Image Box — tall, 2 images stacked */}
        <div className="w-full flex flex-col gap-1 shadow-xl">
          {/* First Image */}
          <div
            className="w-full overflow-hidden"
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
          </div>

          {/* Second Image */}
          <div
            className="w-full overflow-hidden"
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
          </div>
        </div>

        {/* Title */}
        <h3
          className="font-black transition-opacity duration-300 group-hover:opacity-50"
          style={{
            fontSize: "clamp(1rem, 2vw, 1.4rem)",
            color: "var(--color-text-primary)",
            lineHeight: 1.2,
            letterSpacing: "var(--tracking-tight)",
          }}
        >
          {project.title}
        </h3>
      </div>
    </Link>
  );
}
