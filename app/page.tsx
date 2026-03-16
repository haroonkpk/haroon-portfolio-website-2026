import Hero, { Projects } from "@/src/components/sections";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Hero />
      <Projects />
    </main>
  );
}
