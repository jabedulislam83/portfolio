const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Deep Learning",
  "Natural Language Processing",
  "Data Engineering",
  "Large Language Models",
];

const skills = {
  Programming: ["Python", "C++", "Java", "JavaScript", "SQL", "MATLAB"],

  "AI / ML": [
    "TensorFlow",
    "Scikit-learn",
    "OpenCV",
    "YOLO",
    "Pandas",
    "NumPy",
  ],

  Web: ["Next.js", "React", "Node.js", "Tailwind CSS"],

  Tools: ["Git", "GitHub", "VS Code", "Google Colab"],
};

const facts = [
  {
    value: "500+",
    label: "Problems Solved",
  },
  {
    value: "2",
    label: "IEEE Paper Submissions",
  },
  {
    value: "15+",
    label: "Programming Contests",
  },
  {
    value: "3.64",
    label: "Current CGPA",
  },
];

export default function About() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          About
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          About Me
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-gray-400">
          I am a final-year Computer Science and Engineering student at
          American International University-Bangladesh (AIUB), passionate
          about Artificial Intelligence, Machine Learning, Computer Vision,
          Natural Language Processing, and Data Engineering.
        </p>

        {/* Who I Am + Education */}

        <div className="mt-14 grid gap-8 lg:grid-cols-2">

          {/* Who I Am */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-2xl font-bold text-white">
              Who I Am
            </h2>

            <p className="mt-6 leading-8 text-gray-400">
              I enjoy solving real-world problems through Artificial
              Intelligence and software engineering. My research focuses on
              Computer Vision, Machine Learning, and Natural Language
              Processing.
            </p>

            <p className="mt-5 leading-8 text-gray-400">
              My long-term goal is to become an AI researcher and engineer
              who develops intelligent systems with practical real-world
              impact.
            </p>

          </div>

          {/* Education */}

          <div className="rounded-3xl border border-white/10 bg-white/5 p-8">

            <h2 className="text-2xl font-bold text-white">
              Education
            </h2>

            <div className="mt-8 space-y-8">

              <div className="border-l-2 border-cyan-400 pl-5">

                <h3 className="text-xl font-semibold text-white">
                  B.Sc. in Computer Science & Engineering
                </h3>

                <p className="mt-2 text-gray-300">
                  American International University-Bangladesh (AIUB)
                </p>

                <p className="mt-2 text-gray-500">
                  2022 – Present
                </p>

                <p className="mt-2 font-medium text-cyan-400">
                  Current CGPA : 3.64
                </p>

              </div>

              <div className="border-l-2 border-cyan-400 pl-5">

                <h3 className="text-xl font-semibold text-white">
                  Higher Secondary Certificate (HSC)
                </h3>

                <p className="mt-2 text-gray-300">
                  Principal Kazi Faruky college
                </p>

                <p className="mt-2 text-gray-500">
                  Passing Year:2021
                </p>

                <p className="mt-2 font-medium text-cyan-400">
                  GPA: 4.83/5
                </p>

              </div>

              <div className="border-l-2 border-cyan-400 pl-5">

                <h3 className="text-xl font-semibold text-white">
                  Secondary School Certificate (SSC)
                </h3>

                <p className="mt-2 text-gray-300">
                  Torabgonj High School
                </p>

                <p className="mt-2 text-gray-500">
                  Passing Year: 2019
                </p>

                <p className="mt-2 font-medium text-cyan-400">
                  GPA: 4.17/5
                </p>

              </div>

            </div>

          </div>

        </div>

        {/* Research Interests */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold text-white">
            Research Interests
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            {interests.map((item) => (
              <span
                key={item}
                className="rounded-full border border-cyan-500/30 bg-cyan-500/10 px-5 py-3 text-cyan-300"
              >
                {item}
              </span>
            ))}

          </div>

        </section>

        {/* Technical Skills */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold text-white">
            Technical Skills
          </h2>

          <div className="mt-10 grid gap-6 md:grid-cols-2">

            {Object.entries(skills).map(([category, values]) => (

              <div
                key={category}
                className="rounded-2xl border border-white/10 bg-white/5 p-6"
              >

                <h3 className="text-xl font-semibold text-cyan-400">
                  {category}
                </h3>

                <div className="mt-5 flex flex-wrap gap-3">

                  {values.map((skill) => (
                    <span
                      key={skill}
                      className="rounded-full bg-slate-800 px-4 py-2 text-sm text-gray-300"
                    >
                      {skill}
                    </span>
                  ))}

                </div>

              </div>

            ))}

          </div>

        </section>

        {/* Quick Facts */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold text-white">
            Quick Facts
          </h2>

          <div className="mt-8 grid gap-6 md:grid-cols-2 lg:grid-cols-4">

            {facts.map((fact) => (

              <div
                key={fact.label}
                className="rounded-2xl border border-white/10 bg-white/5 p-8"
              >

                <h3 className="text-4xl font-bold text-cyan-400">
                  {fact.value}
                </h3>

                <p className="mt-4 text-gray-400">
                  {fact.label}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Languages */}

        <section className="mt-20">

          <h2 className="text-3xl font-bold text-white">
            Languages
          </h2>

          <div className="mt-8 flex flex-wrap gap-4">

            <span className="rounded-full bg-slate-800 px-5 py-3 text-gray-300">
              🇧🇩 Bangla (Native)
            </span>

            <span className="rounded-full bg-slate-800 px-5 py-3 text-gray-300">
              🇬🇧 English (Professional Working Proficiency)
            </span>

          </div>

        </section>

        {/* Career Objective */}

        <section className="mt-20 rounded-3xl border border-cyan-500/20 bg-cyan-500/5 p-10">

          <h2 className="text-3xl font-bold text-white">
            Career Objective
          </h2>

          <p className="mt-6 leading-8 text-gray-300">
            My goal is to build intelligent AI systems through research and
            engineering while contributing to impactful real-world solutions
            in Artificial Intelligence, Machine Learning, and Data Science. I
            am actively seeking AI/ML internship opportunities where I can
            apply my skills, continue learning, and contribute to innovative
            projects.
          </p>

        </section>

      </div>
    </section>
  );
}