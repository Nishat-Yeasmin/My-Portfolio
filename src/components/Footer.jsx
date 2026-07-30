"use client";

import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaFacebook,
} from "react-icons/fa";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Education", href: "#education" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-purple-500/20 bg-black">

      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-purple-950/20 via-black to-black"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-5 py-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="flex flex-col items-center gap-8"
        >

          {/* Logo / Name */}
          <div className="text-center">
            <h2 className="text-2xl font-bold text-white">
              Nishat <span className="text-purple-500">Yeasmin</span>
            </h2>

            <p className="mt-2 text-gray-400 text-sm">
              Building modern web experiences with creativity and clean code.
            </p>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap justify-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-400 hover:text-purple-500 transition duration-300"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-5">

            <motion.a
              whileHover={{ y: -5, scale: 1.15 }}
              href="https://github.com/yourusername"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-purple-500 transition"
            >
              <FaGithub />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.15 }}
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-purple-500 transition"
            >
              <FaLinkedin />
            </motion.a>

            <motion.a
              whileHover={{ y: -5, scale: 1.15 }}
              href="https://facebook.com/yourusername"
              target="_blank"
              className="text-2xl text-gray-400 hover:text-purple-500 transition"
            >
              <FaFacebook />
            </motion.a>

          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

          {/* Copyright */}
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} Nishat Yeasmin. All Rights Reserved.
          </p>

        </motion.div>

      </div>
    </footer>
  );
}