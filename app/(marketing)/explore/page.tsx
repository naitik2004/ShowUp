"use client";

import React from "react";
import Navbar from "@/components/landing/Navbar";
import SportsDiscovery from "@/components/landing/SportsDiscovery";
import BackgroundEffects from "@/components/landing/BackgroundEffects";
import SportyCharacters from "@/components/landing/SportyCharacters";

export default function ExplorePage() {
  return (
    <main className="min-h-screen bg-black relative">
      <BackgroundEffects />
      <SportyCharacters />
      
      <div className="relative z-10">
        <Navbar />
        
        {/* Simple spacing for navbar */}
        <div className="h-32 md:h-40" />
        
        <div className="max-w-7xl mx-auto px-6 mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-4 py-2 rounded-full mb-6">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-[0.2em] text-primary">Discovery Mode</span>
          </div>
          <h1 className="text-5xl md:text-8xl font-black text-white tracking-tighter italic uppercase leading-none mb-6">
            EXPLORE <br />
            <span className="text-primary">SPORTS.</span>
          </h1>
          <p className="text-lg md:text-xl text-white/40 font-bold max-w-2xl leading-relaxed">
            Discover active matches, join local squads, and explore the most popular sports communities in India.
          </p>
        </div>
        
        <SportsDiscovery />
        
        <footer className="py-20 border-t border-white/5 bg-black/50 backdrop-blur-xl">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-white/20 text-xs font-black uppercase tracking-widest">
              © 2026 ShowUp Technologies. All rights reserved.
            </p>
          </div>
        </footer>
      </div>
    </main>
  );
}
