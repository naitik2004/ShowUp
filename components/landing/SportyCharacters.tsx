"use client";

import React from "react";
import { motion } from "framer-motion";

/*
  Minimal geometric cartoon sports characters.
  Designed as inline SVGs — no external assets needed.
  Hidden on mobile/tablet, visible on desktop.
*/

function BasketballDribbler({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <circle cx="60" cy="30" r="20" fill="#1A56DB" opacity="0.9" />
      <circle cx="54" cy="24" r="6" fill="white" opacity="0.2" />
      {/* Eye */}
      <circle cx="66" cy="28" r="2.5" fill="white" opacity="0.8" />
      {/* Torso */}
      <rect x="46" y="50" width="28" height="44" rx="10" fill="#1A56DB" opacity="0.75" />
      {/* Left arm (dribbling) */}
      <motion.path
        d="M46 58 Q25 80 32 110"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        animate={{ d: ["M46 58 Q25 80 32 110", "M46 58 Q25 85 32 115", "M46 58 Q25 80 32 110"] }}
        transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right arm (up) */}
      <path
        d="M74 58 Q95 48 102 35"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Left leg */}
      <path
        d="M50 92 Q42 125 36 155"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Right leg */}
      <path
        d="M70 92 Q85 125 90 155"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Shoes */}
      <ellipse cx="34" cy="160" rx="9" ry="5" fill="white" opacity="0.25" />
      <ellipse cx="92" cy="160" rx="9" ry="5" fill="white" opacity="0.25" />
      {/* Basketball — bounces in sync with arm */}
      <motion.g
        animate={{ cy: [115, 130, 115] }}
        transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
      >
        <circle cx="32" cy="115" r="11" fill="#D97706" opacity="0.9" />
        <path
          d="M24 115 Q32 108 40 115"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
        />
        <path
          d="M32 104 L32 126"
          stroke="white"
          strokeWidth="1.5"
          opacity="0.4"
          fill="none"
        />
      </motion.g>
    </svg>
  );
}

function FootballKicker({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <circle cx="60" cy="30" r="20" fill="#1A56DB" opacity="0.9" />
      <circle cx="54" cy="24" r="6" fill="white" opacity="0.2" />
      {/* Eye */}
      <circle cx="66" cy="28" r="2.5" fill="white" opacity="0.8" />
      {/* Torso */}
      <rect x="46" y="50" width="28" height="44" rx="10" fill="#1A56DB" opacity="0.75" />
      {/* Left arm (balanced) */}
      <path
        d="M46 58 Q28 50 22 38"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Right arm (kicking back) */}
      <motion.path
        d="M74 58 Q95 70 105 85"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        animate={{ d: ["M74 58 Q95 70 105 85", "M74 58 Q98 72 108 88", "M74 58 Q95 70 105 85"] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Left leg (planted) */}
      <path
        d="M50 92 Q44 125 40 158"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Right leg (kicking) */}
      <motion.path
        d="M70 92 Q88 115 100 100"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        animate={{ d: ["M70 92 Q88 115 100 100", "M70 92 Q92 112 105 95", "M70 92 Q88 115 100 100"] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Shoes */}
      <ellipse cx="38" cy="163" rx="9" ry="5" fill="white" opacity="0.25" />
      <motion.ellipse
        cx="102"
        cy="98"
        rx="9"
        ry="5"
        fill="white"
        opacity="0.25"
        animate={{ cx: [100, 103, 100], cy: [100, 97, 100] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Football */}
      <motion.g
        animate={{ cx: [115, 122, 115], cy: [92, 85, 92] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ellipse cx="115" cy="92" rx="10" ry="7" fill="white" opacity="0.9" transform="rotate(-25 115 92)" />
        <path
          d="M110 92 L120 92"
          stroke="#1A56DB"
          strokeWidth="1.5"
          opacity="0.5"
          transform="rotate(-25 115 92)"
        />
      </motion.g>
    </svg>
  );
}

function Runner({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <circle cx="60" cy="30" r="18" fill="#1A56DB" opacity="0.9" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.2" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.8" />
      {/* Hair/spike */}
      <path d="M55 14 L60 6 L65 14" fill="#1A56DB" opacity="0.9" />
      {/* Torso — leaning forward */}
      <motion.rect
        x="48"
        y="48"
        width="26"
        height="40"
        rx="10"
        fill="#1A56DB"
        opacity="0.75"
        animate={{ rotate: [-5, -8, -5] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "60px", originY: "68px" }}
      />
      {/* Left arm (forward swing) */}
      <motion.path
        d="M48 56 Q25 45 18 55"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        animate={{ d: ["M48 56 Q25 45 18 55", "M48 56 Q28 48 22 60", "M48 56 Q25 45 18 55"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right arm (back swing) */}
      <motion.path
        d="M74 56 Q95 65 102 80"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        animate={{ d: ["M74 56 Q95 65 102 80", "M74 56 Q92 62 98 75", "M74 56 Q95 65 102 80"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Left leg (back) */}
      <motion.path
        d="M52 86 Q35 110 30 140"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        animate={{ d: ["M52 86 Q35 110 30 140", "M52 86 Q38 112 34 145", "M52 86 Q35 110 30 140"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Right leg (forward) */}
      <motion.path
        d="M70 86 Q90 105 95 130"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        animate={{ d: ["M70 86 Q90 105 95 130", "M70 86 Q88 102 92 125", "M70 86 Q90 105 95 130"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Shoes */}
      <motion.ellipse
        cx="28"
        cy="145"
        rx="9"
        ry="5"
        fill="white"
        opacity="0.25"
        animate={{ cx: [28, 30, 28] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.ellipse
        cx="96"
        cy="135"
        rx="9"
        ry="5"
        fill="white"
        opacity="0.25"
        animate={{ cx: [96, 94, 96] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Speed lines */}
      <motion.path
        d="M10 100 L25 100 M8 115 L22 115"
        stroke="#1A56DB"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.3"
        animate={{ opacity: [0.1, 0.4, 0.1], x: [0, -6, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

function CricketBatsman({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 120 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Head */}
      <circle cx="55" cy="30" r="18" fill="#1A56DB" opacity="0.9" />
      <circle cx="50" cy="25" r="5" fill="white" opacity="0.2" />
      <circle cx="60" cy="28" r="2.5" fill="white" opacity="0.8" />
      {/* Cap */}
      <path d="M38 22 Q55 8 72 22 L75 26 L35 26 Z" fill="#1A56DB" opacity="0.95" />
      {/* Torso */}
      <rect x="43" y="48" width="26" height="40" rx="10" fill="#1A56DB" opacity="0.75" />
      {/* Left arm (holding bat) */}
      <path
        d="M43 56 Q28 65 30 85"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
      />
      {/* Right arm (holding bat) */}
      <motion.path
        d="M69 56 Q88 50 92 35"
        stroke="#1A56DB"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        opacity="0.7"
        animate={{ d: ["M69 56 Q88 50 92 35", "M69 56 Q90 48 95 32", "M69 56 Q88 50 92 35"] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      {/* Bat */}
      <motion.rect
        x="88"
        y="-10"
        width="10"
        height="70"
        rx="3"
        fill="#D4A373"
        opacity="0.85"
        animate={{ rotate: [-5, -12, -5] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "93px", originY: "60px" }}
      />
      {/* Bat handle */}
      <motion.rect
        x="90"
        y="55"
        width="6"
        height="20"
        rx="2"
        fill="#1A56DB"
        opacity="0.8"
        animate={{ rotate: [-5, -12, -5] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "93px", originY: "60px" }}
      />
      {/* Left leg */}
      <path
        d="M47 86 Q38 115 35 148"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Right leg */}
      <path
        d="M65 86 Q78 115 82 148"
        stroke="#1A56DB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
      />
      {/* Shoes */}
      <ellipse cx="33" cy="153" rx="9" ry="5" fill="white" opacity="0.25" />
      <ellipse cx="84" cy="153" rx="9" ry="5" fill="white" opacity="0.25" />
      {/* Ball approaching */}
      <motion.circle
        cx="110"
        cy="95"
        r="6"
        fill="white"
        opacity="0.9"
        animate={{ cx: [130, 100, 130], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */

export default function SportyCharacters() {
  return (
    <>
      {/* Left side characters */}
      <motion.div
        className="fixed left-4 xl:left-8 bottom-[15%] z-20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <BasketballDribbler className="w-20 h-32 xl:w-24 xl:h-40 opacity-60" />
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed left-4 xl:left-10 top-[25%] z-20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        >
          <CricketBatsman className="w-16 h-28 xl:w-20 xl:h-36 opacity-50" />
        </motion.div>
      </motion.div>

      {/* Right side characters */}
      <motion.div
        className="fixed right-4 xl:right-8 bottom-[20%] z-20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.8, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        >
          <FootballKicker className="w-20 h-32 xl:w-24 xl:h-40 opacity-60" />
        </motion.div>
      </motion.div>

      <motion.div
        className="fixed right-4 xl:right-10 top-[30%] z-20 pointer-events-none hidden lg:block"
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 2.2, duration: 1 }}
      >
        <motion.div
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
        >
          <Runner className="w-16 h-28 xl:w-20 xl:h-36 opacity-50" />
        </motion.div>
      </motion.div>
    </>
  );
}
