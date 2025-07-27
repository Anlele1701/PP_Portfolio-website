"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const experiences = [
  {
    logo: "acb-logo.webp",
    position: "Frontend Developer",
    company: "Asia Commercial Joint Stock Bank",
    city: "Ho Chi Minh City",
    type: "Fulltime",
    time: "September 2024 - Present",
    information: [
      "Integrated Core Banking with partner platforms via Payment APIs.",
      "Implemented invoice retrieval and SOAP XML mapping in EVNHCM project.",
      "Built FTPS image upload feature with RabbitMQ for PTI car insurance platform.",
      "Maintained Oracle databases for high-volume, reliable transactions.",
      "Developed adapter for SSMedia services to support payment integration for bookings and top-ups.",
    ],
    meta: [],
  },
  {
    logo: "acb-logo.webp",
    position: "Collaborate Lecturer",
    company: "Teky Young Technology Education Academy",
    city: "Ho Chi Minh City",
    type: "Collaborate",
    time: "May 2022 - Dec 2022",
    information: [
      "Diagnosed student needs through active listening techniques and questioning strategies.",
      "Implemented invoice retrieval and SOAP XML mapping in EVNHCM project.",
      "Built FTPS image upload feature with RabbitMQ for PTI car insurance platform.",
      "Maintained Oracle databases for high-volume, reliable transactions.",
      "Developed adapter for SSMedia services to support payment integration for bookings and top-ups.",
    ],
    meta: [],
  },
];

export default function ExperienceTimeline() {
  return (
    <section className="py-20 px-4 bg-gray-900/50" id="experiences">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center "
        >
          Experiences
        </motion.h2>

        <div className="border-l-2 border-green-500/30 relative space-y-14">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative pl-12"
            >
              {/* Timeline dot */}
              <div className="absolute -left-[7px] top-3 w-3 h-3 rounded-full bg-green-400 shadow" />

              <div className="bg-gray-800/50 rounded-lg p-6 border border-gray-700">
                {/* Header row: logo + position + tag */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <Image
                      src={`/logos/${exp.logo}`}
                      alt={`${exp.company} logo`}
                      width={32}
                      height={32}
                      className="rounded-md border border-gray-600"
                    />
                    <h3 className="text-lg font-semibold text-white">
                      {exp.position}
                    </h3>
                  </div>
                  <span className="text-xs bg-green-500/20 text-green-300 px-2 py-0.5 rounded-full">
                    {exp.type}
                  </span>
                </div>

                {/* Company + time */}
                <p className="text-sm text-gray-400 mb-2">
                  <span className="font-medium text-green-300">
                    {exp.company}
                  </span>{" "}
                  – {exp.time}
                </p>

                {/* Information bullets */}
                <ul className="list-disc list-inside space-y-2 text-sm text-gray-300 mb-2">
                  {exp.information.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>

                {/* Optional meta links */}
                {exp.meta.length > 0 && (
                  <div className="text-sm text-gray-400 space-x-4 mt-2">
                    {exp.meta.map((item, i) => (
                      <a
                        key={i}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="underline hover:text-green-400"
                      ></a>
                    ))}
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
