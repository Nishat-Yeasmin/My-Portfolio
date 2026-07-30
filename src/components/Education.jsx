"use client";

import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const educationData = [
  {
    degree: "Bachelor of Science in Computer Science & Engineering",
    institution: "Metropolitan University, Sylhet",
    duration: "2025 - Present",
    result: "Current CGPA: 3.88 / 4.00",
    details: [
      "Studying programming, data structures, algorithms, and software development.",
      "Building skills in modern web technologies and full-stack development.",
    ],
  },

  {
    degree: "Higher Secondary Certificate (HSC)",
    institution: "Sylhet Cantonment Public School and College",
    duration: "2020 - 2022",
    result: "GPA: 5.00 / 5.00",
    details: [
      "Completed Higher Secondary education in Science background.",
      "Developed interest in technology and computer science.",
    ],
  },

  {
    degree: "Secondary School Certificate (SSC)",
    institution: "Jalalabad Cantonment Board High School",
    duration: "2009 - 2020",
    result: "GPA: 4.67 / 5.00",
    details: [
      "Completed Secondary education with a strong academic foundation.",
      "Built curiosity towards science and technology.",
    ],
  },
];


const Education = () => {
  return (
    <section
      id="education"
      className="relative min-h-screen bg-black px-5 py-24 overflow-hidden"
    >

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-purple-950/30 via-black to-black"></div>


      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Educational <span className="text-purple-500">Qualification</span>
          </h2>

          <p className="mt-4 text-gray-400">
            My academic journey and educational background.
          </p>
        </motion.div>



        {/* Timeline */}
        <div className="mt-14 relative">

          {/* Line */}
          <div className="absolute left-5 md:left-1/2 top-0 h-full w-[2px] bg-purple-500/30"></div>


          <div className="space-y-12">

            {educationData.map((education, index) => (

              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -60 : 60,
                }}

                whileInView={{
                  opacity: 1,
                  x: 0,
                }}

                transition={{
                  duration: 0.7,
                }}

                viewport={{
                  once: true,
                  amount: 0.3,
                }}

                className={`
                  relative
                  flex
                  ${index % 2 === 0 ? "md:justify-start" : "md:justify-end"}
                `}
              >

                {/* Dot */}
                <div
                  className="
                  absolute
                  left-[9px]
                  md:left-1/2
                  md:-translate-x-1/2
                  top-6
                  w-5
                  h-5
                  rounded-full
                  bg-purple-500
                  shadow-[0_0_20px_rgba(168,85,247,0.8)]
                  "
                ></div>


                {/* Card */}
                <div
                  className="
                  ml-12
                  md:ml-0
                  w-full
                  md:w-[45%]
                  rounded-2xl
                  p-[1px]
                  bg-gradient-to-br
                  from-purple-500
                  via-purple-700
                  to-transparent
                  "
                >

                  <motion.div
                    whileHover={{
                      y:-8,
                    }}
                    className="
                    rounded-2xl
                    bg-[#0a0a0a]
                    p-7
                    shadow-[0_0_30px_rgba(168,85,247,0.25)]
                    hover:shadow-[0_0_45px_rgba(168,85,247,0.5)]
                    transition-all
                    "
                  >

                    <div className="flex items-center gap-3">

                      <div className="text-purple-500">
                        <GraduationCap size={32}/>
                      </div>

                      <h3 className="text-xl font-semibold text-white">
                        {education.degree}
                      </h3>

                    </div>


                    <p className="mt-4 text-purple-400 font-medium">
                      {education.institution}
                    </p>


                    <p className="mt-2 text-sm text-gray-500">
                      {education.duration}
                    </p>

          <p
  className="
  mt-3
  inline-block
  rounded-full
  bg-purple-500/10
  px-4
  py-1
  text-sm
  text-purple-400
  border
  border-purple-500/30
  "
>
  {education.result}
</p>
                    {/* <p className="mt-4 text-gray-400 leading-relaxed text-sm">
                      {education.details}
                    </p> */}
<ul className="mt-4 space-y-2">
  {education.details.map((item, i) => (
    <li
      key={i}
      className="text-gray-400 text-sm flex gap-2"
    >
      <span className="text-purple-500">✦</span>
      {item}
    </li>
  ))}
</ul>
                  </motion.div>

                </div>


              </motion.div>

            ))}

          </div>

        </div>

      </div>

    </section>
  );
};

export default Education;