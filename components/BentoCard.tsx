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
        y: -6,
        borderColor: "rgba(215, 255, 74, 0.4)",
        boxShadow: "0 12px 30px -10px rgba(215, 255, 74, 0.12)",
      }}
      className={`bg-cardBg border border-cardBorder rounded-3xl p-6 md:p-8 flex flex-col justify-between overflow-hidden relative group transition-all duration-300 ${colSpan} ${rowSpan} ${className}`}
    >
      {/* Background glow on card hover */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_var(--mouse-x,center)_var(--mouse-y,center),rgba(215,255,74,0.04)_0%,transparent_75%)] opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      
      {/* Top right corner accent radial gradient */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[radial-gradient(circle_at_top_right,rgba(215,255,74,0.06)_0%,transparent_70%)] pointer-events-none" />
      
      <div className="relative z-10 h-full flex flex-col justify-between">
        {children}
      </div>
    </motion.div>
  );
}
