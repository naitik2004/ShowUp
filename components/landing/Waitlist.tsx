"use client";

import React from "react";
import { motion } from "framer-motion";

export default function Waitlist() {
  return (
    <section id="waitlist" className="py-40 px-6">
      <div className="max-w-7xl mx-auto relative overflow-hidden rounded-[4rem] border border-white/5 bg-white/[0.02] p-12 md:p-32 text-center">
        {/* Deep Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/10 blur-[160px] rounded-full -z-10" />

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative z-10 max-w-3xl mx-auto"
        >
          <span className="text-primary font-black uppercase tracking-[0.4em] text-[10px] mb-8 block">Limited Access</span>
          <h2 className="text-6xl md:text-9xl font-black text-white mb-12 tracking-tighter leading-none">
            READY TO <br />
            <span className="italic">SHOW UP?</span>
          </h2>
          
          <form className="flex flex-col sm:flex-row gap-4 p-2 glass-pro rounded-full border-white/10 max-w-xl mx-auto">
            <input
              type="email"
              placeholder="ENTER YOUR EMAIL"
              className="flex-1 bg-transparent border-none px-8 py-4 text-white focus:outline-none font-black text-xs tracking-widest"
            />
            <button className="bg-primary text-white px-10 py-4 rounded-full font-black text-xs uppercase tracking-[0.2em] shadow-2xl shadow-primary/40 hover:scale-105 transition-transform">
              Claim Access
            </button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
