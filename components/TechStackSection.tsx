"use client";

import React from "react";
import BentoCard from "./BentoCard";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { motion } from "framer-motion";

export default function TechStackSection() {
  const { techStack } = portfolioData;

  return (
    <SectionWrapper id="tech" number="[02]" title="Tech Stack" subtitle="skills.sh">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {techStack.map((group, index) => (
          <BentoCard
            key={group.category}
            delay={index * 0.08}
            className="flex flex-col justify-between"
          >
            <div>
              {/* Category Header */}
              <div className="flex justify-between items-baseline border-b border-cardBorder pb-3 mb-5">
                <h3 className="text-lg font-bold tracking-tight uppercase text-foreground">
                  {group.category}
                </h3>
                <span className="font-mono text-[9px] text-neutral-400">
                  [{group.items.length} items]
                </span>
              </div>

              {/* Badges Container */}
              <div className="flex flex-wrap gap-2.5">
                {group.items.map((tech) => (
                  <motion.span
                    key={tech}
                    whileHover={{
                      scale: 1.05,
                      backgroundColor: "#DDD6FE",
                      borderColor: "#A78BFA",
                      color: "#6D28D9",
                    }}
                    transition={{ type: "spring", stiffness: 350, damping: 12 }}
                    className="px-3.5 py-1.5 rounded-full border border-[#DDD6FE] bg-[#EDE9FE] text-xs font-mono text-[#7C3AED] font-semibold cursor-default select-none transition-colors duration-150"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>

            {/* Decoration line */}
            <div className="text-[10px] font-mono text-neutral-600 mt-6 select-none border-t border-cardBorder/30 pt-3">
              {"//"} status: fully_integrated
            </div>
          </BentoCard>
        ))}
      </div>
    </SectionWrapper>
  );
}
