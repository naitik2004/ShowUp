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
        
        {/* Reduced spacing for navbar */}
        <div className="h-20 md:h-24" />
        
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/20 px-3 py-1 rounded-full mb-4">
            <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse" />
            <span className="text-[9px] font-black uppercase tracking-[0.2em] text-primary">Discovery Mode</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-white tracking-tighter italic uppercase leading-none mb-4">
            EXPLORE <span className="text-primary">SPORTS.</span>
          </h1>
          <p className="text-sm md:text-base text-white/40 font-bold max-w-xl leading-relaxed">
            Discover matches and join local squads across India.
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
