"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Briefcase, Calendar } from "lucide-react";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const { experience } = portfolioData;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-cardBorder pb-3">
        <Briefcase className="w-5 h-5 text-accent" />
        <h3 className="text-xl font-display font-black uppercase tracking-tight text-neutral-300">
          Experience
        </h3>
      </div>

      {/* Timeline List */}
      <div className="relative border-l border-cardBorder ml-3 pl-6 space-y-8">
        {experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.role}`}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31px] top-1 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-background" />

            <div className="space-y-2">
              {/* Duration / Years */}
              <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-500">
                <Calendar className="w-3.5 h-3.5" />
                <span>{exp.duration}</span>
              </div>

              {/* Company Name */}
              <h4 className="text-lg font-bold tracking-tight text-foreground">
                {exp.company}
              </h4>

              {/* Role */}
              <p className="text-sm font-semibold text-accent font-sans">
                {exp.role}
              </p>

              {/* Description */}
              <p className="text-sm text-neutral-400 font-sans leading-relaxed">
                {exp.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
