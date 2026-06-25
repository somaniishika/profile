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
      {/* Section Title Grid */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col md:flex-row md:items-baseline gap-2 md:gap-4 mb-8 md:mb-10"
      >
        <span className="font-mono text-accent text-sm tracking-widest font-extrabold">
          {number}
        </span>
        <h2 className="text-2xl sm:text-3xl font-display font-black uppercase tracking-tight text-foreground">
          {title}
        </h2>
        {subtitle && (
          <span className="font-mono text-[10px] md:text-xs text-neutral-500 md:ml-4">
            {"// "}{subtitle}
          </span>
        )}
      </motion.div>

      <div>{children}</div>
    </section>
  );
}
