"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import Link from "next/link";
import {
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
} from "react-icons/fi";

const textAnimation = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
    },
  },
};

export default function Hero() {

  const roles = ["Full-Stack Web Developer", "Competitive Programmer"];
const [roleIndex, setRoleIndex] = useState(0);

useEffect(() => {
  const interval = setInterval(() => {
    setRoleIndex((prev) => (prev + 1) % roles.length);
  }, 2500);

  return () => clearInterval(interval);
}, []);

  return (
    <section
      id="home"
      className="min-h-screen bg-black text-white flex items-center overflow-hidden py-24"
    >
      <div className="max-w-7xl mx-auto px-5 flex flex-col-reverse md:grid md:grid-cols-2 gap-12 items-center">

        {/* TEXT SECTION */}

        <motion.div
          initial="hidden"
          animate="show"
          variants={{
            hidden: {},
            show: {
              transition: {
                staggerChildren: 0.2,
              },
            },
          }}
        >

          <motion.span
            variants={textAnimation}
            className="inline-block px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/40 text-purple-400 text-sm"
          >
            ✨ Available for Opportunities
          </motion.span>


          <motion.h1
            variants={textAnimation}
            className="text-4xl md:text-6xl font-bold mt-5 leading-tight"
          >
            Hi, I'm
            <span className="text-purple-500"> Nishat Yeasmin</span>
          </motion.h1>


        <motion.h2
  variants={textAnimation}
  className="text-2xl md:text-4xl font-semibold mt-4 h-12 md:h-14 overflow-hidden"
>
  <AnimatePresence mode="wait">
    <motion.span
      key={roleIndex}
      initial={{ opacity: 0, y: 25 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -25 }}
      transition={{ duration: 0.5 }}
      className="inline-block text-purple-500"
    >
      {roles[roleIndex]}
    </motion.span>
  </AnimatePresence>
</motion.h2>

          <motion.p
            variants={textAnimation}
            className="text-gray-400 mt-6 max-w-xl leading-7"
          >
            I build modern, responsive and scalable web applications using
            React, Next.js, Node.js, Express.js and MongoDB. Passionate about
            creating clean UI and solving real-world problems.
          </motion.p>


          <motion.div
            variants={textAnimation}
            className="flex flex-wrap gap-5 mt-8"
          >

            <motion.a
              whileHover={{ scale: 1.05 }}
              href="#projects"
              className="relative rounded-full overflow-hidden group"
            >
              <span className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-purple-900 animate-pulse" />

              <span className="relative block px-7 py-3 rounded-full m-[2px] bg-purple-600 group-hover:bg-purple-700 transition">
                View Projects
              </span>

            </motion.a>


            <motion.a
              whileHover={{ scale: 1.05 }}
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-7 py-3 rounded-full border-2 border-purple-500 text-white hover:bg-purple-500/20 transition"
            >
              <FiDownload />
              Resume
            </motion.a>

          </motion.div>


          <motion.div
            variants={textAnimation}
            className="flex gap-5 mt-10"
          >

            {[ 
              { icon: <FiGithub />,
                Link: "https://github.com/Nishat-Yeasmin",
               },
              { icon: <FiLinkedin />,
                Link: "https://www.linkedin.com/in/nishatyeasmin"
               },
              { icon: <FiMail />,
                Link: "mailto:nishatyasminnisha@gmail.com"
               },
            ].map((item, index) => (

              <motion.a
                key={index}
                href={item.Link}
                target="_blank"
    rel="noopener noreferrer"
                whileHover={{
                  scale: 1.15,
                  rotate: 5,
                }}
                className="w-12 h-12 rounded-full bg-white border-2 border-purple-500 flex items-center justify-center text-black text-xl hover:text-purple-600 shadow-[0_0_15px_rgba(168,85,247,0.5)] transition"
              >
                {item.icon}
              </motion.a>

            ))}

          </motion.div>

        </motion.div>


        {/* IMAGE SECTION */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.7,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.8,
          }}
          className="flex justify-center"
        >

          <motion.div
            animate={{
              y: [0, -20, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative w-72 h-72 md:w-96 md:h-96"
          >

            <div className="absolute inset-0 rounded-full bg-purple-600/40 blur-3xl" />


            <Image
              src="/profile.jpg"
              alt="Nishat Yeasmin"
              fill
              priority
              sizes="(max-width: 768px) 288px, 384px"
              className="object-cover object-[center_1%] rounded-full border-4 border-purple-500 shadow-[0_0_50px_rgba(168,85,247,0.8)]"
            />

          </motion.div>

        </motion.div>

      </div>
    </section>
  );
}