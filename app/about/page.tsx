import Navbar from "@/components/layout/Navbar";
import About from "@/components/about/About";

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        <About />
      </main>
    </>
  );
}