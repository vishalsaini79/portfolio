import { useState } from "react";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaInstagram,
} from "react-icons/fa";
import axios from "axios";

function Contact() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const contactInfo = [

    {
      icon: <FaEnvelope />,
      title: "Email",
      value: "sainivishal8954@gmail.com",
      link: "mailto:sainivishal8954@gmail.com",
    },

    {
      icon: <FaPhoneAlt />,
      title: "Phone",
      value: "+91 9627749484",
      link: "tel:+919627749484",
    },

    {
      icon: <FaInstagram />,
      title: "Instagram",
      value: "https://instagram.com/vishal_saini_18",
      link: "https://instagram.com/vishal_saini_18",
    },

  ];

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

const handleSubmit = async (e) => {

  e.preventDefault();

  if (
    !formData.name ||
    !formData.email ||
    !formData.message
  ) {
    setStatus("Please fill all fields.");
    return;
  }

  try {

    setStatus("Sending...");

    const response = await axios.post(
      "https://portfolio-kfm0.onrender.com/api/contact",
      formData,
      {
        timeout: 15000,
      }
    );

    if (response.data.success) {

      setStatus("Message sent successfully!");

      setFormData({
        name: "",
        email: "",
        message: "",
      });

    } else {

      setStatus("Failed to send message.");

    }

  } catch (error) {

    setStatus(
      "Server is waking up... Please try again in a few seconds."
    );

  }

};

  return (

    <section
      id="contact"
      className="bg-slate-950 text-white px-6 py-20"
    >

      <div className="max-w-7xl mx-auto">

        {/* HEADING */}
        <div className="mb-12">

          <p className="text-cyan-400 text-lg font-semibold mb-3">
            Contact Me
          </p>

          <h2 className="text-4xl md:text-5xl font-black leading-tight">

            Let&apos;s work{" "}

            <span className="text-cyan-400">
              together
            </span>

          </h2>

          <p className="text-gray-400 mt-5 max-w-2xl text-lg leading-8">

            I am open to Software Engineer,
            MERN Stack Developer and
            Full Stack Developer opportunities.

          </p>

        </div>

        {/* MAIN GRID */}
        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="space-y-6"
          >

            {contactInfo.map((item) => (

              <div
                key={item.title}
                className="group bg-slate-900/70 border border-cyan-400/20 rounded-3xl p-7 hover:border-cyan-400 hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-400/20 transition duration-300"
              >

                <div className="flex items-center gap-4 mb-4">

                  <div className="bg-cyan-400/10 text-cyan-400 text-2xl p-4 rounded-2xl group-hover:bg-cyan-400 group-hover:text-slate-950 transition duration-300">

                    {item.icon}

                  </div>

                  <h3 className="text-2xl font-bold">
                    {item.title}
                  </h3>

                </div>

                <a
                  href={item.link}
                  target="_blank"
                  rel="noreferrer"
                  className="text-gray-300 hover:text-cyan-400 transition break-all"
                >

                  {item.value}

                </a>

              </div>

            ))}

          </motion.div>

          {/* RIGHT */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="bg-slate-900/70 border border-white/10 rounded-3xl p-8 space-y-5"
          >

            <div>

              <label className="block mb-3 text-gray-300">
                Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                className="w-full bg-slate-950/70 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

            </div>

            <div>

              <label className="block mb-3 text-gray-300">
                Email
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                className="w-full bg-slate-950/70 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400"
              />

            </div>

            <div>

              <label className="block mb-3 text-gray-300">
                Message
              </label>

              <textarea
                name="message"
                rows="6"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                className="w-full bg-slate-950/70 border border-white/10 rounded-2xl px-5 py-4 outline-none focus:border-cyan-400 resize-none"
              ></textarea>

            </div>

            <button
              type="submit"
              className="w-full bg-cyan-400 text-slate-950 py-4 rounded-2xl font-bold hover:bg-cyan-300 transition"
            >

              Send Message

            </button>

            {status && (

              <p className="text-center text-cyan-400 font-medium">
                {status}
              </p>

            )}

          </motion.form>

        </div>

      </div>

    </section>

  );

}

export default Contact;
