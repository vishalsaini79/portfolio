import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-slate-950 border-t border-white/10 text-gray-400 px-6 py-6">
      <div className="max-w-7xl mx-auto">

        {/* TOP */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-5">

          {/* LOGO */}
          <div>

            <h2 className="text-white text-2xl font-black">
              Vishal<span className="text-cyan-400"> Saini</span>
            </h2>

            <p className="text-gray-500 mt-1 text-sm">
              Full Stack Developer
            </p>

          </div>

          {/* SOCIAL */}
          <div className="flex items-center gap-4">

            <a
              href="https://github.com/vishalsaini79"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 border border-white/10 p-3 rounded-xl text-lg hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaGithub />
            </a>

            <a
              href="https://www.linkedin.com/in/vishal-saini-4ba3b224a/"
              target="_blank"
              rel="noreferrer"
              className="bg-slate-900 border border-white/10 p-3 rounded-xl text-lg hover:border-cyan-400 hover:text-cyan-400 hover:-translate-y-1 transition duration-300"
            >
              <FaLinkedin />
            </a>

            <a
              href="#home"
              className="bg-cyan-400 text-slate-950 p-3 rounded-xl text-lg hover:bg-cyan-300 hover:-translate-y-1 transition duration-300"
            >
              <FaArrowUp />
            </a>

          </div>

        </div>

        {/* BOTTOM */}
        <div className="border-t border-white/10 mt-5 pt-4 flex flex-col md:flex-row items-center justify-between gap-3">

          <p className="text-xs text-gray-500 text-center">
            © 2026 Vishal Saini. All rights reserved.
          </p>

          <p className="text-xs text-gray-500 text-center">
            Built with React.js & Tailwind CSS
          </p>

        </div>

      </div>
    </footer>
  );
}

export default Footer;