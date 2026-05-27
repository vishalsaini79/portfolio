import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaDownload } from "react-icons/fa6";
import developerImg from "../assets/imagu.png";
import { TypeAnimation } from "react-type-animation";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center bg-slate-950 text-white px-6 pt-10"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-14 items-center">
        
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="inline-block bg-cyan-400/10 border border-cyan-400/30 text-cyan-400 px-5 py-2 rounded-full text-sm mb-6">
            Open to Software Engineer Roles
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">
            Hi, I'm{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Vishal Saini
            </span>
          </h1>

          <TypeAnimation
          sequence={[
          "Full Stack Developer",
          1500,
          "MERN Stack Developer",
          1500,
          "Java & DSA Enthusiast",
          1500,
          ]}
          wrapper="span"
          speed={20}
          repeat={Infinity}
          className="text-2xl md:text-3xl font-bold text-cyan-400 mt-5 block"
          />

          <p className="text-gray-300 text-lg mt-6 leading-8 max-w-xl">
            I build scalable full-stack web applications using React.js,
            Node.js, Express.js and MongoDB, with strong problem-solving
            skills in Java and Data Structures & Algorithms.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-400 text-slate-950 px-7 py-3 rounded-full font-bold hover:bg-cyan-300 transition"
            >
              View Projects
            </a>

            <a
             href="/resume.pdf"
             download="Vishal_Saini_Resume.pdf"
            onClick={() => {
            console.log("Resume Downloaded");
            }}
            className="border border-cyan-400 text-cyan-400 px-7 py-3 rounded-full font-bold hover:bg-cyan-400 hover:text-slate-950 transition flex items-center gap-2 shadow-lg shadow-cyan-400/20"
              >
          <FaDownload />
           Download Resume
          </a>
          </div>

          
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex justify-center"
        >
          <div className="relative">
            <div className="absolute inset-0 bg-cyan-400 blur-3xl opacity-20 rounded-full"></div>

            <img
  src={developerImg}
  alt="developer"
  className="relative w-[360px] md:w-[400px] drop-shadow-2xl"
/>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default Hero;