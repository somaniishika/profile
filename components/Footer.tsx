"use client";

import React from "react";
import { ArrowUp } from "lucide-react";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-8 border-t border-cardBorder mt-12 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-neutral-500">
      <div className="flex flex-col sm:flex-row items-center gap-2 text-center sm:text-left">
        <span>© {currentYear} {portfolioData.nickname || "ishika"}. all rights reserved.</span>
        <span className="hidden sm:inline">•</span>
        <span className="flex items-center gap-1">
          let&apos;s build something weird together.{" "}
          <span className="text-accent animate-pulse inline-block">💚</span>
        </span>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        whileHover={{
          scale: 1.1,
          backgroundColor: "#A78BFA",
          color: "#FFFFFF",
          borderColor: "#A78BFA",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="w-8 h-8 rounded-full border border-cardBorder bg-white flex items-center justify-center text-neutral-400 cursor-pointer active:scale-95 shadow-[0_2px_8px_rgba(0,0,0,0.06)] transition-colors duration-150"
        title="Scroll to Top"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-4 h-4" />
      </motion.button>
    </footer>
  );
}
