"use client";

import React from "react";
import { motion } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  number: string;
  title: string;
  subtitle?: string;
  className?: string;
}

export default function SectionWrapper({
  children,
  id,
  number,
  title,
  subtitle,
  className = "",
}: SectionWrapperProps) {
  return (
    <section id={id} className={`py-12 md:py-16 border-b border-cardBorder last:border-b-0 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex items-center gap-3 mb-8 md:mb-10 font-sans"
      >
        <span className="font-sans text-accent text-[11px] tracking-[3px] uppercase font-bold shrink-0">
          {number}
        </span>
        <span className="text-neutral-400 text-xs font-mono select-none">✦</span>
        <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-foreground lowercase" style={{ fontWeight: 800, letterSpacing: "-1.5px" }}>
          {title}
        </h2>
        {subtitle && (
          <span className="font-mono text-[10px] text-neutral-400 ml-2 hidden sm:inline lowercase">
            {"· "}{subtitle}
          </span>
        )}
      </motion.div>

      <div>{children}</div>
    </section>
  );
}
