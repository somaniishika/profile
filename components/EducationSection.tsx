"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { GraduationCap, Calendar, Award } from "lucide-react";
import { motion } from "framer-motion";

export default function EducationSection() {
  const { education } = portfolioData;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-cardBorder pb-3">
        <GraduationCap className="w-5 h-5 text-accent" />
        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">
          Education
        </h3>
      </div>

      {/* Timeline List */}
      <div className="relative ml-3 pl-6 space-y-8" style={{ borderLeft: "3px solid #A78BFA" }}>
        {education.map((edu, index) => (
          <motion.div
            key={edu.institution}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative"
          >
            {/* Timeline Dot */}
            <span className="absolute -left-[31.5px] top-1 w-[9px] h-[9px] rounded-full bg-accent ring-4 ring-background" />

            <div className="space-y-2">
              {/* Duration / Years */}
              <div className="flex items-center gap-1.5 font-mono text-xs text-neutral-400">
                <Calendar className="w-3.5 h-3.5" />
                <span>{edu.duration}</span>
              </div>

              {/* Institution Name */}
              <h4 className="text-lg font-bold tracking-tight text-foreground">
                {edu.institution}
              </h4>

              {/* Degree */}
              <p className="text-sm text-neutral-500 font-sans leading-relaxed">
                {edu.degree}
              </p>

              {/* GPA */}
              {edu.gpa && (
                <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-[#EDE9FE] border border-[#DDD6FE] text-[11px] font-mono text-[#7C3AED] font-bold">
                  <Award className="w-3.5 h-3.5 text-[#7C3AED]" />
                  <span>CGPA: {edu.gpa}</span>
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
