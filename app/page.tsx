import React from "react";
import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import TechStackSection from "@/components/TechStackSection";
import EducationSection from "@/components/EducationSection";
import ExperienceSection from "@/components/ExperienceSection";
import CertificationSection from "@/components/CertificationSection";
import AchievementsSection from "@/components/AchievementsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import SectionWrapper from "@/components/SectionWrapper";
import { portfolioData } from "@/data/portfolio";

export default function Home() {
  return (
    <div className="min-h-screen relative">
      {/* Sticky Header Nav */}
      <header className="sticky top-0 z-50 w-full border-b border-cardBorder/40 bg-black/40 backdrop-blur-md transition-all duration-300">
        <div className="max-w-5xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="font-display font-black text-lg tracking-tight uppercase hover:opacity-85 transition-opacity">
            {portfolioData.nickname || "kai"}<span className="text-accent">.</span>
          </a>
          <nav className="flex items-center gap-6 font-mono text-[11px] font-bold tracking-wider uppercase">
            <a href="#about" className="text-neutral-400 hover:text-accent transition-colors duration-150">about</a>
            <a href="#tech" className="text-neutral-400 hover:text-accent transition-colors duration-150">tech</a>
            <a href="#projects" className="text-neutral-400 hover:text-accent transition-colors duration-150">work</a>
            <a href="#contact" className="text-neutral-400 hover:text-accent transition-colors duration-150">contact</a>
          </nav>
        </div>
      </header>

      {/* Main Container */}
      <main className="max-w-5xl mx-auto px-6 pb-12 space-y-4">
        {/* Hero Section */}
        <Hero />

        {/* About Section */}
        <AboutSection />

        {/* Tech Stack Section */}
        <TechStackSection />

        {/* Combined Credentials Section (Education & Certifications) */}
        <SectionWrapper id="credentials" number="[02.5]" title="Credentials" subtitle="background.md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="space-y-12">
              <EducationSection />
              <ExperienceSection />
            </div>
            <div className="space-y-12">
              <CertificationSection />
              <AchievementsSection />
            </div>
          </div>
        </SectionWrapper>

        {/* Projects Section */}
        <ProjectsSection />

        {/* Contact Section */}
        <ContactSection />

        {/* Footer */}
        <Footer />
      </main>
    </div>
  );
}
