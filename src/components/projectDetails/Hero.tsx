"use client";

import Image from "next/image";

const PLACEHOLDER_IMG = "/images/projects/placeholder.webp";

interface Props {
  image: string;
  title: string;
}

export default function Hero({ image, title }: Props) {
  return (
    <section className="w-full sm:p-6! sm:pb-0! max-h-[80vh] overflow-hidden">
      <Image
        src={image || PLACEHOLDER_IMG}
        alt={title}
        width={1920}
        height={1080}
        priority
        className="w-full h-auto max-h-[80vh] object-cover block"
        sizes="100vw"
        onError={(e) => {
          (e.target as HTMLImageElement).src = PLACEHOLDER_IMG;
        }}
      />
    </section>
  );
}
