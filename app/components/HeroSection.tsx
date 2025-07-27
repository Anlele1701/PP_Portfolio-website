"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import config from "../../next.config";
const basePath = config.basePath || "";
export default function HeroSection() {
  const [showMore, setShowMore] = useState(false);

  return (
    <section
      id="about"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-r from-green-600/20 to-blue-600/20 opacity-10" />

      {/* Grid overlay */}
      <div className="absolute inset-0">
        <div
          className="absolute inset-0 bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"
          style={{
            backgroundImage: `url('${basePath}/grid.svg')`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-4xl w-full mx-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-black/50 backdrop-blur-lg rounded-lg border border-gray-800 p-6"
        >
          {/* Window control dots */}
          <div className="flex items-center gap-2 mb-4">
            <div className="w-3 h-3 rounded-full bg-red-500" />
            <div className="w-3 h-3 rounded-full bg-yellow-500" />
            <div className="w-3 h-3 rounded-full bg-green-500" />
          </div>

          <div className="font-mono text-center">
            {/* Avatar */}
            <div
              className="w-24 h-24 mx-auto mb-4 border border-gray-700 rounded-full bg-cover bg-center"
              style={{
                backgroundImage: `url('${basePath}/avatar.jpeg')`,
              }}
            ></div>

            {/* User info */}
            <p className="text-green-500 text-sm">
              $ whoami<span className="blink-cursor font-mono">_</span>
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mt-2 mb-4">
              Le Thanh Duy An
            </h1>
            <p className="text-gray-400 mb-4">Backend Developer</p>

            {/* Skills section */}
            <p className="text-green-500 text-sm">
              $ skills<span className="blink-cursor font-mono">_</span>
            </p>
            <div className="flex flex-wrap gap-2 mt-2 justify-center mb-6">
              {[
                "Java",
                "Spring Boot",
                "Oracle",
                "RabbitMQ",
                "Docker",
                "Kubernetes",
                "ArgoCD",
                "AWS",
              ].map((skill) => (
                <span
                  key={skill}
                  className="px-3 py-1 bg-green-500/10 rounded-md border border-green-500/20"
                >
                  {skill}
                </span>
              ))}
            </div>

            {/* About Me section */}
            <p className="text-green-500 text-sm">
              $ about_me<span className="blink-cursor font-mono">_</span>
            </p>
            {!showMore ? (
              <>
                <p className="text-gray-300 text-sm leading-relaxed mt-2">
                  Backend developer focused on scalable systems, cloud-native
                  infrastructure, and clean architecture.
                </p>
                <button
                  onClick={() => setShowMore(true)}
                  className="mt-2 text-green-400 text-sm underline"
                >
                  $ more
                </button>
              </>
            ) : (
              <p className="text-gray-300 text-sm leading-relaxed mt-2">
                I specialize in Java, Spring Boot, and cloud deployments using
                Docker, Kubernetes, and ArgoCD. My passion lies in building
                reliable backend services, optimizing performance, and crafting
                tools that developers love. Outside work, I explore emerging
                tech stacks, contribute to open source, and enjoy tactical video
                games that challenge strategic thinking.
              </p>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
