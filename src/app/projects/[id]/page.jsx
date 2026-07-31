"use client";

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink} from "lucide-react";
import { projects } from "@/data/projects";
import { FaGithub } from "react-icons/fa";

export default async function ProjectDetails({ params }) {
  const { id } = await params;

  const project = projects.find((item) => item.id === id);

  if (!project) {
    notFound();
  }

  return (
    <section className="relative min-h-screen overflow-hidden bg-black py-24">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="relative z-10 mx-auto max-w-6xl px-5">

        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link
            href="/#projects"
            className="mb-8 inline-flex items-center gap-2 text-purple-400 transition hover:text-purple-300"
          >
            <ArrowLeft size={20} />
            Back to Projects
          </Link>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: .6 }}
          className="overflow-hidden rounded-3xl border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,.25)]"
        >
          <Image
            src={project.image}
            alt={project.name}
            width={1400}
            height={700}
            className="w-full object-cover"
            priority
          />
        </motion.div>

        {/* Project Name */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .2 }}
          className="mt-10 text-4xl font-bold text-white md:text-5xl"
        >
          {project.name}
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .35 }}
          className="mt-6 text-lg leading-8 text-gray-400"
        >
          {project.description}
        </motion.p>

        {/* Technology Stack */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: .5 }}
          className="mt-12"
        >
          <h2 className="mb-5 text-2xl font-bold text-white">
            Technology Stack
          </h2>

          <div className="flex flex-wrap gap-4">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-purple-500/30 bg-purple-500/10 px-5 py-2 text-sm text-purple-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Links */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: .7 }}
          className="mt-12 flex flex-wrap gap-5"
        >
          <Link
            href={project.live}
            target="_blank"
            className="flex items-center gap-2 rounded-xl bg-gradient-to-r from-purple-600 to-purple-500 px-6 py-3 font-semibold text-white transition hover:shadow-[0_0_25px_rgba(168,85,247,.5)]"
          >
            <ExternalLink size={20} />
            Live Project
          </Link>

          <Link
            href={project.github}
            target="_blank"
            className="flex items-center gap-2 rounded-xl border border-purple-500/30 px-6 py-3 text-white transition hover:bg-purple-600"
          >
            <FaGithub size={20} />
            GitHub
          </Link>
        </motion.div>

        {/* Challenges & Future */}
        <div className="mt-16 grid gap-8 lg:grid-cols-2">

          {/* Challenges */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-purple-500/20 bg-[#090909] p-8 shadow-[0_0_30px_rgba(168,85,247,.2)]"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">
              Challenges Faced
            </h2>

            <ul className="space-y-4">
              {project.challenges.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-400">
                  <span className="text-purple-500">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Future */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-3xl border border-purple-500/20 bg-[#090909] p-8 shadow-[0_0_30px_rgba(168,85,247,.2)]"
          >
            <h2 className="mb-6 text-2xl font-bold text-white">
              Future Improvements
            </h2>

            <ul className="space-y-4">
              {project.future.map((item, index) => (
                <li key={index} className="flex gap-3 text-gray-400">
                  <span className="text-purple-500">✦</span>
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

        </div>

      </div>
    </section>
  );
}