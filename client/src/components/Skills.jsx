import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaNodeJs,
  FaGitAlt,
} from "react-icons/fa";

import {
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiExpress,
} from "react-icons/si";

function Skills() {
  const skills = [
    {
      name: "Java",
      icon: <FaJava />,
    },

    {
      name: "JavaScript",
      icon: <SiJavascript />,
    },

    {
      name: "React.js",
      icon: <FaReact />,
    },

    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },

    {
      name: "Express.js",
      icon: <SiExpress />,
    },

    {
      name: "MongoDB",
      icon: <SiMongodb />,
    },

    {
      name: "MySQL",
      icon: <SiMysql />,
    },

    {
      name: "Git",
      icon: <FaGitAlt />,
    },
  ];

  return (
    <section
      id="skills"
      className="bg-slate-950 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-12">

          <p className="text-cyan-400 text-lg font-semibold mb-3">
            My Skills
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            Technologies I use to build
            <span className="text-cyan-400">
              {" "}modern web applications
            </span>
          </h2>

        </div>

        {/* SKILLS GRID */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">

          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.08 }}
              className="group bg-slate-900/70 border border-white/10 rounded-3xl p-7 flex flex-col items-center justify-center hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/10 transition duration-300"
            >

              <div className="text-5xl text-cyan-400 mb-5 group-hover:scale-110 transition duration-300">
                {skill.icon}
              </div>

              <h3 className="font-bold text-lg text-center">
                {skill.name}
              </h3>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;