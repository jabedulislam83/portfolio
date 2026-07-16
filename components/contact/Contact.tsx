export default function Contact() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-6xl px-6">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          Contact
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Let's Connect
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-gray-400">
          I am currently looking for AI/ML Internship opportunities and
          research collaborations.
          Feel free to contact me.
        </p>

        <div className="mt-16 grid gap-10 lg:grid-cols-2">

          {/* Left */}

          <div className="space-y-6">

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-xl font-semibold text-white">
                📧 Email
              </h3>

              <p className="mt-3 text-gray-300">
                jabedulislam83@gmail.com
              </p>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-xl font-semibold text-white">
                💼 LinkedIn
              </h3>

              <a
                href="https://www.linkedin.com/in/jabedul-islam-a740a9276/"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-cyan-400 hover:underline"
              >
                linkedin.com/in/jabedul-islam-a740a9276
              </a>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-xl font-semibold text-white">
                💻 GitHub
              </h3>

              <a
                href="https://github.com/jabedulislam83"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-cyan-400 hover:underline"
              >
                github.com/jabedulislam83
              </a>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-xl font-semibold text-white">
                ⚡ Codeforces
              </h3>

              <a
                href="https://codeforces.com/profile/falcon83"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-3 block text-cyan-400 hover:underline"
              >
                codeforces.com/profile/falcon83
              </a>

            </div>

            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">

              <h3 className="text-xl font-semibold text-white">
                📍 Location
              </h3>

              <p className="mt-3 text-gray-300">
                Dhaka, Bangladesh
              </p>

            </div>

          </div>

          {/* Right */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-3xl font-bold text-white">
              Send a Message
            </h2>

            <form className="mt-8 space-y-5">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"
              />

              <input
                type="email"
                placeholder="Email Address"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"
              />

              <input
                type="text"
                placeholder="Subject"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"
              />

              <textarea
                rows={6}
                placeholder="Your Message"
                className="w-full rounded-xl border border-white/10 bg-slate-900 px-5 py-4 text-white outline-none"
              />

              <button
                type="submit"
                className="rounded-xl bg-cyan-500 px-8 py-4 font-semibold text-slate-950 transition hover:bg-cyan-400"
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}