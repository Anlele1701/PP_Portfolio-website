"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import config from "../../next.config";
const basePath = config.basePath || "";
export default function EducationSection() {
  const education = [
    {
      institution:
        "Ho Chi Minh University of Foreign Languages and Information Technology (HUFLIT)",
      period: "2021 – 2025",
      degree: "Bachelor of Information Technology",
      gpa: "3.82/4.0",
      logo: `${basePath}/HUFLIT_logo.png`,
      highlights: [
        "Graduated with distinction",
        "Specialized in software development and backend engineering",
        "Top-ranked HUFLIT IT student, earned 60% scholarship for 2023–2024",
        "Top 2 in HUFLIT IT Faculty, awarded 30% academic scholarship for 2022–2023",
        "Awarded the Lotte Shin Kyuk-Ho Global Scholarship by Lotte Corporation in April 2024 for outstanding academic performance in IT",
        "Ex-member of Executive Committee of HCMC Youth Union of IT Faculty HUFLIT",
      ],
      tech: [
        "C#",
        ".NET",
        "Java",
        "Node.js",
        "Nest.js",
        "Angular",
        "Flutter",
        "MySQL",
        "Oracle",
        "MongoDB",
        "Git",
      ],
    },
  ];

  return (
    <section className="py-20 px-4" id="education">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-3xl font-bold mb-12 text-center"
        >
          Education
        </motion.h2>

        <div className="grid grid-cols-1 gap-8">
          {education.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-xl p-6 backdrop-blur-sm border border-gray-800"
            >
              <div className="flex items-center gap-4 mb-4">
                <Image
                  src={item.logo}
                  alt={`${item.institution} logo`}
                  width={60}
                  height={60}
                  className="rounded-md border border-gray-700 p-2"
                />
                <div>
                  <h3 className="text-2xl font-bold">{item.institution}</h3>
                  <p className="text-sm text-gray-400 italic">{item.period}</p>
                </div>
              </div>

              <p className="text-gray-300 font-semibold ">{item.degree}</p>
              <p className="text-green-500">
                GPA: <span className="text-white">{item.gpa}</span>
              </p>
              <p className="text-sm text-gray-400 mb-4">
                <a
                  href="/transcript.pdf"
                  download
                  className="underline hover:text-green-400 transition"
                >
                  View Academic Transcript
                </a>
              </p>

              <h4 className="text-lg font-semibold mb-2">Highlights:</h4>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mb-6">
                {item.highlights.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {item.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="text-sm px-3 py-1 bg-green-500/10 rounded-full border border-green-500/20 transition transform hover:scale-105 hover:bg-green-500/20 hover:text-green-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
