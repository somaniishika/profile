"use client";

import React from "react";
import { motion } from "framer-motion";

interface BentoCardProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  colSpan?: string;
  rowSpan?: string;
}

export default function BentoCard({
  children,
  className = "",
  delay = 0,
  colSpan = "",
  rowSpan = "",
}: BentoCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1], // easeOutExpo
      }}
      whileHover={{
        y: -3,
        boxShadow: "0 8px 24px rgba(0,0,0,0.07)",
      }}
      className={`bg-cardBg border border-cardBorder rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group transition-all duration-300 ${colSpan} ${rowSpan} ${className}`}
    >
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
