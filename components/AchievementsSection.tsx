"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { Trophy, CheckCircle2 } from "lucide-react";
import { motion } from "framer-motion";

export default function AchievementsSection() {
  const { achievements } = portfolioData;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-cardBorder pb-3">
        <Trophy className="w-5 h-5 text-accent" />
        <h3 className="text-xl font-display font-black uppercase tracking-tight text-neutral-300">
          Achievements & Extracurriculars
        </h3>
      </div>

      {/* Achievements List */}
      <div className="space-y-4">
        {achievements.map((achievement, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.08 }}
            className="flex items-start gap-4 p-4 rounded-2xl border border-cardBorder bg-black/20 hover:bg-neutral-900/50 hover:border-accent/30 transition-all duration-300"
          >
            <div className="mt-0.5 w-5 h-5 flex items-center justify-center text-accent shrink-0">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <p className="text-sm text-neutral-400 font-sans leading-relaxed">
              {achievement}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
