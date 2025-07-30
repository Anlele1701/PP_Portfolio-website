"use client";

import config from "../../next.config";
import ReactModal from "react-modal";
import { motion, AnimatePresence } from "framer-motion";

import { useState } from "react";
import Image from "next/image";
const basePath = config.basePath || "";

const achievements = [
  {
    title: "The Outstanding Next Banker Award",
    year: "January 2025",
    category: ["Workplace", "The Next Banker"],
    content: `I am deeply honored to have received the ACB The Outstanding Next Banker award during my internship at Asia Commercial Bank (ACB), one of the leading banks in Vietnam.
As a Backend Developer Intern, I contributed to building and optimizing banking systems using Spring Boot and Core Banking technologies. Beyond my technical contributions, I proactively supported my colleagues by offering assistance, sharing knowledge, and collaborating to overcome challenges efficiently.
This award recognizes my dedication to innovation, teamwork, and a collaborative mindset, all aimed at delivering impactful solutions to enhance ACB's digital banking services. It also reflects my passion for creating scalable, efficient, and secure systems that improve user experiences in the financial sector.`,
    images: [
      `${basePath}/achievements/acb/acb_tnb_award.jpeg`,
      `${basePath}/achievements/acb/acb_tnb_colleagues.jpeg`,
    ],
  },
  {
    title: "Excellent Student of the Academic Year 2023-2024",
    year: "October 2024",
    category: ["Academic", "Scholarship", "HUFLIT"],
    content: `Back in my uni days at HUFLIT, I poured my heart into everything. Somehow, it paid off: I landed in the top 1 of the IT Faculty and got a 60% scholarship that helped fuel the dream. And I forget to take a photo with the award, but I still have the certificate.`,
    images: [],
  },
  {
    title: "Lotte Shin Kyuk-Ho Global Scholarship Award",
    year: "April 2024",
    category: ["Academic", "Scholarship", "Lotte"],
    content: `I'm thrilled to share that I've been awarded the Lotte Shin Kyuk-Ho Global Scholarship! This prestigious scholarship recognizes my academic achievements and potential, and I'm incredibly grateful for this opportunity to further my studies in IT.`,
    images: [
      `${basePath}/achievements/academics/lotte_award.jpeg`,
      `${basePath}/achievements/academics/lotte_award_2.jpg`,
    ],
  },
  {
    title: "Excellent Student of the Academic Year 2022-2023",
    year: "November 2023",
    category: ["Academic", "Scholarship", "HUFLIT"],
    content: `This is the first time that I received the Excellent Student award at HUFLIT, although I only ended up in top 2 of the IT Faculty. It was a great motivation for me to keep pushing myself in the next academic year. I'm aiming for the top 1 next time! Also, it's quite a shame that I didn't take a photo with the award, but I still have the certificate.`,
    images: [],
  },
];

export default function AwardsBlog() {
  const [selectedImage, setSelectedImage] = useState("");

  const openModal = (src: string) => setSelectedImage(src);
  const closeModal = () => setSelectedImage("");

  return (
    <section className="py-20 px-4 bg-gray-900/50 text-white" id="awards">
      <div className="max-w-4xl mx-auto space-y-16">
        <motion.h2
          className="text-4xl font-bold text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          Award & Achievements journey
        </motion.h2>

        {achievements.map((item, index) => (
          <motion.article
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.3 }}
            className="space-y-6"
          >
            <header>
              <h3 className="text-2xl font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-400">{item.year}</p>
              <div className="flex gap-2 mt-2 text-xs">
                {item.category.map((tag, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-green-700 rounded-full text-white"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </header>

            <p className="text-gray-300">{item.content}</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {item.images.map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`${item.title} image ${i + 1}`}
                  onClick={() => openModal(src)}
                  className="cursor-pointer rounded-lg shadow-md object-cover w-full h-full hover:scale-105 transition-transform"
                />
              ))}
            </div>
            <AnimatePresence>
              {selectedImage && (
                <ReactModal
                  isOpen={true}
                  onRequestClose={closeModal}
                  className="fixed inset-0 bg-black bg-opacity-80 flex justify-center items-center z-50"
                  overlayClassName=""
                  shouldCloseOnOverlayClick={true}
                  ariaHideApp={false}
                >
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.3 }}
                    onClick={closeModal} // 👈 Close when image is clicked
                    className="cursor-pointer"
                  >
                    <Image
                      src={selectedImage}
                      alt="Full view"
                      className="max-w-full max-h-full rounded-lg"
                    />
                  </motion.div>
                </ReactModal>
              )}
            </AnimatePresence>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
