import { notFound } from "next/navigation";
import { PROJECTS } from "@/src/data/projects";
import { Detail, Hero, Screenshots } from "@/src/components";

interface Props {
  params: { slug: string };
}

export function generateStaticParams() {
  return PROJECTS.map((p) => ({ slug: p.slug }));
}

export default async function Page({ params }: Props) {
  const { slug } = await params;

  const project = PROJECTS.find((p) => p.slug === slug);
  if (!project) notFound();

  const heroImage = project.images[0];
  const galleryImages = project.images.slice(1); 

  return (
    <main className="w-full flex flex-col items-center">       
      <Hero image={heroImage} title={project.title} priority />

      {/* Detail meta section */}
      <Detail
        client={project.detail.client}
        liveUrl={project.detail.liveUrl}
        githubUrl={project.detail.githubUrl}
        deliverables={project.detail.deliverables}
        heading={project.detail.heading}
        body={project.detail.body}
      />

      <Screenshots images={galleryImages} title={project.title} />
    </main>
  );
}