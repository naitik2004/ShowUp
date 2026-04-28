"use client";

import React from "react";
import { motion } from "framer-motion";
import { MapPin, ArrowRight, Play, Trophy } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-20 px-6">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-primary/10 blur-[120px] rounded-full pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        {/* Left: Content */}
        <div className="text-left space-y-10">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full"
          >
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-white/60">
              Live in India • Launching v1.0
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-6xl md:text-8xl font-black text-pro-hero leading-[0.9] tracking-tighter"
          >
            FIND YOUR <br />
            GAME. FIND <br />
            YOUR <span className="text-primary italic">PEOPLE.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/50 font-medium max-w-lg leading-relaxed"
          >
            ShowUp is the premier social layer for recreational sports. 
            Discover games, build your reputation, and connect with players nearby.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-wrap gap-4"
          >
            <button className="btn-primary flex items-center gap-2">
              Find a Game <ArrowRight size={18} />
            </button>
            <button className="btn-secondary flex items-center gap-2">
              <Play size={16} fill="currentColor" /> Watch Demo
            </button>
          </motion.div>
        </div>

        {/* Right: The Premium Floating Map Deck */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateX: 10, rotateY: -10 }}
          animate={{ opacity: 1, scale: 1, rotateX: 0, rotateY: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          whileHover={{ rotateX: -5, rotateY: 5, scale: 1.02 }}
          className="relative lg:h-[650px] w-full perspective-1000 hidden lg:block cursor-default"
        >
          {/* Main App Container - Full Bleed */}
          <div className="glass-pro rounded-[4rem] w-full h-full overflow-hidden shadow-[0_40px_100px_-20px_rgba(26,86,219,0.3)] relative border border-white/10 group">
            {/* The Snap Map Style Image */}
            <div className="absolute inset-0 z-0 scale-110 group-hover:scale-100 transition-transform duration-1000">
                <Image 
                    src="/snap-map.png" 
                    alt="Snap Map Vibe" 
                    fill 
                    className="object-cover opacity-90"
                />
                {/* Dynamic Holographic Sweep */}
                <motion.div 
                    animate={{ x: ["-100%", "200%"] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", repeatDelay: 4 }}
                    className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 z-10"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/90" />
            </div>

            {/* Central User Location */}
            <div className="absolute top-[55%] left-[52%] z-20">
                <div className="relative">
                    <div className="absolute -inset-6 bg-primary/50 rounded-full blur-2xl animate-pulse" />
                    <div className="w-6 h-6 bg-primary rounded-full border-[3px] border-white relative z-10 shadow-[0_0_20px_rgba(26,86,219,0.8)]" />
                </div>
            </div>

            {/* Premium Floating Pins */}
            {[
                { top: "25%", left: "30%", emoji: "⚽", slots: 3, delay: 0 },
                { top: "65%", left: "20%", emoji: "🏸", slots: 1, delay: 0.5 },
                { top: "35%", left: "75%", emoji: "🏀", slots: 5, delay: 1 },
                { top: "15%", left: "60%", emoji: "🏏", slots: 2, delay: 1.5 }
            ].map((pin, i) => (
                <motion.div
                    key={i}
                    animate={{ y: [0, -12, 0] }}
                    transition={{ duration: 4, repeat: Infinity, delay: pin.delay }}
                    className="absolute z-20 flex flex-col items-center cursor-pointer"
                    style={{ top: pin.top, left: pin.left }}
                >
                    <div className="bg-white/10 backdrop-blur-2xl border border-white/20 px-4 py-2 rounded-3xl flex items-center gap-3 shadow-[0_10px_30px_rgba(0,0,0,0.3)] hover:bg-primary transition-all hover:scale-110">
                        <span className="text-xl">{pin.emoji}</span>
                        <span className="text-[11px] font-black text-white tracking-widest">{pin.slots} SLOTS</span>
                    </div>
                    <div className="w-[3px] h-4 bg-gradient-to-b from-white/30 to-transparent mt-1 shadow-2xl" />
                </motion.div>
            ))}

            {/* Premium Detail Card Overlay */}
            <motion.div
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1, type: "spring", stiffness: 50 }}
              className="absolute bottom-10 left-10 right-10 p-8 glass-pro rounded-[3rem] border-primary/30 shadow-[0_20px_60px_rgba(0,0,0,0.5)] bg-black/60 backdrop-blur-3xl z-30"
            >
              <div className="flex justify-between items-start mb-8">
                <div className="flex gap-5">
                  <div className="w-14 h-14 bg-primary rounded-3xl flex items-center justify-center shadow-lg shadow-primary/40">
                    <Trophy className="text-white" size={28} />
                  </div>
                  <div>
                    <h3 className="text-white font-black text-xl tracking-tight leading-tight uppercase italic">Sector 14 Match</h3>
                    <p className="text-white/40 text-xs font-black mt-2 tracking-widest">FOOTBALL • 5:30 PM • LIVE NOW</p>
                  </div>
                </div>
                <div className="bg-white/5 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-black text-primary tracking-tighter">JOIN REQUESTED</div>
              </div>
              <button className="w-full py-5 bg-primary rounded-2xl text-[11px] font-black text-white uppercase tracking-[0.3em] shadow-[0_10px_30px_rgba(26,86,219,0.3)] hover:scale-[1.02] active:scale-95 transition-all">
                Join the Game
              </button>
            </motion.div>
          </div>

          {/* Floating Glowing Orbs */}
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
          <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-primary/10 rounded-full blur-[100px] animate-pulse delay-1000" />
        </motion.div>
      </div>
    </section>
  );
}
