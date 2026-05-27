import { motion } from "framer-motion";

function About() {
  const highlights = [
    {
      icon: "🚀",
      title: "Projects",
      value: "6+ Full Stack Projects",
    },
    {
      icon: "💻",
      title: "LeetCode",
      value: "400+ Problems Solved",
    },
    {
      icon: "⚡",
      title: "Development",
      value: "MERN & REST APIs",
    },
    {
      icon: "🌐",
      title: "Deployment",
      value: "Vercel & Render",
    },
  ];

  const quickInfo = [
  ["Name", "Vishal Saini"],
  ["Location", "Noida, India"],
  ["Education", "B.Tech CSE"],
  ["College", "JSSATE Noida"],
  ["Tech Stack", "MERN Stack"],
  ["Goal", "Software Engineer"],
  ["Status", "Open to Work"],
  ];

  return (
    <section
      id="about"
      className="bg-slate-950 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <p className="text-cyan-400 text-lg font-semibold mb-3">
            About Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight max-w-3xl">
            Turning ideas into{" "}
            <span className="text-cyan-400">
              scalable full-stack products
            </span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 bg-slate-900/70 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-5">
              Who I Am
            </h3>

            <p className="text-gray-300 text-lg leading-8">
          I am Vishal Saini, a passionate Full Stack Developer
          and B.Tech Computer Science student at JSS Academy
          of Technical Education, Noida. I specialize in building
          modern, scalable and responsive web applications using
          the MERN stack.
          </p>

          <p className="text-gray-400 text-lg leading-8 mt-4">
          Along with development, I actively solve Data Structures
          & Algorithms problems in Java and enjoy transforming
          real-world ideas into impactful digital products through
          clean UI, efficient backend systems and API integrations.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
              {highlights.map((item) => (
                <div
                  key={item.title}
                  className="bg-slate-950/70 border border-white/10 rounded-2xl p-5 hover:border-cyan-400 hover:-translate-y-1 transition duration-300"
                >
                  <div className="text-4xl mb-3">
                    {item.icon}
                  </div>

                  <h4 className="text-lg font-bold">
                    {item.title}
                  </h4>

                  <p className="text-sm text-gray-400 mt-1 leading-6">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="bg-slate-900/70 border border-white/10 rounded-3xl p-8"
          >
            <h3 className="text-3xl font-bold mb-6">
              Quick Info
            </h3>

            <div className="space-y-5 text-base">
              {quickInfo.map(([label, value], index) => (
                <div
                  key={label}
                  className={`flex justify-between gap-6 ${
                    index !== quickInfo.length - 1
                      ? "border-b border-white/10 pb-3"
                      : "items-center"
                  }`}
                >
                  <span className="text-gray-400">
                    {label}
                  </span>

                  {label === "Status" ? (
                    <span className="bg-cyan-400/10 border border-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full font-semibold text-sm">
                      {value}
                    </span>
                  ) : (
                    <span className="text-white font-semibold text-right">
                      {value}
                    </span>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export default About;