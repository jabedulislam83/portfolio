import Image from "next/image";
import Link from "next/link";

import HeroStats from "./HeroStats";
import SocialLinks from "./SocialLinks";
import { siteConfig } from "@/data/site";

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-slate-950">

      {/* Background Glow */}

      <div className="absolute left-0 top-20 h-72 w-72 rounded-full bg-cyan-500/10 blur-[120px]" />

      <div className="absolute right-0 bottom-20 h-72 w-72 rounded-full bg-blue-500/10 blur-[120px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-24">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}

          <div>

            <p className="text-lg font-medium text-cyan-400">
              Hello, I&apos;m
            </p>

            <h1 className="mt-4 text-5xl font-extrabold tracking-tight text-white md:text-7xl">
              {siteConfig.name}
            </h1>

            <h2 className="mt-6 text-2xl font-semibold text-gray-300 md:text-4xl">

              {siteConfig.role}

              <span className="mx-3 text-cyan-400">
                •
              </span>

              {siteConfig.subtitle}

            </h2>

            <p className="mt-8 max-w-2xl text-lg leading-8 text-gray-400">
              {siteConfig.description}
            </p>

            {/* Buttons */}

            <div className="mt-10 flex flex-wrap gap-4">

              <Link
                href="/projects"
                className="rounded-xl bg-cyan-500 px-7 py-3 font-semibold text-slate-950 transition duration-300 hover:scale-105 hover:bg-cyan-400"
              >
                View Projects
              </Link>

              <a
                href="/resume/Jabedul_Islam_Resume.pdf"
                download
                className="rounded-xl border border-white/20 px-7 py-3 font-semibold text-white transition duration-300 hover:border-cyan-400 hover:text-cyan-400"
              >
                Download Resume
              </a>

            </div>

            {/* Social Links */}

            <div className="mt-10">

              <SocialLinks />

            </div>

          </div>

          {/* Right Side */}

          <div className="flex justify-center">

            <Image
              src="/images/profile.jpg"
              alt="Jabedul Islam"
              width={350}
              height={350}
              priority
              className="rounded-full border-4 border-cyan-400 object-cover shadow-[0_0_50px_rgba(34,211,238,0.25)]"
            />

          </div>

        </div>  
          {/* Stats */}

        <div className="mt-24">

          <HeroStats />

        </div>
                {/* Video CV */}

        <section
          id="video-cv"
          className="mt-24"
        >
          <div className="mx-auto max-w-5xl">

            <h2 className="text-center text-4xl font-bold text-white">
              🎥 Video CV
            </h2>

            <p className="mt-4 text-center text-gray-400">
              Watch a brief introduction about my background,
              research interests, technical skills, and career goals.
            </p>

            <div className="mt-10 overflow-hidden rounded-3xl border border-white/10 shadow-2xl">

              <iframe
                className="aspect-video w-full"
                src="https://www.youtube.com/embed/gDCkYQ2FYdI"
                title="Jabedul Islam Video CV"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

            </div>

          </div>
        </section>

        

      </div>

    </section>
  );
}