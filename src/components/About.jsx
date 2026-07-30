"use client";

import { motion } from "framer-motion";
import { Code2, Laptop, Sparkles } from "lucide-react";

const aboutCards = [
  {
    icon: <Code2 size={35} />,
    title: "Programming Journey",
    points: [
      "Started with C programming and problem solving.",
      "Explored C++ and Data Structures.",
      "Currently learning modern web development.",
    ],
  },
  {
    icon: <Laptop size={35} />,
    title: "What I Build",
    points: [
      "Responsive and user-friendly web applications.",
      "Modern UI with React & Next.js.",
      "Real-world full-stack projects.",
    ],
  },
  {
    icon: <Sparkles size={35} />,
    title: "Beyond Coding",
    points: [
      "Exploring new technologies.",
      "Learning and improving every day.",
      "Creative thinking and personal growth.",
    ],
  },
];

const About = () => {
  return (
    <section
      id="about"
      className="relative min-h-screen px-5 py-24 overflow-hidden bg-black"
    >
      {/* Gradient Background */}
      <div
        className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black"
      ></div>


      <div className="relative z-10 flex flex-col items-center">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="max-w-3xl text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            About <span className="text-purple-500">Me</span>
          </h2>

          <p className="mt-6 text-gray-400 text-lg leading-relaxed">
            I am a Computer Science and Engineering student passionate about
            software development and building modern digital experiences.
            My journey focuses on learning new technologies, solving problems,
            and creating impactful applications with clean and efficient code.
          </p>
        </motion.div>


        {/* Cards */}
        <div
          className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl w-full justify-items-center"
        >
          {aboutCards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group w-full max-w-sm rounded-2xl p-[1px] bg-gradient-to-br from-purple-500 via-purple-700 to-transparent"
            >
              <div
                className="h-full rounded-2xl bg-[#0a0a0a] p-7 shadow-[0_0_30px_rgba(168,85,247,0.25)] group-hover:shadow-[0_0_45px_rgba(168,85,247,0.5)] transition-all"
              >

                {/* Icon */}
                <div
                  className="mx-auto w-fit text-purple-500 mb-5"
                >
                  {card.icon}
                </div>


                <h3
                  className="text-xl font-semibold text-white text-center"
                >
                  {card.title}
                </h3>


                <ul
                  className="mt-5 space-y-3 text-gray-400 text-sm"
                >
                  {card.points.map((point, i) => (
                    <li
                      key={i}
                      className="flex gap-2 items-start"
                    >
                      <span className="text-purple-500">
                        ✦
                      </span>
                      {point}
                    </li>
                  ))}
                </ul>

              </div>
            </motion.div>
          ))}
        </div>

        {/* Philosophy Section */}
<motion.div
  initial={{ opacity: 0, scale: 0.9 }}
  whileInView={{ opacity: 1, scale: 1 }}
  transition={{ duration: 0.8 }}
  viewport={{ once: true }}
  className="mt-20 text-center max-w-3xl px-6"
>
  <h3
    className="text-2xl md:text-3xl font-bold text-white"
  >
    My <span className="text-purple-500">Philosophy</span>
  </h3>

  <motion.div
    animate={{
      y: [0, -8, 0],
    }}
    transition={{
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="mt-6 relative rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-purple-700 to-purple-500 shadow-[0_0_35px_rgba(168,85,247,0.35)]"
  >
    <div
      className="
        rounded-2xl
        bg-[#0a0a0a]
        px-8
        py-8
      "
    >
      <p
        className="text-xl md:text-2xl font-medium italic bg-gradient-to-r from-purple-400 to-purple-600 bg-clip-text text-transparent"
      >
        "Always learning, always building."
      </p>

      <p
        className="mt-4 text-gray-400 text-sm md:text-base"
      >
        I believe every challenge is an opportunity to learn, grow,
        and create something meaningful.
      </p>
    </div>
  </motion.div>
</motion.div>

      </div>
    </section>
  );
};

export default About;