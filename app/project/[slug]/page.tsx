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

  return (
    <main className="w-full flex flex-col items-center">
      {/* 1 — Full screen hero image */}
      <Hero image={project.images[0]} title={project.title} />

      {/* 2 — Detail section: client, deliverables, heading, body */}
      <Detail
        client={project.detail.client}
        liveUrl={project.detail.liveUrl}
        githubUrl={project.detail.githubUrl}
        deliverables={project.detail.deliverables}
        heading={project.detail.heading}
        body={project.detail.body}
      />

      <Screenshots
        screenshots={project.detail.screenshots}
        title={project.title}
      />
    </main>
  );
}
