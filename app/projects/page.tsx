import Navbar from "@/components/layout/Navbar";
import Projects from "@/components/projects/Projects";

export default function ProjectsPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Projects />
      </main>
    </>
  );
}