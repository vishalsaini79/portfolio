import { motion } from "framer-motion";
import { FaGraduationCap } from "react-icons/fa";

function Education() {
  const education = [
    {
      degree: "B.Tech - Computer Science & Engineering",
      institute: "JSS Academy of Technical Education",
      location: "Noida, India",
      year: "2023 - 2026",
      score: "83.1%",
    },

    {
      degree: "Diploma - Computer Science & Engineering",
      institute: "Government Polytechnic Saharanpur",
      location: "Saharanpur, India",
      year: "2020 - 2023",
      score: "79.17%",
    },

    {
      degree: "Higher Secondary Education (12th)",
      institute: "Dellmond International School",
      location: "Saharanpur, India",
      year: "2019 - 2020",
      score: "87.8%",
    },

    {
      degree: "Secondary Education (10th)",
      institute: "Dellmond International School",
      location: "Saharanpur, India",
      year: "2017 - 2018",
      score: "88.6%",
    },
  ];

  return (
    <section
      id="education"
      className="bg-slate-950 text-white px-6 py-20"
    >
      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-12">

          <p className="text-cyan-400 text-lg font-semibold mb-3">
            Education
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">
            Academic{" "}
            <span className="text-cyan-400">
              Journey
            </span>
          </h2>

        </div>

        {/* EDUCATION CARDS */}
        <div className="space-y-8">

          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 hover:border-cyan-400 transition duration-300"
            >

              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">

                {/* LEFT */}
                <div className="flex gap-5">

                  <div className="bg-cyan-400/10 text-cyan-400 p-4 rounded-2xl text-2xl h-fit">
                    <FaGraduationCap />
                  </div>

                  <div>

                    <h3 className="text-2xl font-bold leading-snug">
                      {item.degree}
                    </h3>

                    <p className="text-cyan-400 mt-2 font-medium">
                      {item.institute}
                    </p>

                    <p className="text-gray-400 mt-1">
                      {item.location}
                    </p>

                  </div>

                </div>

                {/* RIGHT */}
                <div className="md:text-right">

                  <p className="text-lg font-semibold text-white">
                    {item.year}
                  </p>

                  <p className="text-cyan-400 mt-2 text-lg font-bold">
                    {item.score}
                  </p>

                </div>

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Education;