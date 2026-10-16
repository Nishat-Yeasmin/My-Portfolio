"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { projects } from "@/data/projects";
import { motion } from "framer-motion";
import { ArrowUpRight, Code2, ExternalLink } from "lucide-react";

export default function AllProjects() {
  const [filter, setFilter] = useState("All");

  const filters = [
    { label: "All Projects", value: "All" },
    { label: "Personal Projects", value: "Personal" },
    { label: "Team Projects", value: "Team" },
  ];

const filteredProjects = projects
  .filter((project) => {
    if (filter === "All") return true;

    const projectType = project.type || "Personal";
    return projectType === filter;
  })
  .sort((a, b) => {
    if (a.type === "Team" && b.type !== "Team") return -1;
    if (a.type !== "Team" && b.type === "Team") return 1;
    return 0;
  });

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
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold sm:text-5xl">
            All{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h1>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Explore my personal projects and collaborative
            work built with modern web technologies.
          </p>
        </motion.div>

        {/* Category Filters */}
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {filters.map((item) => {
            const count = projects.filter(
              (project) =>
                item.value === "All" ||
                (project.type || "Personal") === item.value
            ).length;

            return (
              <button
                key={item.value}
                onClick={() => setFilter(item.value)}
                className={`cursor-pointer rounded-xl border px-5 py-3 text-sm font-medium transition-all duration-300 ${
                  filter === item.value
                    ? "border-purple-500 bg-purple-600 text-white shadow-lg shadow-purple-900/30"
                    : "border-purple-500/30 bg-purple-500/5 text-gray-400 hover:border-purple-500 hover:text-white"
                }`}
              >
                {item.label}
                <span className="ml-2 opacity-75">
                  ({count})
                </span>
              </button>
            );
          })}
        </div>

        {/* Project Cards */}
        <div className="mt-14 grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const isTeam = project.type === "Team";

            return (
              <motion.article
                key={project.id}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.08,
                  ease: "easeOut",
                }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -12 }}
                className="group rounded-3xl bg-gradient-to-br from-purple-600 via-purple-500 to-purple-900 p-[1px]"
              >
                <div className="h-full overflow-hidden rounded-3xl bg-[#090909] shadow-[0_0_35px_rgba(168,85,247,.25)] transition-all duration-300 group-hover:shadow-[0_0_55px_rgba(168,85,247,.55)]">

                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      fill
                      className="object-cover transition duration-500 group-hover:scale-110"
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

                    {/* Category Badge */}
                    <span
                      className={`absolute left-4 top-4 rounded-full border px-3 py-1 text-xs font-semibold backdrop-blur-md ${
                        isTeam
                          ? "border-blue-400/40 bg-blue-950/80 text-blue-300"
                          : "border-purple-400/40 bg-purple-950/80 text-purple-300"
                      }`}
                    >
                      {isTeam ? "Team Project" : "Personal Project"}
                    </span>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h2 className="text-2xl font-bold text-white">
                      {project.name}
                    </h2>

                    <p className="mt-3 line-clamp-3 leading-6 text-gray-400">
                      {project.shortDescription}
                    </p>

                    {/* Technologies */}
                    <div className="mt-4 flex flex-wrap gap-2">
                      {project.technologies?.slice(0, 4).map((tech) => (
                        <span
                          key={tech}
                          className="rounded-lg border border-purple-500/20 bg-purple-500/10 px-2.5 py-1 text-xs text-purple-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies?.length > 4 && (
                        <span className="rounded-lg bg-white/5 px-2.5 py-1 text-xs text-gray-400">
                          +{project.technologies.length - 4}
                        </span>
                      )}
                    </div>

                    {/* Team Project Links */}
                    {isTeam && (
                      <div className="mt-5 flex flex-wrap gap-x-4 gap-y-2">
                        <a
                          href={project.live}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-purple-300 transition hover:text-purple-200"
                        >
                          Client Demo
                          <ExternalLink size={14} />
                        </a>

                        <a
                          href={project.adminLive}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-purple-300 transition hover:text-purple-200"
                        >
                          Admin Demo
                          <ExternalLink size={14} />
                        </a>

                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-1.5 text-sm text-purple-300 transition hover:text-purple-200"
                        >
                          GitHub
                          <Code2 size={14} />
                        </a>
                      </div>
                    )}

                    {/* Details Button */}
                    <Link
                      href={`/projects/${project.id}`}
                      className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 py-3 font-semibold text-white transition hover:shadow-[0_0_25px_rgba(168,85,247,.6)]"
                    >
                      View Details
                      <ArrowUpRight size={17} />
                    </Link>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        {/* Empty State */}
        {filteredProjects.length === 0 && (
          <p className="mt-16 text-center text-gray-400">
            No projects found in this category yet.
          </p>
        )}
      </div>
    </main>
  );
}