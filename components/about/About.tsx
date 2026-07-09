export default function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          About
        </p>

        <h2 className="mt-3 text-4xl font-bold text-white">
          About Me
        </h2>

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Left */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h3 className="text-2xl font-semibold text-white">
              Who I Am
            </h3>

            <p className="mt-6 leading-8 text-gray-400">
              I am a final-year Computer Science and Engineering student at
              American International University-Bangladesh (AIUB). My interests
              include Artificial Intelligence, Machine Learning, Computer
              Vision, Natural Language Processing, and Data Engineering.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              I enjoy conducting research, solving real-world problems, and
              building software that creates meaningful impact.
            </p>

          </div>

          {/* Right */}

          /*<div className="space-y-6">

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

              <h3 className="text-xl font-semibold text-white">
                Education
              </h3>

              <p className="mt-5 text-gray-300">
                B.Sc. in Computer Science & Engineering
              </p>

              <p className="text-gray-500">
                American International University-Bangladesh (AIUB)
              </p>

              <p className="mt-2 text-cyan-400">
                CGPA: 3.64
              </p>

            </div>

            <div className="rounded-3xl border border-white/10 bg-white/5 p-7">

              <h3 className="text-xl font-semibold text-white">
                Research Interests
              </h3>

              <div className="mt-5 flex flex-wrap gap-3">

                {[
                  "Machine Learning",
                  "Computer Vision",
                  "Natural Language Processing",
                  "Data Engineering",
                  "Deep Learning",
                ].map((skill) => (
                  <span
                    key={skill}
                    className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300"
                  >
                    {skill}
                  </span>
                ))}

              </div>

            </div>

          </div>
       */
        </div>

      </div>
    </section>
  );
}