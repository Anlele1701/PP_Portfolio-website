"use client";

import { motion } from "framer-motion";
import config from "../../next.config";
const basePath = config.basePath || "";

const achievements = [
  {
    title: "DevX Hackathon Champion",
    year: "2023",
    category: ["Hackathon", "AI"],
    content: `That weekend was a blur — coding late into the night, bouncing ideas with strangers who became teammates. We built “EduPulse,” an AI education app that stunned the judges and clinched first prize.`,
    images: [`${basePath}/images/devx-1.jpg`, `${basePath}/images/devx-2.jpg`],
  },
  {
    title: "Innovation Leader at ABC Corp",
    year: "2020",
    category: ["Workplace", "Leadership"],
    content: `I never expected a side tool I hacked together would be adopted company-wide. It saved hundreds of hours, sparked a culture shift, and earned me the ‘Innovation Leader’ badge.`,
    images: [`${basePath}/images/abc-1.jpg`, `${basePath}/images/abc-2.jpg`],
  },
];

export default function AwardsBlog() {
  return (
    <section className="py-20 px-4 bg-black text-white" id="awards-blog">
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

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {item.images.map((src, i) => (
                <img
                  key={i}
                  src={src}
                  alt={`${item.title} image ${i + 1}`}
                  className="rounded-lg shadow-md object-cover hover:scale-105 transition-transform"
                />
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </section>
  );
}
