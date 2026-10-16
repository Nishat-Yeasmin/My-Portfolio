"use client";

import { motion } from "framer-motion";
import {
  PanelsTopLeft,
  Code2,
  Smartphone,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const services = [
  {
    icon: PanelsTopLeft,
    title: "Frontend Development",
    description:
      "Building clean, modern, and interactive user interfaces using React and Next.js.",
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
  {
    icon: Code2,
    title: "Full Stack Development",
    description:
      "Developing web applications with frontend interfaces, backend APIs, and database integration.",
    tags: ["JavaScript", "Node.js", "Express.js"],
  },
  {
    icon: Smartphone,
    title: "Responsive Web Design",
    description:
      "Creating responsive websites that work smoothly across mobile, tablet, and desktop screens.",
    tags: ["Responsive UI", "CSS", "Tailwind CSS"],
  },
  {
    icon: Wrench,
    title: "Website Maintenance",
    description:
      "Updating website content, fixing UI issues, improving layouts, and maintaining existing websites.",
    tags: ["Bug Fixes", "UI Updates", "Optimization"],
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="relative overflow-hidden bg-black py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            What I Can Do
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            My{" "}
            <span className="text-purple-500">Services</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            I build practical, responsive web experiences with a
            focus on usability, clean design, and functionality.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -6 }}
                className="group rounded-2xl border border-purple-500/20 bg-[#090909] p-7 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.12)] md:p-8"
              >
                <div className="flex items-start justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="text-gray-600 transition group-hover:text-purple-400"
                  />
                </div>

                <h3 className="mt-6 text-xl font-bold text-white md:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-3 leading-7 text-gray-400">
                  {service.description}
                </p>

                <div className="mt-6 flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg border border-purple-500/20 bg-purple-500/[0.06] px-3 py-1.5 text-xs text-purple-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mt-12 text-center"
        >
          <p className="text-gray-400">
            Have a project in mind?
          </p>

          <a
            href="#contact"
            className="mt-4 inline-flex items-center gap-2 rounded-xl bg-purple-600 px-7 py-3 font-semibold text-white transition hover:bg-purple-500 hover:shadow-[0_0_25px_rgba(168,85,247,0.3)]"
          >
            Let's Work Together
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </div>
    </section>
  );
}