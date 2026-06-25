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
    <SectionWrapper id="projects" number="[03]" title="Featured Work" subtitle="builds.json">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-cardBorder flex items-center justify-center text-accent">
                    <FolderGit2 className="w-5 h-5" />
                  </div>
                  <span className="font-mono text-xs text-neutral-500 font-bold">
                    0{index + 1} {"// project"}
                  </span>
                </div>

                {/* Title */}
                <h3 className="text-xl font-display font-black tracking-tight uppercase group-hover:text-accent transition-colors duration-200">
                  {project.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-neutral-400 font-sans leading-relaxed">
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
                      className="px-2 py-1 rounded bg-neutral-900 border border-cardBorder text-[10px] font-mono text-neutral-400"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Links Buttons */}
                <div className="grid grid-cols-2 gap-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-cardBorder bg-black/40 hover:bg-neutral-900 text-xs font-mono font-medium text-neutral-300 hover:text-white transition-all duration-200"
                    >
                      <GithubIcon className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl border border-accent bg-accent/5 hover:bg-accent text-xs font-mono font-medium text-accent hover:text-black transition-all duration-200"
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
