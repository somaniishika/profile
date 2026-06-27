"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { portfolioData } from "@/data/portfolio";

export default function Hero() {
  return (
    <section className="py-12 md:py-20 flex flex-col md:flex-row items-center md:items-start justify-between gap-8 md:gap-16 border-b border-cardBorder pb-16">

      {/* Left Column: Polaroid Profile Photo */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
        animate={{ opacity: 1, scale: 1, rotate: 1 }}
        transition={{
          type: "spring",
          stiffness: 80,
          damping: 15,
          delay: 0.2
        }}
        whileHover={{
          rotate: -1,
          scale: 1.02,
          transition: { type: "spring", stiffness: 300, damping: 12 }
        }}
        className="relative bg-white p-4 pb-12 rounded-3xl shadow-[0_12px_40px_rgba(0,0,0,0.06)] border border-cardBorder w-72 sm:w-80 flex-shrink-0 cursor-pointer select-none mx-auto md:mx-0"
      >
        {/* Tape decoration */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-accent/15 border-x border-accent/35 backdrop-blur-[2px] rotate-[-1deg] z-20" />

        {/* Image Container (rounded square) */}
        <div className="relative aspect-square w-full bg-background rounded-2xl overflow-hidden border border-cardBorder">
          <Image
            src={portfolioData.profilePhoto}
            alt={portfolioData.name}
            fill
            sizes="(max-width: 768px) 100vw, 320px"
            className="object-cover object-top transition-all duration-500 ease-out"
            priority
          />
        </div>

        {/* Polaroid caption */}
        <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between text-neutral-400 font-mono text-[10px] uppercase tracking-widest font-bold">
          <span>@{portfolioData.nickname || "ishika"}</span>
          <span className="text-accent">✦ SDE</span>
        </div>
      </motion.div>

      {/* Right Column: Hero Content */}
      <div className="flex-1 space-y-6 text-center md:text-left max-w-2xl">
        {/* Status Badge */}
        <div className="flex justify-center md:justify-start">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#DCFCE7] border border-[#BBF7D0] text-[#15803D] font-mono text-xs font-bold uppercase tracking-wider animate-pulse-slow"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-[#16A34A] animate-pulse" />
            <span>✦ open to opportunities</span>
          </motion.div>
        </div>

        {/* Name & Role */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-black tracking-tight leading-none text-foreground"
            style={{ fontWeight: 800, letterSpacing: "-2px" }}
          >
            {portfolioData.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="font-mono text-xs md:text-sm text-neutral-400 uppercase tracking-widest font-bold"
          >
            {portfolioData.role}
          </motion.p>

          {/* Tagline with Blinking Cursor */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex items-center justify-center md:justify-start text-lg sm:text-xl md:text-2xl font-mono text-accent font-semibold leading-relaxed"
          >
            <span>{portfolioData.tagline}</span>
            <span className="w-[8px] h-[20px] bg-accent ml-1 cursor-blink inline-block" />
          </motion.div>
        </div>

        {/* Bio */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-neutral-500 font-normal leading-relaxed text-balance"
          style={{ fontSize: "15px", lineHeight: "1.7" }}
        >
          {portfolioData.bio}
        </motion.p>

        {/* Quick Coordinate Markers */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap justify-center md:justify-start gap-4 text-xs font-mono text-neutral-400 pt-2"
        >
          <span>📍 LOC: INDIA</span>
          <span>•</span>
          <span>📶 PING: stable</span>
          <span>•</span>
          <span>⚡ MODE: active</span>
        </motion.div>
      </div>

    </section>
  );
}
