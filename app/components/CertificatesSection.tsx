"use client";

import { motion } from "framer-motion";

import config from "../../next.config";
const basePath = config.basePath || "";
export default function CertificatesSection() {
  return (
    <section className="py-20 px-4" id="certificates">
      <div className="max-w-6xl mx-auto">
        <motion.h2 className="text-3xl font-bold mb-12 text-center">
          Certificates
        </motion.h2>
        <div className="grid grid-cols-3 gap-8">
          {[
            {
              title: "ETS TOEIC Certificate",
              image: `${basePath}/certificates/toeic_logo.webp`,
              issued: "September 2024",
              issuer: "IIG Vietnam",
              link: "https://drive.google.com/file/d/1609wrxlb9arm4tZfJa9wzg4SDhFReTTI/view?usp=share_link",
              points: [
                "Listening: 490",
                "Reading: 455",
                "Total score: 945/990",
                "Valid until: September 2026",
              ],
            },
            {
              title: "Niveaustufe A1 Certificate",
              image: `${basePath}/certificates/deutsch_logo.png`,
              issued: "June 2016",
              issuer: "Deutsche Auslandsschulen",
              link: "https://drive.google.com/file/d/1iD383IahRViir5AUtUT61U7S9Prtl-2w/view?usp=share_link",
              points: [
                "Achieved A1 level in German language in secondary school",
              ],
            },
          ].map((cert, i) => (
            <motion.div
              key={i}
              className="bg-gray-900/50 p-4 rounded-xl border border-gray-800 group relative overflow-hidden"
            >
              <img
                src={cert.image}
                alt={cert.title}
                className="mb-4 rounded-lg h-44 w-full object-cover"
              />
              <h3 className="text-xl font-bold mb-1">{cert.title}</h3>
              <p className="text-sm text-gray-400 mb-1">
                Issued: {cert.issued}
              </p>
              <p className="text-sm text-gray-400 mb-4">By: {cert.issuer}</p>

              <div className="absolute inset-0 bg-gray-900/80 px-4 py-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl flex flex-col justify-center items-center text-center">
                <ul className="list-disc list-inside space-y-2 text-gray-100 text-sm mb-4">
                  {cert.points.map((point, index) => (
                    <li key={index}>{point}</li>
                  ))}
                </ul>
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm px-3 py-1 bg-green-700 border border-green-600 transition transform hover:scale-105 hover:bg-green-600 hover:text-green-200 font-mono"
                >
                  View Certificate
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
