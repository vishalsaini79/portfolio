import { motion } from "framer-motion";
import { FaGithub } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";

function Projects() {
  const projects = [
    {
      title: "Background Removal SaaS App",
      image:
        "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      desc: "A MERN SaaS platform with authentication, credit-based usage, Razorpay payment integration and AI-powered background removal.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Razorpay"],
      github: "https://github.com/vishalsaini79/bg-removal",
      live: "https://bg-removal-m54z.vercel.app/",
    },
    {
      title: "Wanderlust",
      image:
        "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      desc: "A full-stack travel stay platform with property listings, authentication, reviews and responsive user interface.",
      tech: ["Node.js", "Express", "MongoDB", "EJS", "Bootstrap"],
      github: "https://github.com/vishalsaini79/MAJORPROJECT",
      live: "https://majorproject-on1q.onrender.com/listings",
    },
    {
      title: "Gemini AI Chatbot",
      image:
        "https://images.unsplash.com/photo-1677442136019-21780ecad995",
      desc: "An AI chatbot built with Gemini API, responsive UI and real-time prompt-based interaction.",
      tech: ["HTML", "CSS", "JavaScript", "Gemini API"],
      github: "https://github.com/vishalsaini79/Gemini-AI-Chatbot",
      live: "https://gemini-ai-chatbot-elod.vercel.app/",
    },
    {
      title: "Image Search Engine",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3",
      desc: "A responsive image search application using external APIs with clean gallery layout and smooth search experience.",
      tech: ["JavaScript", "API", "HTML", "CSS"],
      github: "https://github.com/vishalsaini79/Image-search-engine",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 text-lg font-semibold mb-3">
            My Work
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            Featured projects built with{" "}
            <span className="text-cyan-400">
              clean code and modern UI
            </span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group bg-slate-900/70 border border-white/10 rounded-3xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-300"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-56 object-cover group-hover:scale-105 transition duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent"></div>
              </div>

              <div className="p-7">
                <h3 className="text-3xl font-bold mb-4">
                  {project.title}
                </h3>

                <p className="text-gray-300 leading-7 mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-3 mb-7">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="bg-slate-950/80 border border-white/10 text-cyan-400 px-4 py-2 rounded-full text-sm"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-6">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 text-gray-300 hover:text-cyan-400 transition"
                  >
                    <FiExternalLink />
                    Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;