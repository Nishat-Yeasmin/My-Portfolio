import Image from "next/image";
import Link from "next/link";
import {
  ArrowLeft,
  ExternalLink,
  Award,
  Trophy,
  Star,
} from "lucide-react";


const achievements = {
  1: {
    title: "Web Development Course",
    year: "2026",
    category: "Certification",
    description:
      "Successfully completed the Complete Web Development Course by Programming Hero. Through this course, I developed practical skills in modern Full Stack Web Development and worked on real-world projects using various frontend and backend technologies.",
   image: "/certificates/programming-hero.png",
      pdf: "/certificates/Web development.pdf",
    icon: Award,
   
  },

  2: {
    title: "Research Odyssey – Basic to Advance",
    year: "2025",
    category: "Research Workshop",
    description:
      "Successfully completed the 5-day intensive workshop 'Research Odyssey – Basic to Advance', organized by MUGAS in collaboration with CTRP, focused on developing research skills from foundational tools to advanced academic practices.",
    image: "/certificates/Research.jpeg",
    certificate: "/certificates/Research.jpeg",
    icon: Award,
  },

    3: {
   
    title: "CodeChef Camp 2.0",
    year: "2026",
    category: "Competitive Programming",
    description:
      "Successfully completed the 2-month-long online CodeChef Camp 2.0 by Shohoj Coding, conducted from 12 February 2026 to 17 May 2026.",
      image: "/certificates/codechef-camp.png",
      pdf: "/certificates/CC-2.2_completion.pdf",
    certificate: "/certificates/CC-2.0_completion.pdf",
    icon: Trophy,
     buttonText: "View CodeChef Profile",
    link: "https://www.codechef.com/users/nishatchef_70",
  },

  4: {
    title: "Volunteering Certificate",
    year: "2025",
    category: "Volunteering",
    description:
      "Received this certificate in recognition of my active participation, valuable contribution, teamwork, and dedication as a volunteer in various activities and initiatives.",
    image: "/certificates/Volunteering.png",
    icon: Trophy,
   
  },

  5: {
    title: "CodeChef Silver Star",
    year: "2025",
    category: "Competitive Programming",
    description:
      "Achieved Silver Star rating on CodeChef through consistent problem solving, competitive programming practice, and participation in coding challenges.",
    image: "/certificates/codechef-silver.png",
    icon: Star,
    buttonText: "View CodeChef Profile",
    link: "https://www.codechef.com/users/nishatchef_70",
  },
};

export default async function AchievementDetails({ params }) {
  const { id } = await params;

  const achievement = achievements[id];

  if (!achievement) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-black px-5 text-white">
        <div className="text-center">
          <h1 className="mb-4 text-3xl font-bold">
            Achievement Not Found
          </h1>

          <Link
            href="/#achievements"
            className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-5 py-3 text-sm transition hover:bg-purple-500"
          >
            <ArrowLeft size={16} />
            Back to Achievements
          </Link>
        </div>
      </main>
    );
  }

  const Icon = achievement.icon;

  return (
    <main className="relative min-h-screen overflow-hidden bg-black px-5 py-20 text-white sm:px-8 lg:px-16">

      {/* Background Glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-[400px] w-[400px] -translate-x-1/2 rounded-full bg-purple-700/10 blur-[140px]" />

      <div className="relative mx-auto max-w-5xl">

        {/* Back */}
        <Link
          href="/achievements"
          className="mb-8 inline-flex items-center gap-2 text-sm text-gray-400 transition hover:text-purple-400"
        >
          <ArrowLeft size={17} />
          Back to Achievements
        </Link>

        {/* Main Card */}
        <div className="relative overflow-hidden rounded-3xl border border-purple-900/60 bg-gradient-to-b from-purple-950/20 via-black to-black p-5 shadow-[0_0_40px_rgba(168,85,247,0.12)] sm:p-8">

          {/* Top Glow */}
          <div className="absolute left-1/2 top-0 h-[2px] w-32 -translate-x-1/2 bg-purple-500 shadow-[0_0_15px_rgba(168,85,247,0.8)]" />

          {/* Header */}
          <div className="mb-10 text-center">

            <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full border border-purple-500/40 bg-purple-600/10">
              <Icon
                size={25}
                className="text-purple-400"
              />
            </div>

            <span className="rounded-full border border-purple-500/40 bg-purple-600/10 px-4 py-1.5 text-xs font-medium text-purple-300">
              {achievement.category}
            </span>

            <h1 className="mt-5 text-3xl font-bold sm:text-4xl lg:text-5xl">
              {achievement.title}
            </h1>

            <p className="mt-3 text-sm text-purple-400">
              {achievement.year}
            </p>

            <div className="mx-auto mt-5 h-[2px] w-24 bg-gradient-to-r from-transparent via-purple-500 to-transparent" />
          </div>

          {/* Certificate Preview */}
<div className="overflow-hidden rounded-2xl border border-purple-900/60 bg-[#080808] p-3 shadow-[0_0_35px_rgba(168,85,247,0.12)] sm:p-4">
  {achievement.image ? (
    <Image
      src={achievement.image}
      alt={achievement.title}
      width={1400}
      height={900}
      priority
      className="h-auto w-full rounded-xl object-contain"
    />
  ) : (
    <div className="flex min-h-[400px] flex-col items-center justify-center text-center">
      <Award size={50} className="mb-4 text-purple-500" />

      <h3 className="text-xl font-semibold text-gray-200">
        Certificate Available
      </h3>

      <p className="mt-2 text-sm text-gray-500">
        Click below to view the full certificate.
      </p>
    </div>
  )}
</div>

          {/* Description */}
          <div className="mt-10">
            <h2 className="mb-4 text-2xl font-semibold">
              About This{" "}
              <span className="text-purple-400">
                Achievement
              </span>
            </h2>

            <p className="max-w-4xl text-sm leading-7 text-gray-400 sm:text-base">
              {achievement.description}
            </p>
          </div>

          {/* ONLY ONE Certificate Button */}
         {/* Action Buttons */}
<div className="mt-8 flex flex-wrap gap-4">

  {/* Certificate Button */}
  <Link
    href={`/achievements/${id}/certificate`}
    className="inline-flex items-center gap-2 rounded-lg bg-purple-600 px-6 py-3 text-sm font-medium text-white shadow-[0_0_20px_rgba(168,85,247,0.2)] transition-all duration-300 hover:bg-purple-500 hover:shadow-[0_0_30px_rgba(168,85,247,0.4)]"
  >
    View Certificate
    <ExternalLink size={16} />
  </Link>

  {/* CodeChef Profile Button */}
  {achievement.link && (
    <Link
      href={achievement.link}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-2 rounded-lg border border-purple-500/40 bg-purple-600/10 px-6 py-3 text-sm font-medium text-purple-300 transition-all duration-300 hover:border-purple-500 hover:bg-purple-600/20 hover:text-purple-200"
    >
      {achievement.buttonText || "View Profile"}
      <ExternalLink size={16} />
    </Link>
  )}

</div>

        </div>

        <p className="mt-8 text-center text-sm text-gray-600">
          Always learning, always growing.
        </p>

      </div>
    </main>
  );
}