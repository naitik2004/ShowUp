"use client";

import React from "react";
import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-8 px-6">
      <div className="w-full max-w-6xl glass-pro rounded-full px-8 py-3 flex items-center justify-between border-white/5 backdrop-blur-3xl shadow-2xl">
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 bg-primary flex items-center justify-center rounded-full text-white shadow-lg shadow-primary/20">
            <Trophy size={20} />
          </div>
          <span className="text-xl font-black tracking-tighter text-white uppercase italic">ShowUp</span>
        </Link>

        <div className="hidden md:flex items-center gap-12">
          {["Find Games", "Venues", "Waitlist"].map((item) => (
            <Link 
              key={item} 
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-[10px] font-black uppercase tracking-[0.2em] text-white/40 hover:text-white transition-colors"
            >
              {item}
            </Link>
          ))}
        </div>

        <Link href="/login">
          <motion.button
            whileHover={{ y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white text-black px-6 py-2.5 rounded-full font-black text-[10px] uppercase tracking-widest hover:shadow-xl transition-all"
          >
            Sign In
          </motion.button>
        </Link>
      </div>
    </nav>
  );
}
