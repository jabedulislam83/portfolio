import Navbar from "@/components/layout/Navbar";
import Research from "@/components/research/Research";

export default function ResearchPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Research />
      </main>
    </>
  );
}