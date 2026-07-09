export default function About() {
  return (
    <section className="bg-slate-950 min-h-screen py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          About
        </p>

        <h1 className="mt-4 text-5xl font-bold text-white">
          About Me
        </h1>

        <div className="mt-10 rounded-2xl border border-white/10 bg-slate-900 p-8">

          <p className="leading-8 text-gray-400">
            I am a final-year Computer Science and Engineering student at
            American International University-Bangladesh (AIUB).
          </p>

          <p className="mt-5 leading-8 text-gray-400">
            My research interests include Artificial Intelligence,
            Machine Learning, Computer Vision,
            Natural Language Processing,
            and Data Engineering.
          </p>

        </div>

      </div>
    </section>
  );
}