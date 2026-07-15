const achievements = [
  {
    title: "Competitive Programming",
    icon: "💻",
    items: [
      "Solved 500+ problems on Codeforces, LeetCode, and LightOJ.",
      "Strong foundation in algorithms, data structures, and computational thinking.",
    ],
  },
  {
    title: "Mathematics Olympiad",
    icon: "🥇",
    items: [
      "14th Place — Kamalnagar Mathematical Olympiad (2018)",
      "7th Place — Lakshmipur Regional Mathematical Olympiad (2019)",
      "Represented AIUB at the National Undergraduate Mathematical Olympiad (2025).",
    ],
  },
  {
    title: "Programming Contests",
    icon: "🏆",
    items: [
      "Participated in ICPC Dhaka Regional Online Preliminary (2023, 2024, 2025).",
      "30th Place — The Rookie Code Clash Programming Contest (2024).",
    ],
  },
  {
    title: "Research",
    icon: "📄",
    items: [
      "First Author of two IEEE conference paper submissions.",
      "Currently working on additional AI research projects.",
    ],
  },
  {
    title: "Academic Recognition",
    icon: "🎓",
    items: [
      "Selected to represent AIUB at the National Undergraduate Mathematical Olympiad (2025).",
    ],
  },
  {
    title: "Certifications",
    icon: "📜",
    items: [
      "DataCamp — Introduction to Git",
      "Skills: Git, GitHub, Version Control, Branching, Collaboration",
    ],
  },
];

export default function Achievements() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          Achievements
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Achievements & Certifications
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-gray-400">
          My academic journey includes competitive programming,
          mathematics olympiads, AI research, programming contests,
          and continuous professional learning.
        </p>

        <div className="mt-16 grid gap-8">

          {achievements.map((section) => (

            <div
              key={section.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8"
            >

              <h2 className="text-2xl font-bold text-white">
                {section.icon} {section.title}
              </h2>

              <ul className="mt-6 space-y-4">

                {section.items.map((item) => (

                  <li
                    key={item}
                    className="flex gap-3 text-gray-300"
                  >
                    <span className="text-cyan-400">•</span>

                    <span>{item}</span>

                  </li>

                ))}

              </ul>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}