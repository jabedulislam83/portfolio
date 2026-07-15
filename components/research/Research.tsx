const papers = [
  {
    title:
      "YOLO-Based Deep Learning Framework for Disease Classification",
    conference: "IEEE Conference 2025",
    status: "Under Review",
    role: "First Author",
    area: "Computer Vision",
    technologies: ["YOLO", "Python", "OpenCV", "Deep Learning"],
    description:
      "Developed a deep learning framework using YOLO for automated disease classification and performance evaluation.",
  },
  {
    title:
      "Natural Language Processing Based Intelligent Text Analysis",
    conference: "IEEE Conference 2025",
    status: "Under Review",
    role: "First Author",
    area: "Natural Language Processing",
    technologies: ["Python", "NLP", "Machine Learning"],
    description:
      "Designed an NLP-based intelligent text analysis framework using modern machine learning techniques.",
  },
];

const interests = [
  "Artificial Intelligence",
  "Machine Learning",
  "Computer Vision",
  "Natural Language Processing",
  "Deep Learning",
  "Data Engineering",
  "Large Language Models",
];

export default function Research() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          Research
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Research Experience
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-gray-400">
          My research focuses on Artificial Intelligence, Machine Learning,
          Computer Vision, and Natural Language Processing. I enjoy building
          intelligent systems that solve real-world problems through academic
          research.
        </p>

        {/* Papers */}

        <section className="mt-16">

          <h2 className="text-3xl font-bold text-white">
            Featured Research
          </h2>

          <div className="mt-10 grid gap-8">

            {papers.map((paper) => (

              <div
                key={paper.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-8"
              >

                <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

                  <div>

                    <h3 className="text-2xl font-bold text-white">
                      {paper.title}
                    </h3>

                    <p className="mt-2 text-gray-400">
                      {paper.conference}
                    </p>

                  </div>

                  <span className="rounded-full bg-yellow-500/20 px-5 py-2 text-yellow-300">
                    {paper.status}
                  </span>

                </div>

                <div className="mt-8 grid gap-6 md:grid-cols-3">

                  <div>

                    <h4 className="font-semibold text-cyan-400">
                      Role
                    </h4>

                    <p className="mt-2 text-gray-300">
                      {paper.role}
                    </p>

                  </div>

                  <div>

                    <h4 className="font-semibold text-cyan-400">
                      Research Area
                    </h4>

                    <p className="mt-2 text-gray-300">
                      {paper.area}
                    </p>

                  </div>

                  <div>

                    <h4 className="font-semibold text-cyan-400">
                      Technologies
                    </h4>

                    <div className="mt-3 flex flex-wrap gap-2">

                      {paper.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="rounded-full bg-slate-800 px-3 py-2 text-sm text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}

                    </div>

                  </div>

                </div>

                <p className="mt-8 leading-8 text-gray-400">
                  {paper.description}
                </p>

              </div>

            ))}

          </div>

        </section>

        {/* Interests */}

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

      </div>
    </section>
  );
}