"use client";

import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaJava,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiVscodium,
  SiIntellijidea,
  SiCplusplus,
  SiVsco,
} from "react-icons/si";


const skillCategories = [
  {
    title: "Programming Languages",
    skills: [
      { name: "C", icon: <span className="text-4xl font-bold">C</span> },
      { name: "C++", icon: <SiCplusplus /> },
      { name: "Java", icon: <FaJava /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },

  {
    title: "Frontend",
    skills: [
      { name: "HTML5", icon: <FaHtml5 /> },
      { name: "CSS3", icon: <FaCss3Alt /> },
      { name: "React", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },

  {
    title: "Backend",
    skills: [
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <SiExpress /> },
      { name: "MongoDB", icon: <SiMongodb /> },
    ],
  },

  {
    title: "Tools",
    skills: [
      { name: "Git", icon: <FaGitAlt /> },
      { name: "GitHub", icon: <FaGithub /> },
      { name: "VS Code", icon: <SiVscodium /> },
      { name: "Intellij", icon: <SiIntellijidea /> },
    ],
  },
];


const Skills = () => {
  return (
    <section
      id="skills"
      className=" relative min-h-screen bg-black px-5 py-24 overflow-hidden "
    >

      {/* Background Gradient */}
      <div
        className=" absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black"
      />


      <div className="relative z-10 max-w-6xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2
            className=" text-4xl md:text-5xl font-bold text-white"
          >
            My <span className="text-purple-500">Skills</span>
          </h2>

          <p className="mt-4 text-gray-400">
            Technologies and tools I use to build modern applications.
          </p>
        </motion.div>



        {/* Categories */}
        <div
          className="mt-14 space-y-14 "
        >

          {skillCategories.map((category, index) => (

            <motion.div
              key={category.title}

              initial={{
                opacity: 0,
                y: 60,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

            >

              <h3
                className="
                text-2xl
                font-semibold
                text-purple-400
                text-center
                mb-7"
              >
                {category.title}
              </h3>



              <div
                className="
                flex
                flex-wrap
                justify-center
                gap-6
                "
              >

                {category.skills.map((skill, i) => (

                 <motion.div
  key={skill.name}

  initial={{
    opacity: 0,
    scale: 0.7,
    y: 30,
  }}

  whileInView={{
    opacity: 1,
    scale: 1,
    y: 0,
  }}

//   transition={{
//     duration: 0.5,
//     delay: i * 0.08,
//   }}

  viewport={{
    once: true,
  }}

  animate={{
    y: [0, -8, 0],
  }}

  transition={{
    y: {
      duration: 3,
      repeat: Infinity,
      ease: "easeInOut",
    },
    opacity: {
      duration: 0.5,
      delay: i * 0.08,
    },
    scale: {
      duration: 0.5,
      delay: i * 0.08,
    },
  }}

  whileHover={{
    y: -12,
    scale: 1.1,
  }}

  className="group w-28 h-28 rounded-2xl bg-[#0a0a0a] border border-purple-500/30 flex flex-col items-center justify-center gap-3 shadow-[0_0_25px_rgba(168,85,247,0.2)] hover:shadow-[0_0_45px_rgba(168,85,247,0.6)] transition-all"
>
  <div
    className="
      text-4xl
      text-purple-500
      group-hover:text-purple-400
      transition
    "
  >
    {skill.icon}
  </div>

  <p
    className="
      text-xs
      text-gray-400
      text-center
    "
  >
    {skill.name}
  </p>

</motion.div>

                ))}

              </div>

            </motion.div>

          ))}

        </div>

      </div>

    </section>
  );
};

export default Skills;