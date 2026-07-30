"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MessageCircle } from "lucide-react";

const contacts = [
  {
    icon: <Mail size={24} />,
    title: "Email",
    value: "nishatyasminnisha@gmail.com",
    href: "mailto:nishatyasminnisha@gmail.com",
  },
  {
    icon: <Phone size={24} />,
    title: "Phone",
    value: "+880 1773566987",
    href: "tel:+8801773566987",
  },
  {
    icon: <MessageCircle size={24} />,
    title: "WhatsApp",
    value: "+880 1773566987",
    href: "https://wa.me/8801773566987",
  },
];

export default function Contact() {
  return (
    <section
      id="contact"
      className="relative bg-black py-24 px-5 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-purple-950/20 to-black"></div>

      <div className="relative z-10 max-w-5xl mx-auto">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Contact <span className="text-purple-500">Information</span>
          </h2>

          <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
            Have a project, collaboration, or just want to say hello?
            Feel free to contact me anytime.
          </p>
        </motion.div>

        {/* Contact Card */}
        <motion.div
          initial={{ opacity: 0, scale: .9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-16 rounded-3xl p-[1px] bg-gradient-to-r from-purple-600 via-purple-500 to-purple-700 shadow-[0_0_40px_rgba(168,85,247,.35)]"
        >
          <div className="rounded-3xl bg-[#0a0a0a] p-8 md:p-12">

            <div className="space-y-6">

              {contacts.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  target={item.title === "WhatsApp" ? "_blank" : "_self"}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: .5,
                    delay: index * .15,
                  }}
                  viewport={{ once: true }}
                  whileHover={{
                    x: 8,
                    scale: 1.02,
                  }}
                  className="flex items-center justify-between rounded-2xl border border-purple-500/20 bg-[#111] px-6 py-5 hover:border-purple-500 transition-all group"
                >
                  <div className="flex items-center gap-4">
                    <div className="text-purple-500">
                      {item.icon}
                    </div>

                    <div>
                      <h4 className="text-white font-semibold">
                        {item.title}
                      </h4>

                      <p className="text-gray-400 text-sm">
                        {item.value}
                      </p>
                    </div>
                  </div>

                  <span className="text-purple-500 group-hover:translate-x-2 transition-transform text-xl">
                    →
                  </span>
                </motion.a>
              ))}

            </div>

          </div>
        </motion.div>

        {/* Bottom Quote */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: .5 }}
          viewport={{ once: true }}
          className="mt-14 text-center"
        >
          <p className="text-gray-500">
            Looking forward to hearing from you.
          </p>
        </motion.div>

      </div>
    </section>
  );
}