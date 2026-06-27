"use client";

import React from "react";
import { portfolioData } from "@/data/portfolio";
import { ShieldCheck, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CertificationSection() {
  const { certifications } = portfolioData;

  return (
    <div className="space-y-6">
      {/* Title */}
      <div className="flex items-center gap-3 border-b border-cardBorder pb-3">
        <ShieldCheck className="w-5 h-5 text-accent" />
        <h3 className="text-xl font-bold tracking-tight text-foreground uppercase">
          Certifications
        </h3>
      </div>

      {/* Certifications List */}
      <div className="space-y-4">
        {certifications.map((cert, index) => {
          const content = (
            <div className="flex justify-between items-center w-full group">
              <div className="space-y-1 text-left">
                <span className="font-mono text-[10px] text-neutral-400">
                  {cert.issuer} • {cert.year}
                </span>
                <h4 className="text-base font-bold text-foreground group-hover:text-accent transition-colors duration-200">
                  {cert.name}
                </h4>
              </div>
              {cert.link && (
                <div className="w-8 h-8 rounded-full border border-cardBorder bg-[#F5F4F0] flex items-center justify-center text-neutral-400 group-hover:text-[#7C3AED] group-hover:bg-[#EDE9FE] group-hover:border-[#DDD6FE] transition-all duration-300">
                  <ArrowUpRight className="w-4 h-4 transform group-hover:rotate-45 transition-transform duration-200" />
                </div>
              )}
            </div>
          );

          return cert.link ? (
            <motion.a
              key={cert.name}
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="block p-4 rounded-2xl border border-cardBorder bg-white hover:bg-[#F5F4F0] hover:shadow-[0_4px_16px_rgba(0,0,0,0.06)] transition-all duration-300"
            >
              {content}
            </motion.a>
          ) : (
            <motion.div
              key={cert.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="p-4 rounded-2xl border border-cardBorder bg-white"
            >
              {content}
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
