"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function HeaderSection() {
  const [showHeader, setShowHeader] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [activeSection, setActiveSection] = useState("");

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#education", label: "Education" },
    { href: "#experiences", label: "Experiences" },
    { href: "#certificates", label: "Certificate and Achievements" },
    { href: "#contact", label: "Contact" },
  ];

  useEffect(() => {
    const threshold = 10;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY + threshold) {
        setShowHeader(false);
      } else if (currentScrollY < lastScrollY - threshold) {
        setShowHeader(true);
      }
      setLastScrollY(currentScrollY);

      const sections = navLinks.map((link) =>
        document.querySelector(link.href)
      );

      for (const section of sections) {
        if (section) {
          const rect = section.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(`#${section.id}`);
            break;
          }
        }
      }
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
      <nav className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 text-sm text-center sm:text-left">
        {navLinks.map((link) => {
          const isActive = activeSection === link.href;
          return (
            <a
              key={link.href}
              href={link.href}
              className={`transition duration-200 flex items-center gap-x-[0.1rem] ${
                isActive ? "text-green-400 font-bold" : "hover:text-green-400"
              }`}
            >
              {`> ${link.label}`}
              {isActive && <span className="blink-cursor">▍</span>}
            </a>
          );
        })}
      </nav>
    </motion.header>
  );
}
