import HeroStats from "./HeroStats";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden bg-slate-950">
      {/* Background Glow */}
      <div className="absolute left-20 top-32 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-20 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        <p className="text-lg font-medium text-cyan-400">
          Hello, I'm
        </p>

        <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
          {siteConfig.name}
        </h1>

        <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-4xl">
          {siteConfig.role}
          <span className="mx-3 text-cyan-400">•</span>
          {siteConfig.subtitle}
        </h2>

        <p className="mt-8 max-w-3xl text-lg leading-8 text-gray-400">
          {siteConfig.description}
        </p>

        <div className="mt-10 flex flex-wrap gap-4">

          <button className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-400">
            View Projects
          </button>

          <button className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400">
            Download Resume
          </button>

        </div>

        <SocialLinks />

        <HeroStats />

      </div>
    </section>
  );
}