"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { projects } from "@/data/projects";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden bg-black py-24"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            My <span className="text-purple-500">Projects</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Here are some of the projects I've built using modern web
            technologies. Each project reflects my learning journey and
            passion for creating user-friendly applications.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.slice(0,3).map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: .6,
                delay: index * .15,
              }}
              viewport={{
                once: true,
              }}
              whileHover={{
                y: -12,
              }}
              className="group rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-900 p-[1px]"
            >

              <div
                className="
                h-full
                rounded-3xl
                bg-[#090909]
                overflow-hidden
                shadow-[0_0_35px_rgba(168,85,247,.25)]
                group-hover:shadow-[0_0_55px_rgba(168,85,247,.55)]
                transition-all
                duration-300
                "
              >

                {/* Image */}

                <div className="relative h-56 overflow-hidden">

                  <Image
                    src={project.image}
                    alt={project.name}
                    fill
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                </div>

                {/* Content */}

                <div className="p-6">

                  <h3 className="text-2xl font-bold text-white">
                    {project.name}
                  </h3>

                  <p className="mt-3 text-gray-400 line-clamp-3">
                    {project.shortDescription}
                  </p>

                  <Link href={`/projects/${project.id}`}>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: .95,
                      }}
                      className="
                      mt-6
                      w-full
                      rounded-xl
                      bg-gradient-to-r
                      from-purple-600
                      to-purple-500
                      py-3
                      font-semibold
                      text-white
                      transition
                      hover:shadow-[0_0_25px_rgba(168,85,247,.6)]
                      "
                    >
                      View Details
                    </motion.button>

                  </Link>

                </div>

              </div>

            </motion.div>

          ))}

        </div>

        {/* View All Projects Button */}
<motion.div
  initial={{ opacity: 0, y: 25 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true }}
  transition={{ duration: 0.6, delay: 0.3 }}
  className="mt-12 flex justify-center"
>
  <Link
    href="/projects"
    className="group inline-flex items-center gap-2 rounded-lg border border-purple-600/60 bg-purple-600/10 px-7 py-3 text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-500 hover:bg-purple-600/20 hover:text-purple-200 hover:shadow-[0_0_25px_rgba(168,85,247,0.25)]"
  >
    View All Projects

    <ArrowUpRight
      size={17}
      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
    />
  </Link>
</motion.div>

      </div>
    </section>
  );
}