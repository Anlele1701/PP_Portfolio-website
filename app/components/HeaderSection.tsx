"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeaderSection() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experiences", label: "Experiences" },
    { href: "#education", label: "Education" },
    { href: "#skills", label: "Certificate and Achievements" },
  ];

  useEffect(() => {
    const threshold = 10;
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + threshold) {
        // Scrolled down
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY - threshold) {
        // Scrolled up
        setShowHeader(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <motion.header
      initial={false}
      animate={{ y: showHeader ? 0 : -80 }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#1a1a1a] border-b border-gray-700 px-4 py-3 font-mono text-green-300"
    >
      <nav className="flex justify-center gap-6 text-sm">
        {navLinks.map((link) => (
          <a
            key={link.href}
            href={link.href}
            className="hover:text-green-400 transition duration-200"
          >
            {`> ${link.label}`}
          </a>
        ))}
      </nav>
    </motion.header>
  );
}
