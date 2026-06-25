"use client";

import React from "react";
import BentoCard from "./BentoCard";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon, XIcon } from "./Icons";
import { motion } from "framer-motion";

export default function ContactSection() {
  const { socials, contactMessage } = portfolioData;

  const socialLinks = [
    {
      name: "GitHub",
      url: socials.github,
      icon: <GithubIcon className="w-6 h-6" />,
      color: "hover:text-[#F0F6FC]",
    },
    {
      name: "LinkedIn",
      url: socials.linkedin,
      icon: <LinkedinIcon className="w-6 h-6" />,
      color: "hover:text-[#0A66C2]",
    },
    {
      name: "Twitter",
      url: socials.twitter,
      icon: <XIcon className="w-6 h-6" />,
      color: "hover:text-accent",
    },
    {
      name: "Email",
      url: `mailto:${socials.email}`,
      icon: <Mail className="w-6 h-6" />,
      color: "hover:text-accent",
    },
  ];

  return (
    <SectionWrapper id="contact" number="[04]" title="Get In Touch" subtitle="connect.exe">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {/* Call to Action Text Card */}
        <BentoCard colSpan="md:col-span-2 col-span-1" className="min-h-[250px] flex flex-col justify-between">
          <div className="space-y-4">
            <span className="font-mono text-xs text-accent font-bold">
              {"// LET'S COLLABORATE"}
            </span>
            <h3 className="text-3xl sm:text-4xl font-display font-black uppercase tracking-tight leading-none text-foreground">
              Have an idea? <br />
              Let&apos;s build it.
            </h3>
            <p className="text-sm sm:text-base text-neutral-400 font-sans leading-relaxed max-w-md pt-2">
              {contactMessage}
            </p>
          </div>

          <div className="mt-8">
            <a
              href={`mailto:${socials.email}`}
              className="inline-flex items-center gap-3 px-6 py-4.5 rounded-2xl bg-accent text-black font-mono font-bold text-sm tracking-tight hover:bg-accent-hover active:scale-98 transition-all duration-200"
            >
              <span>Send an Email</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </BentoCard>

        {/* Social Grid Card */}
        <BentoCard colSpan="col-span-1" className="min-h-[250px] flex flex-col justify-between">
          <div className="space-y-2 mb-4">
            <span className="font-mono text-xs text-neutral-500 font-bold">
              {"// NETWORKS"}
            </span>
            <h3 className="text-lg font-display font-black uppercase tracking-tight text-neutral-300">
              Find me here
            </h3>
          </div>

          <div className="grid grid-cols-2 gap-4 h-full">
            {socialLinks.map((link) => {
              if (!link.url) return null;

              return (
                <motion.a
                  key={link.name}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{
                    scale: 1.05,
                    borderColor: "rgba(215, 255, 74, 0.6)",
                    boxShadow: "0 0 20px 2px rgba(215, 255, 74, 0.15)",
                  }}
                  transition={{ type: "spring", stiffness: 300, damping: 15 }}
                  className={`flex flex-col items-center justify-center gap-2 border border-cardBorder bg-black/40 rounded-2xl p-4 text-neutral-400 transition-colors duration-200 ${link.color}`}
                >
                  {link.icon}
                  <span className="font-mono text-[10px] uppercase font-bold tracking-wider">
                    {link.name}
                  </span>
                </motion.a>
              );
            })}
          </div>
        </BentoCard>
      </div>
    </SectionWrapper>
  );
}
