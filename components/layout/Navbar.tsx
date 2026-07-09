import { siteConfig } from "@/data/site";

export default function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">

        <a
          href="/"
          className="text-xl font-bold tracking-wide text-white"
        >
          {siteConfig.name}
        </a>

        <nav className="hidden gap-8 text-sm font-medium text-gray-300 md:flex">

          <a href="#about" className="transition hover:text-cyan-400">
            About
          </a>

          <a href="#research" className="transition hover:text-cyan-400">
            Research
          </a>

          <a href="#projects" className="transition hover:text-cyan-400">
            Projects
          </a>

          <a href="#contact" className="transition hover:text-cyan-400">
            Contact
          </a>

        </nav>

      </div>
    </header>
  );
}