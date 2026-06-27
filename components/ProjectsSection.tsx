"use client";

import React from "react";
import BentoCard from "./BentoCard";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { ExternalLink, FolderGit2 } from "lucide-react";
import { GithubIcon } from "./Icons";


export default function ProjectsSection() {
  const { projects } = portfolioData;

  return (
    <SectionWrapper id="projects" number="[03]" title="some of my projects" subtitle="builds.json">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => {
          const delay = index * 0.1;

          return (
            <BentoCard
              key={project.title}
              delay={delay}
              className="min-h-[350px] flex flex-col justify-between"
            >
              {/* Card Header & Content */}
              <div className="space-y-4">
                {/* Visual Header */}
                <div className="flex justify-between items-center">
                  <div className="w-10 h-10 rounded-xl bg-[#EDE9FE] border border-[#DDD6FE] flex items-center justify-center text-accent">
                    <FolderGit2 className="w-5 h-5 text-[#7C3AED]" />
                  </div>
                  <span className="font-mono text-xs text-neutral-400 font-bold">
                    0{index + 1} {"// project"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-bold tracking-tight text-foreground transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-500 font-sans leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Badges & Actions */}
              <div className="space-y-6 mt-6">
                {/* Tech Pills */}
                <div className="flex flex-wrap gap-1.5 border-t border-cardBorder/30 pt-4">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-1 rounded-full bg-[#EDE9FE] border border-[#DDD6FE] text-[10px] font-mono text-[#7C3AED] font-bold"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links Buttons */}
                <div className={`grid gap-3 ${project.github && project.demo ? "grid-cols-2" : "grid-cols-1"}`}>
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-cardBorder bg-white hover:bg-[#F5F4F0] text-xs font-mono font-medium text-neutral-500 hover:text-foreground shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200"
                    >
                      <GithubIcon className="w-4 h-4 text-neutral-400 group-hover:text-accent" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-[#DDD6FE] bg-[#EDE9FE] hover:bg-[#A78BFA] text-xs font-mono font-bold text-[#7C3AED] hover:text-white shadow-[0_2px_8px_rgba(0,0,0,0.06)] hover:shadow-[0_4px_12px_rgba(0,0,0,0.08)] transition-all duration-200"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live</span>
                    </a>
                  )}
                </div>
              </div>
            </BentoCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
