"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

interface ScrollRevealTextProps {
  lines: string[];
  subtitle?: string;
  className?: string;
}

export default function ScrollRevealText({ lines, subtitle, className }: ScrollRevealTextProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Combine all words to calculate global progress
  const allWords = lines.flatMap(line => line.split(" "));

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  return (
    <div ref={containerRef} className="relative h-[300vh] w-full">
      <div className="sticky top-0 flex h-screen w-full flex-col items-center justify-center overflow-hidden">
        {subtitle && (
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-primary font-black uppercase tracking-[0.3em] text-[10px] mb-8 block"
          >
            {subtitle}
          </motion.span>
        )}
        
        <div className={`max-w-7xl text-center flex flex-col items-center gap-y-4 ${className}`}>
          {lines.map((line, lineIndex) => {
            const lineWords = line.split(" ");
            const previousWordsCount = lines.slice(0, lineIndex).flatMap(l => l.split(" ")).length;

            return (
              <div key={lineIndex} className="flex flex-wrap justify-center gap-x-[0.3em] leading-none">
                {lineWords.map((word, wordIndex) => {
                  const globalIndex = previousWordsCount + wordIndex;
                  const start = globalIndex / allWords.length;
                  const end = (globalIndex + 1) / allWords.length;
                  
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const color = useTransform(scrollYProgress, 
                    [start, (start + end) / 2, end], 
                    ["rgba(255,255,255,0.1)", "rgba(26,86,219,1)", "rgba(255,255,255,1)"]
                  );
                  // eslint-disable-next-line react-hooks/rules-of-hooks
                  const scale = useTransform(scrollYProgress, 
                    [start, (start + end) / 2, end], 
                    [0.98, 1.05, 1]
                  );
                  
                  return (
                    <motion.span
                      key={wordIndex}
                      style={{ color, scale }}
                      className="inline-block transition-shadow duration-300"
                    >
                      {word}
                    </motion.span>
                  );
                })}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
