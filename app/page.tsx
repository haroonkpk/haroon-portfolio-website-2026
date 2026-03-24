import Hero, { Experience, Projects } from "@/src/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pb-24">
      <Hero />
      <Experience />
      <Projects />
    </main>
  );
}
