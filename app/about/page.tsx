import AboutHero from "@/src/components/about/AboutHero";
import AboutSkills from "@/src/components/about/AboutSkills";

export default function AboutPage() {
  return (
    <main className="w-full flex flex-col items-center">
      <AboutHero />
      <AboutSkills />
    </main>
  );
}