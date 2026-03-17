import { PROJECTS } from "@/src/data/projects";
import WorkCard from "@/src/components/ui/WorkCard";

export default function WorkPage() {
  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[var(--color-cream)] pb-[var(--section-py)]">
      {/* ── Grid Container ── */}
      <section
        className="w-full max-w-[94rem] "
        style={{ padding: "0 clamp(1rem, 8vw, 7rem)" }}
      >
        {/* ── Heading ── */}
        <header className="w-full pb-[clamp(3rem,6vw,5rem)] pt-[clamp(5rem,10vw,8rem)]">
          <h1 className="font-black leading-[0.9] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)] text-[clamp(3rem,10vw,9rem)]">
            Work
          </h1>
        </header>

        {/* CSS Grid: 1 column on mobile, 2 columns on sm+ */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 "
          style={{
            columnGap: "clamp(2.5rem, 8vw, 8rem)",
            rowGap: "clamp(3rem, 10vw, 7rem)",
          }}
        >
          {PROJECTS.map((project, index) => (
            <div
              key={project.slug}
              className="sm:even:mt-[clamp(4rem,10vw,8rem)]"
            >
              <WorkCard project={project} />
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
