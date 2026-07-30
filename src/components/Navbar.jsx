"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt3, HiX } from "react-icons/hi";
import { FiDownload } from "react-icons/fi";

const links = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 40);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scroll
          ? "bg-black/90 backdrop-blur-xl border-b border-purple-600/40 shadow-[0_0_30px_rgba(168,85,247,0.25)]"
          : "bg-black/70 backdrop-blur-md border-b border-purple-600/20"
      }`}
    >

      <div className="max-w-7xl mx-auto px-5 h-20 flex items-center justify-between">

        {/* Logo */}

        <a href="#home" className="flex items-center gap-3">

          <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-purple-500 shadow-[0_0_20px_rgba(168,85,247,0.6)]">

            <img
              src="/profile.jpg"
              alt="Nishat Yeasmin"
              className="w-full h-full object-cover"
            />

          </div>


          <h1 className="text-2xl md:text-3xl font-bold">
            <span className="text-white">
              Nishat Yeasmin
            </span>
          </h1>

        </a>


        {/* Desktop Menu */}

        <ul className="hidden md:flex items-center gap-10">

          {links.map((link) => (
            <li key={link.name}>

              <a
                href={link.href}
                className="group relative cursor-pointer text-gray-300 hover:text-purple-400 transition duration-300"
              >

                {link.name}

                <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />

              </a>

            </li>
          ))}

        </ul>


        {/* Resume */}

        <a
          href="/resume.pdf"
          download
          className="hidden md:flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 hover:from-purple-500 hover:to-purple-700 text-white shadow-[0_0_25px_rgba(168,85,247,0.5)] transition-all duration-300"
        >

          <FiDownload size={18} />

          Resume

        </a>


        {/* Mobile Button */}

        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-3xl cursor-pointer"
        >

          {open ? <HiX /> : <HiMenuAlt3 />}

        </button>


      </div>



      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-black border-t border-purple-600/40 shadow-[0_10px_30px_rgba(168,85,247,0.2)]"
        >

          <ul className="flex flex-col items-center gap-7 py-8">

            {links.map((link) => (

              <li key={link.name}>

                <a
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="group relative cursor-pointer text-gray-300 hover:text-purple-400 transition"
                >

                  {link.name}

                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-purple-500 group-hover:w-full transition-all duration-300" />

                </a>

              </li>

            ))}


            <a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 rounded-full bg-gradient-to-r from-purple-600 to-purple-800 text-white"
            >

              <FiDownload />

              Resume

            </a>


          </ul>


        </motion.div>

      )}


    </motion.nav>
  );
}