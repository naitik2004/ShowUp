"use client";

import React from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

/*
  Minimal geometric cartoon sports characters.
  Designed as inline SVGs — no external assets needed.
  Hidden on mobile/tablet, visible on desktop.

  Scroll-driven "pulling" physics + tube-light flicker fix.
*/

/* ------------------------------------------------------------------ */
/*  BASKETBALL                                                        */
/* ------------------------------------------------------------------ */

function BasketballDribbler({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="20" fill="#2563EB" />
      <circle cx="54" cy="24" r="6" fill="white" opacity="0.35" />
      <circle cx="66" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="46" y="50" width="28" height="44" rx="10" fill="#2563EB" />
      <motion.path
        d="M46 58 Q25 80 32 110"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M46 58 Q25 80 32 110", "M46 58 Q25 85 32 115", "M46 58 Q25 80 32 110"] }}
        transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M74 58 Q95 48 102 35" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" fill="none" />
      <path d="M50 92 Q42 125 36 155" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M70 92 Q85 125 90 155" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="160" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="92" cy="160" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.g animate={{ cy: [115, 130, 115] }} transition={{ duration: 0.55, repeat: Infinity, ease: "easeInOut" }}>
        <circle cx="32" cy="115" r="11" fill="#F59E0B" />
        <path d="M24 115 Q32 108 40 115" stroke="white" strokeWidth="1.5" opacity="0.5" fill="none" />
        <path d="M32 104 L32 126" stroke="white" strokeWidth="1.5" opacity="0.5" fill="none" />
      </motion.g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  FOOTBALL                                                          */
/* ------------------------------------------------------------------ */

function FootballKicker({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="20" fill="#2563EB" />
      <circle cx="54" cy="24" r="6" fill="white" opacity="0.35" />
      <circle cx="66" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="46" y="50" width="28" height="44" rx="10" fill="#2563EB" />
      <path d="M46 58 Q28 50 22 38" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" fill="none" />
      <motion.path
        d="M74 58 Q95 70 105 85"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M74 58 Q95 70 105 85", "M74 58 Q98 72 108 88", "M74 58 Q95 70 105 85"] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M50 92 Q44 125 40 158" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <motion.path
        d="M70 92 Q88 115 100 100"
        stroke="#2563EB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M70 92 Q88 115 100 100", "M70 92 Q92 112 105 95", "M70 92 Q88 115 100 100"] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <ellipse cx="38" cy="163" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.ellipse cx="102" cy="98" rx="9" ry="5" fill="white" opacity="0.5"
        animate={{ cx: [100, 103, 100], cy: [100, 97, 100] }}
        transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.g animate={{ cx: [115, 122, 115], cy: [92, 85, 92] }} transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}>
        <ellipse cx="115" cy="92" rx="10" ry="7" fill="white" transform="rotate(-25 115 92)" />
        <path d="M110 92 L120 92" stroke="#2563EB" strokeWidth="1.5" transform="rotate(-25 115 92)" />
      </motion.g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  RUNNER                                                            */
/* ------------------------------------------------------------------ */

function Runner({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="18" fill="#2563EB" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.95" />
      <path d="M55 14 L60 6 L65 14" fill="#60A5FA" />
      <motion.rect x="48" y="48" width="26" height="40" rx="10" fill="#2563EB"
        animate={{ rotate: [-5, -8, -5] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "60px", originY: "68px" }}
      />
      <motion.path
        d="M48 56 Q25 45 18 55"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M48 56 Q25 45 18 55", "M48 56 Q28 48 22 60", "M48 56 Q25 45 18 55"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M74 56 Q95 65 102 80"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M74 56 Q95 65 102 80", "M74 56 Q92 62 98 75", "M74 56 Q95 65 102 80"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M52 86 Q35 110 30 140"
        stroke="#2563EB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M52 86 Q35 110 30 140", "M52 86 Q38 112 34 145", "M52 86 Q35 110 30 140"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M70 86 Q90 105 95 130"
        stroke="#2563EB"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M70 86 Q90 105 95 130", "M70 86 Q88 102 92 125", "M70 86 Q90 105 95 130"] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.ellipse cx="28" cy="145" rx="9" ry="5" fill="white" opacity="0.5"
        animate={{ cx: [28, 30, 28] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.ellipse cx="96" cy="135" rx="9" ry="5" fill="white" opacity="0.5"
        animate={{ cx: [96, 94, 96] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M10 100 L25 100 M8 115 L22 115"
        stroke="#60A5FA"
        strokeWidth="2"
        strokeLinecap="round"
        opacity="0.5"
        animate={{ opacity: [0.1, 0.5, 0.1], x: [0, -6, 0] }}
        transition={{ duration: 0.7, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  CRICKET                                                           */
/* ------------------------------------------------------------------ */

function CricketBatsman({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="55" cy="30" r="18" fill="#2563EB" />
      <circle cx="50" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="60" cy="28" r="2.5" fill="white" opacity="0.95" />
      <path d="M38 22 Q55 8 72 22 L75 26 L35 26 Z" fill="#60A5FA" />
      <rect x="43" y="48" width="26" height="40" rx="10" fill="#2563EB" />
      <path d="M43 56 Q28 65 30 85" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" fill="none" />
      <motion.path
        d="M69 56 Q88 50 92 35"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M69 56 Q88 50 92 35", "M69 56 Q90 48 95 32", "M69 56 Q88 50 92 35"] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.rect x="88" y="-10" width="10" height="70" rx="3" fill="#D4A373"
        animate={{ rotate: [-5, -12, -5] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "93px", originY: "60px" }}
      />
      <motion.rect x="90" y="55" width="6" height="20" rx="2" fill="#2563EB"
        animate={{ rotate: [-5, -12, -5] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
        style={{ originX: "93px", originY: "60px" }}
      />
      <path d="M47 86 Q38 115 35 148" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M65 86 Q78 115 82 148" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="33" cy="153" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="84" cy="153" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.circle cx="110" cy="95" r="6" fill="white"
        animate={{ cx: [130, 100, 130], opacity: [0.6, 1, 0.6] }}
        transition={{ duration: 1.2, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  TENNIS                                                            */
/* ------------------------------------------------------------------ */

function TennisPlayer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="18" fill="#2563EB" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="47" y="50" width="26" height="40" rx="10" fill="#2563EB" />
      <path d="M46 58 Q30 45 22 35" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" fill="none" />
      <motion.path
        d="M74 58 Q90 40 100 30"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M74 58 Q90 40 100 30", "M74 58 Q92 38 102 28", "M74 58 Q90 40 100 30"] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M50 88 Q42 120 38 152" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M70 88 Q82 120 86 152" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="36" cy="157" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="88" cy="157" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.g animate={{ rotate: [-8, 8, -8] }} transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }} style={{ originX: "95px", originY: "30px" }}>
        <ellipse cx="95" cy="30" rx="4" ry="18" fill="#84CC16" />
        <line x1="95" y1="12" x2="95" y2="48" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="87" y1="22" x2="103" y2="22" stroke="white" strokeWidth="1" opacity="0.4" />
        <line x1="87" y1="38" x2="103" y2="38" stroke="white" strokeWidth="1" opacity="0.4" />
      </motion.g>
      <motion.circle cx="105" cy="65" r="5" fill="#84CC16"
        animate={{ cx: [105, 115, 105], cy: [65, 55, 65] }}
        transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  BADMINTON                                                         */
/* ------------------------------------------------------------------ */

function BadmintonPlayer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="18" fill="#2563EB" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="47" y="50" width="26" height="40" rx="10" fill="#2563EB" />
      <path d="M46 58 Q28 55 20 48" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" fill="none" />
      <motion.path
        d="M74 58 Q92 45 100 35"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M74 58 Q92 45 100 35", "M74 58 Q94 43 104 33", "M74 58 Q92 45 100 35"] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M50 88 Q40 120 36 152" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M70 88 Q85 120 90 152" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="157" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="92" cy="157" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.g animate={{ rotate: [5, 20, 5] }} transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }} style={{ originX: "95px", originY: "35px" }}>
        <line x1="95" y1="35" x2="105" y2="12" stroke="#1F2937" strokeWidth="3" strokeLinecap="round" />
        <path d="M100 8 Q110 4 115 10 Q110 18 100 16 Q98 12 100 8Z" fill="white" />
      </motion.g>
      <motion.circle cx="108" cy="50" r="3" fill="white"
        animate={{ cx: [108, 118, 108], cy: [50, 35, 50] }}
        transition={{ duration: 0.9, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  VOLLEYBALL                                                        */
/* ------------------------------------------------------------------ */

function VolleyballPlayer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="18" fill="#2563EB" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="47" y="50" width="26" height="40" rx="10" fill="#2563EB" />
      <motion.path
        d="M46 58 Q25 40 18 30"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M46 58 Q25 40 18 30", "M46 58 Q22 38 15 28", "M46 58 Q25 40 18 30"] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M74 58 Q95 40 102 30"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M74 58 Q95 40 102 30", "M74 58 Q98 38 105 28", "M74 58 Q95 40 102 30"] }}
        transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M50 88 Q40 120 36 150" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M70 88 Q82 120 88 150" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="155" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="90" cy="155" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.g animate={{ cy: [25, 15, 25] }} transition={{ duration: 1.1, repeat: Infinity, ease: "easeInOut" }}>
        <circle cx="60" cy="12" r="14" fill="white" />
        <path d="M50 6 Q60 18 70 6" stroke="#2563EB" strokeWidth="2" fill="none" />
        <path d="M50 18 Q60 6 70 18" stroke="#2563EB" strokeWidth="2" fill="none" />
        <line x1="60" y1="-2" x2="60" y2="26" stroke="#2563EB" strokeWidth="1.5" />
      </motion.g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  HOCKEY                                                            */
/* ------------------------------------------------------------------ */

function HockeyPlayer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="18" fill="#2563EB" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="47" y="50" width="26" height="40" rx="10" fill="#2563EB" />
      <path d="M46 58 Q30 70 22 85" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" fill="none" />
      <motion.path
        d="M74 58 Q90 70 98 85"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M74 58 Q90 70 98 85", "M74 58 Q92 72 102 88", "M74 58 Q90 70 98 85"] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M50 88 Q42 120 38 150" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M70 88 Q82 120 88 150" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="34" cy="155" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="90" cy="155" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.g animate={{ rotate: [3, 12, 3] }} transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }} style={{ originX: "20px", originY: "85px" }}>
        <line x1="20" y1="85" x2="5" y2="130" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
        <path d="M2 128 L12 132" stroke="#1F2937" strokeWidth="5" strokeLinecap="round" />
      </motion.g>
      <motion.circle cx="8" cy="135" r="5" fill="#1F2937"
        animate={{ cx: [8, -2, 8], cy: [135, 140, 135] }}
        transition={{ duration: 1.3, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  GOLF                                                              */
/* ------------------------------------------------------------------ */

function Golfer({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="18" fill="#2563EB" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="47" y="50" width="26" height="40" rx="10" fill="#2563EB" />
      <path d="M46 58 Q30 50 25 42" stroke="#60A5FA" strokeWidth="7" strokeLinecap="round" fill="none" />
      <motion.path
        d="M74 58 Q88 55 95 50"
        stroke="#60A5FA"
        strokeWidth="7"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M74 58 Q88 55 95 50", "M74 58 Q90 50 98 42", "M74 58 Q88 55 95 50"] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M50 88 Q44 120 40 150" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M70 88 Q78 120 82 150" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="38" cy="155" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="84" cy="155" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.g animate={{ rotate: [0, 45, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} style={{ originX: "95px", originY: "50px" }}>
        <line x1="95" y1="50" x2="100" y2="160" stroke="#9CA3AF" strokeWidth="3" strokeLinecap="round" />
      </motion.g>
      <motion.circle cx="102" cy="158" r="4" fill="white"
        animate={{ cx: [102, 115, 102], cy: [158, 155, 158] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  WEIGHTLIFTER                                                      */
/* ------------------------------------------------------------------ */

function Weightlifter({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 120 200" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
      <circle cx="60" cy="30" r="18" fill="#2563EB" />
      <circle cx="55" cy="25" r="5" fill="white" opacity="0.35" />
      <circle cx="65" cy="28" r="2.5" fill="white" opacity="0.95" />
      <rect x="44" y="50" width="32" height="36" rx="10" fill="#2563EB" />
      <motion.path
        d="M44 58 Q25 50 18 45"
        stroke="#60A5FA"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M44 58 Q25 50 18 45", "M44 58 Q22 48 15 42", "M44 58 Q25 50 18 45"] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.path
        d="M76 58 Q95 50 102 45"
        stroke="#60A5FA"
        strokeWidth="8"
        strokeLinecap="round"
        fill="none"
        animate={{ d: ["M76 58 Q95 50 102 45", "M76 58 Q98 48 105 42", "M76 58 Q95 50 102 45"] }}
        transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
      />
      <path d="M48 84 Q42 115 38 148" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <path d="M72 84 Q78 115 82 148" stroke="#2563EB" strokeWidth="8" strokeLinecap="round" fill="none" />
      <ellipse cx="36" cy="153" rx="9" ry="5" fill="white" opacity="0.5" />
      <ellipse cx="84" cy="153" rx="9" ry="5" fill="white" opacity="0.5" />
      <motion.g animate={{ y: [0, -6, 0] }} transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}>
        <rect x="8" y="38" width="8" height="14" rx="2" fill="#4B5563" />
        <rect x="104" y="38" width="8" height="14" rx="2" fill="#4B5563" />
        <line x1="16" y1="45" x2="104" y2="45" stroke="#9CA3AF" strokeWidth="4" strokeLinecap="round" />
      </motion.g>
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  PULL LINE                                                         */
/* ------------------------------------------------------------------ */

function PullLine() {
  const { scrollY } = useScroll();
  const stretch = useSpring(
    useTransform(scrollY, (v) => v * 0.08),
    { stiffness: 80, damping: 18, mass: 0.6 }
  );

  return (
    <motion.div
      className="absolute left-1/2 -translate-x-1/2 -top-[50vh] w-px pointer-events-none"
      style={{ height: "50vh", y: stretch }}
    >
      <div
        className="w-full h-full"
        style={{
          background:
            "linear-gradient(to top, rgba(59,130,246,0.35) 0%, rgba(59,130,246,0.08) 50%, transparent 100%)",
        }}
      />
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  CHARACTER WRAPPER                                                 */
/* ------------------------------------------------------------------ */

function CharacterWrapper({
  children,
  side,
  top,
  delay,
  parallaxSpeed = 0.12,
  floatDuration = 4,
}: {
  children: React.ReactNode;
  side: "left" | "right";
  top: string;
  delay: number;
  parallaxSpeed?: number;
  floatDuration?: number;
}) {
  const { scrollY } = useScroll();

  const pullY = useSpring(
    useTransform(scrollY, (v) => -v * parallaxSpeed),
    { stiffness: 90, damping: 20, mass: 0.8 }
  );

  const rotateZ = useSpring(
    useTransform(scrollY, (v) => Math.sin(v * 0.008) * 2.5),
    { stiffness: 60, damping: 15 }
  );

  const sideClass = side === "left" ? "left-3 xl:left-6" : "right-3 xl:right-6";

  return (
    <motion.div
      className={`fixed ${sideClass} z-20 pointer-events-none hidden lg:flex flex-col items-center`}
      style={{ top, y: pullY, rotateZ }}
      initial={{ opacity: 0, x: side === "left" ? -40 : 40 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay, duration: 1, ease: "easeOut" }}
    >
      <PullLine />
      <motion.div
        animate={{ y: [0, -8, 0] }}
        transition={{
          duration: floatDuration,
          repeat: Infinity,
          ease: "easeInOut",
          delay: delay * 0.4,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/*  RE-IMAGINED: VERTICAL SPORTS TRACK                                */
/* ------------------------------------------------------------------ */

export default function SportyCharacters() {
  const { scrollYProgress } = useScroll();
  
  // Transform scroll progress to different sports states
  const playerIndex = useTransform(scrollYProgress, [0, 0.25, 0.5, 0.75, 1], [0, 1, 2, 3, 4]);
  const opacity = useTransform(scrollYProgress, [0, 0.05, 0.95, 1], [0, 1, 1, 0]);
  
  // Left side components
  const leftComponents = [CricketBatsman, BasketballDribbler, TennisPlayer, VolleyballPlayer, Golfer];
  // Right side components
  const rightComponents = [Runner, FootballKicker, BadmintonPlayer, HockeyPlayer, Weightlifter];

  return (
    <div className="fixed inset-0 pointer-events-none z-20 hidden lg:block">
      {/* Left Track */}
      <motion.div 
        style={{ opacity }}
        className="absolute left-6 top-0 bottom-0 w-24 flex flex-col items-center justify-center"
      >
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        
        <motion.div
          className="relative"
          animate={{ y: [0, -15, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        >
          {leftComponents.map((Comp, i) => (
            <motion.div
              key={`left-${i}`}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              style={{
                opacity: useTransform(playerIndex, (v) => {
                  const dist = Math.abs(v - i);
                  return dist < 0.5 ? 1 : dist < 1 ? 1 - (dist - 0.5) * 2 : 0;
                }),
                scale: useTransform(playerIndex, (v) => {
                  const dist = Math.abs(v - i);
                  return dist < 1 ? 1 + (1 - dist) * 0.2 : 0.8;
                }),
              }}
            >
              <Comp className="w-24 h-40 xl:w-32 xl:h-56 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Right Track */}
      <motion.div 
        style={{ opacity }}
        className="absolute right-6 top-0 bottom-0 w-24 flex flex-col items-center justify-center"
      >
        <div className="absolute inset-y-0 left-1/2 -translate-x-1/2 w-px bg-gradient-to-b from-transparent via-primary/20 to-transparent" />
        
        <motion.div
          className="relative"
          animate={{ y: [0, 15, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        >
          {rightComponents.map((Comp, i) => (
            <motion.div
              key={`right-${i}`}
              className="absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"
              initial={{ opacity: 0, scale: 0.8, filter: "blur(10px)" }}
              style={{
                opacity: useTransform(playerIndex, (v) => {
                  const dist = Math.abs(v - i);
                  return dist < 0.5 ? 1 : dist < 1 ? 1 - (dist - 0.5) * 2 : 0;
                }),
                scale: useTransform(playerIndex, (v) => {
                  const dist = Math.abs(v - i);
                  return dist < 1 ? 1 + (1 - dist) * 0.2 : 0.8;
                }),
              }}
            >
              <Comp className="w-24 h-40 xl:w-32 xl:h-56 drop-shadow-[0_0_20px_rgba(37,99,235,0.4)]" />
            </motion.div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scrolling Progress Indicator on the track */}
      <motion.div 
        className="absolute left-[31px] w-1 bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ 
          top: 0,
          height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          opacity: 0.4
        }} 
      />
      <motion.div 
        className="absolute right-[31px] w-1 bg-primary shadow-[0_0_10px_rgba(37,99,235,0.8)]"
        style={{ 
          top: 0,
          height: useTransform(scrollYProgress, [0, 1], ["0%", "100%"]),
          opacity: 0.4
        }} 
      />
    </div>
  );
}
