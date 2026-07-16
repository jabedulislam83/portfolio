import Navbar from "@/components/layout/Navbar";
import Contact from "@/components/contact/Contact";

export default function ContactPage() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <Contact />
      </main>
    </>
  );
}