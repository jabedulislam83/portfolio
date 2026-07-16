const projects = [
  {
    title: "ShopZone",
    category: "Full Stack Web Application",
    description:
      "A modern e-commerce platform featuring authentication, product management, shopping cart, and responsive user interface.",
    technologies: [
      "Next.js",
      "React",
      "NestJS",
      "Node.js",
      "Tailwind CSS",
      "MongoDB",
    ],
    github: "#",
  },

  {
    title: "ScholarsNest – Student Meal Management System",
    category: "Desktop Application",
    description:
      "A complete student meal management system with meal scheduling, payment tracking, daily meal updates, and administrator dashboard.",
    technologies: [
      "C#",
      ".NET",
      "WinForms",
      "SQL Server",
    ],
    github: "#",
  },

  {
    title: "AwayCare – Pet Home",
    category: "Web Application",
    description:
      "A responsive pet adoption and pet care platform that helps users explore pets and manage adoption requests.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "PHP",
      "MySQL",
    ],
    github: "#",
  },

  {
    title: "E-Ticketing System",
    category: "Desktop Application",
    description:
      "A Java desktop application for ticket booking and management with user-friendly interface.",
    technologies: [
      "Java",
      "Java Swing",
      "MySQL",
    ],
    github: "#",
  },

  {
    title: "Skin Disease Classification System",
    category: "Artificial Intelligence",
    description:
      "An AI-powered disease classification framework using deep learning and computer vision techniques for medical image analysis.",
    technologies: [
      "Python",
      "YOLO",
      "OpenCV",
      "TensorFlow",
    ],
    github: "#",
  },

  {
    title: "Personal Portfolio Website",
    category: "Portfolio",
    description:
      "A responsive portfolio website built with Next.js showcasing projects, research, achievements, and technical skills.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
    ],
    github: "#",
  },
];

export default function Projects() {
  return (
    <section className="bg-slate-950 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <p className="text-cyan-400 font-semibold uppercase tracking-widest">
          Projects
        </p>

        <h1 className="mt-3 text-5xl font-bold text-white">
          Featured Projects
        </h1>

        <p className="mt-6 max-w-3xl leading-8 text-gray-400">
          A selection of academic and personal projects demonstrating my
          experience in Artificial Intelligence, Full Stack Development,
          Desktop Applications, and Software Engineering.
        </p>

        <div className="mt-16 grid gap-8 md:grid-cols-2">

          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-3xl border border-white/10 bg-white/5 p-8 transition duration-300 hover:border-cyan-400 hover:-translate-y-1"
            >
              <span className="rounded-full bg-cyan-500/10 px-4 py-2 text-sm text-cyan-300">
                {project.category}
              </span>

              <h2 className="mt-6 text-2xl font-bold text-white">
                {project.title}
              </h2>

              <p className="mt-5 leading-8 text-gray-400">
                {project.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-3">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-gray-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 inline-block rounded-lg border border-cyan-400 px-5 py-3 text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
              >
                View Project →
              </a>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}