"use client";

import React from "react";
import BentoCard from "./BentoCard";
import SectionWrapper from "./SectionWrapper";
import { portfolioData } from "@/data/portfolio";
import { Play } from "lucide-react";

export default function AboutSection() {
  const { interests } = portfolioData;

  // Map custom styling and decorations for specific index cards in the bento grid
  const getCardGridSpan = (index: number) => {
    switch (index) {
      case 0: // Matcha
        return { colSpan: "col-span-1", rowSpan: "row-span-1" };
      case 1: // Music (wide)
        return { colSpan: "md:col-span-2 col-span-2", rowSpan: "row-span-1" };
      case 2: // AI
        return { colSpan: "md:col-span-2 col-span-2", rowSpan: "row-span-1" };
      case 3: // Gaming
        return { colSpan: "col-span-1", rowSpan: "row-span-1" };
      case 4: // Bento Layouts
        return { colSpan: "col-span-1", rowSpan: "row-span-1" };
      case 5: // Badminton (wide)
        return { colSpan: "md:col-span-2 col-span-2", rowSpan: "row-span-1" };
      default:
        return { colSpan: "col-span-1", rowSpan: "row-span-1" };
    }
  };

  return (
    <SectionWrapper id="about" number="[01]" title="What I Love" subtitle="interests.json">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {interests.map((interest, index) => {
          const { colSpan, rowSpan } = getCardGridSpan(index);
          const delay = index * 0.1;

          return (
            <BentoCard
              key={interest.title}
              colSpan={colSpan}
              rowSpan={rowSpan}
              delay={delay}
              className="min-h-[200px] flex flex-col justify-between"
            >
              {/* Card Header (Emoji & Title) */}
              <div className="space-y-4">
                <div className="text-4xl select-none filter drop-shadow-[0_4px_10px_rgba(167,139,250,0.15)]">
                  {interest.emoji}
                </div>
                <div>
                  <h3 className="text-xl font-bold tracking-tight uppercase text-foreground">
                    {interest.title}
                  </h3>
                  <p className="text-sm text-neutral-500 font-sans mt-2 leading-relaxed">
                    {interest.description}
                  </p>
                </div>
              </div>

              {/* Decorative components inside bento cards */}
              {index === 1 && ( // Music (Wide)
                <div className="mt-6 flex items-center justify-between bg-[#F5F4F0] border border-cardBorder rounded-2xl p-3 text-xs font-mono text-[#888880]">
                  <div className="flex items-center gap-2">
                    <button className="w-6 h-6 rounded-full bg-accent text-white flex items-center justify-center hover:scale-105 transition-transform">
                      <Play className="w-3 h-3 fill-white text-white ml-[1.5px]" />
                    </button>
                    <div className="flex flex-col">
                      <span className="text-foreground font-bold truncate max-w-[130px] sm:max-w-[200px]">Nadaan Parindey</span>
                      <span className="text-[10px] text-neutral-400">A.R. Rahman • Rockstar</span>
                    </div>
                  </div>
                  <div className="flex items-end gap-[2px] h-6 px-2">
                    <span className="w-[3px] bg-accent animate-[bounce_1.2s_infinite] h-3" />
                    <span className="w-[3px] bg-accent animate-[bounce_0.8s_infinite] h-5" />
                    <span className="w-[3px] bg-accent animate-[bounce_1.5s_infinite] h-2" />
                    <span className="w-[3px] bg-accent animate-[bounce_1s_infinite] h-4" />
                  </div>
                </div>
              )}

              {/* {index === 2 && ( // AI (Wide) */}
              {/* <div className="mt-6 font-mono text-[10px] bg-black/40 border border-cardBorder rounded-2xl p-3 text-neutral-400 flex items-center gap-2">
                  <Terminal className="w-4 h-4 text-accent" /> */}
              {/* <span className="truncate">ishika ~ $ python -m train_agent --temperature=1.337</span> */}
              {/* </div> */}
              {/* )} */}

              {index === 4 && ( // Bento card (Mini bento preview)
                <div className="mt-6 grid grid-cols-3 gap-1 h-8 opacity-60">
                  <div className="bg-[#E8E6E0] rounded-sm border border-[#D5D3CB]" />
                  <div className="bg-accent rounded-sm col-span-2" />
                  <div className="bg-[#E8E6E0] rounded-sm col-span-2 border border-[#D5D3CB]" />
                  <div className="bg-[#E8E6E0] rounded-sm border border-[#D5D3CB]" />
                </div>
              )}

              {index === 5 && ( // Badminton (Wide)
                <div className="mt-6 flex justify-between items-center text-xs font-mono text-neutral-500">
                  <span>🏸 Weekend Matches: Always Ready</span>
                  <span className="text-accent/40">● ● ● ○</span>
                </div>
              )}
            </BentoCard>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
