"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const SPORTS_DATA = [
  { id: "cricket", name: "Cricket", icon: "🏏", type: "Team", players: "11v11 / 6v6", level: "All Levels", color: "from-orange-500 to-red-600" },
  { id: "football", name: "Football", icon: "⚽", type: "Team", players: "5v5 / 7v7 / 11v11", level: "Intermediate+", color: "from-green-500 to-emerald-700" },
  { id: "basketball", name: "Basketball", icon: "🏀", type: "Team", players: "3v3 / 5v5", level: "Competitive", color: "from-orange-400 to-orange-600" },
  { id: "badminton", name: "Badminton", icon: "🏸", type: "Racket", players: "1v1 / 2v2", level: "Beginner Friendly", color: "from-blue-400 to-blue-600" },
  { id: "volleyball", name: "Volleyball", icon: "🏐", type: "Team", players: "6v6", level: "All Levels", color: "from-yellow-400 to-orange-500" },
  { id: "pickleball", name: "Pickleball", icon: "🏓", type: "Racket", players: "1v1 / 2v2", level: "Casual", color: "from-purple-500 to-pink-600" },
  { id: "tennis", name: "Lawn Tennis", icon: "🎾", type: "Racket", players: "1v1 / 2v2", level: "Advanced", color: "from-lime-400 to-green-600" },
  { id: "table-tennis", name: "Table Tennis", icon: "🏓", type: "Racket", players: "1v1 / 2v2", level: "Intermediate", color: "from-red-400 to-red-600" },
  { id: "swimming", name: "Swimming", icon: "🏊", type: "Individual/Club", players: "Group Laps", level: "All Levels", color: "from-cyan-400 to-blue-500" },
];

export default function SportsDiscovery() {
  const [filter, setFilter] = useState("All");
  const [search, setSearch] = useState("");

  const filteredSports = SPORTS_DATA.filter(sport => {
    const matchesFilter = filter === "All" || sport.type === filter;
    const matchesSearch = sport.name.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <section className="py-32 px-6 relative overflow-hidden bg-black" id="explore">
      {/* Background accents */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(37,99,235,0.05),transparent_70%)] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Filter Bar */}
        <div className="mb-12 flex flex-col md:flex-row items-center justify-between gap-6 bg-white/[0.03] border border-white/10 p-4 rounded-3xl backdrop-blur-xl">
          <div className="flex flex-wrap gap-2">
            {["All", "Team", "Racket", "Individual/Club"].map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className={`px-6 py-2.5 rounded-full text-xs font-black uppercase tracking-widest transition-all ${
                  filter === f 
                    ? "bg-primary text-white shadow-lg shadow-primary/30" 
                    : "bg-white/5 text-white/40 hover:bg-white/10"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
          
          <div className="relative w-full md:w-80">
            <input 
              type="text" 
              placeholder="Search sports..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-black/40 border border-white/10 rounded-full px-6 py-3 text-sm text-white placeholder:text-white/20 focus:outline-none focus:border-primary/50 transition-colors"
            />
            <div className="absolute right-4 top-1/2 -translate-y-1/2 text-white/20">
              🔍
            </div>
          </div>
        </div>

        {/* Sports Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredSports.map((sport) => (
              <motion.div
                layout
                key={sport.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -10 }}
                className="group relative bg-white/[0.02] border border-white/5 rounded-[2.5rem] p-8 overflow-hidden hover:bg-white/[0.04] transition-colors"
              >
                {/* Decorative background gradient */}
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${sport.color} blur-[60px] opacity-10 group-hover:opacity-30 transition-opacity`} />
                
                <div className="relative z-10">
                  <div className="text-5xl mb-6 transform group-hover:scale-110 transition-transform duration-500 inline-block">
                    {sport.icon}
                  </div>
                  <h3 className="text-2xl font-black text-white mb-2 tracking-tight uppercase italic italic">
                    {sport.name}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-6">
                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-white/40 uppercase tracking-widest border border-white/5">
                      {sport.type}
                    </span>
                    <span className="px-3 py-1 bg-white/5 rounded-lg text-[10px] font-bold text-white/40 uppercase tracking-widest border border-white/5">
                      {sport.players}
                    </span>
                  </div>
                  
                  <div className="pt-6 border-t border-white/5 flex items-center justify-between">
                    <div>
                      <div className="text-[10px] font-black text-white/20 uppercase tracking-widest mb-1">Skill Level</div>
                      <div className="text-xs font-bold text-primary italic uppercase tracking-tighter">{sport.level}</div>
                    </div>
                    <button className="px-6 py-3 bg-white/5 group-hover:bg-primary text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-2xl transition-all shadow-xl group-hover:shadow-primary/40">
                      Find Game
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredSports.length === 0 && (
          <div className="text-center py-20 bg-white/[0.01] rounded-[3rem] border border-dashed border-white/10">
            <div className="text-4xl mb-4 text-white/10">🏟️</div>
            <p className="text-white/20 font-bold tracking-widest uppercase text-xs">No sports found matching your search.</p>
          </div>
        )}
      </div>
    </section>
  );
}
