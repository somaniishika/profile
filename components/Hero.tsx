"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";
//import { Sparkles } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-12 md:py-20 flex flex-col md:flex-row items-center justify-between gap-12 border-b border-cardBorder pb-16">
      {/* Text Content */}
      <div className="flex-1 space-y-6 text-left max-w-2xl">
        {/* Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-accent-dark/40 border border-accent/20 text-accent font-mono text-xs"
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          <span>Available for cool projects</span>
        </motion.div>

        {/* Name */}
        <div className="space-y-2">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl sm:text-6xl md:text-7xl font-display font-black tracking-tight leading-none"
          >
            {portfolioData.name}
          </motion.h1>

          {/* Tagline with Blinking Cursor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center text-lg sm:text-xl md:text-2xl font-mono text-accent font-medium leading-relaxed"
          >
            <span>{portfolioData.tagline}</span>
            <span className="w-[10px] h-[22px] bg-accent ml-1.5 cursor-blink inline-block" />
          </motion.div>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-neutral-400 font-normal leading-relaxed text-balance"
        >
          {portfolioData.bio}
        </motion.p>

        {/* Quick coordinate markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 text-xs font-mono text-neutral-500 pt-2"
        >
          <span>📍 LOC: INDIA </span>
          <span>•</span>
          <span>📶 PING: stable</span>
          <span>•</span>
          <span>⚡ MODE: active</span>
        </motion.div>
      </div>

      {/* Polaroid / Photo Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, rotate: 6 }}
        animate={{ opacity: 1, scale: 1, rotate: -4 }}
        transition={{
          type: "spring",
          stiffness: 100,
          damping: 15,
          delay: 0.25
        }}
        whileHover={{
          rotate: 2,
          scale: 1.05,
          transition: { type: "spring", stiffness: 350, damping: 12 }
        }}
        className="relative bg-zinc-100 p-4 pb-10 rounded-2xl shadow-2xl border border-zinc-200 w-72 sm:w-80 flex-shrink-0 cursor-pointer select-none"
      >
        {/* Decorative Tape */}
        <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-28 h-8 bg-accent/25 border-x border-accent/40 backdrop-blur-[2px] rotate-[2deg] z-20" />

        {/* Image Container */}
        <div className="relative aspect-square w-full bg-neutral-900 rounded-lg overflow-hidden border border-zinc-300">
          <Image
            src={portfolioData.profilePhoto}
            alt={portfolioData.name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover grayscale hover:grayscale-0 transition-all duration-500 ease-out"
            priority
          />
        </div>

        {/* Polaroid caption */}
        {/* <div className="mt-4 font-mono flex items-center justify-between text-neutral-800">
          <span className="text-sm font-bold">@{portfolioData.nickname || "ishika"}</span>
          <span className="flex items-center gap-1 text-[10px] bg-neutral-900 text-accent px-1.5 py-0.5 rounded uppercase font-bold">
            <Sparkles className="w-3 h-3 text-accent" /> dev
          </span>
        </div> */}
      </motion.div>
    </section>
  );
}
