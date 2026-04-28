"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";

interface Particle {
  id: number;
  x: string;
  y: string;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

function useParticles(count: number): Particle[] {
  return useMemo(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      x: `${Math.random() * 100}%`,
      y: `${Math.random() * 100}%`,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 10 + 10,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
  }, [count]);
}

export default function BackgroundEffects() {
  const leftParticles = useParticles(18);
  const rightParticles = useParticles(18);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Left side large gradient blob */}
      <motion.div
        animate={{
          x: [0, 30, 0],
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
        }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -left-[300px] top-[10%] w-[600px] h-[600px] rounded-full opacity-30"
        style={{
          background:
            "radial-gradient(circle, rgba(26,86,219,0.25) 0%, rgba(26,86,219,0.05) 50%, transparent 70%)",
          filter: "blur(80px)",
        }}
      />

      {/* Right side large gradient blob */}
      <motion.div
        animate={{
          x: [0, -30, 0],
          y: [0, 20, 0],
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
        className="absolute -right-[300px] top-[40%] w-[700px] h-[700px] rounded-full opacity-25"
        style={{
          background:
            "radial-gradient(circle, rgba(26,86,219,0.2) 0%, rgba(100,50,220,0.08) 50%, transparent 70%)",
          filter: "blur(100px)",
        }}
      />

      {/* Left side floating geometric ring */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute left-[2%] top-[25%] w-40 h-40 md:w-56 md:h-56 opacity-10"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="90"
            stroke="url(#gradLeft)"
            strokeWidth="0.5"
            strokeDasharray="8 8"
          />
          <defs>
            <linearGradient id="gradLeft" x1="0" y1="0" x2="200" y2="200">
              <stop stopColor="#1A56DB" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Right side floating geometric ring */}
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 80, repeat: Infinity, ease: "linear" }}
        className="absolute right-[1%] top-[60%] w-48 h-48 md:w-72 md:h-72 opacity-10"
      >
        <svg viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle
            cx="100"
            cy="100"
            r="80"
            stroke="url(#gradRight)"
            strokeWidth="0.5"
            strokeDasharray="4 12"
          />
          <circle
            cx="100"
            cy="100"
            r="60"
            stroke="url(#gradRight)"
            strokeWidth="0.3"
            strokeDasharray="2 8"
            opacity="0.5"
          />
          <defs>
            <linearGradient id="gradRight" x1="200" y1="0" x2="0" y2="200">
              <stop stopColor="#1A56DB" />
              <stop offset="1" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>
          </defs>
        </svg>
      </motion.div>

      {/* Left side floating dots */}
      <div className="absolute left-0 top-0 w-[15%] h-full hidden lg:block">
        {leftParticles.map((p) => (
          <motion.div
            key={`l-${p.id}`}
            className="absolute rounded-full bg-primary"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -40, 0],
              opacity: [p.opacity, p.opacity * 2, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Right side floating dots */}
      <div className="absolute right-0 top-0 w-[15%] h-full hidden lg:block">
        {rightParticles.map((p) => (
          <motion.div
            key={`r-${p.id}`}
            className="absolute rounded-full bg-white"
            style={{
              left: p.x,
              top: p.y,
              width: p.size,
              height: p.size,
              opacity: p.opacity,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [p.opacity, p.opacity * 1.8, p.opacity],
            }}
            transition={{
              duration: p.duration,
              delay: p.delay,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      {/* Left side tech-style vertical line accent */}
      <motion.div
        animate={{ opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[3%] top-[15%] bottom-[15%] w-px hidden xl:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(26,86,219,0.4), rgba(255,255,255,0.2), rgba(26,86,219,0.4), transparent)",
        }}
      />

      {/* Right side tech-style vertical line accent */}
      <motion.div
        animate={{ opacity: [0.2, 0.5, 0.2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[3%] top-[20%] bottom-[20%] w-px hidden xl:block"
        style={{
          background:
            "linear-gradient(to bottom, transparent, rgba(255,255,255,0.15), rgba(26,86,219,0.3), rgba(255,255,255,0.15), transparent)",
        }}
      />

      {/* Small floating squares - left */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 45, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="absolute left-[5%] top-[45%] w-3 h-3 border border-primary/30 rotate-45 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [0, -30, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        className="absolute left-[8%] top-[70%] w-2 h-2 bg-primary/20 rounded-sm hidden md:block"
      />

      {/* Small floating squares - right */}
      <motion.div
        animate={{ y: [0, 25, 0], rotate: [0, -45, 0] }}
        transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute right-[6%] top-[30%] w-3 h-3 border border-white/10 rotate-12 hidden md:block"
      />
      <motion.div
        animate={{ y: [0, -15, 0], rotate: [0, 60, 0] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 3 }}
        className="absolute right-[4%] top-[55%] w-2 h-2 bg-white/10 rounded-full hidden md:block"
      />

      {/* Bottom left subtle glow */}
      <div
        className="absolute -left-[200px] bottom-[5%] w-[400px] h-[400px] rounded-full opacity-20 hidden lg:block"
        style={{
          background:
            "radial-gradient(circle, rgba(26,86,219,0.15) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
    </div>
  );
}
