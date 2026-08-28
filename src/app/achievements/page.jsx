import Link from "next/link";
import {
  Award,
  Trophy,
  Star,
  ArrowLeft,
  ArrowUpRight,
  FileText,
} from "lucide-react";


const achievements = [
  {
    id: 1,
    title: "Web Development Course",
    year: "2026",
    description:
      "Successfully completed the Complete Web Development Course by Programming Hero, gaining practical experience in modern web development.",
          image: "/certificates/programming-hero.png",
   certificate: "/certificates/Web development.pdf",
    icon: Award,
  },

  {
    id: 2,
    title: "Research Odyssey – Basic to Advance",
    year: "2025",
    category: "Research Workshop",
    description:
      "Successfully completed the 5-day intensive workshop 'Research Odyssey – Basic to Advance', organized by MUGAS in collaboration with CTRP, focused on developing research skills from foundational tools to advanced academic practices.",
    image: "/certificates/Research.jpeg",
    certificate: "/certificates/Research.jpeg",
    icon: Award,
  },

    {
    id: 3,
    title: "CodeChef Camp 2.0",
    year: "2026",
    category: "Competitive Programming",
    description:
      "Successfully completed the 2-month-long online CodeChef Camp 2.0 by Shohoj Coding, conducted from 12 February 2026 to 17 May 2026.",
    image: "/certificates/codechef-camp.png",
    certificate: "/certificates/CC-2.0_completion.pdf",
    icon: Trophy,
  },
  {
    id: 4,
    title: "Volunteering Certificate",
    year: "2025",
    description:
      "Recognized for active participation, valuable contribution, and dedication as a volunteer in various activities and initiatives.",
    image: "/certificates/Volunteering.png",
    icon: Trophy,
  },
  {
    id: 5,
    title: "CodeChef Silver Star",
    year: "2024",
    description:
      "Achieved Silver Star rating on CodeChef through consistent problem solving and competitive programming practice.",
    image: "/certificates/codechef-silver.png",
    icon: Star,
  },
];

export default function AllAchievements() {
  return (
    <main className="min-h-screen bg-black px-5 py-20 text-white sm:px-8 lg:px-16">

      {/* Background Glow */}
      <div className="pointer-events-none fixed left-1/2 top-0 -z-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[140px]" />

      <div className="relative z-10 mx-auto max-w-7xl">

        {/* Back Button */}
        <Link
          href="/#achievements"
          className="mb-10 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-purple-400"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        {/* Heading */}
        <div className="mb-14 text-center">
          <h1 className="text-4xl font-bold sm:text-5xl">
            All{" "}
            <span className="bg-gradient-to-r from-purple-400 via-purple-500 to-fuchsia-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h1>

          <div className="mx-auto mt-5 flex items-center justify-center gap-3">
            <span className="h-[2px] w-16 bg-gradient-to-r from-transparent to-purple-600 sm:w-24" />

            <Star
              size={17}
              className="fill-purple-500 text-purple-500"
            />

            <span className="h-[2px] w-16 bg-gradient-to-l from-transparent to-purple-600 sm:w-24" />
          </div>

          <p className="mx-auto mt-5 max-w-2xl text-sm leading-6 text-gray-400 sm:text-base">
            Explore my certifications, workshops, competitive programming
            achievements, and other milestones.
          </p>
        </div>

        {/* All Achievement Cards */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

          {achievements.map((achievement) => {
            const Icon = achievement.icon;

            return (
              <Link
                key={achievement.id}
                href={`/achievements/${achievement.id}`}
                className="group relative block h-full"
              >
                <div className="relative h-full overflow-hidden rounded-2xl border border-purple-900/60 bg-gradient-to-b from-purple-950/20 via-black to-black p-5 shadow-[0_0_25px_rgba(168,85,247,0.08)] transition-all duration-500 hover:-translate-y-2 hover:border-purple-500/70 hover:shadow-[0_0_35px_rgba(168,85,247,0.22)]">

                  {/* Top Line */}
                  <div className="absolute left-1/2 top-0 h-[2px] w-20 -translate-x-1/2 bg-purple-500 opacity-60 transition-all duration-500 group-hover:w-32 group-hover:opacity-100" />

                  {/* Icon */}
                  <div className="absolute right-5 top-5 flex h-10 w-10 items-center justify-center rounded-full border border-purple-500/30 bg-purple-600/10">
                    <Icon
                      size={18}
                      className="text-purple-400"
                    />
                  </div>

                  {/* Certificate Preview */}
                  <div className="relative mb-6 aspect-[1.6/1] overflow-hidden rounded-xl border border-purple-900/50 bg-[#080808]">

                    {achievement.image ? (
                      <img
                        src={achievement.image}
                        alt={achievement.title}
                        className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                      />
                    ) : (
                      <div className="flex h-full flex-col items-center justify-center bg-gradient-to-br from-purple-950/30 via-black to-purple-950/10">

                        <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-purple-500/40 bg-purple-600/10">
                          <FileText
                            size={30}
                            className="text-purple-400"
                          />
                        </div>

                        <p className="mt-4 text-base font-semibold text-purple-400">
                          Certificate
                        </p>

                        <p className="mt-1 text-xs text-gray-500">
                          PDF Certificate
                        </p>

                      </div>
                    )}

                    {/* Arrow */}
                    <div className="absolute bottom-3 right-3 flex h-9 w-9 translate-y-3 items-center justify-center rounded-full bg-purple-600/90 text-white opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      <ArrowUpRight size={17} />
                    </div>
                  </div>

                  {/* Title */}
                  <h2 className="mb-3 pr-8 text-xl font-semibold text-purple-400 transition-colors duration-300 group-hover:text-purple-300">
                    {achievement.title}
                  </h2>
                  {/* Year */}
                  <div className="mb-2 w-fit rounded-md border border-purple-500/40 bg-purple-600/15 px-2.5 py-1 text-xs font-medium text-purple-300">
                    {achievement.year}
                  </div>


                  {/* Category */}
                  <p className="mb-3 text-xs font-medium uppercase tracking-wider text-gray-500">
                    {achievement.category}
                  </p>

                  {/* Description */}
                  <p className="mb-6 min-h-[72px] text-sm leading-6 text-gray-400">
                    {achievement.description}
                  </p>

                  {/* View Details */}
                  <div className="flex items-center justify-center gap-2 rounded-lg border border-purple-900/60 bg-white/[0.03] py-3 text-sm font-medium text-gray-300 transition-all duration-300 group-hover:border-purple-500/60 group-hover:bg-purple-600/10 group-hover:text-purple-300">
                    View Details
                    <ArrowUpRight
                      size={16}
                      className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </div>

                </div>
              </Link>
            );
          })}

        </div>

        {/* Bottom */}
        <div className="mt-16 text-center">
          <p className="text-sm text-gray-600">
            Always learning, always growing.
          </p>
        </div>

      </div>
    </main>
  );
}