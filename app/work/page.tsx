"use client";

import { useState } from "react";
import { PROJECTS } from "@/src/data/projects";
import WorkCard from "@/src/components/ui/WorkCard";

type FilterTab = "All" | "Agency" | "Freelance" | "Personal";

const TABS: { key: FilterTab; label: string }[] = [
  { key: "All", label: "All" },
  { key: "Agency", label: "Agency / Company" },
  { key: "Freelance", label: "Freelance / Client" },
  { key: "Personal", label: "Personal / Practice" },
];

export default function WorkPage() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filteredProjects =
    activeTab === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.origin === activeTab);

  const getCount = (key: FilterTab) =>
    key === "All"
      ? PROJECTS.length
      : PROJECTS.filter((p) => p.origin === key).length;

  return (
    <main className="flex min-h-screen w-full flex-col items-center bg-[var(--color-cream)] pb-[var(--section-py)]">
      <section
        className="w-full max-w-[94rem]"
        style={{ padding: "0 clamp(1rem, 8vw, 7rem)" }}
      >
        {/* ── Page Heading ── */}
        <header className="w-full pb-[clamp(2rem,4vw,3rem)] pt-[clamp(5rem,10vw,8rem)]">
          <h1 className="font-black leading-[0.9] tracking-[var(--tracking-tight)] text-[var(--color-text-primary)] text-[clamp(3rem,10vw,9rem)]">
            Work
          </h1>
        </header>

        {/* ── Filter Tabs ── */}
        <div className="mb-[clamp(3rem,6vw,5rem)]">
          {/* Desktop: single horizontal row separated by vertical borders */}
          <div className="hidden sm:flex items-stretch">
            {TABS.map(({ key, label }) => {
              const isActive = activeTab === key;
              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="
                    flex items-center gap-2 px-6 py-3
                    text-sm font-semibold
                    transition-colors duration-200 cursor-pointer
                  "
                  style={{
                    background: isActive
                      ? "var(--color-gray-warm)"
                      : "transparent",
                    color: isActive
                      ? "var(--color-cream)"
                      : "var(--color-text-primary)",
                  }}
                >
                  {label}
                  {/* Project count */}
                  <span className="inline-flex items-center justify-center text-xs font-bold px-1.5 py-0.5 min-w-[1.25rem] transition-colors duration-200">
                    {getCount(key)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Mobile: 2x2 grid — each cell is a full tap target */}
          <div className="grid grid-cols-2 sm:hidden ">
            {TABS.map(({ key, label }, i) => {
              const isActive = activeTab === key;
              const isLeftCol = i % 2 === 0;
              const isTopRow = i < 2;
              const count = getCount(key);

              return (
                <button
                  key={key}
                  onClick={() => setActiveTab(key)}
                  className="flex flex-col items-start gap-0.5 px-4 py-4 text-left transition-colors duration-200 cursor-pointer"
                  style={{
                    background: isActive
                      ? "var(--color-gray-warm)"
                      : "transparent",
                    borderRight: isLeftCol
                      ? "1px solid var(--color-gray-mid)"
                      : "none",
                    borderBottom: isTopRow
                      ? "1px solid var(--color-gray-mid)"
                      : "none",
                  }}
                >
                  {/* Tab label */}
                  <span className="text-[0.7rem] font-bold tracking-wider uppercase leading-tight">
                    {label}
                  </span>
                  {/* Count line */}
                  <span
                    className="text-[0.7rem] font-medium"
                    style={{
                      color: isActive
                        ? "rgba(255,255,255,0.55)"
                        : "color-mix(in srgb, var(--color-gray-mid) 90%, transparent)",
                    }}
                  >
                    {count} project{count !== 1 ? "s" : ""}
                  </span>
                </button>
              );
            })}
          </div>
        </div>

        {/* ── Projects Grid ── */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2"
          style={{
            columnGap: "clamp(2.5rem, 8vw, 8rem)",
            rowGap: "clamp(3rem, 10vw, 7rem)",
          }}
        >
          {filteredProjects.length > 0 ? (
            filteredProjects.map((project, index) => (
              <div
                key={project.slug}
                className="sm:even:mt-[clamp(4rem,10vw,8rem)]"
                style={{
                  animation: "fadeSlideUp 0.35s ease both",
                  animationDelay: `${index * 0.08}s`,
                }}
              >
                <WorkCard project={project} delay={index * 0.2} />
              </div>
            ))
          ) : (
            /* Empty state — shown when a category has no projects yet */
            <div
              className="col-span-2 flex flex-col items-center justify-center py-24 text-center"
              style={{ animation: "fadeSlideUp 0.3s ease both" }}
            >
              <p
                className="text-lg font-semibold"
                style={{
                  color:
                    "color-mix(in srgb, var(--color-text-primary) 35%, transparent)",
                }}
              >
                No projects in this category yet.
              </p>
            </div>
          )}
        </div>
      </section>
    </main>
  );
}
