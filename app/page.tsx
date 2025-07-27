"use client";

import HeroSection from "./components/HeroSection";
import ContactSection from "./components/ContactSection";
import HeaderSection from "./components/HeaderSection";
import EducationSection from "./components/EducationSection";
import ExperiencesSection from "./components/ExperiencesSection";

export default function BackendPortfolio() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] text-white overflow-x-hidden scroll-smooth">
      <HeaderSection />
      <HeroSection />
      <EducationSection />
      <ExperiencesSection />
      <ContactSection />
    </main>
  );
}
