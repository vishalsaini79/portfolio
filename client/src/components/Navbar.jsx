import { FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa6";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = ["Home", "About", "Skills", "Projects", "Education", "Contact"];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-slate-950/70 backdrop-blur-lg border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-white">
          Vishal<span className="text-cyan-400"> Saini</span>
        </a>

        <div className="hidden md:flex gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-gray-300 hover:text-cyan-400 transition"
            >
              {link}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">

  {/* <a
    href="https://github.com/vishalsaini79"
    target="_blank"
    className="text-gray-300 hover:text-cyan-400 transition text-xl"
  >
    <FaGithub />
  </a>

  <a
    href="https://linkedin.com/in/vishalsaini"
    target="_blank"
    className="text-gray-300 hover:text-cyan-400 transition text-xl"
  >
    <FaLinkedin />
  </a> */}

  {/* <a
    href="/resume.pdf"
    download
    className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition"
  >
    Resume
  </a> */}

  <a
  href="/resume.pdf"
  target="_blank"
  className="bg-cyan-400 text-slate-950 px-5 py-2 rounded-full font-semibold hover:bg-cyan-300 transition"
  // className="border border-cyan-400 text-cyan-400 px-5 py-2 rounded-full font-semibold hover:bg-cyan-400 hover:text-slate-950 transition"
>
  Resume
</a>

</div>

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {open && (
        <div className="md:hidden bg-slate-900 border-t border-white/10 px-6 py-4 space-y-4">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="block text-gray-300 hover:text-cyan-400"
              onClick={() => setOpen(false)}
            >
              {link}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}

export default Navbar;