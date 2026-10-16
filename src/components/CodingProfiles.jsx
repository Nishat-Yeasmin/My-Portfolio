"use client";

import { motion } from "framer-motion";
import {
  Code2,
  Linkedin,
  ArrowUpRight,
  Trophy,
  Terminal,
} from "lucide-react";

const profiles = [
  {
    name: "GitHub",
    username: "Nishat-Yeasmin",
    description:
      "Explore my repositories, personal projects, and web development work.",
    url: "https://github.com/Nishat-Yeasmin",
    icon: Code2,
    label: "Source Code & Projects",
  },
  {
    name: "Codeforces",
    username: "Nishat_2004",
    description:
      "Follow my competitive programming practice and problem-solving journey.",
    url: "https://codeforces.com/profile/Nishat_2004",
    icon: Terminal,
    label: "Competitive Programming",
  },
  {
    name: "HackerRank",
    username: "nishatyasminnis1",
    description:
      "Explore my programming practice and technical problem-solving activities.",
    url: "https://www.hackerrank.com/profile/nishatyasminnis1",
    icon: Code2,
    label: "Programming Practice",
  },
  {
    name: "CodeChef",
    username: "nishatchef_70",
    description:
      "Visit my profile to explore my competitive programming journey.",
    url: "https://www.codechef.com/users/nishatchef_70",
    icon: Trophy,
    label: "Competitive Programming",
  },
];

export default function CodingProfiles() {
  return (
    <section
      id="coding-profiles"
      className="relative overflow-hidden bg-black py-24"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/20 via-black to-black" />

      <div className="relative z-10 mx-auto max-w-7xl px-5">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-purple-400">
            Find Me Online
          </p>

          <h2 className="text-4xl font-bold text-white md:text-5xl">
            Coding{" "}
            <span className="text-purple-500">Profiles</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Explore my coding journey, programming practice,
            projects, and problem-solving activities.
          </p>
        </motion.div>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
          {profiles.map((profile, index) => {
            const Icon = profile.icon;

            return (
              <motion.article
                key={profile.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1,
                }}
                whileHover={{ y: -8 }}
                className="group rounded-2xl border border-purple-500/20 bg-[#090909] p-6 transition-all duration-300 hover:border-purple-500/60 hover:shadow-[0_0_35px_rgba(168,85,247,0.15)]"
              >
                <div className="flex items-center justify-between">
                  <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-purple-500/30 bg-purple-500/10 text-purple-400 transition group-hover:bg-purple-600 group-hover:text-white">
                    <Icon size={27} />
                  </div>

                  <ArrowUpRight
                    size={21}
                    className="text-gray-500 transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-purple-400"
                  />
                </div>

                <p className="mt-6 text-xs font-medium uppercase tracking-wider text-purple-400">
                  {profile.label}
                </p>

                <h3 className="mt-2 text-xl font-bold text-white">
                  {profile.name}
                </h3>

                <p className="mt-2 break-words text-sm text-gray-500">
                  {profile.username}
                </p>

                <p className="mt-4 min-h-[84px] text-sm leading-6 text-gray-400">
                  {profile.description}
                </p>

                <a
                  href={profile.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-6 inline-flex items-center gap-2 font-semibold text-purple-400 transition hover:text-purple-300"
                >
                  Visit Profile
                  <ArrowUpRight size={17} />
                </a>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
