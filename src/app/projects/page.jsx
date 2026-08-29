"use client";

import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";

export default function AllProjects() {
  return (
    <main className="min-h-screen bg-black px-5 py-24 text-white">

      <div className="mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          href="/#projects"
          className="mb-10 inline-block text-gray-400 transition hover:text-purple-400"
        >
          ← Back to Home
        </Link>

        {/* Heading */}
        <h1 className="mb-12 text-center text-4xl font-bold sm:text-5xl">
          All{" "}
          <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
            Projects
          </span>
        </h1>

        {/* All Project Cards */}
        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">

          {projects.map((project, index) => (

            <motion.div
              key={project.id}
              initial={{
                opacity: 0,
                y: 35,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                duration: 0.8,
                delay: index * 0.08,
                ease: "easeOut",
              }}
              viewport={{
                once: true,
                amount: 0.1,
              }}
              whileHover={{
                y: -12,
              }}
              className="group rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-900 p-[1px]"
            >

              <div
                className="
                  h-full
                  overflow-hidden
                  rounded-3xl
                  bg-[#090909]
                  shadow-[0_0_35px_rgba(168,85,247,.25)]
                  transition-all
                  duration-300
                  group-hover:shadow-[0_0_55px_rgba(168,85,247,.55)]
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

                  <p className="mt-3 line-clamp-3 text-gray-400">
                    {project.shortDescription}
                  </p>

                  <Link href={`/projects/${project.id}`}>

                    <motion.button
                      whileHover={{
                        scale: 1.05,
                      }}
                      whileTap={{
                        scale: 0.95,
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

      </div>

    </main>
  );
}